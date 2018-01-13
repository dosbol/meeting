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
var o42443 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42443["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42444 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42444["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42445 = temp__4655__auto____$2;
return (o42445["make_template"]);
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
var o42446 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42446["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42447 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42447["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42448 = temp__4655__auto____$2;
return (o42448["make_group"]);
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
var o42449 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42449["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42450 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42450["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42451 = temp__4655__auto____$2;
return (o42451["make_reference"]);
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
var o42452 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42452["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42453 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42453["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42454 = temp__4655__auto____$2;
return (o42454["make_surrogate"]);
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
var o42455 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42455["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42456 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42456["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42457 = temp__4655__auto____$2;
return (o42457["render_markup"]);
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
var o42458 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42458["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42459 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42459["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42460 = temp__4655__auto____$2;
return (o42460["_LT_header_GT_"]);
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
var o42461 = temp__4655__auto__;
var temp__4655__auto____$1 = (o42461["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o42462 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o42462["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o42463 = temp__4655__auto____$2;
return (o42463["_LT_standard_body_GT_"]);
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
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42464){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42464));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
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
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42468){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42468));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42473 = arguments.length;
var i__28365__auto___42474 = (0);
while(true){
if((i__28365__auto___42474 < len__28364__auto___42473)){
args__28371__auto__.push((arguments[i__28365__auto___42474]));

var G__42475 = (i__28365__auto___42474 + (1));
i__28365__auto___42474 = G__42475;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq42472){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42472));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42477 = arguments.length;
var i__28365__auto___42478 = (0);
while(true){
if((i__28365__auto___42478 < len__28364__auto___42477)){
args__28371__auto__.push((arguments[i__28365__auto___42478]));

var G__42479 = (i__28365__auto___42478 + (1));
i__28365__auto___42478 = G__42479;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42476){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42476));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42481 = arguments.length;
var i__28365__auto___42482 = (0);
while(true){
if((i__28365__auto___42482 < len__28364__auto___42481)){
args__28371__auto__.push((arguments[i__28365__auto___42482]));

var G__42483 = (i__28365__auto___42482 + (1));
i__28365__auto___42482 = G__42483;
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

devtools.format.template.cljs$lang$applyTo = (function (seq42480){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42480));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42485 = arguments.length;
var i__28365__auto___42486 = (0);
while(true){
if((i__28365__auto___42486 < len__28364__auto___42485)){
args__28371__auto__.push((arguments[i__28365__auto___42486]));

var G__42487 = (i__28365__auto___42486 + (1));
i__28365__auto___42486 = G__42487;
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

devtools.format.group.cljs$lang$applyTo = (function (seq42484){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42484));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42489 = arguments.length;
var i__28365__auto___42490 = (0);
while(true){
if((i__28365__auto___42490 < len__28364__auto___42489)){
args__28371__auto__.push((arguments[i__28365__auto___42490]));

var G__42491 = (i__28365__auto___42490 + (1));
i__28365__auto___42490 = G__42491;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42488){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42488));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42499 = arguments.length;
var i__28365__auto___42500 = (0);
while(true){
if((i__28365__auto___42500 < len__28364__auto___42499)){
args__28371__auto__.push((arguments[i__28365__auto___42500]));

var G__42501 = (i__28365__auto___42500 + (1));
i__28365__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42495){
var vec__42496 = p__42495;
var state_override = cljs.core.nth.call(null,vec__42496,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42496,state_override){
return (function (p1__42492_SHARP_){
return cljs.core.merge.call(null,p1__42492_SHARP_,state_override);
});})(vec__42496,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42493){
var G__42494 = cljs.core.first.call(null,seq42493);
var seq42493__$1 = cljs.core.next.call(null,seq42493);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42494,seq42493__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42503 = arguments.length;
var i__28365__auto___42504 = (0);
while(true){
if((i__28365__auto___42504 < len__28364__auto___42503)){
args__28371__auto__.push((arguments[i__28365__auto___42504]));

var G__42505 = (i__28365__auto___42504 + (1));
i__28365__auto___42504 = G__42505;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq42502){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42502));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42508 = arguments.length;
var i__28365__auto___42509 = (0);
while(true){
if((i__28365__auto___42509 < len__28364__auto___42508)){
args__28371__auto__.push((arguments[i__28365__auto___42509]));

var G__42510 = (i__28365__auto___42509 + (1));
i__28365__auto___42509 = G__42510;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42506){
var G__42507 = cljs.core.first.call(null,seq42506);
var seq42506__$1 = cljs.core.next.call(null,seq42506);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42507,seq42506__$1);
});


//# sourceMappingURL=format.js.map?rel=1515855043469
