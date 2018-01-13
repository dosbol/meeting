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
var x44532_44533 = value;
x44532_44533.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x44535_44536 = value;
x44535_44536.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x44538_44539 = value;
x44538_44539.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__27183__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27183__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___44546 = arguments.length;
var i__28365__auto___44547 = (0);
while(true){
if((i__28365__auto___44547 < len__28364__auto___44546)){
args__28371__auto__.push((arguments[i__28365__auto___44547]));

var G__44548 = (i__28365__auto___44547 + (1));
i__28365__auto___44547 = G__44548;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__44542_44549 = cljs.core.seq.call(null,items);
var chunk__44543_44550 = null;
var count__44544_44551 = (0);
var i__44545_44552 = (0);
while(true){
if((i__44545_44552 < count__44544_44551)){
var item_44553 = cljs.core._nth.call(null,chunk__44543_44550,i__44545_44552);
if(!((item_44553 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44553)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44553)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44553));
}
} else {
}

var G__44554 = seq__44542_44549;
var G__44555 = chunk__44543_44550;
var G__44556 = count__44544_44551;
var G__44557 = (i__44545_44552 + (1));
seq__44542_44549 = G__44554;
chunk__44543_44550 = G__44555;
count__44544_44551 = G__44556;
i__44545_44552 = G__44557;
continue;
} else {
var temp__4657__auto___44558 = cljs.core.seq.call(null,seq__44542_44549);
if(temp__4657__auto___44558){
var seq__44542_44559__$1 = temp__4657__auto___44558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44542_44559__$1)){
var c__28034__auto___44560 = cljs.core.chunk_first.call(null,seq__44542_44559__$1);
var G__44561 = cljs.core.chunk_rest.call(null,seq__44542_44559__$1);
var G__44562 = c__28034__auto___44560;
var G__44563 = cljs.core.count.call(null,c__28034__auto___44560);
var G__44564 = (0);
seq__44542_44549 = G__44561;
chunk__44543_44550 = G__44562;
count__44544_44551 = G__44563;
i__44545_44552 = G__44564;
continue;
} else {
var item_44565 = cljs.core.first.call(null,seq__44542_44559__$1);
if(!((item_44565 == null))){
if(cljs.core.coll_QMARK_.call(null,item_44565)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_44565)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_44565));
}
} else {
}

var G__44566 = cljs.core.next.call(null,seq__44542_44559__$1);
var G__44567 = null;
var G__44568 = (0);
var G__44569 = (0);
seq__44542_44549 = G__44566;
chunk__44543_44550 = G__44567;
count__44544_44551 = G__44568;
i__44545_44552 = G__44569;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq44541){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44541));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___44577 = arguments.length;
var i__28365__auto___44578 = (0);
while(true){
if((i__28365__auto___44578 < len__28364__auto___44577)){
args__28371__auto__.push((arguments[i__28365__auto___44578]));

var G__44579 = (i__28365__auto___44578 + (1));
i__28365__auto___44578 = G__44579;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__44573_44580 = cljs.core.seq.call(null,children);
var chunk__44574_44581 = null;
var count__44575_44582 = (0);
var i__44576_44583 = (0);
while(true){
if((i__44576_44583 < count__44575_44582)){
var child_44584 = cljs.core._nth.call(null,chunk__44574_44581,i__44576_44583);
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

var G__44587 = seq__44573_44580;
var G__44588 = chunk__44574_44581;
var G__44589 = count__44575_44582;
var G__44590 = (i__44576_44583 + (1));
seq__44573_44580 = G__44587;
chunk__44574_44581 = G__44588;
count__44575_44582 = G__44589;
i__44576_44583 = G__44590;
continue;
} else {
var temp__4657__auto___44591 = cljs.core.seq.call(null,seq__44573_44580);
if(temp__4657__auto___44591){
var seq__44573_44592__$1 = temp__4657__auto___44591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44573_44592__$1)){
var c__28034__auto___44593 = cljs.core.chunk_first.call(null,seq__44573_44592__$1);
var G__44594 = cljs.core.chunk_rest.call(null,seq__44573_44592__$1);
var G__44595 = c__28034__auto___44593;
var G__44596 = cljs.core.count.call(null,c__28034__auto___44593);
var G__44597 = (0);
seq__44573_44580 = G__44594;
chunk__44574_44581 = G__44595;
count__44575_44582 = G__44596;
i__44576_44583 = G__44597;
continue;
} else {
var child_44598 = cljs.core.first.call(null,seq__44573_44592__$1);
if(!((child_44598 == null))){
if(cljs.core.coll_QMARK_.call(null,child_44598)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_44598))));
} else {
var temp__4655__auto___44599 = devtools.formatters.helpers.pref.call(null,child_44598);
if(cljs.core.truth_(temp__4655__auto___44599)){
var child_value_44600 = temp__4655__auto___44599;
template.push(child_value_44600);
} else {
}
}
} else {
}

