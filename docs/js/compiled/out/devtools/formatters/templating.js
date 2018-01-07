// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x44518_44519 = value;
x44518_44519.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x44521_44522 = value;
x44521_44522.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x44524_44525 = value;
x44524_44525.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27184__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27184__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27184__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28373__auto__ = [];
var len__28366__auto___44532 = arguments.length;
var i__28367__auto___44533 = (0);
while(true){
if((i__28367__auto___44533 < len__28366__auto___44532)){
args__28373__auto__.push((arguments[i__28367__auto___44533]));

var G__44534 = (i__28367__auto___44533 + (1));
i__28367__auto___44533 = G__44534;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((0) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28374__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__44528_44535 = cljs.core.seq.call(null,items);
var chunk__44529_44536 = null;
var count__44530_44537 = (0);
var i__44531_44538 = (0);
while(true){
if((i__44531_44538 < count__44530_44537)){
var item_44539 = cljs.core._nth.call(null,chunk__44529_44536,i__44531_44538);
if(!((item_44539 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44539)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44539)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44539));
}
} else {
}

var G__44540 = seq__44528_44535;
var G__44541 = chunk__44529_44536;
var G__44542 = count__44530_44537;
var G__44543 = (i__44531_44538 + (1));
seq__44528_44535 = G__44540;
chunk__44529_44536 = G__44541;
count__44530_44537 = G__44542;
i__44531_44538 = G__44543;
continue;
} else {
var temp__4657__auto___44544 = cljs.core.seq.call(null,seq__44528_44535);
if(temp__4657__auto___44544){
var seq__44528_44545__$1 = temp__4657__auto___44544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44528_44545__$1)){
var c__28035__auto___44546 = cljs.core.chunk_first.call(null,seq__44528_44545__$1);
var G__44547 = cljs.core.chunk_rest.call(null,seq__44528_44545__$1);
var G__44548 = c__28035__auto___44546;
var G__44549 = cljs.core.count.call(null,c__28035__auto___44546);
var G__44550 = (0);
seq__44528_44535 = G__44547;
chunk__44529_44536 = G__44548;
count__44530_44537 = G__44549;
i__44531_44538 = G__44550;
continue;
} else {
var item_44551 = cljs.core.first.call(null,seq__44528_44545__$1);
if(!((item_44551 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44551)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44551)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44551));
}
} else {
}

var G__44552 = cljs.core.next.call(null,seq__44528_44545__$1);
var G__44553 = null;
var G__44554 = (0);
var G__44555 = (0);
seq__44528_44535 = G__44552;
chunk__44529_44536 = G__44553;
count__44530_44537 = G__44554;
i__44531_44538 = G__44555;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq44527){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44527));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28373__auto__ = [];
var len__28366__auto___44563 = arguments.length;
var i__28367__auto___44564 = (0);
while(true){
if((i__28367__auto___44564 < len__28366__auto___44563)){
args__28373__auto__.push((arguments[i__28367__auto___44564]));

var G__44565 = (i__28367__auto___44564 + (1));
i__28367__auto___44564 = G__44565;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((2) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28374__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__44559_44566 = cljs.core.seq.call(null,children);
var chunk__44560_44567 = null;
var count__44561_44568 = (0);
var i__44562_44569 = (0);
while(true){
if((i__44562_44569 < count__44561_44568)){
var child_44570 = cljs.core._nth.call(null,chunk__44560_44567,i__44562_44569);
if(!((child_44570 == null))){
if(cljs.core.coll_QMARK_.call(null,child_44570)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44570))));
} else {
var temp__4655__auto___44571 = devtools.formatters.helpers.pref.call(null,child_44570);
if(cljs.core.truth_(temp__4655__auto___44571)){
var child_value_44572 = temp__4655__auto___44571;
template.push(child_value_44572);
} else {
}
}
} else {
}

var G__44573 = seq__44559_44566;
var G__44574 = chunk__44560_44567;
var G__44575 = count__44561_44568;
var G__44576 = (i__44562_44569 + (1));
seq__44559_44566 = G__44573;
chunk__44560_44567 = G__44574;
count__44561_44568 = G__44575;
i__44562_44569 = G__44576;
continue;
} else {
var temp__4657__auto___44577 = cljs.core.seq.call(null,seq__44559_44566);
if(temp__4657__auto___44577){
var seq__44559_44578__$1 = temp__4657__auto___44577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44559_44578__$1)){
var c__28035__auto___44579 = cljs.core.chunk_first.call(null,seq__44559_44578__$1);
var G__44580 = cljs.core.chunk_rest.call(null,seq__44559_44578__$1);
var G__44581 = c__28035__auto___44579;
var G__44582 = cljs.core.count.call(null,c__28035__auto___44579);
var G__44583 = (0);
seq__44559_44566 = G__44580;
chunk__44560_44567 = G__44581;
count__44561_44568 = G__44582;
i__44562_44569 = G__44583;
continue;
} else {
var child_44584 = cljs.core.first.call(null,seq__44559_44578__$1);
if(!((child_44584 == null))){
if(cljs.core.coll_QMARK_.call(null,child_44584)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44584))));
} else {
var temp__4655__auto___44585 = devtools.formatters.helpers.pref.call(null,child_44584);
if(cljs.core.truth_(temp__4655__auto___44585)){
var child_value_44586 = temp__4655__auto___44585;
template.push(child_value_44586);
} else {
}
}
} else {
}

