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
}catch (e37675){if((e37675 instanceof Error)){
var e = e37675;
return "Error: Unable to stringify";
} else {
throw e37675;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37678 = arguments.length;
switch (G__37678) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37676_SHARP_){
if(typeof p1__37676_SHARP_ === 'string'){
return p1__37676_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37676_SHARP_);
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
var len__29455__auto___37681 = arguments.length;
var i__29456__auto___37682 = (0);
while(true){
if((i__29456__auto___37682 < len__29455__auto___37681)){
args__29462__auto__.push((arguments[i__29456__auto___37682]));

var G__37683 = (i__29456__auto___37682 + (1));
i__29456__auto___37682 = G__37683;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37680){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37680));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37685 = arguments.length;
var i__29456__auto___37686 = (0);
while(true){
if((i__29456__auto___37686 < len__29455__auto___37685)){
args__29462__auto__.push((arguments[i__29456__auto___37686]));

var G__37687 = (i__29456__auto___37686 + (1));
i__29456__auto___37686 = G__37687;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37684){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37684));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37688){
var map__37689 = p__37688;
var map__37689__$1 = ((((!((map__37689 == null)))?((((map__37689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37689):map__37689);
var message = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33589__auto___37768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___37768,ch){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___37768,ch){
return (function (state_37740){
var state_val_37741 = (state_37740[(1)]);
if((state_val_37741 === (7))){
var inst_37736 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37742_37769 = state_37740__$1;
(statearr_37742_37769[(2)] = inst_37736);

(statearr_37742_37769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (1))){
var state_37740__$1 = state_37740;
var statearr_37743_37770 = state_37740__$1;
(statearr_37743_37770[(2)] = null);

(statearr_37743_37770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (4))){
var inst_37693 = (state_37740[(7)]);
var inst_37693__$1 = (state_37740[(2)]);
var state_37740__$1 = (function (){var statearr_37744 = state_37740;
(statearr_37744[(7)] = inst_37693__$1);

return statearr_37744;
})();
if(cljs.core.truth_(inst_37693__$1)){
var statearr_37745_37771 = state_37740__$1;
(statearr_37745_37771[(1)] = (5));

} else {
var statearr_37746_37772 = state_37740__$1;
(statearr_37746_37772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (15))){
var inst_37700 = (state_37740[(8)]);
var inst_37715 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37700);
var inst_37716 = cljs.core.first.call(null,inst_37715);
var inst_37717 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37716);
var inst_37718 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37717)].join('');
var inst_37719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37718);
var state_37740__$1 = state_37740;
var statearr_37747_37773 = state_37740__$1;
(statearr_37747_37773[(2)] = inst_37719);

(statearr_37747_37773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (13))){
var inst_37724 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37748_37774 = state_37740__$1;
(statearr_37748_37774[(2)] = inst_37724);

(statearr_37748_37774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (6))){
var state_37740__$1 = state_37740;
var statearr_37749_37775 = state_37740__$1;
(statearr_37749_37775[(2)] = null);

(statearr_37749_37775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (17))){
var inst_37722 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37750_37776 = state_37740__$1;
(statearr_37750_37776[(2)] = inst_37722);

(statearr_37750_37776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (3))){
var inst_37738 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37740__$1,inst_37738);
} else {
if((state_val_37741 === (12))){
var inst_37699 = (state_37740[(9)]);
var inst_37713 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37699,opts);
var state_37740__$1 = state_37740;
if(cljs.core.truth_(inst_37713)){
var statearr_37751_37777 = state_37740__$1;
(statearr_37751_37777[(1)] = (15));

} else {
var statearr_37752_37778 = state_37740__$1;
(statearr_37752_37778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (2))){
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37740__$1,(4),ch);
} else {
if((state_val_37741 === (11))){
var inst_37700 = (state_37740[(8)]);
var inst_37705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37706 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37700);
var inst_37707 = cljs.core.async.timeout.call(null,(1000));
var inst_37708 = [inst_37706,inst_37707];
var inst_37709 = (new cljs.core.PersistentVector(null,2,(5),inst_37705,inst_37708,null));
var state_37740__$1 = state_37740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37740__$1,(14),inst_37709);
} else {
if((state_val_37741 === (9))){
var inst_37700 = (state_37740[(8)]);
var inst_37726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37727 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37700);
var inst_37728 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37727);
var inst_37729 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37728)].join('');
var inst_37730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37729);
var state_37740__$1 = (function (){var statearr_37753 = state_37740;
(statearr_37753[(10)] = inst_37726);

return statearr_37753;
})();
var statearr_37754_37779 = state_37740__$1;
(statearr_37754_37779[(2)] = inst_37730);

