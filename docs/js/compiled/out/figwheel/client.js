// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38051){if((e38051 instanceof Error)){
var e = e38051;
return "Error: Unable to stringify";
} else {
throw e38051;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38054 = arguments.length;
switch (G__38054) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38052_SHARP_){
if(typeof p1__38052_SHARP_ === 'string'){
return p1__38052_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38052_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38057 = arguments.length;
var i__28365__auto___38058 = (0);
while(true){
if((i__28365__auto___38058 < len__28364__auto___38057)){
args__28371__auto__.push((arguments[i__28365__auto___38058]));

var G__38059 = (i__28365__auto___38058 + (1));
i__28365__auto___38058 = G__38059;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38056){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38056));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38061 = arguments.length;
var i__28365__auto___38062 = (0);
while(true){
if((i__28365__auto___38062 < len__28364__auto___38061)){
args__28371__auto__.push((arguments[i__28365__auto___38062]));

var G__38063 = (i__28365__auto___38062 + (1));
i__28365__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38060){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38060));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38064){
var map__38065 = p__38064;
var map__38065__$1 = ((((!((map__38065 == null)))?((((map__38065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38065):map__38065);
var message = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27195__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27183__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27183__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27183__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30624__auto___38144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38144,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38144,ch){
return (function (state_38116){
var state_val_38117 = (state_38116[(1)]);
if((state_val_38117 === (7))){
var inst_38112 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38118_38145 = state_38116__$1;
(statearr_38118_38145[(2)] = inst_38112);

(statearr_38118_38145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (1))){
var state_38116__$1 = state_38116;
var statearr_38119_38146 = state_38116__$1;
(statearr_38119_38146[(2)] = null);

(statearr_38119_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (4))){
var inst_38069 = (state_38116[(7)]);
var inst_38069__$1 = (state_38116[(2)]);
var state_38116__$1 = (function (){var statearr_38120 = state_38116;
(statearr_38120[(7)] = inst_38069__$1);

return statearr_38120;
})();
if(cljs.core.truth_(inst_38069__$1)){
var statearr_38121_38147 = state_38116__$1;
(statearr_38121_38147[(1)] = (5));

} else {
var statearr_38122_38148 = state_38116__$1;
(statearr_38122_38148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (15))){
var inst_38076 = (state_38116[(8)]);
var inst_38091 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38076);
var inst_38092 = cljs.core.first.call(null,inst_38091);
var inst_38093 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38092);
var inst_38094 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38093)].join('');
var inst_38095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38094);
var state_38116__$1 = state_38116;
var statearr_38123_38149 = state_38116__$1;
(statearr_38123_38149[(2)] = inst_38095);

(statearr_38123_38149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (13))){
var inst_38100 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38124_38150 = state_38116__$1;
(statearr_38124_38150[(2)] = inst_38100);

(statearr_38124_38150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (6))){
var state_38116__$1 = state_38116;
var statearr_38125_38151 = state_38116__$1;
(statearr_38125_38151[(2)] = null);

(statearr_38125_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (17))){
var inst_38098 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38126_38152 = state_38116__$1;
(statearr_38126_38152[(2)] = inst_38098);

(statearr_38126_38152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (3))){
var inst_38114 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38116__$1,inst_38114);
} else {
if((state_val_38117 === (12))){
var inst_38075 = (state_38116[(9)]);
var inst_38089 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38075,opts);
var state_38116__$1 = state_38116;
if(cljs.core.truth_(inst_38089)){
var statearr_38127_38153 = state_38116__$1;
(statearr_38127_38153[(1)] = (15));

} else {
var statearr_38128_38154 = state_38116__$1;
(statearr_38128_38154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (2))){
var state_38116__$1 = state_38116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38116__$1,(4),ch);
} else {
if((state_val_38117 === (11))){
var inst_38076 = (state_38116[(8)]);
var inst_38081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38082 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38076);
var inst_38083 = cljs.core.async.timeout.call(null,(1000));
var inst_38084 = [inst_38082,inst_38083];
var inst_38085 = (new cljs.core.PersistentVector(null,2,(5),inst_38081,inst_38084,null));
var state_38116__$1 = state_38116;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38116__$1,(14),inst_38085);
} else {
if((state_val_38117 === (9))){
var inst_38076 = (state_38116[(8)]);
var inst_38102 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38103 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38076);
var inst_38104 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38103);
var inst_38105 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38104)].join('');
var inst_38106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38105);
var state_38116__$1 = (function (){var statearr_38129 = state_38116;
(statearr_38129[(10)] = inst_38102);

return statearr_38129;
})();
var statearr_38130_38155 = state_38116__$1;
(statearr_38130_38155[(2)] = inst_38106);

