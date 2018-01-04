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
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._header[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._header["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
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
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._has_body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
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
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
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
var o42423 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42423["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42424 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42424["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42425 = temp__4655__auto____$2;
return (o42425["make_template"]);
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
var o42426 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42426["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42427 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42427["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42428 = temp__4655__auto____$2;
return (o42428["make_group"]);
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
var o42429 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42429["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42430 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42430["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42431 = temp__4655__auto____$2;
return (o42431["make_reference"]);
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
var o42432 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42432["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42433 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42433["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42434 = temp__4655__auto____$2;
return (o42434["make_surrogate"]);
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
var o42435 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42435["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42436 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42436["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42437 = temp__4655__auto____$2;
return (o42437["render_markup"]);
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
var o42438 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42438["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42439 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42439["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42440 = temp__4655__auto____$2;
return (o42440["_LT_header_GT_"]);
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
var o42441 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42441["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42442 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42442["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42443 = temp__4655__auto____$2;
return (o42443["_LT_standard_body_GT_"]);
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
var args__28371__auto__ = [];
var len__28364__auto___42445 = arguments.length;
var i__28365__auto___42446 = (0);
while(true){
if((i__28365__auto___42446 < len__28364__auto___42445)){
args__28371__auto__.push((arguments[i__28365__auto___42446]));

var G__42447 = (i__28365__auto___42446 + (1));
i__28365__auto___42446 = G__42447;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42444){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42444));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42449 = arguments.length;
var i__28365__auto___42450 = (0);
while(true){
if((i__28365__auto___42450 < len__28364__auto___42449)){
args__28371__auto__.push((arguments[i__28365__auto___42450]));

var G__42451 = (i__28365__auto___42450 + (1));
i__28365__auto___42450 = G__42451;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42448){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42448));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42453 = arguments.length;
var i__28365__auto___42454 = (0);
while(true){
if((i__28365__auto___42454 < len__28364__auto___42453)){
args__28371__auto__.push((arguments[i__28365__auto___42454]));

var G__42455 = (i__28365__auto___42454 + (1));
i__28365__auto___42454 = G__42455;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq42452){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42452));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42457 = arguments.length;
var i__28365__auto___42458 = (0);
while(true){
if((i__28365__auto___42458 < len__28364__auto___42457)){
args__28371__auto__.push((arguments[i__28365__auto___42458]));

var G__42459 = (i__28365__auto___42458 + (1));
i__28365__auto___42458 = G__42459;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42456){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42456));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42461 = arguments.length;
var i__28365__auto___42462 = (0);
while(true){
if((i__28365__auto___42462 < len__28364__auto___42461)){
args__28371__auto__.push((arguments[i__28365__auto___42462]));

var G__42463 = (i__28365__auto___42462 + (1));
i__28365__auto___42462 = G__42463;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq42460){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42460));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42465 = arguments.length;
var i__28365__auto___42466 = (0);
while(true){
if((i__28365__auto___42466 < len__28364__auto___42465)){
args__28371__auto__.push((arguments[i__28365__auto___42466]));

var G__42467 = (i__28365__auto___42466 + (1));
i__28365__auto___42466 = G__42467;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq42464){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42464));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42469 = arguments.length;
var i__28365__auto___42470 = (0);
while(true){
if((i__28365__auto___42470 < len__28364__auto___42469)){
args__28371__auto__.push((arguments[i__28365__auto___42470]));

var G__42471 = (i__28365__auto___42470 + (1));
i__28365__auto___42470 = G__42471;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42468){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42468));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42479 = arguments.length;
var i__28365__auto___42480 = (0);
while(true){
if((i__28365__auto___42480 < len__28364__auto___42479)){
args__28371__auto__.push((arguments[i__28365__auto___42480]));

var G__42481 = (i__28365__auto___42480 + (1));
i__28365__auto___42480 = G__42481;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42475){
var vec__42476 = p__42475;
var state_override = cljs.core.nth.call(null,vec__42476,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42476,state_override){
return (function (p1__42472_SHARP_){
return cljs.core.merge.call(null,p1__42472_SHARP_,state_override);
});})(vec__42476,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42473){
var G__42474 = cljs.core.first.call(null,seq42473);
var seq42473__$1 = cljs.core.next.call(null,seq42473);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42474,seq42473__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42483 = arguments.length;
var i__28365__auto___42484 = (0);
while(true){
if((i__28365__auto___42484 < len__28364__auto___42483)){
args__28371__auto__.push((arguments[i__28365__auto___42484]));

var G__42485 = (i__28365__auto___42484 + (1));
i__28365__auto___42484 = G__42485;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq42482){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42482));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42488 = arguments.length;
var i__28365__auto___42489 = (0);
while(true){
if((i__28365__auto___42489 < len__28364__auto___42488)){
args__28371__auto__.push((arguments[i__28365__auto___42489]));

var G__42490 = (i__28365__auto___42489 + (1));
i__28365__auto___42489 = G__42490;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42486){
var G__42487 = cljs.core.first.call(null,seq42486);
var seq42486__$1 = cljs.core.next.call(null,seq42486);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42487,seq42486__$1);
});


//# sourceMappingURL=format.js.map?rel=1515054946800