(statearr_37754_37779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (5))){
var inst_37693 = (state_37740[(7)]);
var inst_37695 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37696 = (new cljs.core.PersistentArrayMap(null,2,inst_37695,null));
var inst_37697 = (new cljs.core.PersistentHashSet(null,inst_37696,null));
var inst_37698 = figwheel.client.focus_msgs.call(null,inst_37697,inst_37693);
var inst_37699 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37698);
var inst_37700 = cljs.core.first.call(null,inst_37698);
var inst_37701 = figwheel.client.autoload_QMARK_.call(null);
var state_37740__$1 = (function (){var statearr_37755 = state_37740;
(statearr_37755[(9)] = inst_37699);

(statearr_37755[(8)] = inst_37700);

return statearr_37755;
})();
if(cljs.core.truth_(inst_37701)){
var statearr_37756_37780 = state_37740__$1;
(statearr_37756_37780[(1)] = (8));

} else {
var statearr_37757_37781 = state_37740__$1;
(statearr_37757_37781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (14))){
var inst_37711 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37758_37782 = state_37740__$1;
(statearr_37758_37782[(2)] = inst_37711);

(statearr_37758_37782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (16))){
var state_37740__$1 = state_37740;
var statearr_37759_37783 = state_37740__$1;
(statearr_37759_37783[(2)] = null);

(statearr_37759_37783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (10))){
var inst_37732 = (state_37740[(2)]);
var state_37740__$1 = (function (){var statearr_37760 = state_37740;
(statearr_37760[(11)] = inst_37732);

return statearr_37760;
})();
var statearr_37761_37784 = state_37740__$1;
(statearr_37761_37784[(2)] = null);

(statearr_37761_37784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (8))){
var inst_37699 = (state_37740[(9)]);
var inst_37703 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37699,opts);
var state_37740__$1 = state_37740;
if(cljs.core.truth_(inst_37703)){
var statearr_37762_37785 = state_37740__$1;
(statearr_37762_37785[(1)] = (11));

} else {
var statearr_37763_37786 = state_37740__$1;
(statearr_37763_37786[(1)] = (12));

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
});})(c__33589__auto___37768,ch))
;
return ((function (switch__33501__auto__,c__33589__auto___37768,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____0 = (function (){
var statearr_37764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37764[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__);

(statearr_37764[(1)] = (1));

return statearr_37764;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____1 = (function (state_37740){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_37740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e37765){if((e37765 instanceof Object)){
var ex__33505__auto__ = e37765;
var statearr_37766_37787 = state_37740;
(statearr_37766_37787[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_37740;
state_37740 = G__37788;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__ = function(state_37740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____1.call(this,state_37740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33502__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___37768,ch))
})();
var state__33591__auto__ = (function (){var statearr_37767 = f__33590__auto__.call(null);
(statearr_37767[(6)] = c__33589__auto___37768);

return statearr_37767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___37768,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37789_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37789_SHARP_));
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
var base_path_37791 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37791){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37790){if((e37790 instanceof Error)){
var e = e37790;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37791], null));
} else {
var e = e37790;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37791))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37792){
var map__37793 = p__37792;
var map__37793__$1 = ((((!((map__37793 == null)))?((((map__37793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37793):map__37793);
var opts = map__37793__$1;
var build_id = cljs.core.get.call(null,map__37793__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37793,map__37793__$1,opts,build_id){
return (function (p__37795){
var vec__37796 = p__37795;
var seq__37797 = cljs.core.seq.call(null,vec__37796);
var first__37798 = cljs.core.first.call(null,seq__37797);
var seq__37797__$1 = cljs.core.next.call(null,seq__37797);
var map__37799 = first__37798;
var map__37799__$1 = ((((!((map__37799 == null)))?((((map__37799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);
var msg = map__37799__$1;
var msg_name = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37797__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37796,seq__37797,first__37798,seq__37797__$1,map__37799,map__37799__$1,msg,msg_name,_,map__37793,map__37793__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37796,seq__37797,first__37798,seq__37797__$1,map__37799,map__37799__$1,msg,msg_name,_,map__37793,map__37793__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37793,map__37793__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37801){
var vec__37802 = p__37801;
var seq__37803 = cljs.core.seq.call(null,vec__37802);
var first__37804 = cljs.core.first.call(null,seq__37803);
var seq__37803__$1 = cljs.core.next.call(null,seq__37803);
var map__37805 = first__37804;
var map__37805__$1 = ((((!((map__37805 == null)))?((((map__37805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37805):map__37805);
var msg = map__37805__$1;
var msg_name = cljs.core.get.call(null,map__37805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37803__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37807){
var map__37808 = p__37807;
var map__37808__$1 = ((((!((map__37808 == null)))?((((map__37808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37808):map__37808);
var on_compile_warning = cljs.core.get.call(null,map__37808__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37808__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37808,map__37808__$1,on_compile_warning,on_compile_fail){
return (function (p__37810){
var vec__37811 = p__37810;
var seq__37812 = cljs.core.seq.call(null,vec__37811);
var first__37813 = cljs.core.first.call(null,seq__37812);
var seq__37812__$1 = cljs.core.next.call(null,seq__37812);
var map__37814 = first__37813;
var map__37814__$1 = ((((!((map__37814 == null)))?((((map__37814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37814):map__37814);
var msg = map__37814__$1;
var msg_name = cljs.core.get.call(null,map__37814__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37812__$1;
var pred__37816 = cljs.core._EQ_;
var expr__37817 = msg_name;
if(cljs.core.truth_(pred__37816.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37817))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37816.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37817))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37808,map__37808__$1,on_compile_warning,on_compile_fail))
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__,msg_hist,msg_names,msg){
return (function (state_37906){
var state_val_37907 = (state_37906[(1)]);
if((state_val_37907 === (7))){
var inst_37826 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37826)){
var statearr_37908_37955 = state_37906__$1;
(statearr_37908_37955[(1)] = (8));

} else {
var statearr_37909_37956 = state_37906__$1;
(statearr_37909_37956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (20))){
var inst_37900 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37910_37957 = state_37906__$1;
(statearr_37910_37957[(2)] = inst_37900);

(statearr_37910_37957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (27))){
var inst_37896 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37911_37958 = state_37906__$1;
(statearr_37911_37958[(2)] = inst_37896);

(statearr_37911_37958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (1))){
var inst_37819 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37819)){
var statearr_37912_37959 = state_37906__$1;
(statearr_37912_37959[(1)] = (2));

} else {
var statearr_37913_37960 = state_37906__$1;
(statearr_37913_37960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (24))){
var inst_37898 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37914_37961 = state_37906__$1;
(statearr_37914_37961[(2)] = inst_37898);

(statearr_37914_37961[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (4))){
var inst_37904 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37906__$1,inst_37904);
} else {
if((state_val_37907 === (15))){
var inst_37902 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37915_37962 = state_37906__$1;
(statearr_37915_37962[(2)] = inst_37902);

(statearr_37915_37962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (21))){
var inst_37855 = (state_37906[(2)]);
var inst_37856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37857 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37856);
var state_37906__$1 = (function (){var statearr_37916 = state_37906;
(statearr_37916[(7)] = inst_37855);

return statearr_37916;
})();
var statearr_37917_37963 = state_37906__$1;
(statearr_37917_37963[(2)] = inst_37857);

(statearr_37917_37963[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (31))){
var inst_37885 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37885)){
var statearr_37918_37964 = state_37906__$1;
(statearr_37918_37964[(1)] = (34));

} else {
var statearr_37919_37965 = state_37906__$1;
(statearr_37919_37965[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (32))){
var inst_37894 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37920_37966 = state_37906__$1;
(statearr_37920_37966[(2)] = inst_37894);

(statearr_37920_37966[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (33))){
var inst_37881 = (state_37906[(2)]);
var inst_37882 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37883 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37882);
var state_37906__$1 = (function (){var statearr_37921 = state_37906;
(statearr_37921[(8)] = inst_37881);

return statearr_37921;
})();
var statearr_37922_37967 = state_37906__$1;
(statearr_37922_37967[(2)] = inst_37883);

(statearr_37922_37967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (13))){
var inst_37840 = figwheel.client.heads_up.clear.call(null);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(16),inst_37840);
} else {
if((state_val_37907 === (22))){
var inst_37861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37862 = figwheel.client.heads_up.append_warning_message.call(null,inst_37861);
var state_37906__$1 = state_37906;
var statearr_37923_37968 = state_37906__$1;
(statearr_37923_37968[(2)] = inst_37862);

(statearr_37923_37968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (36))){
var inst_37892 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37924_37969 = state_37906__$1;
(statearr_37924_37969[(2)] = inst_37892);

(statearr_37924_37969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (29))){
var inst_37872 = (state_37906[(2)]);
var inst_37873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37874 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37873);
var state_37906__$1 = (function (){var statearr_37925 = state_37906;
(statearr_37925[(9)] = inst_37872);

return statearr_37925;
})();
var statearr_37926_37970 = state_37906__$1;
(statearr_37926_37970[(2)] = inst_37874);

(statearr_37926_37970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (6))){
var inst_37821 = (state_37906[(10)]);
var state_37906__$1 = state_37906;
var statearr_37927_37971 = state_37906__$1;
(statearr_37927_37971[(2)] = inst_37821);

(statearr_37927_37971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (28))){
var inst_37868 = (state_37906[(2)]);
var inst_37869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37870 = figwheel.client.heads_up.display_warning.call(null,inst_37869);
var state_37906__$1 = (function (){var statearr_37928 = state_37906;
(statearr_37928[(11)] = inst_37868);

return statearr_37928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(29),inst_37870);
} else {
if((state_val_37907 === (25))){
var inst_37866 = figwheel.client.heads_up.clear.call(null);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(28),inst_37866);
} else {
if((state_val_37907 === (34))){
var inst_37887 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(37),inst_37887);
} else {
if((state_val_37907 === (17))){
var inst_37846 = (state_37906[(2)]);
var inst_37847 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37848 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37847);
var state_37906__$1 = (function (){var statearr_37929 = state_37906;
(statearr_37929[(12)] = inst_37846);

return statearr_37929;
})();
var statearr_37930_37972 = state_37906__$1;
(statearr_37930_37972[(2)] = inst_37848);

(statearr_37930_37972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (3))){
var inst_37838 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37838)){
var statearr_37931_37973 = state_37906__$1;
(statearr_37931_37973[(1)] = (13));

} else {
var statearr_37932_37974 = state_37906__$1;
(statearr_37932_37974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (12))){
var inst_37834 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37933_37975 = state_37906__$1;
(statearr_37933_37975[(2)] = inst_37834);

(statearr_37933_37975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (2))){
var inst_37821 = (state_37906[(10)]);
var inst_37821__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37906__$1 = (function (){var statearr_37934 = state_37906;
(statearr_37934[(10)] = inst_37821__$1);

return statearr_37934;
})();
if(cljs.core.truth_(inst_37821__$1)){
var statearr_37935_37976 = state_37906__$1;
(statearr_37935_37976[(1)] = (5));

} else {
var statearr_37936_37977 = state_37906__$1;
(statearr_37936_37977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (23))){
var inst_37864 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37864)){
var statearr_37937_37978 = state_37906__$1;
(statearr_37937_37978[(1)] = (25));

} else {
var statearr_37938_37979 = state_37906__$1;
(statearr_37938_37979[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (35))){
var state_37906__$1 = state_37906;
var statearr_37939_37980 = state_37906__$1;
(statearr_37939_37980[(2)] = null);

(statearr_37939_37980[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (19))){
var inst_37859 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37859)){
var statearr_37940_37981 = state_37906__$1;
(statearr_37940_37981[(1)] = (22));

} else {
var statearr_37941_37982 = state_37906__$1;
(statearr_37941_37982[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (11))){
var inst_37830 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37942_37983 = state_37906__$1;
(statearr_37942_37983[(2)] = inst_37830);

(statearr_37942_37983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (9))){
var inst_37832 = figwheel.client.heads_up.clear.call(null);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(12),inst_37832);
} else {
if((state_val_37907 === (5))){
var inst_37823 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37906__$1 = state_37906;
var statearr_37943_37984 = state_37906__$1;
(statearr_37943_37984[(2)] = inst_37823);

(statearr_37943_37984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (14))){
var inst_37850 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37850)){
var statearr_37944_37985 = state_37906__$1;
(statearr_37944_37985[(1)] = (18));

} else {
var statearr_37945_37986 = state_37906__$1;
(statearr_37945_37986[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (26))){
var inst_37876 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37906__$1 = state_37906;
if(cljs.core.truth_(inst_37876)){
var statearr_37946_37987 = state_37906__$1;
(statearr_37946_37987[(1)] = (30));

} else {
var statearr_37947_37988 = state_37906__$1;
(statearr_37947_37988[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (16))){
var inst_37842 = (state_37906[(2)]);
var inst_37843 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37844 = figwheel.client.heads_up.display_exception.call(null,inst_37843);
var state_37906__$1 = (function (){var statearr_37948 = state_37906;
(statearr_37948[(13)] = inst_37842);

return statearr_37948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(17),inst_37844);
} else {
if((state_val_37907 === (30))){
var inst_37878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37879 = figwheel.client.heads_up.display_warning.call(null,inst_37878);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(33),inst_37879);
} else {
if((state_val_37907 === (10))){
var inst_37836 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37949_37989 = state_37906__$1;
(statearr_37949_37989[(2)] = inst_37836);

(statearr_37949_37989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (18))){
var inst_37852 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37853 = figwheel.client.heads_up.display_exception.call(null,inst_37852);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(21),inst_37853);
} else {
if((state_val_37907 === (37))){
var inst_37889 = (state_37906[(2)]);
var state_37906__$1 = state_37906;
var statearr_37950_37990 = state_37906__$1;
(statearr_37950_37990[(2)] = inst_37889);

(statearr_37950_37990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37907 === (8))){
var inst_37828 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37906__$1 = state_37906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37906__$1,(11),inst_37828);
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
});})(c__33589__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33501__auto__,c__33589__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____0 = (function (){
var statearr_37951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37951[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__);

(statearr_37951[(1)] = (1));

return statearr_37951;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____1 = (function (state_37906){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_37906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e37952){if((e37952 instanceof Object)){
var ex__33505__auto__ = e37952;
var statearr_37953_37991 = state_37906;
(statearr_37953_37991[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37992 = state_37906;
state_37906 = G__37992;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__ = function(state_37906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____1.call(this,state_37906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__,msg_hist,msg_names,msg))
})();
var state__33591__auto__ = (function (){var statearr_37954 = f__33590__auto__.call(null);
(statearr_37954[(6)] = c__33589__auto__);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__,msg_hist,msg_names,msg))
);

return c__33589__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33589__auto___38021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___38021,ch){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___38021,ch){
return (function (state_38007){
var state_val_38008 = (state_38007[(1)]);
if((state_val_38008 === (1))){
var state_38007__$1 = state_38007;
var statearr_38009_38022 = state_38007__$1;
(statearr_38009_38022[(2)] = null);

(statearr_38009_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (2))){
var state_38007__$1 = state_38007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38007__$1,(4),ch);
} else {
if((state_val_38008 === (3))){
var inst_38005 = (state_38007[(2)]);
var state_38007__$1 = state_38007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38007__$1,inst_38005);
} else {
if((state_val_38008 === (4))){
var inst_37995 = (state_38007[(7)]);
var inst_37995__$1 = (state_38007[(2)]);
var state_38007__$1 = (function (){var statearr_38010 = state_38007;
(statearr_38010[(7)] = inst_37995__$1);

return statearr_38010;
})();
if(cljs.core.truth_(inst_37995__$1)){
var statearr_38011_38023 = state_38007__$1;
(statearr_38011_38023[(1)] = (5));

} else {
var statearr_38012_38024 = state_38007__$1;
(statearr_38012_38024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (5))){
var inst_37995 = (state_38007[(7)]);
var inst_37997 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37995);
var state_38007__$1 = state_38007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38007__$1,(8),inst_37997);
} else {
if((state_val_38008 === (6))){
var state_38007__$1 = state_38007;
var statearr_38013_38025 = state_38007__$1;
(statearr_38013_38025[(2)] = null);

(statearr_38013_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (7))){
var inst_38003 = (state_38007[(2)]);
var state_38007__$1 = state_38007;
var statearr_38014_38026 = state_38007__$1;
(statearr_38014_38026[(2)] = inst_38003);

(statearr_38014_38026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38008 === (8))){
var inst_37999 = (state_38007[(2)]);
var state_38007__$1 = (function (){var statearr_38015 = state_38007;
(statearr_38015[(8)] = inst_37999);

return statearr_38015;
})();
var statearr_38016_38027 = state_38007__$1;
(statearr_38016_38027[(2)] = null);

(statearr_38016_38027[(1)] = (2));


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
});})(c__33589__auto___38021,ch))
;
return ((function (switch__33501__auto__,c__33589__auto___38021,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33502__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33502__auto____0 = (function (){
var statearr_38017 = [null,null,null,null,null,null,null,null,null];
(statearr_38017[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33502__auto__);

(statearr_38017[(1)] = (1));

return statearr_38017;
});
var figwheel$client$heads_up_plugin_$_state_machine__33502__auto____1 = (function (state_38007){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_38007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e38018){if((e38018 instanceof Object)){
var ex__33505__auto__ = e38018;
var statearr_38019_38028 = state_38007;
(statearr_38019_38028[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_38007;
state_38007 = G__38029;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33502__auto__ = function(state_38007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33502__auto____1.call(this,state_38007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33502__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33502__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___38021,ch))
})();
var state__33591__auto__ = (function (){var statearr_38020 = f__33590__auto__.call(null);
(statearr_38020[(6)] = c__33589__auto___38021);

return statearr_38020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___38021,ch))
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__){
return (function (state_38035){
var state_val_38036 = (state_38035[(1)]);
if((state_val_38036 === (1))){
var inst_38030 = cljs.core.async.timeout.call(null,(3000));
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(2),inst_38030);
} else {
if((state_val_38036 === (2))){
var inst_38032 = (state_38035[(2)]);
var inst_38033 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38035__$1 = (function (){var statearr_38037 = state_38035;
(statearr_38037[(7)] = inst_38032);

return statearr_38037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38035__$1,inst_38033);
} else {
return null;
}
}
});})(c__33589__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____1 = (function (state_38035){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_38035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__33505__auto__ = e38039;
var statearr_38040_38042 = state_38035;
(statearr_38040_38042[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38043 = state_38035;
state_38035 = G__38043;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__ = function(state_38035){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____1.call(this,state_38035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33502__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__))
})();
var state__33591__auto__ = (function (){var statearr_38041 = f__33590__auto__.call(null);
(statearr_38041[(6)] = c__33589__auto__);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__))
);

return c__33589__auto__;
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38050){
var state_val_38051 = (state_38050[(1)]);
if((state_val_38051 === (1))){
var inst_38044 = cljs.core.async.timeout.call(null,(2000));
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38050__$1,(2),inst_38044);
} else {
if((state_val_38051 === (2))){
var inst_38046 = (state_38050[(2)]);
var inst_38047 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38048 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38047);
var state_38050__$1 = (function (){var statearr_38052 = state_38050;
(statearr_38052[(7)] = inst_38046);

return statearr_38052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38050__$1,inst_38048);
} else {
return null;
}
}
});})(c__33589__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____0 = (function (){
var statearr_38053 = [null,null,null,null,null,null,null,null];
(statearr_38053[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__);

(statearr_38053[(1)] = (1));

return statearr_38053;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____1 = (function (state_38050){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_38050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e38054){if((e38054 instanceof Object)){
var ex__33505__auto__ = e38054;
var statearr_38055_38057 = state_38050;
(statearr_38055_38057[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38058 = state_38050;
state_38050 = G__38058;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__ = function(state_38050){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____1.call(this,state_38050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33591__auto__ = (function (){var statearr_38056 = f__33590__auto__.call(null);
(statearr_38056[(6)] = c__33589__auto__);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__,figwheel_version,temp__4657__auto__))
);

return c__33589__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38059){
var map__38060 = p__38059;
var map__38060__$1 = ((((!((map__38060 == null)))?((((map__38060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38060):map__38060);
var file = cljs.core.get.call(null,map__38060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38060__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38060__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38062 = "";
var G__38062__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38062),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38062);
var G__38062__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38062__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38062__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38062__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38062__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38063){
var map__38064 = p__38063;
var map__38064__$1 = ((((!((map__38064 == null)))?((((map__38064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38064):map__38064);
var ed = map__38064__$1;
var formatted_exception = cljs.core.get.call(null,map__38064__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38064__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38064__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38066_38070 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38067_38071 = null;
var count__38068_38072 = (0);
var i__38069_38073 = (0);
while(true){
if((i__38069_38073 < count__38068_38072)){
var msg_38074 = cljs.core._nth.call(null,chunk__38067_38071,i__38069_38073);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38074);

var G__38075 = seq__38066_38070;
var G__38076 = chunk__38067_38071;
var G__38077 = count__38068_38072;
var G__38078 = (i__38069_38073 + (1));
seq__38066_38070 = G__38075;
chunk__38067_38071 = G__38076;
count__38068_38072 = G__38077;
i__38069_38073 = G__38078;
continue;
} else {
var temp__4657__auto___38079 = cljs.core.seq.call(null,seq__38066_38070);
if(temp__4657__auto___38079){
var seq__38066_38080__$1 = temp__4657__auto___38079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38066_38080__$1)){
var c__29125__auto___38081 = cljs.core.chunk_first.call(null,seq__38066_38080__$1);
var G__38082 = cljs.core.chunk_rest.call(null,seq__38066_38080__$1);
var G__38083 = c__29125__auto___38081;
var G__38084 = cljs.core.count.call(null,c__29125__auto___38081);
var G__38085 = (0);
seq__38066_38070 = G__38082;
chunk__38067_38071 = G__38083;
count__38068_38072 = G__38084;
i__38069_38073 = G__38085;
continue;
} else {
var msg_38086 = cljs.core.first.call(null,seq__38066_38080__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38086);

var G__38087 = cljs.core.next.call(null,seq__38066_38080__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__38066_38070 = G__38087;
chunk__38067_38071 = G__38088;
count__38068_38072 = G__38089;
i__38069_38073 = G__38090;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38091){
var map__38092 = p__38091;
var map__38092__$1 = ((((!((map__38092 == null)))?((((map__38092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38092):map__38092);
var w = map__38092__$1;
var message = cljs.core.get.call(null,map__38092__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38094 = cljs.core.seq.call(null,plugins);
var chunk__38095 = null;
var count__38096 = (0);
var i__38097 = (0);
while(true){
if((i__38097 < count__38096)){
var vec__38098 = cljs.core._nth.call(null,chunk__38095,i__38097);
var k = cljs.core.nth.call(null,vec__38098,(0),null);
var plugin = cljs.core.nth.call(null,vec__38098,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38104 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38094,chunk__38095,count__38096,i__38097,pl_38104,vec__38098,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38104.call(null,msg_hist);
});})(seq__38094,chunk__38095,count__38096,i__38097,pl_38104,vec__38098,k,plugin))
);
} else {
}

var G__38105 = seq__38094;
var G__38106 = chunk__38095;
var G__38107 = count__38096;
var G__38108 = (i__38097 + (1));
seq__38094 = G__38105;
chunk__38095 = G__38106;
count__38096 = G__38107;
i__38097 = G__38108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38094);
if(temp__4657__auto__){
var seq__38094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38094__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__38094__$1);
var G__38109 = cljs.core.chunk_rest.call(null,seq__38094__$1);
var G__38110 = c__29125__auto__;
var G__38111 = cljs.core.count.call(null,c__29125__auto__);
var G__38112 = (0);
seq__38094 = G__38109;
chunk__38095 = G__38110;
count__38096 = G__38111;
i__38097 = G__38112;
continue;
} else {
var vec__38101 = cljs.core.first.call(null,seq__38094__$1);
var k = cljs.core.nth.call(null,vec__38101,(0),null);
var plugin = cljs.core.nth.call(null,vec__38101,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38113 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38094,chunk__38095,count__38096,i__38097,pl_38113,vec__38101,k,plugin,seq__38094__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38113.call(null,msg_hist);
});})(seq__38094,chunk__38095,count__38096,i__38097,pl_38113,vec__38101,k,plugin,seq__38094__$1,temp__4657__auto__))
);
} else {
}

var G__38114 = cljs.core.next.call(null,seq__38094__$1);
var G__38115 = null;
var G__38116 = (0);
var G__38117 = (0);
seq__38094 = G__38114;
chunk__38095 = G__38115;
count__38096 = G__38116;
i__38097 = G__38117;
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
var G__38119 = arguments.length;
switch (G__38119) {
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

var seq__38120_38125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38121_38126 = null;
var count__38122_38127 = (0);
var i__38123_38128 = (0);
while(true){
if((i__38123_38128 < count__38122_38127)){
var msg_38129 = cljs.core._nth.call(null,chunk__38121_38126,i__38123_38128);
figwheel.client.socket.handle_incoming_message.call(null,msg_38129);

var G__38130 = seq__38120_38125;
var G__38131 = chunk__38121_38126;
var G__38132 = count__38122_38127;
var G__38133 = (i__38123_38128 + (1));
seq__38120_38125 = G__38130;
chunk__38121_38126 = G__38131;
count__38122_38127 = G__38132;
i__38123_38128 = G__38133;
continue;
} else {
var temp__4657__auto___38134 = cljs.core.seq.call(null,seq__38120_38125);
if(temp__4657__auto___38134){
var seq__38120_38135__$1 = temp__4657__auto___38134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38120_38135__$1)){
var c__29125__auto___38136 = cljs.core.chunk_first.call(null,seq__38120_38135__$1);
var G__38137 = cljs.core.chunk_rest.call(null,seq__38120_38135__$1);
var G__38138 = c__29125__auto___38136;
var G__38139 = cljs.core.count.call(null,c__29125__auto___38136);
var G__38140 = (0);
seq__38120_38125 = G__38137;
chunk__38121_38126 = G__38138;
count__38122_38127 = G__38139;
i__38123_38128 = G__38140;
continue;
} else {
var msg_38141 = cljs.core.first.call(null,seq__38120_38135__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38141);

var G__38142 = cljs.core.next.call(null,seq__38120_38135__$1);
var G__38143 = null;
var G__38144 = (0);
var G__38145 = (0);
seq__38120_38125 = G__38142;
chunk__38121_38126 = G__38143;
count__38122_38127 = G__38144;
i__38123_38128 = G__38145;
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
var len__29455__auto___38150 = arguments.length;
var i__29456__auto___38151 = (0);
while(true){
if((i__29456__auto___38151 < len__29455__auto___38150)){
args__29462__auto__.push((arguments[i__29456__auto___38151]));

var G__38152 = (i__29456__auto___38151 + (1));
i__29456__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38147){
var map__38148 = p__38147;
var map__38148__$1 = ((((!((map__38148 == null)))?((((map__38148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38148):map__38148);
var opts = map__38148__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38146){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38146));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38153){if((e38153 instanceof Error)){
var e = e38153;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38153;

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
return (function (p__38154){
var map__38155 = p__38154;
var map__38155__$1 = ((((!((map__38155 == null)))?((((map__38155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38155):map__38155);
var msg_name = cljs.core.get.call(null,map__38155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513768313515
