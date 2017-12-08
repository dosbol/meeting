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
}catch (e37633){if((e37633 instanceof Error)){
var e = e37633;
return "Error: Unable to stringify";
} else {
throw e37633;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37636 = arguments.length;
switch (G__37636) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37634_SHARP_){
if(typeof p1__37634_SHARP_ === 'string'){
return p1__37634_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37634_SHARP_);
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
var args__29462__auto__ = [];
var len__29455__auto___37639 = arguments.length;
var i__29456__auto___37640 = (0);
while(true){
if((i__29456__auto___37640 < len__29455__auto___37639)){
args__29462__auto__.push((arguments[i__29456__auto___37640]));

var G__37641 = (i__29456__auto___37640 + (1));
i__29456__auto___37640 = G__37641;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37638){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37638));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37643 = arguments.length;
var i__29456__auto___37644 = (0);
while(true){
if((i__29456__auto___37644 < len__29455__auto___37643)){
args__29462__auto__.push((arguments[i__29456__auto___37644]));

var G__37645 = (i__29456__auto___37644 + (1));
i__29456__auto___37644 = G__37645;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37642){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37642));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37646){
var map__37647 = p__37646;
var map__37647__$1 = ((((!((map__37647 == null)))?((((map__37647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37647):map__37647);
var message = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
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
var c__32751__auto___37726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___37726,ch){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___37726,ch){
return (function (state_37698){
var state_val_37699 = (state_37698[(1)]);
if((state_val_37699 === (7))){
var inst_37694 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37700_37727 = state_37698__$1;
(statearr_37700_37727[(2)] = inst_37694);

(statearr_37700_37727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (1))){
var state_37698__$1 = state_37698;
var statearr_37701_37728 = state_37698__$1;
(statearr_37701_37728[(2)] = null);

(statearr_37701_37728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (4))){
var inst_37651 = (state_37698[(7)]);
var inst_37651__$1 = (state_37698[(2)]);
var state_37698__$1 = (function (){var statearr_37702 = state_37698;
(statearr_37702[(7)] = inst_37651__$1);

return statearr_37702;
})();
if(cljs.core.truth_(inst_37651__$1)){
var statearr_37703_37729 = state_37698__$1;
(statearr_37703_37729[(1)] = (5));

} else {
var statearr_37704_37730 = state_37698__$1;
(statearr_37704_37730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (15))){
var inst_37658 = (state_37698[(8)]);
var inst_37673 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37658);
var inst_37674 = cljs.core.first.call(null,inst_37673);
var inst_37675 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37674);
var inst_37676 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37675)].join('');
var inst_37677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37676);
var state_37698__$1 = state_37698;
var statearr_37705_37731 = state_37698__$1;
(statearr_37705_37731[(2)] = inst_37677);

(statearr_37705_37731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (13))){
var inst_37682 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37706_37732 = state_37698__$1;
(statearr_37706_37732[(2)] = inst_37682);

(statearr_37706_37732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (6))){
var state_37698__$1 = state_37698;
var statearr_37707_37733 = state_37698__$1;
(statearr_37707_37733[(2)] = null);

(statearr_37707_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (17))){
var inst_37680 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37708_37734 = state_37698__$1;
(statearr_37708_37734[(2)] = inst_37680);

(statearr_37708_37734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (3))){
var inst_37696 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37698__$1,inst_37696);
} else {
if((state_val_37699 === (12))){
var inst_37657 = (state_37698[(9)]);
var inst_37671 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37657,opts);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37671)){
var statearr_37709_37735 = state_37698__$1;
(statearr_37709_37735[(1)] = (15));

} else {
var statearr_37710_37736 = state_37698__$1;
(statearr_37710_37736[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (2))){
var state_37698__$1 = state_37698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37698__$1,(4),ch);
} else {
if((state_val_37699 === (11))){
var inst_37658 = (state_37698[(8)]);
var inst_37663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37664 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37658);
var inst_37665 = cljs.core.async.timeout.call(null,(1000));
var inst_37666 = [inst_37664,inst_37665];
var inst_37667 = (new cljs.core.PersistentVector(null,2,(5),inst_37663,inst_37666,null));
var state_37698__$1 = state_37698;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37698__$1,(14),inst_37667);
} else {
if((state_val_37699 === (9))){
var inst_37658 = (state_37698[(8)]);
var inst_37684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37658);
var inst_37686 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37685);
var inst_37687 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37686)].join('');
var inst_37688 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37687);
var state_37698__$1 = (function (){var statearr_37711 = state_37698;
(statearr_37711[(10)] = inst_37684);

return statearr_37711;
})();
var statearr_37712_37737 = state_37698__$1;
(statearr_37712_37737[(2)] = inst_37688);

