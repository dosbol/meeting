// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__42389__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__42389__auto__["add"]).call(o__42389__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__42389__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__42389__auto__["delete"]).call(o__42389__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__42389__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__42389__auto__["has"]).call(o__42389__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__44836 = data;
var target__42394__auto__ = G__44836;
if(cljs.core.truth_(target__42394__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44836)].join('')),"\n","target__42394__auto__"].join('')));
}

(target__42394__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__44836;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_44841 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_44841);
} else {
var seq__44837_44842 = cljs.core.seq.call(null,json_ml);
var chunk__44838_44843 = null;
var count__44839_44844 = (0);
var i__44840_44845 = (0);
while(true){
if((i__44840_44845 < count__44839_44844)){
var item_44846 = cljs.core._nth.call(null,chunk__44838_44843,i__44840_44845);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_44846,new_depth_budget_44841);

var G__44847 = seq__44837_44842;
var G__44848 = chunk__44838_44843;
var G__44849 = count__44839_44844;
var G__44850 = (i__44840_44845 + (1));
seq__44837_44842 = G__44847;
chunk__44838_44843 = G__44848;
count__44839_44844 = G__44849;
i__44840_44845 = G__44850;
continue;
} else {
var temp__4657__auto___44851 = cljs.core.seq.call(null,seq__44837_44842);
if(temp__4657__auto___44851){
var seq__44837_44852__$1 = temp__4657__auto___44851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44837_44852__$1)){
var c__28035__auto___44853 = cljs.core.chunk_first.call(null,seq__44837_44852__$1);
var G__44854 = cljs.core.chunk_rest.call(null,seq__44837_44852__$1);
var G__44855 = c__28035__auto___44853;
var G__44856 = cljs.core.count.call(null,c__28035__auto___44853);
var G__44857 = (0);
seq__44837_44842 = G__44854;
chunk__44838_44843 = G__44855;
count__44839_44844 = G__44856;
i__44840_44845 = G__44857;
continue;
} else {
var item_44858 = cljs.core.first.call(null,seq__44837_44852__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_44858,new_depth_budget_44841);

var G__44859 = cljs.core.next.call(null,seq__44837_44852__$1);
var G__44860 = null;
var G__44861 = (0);
var G__44862 = (0);
seq__44837_44842 = G__44859;
chunk__44838_44843 = G__44860;
count__44839_44844 = G__44861;
i__44840_44845 = G__44862;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__27196__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1514660194011