var G__44587 = cljs.core.next.call(null,seq__44559_44578__$1);
var G__44588 = null;
var G__44589 = (0);
var G__44590 = (0);
seq__44559_44566 = G__44587;
chunk__44560_44567 = G__44588;
count__44561_44568 = G__44589;
i__44562_44569 = G__44590;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq44556){
var G__44557 = cljs.core.first.call(null,seq44556);
var seq44556__$1 = cljs.core.next.call(null,seq44556);
var G__44558 = cljs.core.first.call(null,seq44556__$1);
var seq44556__$2 = cljs.core.next.call(null,seq44556__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__44557,G__44558,seq44556__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28373__auto__ = [];
var len__28366__auto___44593 = arguments.length;
var i__28367__auto___44594 = (0);
while(true){
if((i__28367__auto___44594 < len__28366__auto___44593)){
args__28373__auto__.push((arguments[i__28367__auto___44594]));

var G__44595 = (i__28367__auto___44594 + (1));
i__28367__auto___44594 = G__44595;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((1) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28374__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq44591){
var G__44592 = cljs.core.first.call(null,seq44591);
var seq44591__$1 = cljs.core.next.call(null,seq44591);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44592,seq44591__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28373__auto__ = [];
var len__28366__auto___44598 = arguments.length;
var i__28367__auto___44599 = (0);
while(true){
if((i__28367__auto___44599 < len__28366__auto___44598)){
args__28373__auto__.push((arguments[i__28367__auto___44599]));

var G__44600 = (i__28367__auto___44599 + (1));
i__28367__auto___44599 = G__44600;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((1) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28374__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq44596){
var G__44597 = cljs.core.first.call(null,seq44596);
var seq44596__$1 = cljs.core.next.call(null,seq44596);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44597,seq44596__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__44602 = arguments.length;
switch (G__44602) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj44604 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27196__auto__ = start_index;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return (0);
}
})()};
return obj44604;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28373__auto__ = [];
var len__28366__auto___44612 = arguments.length;
var i__28367__auto___44613 = (0);
while(true){
if((i__28367__auto___44613 < len__28366__auto___44612)){
args__28373__auto__.push((arguments[i__28367__auto___44613]));

var G__44614 = (i__28367__auto___44613 + (1));
i__28367__auto___44613 = G__44614;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((1) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28374__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44608){
var vec__44609 = p__44608;
var state_override_fn = cljs.core.nth.call(null,vec__44609,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq44606){
var G__44607 = cljs.core.first.call(null,seq44606);
var seq44606__$1 = cljs.core.next.call(null,seq44606);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__44607,seq44606__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_44615 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_44615;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__44616 = name;
switch (G__44616) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__44618 = tag;
var html_tag = cljs.core.nth.call(null,vec__44618,(0),null);
var style = cljs.core.nth.call(null,vec__44618,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_44621 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44621;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_44622 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_44623 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44623;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_44622;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__44624 = initial_value;
var G__44625 = value.call(null);
initial_value = G__44624;
value = G__44625;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__44626 = initial_value;
var G__44627 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__44626;
value = G__44627;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__44628 = initial_value;
var G__44629 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__44628;
value = G__44629;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1515350542223