(statearr_37712_37737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (5))){
var inst_37651 = (state_37698[(7)]);
var inst_37653 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37654 = (new cljs.core.PersistentArrayMap(null,2,inst_37653,null));
var inst_37655 = (new cljs.core.PersistentHashSet(null,inst_37654,null));
var inst_37656 = figwheel.client.focus_msgs.call(null,inst_37655,inst_37651);
var inst_37657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37656);
var inst_37658 = cljs.core.first.call(null,inst_37656);
var inst_37659 = figwheel.client.autoload_QMARK_.call(null);
var state_37698__$1 = (function (){var statearr_37713 = state_37698;
(statearr_37713[(8)] = inst_37658);

(statearr_37713[(9)] = inst_37657);

return statearr_37713;
})();
if(cljs.core.truth_(inst_37659)){
var statearr_37714_37738 = state_37698__$1;
(statearr_37714_37738[(1)] = (8));

} else {
var statearr_37715_37739 = state_37698__$1;
(statearr_37715_37739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (14))){
var inst_37669 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37716_37740 = state_37698__$1;
(statearr_37716_37740[(2)] = inst_37669);

(statearr_37716_37740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (16))){
var state_37698__$1 = state_37698;
var statearr_37717_37741 = state_37698__$1;
(statearr_37717_37741[(2)] = null);

(statearr_37717_37741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (10))){
var inst_37690 = (state_37698[(2)]);
var state_37698__$1 = (function (){var statearr_37718 = state_37698;
(statearr_37718[(11)] = inst_37690);

return statearr_37718;
})();
var statearr_37719_37742 = state_37698__$1;
(statearr_37719_37742[(2)] = null);

(statearr_37719_37742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (8))){
var inst_37657 = (state_37698[(9)]);
var inst_37661 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37657,opts);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37661)){
var statearr_37720_37743 = state_37698__$1;
(statearr_37720_37743[(1)] = (11));

} else {
var statearr_37721_37744 = state_37698__$1;
(statearr_37721_37744[(1)] = (12));

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
});})(c__32751__auto___37726,ch))
;
return ((function (switch__32663__auto__,c__32751__auto___37726,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____0 = (function (){
var statearr_37722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37722[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__);

(statearr_37722[(1)] = (1));

return statearr_37722;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____1 = (function (state_37698){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_37698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e37723){if((e37723 instanceof Object)){
var ex__32667__auto__ = e37723;
var statearr_37724_37745 = state_37698;
(statearr_37724_37745[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37746 = state_37698;
state_37698 = G__37746;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__ = function(state_37698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____1.call(this,state_37698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32664__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___37726,ch))
})();
var state__32753__auto__ = (function (){var statearr_37725 = f__32752__auto__.call(null);
(statearr_37725[(6)] = c__32751__auto___37726);

return statearr_37725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___37726,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37747_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37747_SHARP_));
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
var base_path_37749 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37749){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37748){if((e37748 instanceof Error)){
var e = e37748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37749], null));
} else {
var e = e37748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37749))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37750){
var map__37751 = p__37750;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var opts = map__37751__$1;
var build_id = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37751,map__37751__$1,opts,build_id){
return (function (p__37753){
var vec__37754 = p__37753;
var seq__37755 = cljs.core.seq.call(null,vec__37754);
var first__37756 = cljs.core.first.call(null,seq__37755);
var seq__37755__$1 = cljs.core.next.call(null,seq__37755);
var map__37757 = first__37756;
var map__37757__$1 = ((((!((map__37757 == null)))?((((map__37757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37757):map__37757);
var msg = map__37757__$1;
var msg_name = cljs.core.get.call(null,map__37757__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37755__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37754,seq__37755,first__37756,seq__37755__$1,map__37757,map__37757__$1,msg,msg_name,_,map__37751,map__37751__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37754,seq__37755,first__37756,seq__37755__$1,map__37757,map__37757__$1,msg,msg_name,_,map__37751,map__37751__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37751,map__37751__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37759){
var vec__37760 = p__37759;
var seq__37761 = cljs.core.seq.call(null,vec__37760);
var first__37762 = cljs.core.first.call(null,seq__37761);
var seq__37761__$1 = cljs.core.next.call(null,seq__37761);
var map__37763 = first__37762;
var map__37763__$1 = ((((!((map__37763 == null)))?((((map__37763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37763):map__37763);
var msg = map__37763__$1;
var msg_name = cljs.core.get.call(null,map__37763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37761__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37765){
var map__37766 = p__37765;
var map__37766__$1 = ((((!((map__37766 == null)))?((((map__37766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37766):map__37766);
var on_compile_warning = cljs.core.get.call(null,map__37766__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37766__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37766,map__37766__$1,on_compile_warning,on_compile_fail){
return (function (p__37768){
var vec__37769 = p__37768;
var seq__37770 = cljs.core.seq.call(null,vec__37769);
var first__37771 = cljs.core.first.call(null,seq__37770);
var seq__37770__$1 = cljs.core.next.call(null,seq__37770);
var map__37772 = first__37771;
var map__37772__$1 = ((((!((map__37772 == null)))?((((map__37772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37772):map__37772);
var msg = map__37772__$1;
var msg_name = cljs.core.get.call(null,map__37772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37770__$1;
var pred__37774 = cljs.core._EQ_;
var expr__37775 = msg_name;
if(cljs.core.truth_(pred__37774.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37775))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37774.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37775))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37766,map__37766__$1,on_compile_warning,on_compile_fail))
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__,msg_hist,msg_names,msg){
return (function (state_37864){
var state_val_37865 = (state_37864[(1)]);
if((state_val_37865 === (7))){
var inst_37784 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37784)){
var statearr_37866_37913 = state_37864__$1;
(statearr_37866_37913[(1)] = (8));

} else {
var statearr_37867_37914 = state_37864__$1;
(statearr_37867_37914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (20))){
var inst_37858 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37868_37915 = state_37864__$1;
(statearr_37868_37915[(2)] = inst_37858);

(statearr_37868_37915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (27))){
var inst_37854 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37869_37916 = state_37864__$1;
(statearr_37869_37916[(2)] = inst_37854);

(statearr_37869_37916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (1))){
var inst_37777 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37777)){
var statearr_37870_37917 = state_37864__$1;
(statearr_37870_37917[(1)] = (2));

} else {
var statearr_37871_37918 = state_37864__$1;
(statearr_37871_37918[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (24))){
var inst_37856 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37872_37919 = state_37864__$1;
(statearr_37872_37919[(2)] = inst_37856);

(statearr_37872_37919[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (4))){
var inst_37862 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37864__$1,inst_37862);
} else {
if((state_val_37865 === (15))){
var inst_37860 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37873_37920 = state_37864__$1;
(statearr_37873_37920[(2)] = inst_37860);

(statearr_37873_37920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (21))){
var inst_37813 = (state_37864[(2)]);
var inst_37814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37815 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37814);
var state_37864__$1 = (function (){var statearr_37874 = state_37864;
(statearr_37874[(7)] = inst_37813);

return statearr_37874;
})();
var statearr_37875_37921 = state_37864__$1;
(statearr_37875_37921[(2)] = inst_37815);

(statearr_37875_37921[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (31))){
var inst_37843 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37843)){
var statearr_37876_37922 = state_37864__$1;
(statearr_37876_37922[(1)] = (34));

} else {
var statearr_37877_37923 = state_37864__$1;
(statearr_37877_37923[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (32))){
var inst_37852 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37878_37924 = state_37864__$1;
(statearr_37878_37924[(2)] = inst_37852);

(statearr_37878_37924[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (33))){
var inst_37839 = (state_37864[(2)]);
var inst_37840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37841 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37840);
var state_37864__$1 = (function (){var statearr_37879 = state_37864;
(statearr_37879[(8)] = inst_37839);

return statearr_37879;
})();
var statearr_37880_37925 = state_37864__$1;
(statearr_37880_37925[(2)] = inst_37841);

(statearr_37880_37925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (13))){
var inst_37798 = figwheel.client.heads_up.clear.call(null);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(16),inst_37798);
} else {
if((state_val_37865 === (22))){
var inst_37819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37820 = figwheel.client.heads_up.append_warning_message.call(null,inst_37819);
var state_37864__$1 = state_37864;
var statearr_37881_37926 = state_37864__$1;
(statearr_37881_37926[(2)] = inst_37820);

(statearr_37881_37926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (36))){
var inst_37850 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37882_37927 = state_37864__$1;
(statearr_37882_37927[(2)] = inst_37850);

(statearr_37882_37927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (29))){
var inst_37830 = (state_37864[(2)]);
var inst_37831 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37832 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37831);
var state_37864__$1 = (function (){var statearr_37883 = state_37864;
(statearr_37883[(9)] = inst_37830);

return statearr_37883;
})();
var statearr_37884_37928 = state_37864__$1;
(statearr_37884_37928[(2)] = inst_37832);

(statearr_37884_37928[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (6))){
var inst_37779 = (state_37864[(10)]);
var state_37864__$1 = state_37864;
var statearr_37885_37929 = state_37864__$1;
(statearr_37885_37929[(2)] = inst_37779);

(statearr_37885_37929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (28))){
var inst_37826 = (state_37864[(2)]);
var inst_37827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37828 = figwheel.client.heads_up.display_warning.call(null,inst_37827);
var state_37864__$1 = (function (){var statearr_37886 = state_37864;
(statearr_37886[(11)] = inst_37826);

return statearr_37886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(29),inst_37828);
} else {
if((state_val_37865 === (25))){
var inst_37824 = figwheel.client.heads_up.clear.call(null);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(28),inst_37824);
} else {
if((state_val_37865 === (34))){
var inst_37845 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(37),inst_37845);
} else {
if((state_val_37865 === (17))){
var inst_37804 = (state_37864[(2)]);
var inst_37805 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37806 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37805);
var state_37864__$1 = (function (){var statearr_37887 = state_37864;
(statearr_37887[(12)] = inst_37804);

return statearr_37887;
})();
var statearr_37888_37930 = state_37864__$1;
(statearr_37888_37930[(2)] = inst_37806);

(statearr_37888_37930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (3))){
var inst_37796 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37796)){
var statearr_37889_37931 = state_37864__$1;
(statearr_37889_37931[(1)] = (13));

} else {
var statearr_37890_37932 = state_37864__$1;
(statearr_37890_37932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (12))){
var inst_37792 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37891_37933 = state_37864__$1;
(statearr_37891_37933[(2)] = inst_37792);

(statearr_37891_37933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (2))){
var inst_37779 = (state_37864[(10)]);
var inst_37779__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37864__$1 = (function (){var statearr_37892 = state_37864;
(statearr_37892[(10)] = inst_37779__$1);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37779__$1)){
var statearr_37893_37934 = state_37864__$1;
(statearr_37893_37934[(1)] = (5));

} else {
var statearr_37894_37935 = state_37864__$1;
(statearr_37894_37935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (23))){
var inst_37822 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37822)){
var statearr_37895_37936 = state_37864__$1;
(statearr_37895_37936[(1)] = (25));

} else {
var statearr_37896_37937 = state_37864__$1;
(statearr_37896_37937[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (35))){
var state_37864__$1 = state_37864;
var statearr_37897_37938 = state_37864__$1;
(statearr_37897_37938[(2)] = null);

(statearr_37897_37938[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (19))){
var inst_37817 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37817)){
var statearr_37898_37939 = state_37864__$1;
(statearr_37898_37939[(1)] = (22));

} else {
var statearr_37899_37940 = state_37864__$1;
(statearr_37899_37940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (11))){
var inst_37788 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37900_37941 = state_37864__$1;
(statearr_37900_37941[(2)] = inst_37788);

(statearr_37900_37941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (9))){
var inst_37790 = figwheel.client.heads_up.clear.call(null);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(12),inst_37790);
} else {
if((state_val_37865 === (5))){
var inst_37781 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37864__$1 = state_37864;
var statearr_37901_37942 = state_37864__$1;
(statearr_37901_37942[(2)] = inst_37781);

(statearr_37901_37942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (14))){
var inst_37808 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37808)){
var statearr_37902_37943 = state_37864__$1;
(statearr_37902_37943[(1)] = (18));

} else {
var statearr_37903_37944 = state_37864__$1;
(statearr_37903_37944[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (26))){
var inst_37834 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37864__$1 = state_37864;
if(cljs.core.truth_(inst_37834)){
var statearr_37904_37945 = state_37864__$1;
(statearr_37904_37945[(1)] = (30));

} else {
var statearr_37905_37946 = state_37864__$1;
(statearr_37905_37946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (16))){
var inst_37800 = (state_37864[(2)]);
var inst_37801 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37802 = figwheel.client.heads_up.display_exception.call(null,inst_37801);
var state_37864__$1 = (function (){var statearr_37906 = state_37864;
(statearr_37906[(13)] = inst_37800);

return statearr_37906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(17),inst_37802);
} else {
if((state_val_37865 === (30))){
var inst_37836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37837 = figwheel.client.heads_up.display_warning.call(null,inst_37836);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(33),inst_37837);
} else {
if((state_val_37865 === (10))){
var inst_37794 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37907_37947 = state_37864__$1;
(statearr_37907_37947[(2)] = inst_37794);

(statearr_37907_37947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (18))){
var inst_37810 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37811 = figwheel.client.heads_up.display_exception.call(null,inst_37810);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(21),inst_37811);
} else {
if((state_val_37865 === (37))){
var inst_37847 = (state_37864[(2)]);
var state_37864__$1 = state_37864;
var statearr_37908_37948 = state_37864__$1;
(statearr_37908_37948[(2)] = inst_37847);

(statearr_37908_37948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37865 === (8))){
var inst_37786 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(11),inst_37786);
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
});})(c__32751__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32663__auto__,c__32751__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____0 = (function (){
var statearr_37909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37909[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__);

(statearr_37909[(1)] = (1));

return statearr_37909;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____1 = (function (state_37864){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_37864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e37910){if((e37910 instanceof Object)){
var ex__32667__auto__ = e37910;
var statearr_37911_37949 = state_37864;
(statearr_37911_37949[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37950 = state_37864;
state_37864 = G__37950;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__ = function(state_37864){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____1.call(this,state_37864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__,msg_hist,msg_names,msg))
})();
var state__32753__auto__ = (function (){var statearr_37912 = f__32752__auto__.call(null);
(statearr_37912[(6)] = c__32751__auto__);

return statearr_37912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__,msg_hist,msg_names,msg))
);

return c__32751__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32751__auto___37979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___37979,ch){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___37979,ch){
return (function (state_37965){
var state_val_37966 = (state_37965[(1)]);
if((state_val_37966 === (1))){
var state_37965__$1 = state_37965;
var statearr_37967_37980 = state_37965__$1;
(statearr_37967_37980[(2)] = null);

(statearr_37967_37980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (2))){
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37965__$1,(4),ch);
} else {
if((state_val_37966 === (3))){
var inst_37963 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37965__$1,inst_37963);
} else {
if((state_val_37966 === (4))){
var inst_37953 = (state_37965[(7)]);
var inst_37953__$1 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_37968 = state_37965;
(statearr_37968[(7)] = inst_37953__$1);

return statearr_37968;
})();
if(cljs.core.truth_(inst_37953__$1)){
var statearr_37969_37981 = state_37965__$1;
(statearr_37969_37981[(1)] = (5));

} else {
var statearr_37970_37982 = state_37965__$1;
(statearr_37970_37982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (5))){
var inst_37953 = (state_37965[(7)]);
var inst_37955 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37953);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37965__$1,(8),inst_37955);
} else {
if((state_val_37966 === (6))){
var state_37965__$1 = state_37965;
var statearr_37971_37983 = state_37965__$1;
(statearr_37971_37983[(2)] = null);

(statearr_37971_37983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (7))){
var inst_37961 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37972_37984 = state_37965__$1;
(statearr_37972_37984[(2)] = inst_37961);

(statearr_37972_37984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (8))){
var inst_37957 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_37973 = state_37965;
(statearr_37973[(8)] = inst_37957);

return statearr_37973;
})();
var statearr_37974_37985 = state_37965__$1;
(statearr_37974_37985[(2)] = null);

(statearr_37974_37985[(1)] = (2));


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
});})(c__32751__auto___37979,ch))
;
return ((function (switch__32663__auto__,c__32751__auto___37979,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32664__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32664__auto____0 = (function (){
var statearr_37975 = [null,null,null,null,null,null,null,null,null];
(statearr_37975[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32664__auto__);

(statearr_37975[(1)] = (1));

return statearr_37975;
});
var figwheel$client$heads_up_plugin_$_state_machine__32664__auto____1 = (function (state_37965){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_37965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e37976){if((e37976 instanceof Object)){
var ex__32667__auto__ = e37976;
var statearr_37977_37986 = state_37965;
(statearr_37977_37986[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37987 = state_37965;
state_37965 = G__37987;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32664__auto__ = function(state_37965){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32664__auto____1.call(this,state_37965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32664__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32664__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___37979,ch))
})();
var state__32753__auto__ = (function (){var statearr_37978 = f__32752__auto__.call(null);
(statearr_37978[(6)] = c__32751__auto___37979);

return statearr_37978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___37979,ch))
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__){
return (function (state_37993){
var state_val_37994 = (state_37993[(1)]);
if((state_val_37994 === (1))){
var inst_37988 = cljs.core.async.timeout.call(null,(3000));
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37993__$1,(2),inst_37988);
} else {
if((state_val_37994 === (2))){
var inst_37990 = (state_37993[(2)]);
var inst_37991 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37993__$1 = (function (){var statearr_37995 = state_37993;
(statearr_37995[(7)] = inst_37990);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37993__$1,inst_37991);
} else {
return null;
}
}
});})(c__32751__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____0 = (function (){
var statearr_37996 = [null,null,null,null,null,null,null,null];
(statearr_37996[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__);

(statearr_37996[(1)] = (1));

return statearr_37996;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____1 = (function (state_37993){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_37993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e37997){if((e37997 instanceof Object)){
var ex__32667__auto__ = e37997;
var statearr_37998_38000 = state_37993;
(statearr_37998_38000[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38001 = state_37993;
state_37993 = G__38001;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__ = function(state_37993){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____1.call(this,state_37993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32664__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__))
})();
var state__32753__auto__ = (function (){var statearr_37999 = f__32752__auto__.call(null);
(statearr_37999[(6)] = c__32751__auto__);

return statearr_37999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__))
);

return c__32751__auto__;
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38008){
var state_val_38009 = (state_38008[(1)]);
if((state_val_38009 === (1))){
var inst_38002 = cljs.core.async.timeout.call(null,(2000));
var state_38008__$1 = state_38008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38008__$1,(2),inst_38002);
} else {
if((state_val_38009 === (2))){
var inst_38004 = (state_38008[(2)]);
var inst_38005 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38006 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38005);
var state_38008__$1 = (function (){var statearr_38010 = state_38008;
(statearr_38010[(7)] = inst_38004);

return statearr_38010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38008__$1,inst_38006);
} else {
return null;
}
}
});})(c__32751__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____0 = (function (){
var statearr_38011 = [null,null,null,null,null,null,null,null];
(statearr_38011[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__);

(statearr_38011[(1)] = (1));

return statearr_38011;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____1 = (function (state_38008){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_38008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e38012){if((e38012 instanceof Object)){
var ex__32667__auto__ = e38012;
var statearr_38013_38015 = state_38008;
(statearr_38013_38015[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38016 = state_38008;
state_38008 = G__38016;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__ = function(state_38008){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____1.call(this,state_38008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32753__auto__ = (function (){var statearr_38014 = f__32752__auto__.call(null);
(statearr_38014[(6)] = c__32751__auto__);

return statearr_38014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__,figwheel_version,temp__4657__auto__))
);

return c__32751__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38017){
var map__38018 = p__38017;
var map__38018__$1 = ((((!((map__38018 == null)))?((((map__38018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38018):map__38018);
var file = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38020 = "";
var G__38020__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38020),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38020);
var G__38020__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38020__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38020__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38020__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38020__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38021){
var map__38022 = p__38021;
var map__38022__$1 = ((((!((map__38022 == null)))?((((map__38022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38022):map__38022);
var ed = map__38022__$1;
var formatted_exception = cljs.core.get.call(null,map__38022__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38022__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38022__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38024_38028 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38025_38029 = null;
var count__38026_38030 = (0);
var i__38027_38031 = (0);
while(true){
if((i__38027_38031 < count__38026_38030)){
var msg_38032 = cljs.core._nth.call(null,chunk__38025_38029,i__38027_38031);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38032);

var G__38033 = seq__38024_38028;
var G__38034 = chunk__38025_38029;
var G__38035 = count__38026_38030;
var G__38036 = (i__38027_38031 + (1));
seq__38024_38028 = G__38033;
chunk__38025_38029 = G__38034;
count__38026_38030 = G__38035;
i__38027_38031 = G__38036;
continue;
} else {
var temp__4657__auto___38037 = cljs.core.seq.call(null,seq__38024_38028);
if(temp__4657__auto___38037){
var seq__38024_38038__$1 = temp__4657__auto___38037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38024_38038__$1)){
var c__29125__auto___38039 = cljs.core.chunk_first.call(null,seq__38024_38038__$1);
var G__38040 = cljs.core.chunk_rest.call(null,seq__38024_38038__$1);
var G__38041 = c__29125__auto___38039;
var G__38042 = cljs.core.count.call(null,c__29125__auto___38039);
var G__38043 = (0);
seq__38024_38028 = G__38040;
chunk__38025_38029 = G__38041;
count__38026_38030 = G__38042;
i__38027_38031 = G__38043;
continue;
} else {
var msg_38044 = cljs.core.first.call(null,seq__38024_38038__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38044);

var G__38045 = cljs.core.next.call(null,seq__38024_38038__$1);
var G__38046 = null;
var G__38047 = (0);
var G__38048 = (0);
seq__38024_38028 = G__38045;
chunk__38025_38029 = G__38046;
count__38026_38030 = G__38047;
i__38027_38031 = G__38048;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38049){
var map__38050 = p__38049;
var map__38050__$1 = ((((!((map__38050 == null)))?((((map__38050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38050):map__38050);
var w = map__38050__$1;
var message = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
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
var seq__38052 = cljs.core.seq.call(null,plugins);
var chunk__38053 = null;
var count__38054 = (0);
var i__38055 = (0);
while(true){
if((i__38055 < count__38054)){
var vec__38056 = cljs.core._nth.call(null,chunk__38053,i__38055);
var k = cljs.core.nth.call(null,vec__38056,(0),null);
var plugin = cljs.core.nth.call(null,vec__38056,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38052,chunk__38053,count__38054,i__38055,pl_38062,vec__38056,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38062.call(null,msg_hist);
});})(seq__38052,chunk__38053,count__38054,i__38055,pl_38062,vec__38056,k,plugin))
);
} else {
}

var G__38063 = seq__38052;
var G__38064 = chunk__38053;
var G__38065 = count__38054;
var G__38066 = (i__38055 + (1));
seq__38052 = G__38063;
chunk__38053 = G__38064;
count__38054 = G__38065;
i__38055 = G__38066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38052);
if(temp__4657__auto__){
var seq__38052__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38052__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__38052__$1);
var G__38067 = cljs.core.chunk_rest.call(null,seq__38052__$1);
var G__38068 = c__29125__auto__;
var G__38069 = cljs.core.count.call(null,c__29125__auto__);
var G__38070 = (0);
seq__38052 = G__38067;
chunk__38053 = G__38068;
count__38054 = G__38069;
i__38055 = G__38070;
continue;
} else {
var vec__38059 = cljs.core.first.call(null,seq__38052__$1);
var k = cljs.core.nth.call(null,vec__38059,(0),null);
var plugin = cljs.core.nth.call(null,vec__38059,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38071 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38052,chunk__38053,count__38054,i__38055,pl_38071,vec__38059,k,plugin,seq__38052__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38071.call(null,msg_hist);
});})(seq__38052,chunk__38053,count__38054,i__38055,pl_38071,vec__38059,k,plugin,seq__38052__$1,temp__4657__auto__))
);
} else {
}

var G__38072 = cljs.core.next.call(null,seq__38052__$1);
var G__38073 = null;
var G__38074 = (0);
var G__38075 = (0);
seq__38052 = G__38072;
chunk__38053 = G__38073;
count__38054 = G__38074;
i__38055 = G__38075;
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
var G__38077 = arguments.length;
switch (G__38077) {
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

var seq__38078_38083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38079_38084 = null;
var count__38080_38085 = (0);
var i__38081_38086 = (0);
while(true){
if((i__38081_38086 < count__38080_38085)){
var msg_38087 = cljs.core._nth.call(null,chunk__38079_38084,i__38081_38086);
figwheel.client.socket.handle_incoming_message.call(null,msg_38087);

var G__38088 = seq__38078_38083;
var G__38089 = chunk__38079_38084;
var G__38090 = count__38080_38085;
var G__38091 = (i__38081_38086 + (1));
seq__38078_38083 = G__38088;
chunk__38079_38084 = G__38089;
count__38080_38085 = G__38090;
i__38081_38086 = G__38091;
continue;
} else {
var temp__4657__auto___38092 = cljs.core.seq.call(null,seq__38078_38083);
if(temp__4657__auto___38092){
var seq__38078_38093__$1 = temp__4657__auto___38092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38078_38093__$1)){
var c__29125__auto___38094 = cljs.core.chunk_first.call(null,seq__38078_38093__$1);
var G__38095 = cljs.core.chunk_rest.call(null,seq__38078_38093__$1);
var G__38096 = c__29125__auto___38094;
var G__38097 = cljs.core.count.call(null,c__29125__auto___38094);
var G__38098 = (0);
seq__38078_38083 = G__38095;
chunk__38079_38084 = G__38096;
count__38080_38085 = G__38097;
i__38081_38086 = G__38098;
continue;
} else {
var msg_38099 = cljs.core.first.call(null,seq__38078_38093__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38099);

var G__38100 = cljs.core.next.call(null,seq__38078_38093__$1);
var G__38101 = null;
var G__38102 = (0);
var G__38103 = (0);
seq__38078_38083 = G__38100;
chunk__38079_38084 = G__38101;
count__38080_38085 = G__38102;
i__38081_38086 = G__38103;
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
var args__29462__auto__ = [];
var len__29455__auto___38108 = arguments.length;
var i__29456__auto___38109 = (0);
while(true){
if((i__29456__auto___38109 < len__29455__auto___38108)){
args__29462__auto__.push((arguments[i__29456__auto___38109]));

var G__38110 = (i__29456__auto___38109 + (1));
i__29456__auto___38109 = G__38110;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38105){
var map__38106 = p__38105;
var map__38106__$1 = ((((!((map__38106 == null)))?((((map__38106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38106):map__38106);
var opts = map__38106__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38104){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38104));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38111){if((e38111 instanceof Error)){
var e = e38111;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38111;

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
return (function (p__38112){
var map__38113 = p__38112;
var map__38113__$1 = ((((!((map__38113 == null)))?((((map__38113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38113):map__38113);
var msg_name = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512672356128
