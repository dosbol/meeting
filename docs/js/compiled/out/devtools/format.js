// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27879__auto__ = (((value == null))?null:value);
var m__27880__auto__ = (devtools.format._header[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,value);
} else {
var m__27880__auto____$1 = (devtools.format._header["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27879__auto__ = (((value == null))?null:value);
var m__27880__auto__ = (devtools.format._has_body[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,value);
} else {
var m__27880__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27879__auto__ = (((value == null))?null:value);
var m__27880__auto__ = (devtools.format._body[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,value);
} else {
var m__27880__auto____$1 = (devtools.format._body["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42425 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42425["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42426 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42426["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42427 = temp__4655__auto____$2;
return (o42427["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42428 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42428["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42429 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42429["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42430 = temp__4655__auto____$2;
return (o42430["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42431 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42431["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42432 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42432["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42433 = temp__4655__auto____$2;
return (o42433["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42434 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42434["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42435 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42435["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42436 = temp__4655__auto____$2;
return (o42436["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42437 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42437["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42438 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42438["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42439 = temp__4655__auto____$2;
return (o42439["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42440 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42440["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42441 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42441["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42442 = temp__4655__auto____$2;
return (o42442["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o42443 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42443["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42444 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42444["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42445 = temp__4655__auto____$2;
return (o42445["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42447 = arguments.length;
var i__28366__auto___42448 = (0);
while(true){
if((i__28366__auto___42448 < len__28365__auto___42447)){
args__28372__auto__.push((arguments[i__28366__auto___42448]));

var G__42449 = (i__28366__auto___42448 + (1));
i__28366__auto___42448 = G__42449;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42446){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42446));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42451 = arguments.length;
var i__28366__auto___42452 = (0);
while(true){
if((i__28366__auto___42452 < len__28365__auto___42451)){
args__28372__auto__.push((arguments[i__28366__auto___42452]));

var G__42453 = (i__28366__auto___42452 + (1));
i__28366__auto___42452 = G__42453;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42450){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42450));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42455 = arguments.length;
var i__28366__auto___42456 = (0);
while(true){
if((i__28366__auto___42456 < len__28365__auto___42455)){
args__28372__auto__.push((arguments[i__28366__auto___42456]));

var G__42457 = (i__28366__auto___42456 + (1));
i__28366__auto___42456 = G__42457;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq42454){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42454));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42459 = arguments.length;
var i__28366__auto___42460 = (0);
while(true){
if((i__28366__auto___42460 < len__28365__auto___42459)){
args__28372__auto__.push((arguments[i__28366__auto___42460]));

var G__42461 = (i__28366__auto___42460 + (1));
i__28366__auto___42460 = G__42461;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42458){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42458));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42463 = arguments.length;
var i__28366__auto___42464 = (0);
while(true){
if((i__28366__auto___42464 < len__28365__auto___42463)){
args__28372__auto__.push((arguments[i__28366__auto___42464]));

var G__42465 = (i__28366__auto___42464 + (1));
i__28366__auto___42464 = G__42465;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq42462){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42462));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42467 = arguments.length;
var i__28366__auto___42468 = (0);
while(true){
if((i__28366__auto___42468 < len__28365__auto___42467)){
args__28372__auto__.push((arguments[i__28366__auto___42468]));

var G__42469 = (i__28366__auto___42468 + (1));
i__28366__auto___42468 = G__42469;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq42466){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42466));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42471 = arguments.length;
var i__28366__auto___42472 = (0);
while(true){
if((i__28366__auto___42472 < len__28365__auto___42471)){
args__28372__auto__.push((arguments[i__28366__auto___42472]));

var G__42473 = (i__28366__auto___42472 + (1));
i__28366__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42470){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42470));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42481 = arguments.length;
var i__28366__auto___42482 = (0);
while(true){
if((i__28366__auto___42482 < len__28365__auto___42481)){
args__28372__auto__.push((arguments[i__28366__auto___42482]));

var G__42483 = (i__28366__auto___42482 + (1));
i__28366__auto___42482 = G__42483;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((1) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28373__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42477){
var vec__42478 = p__42477;
var state_override = cljs.core.nth.call(null,vec__42478,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42478,state_override){
return (function (p1__42474_SHARP_){
return cljs.core.merge.call(null,p1__42474_SHARP_,state_override);
});})(vec__42478,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42475){
var G__42476 = cljs.core.first.call(null,seq42475);
var seq42475__$1 = cljs.core.next.call(null,seq42475);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42476,seq42475__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42485 = arguments.length;
var i__28366__auto___42486 = (0);
while(true){
if((i__28366__auto___42486 < len__28365__auto___42485)){
args__28372__auto__.push((arguments[i__28366__auto___42486]));

var G__42487 = (i__28366__auto___42486 + (1));
i__28366__auto___42486 = G__42487;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq42484){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42484));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28372__auto__ = [];
var len__28365__auto___42490 = arguments.length;
var i__28366__auto___42491 = (0);
while(true){
if((i__28366__auto___42491 < len__28365__auto___42490)){
args__28372__auto__.push((arguments[i__28366__auto___42491]));

var G__42492 = (i__28366__auto___42491 + (1));
i__28366__auto___42491 = G__42492;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((1) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28373__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42488){
var G__42489 = cljs.core.first.call(null,seq42488);
var seq42488__$1 = cljs.core.next.call(null,seq42488);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42489,seq42488__$1);
});


//# sourceMappingURL=format.js.map?rel=1514660183454
