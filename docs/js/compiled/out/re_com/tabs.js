// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41558 = arguments.length;
var i__28365__auto___41559 = (0);
while(true){
if((i__28365__auto___41559 < len__28364__auto___41558)){
args__28371__auto__.push((arguments[i__28365__auto___41559]));

var G__41560 = (i__28365__auto___41559 + (1));
i__28365__auto___41559 = G__41560;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41551){
var map__41552 = p__41551;
var map__41552__$1 = ((((!((map__41552 == null)))?((((map__41552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41552):map__41552);
var args = map__41552__$1;
var model = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__41552__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__41549_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__41549_SHARP_));
});})(current,tabs__$1,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__41549#] (= current (id-fn p1__41549#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__28003__auto__ = ((function (current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__41554(s__41555){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__41555__$1 = s__41555;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41555__$1);
if(temp__4657__auto__){
var s__41555__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41555__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__41555__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__41557 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__41556 = (0);
while(true){
if((i__41556 < size__28002__auto__)){
var t = cljs.core._nth.call(null,c__28001__auto__,i__41556);
cljs.core.chunk_append.call(null,b__41557,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__41556,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41557,s__41555__$2,temp__4657__auto__,current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__41556,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41557,s__41555__$2,temp__4657__auto__,current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__41561 = (i__41556 + (1));
i__41556 = G__41561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41557),re_com$tabs$iter__41554.call(null,cljs.core.chunk_rest.call(null,s__41555__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41557),null);
}
} else {
var t = cljs.core.first.call(null,s__41555__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__41555__$2,temp__4657__auto__,current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__41555__$2,temp__4657__auto__,current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__41554.call(null,cljs.core.rest.call(null,s__41555__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__41552,map__41552__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__28003__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq41550){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41550));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41571 = arguments.length;
var i__28365__auto___41572 = (0);
while(true){
if((i__28365__auto___41572 < len__28364__auto___41571)){
args__28371__auto__.push((arguments[i__28365__auto___41572]));

var G__41573 = (i__28365__auto___41572 + (1));
i__28365__auto___41572 = G__41573;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41564){
var map__41565 = p__41564;
var map__41565__$1 = ((((!((map__41565 == null)))?((((map__41565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41565):map__41565);
var model = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__41565__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__41562_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__41562_SHARP_));
});})(current,tabs__$1,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__41562#] (= current (id-fn p1__41562#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__28003__auto__ = ((function (current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__41567(s__41568){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__41568__$1 = s__41568;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41568__$1);
if(temp__4657__auto__){
var s__41568__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41568__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__41568__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__41570 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__41569 = (0);
while(true){
if((i__41569 < size__28002__auto__)){
var t = cljs.core._nth.call(null,c__28001__auto__,i__41569);
cljs.core.chunk_append.call(null,b__41570,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__41569,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41570,s__41568__$2,temp__4657__auto__,current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__41569,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41570,s__41568__$2,temp__4657__auto__,current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__41574 = (i__41569 + (1));
i__41569 = G__41574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41570),re_com$tabs$iter__41567.call(null,cljs.core.chunk_rest.call(null,s__41568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41570),null);
}
} else {
var t = cljs.core.first.call(null,s__41568__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__41568__$2,temp__4657__auto__,current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__41568__$2,temp__4657__auto__,current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__41567.call(null,cljs.core.rest.call(null,s__41568__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__41565,map__41565__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__28003__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq41563){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41563));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41579 = arguments.length;
var i__28365__auto___41580 = (0);
while(true){
if((i__28365__auto___41580 < len__28364__auto___41579)){
args__28371__auto__.push((arguments[i__28365__auto___41580]));

var G__41581 = (i__28365__auto___41580 + (1));
i__28365__auto___41580 = G__41581;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41576){
var map__41577 = p__41576;
var map__41577__$1 = ((((!((map__41577 == null)))?((((map__41577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41577):map__41577);
var args = map__41577__$1;
var model = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq41575){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41575));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41586 = arguments.length;
var i__28365__auto___41587 = (0);
while(true){
if((i__28365__auto___41587 < len__28364__auto___41586)){
args__28371__auto__.push((arguments[i__28365__auto___41587]));

var G__41588 = (i__28365__auto___41587 + (1));
i__28365__auto___41587 = G__41588;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41583){
var map__41584 = p__41583;
var map__41584__$1 = ((((!((map__41584 == null)))?((((map__41584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41584):map__41584);
var args = map__41584__$1;
var model = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__41584__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq41582){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41582));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41598 = arguments.length;
var i__28365__auto___41599 = (0);
while(true){
if((i__28365__auto___41599 < len__28364__auto___41598)){
args__28371__auto__.push((arguments[i__28365__auto___41599]));

var G__41600 = (i__28365__auto___41599 + (1));
i__28365__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41591){
var map__41592 = p__41591;
var map__41592__$1 = ((((!((map__41592 == null)))?((((map__41592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41592):map__41592);
var model = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__41589_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__41589_SHARP_));
});})(current,tabs__$1,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__41589#] (= current (id-fn p1__41589#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__28003__auto__ = ((function (current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__41594(s__41595){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__41595__$1 = s__41595;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41595__$1);
if(temp__4657__auto__){
var s__41595__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41595__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__41595__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__41597 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__41596 = (0);
while(true){
if((i__41596 < size__28002__auto__)){
var t = cljs.core._nth.call(null,c__28001__auto__,i__41596);
cljs.core.chunk_append.call(null,b__41597,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__41596,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41597,s__41595__$2,temp__4657__auto__,current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__41596,id,label,selected_QMARK_,t,c__28001__auto__,size__28002__auto__,b__41597,s__41595__$2,temp__4657__auto__,current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__41601 = (i__41596 + (1));
i__41596 = G__41601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41597),re_com$tabs$iter__41594.call(null,cljs.core.chunk_rest.call(null,s__41595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41597),null);
}
} else {
var t = cljs.core.first.call(null,s__41595__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__41595__$2,temp__4657__auto__,current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__41595__$2,temp__4657__auto__,current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__41594.call(null,cljs.core.rest.call(null,s__41595__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__41592,map__41592__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__28003__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq41590){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41590));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41606 = arguments.length;
var i__28365__auto___41607 = (0);
while(true){
if((i__28365__auto___41607 < len__28364__auto___41606)){
args__28371__auto__.push((arguments[i__28365__auto___41607]));

var G__41608 = (i__28365__auto___41607 + (1));
i__28365__auto___41607 = G__41608;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41603){
var map__41604 = p__41603;
var map__41604__$1 = ((((!((map__41604 == null)))?((((map__41604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41604):map__41604);
var args = map__41604__$1;
var model = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq41602){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41602));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41613 = arguments.length;
var i__28365__auto___41614 = (0);
while(true){
if((i__28365__auto___41614 < len__28364__auto___41613)){
args__28371__auto__.push((arguments[i__28365__auto___41614]));

var G__41615 = (i__28365__auto___41614 + (1));
i__28365__auto___41614 = G__41615;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__41610){
var map__41611 = p__41610;
var map__41611__$1 = ((((!((map__41611 == null)))?((((map__41611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41611):map__41611);
var args = map__41611__$1;
var model = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__41611__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq41609){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41609));
});


//# sourceMappingURL=tabs.js.map?rel=1516093612763
