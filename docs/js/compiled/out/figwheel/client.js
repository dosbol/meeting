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
}catch (e36527){if((e36527 instanceof Error)){
var e = e36527;
return "Error: Unable to stringify";
} else {
throw e36527;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36530 = arguments.length;
switch (G__36530) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36528_SHARP_){
if(typeof p1__36528_SHARP_ === 'string'){
return p1__36528_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36528_SHARP_);
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
var len__28364__auto___36533 = arguments.length;
var i__28365__auto___36534 = (0);
while(true){
if((i__28365__auto___36534 < len__28364__auto___36533)){
args__28371__auto__.push((arguments[i__28365__auto___36534]));

var G__36535 = (i__28365__auto___36534 + (1));
i__28365__auto___36534 = G__36535;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36532){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36532));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36537 = arguments.length;
var i__28365__auto___36538 = (0);
while(true){
if((i__28365__auto___36538 < len__28364__auto___36537)){
args__28371__auto__.push((arguments[i__28365__auto___36538]));

var G__36539 = (i__28365__auto___36538 + (1));
i__28365__auto___36538 = G__36539;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36536){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36536));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36540){
var map__36541 = p__36540;
var map__36541__$1 = ((((!((map__36541 == null)))?((((map__36541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36541):map__36541);
var message = cljs.core.get.call(null,map__36541__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29745__auto___36620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___36620,ch){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___36620,ch){
return (function (state_36592){
var state_val_36593 = (state_36592[(1)]);
if((state_val_36593 === (7))){
var inst_36588 = (state_36592[(2)]);
var state_36592__$1 = state_36592;
var statearr_36594_36621 = state_36592__$1;
(statearr_36594_36621[(2)] = inst_36588);

(statearr_36594_36621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (1))){
var state_36592__$1 = state_36592;
var statearr_36595_36622 = state_36592__$1;
(statearr_36595_36622[(2)] = null);

(statearr_36595_36622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (4))){
var inst_36545 = (state_36592[(7)]);
var inst_36545__$1 = (state_36592[(2)]);
var state_36592__$1 = (function (){var statearr_36596 = state_36592;
(statearr_36596[(7)] = inst_36545__$1);

return statearr_36596;
})();
if(cljs.core.truth_(inst_36545__$1)){
var statearr_36597_36623 = state_36592__$1;
(statearr_36597_36623[(1)] = (5));

} else {
var statearr_36598_36624 = state_36592__$1;
(statearr_36598_36624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (15))){
var inst_36552 = (state_36592[(8)]);
var inst_36567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36552);
var inst_36568 = cljs.core.first.call(null,inst_36567);
var inst_36569 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36568);
var inst_36570 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36569)].join('');
var inst_36571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36570);
var state_36592__$1 = state_36592;
var statearr_36599_36625 = state_36592__$1;
(statearr_36599_36625[(2)] = inst_36571);

(statearr_36599_36625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (13))){
var inst_36576 = (state_36592[(2)]);
var state_36592__$1 = state_36592;
var statearr_36600_36626 = state_36592__$1;
(statearr_36600_36626[(2)] = inst_36576);

(statearr_36600_36626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (6))){
var state_36592__$1 = state_36592;
var statearr_36601_36627 = state_36592__$1;
(statearr_36601_36627[(2)] = null);

(statearr_36601_36627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (17))){
var inst_36574 = (state_36592[(2)]);
var state_36592__$1 = state_36592;
var statearr_36602_36628 = state_36592__$1;
(statearr_36602_36628[(2)] = inst_36574);

(statearr_36602_36628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (3))){
var inst_36590 = (state_36592[(2)]);
var state_36592__$1 = state_36592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36592__$1,inst_36590);
} else {
if((state_val_36593 === (12))){
var inst_36551 = (state_36592[(9)]);
var inst_36565 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36551,opts);
var state_36592__$1 = state_36592;
if(cljs.core.truth_(inst_36565)){
var statearr_36603_36629 = state_36592__$1;
(statearr_36603_36629[(1)] = (15));

} else {
var statearr_36604_36630 = state_36592__$1;
(statearr_36604_36630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (2))){
var state_36592__$1 = state_36592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36592__$1,(4),ch);
} else {
if((state_val_36593 === (11))){
var inst_36552 = (state_36592[(8)]);
var inst_36557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36558 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36552);
var inst_36559 = cljs.core.async.timeout.call(null,(1000));
var inst_36560 = [inst_36558,inst_36559];
var inst_36561 = (new cljs.core.PersistentVector(null,2,(5),inst_36557,inst_36560,null));
var state_36592__$1 = state_36592;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36592__$1,(14),inst_36561);
} else {
if((state_val_36593 === (9))){
var inst_36552 = (state_36592[(8)]);
var inst_36578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36579 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36552);
var inst_36580 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36579);
var inst_36581 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36580)].join('');
var inst_36582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36581);
var state_36592__$1 = (function (){var statearr_36605 = state_36592;
(statearr_36605[(10)] = inst_36578);

return statearr_36605;
})();
var statearr_36606_36631 = state_36592__$1;
(statearr_36606_36631[(2)] = inst_36582);

(statearr_36606_36631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (5))){
var inst_36545 = (state_36592[(7)]);
var inst_36547 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36548 = (new cljs.core.PersistentArrayMap(null,2,inst_36547,null));
var inst_36549 = (new cljs.core.PersistentHashSet(null,inst_36548,null));
var inst_36550 = figwheel.client.focus_msgs.call(null,inst_36549,inst_36545);
var inst_36551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36550);
var inst_36552 = cljs.core.first.call(null,inst_36550);
var inst_36553 = figwheel.client.autoload_QMARK_.call(null);
var state_36592__$1 = (function (){var statearr_36607 = state_36592;
(statearr_36607[(8)] = inst_36552);

(statearr_36607[(9)] = inst_36551);

return statearr_36607;
})();
if(cljs.core.truth_(inst_36553)){
var statearr_36608_36632 = state_36592__$1;
(statearr_36608_36632[(1)] = (8));

} else {
var statearr_36609_36633 = state_36592__$1;
(statearr_36609_36633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (14))){
var inst_36563 = (state_36592[(2)]);
var state_36592__$1 = state_36592;
var statearr_36610_36634 = state_36592__$1;
(statearr_36610_36634[(2)] = inst_36563);

(statearr_36610_36634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (16))){
var state_36592__$1 = state_36592;
var statearr_36611_36635 = state_36592__$1;
(statearr_36611_36635[(2)] = null);

(statearr_36611_36635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (10))){
var inst_36584 = (state_36592[(2)]);
var state_36592__$1 = (function (){var statearr_36612 = state_36592;
(statearr_36612[(11)] = inst_36584);

return statearr_36612;
})();
var statearr_36613_36636 = state_36592__$1;
(statearr_36613_36636[(2)] = null);

(statearr_36613_36636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36593 === (8))){
var inst_36551 = (state_36592[(9)]);
var inst_36555 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36551,opts);
var state_36592__$1 = state_36592;
if(cljs.core.truth_(inst_36555)){
var statearr_36614_36637 = state_36592__$1;
(statearr_36614_36637[(1)] = (11));

} else {
var statearr_36615_36638 = state_36592__$1;
(statearr_36615_36638[(1)] = (12));

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
});})(c__29745__auto___36620,ch))
;
return ((function (switch__29657__auto__,c__29745__auto___36620,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____0 = (function (){
var statearr_36616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36616[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__);

(statearr_36616[(1)] = (1));

return statearr_36616;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____1 = (function (state_36592){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_36592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e36617){if((e36617 instanceof Object)){
var ex__29661__auto__ = e36617;
var statearr_36618_36639 = state_36592;
(statearr_36618_36639[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36640 = state_36592;
state_36592 = G__36640;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__ = function(state_36592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____1.call(this,state_36592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29658__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___36620,ch))
})();
var state__29747__auto__ = (function (){var statearr_36619 = f__29746__auto__.call(null);
(statearr_36619[(6)] = c__29745__auto___36620);

return statearr_36619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___36620,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36641_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36641_SHARP_));
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
var base_path_36643 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36643){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36642){if((e36642 instanceof Error)){
var e = e36642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36643], null));
} else {
var e = e36642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36643))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36644){
var map__36645 = p__36644;
var map__36645__$1 = ((((!((map__36645 == null)))?((((map__36645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36645):map__36645);
var opts = map__36645__$1;
var build_id = cljs.core.get.call(null,map__36645__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36645,map__36645__$1,opts,build_id){
return (function (p__36647){
var vec__36648 = p__36647;
var seq__36649 = cljs.core.seq.call(null,vec__36648);
var first__36650 = cljs.core.first.call(null,seq__36649);
var seq__36649__$1 = cljs.core.next.call(null,seq__36649);
var map__36651 = first__36650;
var map__36651__$1 = ((((!((map__36651 == null)))?((((map__36651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36651):map__36651);
var msg = map__36651__$1;
var msg_name = cljs.core.get.call(null,map__36651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36649__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36648,seq__36649,first__36650,seq__36649__$1,map__36651,map__36651__$1,msg,msg_name,_,map__36645,map__36645__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36648,seq__36649,first__36650,seq__36649__$1,map__36651,map__36651__$1,msg,msg_name,_,map__36645,map__36645__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36645,map__36645__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36653){
var vec__36654 = p__36653;
var seq__36655 = cljs.core.seq.call(null,vec__36654);
var first__36656 = cljs.core.first.call(null,seq__36655);
var seq__36655__$1 = cljs.core.next.call(null,seq__36655);
var map__36657 = first__36656;
var map__36657__$1 = ((((!((map__36657 == null)))?((((map__36657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36657):map__36657);
var msg = map__36657__$1;
var msg_name = cljs.core.get.call(null,map__36657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36655__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36659){
var map__36660 = p__36659;
var map__36660__$1 = ((((!((map__36660 == null)))?((((map__36660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36660):map__36660);
var on_compile_warning = cljs.core.get.call(null,map__36660__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36660__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36660,map__36660__$1,on_compile_warning,on_compile_fail){
return (function (p__36662){
var vec__36663 = p__36662;
var seq__36664 = cljs.core.seq.call(null,vec__36663);
var first__36665 = cljs.core.first.call(null,seq__36664);
var seq__36664__$1 = cljs.core.next.call(null,seq__36664);
var map__36666 = first__36665;
var map__36666__$1 = ((((!((map__36666 == null)))?((((map__36666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36666):map__36666);
var msg = map__36666__$1;
var msg_name = cljs.core.get.call(null,map__36666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36664__$1;
var pred__36668 = cljs.core._EQ_;
var expr__36669 = msg_name;
if(cljs.core.truth_(pred__36668.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36669))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36668.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36669))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36660,map__36660__$1,on_compile_warning,on_compile_fail))
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,msg_hist,msg_names,msg){
return (function (state_36758){
var state_val_36759 = (state_36758[(1)]);
if((state_val_36759 === (7))){
var inst_36678 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36678)){
var statearr_36760_36807 = state_36758__$1;
(statearr_36760_36807[(1)] = (8));

} else {
var statearr_36761_36808 = state_36758__$1;
(statearr_36761_36808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (20))){
var inst_36752 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36762_36809 = state_36758__$1;
(statearr_36762_36809[(2)] = inst_36752);

(statearr_36762_36809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (27))){
var inst_36748 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36763_36810 = state_36758__$1;
(statearr_36763_36810[(2)] = inst_36748);

(statearr_36763_36810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (1))){
var inst_36671 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36671)){
var statearr_36764_36811 = state_36758__$1;
(statearr_36764_36811[(1)] = (2));

} else {
var statearr_36765_36812 = state_36758__$1;
(statearr_36765_36812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (24))){
var inst_36750 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36766_36813 = state_36758__$1;
(statearr_36766_36813[(2)] = inst_36750);

(statearr_36766_36813[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (4))){
var inst_36756 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36758__$1,inst_36756);
} else {
if((state_val_36759 === (15))){
var inst_36754 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36767_36814 = state_36758__$1;
(statearr_36767_36814[(2)] = inst_36754);

(statearr_36767_36814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (21))){
var inst_36707 = (state_36758[(2)]);
var inst_36708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36709 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36708);
var state_36758__$1 = (function (){var statearr_36768 = state_36758;
(statearr_36768[(7)] = inst_36707);

return statearr_36768;
})();
var statearr_36769_36815 = state_36758__$1;
(statearr_36769_36815[(2)] = inst_36709);

(statearr_36769_36815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (31))){
var inst_36737 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36737)){
var statearr_36770_36816 = state_36758__$1;
(statearr_36770_36816[(1)] = (34));

} else {
var statearr_36771_36817 = state_36758__$1;
(statearr_36771_36817[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (32))){
var inst_36746 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36772_36818 = state_36758__$1;
(statearr_36772_36818[(2)] = inst_36746);

(statearr_36772_36818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (33))){
var inst_36733 = (state_36758[(2)]);
var inst_36734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36734);
var state_36758__$1 = (function (){var statearr_36773 = state_36758;
(statearr_36773[(8)] = inst_36733);

return statearr_36773;
})();
var statearr_36774_36819 = state_36758__$1;
(statearr_36774_36819[(2)] = inst_36735);

(statearr_36774_36819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (13))){
var inst_36692 = figwheel.client.heads_up.clear.call(null);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(16),inst_36692);
} else {
if((state_val_36759 === (22))){
var inst_36713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36714 = figwheel.client.heads_up.append_warning_message.call(null,inst_36713);
var state_36758__$1 = state_36758;
var statearr_36775_36820 = state_36758__$1;
(statearr_36775_36820[(2)] = inst_36714);

(statearr_36775_36820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (36))){
var inst_36744 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36776_36821 = state_36758__$1;
(statearr_36776_36821[(2)] = inst_36744);

(statearr_36776_36821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (29))){
var inst_36724 = (state_36758[(2)]);
var inst_36725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36726 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36725);
var state_36758__$1 = (function (){var statearr_36777 = state_36758;
(statearr_36777[(9)] = inst_36724);

return statearr_36777;
})();
var statearr_36778_36822 = state_36758__$1;
(statearr_36778_36822[(2)] = inst_36726);

(statearr_36778_36822[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var inst_36673 = (state_36758[(10)]);
var state_36758__$1 = state_36758;
var statearr_36779_36823 = state_36758__$1;
(statearr_36779_36823[(2)] = inst_36673);

(statearr_36779_36823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (28))){
var inst_36720 = (state_36758[(2)]);
var inst_36721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36722 = figwheel.client.heads_up.display_warning.call(null,inst_36721);
var state_36758__$1 = (function (){var statearr_36780 = state_36758;
(statearr_36780[(11)] = inst_36720);

return statearr_36780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(29),inst_36722);
} else {
if((state_val_36759 === (25))){
var inst_36718 = figwheel.client.heads_up.clear.call(null);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(28),inst_36718);
} else {
if((state_val_36759 === (34))){
var inst_36739 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(37),inst_36739);
} else {
if((state_val_36759 === (17))){
var inst_36698 = (state_36758[(2)]);
var inst_36699 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36700 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36699);
var state_36758__$1 = (function (){var statearr_36781 = state_36758;
(statearr_36781[(12)] = inst_36698);

return statearr_36781;
})();
var statearr_36782_36824 = state_36758__$1;
(statearr_36782_36824[(2)] = inst_36700);

(statearr_36782_36824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (3))){
var inst_36690 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36690)){
var statearr_36783_36825 = state_36758__$1;
(statearr_36783_36825[(1)] = (13));

} else {
var statearr_36784_36826 = state_36758__$1;
(statearr_36784_36826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (12))){
var inst_36686 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36785_36827 = state_36758__$1;
(statearr_36785_36827[(2)] = inst_36686);

(statearr_36785_36827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (2))){
var inst_36673 = (state_36758[(10)]);
var inst_36673__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36758__$1 = (function (){var statearr_36786 = state_36758;
(statearr_36786[(10)] = inst_36673__$1);

return statearr_36786;
})();
if(cljs.core.truth_(inst_36673__$1)){
var statearr_36787_36828 = state_36758__$1;
(statearr_36787_36828[(1)] = (5));

} else {
var statearr_36788_36829 = state_36758__$1;
(statearr_36788_36829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (23))){
var inst_36716 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36716)){
var statearr_36789_36830 = state_36758__$1;
(statearr_36789_36830[(1)] = (25));

} else {
var statearr_36790_36831 = state_36758__$1;
(statearr_36790_36831[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (35))){
var state_36758__$1 = state_36758;
var statearr_36791_36832 = state_36758__$1;
(statearr_36791_36832[(2)] = null);

(statearr_36791_36832[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (19))){
var inst_36711 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36711)){
var statearr_36792_36833 = state_36758__$1;
(statearr_36792_36833[(1)] = (22));

} else {
var statearr_36793_36834 = state_36758__$1;
(statearr_36793_36834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (11))){
var inst_36682 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36794_36835 = state_36758__$1;
(statearr_36794_36835[(2)] = inst_36682);

(statearr_36794_36835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (9))){
var inst_36684 = figwheel.client.heads_up.clear.call(null);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(12),inst_36684);
} else {
if((state_val_36759 === (5))){
var inst_36675 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36758__$1 = state_36758;
var statearr_36795_36836 = state_36758__$1;
(statearr_36795_36836[(2)] = inst_36675);

(statearr_36795_36836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (14))){
var inst_36702 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36702)){
var statearr_36796_36837 = state_36758__$1;
(statearr_36796_36837[(1)] = (18));

} else {
var statearr_36797_36838 = state_36758__$1;
(statearr_36797_36838[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (26))){
var inst_36728 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36728)){
var statearr_36798_36839 = state_36758__$1;
(statearr_36798_36839[(1)] = (30));

} else {
var statearr_36799_36840 = state_36758__$1;
(statearr_36799_36840[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (16))){
var inst_36694 = (state_36758[(2)]);
var inst_36695 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36696 = figwheel.client.heads_up.display_exception.call(null,inst_36695);
var state_36758__$1 = (function (){var statearr_36800 = state_36758;
(statearr_36800[(13)] = inst_36694);

return statearr_36800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(17),inst_36696);
} else {
if((state_val_36759 === (30))){
var inst_36730 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36731 = figwheel.client.heads_up.display_warning.call(null,inst_36730);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(33),inst_36731);
} else {
if((state_val_36759 === (10))){
var inst_36688 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36801_36841 = state_36758__$1;
(statearr_36801_36841[(2)] = inst_36688);

(statearr_36801_36841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (18))){
var inst_36704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36705 = figwheel.client.heads_up.display_exception.call(null,inst_36704);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(21),inst_36705);
} else {
if((state_val_36759 === (37))){
var inst_36741 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36802_36842 = state_36758__$1;
(statearr_36802_36842[(2)] = inst_36741);

(statearr_36802_36842[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (8))){
var inst_36680 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36758__$1,(11),inst_36680);
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
});})(c__29745__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29657__auto__,c__29745__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____0 = (function (){
var statearr_36803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36803[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__);

(statearr_36803[(1)] = (1));

return statearr_36803;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____1 = (function (state_36758){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_36758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e36804){if((e36804 instanceof Object)){
var ex__29661__auto__ = e36804;
var statearr_36805_36843 = state_36758;
(statearr_36805_36843[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36844 = state_36758;
state_36758 = G__36844;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__ = function(state_36758){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____1.call(this,state_36758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,msg_hist,msg_names,msg))
})();
var state__29747__auto__ = (function (){var statearr_36806 = f__29746__auto__.call(null);
(statearr_36806[(6)] = c__29745__auto__);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__,msg_hist,msg_names,msg))
);

return c__29745__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29745__auto___36873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___36873,ch){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___36873,ch){
return (function (state_36859){
var state_val_36860 = (state_36859[(1)]);
if((state_val_36860 === (1))){
var state_36859__$1 = state_36859;
var statearr_36861_36874 = state_36859__$1;
(statearr_36861_36874[(2)] = null);

(statearr_36861_36874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36860 === (2))){
var state_36859__$1 = state_36859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36859__$1,(4),ch);
} else {
if((state_val_36860 === (3))){
var inst_36857 = (state_36859[(2)]);
var state_36859__$1 = state_36859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36859__$1,inst_36857);
} else {
if((state_val_36860 === (4))){
var inst_36847 = (state_36859[(7)]);
var inst_36847__$1 = (state_36859[(2)]);
var state_36859__$1 = (function (){var statearr_36862 = state_36859;
(statearr_36862[(7)] = inst_36847__$1);

return statearr_36862;
})();
if(cljs.core.truth_(inst_36847__$1)){
var statearr_36863_36875 = state_36859__$1;
(statearr_36863_36875[(1)] = (5));

} else {
var statearr_36864_36876 = state_36859__$1;
(statearr_36864_36876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36860 === (5))){
var inst_36847 = (state_36859[(7)]);
var inst_36849 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36847);
var state_36859__$1 = state_36859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36859__$1,(8),inst_36849);
} else {
if((state_val_36860 === (6))){
var state_36859__$1 = state_36859;
var statearr_36865_36877 = state_36859__$1;
(statearr_36865_36877[(2)] = null);

(statearr_36865_36877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36860 === (7))){
var inst_36855 = (state_36859[(2)]);
var state_36859__$1 = state_36859;
var statearr_36866_36878 = state_36859__$1;
(statearr_36866_36878[(2)] = inst_36855);

(statearr_36866_36878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36860 === (8))){
var inst_36851 = (state_36859[(2)]);
var state_36859__$1 = (function (){var statearr_36867 = state_36859;
(statearr_36867[(8)] = inst_36851);

return statearr_36867;
})();
var statearr_36868_36879 = state_36859__$1;
(statearr_36868_36879[(2)] = null);

(statearr_36868_36879[(1)] = (2));


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
});})(c__29745__auto___36873,ch))
;
return ((function (switch__29657__auto__,c__29745__auto___36873,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29658__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29658__auto____0 = (function (){
var statearr_36869 = [null,null,null,null,null,null,null,null,null];
(statearr_36869[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29658__auto__);

(statearr_36869[(1)] = (1));

return statearr_36869;
});
var figwheel$client$heads_up_plugin_$_state_machine__29658__auto____1 = (function (state_36859){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_36859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e36870){if((e36870 instanceof Object)){
var ex__29661__auto__ = e36870;
var statearr_36871_36880 = state_36859;
(statearr_36871_36880[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36881 = state_36859;
state_36859 = G__36881;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29658__auto__ = function(state_36859){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29658__auto____1.call(this,state_36859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29658__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29658__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___36873,ch))
})();
var state__29747__auto__ = (function (){var statearr_36872 = f__29746__auto__.call(null);
(statearr_36872[(6)] = c__29745__auto___36873);

return statearr_36872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___36873,ch))
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_36887){
var state_val_36888 = (state_36887[(1)]);
if((state_val_36888 === (1))){
var inst_36882 = cljs.core.async.timeout.call(null,(3000));
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(2),inst_36882);
} else {
if((state_val_36888 === (2))){
var inst_36884 = (state_36887[(2)]);
var inst_36885 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36887__$1 = (function (){var statearr_36889 = state_36887;
(statearr_36889[(7)] = inst_36884);

return statearr_36889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36887__$1,inst_36885);
} else {
return null;
}
}
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____0 = (function (){
var statearr_36890 = [null,null,null,null,null,null,null,null];
(statearr_36890[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__);

(statearr_36890[(1)] = (1));

return statearr_36890;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____1 = (function (state_36887){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_36887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e36891){if((e36891 instanceof Object)){
var ex__29661__auto__ = e36891;
var statearr_36892_36894 = state_36887;
(statearr_36892_36894[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36895 = state_36887;
state_36887 = G__36895;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__ = function(state_36887){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____1.call(this,state_36887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29658__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_36893 = f__29746__auto__.call(null);
(statearr_36893[(6)] = c__29745__auto__);

return statearr_36893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36902){
var state_val_36903 = (state_36902[(1)]);
if((state_val_36903 === (1))){
var inst_36896 = cljs.core.async.timeout.call(null,(2000));
var state_36902__$1 = state_36902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36902__$1,(2),inst_36896);
} else {
if((state_val_36903 === (2))){
var inst_36898 = (state_36902[(2)]);
var inst_36899 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36900 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36899);
var state_36902__$1 = (function (){var statearr_36904 = state_36902;
(statearr_36904[(7)] = inst_36898);

return statearr_36904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36902__$1,inst_36900);
} else {
return null;
}
}
});})(c__29745__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____0 = (function (){
var statearr_36905 = [null,null,null,null,null,null,null,null];
(statearr_36905[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__);

(statearr_36905[(1)] = (1));

return statearr_36905;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____1 = (function (state_36902){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_36902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e36906){if((e36906 instanceof Object)){
var ex__29661__auto__ = e36906;
var statearr_36907_36909 = state_36902;
(statearr_36907_36909[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_36902;
state_36902 = G__36910;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__ = function(state_36902){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____1.call(this,state_36902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29747__auto__ = (function (){var statearr_36908 = f__29746__auto__.call(null);
(statearr_36908[(6)] = c__29745__auto__);

return statearr_36908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__,figwheel_version,temp__4657__auto__))
);

return c__29745__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36911){
var map__36912 = p__36911;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var file = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36914 = "";
var G__36914__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36914),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36914);
var G__36914__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36914__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36914__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36914__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36914__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36915){
var map__36916 = p__36915;
var map__36916__$1 = ((((!((map__36916 == null)))?((((map__36916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36916):map__36916);
var ed = map__36916__$1;
var formatted_exception = cljs.core.get.call(null,map__36916__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36916__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36916__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36918_36922 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36919_36923 = null;
var count__36920_36924 = (0);
var i__36921_36925 = (0);
while(true){
if((i__36921_36925 < count__36920_36924)){
var msg_36926 = cljs.core._nth.call(null,chunk__36919_36923,i__36921_36925);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36926);

var G__36927 = seq__36918_36922;
var G__36928 = chunk__36919_36923;
var G__36929 = count__36920_36924;
var G__36930 = (i__36921_36925 + (1));
seq__36918_36922 = G__36927;
chunk__36919_36923 = G__36928;
count__36920_36924 = G__36929;
i__36921_36925 = G__36930;
continue;
} else {
var temp__4657__auto___36931 = cljs.core.seq.call(null,seq__36918_36922);
if(temp__4657__auto___36931){
var seq__36918_36932__$1 = temp__4657__auto___36931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36918_36932__$1)){
var c__28034__auto___36933 = cljs.core.chunk_first.call(null,seq__36918_36932__$1);
var G__36934 = cljs.core.chunk_rest.call(null,seq__36918_36932__$1);
var G__36935 = c__28034__auto___36933;
var G__36936 = cljs.core.count.call(null,c__28034__auto___36933);
var G__36937 = (0);
seq__36918_36922 = G__36934;
chunk__36919_36923 = G__36935;
count__36920_36924 = G__36936;
i__36921_36925 = G__36937;
continue;
} else {
var msg_36938 = cljs.core.first.call(null,seq__36918_36932__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36938);

var G__36939 = cljs.core.next.call(null,seq__36918_36932__$1);
var G__36940 = null;
var G__36941 = (0);
var G__36942 = (0);
seq__36918_36922 = G__36939;
chunk__36919_36923 = G__36940;
count__36920_36924 = G__36941;
i__36921_36925 = G__36942;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36943){
var map__36944 = p__36943;
var map__36944__$1 = ((((!((map__36944 == null)))?((((map__36944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36944):map__36944);
var w = map__36944__$1;
var message = cljs.core.get.call(null,map__36944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36946 = cljs.core.seq.call(null,plugins);
var chunk__36947 = null;
var count__36948 = (0);
var i__36949 = (0);
while(true){
if((i__36949 < count__36948)){
var vec__36950 = cljs.core._nth.call(null,chunk__36947,i__36949);
var k = cljs.core.nth.call(null,vec__36950,(0),null);
var plugin = cljs.core.nth.call(null,vec__36950,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36956 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36946,chunk__36947,count__36948,i__36949,pl_36956,vec__36950,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36956.call(null,msg_hist);
});})(seq__36946,chunk__36947,count__36948,i__36949,pl_36956,vec__36950,k,plugin))
);
} else {
}

var G__36957 = seq__36946;
var G__36958 = chunk__36947;
var G__36959 = count__36948;
var G__36960 = (i__36949 + (1));
seq__36946 = G__36957;
chunk__36947 = G__36958;
count__36948 = G__36959;
i__36949 = G__36960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36946);
if(temp__4657__auto__){
var seq__36946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36946__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36946__$1);
var G__36961 = cljs.core.chunk_rest.call(null,seq__36946__$1);
var G__36962 = c__28034__auto__;
var G__36963 = cljs.core.count.call(null,c__28034__auto__);
var G__36964 = (0);
seq__36946 = G__36961;
chunk__36947 = G__36962;
count__36948 = G__36963;
i__36949 = G__36964;
continue;
} else {
var vec__36953 = cljs.core.first.call(null,seq__36946__$1);
var k = cljs.core.nth.call(null,vec__36953,(0),null);
var plugin = cljs.core.nth.call(null,vec__36953,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36965 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36946,chunk__36947,count__36948,i__36949,pl_36965,vec__36953,k,plugin,seq__36946__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36965.call(null,msg_hist);
});})(seq__36946,chunk__36947,count__36948,i__36949,pl_36965,vec__36953,k,plugin,seq__36946__$1,temp__4657__auto__))
);
} else {
}

var G__36966 = cljs.core.next.call(null,seq__36946__$1);
var G__36967 = null;
var G__36968 = (0);
var G__36969 = (0);
seq__36946 = G__36966;
chunk__36947 = G__36967;
count__36948 = G__36968;
i__36949 = G__36969;
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
var G__36971 = arguments.length;
switch (G__36971) {
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

var seq__36972_36977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36973_36978 = null;
var count__36974_36979 = (0);
var i__36975_36980 = (0);
while(true){
if((i__36975_36980 < count__36974_36979)){
var msg_36981 = cljs.core._nth.call(null,chunk__36973_36978,i__36975_36980);
figwheel.client.socket.handle_incoming_message.call(null,msg_36981);

var G__36982 = seq__36972_36977;
var G__36983 = chunk__36973_36978;
var G__36984 = count__36974_36979;
var G__36985 = (i__36975_36980 + (1));
seq__36972_36977 = G__36982;
chunk__36973_36978 = G__36983;
count__36974_36979 = G__36984;
i__36975_36980 = G__36985;
continue;
} else {
var temp__4657__auto___36986 = cljs.core.seq.call(null,seq__36972_36977);
if(temp__4657__auto___36986){
var seq__36972_36987__$1 = temp__4657__auto___36986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36972_36987__$1)){
var c__28034__auto___36988 = cljs.core.chunk_first.call(null,seq__36972_36987__$1);
var G__36989 = cljs.core.chunk_rest.call(null,seq__36972_36987__$1);
var G__36990 = c__28034__auto___36988;
var G__36991 = cljs.core.count.call(null,c__28034__auto___36988);
var G__36992 = (0);
seq__36972_36977 = G__36989;
chunk__36973_36978 = G__36990;
count__36974_36979 = G__36991;
i__36975_36980 = G__36992;
continue;
} else {
var msg_36993 = cljs.core.first.call(null,seq__36972_36987__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36993);

var G__36994 = cljs.core.next.call(null,seq__36972_36987__$1);
var G__36995 = null;
var G__36996 = (0);
var G__36997 = (0);
seq__36972_36977 = G__36994;
chunk__36973_36978 = G__36995;
count__36974_36979 = G__36996;
i__36975_36980 = G__36997;
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
var len__28364__auto___37002 = arguments.length;
var i__28365__auto___37003 = (0);
while(true){
if((i__28365__auto___37003 < len__28364__auto___37002)){
args__28371__auto__.push((arguments[i__28365__auto___37003]));

var G__37004 = (i__28365__auto___37003 + (1));
i__28365__auto___37003 = G__37004;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36999){
var map__37000 = p__36999;
var map__37000__$1 = ((((!((map__37000 == null)))?((((map__37000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37000):map__37000);
var opts = map__37000__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36998){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36998));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37005){if((e37005 instanceof Error)){
var e = e37005;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37005;

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
return (function (p__37006){
var map__37007 = p__37006;
var map__37007__$1 = ((((!((map__37007 == null)))?((((map__37007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37007):map__37007);
var msg_name = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514289193771