(statearr_38130_38155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (5))){
var inst_38069 = (state_38116[(7)]);
var inst_38071 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38072 = (new cljs.core.PersistentArrayMap(null,2,inst_38071,null));
var inst_38073 = (new cljs.core.PersistentHashSet(null,inst_38072,null));
var inst_38074 = figwheel.client.focus_msgs.call(null,inst_38073,inst_38069);
var inst_38075 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38074);
var inst_38076 = cljs.core.first.call(null,inst_38074);
var inst_38077 = figwheel.client.autoload_QMARK_.call(null);
var state_38116__$1 = (function (){var statearr_38131 = state_38116;
(statearr_38131[(8)] = inst_38076);

(statearr_38131[(9)] = inst_38075);

return statearr_38131;
})();
if(cljs.core.truth_(inst_38077)){
var statearr_38132_38156 = state_38116__$1;
(statearr_38132_38156[(1)] = (8));

} else {
var statearr_38133_38157 = state_38116__$1;
(statearr_38133_38157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (14))){
var inst_38087 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38134_38158 = state_38116__$1;
(statearr_38134_38158[(2)] = inst_38087);

(statearr_38134_38158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (16))){
var state_38116__$1 = state_38116;
var statearr_38135_38159 = state_38116__$1;
(statearr_38135_38159[(2)] = null);

(statearr_38135_38159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (10))){
var inst_38108 = (state_38116[(2)]);
var state_38116__$1 = (function (){var statearr_38136 = state_38116;
(statearr_38136[(11)] = inst_38108);

return statearr_38136;
})();
var statearr_38137_38160 = state_38116__$1;
(statearr_38137_38160[(2)] = null);

(statearr_38137_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (8))){
var inst_38075 = (state_38116[(9)]);
var inst_38079 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38075,opts);
var state_38116__$1 = state_38116;
if(cljs.core.truth_(inst_38079)){
var statearr_38138_38161 = state_38116__$1;
(statearr_38138_38161[(1)] = (11));

} else {
var statearr_38139_38162 = state_38116__$1;
(statearr_38139_38162[(1)] = (12));

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
});})(c__30624__auto___38144,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38144,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38140[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__);

(statearr_38140[(1)] = (1));

return statearr_38140;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1 = (function (state_38116){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38141){if((e38141 instanceof Object)){
var ex__30540__auto__ = e38141;
var statearr_38142_38163 = state_38116;
(statearr_38142_38163[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38164 = state_38116;
state_38116 = G__38164;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = function(state_38116){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1.call(this,state_38116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38144,ch))
})();
var state__30626__auto__ = (function (){var statearr_38143 = f__30625__auto__.call(null);
(statearr_38143[(6)] = c__30624__auto___38144);

return statearr_38143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38144,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38165_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38165_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38167 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38167){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38166){if((e38166 instanceof Error)){
var e = e38166;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38167], null));
} else {
var e = e38166;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38167))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38168){
var map__38169 = p__38168;
var map__38169__$1 = ((((!((map__38169 == null)))?((((map__38169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38169):map__38169);
var opts = map__38169__$1;
var build_id = cljs.core.get.call(null,map__38169__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38169,map__38169__$1,opts,build_id){
return (function (p__38171){
var vec__38172 = p__38171;
var seq__38173 = cljs.core.seq.call(null,vec__38172);
var first__38174 = cljs.core.first.call(null,seq__38173);
var seq__38173__$1 = cljs.core.next.call(null,seq__38173);
var map__38175 = first__38174;
var map__38175__$1 = ((((!((map__38175 == null)))?((((map__38175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38175):map__38175);
var msg = map__38175__$1;
var msg_name = cljs.core.get.call(null,map__38175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38173__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38172,seq__38173,first__38174,seq__38173__$1,map__38175,map__38175__$1,msg,msg_name,_,map__38169,map__38169__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38172,seq__38173,first__38174,seq__38173__$1,map__38175,map__38175__$1,msg,msg_name,_,map__38169,map__38169__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38169,map__38169__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38177){
var vec__38178 = p__38177;
var seq__38179 = cljs.core.seq.call(null,vec__38178);
var first__38180 = cljs.core.first.call(null,seq__38179);
var seq__38179__$1 = cljs.core.next.call(null,seq__38179);
var map__38181 = first__38180;
var map__38181__$1 = ((((!((map__38181 == null)))?((((map__38181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38181):map__38181);
var msg = map__38181__$1;
var msg_name = cljs.core.get.call(null,map__38181__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38179__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38183){
var map__38184 = p__38183;
var map__38184__$1 = ((((!((map__38184 == null)))?((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38184):map__38184);
var on_compile_warning = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38184,map__38184__$1,on_compile_warning,on_compile_fail){
return (function (p__38186){
var vec__38187 = p__38186;
var seq__38188 = cljs.core.seq.call(null,vec__38187);
var first__38189 = cljs.core.first.call(null,seq__38188);
var seq__38188__$1 = cljs.core.next.call(null,seq__38188);
var map__38190 = first__38189;
var map__38190__$1 = ((((!((map__38190 == null)))?((((map__38190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38190):map__38190);
var msg = map__38190__$1;
var msg_name = cljs.core.get.call(null,map__38190__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38188__$1;
var pred__38192 = cljs.core._EQ_;
var expr__38193 = msg_name;
if(cljs.core.truth_(pred__38192.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38193))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38192.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38193))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38184,map__38184__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,msg_hist,msg_names,msg){
return (function (state_38282){
var state_val_38283 = (state_38282[(1)]);
if((state_val_38283 === (7))){
var inst_38202 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38202)){
var statearr_38284_38331 = state_38282__$1;
(statearr_38284_38331[(1)] = (8));

} else {
var statearr_38285_38332 = state_38282__$1;
(statearr_38285_38332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (20))){
var inst_38276 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38286_38333 = state_38282__$1;
(statearr_38286_38333[(2)] = inst_38276);

(statearr_38286_38333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (27))){
var inst_38272 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38287_38334 = state_38282__$1;
(statearr_38287_38334[(2)] = inst_38272);

(statearr_38287_38334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (1))){
var inst_38195 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38195)){
var statearr_38288_38335 = state_38282__$1;
(statearr_38288_38335[(1)] = (2));

} else {
var statearr_38289_38336 = state_38282__$1;
(statearr_38289_38336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (24))){
var inst_38274 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38290_38337 = state_38282__$1;
(statearr_38290_38337[(2)] = inst_38274);

(statearr_38290_38337[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (4))){
var inst_38280 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38282__$1,inst_38280);
} else {
if((state_val_38283 === (15))){
var inst_38278 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38291_38338 = state_38282__$1;
(statearr_38291_38338[(2)] = inst_38278);

(statearr_38291_38338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (21))){
var inst_38231 = (state_38282[(2)]);
var inst_38232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38232);
var state_38282__$1 = (function (){var statearr_38292 = state_38282;
(statearr_38292[(7)] = inst_38231);

return statearr_38292;
})();
var statearr_38293_38339 = state_38282__$1;
(statearr_38293_38339[(2)] = inst_38233);

(statearr_38293_38339[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (31))){
var inst_38261 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38261)){
var statearr_38294_38340 = state_38282__$1;
(statearr_38294_38340[(1)] = (34));

} else {
var statearr_38295_38341 = state_38282__$1;
(statearr_38295_38341[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (32))){
var inst_38270 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38296_38342 = state_38282__$1;
(statearr_38296_38342[(2)] = inst_38270);

(statearr_38296_38342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (33))){
var inst_38257 = (state_38282[(2)]);
var inst_38258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38259 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38258);
var state_38282__$1 = (function (){var statearr_38297 = state_38282;
(statearr_38297[(8)] = inst_38257);

return statearr_38297;
})();
var statearr_38298_38343 = state_38282__$1;
(statearr_38298_38343[(2)] = inst_38259);

(statearr_38298_38343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (13))){
var inst_38216 = figwheel.client.heads_up.clear.call(null);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(16),inst_38216);
} else {
if((state_val_38283 === (22))){
var inst_38237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38238 = figwheel.client.heads_up.append_warning_message.call(null,inst_38237);
var state_38282__$1 = state_38282;
var statearr_38299_38344 = state_38282__$1;
(statearr_38299_38344[(2)] = inst_38238);

(statearr_38299_38344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (36))){
var inst_38268 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38300_38345 = state_38282__$1;
(statearr_38300_38345[(2)] = inst_38268);

(statearr_38300_38345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (29))){
var inst_38248 = (state_38282[(2)]);
var inst_38249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38250 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38249);
var state_38282__$1 = (function (){var statearr_38301 = state_38282;
(statearr_38301[(9)] = inst_38248);

return statearr_38301;
})();
var statearr_38302_38346 = state_38282__$1;
(statearr_38302_38346[(2)] = inst_38250);

(statearr_38302_38346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (6))){
var inst_38197 = (state_38282[(10)]);
var state_38282__$1 = state_38282;
var statearr_38303_38347 = state_38282__$1;
(statearr_38303_38347[(2)] = inst_38197);

(statearr_38303_38347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (28))){
var inst_38244 = (state_38282[(2)]);
var inst_38245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38246 = figwheel.client.heads_up.display_warning.call(null,inst_38245);
var state_38282__$1 = (function (){var statearr_38304 = state_38282;
(statearr_38304[(11)] = inst_38244);

return statearr_38304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(29),inst_38246);
} else {
if((state_val_38283 === (25))){
var inst_38242 = figwheel.client.heads_up.clear.call(null);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(28),inst_38242);
} else {
if((state_val_38283 === (34))){
var inst_38263 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(37),inst_38263);
} else {
if((state_val_38283 === (17))){
var inst_38222 = (state_38282[(2)]);
var inst_38223 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38224 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38223);
var state_38282__$1 = (function (){var statearr_38305 = state_38282;
(statearr_38305[(12)] = inst_38222);

return statearr_38305;
})();
var statearr_38306_38348 = state_38282__$1;
(statearr_38306_38348[(2)] = inst_38224);

(statearr_38306_38348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (3))){
var inst_38214 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38214)){
var statearr_38307_38349 = state_38282__$1;
(statearr_38307_38349[(1)] = (13));

} else {
var statearr_38308_38350 = state_38282__$1;
(statearr_38308_38350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (12))){
var inst_38210 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38309_38351 = state_38282__$1;
(statearr_38309_38351[(2)] = inst_38210);

(statearr_38309_38351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (2))){
var inst_38197 = (state_38282[(10)]);
var inst_38197__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38282__$1 = (function (){var statearr_38310 = state_38282;
(statearr_38310[(10)] = inst_38197__$1);

return statearr_38310;
})();
if(cljs.core.truth_(inst_38197__$1)){
var statearr_38311_38352 = state_38282__$1;
(statearr_38311_38352[(1)] = (5));

} else {
var statearr_38312_38353 = state_38282__$1;
(statearr_38312_38353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (23))){
var inst_38240 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38240)){
var statearr_38313_38354 = state_38282__$1;
(statearr_38313_38354[(1)] = (25));

} else {
var statearr_38314_38355 = state_38282__$1;
(statearr_38314_38355[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (35))){
var state_38282__$1 = state_38282;
var statearr_38315_38356 = state_38282__$1;
(statearr_38315_38356[(2)] = null);

(statearr_38315_38356[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (19))){
var inst_38235 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38235)){
var statearr_38316_38357 = state_38282__$1;
(statearr_38316_38357[(1)] = (22));

} else {
var statearr_38317_38358 = state_38282__$1;
(statearr_38317_38358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (11))){
var inst_38206 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38318_38359 = state_38282__$1;
(statearr_38318_38359[(2)] = inst_38206);

(statearr_38318_38359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (9))){
var inst_38208 = figwheel.client.heads_up.clear.call(null);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(12),inst_38208);
} else {
if((state_val_38283 === (5))){
var inst_38199 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38282__$1 = state_38282;
var statearr_38319_38360 = state_38282__$1;
(statearr_38319_38360[(2)] = inst_38199);

(statearr_38319_38360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (14))){
var inst_38226 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38226)){
var statearr_38320_38361 = state_38282__$1;
(statearr_38320_38361[(1)] = (18));

} else {
var statearr_38321_38362 = state_38282__$1;
(statearr_38321_38362[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (26))){
var inst_38252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38282__$1 = state_38282;
if(cljs.core.truth_(inst_38252)){
var statearr_38322_38363 = state_38282__$1;
(statearr_38322_38363[(1)] = (30));

} else {
var statearr_38323_38364 = state_38282__$1;
(statearr_38323_38364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (16))){
var inst_38218 = (state_38282[(2)]);
var inst_38219 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38220 = figwheel.client.heads_up.display_exception.call(null,inst_38219);
var state_38282__$1 = (function (){var statearr_38324 = state_38282;
(statearr_38324[(13)] = inst_38218);

return statearr_38324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(17),inst_38220);
} else {
if((state_val_38283 === (30))){
var inst_38254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38255 = figwheel.client.heads_up.display_warning.call(null,inst_38254);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(33),inst_38255);
} else {
if((state_val_38283 === (10))){
var inst_38212 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38325_38365 = state_38282__$1;
(statearr_38325_38365[(2)] = inst_38212);

(statearr_38325_38365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (18))){
var inst_38228 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38229 = figwheel.client.heads_up.display_exception.call(null,inst_38228);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(21),inst_38229);
} else {
if((state_val_38283 === (37))){
var inst_38265 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38326_38366 = state_38282__$1;
(statearr_38326_38366[(2)] = inst_38265);

(statearr_38326_38366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (8))){
var inst_38204 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(11),inst_38204);
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
}
});})(c__30624__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30536__auto__,c__30624__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0 = (function (){
var statearr_38327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38327[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__);

(statearr_38327[(1)] = (1));

return statearr_38327;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1 = (function (state_38282){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38328){if((e38328 instanceof Object)){
var ex__30540__auto__ = e38328;
var statearr_38329_38367 = state_38282;
(statearr_38329_38367[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38368 = state_38282;
state_38282 = G__38368;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__ = function(state_38282){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1.call(this,state_38282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,msg_hist,msg_names,msg))
})();
var state__30626__auto__ = (function (){var statearr_38330 = f__30625__auto__.call(null);
(statearr_38330[(6)] = c__30624__auto__);

return statearr_38330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,msg_hist,msg_names,msg))
);

return c__30624__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30624__auto___38397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38397,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38397,ch){
return (function (state_38383){
var state_val_38384 = (state_38383[(1)]);
if((state_val_38384 === (1))){
var state_38383__$1 = state_38383;
var statearr_38385_38398 = state_38383__$1;
(statearr_38385_38398[(2)] = null);

(statearr_38385_38398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38384 === (2))){
var state_38383__$1 = state_38383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38383__$1,(4),ch);
} else {
if((state_val_38384 === (3))){
var inst_38381 = (state_38383[(2)]);
var state_38383__$1 = state_38383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38383__$1,inst_38381);
} else {
if((state_val_38384 === (4))){
var inst_38371 = (state_38383[(7)]);
var inst_38371__$1 = (state_38383[(2)]);
var state_38383__$1 = (function (){var statearr_38386 = state_38383;
(statearr_38386[(7)] = inst_38371__$1);

return statearr_38386;
})();
if(cljs.core.truth_(inst_38371__$1)){
var statearr_38387_38399 = state_38383__$1;
(statearr_38387_38399[(1)] = (5));

} else {
var statearr_38388_38400 = state_38383__$1;
(statearr_38388_38400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38384 === (5))){
var inst_38371 = (state_38383[(7)]);
var inst_38373 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38371);
var state_38383__$1 = state_38383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38383__$1,(8),inst_38373);
} else {
if((state_val_38384 === (6))){
var state_38383__$1 = state_38383;
var statearr_38389_38401 = state_38383__$1;
(statearr_38389_38401[(2)] = null);

(statearr_38389_38401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38384 === (7))){
var inst_38379 = (state_38383[(2)]);
var state_38383__$1 = state_38383;
var statearr_38390_38402 = state_38383__$1;
(statearr_38390_38402[(2)] = inst_38379);

(statearr_38390_38402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38384 === (8))){
var inst_38375 = (state_38383[(2)]);
var state_38383__$1 = (function (){var statearr_38391 = state_38383;
(statearr_38391[(8)] = inst_38375);

return statearr_38391;
})();
var statearr_38392_38403 = state_38383__$1;
(statearr_38392_38403[(2)] = null);

(statearr_38392_38403[(1)] = (2));


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
});})(c__30624__auto___38397,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38397,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38393 = [null,null,null,null,null,null,null,null,null];
(statearr_38393[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30537__auto__);

(statearr_38393[(1)] = (1));

return statearr_38393;
});
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1 = (function (state_38383){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38394){if((e38394 instanceof Object)){
var ex__30540__auto__ = e38394;
var statearr_38395_38404 = state_38383;
(statearr_38395_38404[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38405 = state_38383;
state_38383 = G__38405;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = function(state_38383){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1.call(this,state_38383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38397,ch))
})();
var state__30626__auto__ = (function (){var statearr_38396 = f__30625__auto__.call(null);
(statearr_38396[(6)] = c__30624__auto___38397);

return statearr_38396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38397,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__){
return (function (state_38411){
var state_val_38412 = (state_38411[(1)]);
if((state_val_38412 === (1))){
var inst_38406 = cljs.core.async.timeout.call(null,(3000));
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38411__$1,(2),inst_38406);
} else {
if((state_val_38412 === (2))){
var inst_38408 = (state_38411[(2)]);
var inst_38409 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38411__$1 = (function (){var statearr_38413 = state_38411;
(statearr_38413[(7)] = inst_38408);

return statearr_38413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38411__$1,inst_38409);
} else {
return null;
}
}
});})(c__30624__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38414 = [null,null,null,null,null,null,null,null];
(statearr_38414[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__);

(statearr_38414[(1)] = (1));

return statearr_38414;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1 = (function (state_38411){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38415){if((e38415 instanceof Object)){
var ex__30540__auto__ = e38415;
var statearr_38416_38418 = state_38411;
(statearr_38416_38418[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38419 = state_38411;
state_38411 = G__38419;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__ = function(state_38411){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1.call(this,state_38411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38417 = f__30625__auto__.call(null);
(statearr_38417[(6)] = c__30624__auto__);

return statearr_38417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__))
);

return c__30624__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38426){
var state_val_38427 = (state_38426[(1)]);
if((state_val_38427 === (1))){
var inst_38420 = cljs.core.async.timeout.call(null,(2000));
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38426__$1,(2),inst_38420);
} else {
if((state_val_38427 === (2))){
var inst_38422 = (state_38426[(2)]);
var inst_38423 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38424 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38423);
var state_38426__$1 = (function (){var statearr_38428 = state_38426;
(statearr_38428[(7)] = inst_38422);

return statearr_38428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38426__$1,inst_38424);
} else {
return null;
}
}
});})(c__30624__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38429 = [null,null,null,null,null,null,null,null];
(statearr_38429[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__);

(statearr_38429[(1)] = (1));

return statearr_38429;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1 = (function (state_38426){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38430){if((e38430 instanceof Object)){
var ex__30540__auto__ = e38430;
var statearr_38431_38433 = state_38426;
(statearr_38431_38433[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38434 = state_38426;
state_38426 = G__38434;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__ = function(state_38426){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1.call(this,state_38426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38432 = f__30625__auto__.call(null);
(statearr_38432[(6)] = c__30624__auto__);

return statearr_38432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,figwheel_version,temp__4657__auto__))
);

return c__30624__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38435){
var map__38436 = p__38435;
var map__38436__$1 = ((((!((map__38436 == null)))?((((map__38436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38436):map__38436);
var file = cljs.core.get.call(null,map__38436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38436__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38436__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38438 = "";
var G__38438__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38438),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38438);
var G__38438__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38438__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38438__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38438__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38438__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38439){
var map__38440 = p__38439;
var map__38440__$1 = ((((!((map__38440 == null)))?((((map__38440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38440):map__38440);
var ed = map__38440__$1;
var formatted_exception = cljs.core.get.call(null,map__38440__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38440__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38440__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38442_38446 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38443_38447 = null;
var count__38444_38448 = (0);
var i__38445_38449 = (0);
while(true){
if((i__38445_38449 < count__38444_38448)){
var msg_38450 = cljs.core._nth.call(null,chunk__38443_38447,i__38445_38449);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38450);

var G__38451 = seq__38442_38446;
var G__38452 = chunk__38443_38447;
var G__38453 = count__38444_38448;
var G__38454 = (i__38445_38449 + (1));
seq__38442_38446 = G__38451;
chunk__38443_38447 = G__38452;
count__38444_38448 = G__38453;
i__38445_38449 = G__38454;
continue;
} else {
var temp__4657__auto___38455 = cljs.core.seq.call(null,seq__38442_38446);
if(temp__4657__auto___38455){
var seq__38442_38456__$1 = temp__4657__auto___38455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38442_38456__$1)){
var c__28034__auto___38457 = cljs.core.chunk_first.call(null,seq__38442_38456__$1);
var G__38458 = cljs.core.chunk_rest.call(null,seq__38442_38456__$1);
var G__38459 = c__28034__auto___38457;
var G__38460 = cljs.core.count.call(null,c__28034__auto___38457);
var G__38461 = (0);
seq__38442_38446 = G__38458;
chunk__38443_38447 = G__38459;
count__38444_38448 = G__38460;
i__38445_38449 = G__38461;
continue;
} else {
var msg_38462 = cljs.core.first.call(null,seq__38442_38456__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38462);

var G__38463 = cljs.core.next.call(null,seq__38442_38456__$1);
var G__38464 = null;
var G__38465 = (0);
var G__38466 = (0);
seq__38442_38446 = G__38463;
chunk__38443_38447 = G__38464;
count__38444_38448 = G__38465;
i__38445_38449 = G__38466;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38467){
var map__38468 = p__38467;
var map__38468__$1 = ((((!((map__38468 == null)))?((((map__38468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38468):map__38468);
var w = map__38468__$1;
var message = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"docs\\js\\compiled\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"docs\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27183__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38470 = cljs.core.seq.call(null,plugins);
var chunk__38471 = null;
var count__38472 = (0);
var i__38473 = (0);
while(true){
if((i__38473 < count__38472)){
var vec__38474 = cljs.core._nth.call(null,chunk__38471,i__38473);
var k = cljs.core.nth.call(null,vec__38474,(0),null);
var plugin = cljs.core.nth.call(null,vec__38474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38480 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38470,chunk__38471,count__38472,i__38473,pl_38480,vec__38474,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38480.call(null,msg_hist);
});})(seq__38470,chunk__38471,count__38472,i__38473,pl_38480,vec__38474,k,plugin))
);
} else {
}

var G__38481 = seq__38470;
var G__38482 = chunk__38471;
var G__38483 = count__38472;
var G__38484 = (i__38473 + (1));
seq__38470 = G__38481;
chunk__38471 = G__38482;
count__38472 = G__38483;
i__38473 = G__38484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38470);
if(temp__4657__auto__){
var seq__38470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38470__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38470__$1);
var G__38485 = cljs.core.chunk_rest.call(null,seq__38470__$1);
var G__38486 = c__28034__auto__;
var G__38487 = cljs.core.count.call(null,c__28034__auto__);
var G__38488 = (0);
seq__38470 = G__38485;
chunk__38471 = G__38486;
count__38472 = G__38487;
i__38473 = G__38488;
continue;
} else {
var vec__38477 = cljs.core.first.call(null,seq__38470__$1);
var k = cljs.core.nth.call(null,vec__38477,(0),null);
var plugin = cljs.core.nth.call(null,vec__38477,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38489 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38470,chunk__38471,count__38472,i__38473,pl_38489,vec__38477,k,plugin,seq__38470__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38489.call(null,msg_hist);
});})(seq__38470,chunk__38471,count__38472,i__38473,pl_38489,vec__38477,k,plugin,seq__38470__$1,temp__4657__auto__))
);
} else {
}

var G__38490 = cljs.core.next.call(null,seq__38470__$1);
var G__38491 = null;
var G__38492 = (0);
var G__38493 = (0);
seq__38470 = G__38490;
chunk__38471 = G__38491;
count__38472 = G__38492;
i__38473 = G__38493;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38495 = arguments.length;
switch (G__38495) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38496_38501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38497_38502 = null;
var count__38498_38503 = (0);
var i__38499_38504 = (0);
while(true){
if((i__38499_38504 < count__38498_38503)){
var msg_38505 = cljs.core._nth.call(null,chunk__38497_38502,i__38499_38504);
figwheel.client.socket.handle_incoming_message.call(null,msg_38505);

var G__38506 = seq__38496_38501;
var G__38507 = chunk__38497_38502;
var G__38508 = count__38498_38503;
var G__38509 = (i__38499_38504 + (1));
seq__38496_38501 = G__38506;
chunk__38497_38502 = G__38507;
count__38498_38503 = G__38508;
i__38499_38504 = G__38509;
continue;
} else {
var temp__4657__auto___38510 = cljs.core.seq.call(null,seq__38496_38501);
if(temp__4657__auto___38510){
var seq__38496_38511__$1 = temp__4657__auto___38510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38496_38511__$1)){
var c__28034__auto___38512 = cljs.core.chunk_first.call(null,seq__38496_38511__$1);
var G__38513 = cljs.core.chunk_rest.call(null,seq__38496_38511__$1);
var G__38514 = c__28034__auto___38512;
var G__38515 = cljs.core.count.call(null,c__28034__auto___38512);
var G__38516 = (0);
seq__38496_38501 = G__38513;
chunk__38497_38502 = G__38514;
count__38498_38503 = G__38515;
i__38499_38504 = G__38516;
continue;
} else {
var msg_38517 = cljs.core.first.call(null,seq__38496_38511__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38517);

var G__38518 = cljs.core.next.call(null,seq__38496_38511__$1);
var G__38519 = null;
var G__38520 = (0);
var G__38521 = (0);
seq__38496_38501 = G__38518;
chunk__38497_38502 = G__38519;
count__38498_38503 = G__38520;
i__38499_38504 = G__38521;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38526 = arguments.length;
var i__28365__auto___38527 = (0);
while(true){
if((i__28365__auto___38527 < len__28364__auto___38526)){
args__28371__auto__.push((arguments[i__28365__auto___38527]));

var G__38528 = (i__28365__auto___38527 + (1));
i__28365__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38523){
var map__38524 = p__38523;
var map__38524__$1 = ((((!((map__38524 == null)))?((((map__38524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38524):map__38524);
var opts = map__38524__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38522){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38522));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38529){if((e38529 instanceof Error)){
var e = e38529;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38529;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38530){
var map__38531 = p__38530;
var map__38531__$1 = ((((!((map__38531 == null)))?((((map__38531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38531):map__38531);
var msg_name = cljs.core.get.call(null,map__38531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515953262634
