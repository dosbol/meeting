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
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._header[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._header["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
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
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._has_body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
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
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
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
var o38604 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38604["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38605 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38605["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38606 = temp__4655__auto____$2;
return (o38606["make_template"]);
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
var o38607 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38607["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38608 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38608["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38609 = temp__4655__auto____$2;
return (o38609["make_group"]);
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
var o38610 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38610["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38611 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38611["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38612 = temp__4655__auto____$2;
return (o38612["make_reference"]);
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
var o38613 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38613["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38614 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38614["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38615 = temp__4655__auto____$2;
return (o38615["make_surrogate"]);
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
var o38616 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38616["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38617 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38617["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38618 = temp__4655__auto____$2;
return (o38618["render_markup"]);
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
var o38619 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38619["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38620 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38620["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38621 = temp__4655__auto____$2;
return (o38621["_LT_header_GT_"]);
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
var o38622 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38622["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38623 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38623["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38624 = temp__4655__auto____$2;
return (o38624["_LT_standard_body_GT_"]);
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
var args__29462__auto__ = [];
var len__29455__auto___38626 = arguments.length;
var i__29456__auto___38627 = (0);
while(true){
if((i__29456__auto___38627 < len__29455__auto___38626)){
args__29462__auto__.push((arguments[i__29456__auto___38627]));

var G__38628 = (i__29456__auto___38627 + (1));
i__29456__auto___38627 = G__38628;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38625){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38625));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38630 = arguments.length;
var i__29456__auto___38631 = (0);
while(true){
if((i__29456__auto___38631 < len__29455__auto___38630)){
args__29462__auto__.push((arguments[i__29456__auto___38631]));

var G__38632 = (i__29456__auto___38631 + (1));
i__29456__auto___38631 = G__38632;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38629){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38629));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38634 = arguments.length;
var i__29456__auto___38635 = (0);
while(true){
if((i__29456__auto___38635 < len__29455__auto___38634)){
args__29462__auto__.push((arguments[i__29456__auto___38635]));

var G__38636 = (i__29456__auto___38635 + (1));
i__29456__auto___38635 = G__38636;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38633){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38633));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38638 = arguments.length;
var i__29456__auto___38639 = (0);
while(true){
if((i__29456__auto___38639 < len__29455__auto___38638)){
args__29462__auto__.push((arguments[i__29456__auto___38639]));

var G__38640 = (i__29456__auto___38639 + (1));
i__29456__auto___38639 = G__38640;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38637){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38637));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38642 = arguments.length;
var i__29456__auto___38643 = (0);
while(true){
if((i__29456__auto___38643 < len__29455__auto___38642)){
args__29462__auto__.push((arguments[i__29456__auto___38643]));

var G__38644 = (i__29456__auto___38643 + (1));
i__29456__auto___38643 = G__38644;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38641){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38641));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38646 = arguments.length;
var i__29456__auto___38647 = (0);
while(true){
if((i__29456__auto___38647 < len__29455__auto___38646)){
args__29462__auto__.push((arguments[i__29456__auto___38647]));

var G__38648 = (i__29456__auto___38647 + (1));
i__29456__auto___38647 = G__38648;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38645){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38645));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38650 = arguments.length;
var i__29456__auto___38651 = (0);
while(true){
if((i__29456__auto___38651 < len__29455__auto___38650)){
args__29462__auto__.push((arguments[i__29456__auto___38651]));

var G__38652 = (i__29456__auto___38651 + (1));
i__29456__auto___38651 = G__38652;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38649){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38649));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38660 = arguments.length;
var i__29456__auto___38661 = (0);
while(true){
if((i__29456__auto___38661 < len__29455__auto___38660)){
args__29462__auto__.push((arguments[i__29456__auto___38661]));

var G__38662 = (i__29456__auto___38661 + (1));
i__29456__auto___38661 = G__38662;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38656){
var vec__38657 = p__38656;
var state_override = cljs.core.nth.call(null,vec__38657,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38657,state_override){
return (function (p1__38653_SHARP_){
return cljs.core.merge.call(null,p1__38653_SHARP_,state_override);
});})(vec__38657,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38654){
var G__38655 = cljs.core.first.call(null,seq38654);
var seq38654__$1 = cljs.core.next.call(null,seq38654);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38655,seq38654__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38664 = arguments.length;
var i__29456__auto___38665 = (0);
while(true){
if((i__29456__auto___38665 < len__29455__auto___38664)){
args__29462__auto__.push((arguments[i__29456__auto___38665]));

var G__38666 = (i__29456__auto___38665 + (1));
i__29456__auto___38665 = G__38666;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38663){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38663));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38669 = arguments.length;
var i__29456__auto___38670 = (0);
while(true){
if((i__29456__auto___38670 < len__29455__auto___38669)){
args__29462__auto__.push((arguments[i__29456__auto___38670]));

var G__38671 = (i__29456__auto___38670 + (1));
i__29456__auto___38670 = G__38671;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38667){
var G__38668 = cljs.core.first.call(null,seq38667);
var seq38667__$1 = cljs.core.next.call(null,seq38667);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38668,seq38667__$1);
});


//# sourceMappingURL=format.js.map?rel=1512672372086
