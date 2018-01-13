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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__41267){
var map__41268 = p__41267;
var map__41268__$1 = ((((!((map__41268 == null)))?((((map__41268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41268):map__41268);
var args = map__41268__$1;
var on_change = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__41270 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__41270,external_model_value);
} else {
return G__41270;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__41271,event){
var map__41272 = p__41271;
var map__41272__$1 = ((((!((map__41272 == null)))?((((map__41272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41272):map__41272);
var state = map__41272__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41272__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__41272__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__41274 = event;
var G__41274__$1 = (((G__41274 instanceof cljs.core.Keyword))?G__41274.fqn:null);
switch (G__41274__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41274__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__41276,event){
var map__41277 = p__41276;
var map__41277__$1 = ((((!((map__41277 == null)))?((((map__41277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41277):map__41277);
var state = map__41277__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41277__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__41279 = event;
var G__41279__$1 = (((G__41279 instanceof cljs.core.Keyword))?G__41279.fqn:null);
switch (G__41279__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__41281,new_value){
var map__41282 = p__41281;
var map__41282__$1 = ((((!((map__41282 == null)))?((((map__41282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41282):map__41282);
var state = map__41282__$1;
var on_change = cljs.core.get.call(null,map__41282__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__41284,suggestion){
var map__41285 = p__41284;
var map__41285__$1 = ((((!((map__41285 == null)))?((((map__41285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41285):map__41285);
var state = map__41285__$1;
var suggestion_to_string = cljs.core.get.call(null,map__41285__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__41287 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__41287,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__41287;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__41288,index){
var map__41289 = p__41288;
var map__41289__$1 = ((((!((map__41289 == null)))?((((map__41289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41289):map__41289);
var state = map__41289__$1;
var suggestions = cljs.core.get.call(null,map__41289__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__41291 = state;
var G__41291__$1 = cljs.core.assoc.call(null,G__41291,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__41291__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__41291__$1,suggestion):G__41291__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__41291__$2,suggestion);
} else {
return G__41291__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__41292,index){
var map__41293 = p__41292;
var map__41293__$1 = ((((!((map__41293 == null)))?((((map__41293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41293):map__41293);
var state = map__41293__$1;
var suggestions = cljs.core.get.call(null,map__41293__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__41295){
var map__41296 = p__41295;
var map__41296__$1 = ((((!((map__41296 == null)))?((((map__41296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41296):map__41296);
var state = map__41296__$1;
var suggestion_active_index = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41298 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__41298,suggestion_active_index);
} else {
return G__41298;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__41299){
var map__41300 = p__41299;
var map__41300__$1 = ((((!((map__41300 == null)))?((((map__41300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41300):map__41300);
var state = map__41300__$1;
var suggestions = cljs.core.get.call(null,map__41300__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__41300__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41302 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__41302,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__41302;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__41303){
var map__41304 = p__41303;
var map__41304__$1 = ((((!((map__41304 == null)))?((((map__41304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41304):map__41304);
var state = map__41304__$1;
var suggestions = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41306 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__41306,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__41306;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__41307 = state;
var G__41307__$1 = re_com.typeahead.clear_suggestions.call(null,G__41307)
;
var G__41307__$2 = cljs.core.assoc.call(null,G__41307__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__41307__$2,null);
} else {
return G__41307__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__41308){
var map__41309 = p__41308;
var map__41309__$1 = ((((!((map__41309 == null)))?((((map__41309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41309):map__41309);
var state = map__41309__$1;
var input_text = cljs.core.get.call(null,map__41309__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__41309__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__41311 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__41311,input_text);
} else {
return G__41311;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__41312_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__41312_SHARP_);
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_41329){
var state_val_41330 = (state_41329[(1)]);
if((state_val_41330 === (1))){
var state_41329__$1 = state_41329;
var statearr_41331_41343 = state_41329__$1;
(statearr_41331_41343[(2)] = null);

(statearr_41331_41343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (2))){
var state_41329__$1 = state_41329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41329__$1,(4),c_search);
} else {
if((state_val_41330 === (3))){
var inst_41327 = (state_41329[(2)]);
var state_41329__$1 = state_41329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41329__$1,inst_41327);
} else {
if((state_val_41330 === (4))){
var inst_41315 = (state_41329[(7)]);
var inst_41315__$1 = (state_41329[(2)]);
var inst_41316 = cljs.core.deref.call(null,state_atom);
var inst_41317 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_41316);
var inst_41318 = cljs.core._EQ_.call(null,"",inst_41315__$1);
var state_41329__$1 = (function (){var statearr_41332 = state_41329;
(statearr_41332[(7)] = inst_41315__$1);

(statearr_41332[(8)] = inst_41317);

return statearr_41332;
})();
if(inst_41318){
var statearr_41333_41344 = state_41329__$1;
(statearr_41333_41344[(1)] = (5));

} else {
var statearr_41334_41345 = state_41329__$1;
(statearr_41334_41345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (5))){
var inst_41320 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_41329__$1 = state_41329;
var statearr_41335_41346 = state_41329__$1;
(statearr_41335_41346[(2)] = inst_41320);

(statearr_41335_41346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (6))){
var inst_41315 = (state_41329[(7)]);
var inst_41317 = (state_41329[(8)]);
var inst_41322 = re_com.typeahead.search_data_source_BANG_.call(null,inst_41317,state_atom,inst_41315);
var state_41329__$1 = state_41329;
var statearr_41336_41347 = state_41329__$1;
(statearr_41336_41347[(2)] = inst_41322);

(statearr_41336_41347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (7))){
var inst_41324 = (state_41329[(2)]);
var state_41329__$1 = (function (){var statearr_41337 = state_41329;
(statearr_41337[(9)] = inst_41324);

return statearr_41337;
})();
var statearr_41338_41348 = state_41329__$1;
(statearr_41338_41348[(2)] = null);

(statearr_41338_41348[(1)] = (2));


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
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____0 = (function (){
var statearr_41339 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41339[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__);

(statearr_41339[(1)] = (1));

return statearr_41339;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____1 = (function (state_41329){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_41329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e41340){if((e41340 instanceof Object)){
var ex__30539__auto__ = e41340;
var statearr_41341_41349 = state_41329;
(statearr_41341_41349[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41350 = state_41329;
state_41329 = G__41350;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__ = function(state_41329){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____1.call(this,state_41329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_41342 = f__30624__auto__.call(null);
(statearr_41342[(6)] = c__30623__auto__);

return statearr_41342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__41352 = cljs.core.deref.call(null,state_atom);
var map__41352__$1 = ((((!((map__41352 == null)))?((((map__41352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41352):map__41352);
var state = map__41352__$1;
var input_text = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__41352,map__41352__$1,state,input_text,c_input){
return (function (p1__41351_SHARP_){
var G__41354 = p1__41351_SHARP_;
var G__41354__$1 = cljs.core.assoc.call(null,G__41354,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__41354__$1,new_text);
} else {
return G__41354__$1;
}
});})(map__41352,map__41352__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__41355 = cljs.core._EQ_;
var expr__41356 = event.which;
if(cljs.core.truth_(pred__41355.call(null,goog.events.KeyCodes.UP,expr__41356))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__41355.call(null,goog.events.KeyCodes.DOWN,expr__41356))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__41355.call(null,goog.events.KeyCodes.ENTER,expr__41356))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__41355.call(null,goog.events.KeyCodes.ESC,expr__41356))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__41355.call(null,goog.events.KeyCodes.TAB,expr__41356))){
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
var len__28364__auto___41380 = arguments.length;
var i__28365__auto___41381 = (0);
while(true){
if((i__28365__auto___41381 < len__28364__auto___41380)){
args__28371__auto__.push((arguments[i__28365__auto___41381]));

var G__41382 = (i__28365__auto___41381 + (1));
i__28365__auto___41381 = G__41382;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__41360){
var map__41361 = p__41360;
var map__41361__$1 = ((((!((map__41361 == null)))?((((map__41361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41361):map__41361);
var args = map__41361__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__41363 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__41363__$1 = ((((!((map__41363 == null)))?((((map__41363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41363):map__41363);
var state = map__41363__$1;
var c_search = cljs.core.get.call(null,map__41363__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__41363__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function() { 
var G__41383__delegate = function (p__41365){
var map__41366 = p__41365;
var map__41366__$1 = ((((!((map__41366 == null)))?((((map__41366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41366):map__41366);
var args__$1 = map__41366__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__41366__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__41368 = cljs.core.deref.call(null,state_atom);
var map__41368__$1 = ((((!((map__41368 == null)))?((((map__41368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41368):map__41368);
var state__$1 = map__41368__$1;
var suggestions = cljs.core.get.call(null,map__41368__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__41368__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__41368__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__41368__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function re_com$typeahead$iter__41370(s__41371){
return (new cljs.core.LazySeq(null,((function (map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function (){
var s__41371__$1 = s__41371;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41371__$1);
if(temp__4657__auto__){
var s__41371__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41371__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__41371__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__41373 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__41372 = (0);
while(true){
if((i__41372 < size__28002__auto__)){
var vec__41374 = cljs.core._nth.call(null,c__28001__auto__,i__41372);
var i = cljs.core.nth.call(null,vec__41374,(0),null);
var s = cljs.core.nth.call(null,vec__41374,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__41373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__41372,selected_QMARK_,vec__41374,i,s,c__28001__auto__,size__28002__auto__,b__41373,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__41372,selected_QMARK_,vec__41374,i,s,c__28001__auto__,size__28002__auto__,b__41373,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__41372,selected_QMARK_,vec__41374,i,s,c__28001__auto__,size__28002__auto__,b__41373,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function (p1__41358_SHARP_){
p1__41358_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__41372,selected_QMARK_,vec__41374,i,s,c__28001__auto__,size__28002__auto__,b__41373,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__41384 = (i__41372 + (1));
i__41372 = G__41384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41373),re_com$typeahead$iter__41370.call(null,cljs.core.chunk_rest.call(null,s__41371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41373),null);
}
} else {
var vec__41377 = cljs.core.first.call(null,s__41371__$2);
var i = cljs.core.nth.call(null,vec__41377,(0),null);
var s = cljs.core.nth.call(null,vec__41377,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__41377,i,s,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__41377,i,s,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__41377,i,s,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args){
return (function (p1__41358_SHARP_){
p1__41358_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__41377,i,s,s__41371__$2,temp__4657__auto__,map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__41370.call(null,cljs.core.rest.call(null,s__41371__$2)));
}
} else {
return null;
}
break;
}
});})(map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
,null,null));
});})(map__41368,map__41368__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41366,map__41366__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__41383 = function (var_args){
var p__41365 = null;
if (arguments.length > 0) {
var G__41385__i = 0, G__41385__a = new Array(arguments.length -  0);
while (G__41385__i < G__41385__a.length) {G__41385__a[G__41385__i] = arguments[G__41385__i + 0]; ++G__41385__i;}
  p__41365 = new cljs.core.IndexedSeq(G__41385__a,0,null);
} 
return G__41383__delegate.call(this,p__41365);};
G__41383.cljs$lang$maxFixedArity = 0;
G__41383.cljs$lang$applyTo = (function (arglist__41386){
var p__41365 = cljs.core.seq(arglist__41386);
return G__41383__delegate(p__41365);
});
G__41383.cljs$core$IFn$_invoke$arity$variadic = G__41383__delegate;
return G__41383;
})()
;
;})(map__41363,map__41363__$1,state,c_search,c_input,state_atom,input_text_model,map__41361,map__41361__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq41359){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41359));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__30623__auto___41467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___41467,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___41467,out){
return (function (state_41437){
var state_val_41438 = (state_41437[(1)]);
if((state_val_41438 === (7))){
var inst_41392 = (state_41437[(2)]);
var state_41437__$1 = state_41437;
var statearr_41439_41468 = state_41437__$1;
(statearr_41439_41468[(2)] = inst_41392);

(statearr_41439_41468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (1))){
var inst_41387 = null;
var state_41437__$1 = (function (){var statearr_41440 = state_41437;
(statearr_41440[(7)] = inst_41387);

return statearr_41440;
})();
var statearr_41441_41469 = state_41437__$1;
(statearr_41441_41469[(2)] = null);

(statearr_41441_41469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (4))){
var state_41437__$1 = state_41437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41437__$1,(7),in$);
} else {
if((state_val_41438 === (15))){
var inst_41422 = (state_41437[(2)]);
var state_41437__$1 = (function (){var statearr_41442 = state_41437;
(statearr_41442[(8)] = inst_41422);

return statearr_41442;
})();
var statearr_41443_41470 = state_41437__$1;
(statearr_41443_41470[(2)] = null);

(statearr_41443_41470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (13))){
var inst_41410 = (state_41437[(9)]);
var inst_41424 = cljs.core._EQ_.call(null,inst_41410,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_41437__$1 = state_41437;
if(inst_41424){
var statearr_41444_41471 = state_41437__$1;
(statearr_41444_41471[(1)] = (16));

} else {
var statearr_41445_41472 = state_41437__$1;
(statearr_41445_41472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (6))){
var inst_41396 = (state_41437[(10)]);
var inst_41395 = (state_41437[(2)]);
var inst_41396__$1 = cljs.core.async.timeout.call(null,ms);
var inst_41404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41405 = [in$,inst_41396__$1];
var inst_41406 = (new cljs.core.PersistentVector(null,2,(5),inst_41404,inst_41405,null));
var state_41437__$1 = (function (){var statearr_41446 = state_41437;
(statearr_41446[(11)] = inst_41395);

(statearr_41446[(10)] = inst_41396__$1);

return statearr_41446;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41437__$1,(8),inst_41406);
} else {
if((state_val_41438 === (17))){
var state_41437__$1 = state_41437;
var statearr_41447_41473 = state_41437__$1;
(statearr_41447_41473[(2)] = null);

(statearr_41447_41473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (3))){
var inst_41435 = (state_41437[(2)]);
var state_41437__$1 = state_41437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41437__$1,inst_41435);
} else {
if((state_val_41438 === (12))){
var inst_41395 = (state_41437[(11)]);
var state_41437__$1 = state_41437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41437__$1,(15),out,inst_41395);
} else {
if((state_val_41438 === (2))){
var inst_41387 = (state_41437[(7)]);
var inst_41389 = (inst_41387 == null);
var state_41437__$1 = state_41437;
if(cljs.core.truth_(inst_41389)){
var statearr_41448_41474 = state_41437__$1;
(statearr_41448_41474[(1)] = (4));

} else {
var statearr_41449_41475 = state_41437__$1;
(statearr_41449_41475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (11))){
var inst_41432 = (state_41437[(2)]);
var inst_41387 = inst_41432;
var state_41437__$1 = (function (){var statearr_41450 = state_41437;
(statearr_41450[(7)] = inst_41387);

return statearr_41450;
})();
var statearr_41451_41476 = state_41437__$1;
(statearr_41451_41476[(2)] = null);

(statearr_41451_41476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (9))){
var inst_41408 = (state_41437[(12)]);
var inst_41416 = cljs.core.nth.call(null,inst_41408,(0),null);
var inst_41417 = cljs.core.nth.call(null,inst_41408,(1),null);
var state_41437__$1 = (function (){var statearr_41452 = state_41437;
(statearr_41452[(13)] = inst_41417);

return statearr_41452;
})();
var statearr_41453_41477 = state_41437__$1;
(statearr_41453_41477[(2)] = inst_41416);

(statearr_41453_41477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (5))){
var inst_41387 = (state_41437[(7)]);
var state_41437__$1 = state_41437;
var statearr_41454_41478 = state_41437__$1;
(statearr_41454_41478[(2)] = inst_41387);

(statearr_41454_41478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (14))){
var inst_41430 = (state_41437[(2)]);
var state_41437__$1 = state_41437;
var statearr_41455_41479 = state_41437__$1;
(statearr_41455_41479[(2)] = inst_41430);

(statearr_41455_41479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (16))){
var inst_41409 = (state_41437[(14)]);
var state_41437__$1 = state_41437;
var statearr_41456_41480 = state_41437__$1;
(statearr_41456_41480[(2)] = inst_41409);

(statearr_41456_41480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (10))){
var inst_41410 = (state_41437[(9)]);
var inst_41396 = (state_41437[(10)]);
var inst_41419 = cljs.core._EQ_.call(null,inst_41410,inst_41396);
var state_41437__$1 = state_41437;
if(inst_41419){
var statearr_41457_41481 = state_41437__$1;
(statearr_41457_41481[(1)] = (12));

} else {
var statearr_41458_41482 = state_41437__$1;
(statearr_41458_41482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (18))){
var inst_41428 = (state_41437[(2)]);
var state_41437__$1 = state_41437;
var statearr_41459_41483 = state_41437__$1;
(statearr_41459_41483[(2)] = inst_41428);

(statearr_41459_41483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41438 === (8))){
var inst_41408 = (state_41437[(12)]);
var inst_41410 = (state_41437[(9)]);
var inst_41408__$1 = (state_41437[(2)]);
var inst_41409 = cljs.core.nth.call(null,inst_41408__$1,(0),null);
var inst_41410__$1 = cljs.core.nth.call(null,inst_41408__$1,(1),null);
var inst_41411 = cljs.core._EQ_.call(null,inst_41410__$1,in$);
var state_41437__$1 = (function (){var statearr_41460 = state_41437;
(statearr_41460[(12)] = inst_41408__$1);

(statearr_41460[(9)] = inst_41410__$1);

(statearr_41460[(14)] = inst_41409);

return statearr_41460;
})();
if(inst_41411){
var statearr_41461_41484 = state_41437__$1;
(statearr_41461_41484[(1)] = (9));

} else {
var statearr_41462_41485 = state_41437__$1;
(statearr_41462_41485[(1)] = (10));

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
});})(c__30623__auto___41467,out))
;
return ((function (switch__30535__auto__,c__30623__auto___41467,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30536__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30536__auto____0 = (function (){
var statearr_41463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41463[(0)] = re_com$typeahead$debounce_$_state_machine__30536__auto__);

(statearr_41463[(1)] = (1));

return statearr_41463;
});
var re_com$typeahead$debounce_$_state_machine__30536__auto____1 = (function (state_41437){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_41437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e41464){if((e41464 instanceof Object)){
var ex__30539__auto__ = e41464;
var statearr_41465_41486 = state_41437;
(statearr_41465_41486[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41487 = state_41437;
state_41437 = G__41487;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30536__auto__ = function(state_41437){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30536__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30536__auto____1.call(this,state_41437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30536__auto____0;
re_com$typeahead$debounce_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30536__auto____1;
return re_com$typeahead$debounce_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___41467,out))
})();
var state__30625__auto__ = (function (){var statearr_41466 = f__30624__auto__.call(null);
(statearr_41466[(6)] = c__30623__auto___41467);

return statearr_41466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___41467,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1515855032990
