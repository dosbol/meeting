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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__39770){
var map__39771 = p__39770;
var map__39771__$1 = ((((!((map__39771 == null)))?((((map__39771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39771):map__39771);
var args = map__39771__$1;
var on_change = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__39773 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__39773,external_model_value);
} else {
return G__39773;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__39774,event){
var map__39775 = p__39774;
var map__39775__$1 = ((((!((map__39775 == null)))?((((map__39775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39775):map__39775);
var state = map__39775__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__39777 = event;
var G__39777__$1 = (((G__39777 instanceof cljs.core.Keyword))?G__39777.fqn:null);
switch (G__39777__$1) {
case "input-text-blurred":
var and__27183__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27183__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27195__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39777__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__39779,event){
var map__39780 = p__39779;
var map__39780__$1 = ((((!((map__39780 == null)))?((((map__39780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39780):map__39780);
var state = map__39780__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39780__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__39782 = event;
var G__39782__$1 = (((G__39782 instanceof cljs.core.Keyword))?G__39782.fqn:null);
switch (G__39782__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__39784,new_value){
var map__39785 = p__39784;
var map__39785__$1 = ((((!((map__39785 == null)))?((((map__39785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39785):map__39785);
var state = map__39785__$1;
var on_change = cljs.core.get.call(null,map__39785__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__39787,suggestion){
var map__39788 = p__39787;
var map__39788__$1 = ((((!((map__39788 == null)))?((((map__39788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39788):map__39788);
var state = map__39788__$1;
var suggestion_to_string = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__39790 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__39790,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__39790;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__39791,index){
var map__39792 = p__39791;
var map__39792__$1 = ((((!((map__39792 == null)))?((((map__39792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39792):map__39792);
var state = map__39792__$1;
var suggestions = cljs.core.get.call(null,map__39792__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__39794 = state;
var G__39794__$1 = cljs.core.assoc.call(null,G__39794,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__39794__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__39794__$1,suggestion):G__39794__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__39794__$2,suggestion);
} else {
return G__39794__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__39795,index){
var map__39796 = p__39795;
var map__39796__$1 = ((((!((map__39796 == null)))?((((map__39796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39796):map__39796);
var state = map__39796__$1;
var suggestions = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__39798){
var map__39799 = p__39798;
var map__39799__$1 = ((((!((map__39799 == null)))?((((map__39799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39799):map__39799);
var state = map__39799__$1;
var suggestion_active_index = cljs.core.get.call(null,map__39799__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39801 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__39801,suggestion_active_index);
} else {
return G__39801;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__39802){
var map__39803 = p__39802;
var map__39803__$1 = ((((!((map__39803 == null)))?((((map__39803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39803):map__39803);
var state = map__39803__$1;
var suggestions = cljs.core.get.call(null,map__39803__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__39803__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39805 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__39805,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__39805;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__39806){
var map__39807 = p__39806;
var map__39807__$1 = ((((!((map__39807 == null)))?((((map__39807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39807):map__39807);
var state = map__39807__$1;
var suggestions = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39809 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__39809,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__39809;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__39810 = state;
var G__39810__$1 = re_com.typeahead.clear_suggestions.call(null,G__39810)
;
var G__39810__$2 = cljs.core.assoc.call(null,G__39810__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__39810__$2,null);
} else {
return G__39810__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__39811){
var map__39812 = p__39811;
var map__39812__$1 = ((((!((map__39812 == null)))?((((map__39812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39812):map__39812);
var state = map__39812__$1;
var input_text = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__39814 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__39814,input_text);
} else {
return G__39814;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__39815_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__39815_SHARP_);
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_39832){
var state_val_39833 = (state_39832[(1)]);
if((state_val_39833 === (1))){
var state_39832__$1 = state_39832;
var statearr_39834_39846 = state_39832__$1;
(statearr_39834_39846[(2)] = null);

(statearr_39834_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (2))){
var state_39832__$1 = state_39832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39832__$1,(4),c_search);
} else {
if((state_val_39833 === (3))){
var inst_39830 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39832__$1,inst_39830);
} else {
if((state_val_39833 === (4))){
var inst_39818 = (state_39832[(7)]);
var inst_39818__$1 = (state_39832[(2)]);
var inst_39819 = cljs.core.deref.call(null,state_atom);
var inst_39820 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_39819);
var inst_39821 = cljs.core._EQ_.call(null,"",inst_39818__$1);
var state_39832__$1 = (function (){var statearr_39835 = state_39832;
(statearr_39835[(8)] = inst_39820);

(statearr_39835[(7)] = inst_39818__$1);

return statearr_39835;
})();
if(inst_39821){
var statearr_39836_39847 = state_39832__$1;
(statearr_39836_39847[(1)] = (5));

} else {
var statearr_39837_39848 = state_39832__$1;
(statearr_39837_39848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (5))){
var inst_39823 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_39832__$1 = state_39832;
var statearr_39838_39849 = state_39832__$1;
(statearr_39838_39849[(2)] = inst_39823);

(statearr_39838_39849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (6))){
var inst_39820 = (state_39832[(8)]);
var inst_39818 = (state_39832[(7)]);
var inst_39825 = re_com.typeahead.search_data_source_BANG_.call(null,inst_39820,state_atom,inst_39818);
var state_39832__$1 = state_39832;
var statearr_39839_39850 = state_39832__$1;
(statearr_39839_39850[(2)] = inst_39825);

(statearr_39839_39850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (7))){
var inst_39827 = (state_39832[(2)]);
var state_39832__$1 = (function (){var statearr_39840 = state_39832;
(statearr_39840[(9)] = inst_39827);

return statearr_39840;
})();
var statearr_39841_39851 = state_39832__$1;
(statearr_39841_39851[(2)] = null);

(statearr_39841_39851[(1)] = (2));


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
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____0 = (function (){
var statearr_39842 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39842[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__);

(statearr_39842[(1)] = (1));

return statearr_39842;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____1 = (function (state_39832){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39843){if((e39843 instanceof Object)){
var ex__29661__auto__ = e39843;
var statearr_39844_39852 = state_39832;
(statearr_39844_39852[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39853 = state_39832;
state_39832 = G__39853;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__ = function(state_39832){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____1.call(this,state_39832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_39845 = f__29746__auto__.call(null);
(statearr_39845[(6)] = c__29745__auto__);

return statearr_39845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__39855 = cljs.core.deref.call(null,state_atom);
var map__39855__$1 = ((((!((map__39855 == null)))?((((map__39855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39855):map__39855);
var state = map__39855__$1;
var input_text = cljs.core.get.call(null,map__39855__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__39855__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__39855,map__39855__$1,state,input_text,c_input){
return (function (p1__39854_SHARP_){
var G__39857 = p1__39854_SHARP_;
var G__39857__$1 = cljs.core.assoc.call(null,G__39857,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__39857__$1,new_text);
} else {
return G__39857__$1;
}
});})(map__39855,map__39855__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__39858 = cljs.core._EQ_;
var expr__39859 = event.which;
if(cljs.core.truth_(pred__39858.call(null,goog.events.KeyCodes.UP,expr__39859))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__39858.call(null,goog.events.KeyCodes.DOWN,expr__39859))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__39858.call(null,goog.events.KeyCodes.ENTER,expr__39859))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__39858.call(null,goog.events.KeyCodes.ESC,expr__39859))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__39858.call(null,goog.events.KeyCodes.TAB,expr__39859))){
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
var args__28371__auto__ = [];
var len__28364__auto___39883 = arguments.length;
var i__28365__auto___39884 = (0);
while(true){
if((i__28365__auto___39884 < len__28364__auto___39883)){
args__28371__auto__.push((arguments[i__28365__auto___39884]));

var G__39885 = (i__28365__auto___39884 + (1));
i__28365__auto___39884 = G__39885;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__39863){
var map__39864 = p__39863;
var map__39864__$1 = ((((!((map__39864 == null)))?((((map__39864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39864):map__39864);
var args = map__39864__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__39866 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__39866__$1 = ((((!((map__39866 == null)))?((((map__39866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39866):map__39866);
var state = map__39866__$1;
var c_search = cljs.core.get.call(null,map__39866__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__39866__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function() { 
var G__39886__delegate = function (p__39868){
var map__39869 = p__39868;
var map__39869__$1 = ((((!((map__39869 == null)))?((((map__39869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39869):map__39869);
var args__$1 = map__39869__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__39869__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__39871 = cljs.core.deref.call(null,state_atom);
var map__39871__$1 = ((((!((map__39871 == null)))?((((map__39871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39871):map__39871);
var state__$1 = map__39871__$1;
var suggestions = cljs.core.get.call(null,map__39871__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__39871__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__39871__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__39871__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27195__auto__ = width;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27195__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function re_com$typeahead$iter__39873(s__39874){
return (new cljs.core.LazySeq(null,((function (map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function (){
var s__39874__$1 = s__39874;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39874__$1);
if(temp__4657__auto__){
var s__39874__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39874__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__39874__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__39876 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__39875 = (0);
while(true){
if((i__39875 < size__28002__auto__)){
var vec__39877 = cljs.core._nth.call(null,c__28001__auto__,i__39875);
var i = cljs.core.nth.call(null,vec__39877,(0),null);
var s = cljs.core.nth.call(null,vec__39877,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__39876,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__39875,selected_QMARK_,vec__39877,i,s,c__28001__auto__,size__28002__auto__,b__39876,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__39875,selected_QMARK_,vec__39877,i,s,c__28001__auto__,size__28002__auto__,b__39876,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__39875,selected_QMARK_,vec__39877,i,s,c__28001__auto__,size__28002__auto__,b__39876,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function (p1__39861_SHARP_){
p1__39861_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__39875,selected_QMARK_,vec__39877,i,s,c__28001__auto__,size__28002__auto__,b__39876,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__39887 = (i__39875 + (1));
i__39875 = G__39887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39876),re_com$typeahead$iter__39873.call(null,cljs.core.chunk_rest.call(null,s__39874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39876),null);
}
} else {
var vec__39880 = cljs.core.first.call(null,s__39874__$2);
var i = cljs.core.nth.call(null,vec__39880,(0),null);
var s = cljs.core.nth.call(null,vec__39880,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__39880,i,s,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__39880,i,s,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__39880,i,s,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args){
return (function (p1__39861_SHARP_){
p1__39861_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__39880,i,s,s__39874__$2,temp__4657__auto__,map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__39873.call(null,cljs.core.rest.call(null,s__39874__$2)));
}
} else {
return null;
}
break;
}
});})(map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
,null,null));
});})(map__39871,map__39871__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39869,map__39869__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__39886 = function (var_args){
var p__39868 = null;
if (arguments.length > 0) {
var G__39888__i = 0, G__39888__a = new Array(arguments.length -  0);
while (G__39888__i < G__39888__a.length) {G__39888__a[G__39888__i] = arguments[G__39888__i + 0]; ++G__39888__i;}
  p__39868 = new cljs.core.IndexedSeq(G__39888__a,0,null);
} 
return G__39886__delegate.call(this,p__39868);};
G__39886.cljs$lang$maxFixedArity = 0;
G__39886.cljs$lang$applyTo = (function (arglist__39889){
var p__39868 = cljs.core.seq(arglist__39889);
return G__39886__delegate(p__39868);
});
G__39886.cljs$core$IFn$_invoke$arity$variadic = G__39886__delegate;
return G__39886;
})()
;
;})(map__39866,map__39866__$1,state,c_search,c_input,state_atom,input_text_model,map__39864,map__39864__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq39862){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39862));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__29745__auto___39970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39970,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39970,out){
return (function (state_39940){
var state_val_39941 = (state_39940[(1)]);
if((state_val_39941 === (7))){
var inst_39895 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
var statearr_39942_39971 = state_39940__$1;
(statearr_39942_39971[(2)] = inst_39895);

(statearr_39942_39971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (1))){
var inst_39890 = null;
var state_39940__$1 = (function (){var statearr_39943 = state_39940;
(statearr_39943[(7)] = inst_39890);

return statearr_39943;
})();
var statearr_39944_39972 = state_39940__$1;
(statearr_39944_39972[(2)] = null);

(statearr_39944_39972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (4))){
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39940__$1,(7),in$);
} else {
if((state_val_39941 === (15))){
var inst_39925 = (state_39940[(2)]);
var state_39940__$1 = (function (){var statearr_39945 = state_39940;
(statearr_39945[(8)] = inst_39925);

return statearr_39945;
})();
var statearr_39946_39973 = state_39940__$1;
(statearr_39946_39973[(2)] = null);

(statearr_39946_39973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (13))){
var inst_39913 = (state_39940[(9)]);
var inst_39927 = cljs.core._EQ_.call(null,inst_39913,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_39940__$1 = state_39940;
if(inst_39927){
var statearr_39947_39974 = state_39940__$1;
(statearr_39947_39974[(1)] = (16));

} else {
var statearr_39948_39975 = state_39940__$1;
(statearr_39948_39975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (6))){
var inst_39899 = (state_39940[(10)]);
var inst_39898 = (state_39940[(2)]);
var inst_39899__$1 = cljs.core.async.timeout.call(null,ms);
var inst_39907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39908 = [in$,inst_39899__$1];
var inst_39909 = (new cljs.core.PersistentVector(null,2,(5),inst_39907,inst_39908,null));
var state_39940__$1 = (function (){var statearr_39949 = state_39940;
(statearr_39949[(11)] = inst_39898);

(statearr_39949[(10)] = inst_39899__$1);

return statearr_39949;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39940__$1,(8),inst_39909);
} else {
if((state_val_39941 === (17))){
var state_39940__$1 = state_39940;
var statearr_39950_39976 = state_39940__$1;
(statearr_39950_39976[(2)] = null);

(statearr_39950_39976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (3))){
var inst_39938 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39940__$1,inst_39938);
} else {
if((state_val_39941 === (12))){
var inst_39898 = (state_39940[(11)]);
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39940__$1,(15),out,inst_39898);
} else {
if((state_val_39941 === (2))){
var inst_39890 = (state_39940[(7)]);
var inst_39892 = (inst_39890 == null);
var state_39940__$1 = state_39940;
if(cljs.core.truth_(inst_39892)){
var statearr_39951_39977 = state_39940__$1;
(statearr_39951_39977[(1)] = (4));

} else {
var statearr_39952_39978 = state_39940__$1;
(statearr_39952_39978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (11))){
var inst_39935 = (state_39940[(2)]);
var inst_39890 = inst_39935;
var state_39940__$1 = (function (){var statearr_39953 = state_39940;
(statearr_39953[(7)] = inst_39890);

return statearr_39953;
})();
var statearr_39954_39979 = state_39940__$1;
(statearr_39954_39979[(2)] = null);

(statearr_39954_39979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (9))){
var inst_39911 = (state_39940[(12)]);
var inst_39919 = cljs.core.nth.call(null,inst_39911,(0),null);
var inst_39920 = cljs.core.nth.call(null,inst_39911,(1),null);
var state_39940__$1 = (function (){var statearr_39955 = state_39940;
(statearr_39955[(13)] = inst_39920);

return statearr_39955;
})();
var statearr_39956_39980 = state_39940__$1;
(statearr_39956_39980[(2)] = inst_39919);

(statearr_39956_39980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (5))){
var inst_39890 = (state_39940[(7)]);
var state_39940__$1 = state_39940;
var statearr_39957_39981 = state_39940__$1;
(statearr_39957_39981[(2)] = inst_39890);

(statearr_39957_39981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (14))){
var inst_39933 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
var statearr_39958_39982 = state_39940__$1;
(statearr_39958_39982[(2)] = inst_39933);

(statearr_39958_39982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (16))){
var inst_39912 = (state_39940[(14)]);
var state_39940__$1 = state_39940;
var statearr_39959_39983 = state_39940__$1;
(statearr_39959_39983[(2)] = inst_39912);

(statearr_39959_39983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (10))){
var inst_39913 = (state_39940[(9)]);
var inst_39899 = (state_39940[(10)]);
var inst_39922 = cljs.core._EQ_.call(null,inst_39913,inst_39899);
var state_39940__$1 = state_39940;
if(inst_39922){
var statearr_39960_39984 = state_39940__$1;
(statearr_39960_39984[(1)] = (12));

} else {
var statearr_39961_39985 = state_39940__$1;
(statearr_39961_39985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (18))){
var inst_39931 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
var statearr_39962_39986 = state_39940__$1;
(statearr_39962_39986[(2)] = inst_39931);

(statearr_39962_39986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (8))){
var inst_39913 = (state_39940[(9)]);
var inst_39911 = (state_39940[(12)]);
var inst_39911__$1 = (state_39940[(2)]);
var inst_39912 = cljs.core.nth.call(null,inst_39911__$1,(0),null);
var inst_39913__$1 = cljs.core.nth.call(null,inst_39911__$1,(1),null);
var inst_39914 = cljs.core._EQ_.call(null,inst_39913__$1,in$);
var state_39940__$1 = (function (){var statearr_39963 = state_39940;
(statearr_39963[(9)] = inst_39913__$1);

(statearr_39963[(14)] = inst_39912);

(statearr_39963[(12)] = inst_39911__$1);

return statearr_39963;
})();
if(inst_39914){
var statearr_39964_39987 = state_39940__$1;
(statearr_39964_39987[(1)] = (9));

} else {
var statearr_39965_39988 = state_39940__$1;
(statearr_39965_39988[(1)] = (10));

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
});})(c__29745__auto___39970,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39970,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__29658__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__29658__auto____0 = (function (){
var statearr_39966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39966[(0)] = re_com$typeahead$debounce_$_state_machine__29658__auto__);

(statearr_39966[(1)] = (1));

return statearr_39966;
});
var re_com$typeahead$debounce_$_state_machine__29658__auto____1 = (function (state_39940){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39967){if((e39967 instanceof Object)){
var ex__29661__auto__ = e39967;
var statearr_39968_39989 = state_39940;
(statearr_39968_39989[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39990 = state_39940;
state_39940 = G__39990;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__29658__auto__ = function(state_39940){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__29658__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__29658__auto____1.call(this,state_39940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__29658__auto____0;
re_com$typeahead$debounce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__29658__auto____1;
return re_com$typeahead$debounce_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39970,out))
})();
var state__29747__auto__ = (function (){var statearr_39969 = f__29746__auto__.call(null);
(statearr_39969[(6)] = c__29745__auto___39970);

return statearr_39969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39970,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1514289211644
