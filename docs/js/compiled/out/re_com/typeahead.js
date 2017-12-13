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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__43693){
var map__43694 = p__43693;
var map__43694__$1 = ((((!((map__43694 == null)))?((((map__43694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43694):map__43694);
var args = map__43694__$1;
var on_change = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__43694__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__43696 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28286__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__43696,external_model_value);
} else {
return G__43696;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__43697,event){
var map__43698 = p__43697;
var map__43698__$1 = ((((!((map__43698 == null)))?((((map__43698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43698):map__43698);
var state = map__43698__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43698__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__43698__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__43700 = event;
var G__43700__$1 = (((G__43700 instanceof cljs.core.Keyword))?G__43700.fqn:null);
switch (G__43700__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43700__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__43702,event){
var map__43703 = p__43702;
var map__43703__$1 = ((((!((map__43703 == null)))?((((map__43703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43703):map__43703);
var state = map__43703__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43703__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__43705 = event;
var G__43705__$1 = (((G__43705 instanceof cljs.core.Keyword))?G__43705.fqn:null);
switch (G__43705__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__43707,new_value){
var map__43708 = p__43707;
var map__43708__$1 = ((((!((map__43708 == null)))?((((map__43708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43708):map__43708);
var state = map__43708__$1;
var on_change = cljs.core.get.call(null,map__43708__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__43710,suggestion){
var map__43711 = p__43710;
var map__43711__$1 = ((((!((map__43711 == null)))?((((map__43711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43711):map__43711);
var state = map__43711__$1;
var suggestion_to_string = cljs.core.get.call(null,map__43711__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__43713 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__43713,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__43713;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__43714,index){
var map__43715 = p__43714;
var map__43715__$1 = ((((!((map__43715 == null)))?((((map__43715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43715):map__43715);
var state = map__43715__$1;
var suggestions = cljs.core.get.call(null,map__43715__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__43717 = state;
var G__43717__$1 = cljs.core.assoc.call(null,G__43717,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__43717__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__43717__$1,suggestion):G__43717__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__43717__$2,suggestion);
} else {
return G__43717__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__43718,index){
var map__43719 = p__43718;
var map__43719__$1 = ((((!((map__43719 == null)))?((((map__43719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43719):map__43719);
var state = map__43719__$1;
var suggestions = cljs.core.get.call(null,map__43719__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__43721){
var map__43722 = p__43721;
var map__43722__$1 = ((((!((map__43722 == null)))?((((map__43722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43722):map__43722);
var state = map__43722__$1;
var suggestion_active_index = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43724 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__43724,suggestion_active_index);
} else {
return G__43724;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__43725){
var map__43726 = p__43725;
var map__43726__$1 = ((((!((map__43726 == null)))?((((map__43726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43726):map__43726);
var state = map__43726__$1;
var suggestions = cljs.core.get.call(null,map__43726__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__43726__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43728 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__43728,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__43728;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__43729){
var map__43730 = p__43729;
var map__43730__$1 = ((((!((map__43730 == null)))?((((map__43730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43730):map__43730);
var state = map__43730__$1;
var suggestions = cljs.core.get.call(null,map__43730__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__43730__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43732 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__43732,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__43732;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__43733 = state;
var G__43733__$1 = re_com.typeahead.clear_suggestions.call(null,G__43733)
;
var G__43733__$2 = cljs.core.assoc.call(null,G__43733__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__43733__$2,null);
} else {
return G__43733__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__43734){
var map__43735 = p__43734;
var map__43735__$1 = ((((!((map__43735 == null)))?((((map__43735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43735):map__43735);
var state = map__43735__$1;
var input_text = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__43737 = state;
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28274__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28274__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__43737,input_text);
} else {
return G__43737;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__43738_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__43738_SHARP_);
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_43755){
var state_val_43756 = (state_43755[(1)]);
if((state_val_43756 === (1))){
var state_43755__$1 = state_43755;
var statearr_43757_43769 = state_43755__$1;
(statearr_43757_43769[(2)] = null);

(statearr_43757_43769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43756 === (2))){
var state_43755__$1 = state_43755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43755__$1,(4),c_search);
} else {
if((state_val_43756 === (3))){
var inst_43753 = (state_43755[(2)]);
var state_43755__$1 = state_43755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43755__$1,inst_43753);
} else {
if((state_val_43756 === (4))){
var inst_43741 = (state_43755[(7)]);
var inst_43741__$1 = (state_43755[(2)]);
var inst_43742 = cljs.core.deref.call(null,state_atom);
var inst_43743 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_43742);
var inst_43744 = cljs.core._EQ_.call(null,"",inst_43741__$1);
var state_43755__$1 = (function (){var statearr_43758 = state_43755;
(statearr_43758[(8)] = inst_43743);

(statearr_43758[(7)] = inst_43741__$1);

return statearr_43758;
})();
if(inst_43744){
var statearr_43759_43770 = state_43755__$1;
(statearr_43759_43770[(1)] = (5));

} else {
var statearr_43760_43771 = state_43755__$1;
(statearr_43760_43771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43756 === (5))){
var inst_43746 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_43755__$1 = state_43755;
var statearr_43761_43772 = state_43755__$1;
(statearr_43761_43772[(2)] = inst_43746);

(statearr_43761_43772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43756 === (6))){
var inst_43743 = (state_43755[(8)]);
var inst_43741 = (state_43755[(7)]);
var inst_43748 = re_com.typeahead.search_data_source_BANG_.call(null,inst_43743,state_atom,inst_43741);
var state_43755__$1 = state_43755;
var statearr_43762_43773 = state_43755__$1;
(statearr_43762_43773[(2)] = inst_43748);

(statearr_43762_43773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43756 === (7))){
var inst_43750 = (state_43755[(2)]);
var state_43755__$1 = (function (){var statearr_43763 = state_43755;
(statearr_43763[(9)] = inst_43750);

return statearr_43763;
})();
var statearr_43764_43774 = state_43755__$1;
(statearr_43764_43774[(2)] = null);

(statearr_43764_43774[(1)] = (2));


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
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____0 = (function (){
var statearr_43765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43765[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__);

(statearr_43765[(1)] = (1));

return statearr_43765;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____1 = (function (state_43755){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43766){if((e43766 instanceof Object)){
var ex__33471__auto__ = e43766;
var statearr_43767_43775 = state_43755;
(statearr_43767_43775[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43776 = state_43755;
state_43755 = G__43776;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__ = function(state_43755){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____1.call(this,state_43755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_43768 = f__33556__auto__.call(null);
(statearr_43768[(6)] = c__33555__auto__);

return statearr_43768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__43778 = cljs.core.deref.call(null,state_atom);
var map__43778__$1 = ((((!((map__43778 == null)))?((((map__43778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43778):map__43778);
var state = map__43778__$1;
var input_text = cljs.core.get.call(null,map__43778__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__43778__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__43778,map__43778__$1,state,input_text,c_input){
return (function (p1__43777_SHARP_){
var G__43780 = p1__43777_SHARP_;
var G__43780__$1 = cljs.core.assoc.call(null,G__43780,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__43780__$1,new_text);
} else {
return G__43780__$1;
}
});})(map__43778,map__43778__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__43781 = cljs.core._EQ_;
var expr__43782 = event.which;
if(cljs.core.truth_(pred__43781.call(null,goog.events.KeyCodes.UP,expr__43782))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__43781.call(null,goog.events.KeyCodes.DOWN,expr__43782))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__43781.call(null,goog.events.KeyCodes.ENTER,expr__43782))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__43781.call(null,goog.events.KeyCodes.ESC,expr__43782))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__43781.call(null,goog.events.KeyCodes.TAB,expr__43782))){
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
var len__29455__auto___43806 = arguments.length;
var i__29456__auto___43807 = (0);
while(true){
if((i__29456__auto___43807 < len__29455__auto___43806)){
args__29462__auto__.push((arguments[i__29456__auto___43807]));

var G__43808 = (i__29456__auto___43807 + (1));
i__29456__auto___43807 = G__43808;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__43786){
var map__43787 = p__43786;
var map__43787__$1 = ((((!((map__43787 == null)))?((((map__43787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43787):map__43787);
var args = map__43787__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43789 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__43789__$1 = ((((!((map__43789 == null)))?((((map__43789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43789):map__43789);
var state = map__43789__$1;
var c_search = cljs.core.get.call(null,map__43789__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__43789__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function() { 
var G__43809__delegate = function (p__43791){
var map__43792 = p__43791;
var map__43792__$1 = ((((!((map__43792 == null)))?((((map__43792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43792):map__43792);
var args__$1 = map__43792__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__43792__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__43794 = cljs.core.deref.call(null,state_atom);
var map__43794__$1 = ((((!((map__43794 == null)))?((((map__43794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43794):map__43794);
var state__$1 = map__43794__$1;
var suggestions = cljs.core.get.call(null,map__43794__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__43794__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__43794__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__43794__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29094__auto__ = ((function (map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function re_com$typeahead$iter__43796(s__43797){
return (new cljs.core.LazySeq(null,((function (map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function (){
var s__43797__$1 = s__43797;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43797__$1);
if(temp__4657__auto__){
var s__43797__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43797__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__43797__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__43799 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__43798 = (0);
while(true){
if((i__43798 < size__29093__auto__)){
var vec__43800 = cljs.core._nth.call(null,c__29092__auto__,i__43798);
var i = cljs.core.nth.call(null,vec__43800,(0),null);
var s = cljs.core.nth.call(null,vec__43800,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__43799,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43798,selected_QMARK_,vec__43800,i,s,c__29092__auto__,size__29093__auto__,b__43799,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__43798,selected_QMARK_,vec__43800,i,s,c__29092__auto__,size__29093__auto__,b__43799,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__43798,selected_QMARK_,vec__43800,i,s,c__29092__auto__,size__29093__auto__,b__43799,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function (p1__43784_SHARP_){
p1__43784_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__43798,selected_QMARK_,vec__43800,i,s,c__29092__auto__,size__29093__auto__,b__43799,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43810 = (i__43798 + (1));
i__43798 = G__43810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43799),re_com$typeahead$iter__43796.call(null,cljs.core.chunk_rest.call(null,s__43797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43799),null);
}
} else {
var vec__43803 = cljs.core.first.call(null,s__43797__$2);
var i = cljs.core.nth.call(null,vec__43803,(0),null);
var s = cljs.core.nth.call(null,vec__43803,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__43803,i,s,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__43803,i,s,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__43803,i,s,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args){
return (function (p1__43784_SHARP_){
p1__43784_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__43803,i,s,s__43797__$2,temp__4657__auto__,map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__43796.call(null,cljs.core.rest.call(null,s__43797__$2)));
}
} else {
return null;
}
break;
}
});})(map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
,null,null));
});})(map__43794,map__43794__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__43792,map__43792__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
;
return iter__29094__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__43809 = function (var_args){
var p__43791 = null;
if (arguments.length > 0) {
var G__43811__i = 0, G__43811__a = new Array(arguments.length -  0);
while (G__43811__i < G__43811__a.length) {G__43811__a[G__43811__i] = arguments[G__43811__i + 0]; ++G__43811__i;}
  p__43791 = new cljs.core.IndexedSeq(G__43811__a,0,null);
} 
return G__43809__delegate.call(this,p__43791);};
G__43809.cljs$lang$maxFixedArity = 0;
G__43809.cljs$lang$applyTo = (function (arglist__43812){
var p__43791 = cljs.core.seq(arglist__43812);
return G__43809__delegate(p__43791);
});
G__43809.cljs$core$IFn$_invoke$arity$variadic = G__43809__delegate;
return G__43809;
})()
;
;})(map__43789,map__43789__$1,state,c_search,c_input,state_atom,input_text_model,map__43787,map__43787__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq43785){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43785));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__33555__auto___43893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43893,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43893,out){
return (function (state_43863){
var state_val_43864 = (state_43863[(1)]);
if((state_val_43864 === (7))){
var inst_43818 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43865_43894 = state_43863__$1;
(statearr_43865_43894[(2)] = inst_43818);

(statearr_43865_43894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (1))){
var inst_43813 = null;
var state_43863__$1 = (function (){var statearr_43866 = state_43863;
(statearr_43866[(7)] = inst_43813);

return statearr_43866;
})();
var statearr_43867_43895 = state_43863__$1;
(statearr_43867_43895[(2)] = null);

(statearr_43867_43895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (4))){
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43863__$1,(7),in$);
} else {
if((state_val_43864 === (15))){
var inst_43848 = (state_43863[(2)]);
var state_43863__$1 = (function (){var statearr_43868 = state_43863;
(statearr_43868[(8)] = inst_43848);

return statearr_43868;
})();
var statearr_43869_43896 = state_43863__$1;
(statearr_43869_43896[(2)] = null);

(statearr_43869_43896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (13))){
var inst_43836 = (state_43863[(9)]);
var inst_43850 = cljs.core._EQ_.call(null,inst_43836,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_43863__$1 = state_43863;
if(inst_43850){
var statearr_43870_43897 = state_43863__$1;
(statearr_43870_43897[(1)] = (16));

} else {
var statearr_43871_43898 = state_43863__$1;
(statearr_43871_43898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (6))){
var inst_43822 = (state_43863[(10)]);
var inst_43821 = (state_43863[(2)]);
var inst_43822__$1 = cljs.core.async.timeout.call(null,ms);
var inst_43830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43831 = [in$,inst_43822__$1];
var inst_43832 = (new cljs.core.PersistentVector(null,2,(5),inst_43830,inst_43831,null));
var state_43863__$1 = (function (){var statearr_43872 = state_43863;
(statearr_43872[(11)] = inst_43821);

(statearr_43872[(10)] = inst_43822__$1);

return statearr_43872;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43863__$1,(8),inst_43832);
} else {
if((state_val_43864 === (17))){
var state_43863__$1 = state_43863;
var statearr_43873_43899 = state_43863__$1;
(statearr_43873_43899[(2)] = null);

(statearr_43873_43899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (3))){
var inst_43861 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43863__$1,inst_43861);
} else {
if((state_val_43864 === (12))){
var inst_43821 = (state_43863[(11)]);
var state_43863__$1 = state_43863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43863__$1,(15),out,inst_43821);
} else {
if((state_val_43864 === (2))){
var inst_43813 = (state_43863[(7)]);
var inst_43815 = (inst_43813 == null);
var state_43863__$1 = state_43863;
if(cljs.core.truth_(inst_43815)){
var statearr_43874_43900 = state_43863__$1;
(statearr_43874_43900[(1)] = (4));

} else {
var statearr_43875_43901 = state_43863__$1;
(statearr_43875_43901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (11))){
var inst_43858 = (state_43863[(2)]);
var inst_43813 = inst_43858;
var state_43863__$1 = (function (){var statearr_43876 = state_43863;
(statearr_43876[(7)] = inst_43813);

return statearr_43876;
})();
var statearr_43877_43902 = state_43863__$1;
(statearr_43877_43902[(2)] = null);

(statearr_43877_43902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (9))){
var inst_43834 = (state_43863[(12)]);
var inst_43842 = cljs.core.nth.call(null,inst_43834,(0),null);
var inst_43843 = cljs.core.nth.call(null,inst_43834,(1),null);
var state_43863__$1 = (function (){var statearr_43878 = state_43863;
(statearr_43878[(13)] = inst_43843);

return statearr_43878;
})();
var statearr_43879_43903 = state_43863__$1;
(statearr_43879_43903[(2)] = inst_43842);

(statearr_43879_43903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (5))){
var inst_43813 = (state_43863[(7)]);
var state_43863__$1 = state_43863;
var statearr_43880_43904 = state_43863__$1;
(statearr_43880_43904[(2)] = inst_43813);

(statearr_43880_43904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (14))){
var inst_43856 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43881_43905 = state_43863__$1;
(statearr_43881_43905[(2)] = inst_43856);

(statearr_43881_43905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (16))){
var inst_43835 = (state_43863[(14)]);
var state_43863__$1 = state_43863;
var statearr_43882_43906 = state_43863__$1;
(statearr_43882_43906[(2)] = inst_43835);

(statearr_43882_43906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (10))){
var inst_43836 = (state_43863[(9)]);
var inst_43822 = (state_43863[(10)]);
var inst_43845 = cljs.core._EQ_.call(null,inst_43836,inst_43822);
var state_43863__$1 = state_43863;
if(inst_43845){
var statearr_43883_43907 = state_43863__$1;
(statearr_43883_43907[(1)] = (12));

} else {
var statearr_43884_43908 = state_43863__$1;
(statearr_43884_43908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (18))){
var inst_43854 = (state_43863[(2)]);
var state_43863__$1 = state_43863;
var statearr_43885_43909 = state_43863__$1;
(statearr_43885_43909[(2)] = inst_43854);

(statearr_43885_43909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43864 === (8))){
var inst_43836 = (state_43863[(9)]);
var inst_43834 = (state_43863[(12)]);
var inst_43834__$1 = (state_43863[(2)]);
var inst_43835 = cljs.core.nth.call(null,inst_43834__$1,(0),null);
var inst_43836__$1 = cljs.core.nth.call(null,inst_43834__$1,(1),null);
var inst_43837 = cljs.core._EQ_.call(null,inst_43836__$1,in$);
var state_43863__$1 = (function (){var statearr_43886 = state_43863;
(statearr_43886[(9)] = inst_43836__$1);

(statearr_43886[(14)] = inst_43835);

(statearr_43886[(12)] = inst_43834__$1);

return statearr_43886;
})();
if(inst_43837){
var statearr_43887_43910 = state_43863__$1;
(statearr_43887_43910[(1)] = (9));

} else {
var statearr_43888_43911 = state_43863__$1;
(statearr_43888_43911[(1)] = (10));

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
});})(c__33555__auto___43893,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43893,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__33468__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__33468__auto____0 = (function (){
var statearr_43889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43889[(0)] = re_com$typeahead$debounce_$_state_machine__33468__auto__);

(statearr_43889[(1)] = (1));

return statearr_43889;
});
var re_com$typeahead$debounce_$_state_machine__33468__auto____1 = (function (state_43863){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43890){if((e43890 instanceof Object)){
var ex__33471__auto__ = e43890;
var statearr_43891_43912 = state_43863;
(statearr_43891_43912[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43913 = state_43863;
state_43863 = G__43913;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__33468__auto__ = function(state_43863){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__33468__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__33468__auto____1.call(this,state_43863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__33468__auto____0;
re_com$typeahead$debounce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__33468__auto____1;
return re_com$typeahead$debounce_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43893,out))
})();
var state__33557__auto__ = (function (){var statearr_43892 = f__33556__auto__.call(null);
(statearr_43892[(6)] = c__33555__auto___43893);

return statearr_43892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43893,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1513190818456
