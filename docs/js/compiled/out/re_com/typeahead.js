// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__43713){
var map__43714 = p__43713;
var map__43714__$1 = ((((!((map__43714 == null)))?((((map__43714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43714):map__43714);
var args = map__43714__$1;
var on_change = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__43714__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__43716 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28286__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__43716,external_model_value);
} else {
return G__43716;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__43717,event){
var map__43718 = p__43717;
var map__43718__$1 = ((((!((map__43718 == null)))?((((map__43718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43718):map__43718);
var state = map__43718__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43718__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__43718__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__43720 = event;
var G__43720__$1 = (((G__43720 instanceof cljs.core.Keyword))?G__43720.fqn:null);
switch (G__43720__$1) {
case "input-text-blurred":
var and__28274__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__28274__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__28286__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43720__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__43722,event){
var map__43723 = p__43722;
var map__43723__$1 = ((((!((map__43723 == null)))?((((map__43723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43723):map__43723);
var state = map__43723__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43723__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__43725 = event;
var G__43725__$1 = (((G__43725 instanceof cljs.core.Keyword))?G__43725.fqn:null);
switch (G__43725__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__43727,new_value){
var map__43728 = p__43727;
var map__43728__$1 = ((((!((map__43728 == null)))?((((map__43728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43728):map__43728);
var state = map__43728__$1;
var on_change = cljs.core.get.call(null,map__43728__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__43730,suggestion){
var map__43731 = p__43730;
var map__43731__$1 = ((((!((map__43731 == null)))?((((map__43731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43731):map__43731);
var state = map__43731__$1;
var suggestion_to_string = cljs.core.get.call(null,map__43731__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__43733 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__43733,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__43733;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__43734,index){
var map__43735 = p__43734;
var map__43735__$1 = ((((!((map__43735 == null)))?((((map__43735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43735):map__43735);
var state = map__43735__$1;
var suggestions = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__43737 = state;
var G__43737__$1 = cljs.core.assoc.call(null,G__43737,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__43737__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__43737__$1,suggestion):G__43737__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__43737__$2,suggestion);
} else {
return G__43737__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__43738,index){
var map__43739 = p__43738;
var map__43739__$1 = ((((!((map__43739 == null)))?((((map__43739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43739):map__43739);
var state = map__43739__$1;
var suggestions = cljs.core.get.call(null,map__43739__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__43741){
var map__43742 = p__43741;
var map__43742__$1 = ((((!((map__43742 == null)))?((((map__43742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43742):map__43742);
var state = map__43742__$1;
var suggestion_active_index = cljs.core.get.call(null,map__43742__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43744 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__43744,suggestion_active_index);
} else {
return G__43744;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__43745){
var map__43746 = p__43745;
var map__43746__$1 = ((((!((map__43746 == null)))?((((map__43746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43746):map__43746);
var state = map__43746__$1;
var suggestions = cljs.core.get.call(null,map__43746__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__43746__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43748 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__43748,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__43748;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__43749){
var map__43750 = p__43749;
var map__43750__$1 = ((((!((map__43750 == null)))?((((map__43750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43750):map__43750);
var state = map__43750__$1;
var suggestions = cljs.core.get.call(null,map__43750__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__43750__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43752 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__43752,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__43752;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__43753 = state;
var G__43753__$1 = re_com.typeahead.clear_suggestions.call(null,G__43753)
;
var G__43753__$2 = cljs.core.assoc.call(null,G__43753__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__43753__$2,null);
} else {
return G__43753__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__43754){
var map__43755 = p__43754;
var map__43755__$1 = ((((!((map__43755 == null)))?((((map__43755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43755):map__43755);
var state = map__43755__$1;
var input_text = cljs.core.get.call(null,map__43755__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__43755__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__43757 = state;
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28274__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28274__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__43757,input_text);
} else {
return G__43757;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__43758_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__43758_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_43775){
var state_val_43776 = (state_43775[(1)]);
if((state_val_43776 === (1))){
var state_43775__$1 = state_43775;
var statearr_43777_43789 = state_43775__$1;
(statearr_43777_43789[(2)] = null);

(statearr_43777_43789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (2))){
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43775__$1,(4),c_search);
} else {
if((state_val_43776 === (3))){
var inst_43773 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43775__$1,inst_43773);
} else {
if((state_val_43776 === (4))){
var inst_43761 = (state_43775[(7)]);
var inst_43761__$1 = (state_43775[(2)]);
var inst_43762 = cljs.core.deref.call(null,state_atom);
var inst_43763 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_43762);
var inst_43764 = cljs.core._EQ_.call(null,"",inst_43761__$1);
var state_43775__$1 = (function (){var statearr_43778 = state_43775;
(statearr_43778[(8)] = inst_43763);

(statearr_43778[(7)] = inst_43761__$1);

return statearr_43778;
})();
if(inst_43764){
var statearr_43779_43790 = state_43775__$1;
(statearr_43779_43790[(1)] = (5));

} else {
var statearr_43780_43791 = state_43775__$1;
(statearr_43780_43791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (5))){
var inst_43766 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_43775__$1 = state_43775;
var statearr_43781_43792 = state_43775__$1;
(statearr_43781_43792[(2)] = inst_43766);

(statearr_43781_43792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (6))){
var inst_43763 = (state_43775[(8)]);
var inst_43761 = (state_43775[(7)]);
var inst_43768 = re_com.typeahead.search_data_source_BANG_.call(null,inst_43763,state_atom,inst_43761);
var state_43775__$1 = state_43775;
var statearr_43782_43793 = state_43775__$1;
(statearr_43782_43793[(2)] = inst_43768);

(statearr_43782_43793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (7))){
var inst_43770 = (state_43775[(2)]);
var state_43775__$1 = (function (){var statearr_43783 = state_43775;
(statearr_43783[(9)] = inst_43770);

return statearr_43783;
})();
var statearr_43784_43794 = state_43775__$1;
(statearr_43784_43794[(2)] = null);

(statearr_43784_43794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____0 = (function (){
var statearr_43785 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43785[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__);

(statearr_43785[(1)] = (1));

return statearr_43785;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____1 = (function (state_43775){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43786){if((e43786 instanceof Object)){
var ex__33491__auto__ = e43786;
var statearr_43787_43795 = state_43775;
(statearr_43787_43795[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43796 = state_43775;
state_43775 = G__43796;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__ = function(state_43775){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____1.call(this,state_43775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_43788 = f__33576__auto__.call(null);
(statearr_43788[(6)] = c__33575__auto__);

return statearr_43788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__43798 = cljs.core.deref.call(null,state_atom);
var map__43798__$1 = ((((!((map__43798 == null)))?((((map__43798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43798):map__43798);
var state = map__43798__$1;
var input_text = cljs.core.get.call(null,map__43798__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__43798__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__43798,map__43798__$1,state,input_text,c_input){
return (function (p1__43797_SHARP_){
var G__43800 = p1__43797_SHARP_;
var G__43800__$1 = cljs.core.assoc.call(null,G__43800,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__43800__$1,new_text);
} else {
return G__43800__$1;
}
});})(map__43798,map__43798__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__43801 = cljs.core._EQ_;
var expr__43802 = event.which;
if(cljs.core.truth_(pred__43801.call(null,goog.events.KeyCodes.UP,expr__43802))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__43801.call(null,goog.events.KeyCodes.DOWN,expr__43802))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__43801.call(null,goog.events.KeyCodes.ENTER,expr__43802))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__43801.call(null,goog.events.KeyCodes.ESC,expr__43802))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__43801.call(null,goog.events.KeyCodes.TAB,expr__43802))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43826 = arguments.length;
var i__29456__auto___43827 = (0);
while(true){
if((i__29456__auto___43827 < len__29455__auto___43826)){
args__29462__auto__.push((arguments[i__29456__auto___43827]));

var G__43828 = (i__29456__auto___43827 + (1));
i__29456__auto___43827 = G__43828;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__43806){
var map__43807 = p__43806;
var map__43807__$1 = ((((!((map__43807 == null)))?((((map__43807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43807):map__43807);
var args = map__43807__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43809 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__43809__$1 = ((((!((map__43809 == null)))?((((map__43809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43809):map__43809);
var state = map__43809__$1;
var c_search = cljs.core.get.call(null,map__43809__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__43809__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function() { 
var G__43829__delegate = function (p__43811){
var map__43812 = p__43811;
var map__43812__$1 = ((((!((map__43812 == null)))?((((map__43812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43812):map__43812);
var args__$1 = map__43812__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__43812__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43814 = cljs.core.deref.call(null,state_atom);
var map__43814__$1 = ((((!((map__43814 == null)))?((((map__43814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43814):map__43814);
var state__$1 = map__43814__$1;
var suggestions = cljs.core.get.call(null,map__43814__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__43814__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__43814__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__43814__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__28286__auto__ = width;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__28286__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29094__auto__ = ((function (map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function re_com$typeahead$iter__43816(s__43817){
return (new cljs.core.LazySeq(null,((function (map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function (){
var s__43817__$1 = s__43817;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43817__$1);
if(temp__4657__auto__){
var s__43817__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43817__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__43817__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__43819 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__43818 = (0);
while(true){
if((i__43818 < size__29093__auto__)){
var vec__43820 = cljs.core._nth.call(null,c__29092__auto__,i__43818);
var i = cljs.core.nth.call(null,vec__43820,(0),null);
var s = cljs.core.nth.call(null,vec__43820,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__43819,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43818,selected_QMARK_,vec__43820,i,s,c__29092__auto__,size__29093__auto__,b__43819,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__43818,selected_QMARK_,vec__43820,i,s,c__29092__auto__,size__29093__auto__,b__43819,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__43818,selected_QMARK_,vec__43820,i,s,c__29092__auto__,size__29093__auto__,b__43819,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function (p1__43804_SHARP_){
p1__43804_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__43818,selected_QMARK_,vec__43820,i,s,c__29092__auto__,size__29093__auto__,b__43819,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43830 = (i__43818 + (1));
i__43818 = G__43830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43819),re_com$typeahead$iter__43816.call(null,cljs.core.chunk_rest.call(null,s__43817__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43819),null);
}
} else {
var vec__43823 = cljs.core.first.call(null,s__43817__$2);
var i = cljs.core.nth.call(null,vec__43823,(0),null);
var s = cljs.core.nth.call(null,vec__43823,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__43823,i,s,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__43823,i,s,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__43823,i,s,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args){
return (function (p1__43804_SHARP_){
p1__43804_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__43823,i,s,s__43817__$2,temp__4657__auto__,map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__43816.call(null,cljs.core.rest.call(null,s__43817__$2)));
}
} else {
return null;
}
break;
}
});})(map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
,null,null));
});})(map__43814,map__43814__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43812,map__43812__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
;
return iter__29094__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__43829 = function (var_args){
var p__43811 = null;
if (arguments.length > 0) {
var G__43831__i = 0, G__43831__a = new Array(arguments.length -  0);
while (G__43831__i < G__43831__a.length) {G__43831__a[G__43831__i] = arguments[G__43831__i + 0]; ++G__43831__i;}
  p__43811 = new cljs.core.IndexedSeq(G__43831__a,0,null);
} 
return G__43829__delegate.call(this,p__43811);};
G__43829.cljs$lang$maxFixedArity = 0;
G__43829.cljs$lang$applyTo = (function (arglist__43832){
var p__43811 = cljs.core.seq(arglist__43832);
return G__43829__delegate(p__43811);
});
G__43829.cljs$core$IFn$_invoke$arity$variadic = G__43829__delegate;
return G__43829;
})()
;
;})(map__43809,map__43809__$1,state,c_search,c_input,state_atom,input_text_model,map__43807,map__43807__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq43805){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43805));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__33575__auto___43913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43913,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43913,out){
return (function (state_43883){
var state_val_43884 = (state_43883[(1)]);
if((state_val_43884 === (7))){
var inst_43838 = (state_43883[(2)]);
var state_43883__$1 = state_43883;
var statearr_43885_43914 = state_43883__$1;
(statearr_43885_43914[(2)] = inst_43838);

(statearr_43885_43914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (1))){
var inst_43833 = null;
var state_43883__$1 = (function (){var statearr_43886 = state_43883;
(statearr_43886[(7)] = inst_43833);

return statearr_43886;
})();
var statearr_43887_43915 = state_43883__$1;
(statearr_43887_43915[(2)] = null);

(statearr_43887_43915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (4))){
var state_43883__$1 = state_43883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43883__$1,(7),in$);
} else {
if((state_val_43884 === (15))){
var inst_43868 = (state_43883[(2)]);
var state_43883__$1 = (function (){var statearr_43888 = state_43883;
(statearr_43888[(8)] = inst_43868);

return statearr_43888;
})();
var statearr_43889_43916 = state_43883__$1;
(statearr_43889_43916[(2)] = null);

(statearr_43889_43916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (13))){
var inst_43856 = (state_43883[(9)]);
var inst_43870 = cljs.core._EQ_.call(null,inst_43856,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_43883__$1 = state_43883;
if(inst_43870){
var statearr_43890_43917 = state_43883__$1;
(statearr_43890_43917[(1)] = (16));

} else {
var statearr_43891_43918 = state_43883__$1;
(statearr_43891_43918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (6))){
var inst_43842 = (state_43883[(10)]);
var inst_43841 = (state_43883[(2)]);
var inst_43842__$1 = cljs.core.async.timeout.call(null,ms);
var inst_43850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43851 = [in$,inst_43842__$1];
var inst_43852 = (new cljs.core.PersistentVector(null,2,(5),inst_43850,inst_43851,null));
var state_43883__$1 = (function (){var statearr_43892 = state_43883;
(statearr_43892[(10)] = inst_43842__$1);

(statearr_43892[(11)] = inst_43841);

return statearr_43892;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43883__$1,(8),inst_43852);
} else {
if((state_val_43884 === (17))){
var state_43883__$1 = state_43883;
var statearr_43893_43919 = state_43883__$1;
(statearr_43893_43919[(2)] = null);

(statearr_43893_43919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (3))){
var inst_43881 = (state_43883[(2)]);
var state_43883__$1 = state_43883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43883__$1,inst_43881);
} else {
if((state_val_43884 === (12))){
var inst_43841 = (state_43883[(11)]);
var state_43883__$1 = state_43883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43883__$1,(15),out,inst_43841);
} else {
if((state_val_43884 === (2))){
var inst_43833 = (state_43883[(7)]);
var inst_43835 = (inst_43833 == null);
var state_43883__$1 = state_43883;
if(cljs.core.truth_(inst_43835)){
var statearr_43894_43920 = state_43883__$1;
(statearr_43894_43920[(1)] = (4));

} else {
var statearr_43895_43921 = state_43883__$1;
(statearr_43895_43921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (11))){
var inst_43878 = (state_43883[(2)]);
var inst_43833 = inst_43878;
var state_43883__$1 = (function (){var statearr_43896 = state_43883;
(statearr_43896[(7)] = inst_43833);

return statearr_43896;
})();
var statearr_43897_43922 = state_43883__$1;
(statearr_43897_43922[(2)] = null);

(statearr_43897_43922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (9))){
var inst_43854 = (state_43883[(12)]);
var inst_43862 = cljs.core.nth.call(null,inst_43854,(0),null);
var inst_43863 = cljs.core.nth.call(null,inst_43854,(1),null);
var state_43883__$1 = (function (){var statearr_43898 = state_43883;
(statearr_43898[(13)] = inst_43863);

return statearr_43898;
})();
var statearr_43899_43923 = state_43883__$1;
(statearr_43899_43923[(2)] = inst_43862);

(statearr_43899_43923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (5))){
var inst_43833 = (state_43883[(7)]);
var state_43883__$1 = state_43883;
var statearr_43900_43924 = state_43883__$1;
(statearr_43900_43924[(2)] = inst_43833);

(statearr_43900_43924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (14))){
var inst_43876 = (state_43883[(2)]);
var state_43883__$1 = state_43883;
var statearr_43901_43925 = state_43883__$1;
(statearr_43901_43925[(2)] = inst_43876);

(statearr_43901_43925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (16))){
var inst_43855 = (state_43883[(14)]);
var state_43883__$1 = state_43883;
var statearr_43902_43926 = state_43883__$1;
(statearr_43902_43926[(2)] = inst_43855);

(statearr_43902_43926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (10))){
var inst_43856 = (state_43883[(9)]);
var inst_43842 = (state_43883[(10)]);
var inst_43865 = cljs.core._EQ_.call(null,inst_43856,inst_43842);
var state_43883__$1 = state_43883;
if(inst_43865){
var statearr_43903_43927 = state_43883__$1;
(statearr_43903_43927[(1)] = (12));

} else {
var statearr_43904_43928 = state_43883__$1;
(statearr_43904_43928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (18))){
var inst_43874 = (state_43883[(2)]);
var state_43883__$1 = state_43883;
var statearr_43905_43929 = state_43883__$1;
(statearr_43905_43929[(2)] = inst_43874);

(statearr_43905_43929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43884 === (8))){
var inst_43856 = (state_43883[(9)]);
var inst_43854 = (state_43883[(12)]);
var inst_43854__$1 = (state_43883[(2)]);
var inst_43855 = cljs.core.nth.call(null,inst_43854__$1,(0),null);
var inst_43856__$1 = cljs.core.nth.call(null,inst_43854__$1,(1),null);
var inst_43857 = cljs.core._EQ_.call(null,inst_43856__$1,in$);
var state_43883__$1 = (function (){var statearr_43906 = state_43883;
(statearr_43906[(9)] = inst_43856__$1);

(statearr_43906[(14)] = inst_43855);

(statearr_43906[(12)] = inst_43854__$1);

return statearr_43906;
})();
if(inst_43857){
var statearr_43907_43930 = state_43883__$1;
(statearr_43907_43930[(1)] = (9));

} else {
var statearr_43908_43931 = state_43883__$1;
(statearr_43908_43931[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33575__auto___43913,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43913,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__33488__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__33488__auto____0 = (function (){
var statearr_43909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43909[(0)] = re_com$typeahead$debounce_$_state_machine__33488__auto__);

(statearr_43909[(1)] = (1));

return statearr_43909;
});
var re_com$typeahead$debounce_$_state_machine__33488__auto____1 = (function (state_43883){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43910){if((e43910 instanceof Object)){
var ex__33491__auto__ = e43910;
var statearr_43911_43932 = state_43883;
(statearr_43911_43932[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43933 = state_43883;
state_43883 = G__43933;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__33488__auto__ = function(state_43883){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__33488__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__33488__auto____1.call(this,state_43883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__33488__auto____0;
re_com$typeahead$debounce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__33488__auto____1;
return re_com$typeahead$debounce_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43913,out))
})();
var state__33577__auto__ = (function (){var statearr_43912 = f__33576__auto__.call(null);
(statearr_43912[(6)] = c__33575__auto___43913);

return statearr_43912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43913,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1513400483017
