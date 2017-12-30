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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__41249){
var map__41250 = p__41249;
var map__41250__$1 = ((((!((map__41250 == null)))?((((map__41250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41250):map__41250);
var args = map__41250__$1;
var on_change = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__41250__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__41252 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27196__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__41252,external_model_value);
} else {
return G__41252;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__41253,event){
var map__41254 = p__41253;
var map__41254__$1 = ((((!((map__41254 == null)))?((((map__41254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41254):map__41254);
var state = map__41254__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41254__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__41254__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__41256 = event;
var G__41256__$1 = (((G__41256 instanceof cljs.core.Keyword))?G__41256.fqn:null);
switch (G__41256__$1) {
case "input-text-blurred":
var and__27184__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27184__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27184__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27196__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41256__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__41258,event){
var map__41259 = p__41258;
var map__41259__$1 = ((((!((map__41259 == null)))?((((map__41259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41259):map__41259);
var state = map__41259__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__41259__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__41261 = event;
var G__41261__$1 = (((G__41261 instanceof cljs.core.Keyword))?G__41261.fqn:null);
switch (G__41261__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__41263,new_value){
var map__41264 = p__41263;
var map__41264__$1 = ((((!((map__41264 == null)))?((((map__41264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41264):map__41264);
var state = map__41264__$1;
var on_change = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__41266,suggestion){
var map__41267 = p__41266;
var map__41267__$1 = ((((!((map__41267 == null)))?((((map__41267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41267):map__41267);
var state = map__41267__$1;
var suggestion_to_string = cljs.core.get.call(null,map__41267__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__41269 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__41269,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__41269;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__41270,index){
var map__41271 = p__41270;
var map__41271__$1 = ((((!((map__41271 == null)))?((((map__41271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41271):map__41271);
var state = map__41271__$1;
var suggestions = cljs.core.get.call(null,map__41271__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__41273 = state;
var G__41273__$1 = cljs.core.assoc.call(null,G__41273,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__41273__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__41273__$1,suggestion):G__41273__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__41273__$2,suggestion);
} else {
return G__41273__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__41274,index){
var map__41275 = p__41274;
var map__41275__$1 = ((((!((map__41275 == null)))?((((map__41275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41275):map__41275);
var state = map__41275__$1;
var suggestions = cljs.core.get.call(null,map__41275__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__41277){
var map__41278 = p__41277;
var map__41278__$1 = ((((!((map__41278 == null)))?((((map__41278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41278):map__41278);
var state = map__41278__$1;
var suggestion_active_index = cljs.core.get.call(null,map__41278__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41280 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__41280,suggestion_active_index);
} else {
return G__41280;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__41281){
var map__41282 = p__41281;
var map__41282__$1 = ((((!((map__41282 == null)))?((((map__41282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41282):map__41282);
var state = map__41282__$1;
var suggestions = cljs.core.get.call(null,map__41282__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__41282__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41284 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__41284,re_com.typeahead.wrap.call(null,((function (){var or__27196__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__41284;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__41285){
var map__41286 = p__41285;
var map__41286__$1 = ((((!((map__41286 == null)))?((((map__41286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41286):map__41286);
var state = map__41286__$1;
var suggestions = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__41288 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__41288,re_com.typeahead.wrap.call(null,((function (){var or__27196__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__41288;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__41289 = state;
var G__41289__$1 = re_com.typeahead.clear_suggestions.call(null,G__41289)
;
var G__41289__$2 = cljs.core.assoc.call(null,G__41289__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__41289__$2,null);
} else {
return G__41289__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__41290){
var map__41291 = p__41290;
var map__41291__$1 = ((((!((map__41291 == null)))?((((map__41291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41291):map__41291);
var state = map__41291__$1;
var input_text = cljs.core.get.call(null,map__41291__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__41291__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__41293 = state;
if(cljs.core.truth_((function (){var and__27184__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27184__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27184__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__41293,input_text);
} else {
return G__41293;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__41294_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__41294_SHARP_);
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_41311){
var state_val_41312 = (state_41311[(1)]);
if((state_val_41312 === (1))){
var state_41311__$1 = state_41311;
var statearr_41313_41325 = state_41311__$1;
(statearr_41313_41325[(2)] = null);

(statearr_41313_41325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41312 === (2))){
var state_41311__$1 = state_41311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41311__$1,(4),c_search);
} else {
if((state_val_41312 === (3))){
var inst_41309 = (state_41311[(2)]);
var state_41311__$1 = state_41311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41311__$1,inst_41309);
} else {
if((state_val_41312 === (4))){
var inst_41297 = (state_41311[(7)]);
var inst_41297__$1 = (state_41311[(2)]);
var inst_41298 = cljs.core.deref.call(null,state_atom);
var inst_41299 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_41298);
var inst_41300 = cljs.core._EQ_.call(null,"",inst_41297__$1);
var state_41311__$1 = (function (){var statearr_41314 = state_41311;
(statearr_41314[(8)] = inst_41299);

(statearr_41314[(7)] = inst_41297__$1);

return statearr_41314;
})();
if(inst_41300){
var statearr_41315_41326 = state_41311__$1;
(statearr_41315_41326[(1)] = (5));

} else {
var statearr_41316_41327 = state_41311__$1;
(statearr_41316_41327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41312 === (5))){
var inst_41302 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_41311__$1 = state_41311;
var statearr_41317_41328 = state_41311__$1;
(statearr_41317_41328[(2)] = inst_41302);

(statearr_41317_41328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41312 === (6))){
var inst_41299 = (state_41311[(8)]);
var inst_41297 = (state_41311[(7)]);
var inst_41304 = re_com.typeahead.search_data_source_BANG_.call(null,inst_41299,state_atom,inst_41297);
var state_41311__$1 = state_41311;
var statearr_41318_41329 = state_41311__$1;
(statearr_41318_41329[(2)] = inst_41304);

(statearr_41318_41329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41312 === (7))){
var inst_41306 = (state_41311[(2)]);
var state_41311__$1 = (function (){var statearr_41319 = state_41311;
(statearr_41319[(9)] = inst_41306);

return statearr_41319;
})();
var statearr_41320_41330 = state_41311__$1;
(statearr_41320_41330[(2)] = null);

(statearr_41320_41330[(1)] = (2));


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
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____0 = (function (){
var statearr_41321 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41321[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__);

(statearr_41321[(1)] = (1));

return statearr_41321;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____1 = (function (state_41311){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41322){if((e41322 instanceof Object)){
var ex__30541__auto__ = e41322;
var statearr_41323_41331 = state_41311;
(statearr_41323_41331[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41332 = state_41311;
state_41311 = G__41332;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__ = function(state_41311){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____1.call(this,state_41311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_41324 = f__30626__auto__.call(null);
(statearr_41324[(6)] = c__30625__auto__);

return statearr_41324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__41334 = cljs.core.deref.call(null,state_atom);
var map__41334__$1 = ((((!((map__41334 == null)))?((((map__41334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41334):map__41334);
var state = map__41334__$1;
var input_text = cljs.core.get.call(null,map__41334__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__41334__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__41334,map__41334__$1,state,input_text,c_input){
return (function (p1__41333_SHARP_){
var G__41336 = p1__41333_SHARP_;
var G__41336__$1 = cljs.core.assoc.call(null,G__41336,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__41336__$1,new_text);
} else {
return G__41336__$1;
}
});})(map__41334,map__41334__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__41337 = cljs.core._EQ_;
var expr__41338 = event.which;
if(cljs.core.truth_(pred__41337.call(null,goog.events.KeyCodes.UP,expr__41338))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__41337.call(null,goog.events.KeyCodes.DOWN,expr__41338))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__41337.call(null,goog.events.KeyCodes.ENTER,expr__41338))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__41337.call(null,goog.events.KeyCodes.ESC,expr__41338))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__41337.call(null,goog.events.KeyCodes.TAB,expr__41338))){
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
var args__28372__auto__ = [];
var len__28365__auto___41362 = arguments.length;
var i__28366__auto___41363 = (0);
while(true){
if((i__28366__auto___41363 < len__28365__auto___41362)){
args__28372__auto__.push((arguments[i__28366__auto___41363]));

var G__41364 = (i__28366__auto___41363 + (1));
i__28366__auto___41363 = G__41364;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__41342){
var map__41343 = p__41342;
var map__41343__$1 = ((((!((map__41343 == null)))?((((map__41343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41343):map__41343);
var args = map__41343__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__41345 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__41345__$1 = ((((!((map__41345 == null)))?((((map__41345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41345):map__41345);
var state = map__41345__$1;
var c_search = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function() { 
var G__41365__delegate = function (p__41347){
var map__41348 = p__41347;
var map__41348__$1 = ((((!((map__41348 == null)))?((((map__41348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41348):map__41348);
var args__$1 = map__41348__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__41350 = cljs.core.deref.call(null,state_atom);
var map__41350__$1 = ((((!((map__41350 == null)))?((((map__41350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41350):map__41350);
var state__$1 = map__41350__$1;
var suggestions = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27196__auto__ = width;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27196__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28004__auto__ = ((function (map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function re_com$typeahead$iter__41352(s__41353){
return (new cljs.core.LazySeq(null,((function (map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function (){
var s__41353__$1 = s__41353;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41353__$1);
if(temp__4657__auto__){
var s__41353__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41353__$2)){
var c__28002__auto__ = cljs.core.chunk_first.call(null,s__41353__$2);
var size__28003__auto__ = cljs.core.count.call(null,c__28002__auto__);
var b__41355 = cljs.core.chunk_buffer.call(null,size__28003__auto__);
if((function (){var i__41354 = (0);
while(true){
if((i__41354 < size__28003__auto__)){
var vec__41356 = cljs.core._nth.call(null,c__28002__auto__,i__41354);
var i = cljs.core.nth.call(null,vec__41356,(0),null);
var s = cljs.core.nth.call(null,vec__41356,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__41355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__41354,selected_QMARK_,vec__41356,i,s,c__28002__auto__,size__28003__auto__,b__41355,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__41354,selected_QMARK_,vec__41356,i,s,c__28002__auto__,size__28003__auto__,b__41355,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__41354,selected_QMARK_,vec__41356,i,s,c__28002__auto__,size__28003__auto__,b__41355,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function (p1__41340_SHARP_){
p1__41340_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__41354,selected_QMARK_,vec__41356,i,s,c__28002__auto__,size__28003__auto__,b__41355,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__41366 = (i__41354 + (1));
i__41354 = G__41366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41355),re_com$typeahead$iter__41352.call(null,cljs.core.chunk_rest.call(null,s__41353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41355),null);
}
} else {
var vec__41359 = cljs.core.first.call(null,s__41353__$2);
var i = cljs.core.nth.call(null,vec__41359,(0),null);
var s = cljs.core.nth.call(null,vec__41359,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__41359,i,s,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__41359,i,s,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__41359,i,s,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args){
return (function (p1__41340_SHARP_){
p1__41340_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__41359,i,s,s__41353__$2,temp__4657__auto__,map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__41352.call(null,cljs.core.rest.call(null,s__41353__$2)));
}
} else {
return null;
}
break;
}
});})(map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
,null,null));
});})(map__41350,map__41350__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__41348,map__41348__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
;
return iter__28004__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__41365 = function (var_args){
var p__41347 = null;
if (arguments.length > 0) {
var G__41367__i = 0, G__41367__a = new Array(arguments.length -  0);
while (G__41367__i < G__41367__a.length) {G__41367__a[G__41367__i] = arguments[G__41367__i + 0]; ++G__41367__i;}
  p__41347 = new cljs.core.IndexedSeq(G__41367__a,0,null);
} 
return G__41365__delegate.call(this,p__41347);};
G__41365.cljs$lang$maxFixedArity = 0;
G__41365.cljs$lang$applyTo = (function (arglist__41368){
var p__41347 = cljs.core.seq(arglist__41368);
return G__41365__delegate(p__41347);
});
G__41365.cljs$core$IFn$_invoke$arity$variadic = G__41365__delegate;
return G__41365;
})()
;
;})(map__41345,map__41345__$1,state,c_search,c_input,state_atom,input_text_model,map__41343,map__41343__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq41341){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41341));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__30625__auto___41449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___41449,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___41449,out){
return (function (state_41419){
var state_val_41420 = (state_41419[(1)]);
if((state_val_41420 === (7))){
var inst_41374 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
var statearr_41421_41450 = state_41419__$1;
(statearr_41421_41450[(2)] = inst_41374);

(statearr_41421_41450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (1))){
var inst_41369 = null;
var state_41419__$1 = (function (){var statearr_41422 = state_41419;
(statearr_41422[(7)] = inst_41369);

return statearr_41422;
})();
var statearr_41423_41451 = state_41419__$1;
(statearr_41423_41451[(2)] = null);

(statearr_41423_41451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (4))){
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41419__$1,(7),in$);
} else {
if((state_val_41420 === (15))){
var inst_41404 = (state_41419[(2)]);
var state_41419__$1 = (function (){var statearr_41424 = state_41419;
(statearr_41424[(8)] = inst_41404);

return statearr_41424;
})();
var statearr_41425_41452 = state_41419__$1;
(statearr_41425_41452[(2)] = null);

(statearr_41425_41452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (13))){
var inst_41392 = (state_41419[(9)]);
var inst_41406 = cljs.core._EQ_.call(null,inst_41392,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_41419__$1 = state_41419;
if(inst_41406){
var statearr_41426_41453 = state_41419__$1;
(statearr_41426_41453[(1)] = (16));

} else {
var statearr_41427_41454 = state_41419__$1;
(statearr_41427_41454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (6))){
var inst_41378 = (state_41419[(10)]);
var inst_41377 = (state_41419[(2)]);
var inst_41378__$1 = cljs.core.async.timeout.call(null,ms);
var inst_41386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41387 = [in$,inst_41378__$1];
var inst_41388 = (new cljs.core.PersistentVector(null,2,(5),inst_41386,inst_41387,null));
var state_41419__$1 = (function (){var statearr_41428 = state_41419;
(statearr_41428[(10)] = inst_41378__$1);

(statearr_41428[(11)] = inst_41377);

return statearr_41428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41419__$1,(8),inst_41388);
} else {
if((state_val_41420 === (17))){
var state_41419__$1 = state_41419;
var statearr_41429_41455 = state_41419__$1;
(statearr_41429_41455[(2)] = null);

(statearr_41429_41455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (3))){
var inst_41417 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41419__$1,inst_41417);
} else {
if((state_val_41420 === (12))){
var inst_41377 = (state_41419[(11)]);
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41419__$1,(15),out,inst_41377);
} else {
if((state_val_41420 === (2))){
var inst_41369 = (state_41419[(7)]);
var inst_41371 = (inst_41369 == null);
var state_41419__$1 = state_41419;
if(cljs.core.truth_(inst_41371)){
var statearr_41430_41456 = state_41419__$1;
(statearr_41430_41456[(1)] = (4));

} else {
var statearr_41431_41457 = state_41419__$1;
(statearr_41431_41457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (11))){
var inst_41414 = (state_41419[(2)]);
var inst_41369 = inst_41414;
var state_41419__$1 = (function (){var statearr_41432 = state_41419;
(statearr_41432[(7)] = inst_41369);

return statearr_41432;
})();
var statearr_41433_41458 = state_41419__$1;
(statearr_41433_41458[(2)] = null);

(statearr_41433_41458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (9))){
var inst_41390 = (state_41419[(12)]);
var inst_41398 = cljs.core.nth.call(null,inst_41390,(0),null);
var inst_41399 = cljs.core.nth.call(null,inst_41390,(1),null);
var state_41419__$1 = (function (){var statearr_41434 = state_41419;
(statearr_41434[(13)] = inst_41399);

return statearr_41434;
})();
var statearr_41435_41459 = state_41419__$1;
(statearr_41435_41459[(2)] = inst_41398);

(statearr_41435_41459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (5))){
var inst_41369 = (state_41419[(7)]);
var state_41419__$1 = state_41419;
var statearr_41436_41460 = state_41419__$1;
(statearr_41436_41460[(2)] = inst_41369);

(statearr_41436_41460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (14))){
var inst_41412 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
var statearr_41437_41461 = state_41419__$1;
(statearr_41437_41461[(2)] = inst_41412);

(statearr_41437_41461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (16))){
var inst_41391 = (state_41419[(14)]);
var state_41419__$1 = state_41419;
var statearr_41438_41462 = state_41419__$1;
(statearr_41438_41462[(2)] = inst_41391);

(statearr_41438_41462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (10))){
var inst_41378 = (state_41419[(10)]);
var inst_41392 = (state_41419[(9)]);
var inst_41401 = cljs.core._EQ_.call(null,inst_41392,inst_41378);
var state_41419__$1 = state_41419;
if(inst_41401){
var statearr_41439_41463 = state_41419__$1;
(statearr_41439_41463[(1)] = (12));

} else {
var statearr_41440_41464 = state_41419__$1;
(statearr_41440_41464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (18))){
var inst_41410 = (state_41419[(2)]);
var state_41419__$1 = state_41419;
var statearr_41441_41465 = state_41419__$1;
(statearr_41441_41465[(2)] = inst_41410);

(statearr_41441_41465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41420 === (8))){
var inst_41392 = (state_41419[(9)]);
var inst_41390 = (state_41419[(12)]);
var inst_41390__$1 = (state_41419[(2)]);
var inst_41391 = cljs.core.nth.call(null,inst_41390__$1,(0),null);
var inst_41392__$1 = cljs.core.nth.call(null,inst_41390__$1,(1),null);
var inst_41393 = cljs.core._EQ_.call(null,inst_41392__$1,in$);
var state_41419__$1 = (function (){var statearr_41442 = state_41419;
(statearr_41442[(9)] = inst_41392__$1);

(statearr_41442[(14)] = inst_41391);

(statearr_41442[(12)] = inst_41390__$1);

return statearr_41442;
})();
if(inst_41393){
var statearr_41443_41466 = state_41419__$1;
(statearr_41443_41466[(1)] = (9));

} else {
var statearr_41444_41467 = state_41419__$1;
(statearr_41444_41467[(1)] = (10));

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
});})(c__30625__auto___41449,out))
;
return ((function (switch__30537__auto__,c__30625__auto___41449,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30538__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30538__auto____0 = (function (){
var statearr_41445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41445[(0)] = re_com$typeahead$debounce_$_state_machine__30538__auto__);

(statearr_41445[(1)] = (1));

return statearr_41445;
});
var re_com$typeahead$debounce_$_state_machine__30538__auto____1 = (function (state_41419){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41446){if((e41446 instanceof Object)){
var ex__30541__auto__ = e41446;
var statearr_41447_41468 = state_41419;
(statearr_41447_41468[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41469 = state_41419;
state_41419 = G__41469;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30538__auto__ = function(state_41419){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30538__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30538__auto____1.call(this,state_41419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30538__auto____0;
re_com$typeahead$debounce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30538__auto____1;
return re_com$typeahead$debounce_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___41449,out))
})();
var state__30627__auto__ = (function (){var statearr_41448 = f__30626__auto__.call(null);
(statearr_41448[(6)] = c__30625__auto___41449);

return statearr_41448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___41449,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1514660172336