var G__44601 = cljs.core.next.call(null,seq__44573_44592__$1);
var G__44602 = null;
var G__44603 = (0);
var G__44604 = (0);
seq__44573_44580 = G__44601;
chunk__44574_44581 = G__44602;
count__44575_44582 = G__44603;
i__44576_44583 = G__44604;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq44570){
var G__44571 = cljs.core.first.call(null,seq44570);
var seq44570__$1 = cljs.core.next.call(null,seq44570);
var G__44572 = cljs.core.first.call(null,seq44570__$1);
var seq44570__$2 = cljs.core.next.call(null,seq44570__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__44571,G__44572,seq44570__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___44607 = arguments.length;
var i__28365__auto___44608 = (0);
while(true){
if((i__28365__auto___44608 < len__28364__auto___44607)){
args__28371__auto__.push((arguments[i__28365__auto___44608]));

var G__44609 = (i__28365__auto___44608 + (1));
i__28365__auto___44608 = G__44609;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq44605){
var G__44606 = cljs.core.first.call(null,seq44605);
var seq44605__$1 = cljs.core.next.call(null,seq44605);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44606,seq44605__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___44612 = arguments.length;
var i__28365__auto___44613 = (0);
while(true){
if((i__28365__auto___44613 < len__28364__auto___44612)){
args__28371__auto__.push((arguments[i__28365__auto___44613]));

var G__44614 = (i__28365__auto___44613 + (1));
i__28365__auto___44613 = G__44614;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq44610){
var G__44611 = cljs.core.first.call(null,seq44610);
var seq44610__$1 = cljs.core.next.call(null,seq44610);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44611,seq44610__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__44616 = arguments.length;
switch (G__44616) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj44618 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27195__auto__ = start_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})()};
return obj44618;
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
var args__28371__auto__ = [];
var len__28364__auto___44626 = arguments.length;
var i__28365__auto___44627 = (0);
while(true){
if((i__28365__auto___44627 < len__28364__auto___44626)){
args__28371__auto__.push((arguments[i__28365__auto___44627]));

var G__44628 = (i__28365__auto___44627 + (1));
i__28365__auto___44627 = G__44628;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44622){
var vec__44623 = p__44622;
var state_override_fn = cljs.core.nth.call(null,vec__44623,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq44620){
var G__44621 = cljs.core.first.call(null,seq44620);
var seq44620__$1 = cljs.core.next.call(null,seq44620);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__44621,seq44620__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_44629 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_44629;
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
var G__44630 = name;
switch (G__44630) {
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
var vec__44632 = tag;
var html_tag = cljs.core.nth.call(null,vec__44632,(0),null);
var style = cljs.core.nth.call(null,vec__44632,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_44635 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44635;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_44636 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_44637 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_44637;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_44636;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__44638 = initial_value;
var G__44639 = value.call(null);
initial_value = G__44638;
value = G__44639;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__44640 = initial_value;
var G__44641 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__44640;
value = G__44641;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__44642 = initial_value;
var G__44643 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__44642;
value = G__44643;
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

//# sourceMappingURL=templating.js.map?rel=1515855053937
