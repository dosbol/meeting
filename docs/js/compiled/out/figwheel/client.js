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
}catch (e37641){if((e37641 instanceof Error)){
var e = e37641;
return "Error: Unable to stringify";
} else {
throw e37641;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37644 = arguments.length;
switch (G__37644) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37642_SHARP_){
if(typeof p1__37642_SHARP_ === 'string'){
return p1__37642_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37642_SHARP_);
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
var len__29455__auto___37647 = arguments.length;
var i__29456__auto___37648 = (0);
while(true){
if((i__29456__auto___37648 < len__29455__auto___37647)){
args__29462__auto__.push((arguments[i__29456__auto___37648]));

var G__37649 = (i__29456__auto___37648 + (1));
i__29456__auto___37648 = G__37649;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37646){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37646));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37651 = arguments.length;
var i__29456__auto___37652 = (0);
while(true){
if((i__29456__auto___37652 < len__29455__auto___37651)){
args__29462__auto__.push((arguments[i__29456__auto___37652]));

var G__37653 = (i__29456__auto___37652 + (1));
i__29456__auto___37652 = G__37653;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37650){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37650));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37654){
var map__37655 = p__37654;
var map__37655__$1 = ((((!((map__37655 == null)))?((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);
var message = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33555__auto___37734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___37734,ch){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___37734,ch){
return (function (state_37706){
var state_val_37707 = (state_37706[(1)]);
if((state_val_37707 === (7))){
var inst_37702 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37708_37735 = state_37706__$1;
(statearr_37708_37735[(2)] = inst_37702);

(statearr_37708_37735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (1))){
var state_37706__$1 = state_37706;
var statearr_37709_37736 = state_37706__$1;
(statearr_37709_37736[(2)] = null);

(statearr_37709_37736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (4))){
var inst_37659 = (state_37706[(7)]);
var inst_37659__$1 = (state_37706[(2)]);
var state_37706__$1 = (function (){var statearr_37710 = state_37706;
(statearr_37710[(7)] = inst_37659__$1);

return statearr_37710;
})();
if(cljs.core.truth_(inst_37659__$1)){
var statearr_37711_37737 = state_37706__$1;
(statearr_37711_37737[(1)] = (5));

} else {
var statearr_37712_37738 = state_37706__$1;
(statearr_37712_37738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (15))){
var inst_37666 = (state_37706[(8)]);
var inst_37681 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37666);
var inst_37682 = cljs.core.first.call(null,inst_37681);
var inst_37683 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37682);
var inst_37684 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37683)].join('');
var inst_37685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37684);
var state_37706__$1 = state_37706;
var statearr_37713_37739 = state_37706__$1;
(statearr_37713_37739[(2)] = inst_37685);

(statearr_37713_37739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (13))){
var inst_37690 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37714_37740 = state_37706__$1;
(statearr_37714_37740[(2)] = inst_37690);

(statearr_37714_37740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (6))){
var state_37706__$1 = state_37706;
var statearr_37715_37741 = state_37706__$1;
(statearr_37715_37741[(2)] = null);

(statearr_37715_37741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (17))){
var inst_37688 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37716_37742 = state_37706__$1;
(statearr_37716_37742[(2)] = inst_37688);

(statearr_37716_37742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (3))){
var inst_37704 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37706__$1,inst_37704);
} else {
if((state_val_37707 === (12))){
var inst_37665 = (state_37706[(9)]);
var inst_37679 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37665,opts);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37679)){
var statearr_37717_37743 = state_37706__$1;
(statearr_37717_37743[(1)] = (15));

} else {
var statearr_37718_37744 = state_37706__$1;
(statearr_37718_37744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (2))){
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(4),ch);
} else {
if((state_val_37707 === (11))){
var inst_37666 = (state_37706[(8)]);
var inst_37671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37672 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37666);
var inst_37673 = cljs.core.async.timeout.call(null,(1000));
var inst_37674 = [inst_37672,inst_37673];
var inst_37675 = (new cljs.core.PersistentVector(null,2,(5),inst_37671,inst_37674,null));
var state_37706__$1 = state_37706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37706__$1,(14),inst_37675);
} else {
if((state_val_37707 === (9))){
var inst_37666 = (state_37706[(8)]);
var inst_37692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37693 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37666);
var inst_37694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37693);
var inst_37695 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37694)].join('');
var inst_37696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37695);
var state_37706__$1 = (function (){var statearr_37719 = state_37706;
(statearr_37719[(10)] = inst_37692);

return statearr_37719;
})();
var statearr_37720_37745 = state_37706__$1;
(statearr_37720_37745[(2)] = inst_37696);

(statearr_37720_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (5))){
var inst_37659 = (state_37706[(7)]);
var inst_37661 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37662 = (new cljs.core.PersistentArrayMap(null,2,inst_37661,null));
var inst_37663 = (new cljs.core.PersistentHashSet(null,inst_37662,null));
var inst_37664 = figwheel.client.focus_msgs.call(null,inst_37663,inst_37659);
var inst_37665 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37664);
var inst_37666 = cljs.core.first.call(null,inst_37664);
var inst_37667 = figwheel.client.autoload_QMARK_.call(null);
var state_37706__$1 = (function (){var statearr_37721 = state_37706;
(statearr_37721[(8)] = inst_37666);

(statearr_37721[(9)] = inst_37665);

return statearr_37721;
})();
if(cljs.core.truth_(inst_37667)){
var statearr_37722_37746 = state_37706__$1;
(statearr_37722_37746[(1)] = (8));

} else {
var statearr_37723_37747 = state_37706__$1;
(statearr_37723_37747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (14))){
var inst_37677 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37724_37748 = state_37706__$1;
(statearr_37724_37748[(2)] = inst_37677);

(statearr_37724_37748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (16))){
var state_37706__$1 = state_37706;
var statearr_37725_37749 = state_37706__$1;
(statearr_37725_37749[(2)] = null);

(statearr_37725_37749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (10))){
var inst_37698 = (state_37706[(2)]);
var state_37706__$1 = (function (){var statearr_37726 = state_37706;
(statearr_37726[(11)] = inst_37698);

return statearr_37726;
})();
var statearr_37727_37750 = state_37706__$1;
(statearr_37727_37750[(2)] = null);

(statearr_37727_37750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (8))){
var inst_37665 = (state_37706[(9)]);
var inst_37669 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37665,opts);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37669)){
var statearr_37728_37751 = state_37706__$1;
(statearr_37728_37751[(1)] = (11));

} else {
var statearr_37729_37752 = state_37706__$1;
(statearr_37729_37752[(1)] = (12));

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
});})(c__33555__auto___37734,ch))
;
return ((function (switch__33467__auto__,c__33555__auto___37734,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____0 = (function (){
var statearr_37730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37730[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__);

(statearr_37730[(1)] = (1));

return statearr_37730;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____1 = (function (state_37706){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_37706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e37731){if((e37731 instanceof Object)){
var ex__33471__auto__ = e37731;
var statearr_37732_37753 = state_37706;
(statearr_37732_37753[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37754 = state_37706;
state_37706 = G__37754;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__ = function(state_37706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____1.call(this,state_37706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33468__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___37734,ch))
})();
var state__33557__auto__ = (function (){var statearr_37733 = f__33556__auto__.call(null);
(statearr_37733[(6)] = c__33555__auto___37734);

return statearr_37733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___37734,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37755_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37755_SHARP_));
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
var base_path_37757 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37757){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37756){if((e37756 instanceof Error)){
var e = e37756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37757], null));
} else {
var e = e37756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37757))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37758){
var map__37759 = p__37758;
var map__37759__$1 = ((((!((map__37759 == null)))?((((map__37759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37759):map__37759);
var opts = map__37759__$1;
var build_id = cljs.core.get.call(null,map__37759__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37759,map__37759__$1,opts,build_id){
return (function (p__37761){
var vec__37762 = p__37761;
var seq__37763 = cljs.core.seq.call(null,vec__37762);
var first__37764 = cljs.core.first.call(null,seq__37763);
var seq__37763__$1 = cljs.core.next.call(null,seq__37763);
var map__37765 = first__37764;
var map__37765__$1 = ((((!((map__37765 == null)))?((((map__37765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37765):map__37765);
var msg = map__37765__$1;
var msg_name = cljs.core.get.call(null,map__37765__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37763__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37762,seq__37763,first__37764,seq__37763__$1,map__37765,map__37765__$1,msg,msg_name,_,map__37759,map__37759__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37762,seq__37763,first__37764,seq__37763__$1,map__37765,map__37765__$1,msg,msg_name,_,map__37759,map__37759__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37759,map__37759__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37767){
var vec__37768 = p__37767;
var seq__37769 = cljs.core.seq.call(null,vec__37768);
var first__37770 = cljs.core.first.call(null,seq__37769);
var seq__37769__$1 = cljs.core.next.call(null,seq__37769);
var map__37771 = first__37770;
var map__37771__$1 = ((((!((map__37771 == null)))?((((map__37771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37771):map__37771);
var msg = map__37771__$1;
var msg_name = cljs.core.get.call(null,map__37771__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37769__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37773){
var map__37774 = p__37773;
var map__37774__$1 = ((((!((map__37774 == null)))?((((map__37774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37774):map__37774);
var on_compile_warning = cljs.core.get.call(null,map__37774__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37774__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37774,map__37774__$1,on_compile_warning,on_compile_fail){
return (function (p__37776){
var vec__37777 = p__37776;
var seq__37778 = cljs.core.seq.call(null,vec__37777);
var first__37779 = cljs.core.first.call(null,seq__37778);
var seq__37778__$1 = cljs.core.next.call(null,seq__37778);
var map__37780 = first__37779;
var map__37780__$1 = ((((!((map__37780 == null)))?((((map__37780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37780):map__37780);
var msg = map__37780__$1;
var msg_name = cljs.core.get.call(null,map__37780__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37778__$1;
var pred__37782 = cljs.core._EQ_;
var expr__37783 = msg_name;
if(cljs.core.truth_(pred__37782.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37783))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37782.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37783))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37774,map__37774__$1,on_compile_warning,on_compile_fail))
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__,msg_hist,msg_names,msg){
return (function (state_37872){
var state_val_37873 = (state_37872[(1)]);
if((state_val_37873 === (7))){
var inst_37792 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37792)){
var statearr_37874_37921 = state_37872__$1;
(statearr_37874_37921[(1)] = (8));

} else {
var statearr_37875_37922 = state_37872__$1;
(statearr_37875_37922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (20))){
var inst_37866 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37876_37923 = state_37872__$1;
(statearr_37876_37923[(2)] = inst_37866);

(statearr_37876_37923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (27))){
var inst_37862 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37877_37924 = state_37872__$1;
(statearr_37877_37924[(2)] = inst_37862);

(statearr_37877_37924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (1))){
var inst_37785 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37785)){
var statearr_37878_37925 = state_37872__$1;
(statearr_37878_37925[(1)] = (2));

} else {
var statearr_37879_37926 = state_37872__$1;
(statearr_37879_37926[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (24))){
var inst_37864 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37880_37927 = state_37872__$1;
(statearr_37880_37927[(2)] = inst_37864);

(statearr_37880_37927[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (4))){
var inst_37870 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37872__$1,inst_37870);
} else {
if((state_val_37873 === (15))){
var inst_37868 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37881_37928 = state_37872__$1;
(statearr_37881_37928[(2)] = inst_37868);

(statearr_37881_37928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (21))){
var inst_37821 = (state_37872[(2)]);
var inst_37822 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37823 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37822);
var state_37872__$1 = (function (){var statearr_37882 = state_37872;
(statearr_37882[(7)] = inst_37821);

return statearr_37882;
})();
var statearr_37883_37929 = state_37872__$1;
(statearr_37883_37929[(2)] = inst_37823);

(statearr_37883_37929[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (31))){
var inst_37851 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37851)){
var statearr_37884_37930 = state_37872__$1;
(statearr_37884_37930[(1)] = (34));

} else {
var statearr_37885_37931 = state_37872__$1;
(statearr_37885_37931[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (32))){
var inst_37860 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37886_37932 = state_37872__$1;
(statearr_37886_37932[(2)] = inst_37860);

(statearr_37886_37932[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (33))){
var inst_37847 = (state_37872[(2)]);
var inst_37848 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37849 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37848);
var state_37872__$1 = (function (){var statearr_37887 = state_37872;
(statearr_37887[(8)] = inst_37847);

return statearr_37887;
})();
var statearr_37888_37933 = state_37872__$1;
(statearr_37888_37933[(2)] = inst_37849);

(statearr_37888_37933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (13))){
var inst_37806 = figwheel.client.heads_up.clear.call(null);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(16),inst_37806);
} else {
if((state_val_37873 === (22))){
var inst_37827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37828 = figwheel.client.heads_up.append_warning_message.call(null,inst_37827);
var state_37872__$1 = state_37872;
var statearr_37889_37934 = state_37872__$1;
(statearr_37889_37934[(2)] = inst_37828);

(statearr_37889_37934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (36))){
var inst_37858 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37890_37935 = state_37872__$1;
(statearr_37890_37935[(2)] = inst_37858);

(statearr_37890_37935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (29))){
var inst_37838 = (state_37872[(2)]);
var inst_37839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37840 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37839);
var state_37872__$1 = (function (){var statearr_37891 = state_37872;
(statearr_37891[(9)] = inst_37838);

return statearr_37891;
})();
var statearr_37892_37936 = state_37872__$1;
(statearr_37892_37936[(2)] = inst_37840);

(statearr_37892_37936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (6))){
var inst_37787 = (state_37872[(10)]);
var state_37872__$1 = state_37872;
var statearr_37893_37937 = state_37872__$1;
(statearr_37893_37937[(2)] = inst_37787);

(statearr_37893_37937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (28))){
var inst_37834 = (state_37872[(2)]);
var inst_37835 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37836 = figwheel.client.heads_up.display_warning.call(null,inst_37835);
var state_37872__$1 = (function (){var statearr_37894 = state_37872;
(statearr_37894[(11)] = inst_37834);

return statearr_37894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(29),inst_37836);
} else {
if((state_val_37873 === (25))){
var inst_37832 = figwheel.client.heads_up.clear.call(null);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(28),inst_37832);
} else {
if((state_val_37873 === (34))){
var inst_37853 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(37),inst_37853);
} else {
if((state_val_37873 === (17))){
var inst_37812 = (state_37872[(2)]);
var inst_37813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37814 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37813);
var state_37872__$1 = (function (){var statearr_37895 = state_37872;
(statearr_37895[(12)] = inst_37812);

return statearr_37895;
})();
var statearr_37896_37938 = state_37872__$1;
(statearr_37896_37938[(2)] = inst_37814);

(statearr_37896_37938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (3))){
var inst_37804 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37804)){
var statearr_37897_37939 = state_37872__$1;
(statearr_37897_37939[(1)] = (13));

} else {
var statearr_37898_37940 = state_37872__$1;
(statearr_37898_37940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (12))){
var inst_37800 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37899_37941 = state_37872__$1;
(statearr_37899_37941[(2)] = inst_37800);

(statearr_37899_37941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (2))){
var inst_37787 = (state_37872[(10)]);
var inst_37787__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37872__$1 = (function (){var statearr_37900 = state_37872;
(statearr_37900[(10)] = inst_37787__$1);

return statearr_37900;
})();
if(cljs.core.truth_(inst_37787__$1)){
var statearr_37901_37942 = state_37872__$1;
(statearr_37901_37942[(1)] = (5));

} else {
var statearr_37902_37943 = state_37872__$1;
(statearr_37902_37943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (23))){
var inst_37830 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37830)){
var statearr_37903_37944 = state_37872__$1;
(statearr_37903_37944[(1)] = (25));

} else {
var statearr_37904_37945 = state_37872__$1;
(statearr_37904_37945[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (35))){
var state_37872__$1 = state_37872;
var statearr_37905_37946 = state_37872__$1;
(statearr_37905_37946[(2)] = null);

(statearr_37905_37946[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (19))){
var inst_37825 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37825)){
var statearr_37906_37947 = state_37872__$1;
(statearr_37906_37947[(1)] = (22));

} else {
var statearr_37907_37948 = state_37872__$1;
(statearr_37907_37948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (11))){
var inst_37796 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37908_37949 = state_37872__$1;
(statearr_37908_37949[(2)] = inst_37796);

(statearr_37908_37949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (9))){
var inst_37798 = figwheel.client.heads_up.clear.call(null);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(12),inst_37798);
} else {
if((state_val_37873 === (5))){
var inst_37789 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37872__$1 = state_37872;
var statearr_37909_37950 = state_37872__$1;
(statearr_37909_37950[(2)] = inst_37789);

(statearr_37909_37950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (14))){
var inst_37816 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37816)){
var statearr_37910_37951 = state_37872__$1;
(statearr_37910_37951[(1)] = (18));

} else {
var statearr_37911_37952 = state_37872__$1;
(statearr_37911_37952[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (26))){
var inst_37842 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37842)){
var statearr_37912_37953 = state_37872__$1;
(statearr_37912_37953[(1)] = (30));

} else {
var statearr_37913_37954 = state_37872__$1;
(statearr_37913_37954[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (16))){
var inst_37808 = (state_37872[(2)]);
var inst_37809 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37810 = figwheel.client.heads_up.display_exception.call(null,inst_37809);
var state_37872__$1 = (function (){var statearr_37914 = state_37872;
(statearr_37914[(13)] = inst_37808);

return statearr_37914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(17),inst_37810);
} else {
if((state_val_37873 === (30))){
var inst_37844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37845 = figwheel.client.heads_up.display_warning.call(null,inst_37844);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(33),inst_37845);
} else {
if((state_val_37873 === (10))){
var inst_37802 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37915_37955 = state_37872__$1;
(statearr_37915_37955[(2)] = inst_37802);

(statearr_37915_37955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (18))){
var inst_37818 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37819 = figwheel.client.heads_up.display_exception.call(null,inst_37818);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(21),inst_37819);
} else {
if((state_val_37873 === (37))){
var inst_37855 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37916_37956 = state_37872__$1;
(statearr_37916_37956[(2)] = inst_37855);

(statearr_37916_37956[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (8))){
var inst_37794 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37872__$1,(11),inst_37794);
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
});})(c__33555__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33467__auto__,c__33555__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____0 = (function (){
var statearr_37917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37917[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__);

(statearr_37917[(1)] = (1));

return statearr_37917;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____1 = (function (state_37872){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_37872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e37918){if((e37918 instanceof Object)){
var ex__33471__auto__ = e37918;
var statearr_37919_37957 = state_37872;
(statearr_37919_37957[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37958 = state_37872;
state_37872 = G__37958;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__ = function(state_37872){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____1.call(this,state_37872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__,msg_hist,msg_names,msg))
})();
var state__33557__auto__ = (function (){var statearr_37920 = f__33556__auto__.call(null);
(statearr_37920[(6)] = c__33555__auto__);

return statearr_37920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__,msg_hist,msg_names,msg))
);

return c__33555__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33555__auto___37987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___37987,ch){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___37987,ch){
return (function (state_37973){
var state_val_37974 = (state_37973[(1)]);
if((state_val_37974 === (1))){
var state_37973__$1 = state_37973;
var statearr_37975_37988 = state_37973__$1;
(statearr_37975_37988[(2)] = null);

(statearr_37975_37988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37974 === (2))){
var state_37973__$1 = state_37973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37973__$1,(4),ch);
} else {
if((state_val_37974 === (3))){
var inst_37971 = (state_37973[(2)]);
var state_37973__$1 = state_37973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37973__$1,inst_37971);
} else {
if((state_val_37974 === (4))){
var inst_37961 = (state_37973[(7)]);
var inst_37961__$1 = (state_37973[(2)]);
var state_37973__$1 = (function (){var statearr_37976 = state_37973;
(statearr_37976[(7)] = inst_37961__$1);

return statearr_37976;
})();
if(cljs.core.truth_(inst_37961__$1)){
var statearr_37977_37989 = state_37973__$1;
(statearr_37977_37989[(1)] = (5));

} else {
var statearr_37978_37990 = state_37973__$1;
(statearr_37978_37990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37974 === (5))){
var inst_37961 = (state_37973[(7)]);
var inst_37963 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37961);
var state_37973__$1 = state_37973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37973__$1,(8),inst_37963);
} else {
if((state_val_37974 === (6))){
var state_37973__$1 = state_37973;
var statearr_37979_37991 = state_37973__$1;
(statearr_37979_37991[(2)] = null);

(statearr_37979_37991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37974 === (7))){
var inst_37969 = (state_37973[(2)]);
var state_37973__$1 = state_37973;
var statearr_37980_37992 = state_37973__$1;
(statearr_37980_37992[(2)] = inst_37969);

(statearr_37980_37992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37974 === (8))){
var inst_37965 = (state_37973[(2)]);
var state_37973__$1 = (function (){var statearr_37981 = state_37973;
(statearr_37981[(8)] = inst_37965);

return statearr_37981;
})();
var statearr_37982_37993 = state_37973__$1;
(statearr_37982_37993[(2)] = null);

(statearr_37982_37993[(1)] = (2));


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
});})(c__33555__auto___37987,ch))
;
return ((function (switch__33467__auto__,c__33555__auto___37987,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33468__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33468__auto____0 = (function (){
var statearr_37983 = [null,null,null,null,null,null,null,null,null];
(statearr_37983[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33468__auto__);

(statearr_37983[(1)] = (1));

return statearr_37983;
});
var figwheel$client$heads_up_plugin_$_state_machine__33468__auto____1 = (function (state_37973){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_37973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e37984){if((e37984 instanceof Object)){
var ex__33471__auto__ = e37984;
var statearr_37985_37994 = state_37973;
(statearr_37985_37994[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37995 = state_37973;
state_37973 = G__37995;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33468__auto__ = function(state_37973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33468__auto____1.call(this,state_37973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33468__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33468__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___37987,ch))
})();
var state__33557__auto__ = (function (){var statearr_37986 = f__33556__auto__.call(null);
(statearr_37986[(6)] = c__33555__auto___37987);

return statearr_37986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___37987,ch))
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_38001){
var state_val_38002 = (state_38001[(1)]);
if((state_val_38002 === (1))){
var inst_37996 = cljs.core.async.timeout.call(null,(3000));
var state_38001__$1 = state_38001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38001__$1,(2),inst_37996);
} else {
if((state_val_38002 === (2))){
var inst_37998 = (state_38001[(2)]);
var inst_37999 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38001__$1 = (function (){var statearr_38003 = state_38001;
(statearr_38003[(7)] = inst_37998);

return statearr_38003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38001__$1,inst_37999);
} else {
return null;
}
}
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____0 = (function (){
var statearr_38004 = [null,null,null,null,null,null,null,null];
(statearr_38004[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__);

(statearr_38004[(1)] = (1));

return statearr_38004;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____1 = (function (state_38001){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_38001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e38005){if((e38005 instanceof Object)){
var ex__33471__auto__ = e38005;
var statearr_38006_38008 = state_38001;
(statearr_38006_38008[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_38001;
state_38001 = G__38009;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__ = function(state_38001){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____1.call(this,state_38001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33468__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_38007 = f__33556__auto__.call(null);
(statearr_38007[(6)] = c__33555__auto__);

return statearr_38007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38016){
var state_val_38017 = (state_38016[(1)]);
if((state_val_38017 === (1))){
var inst_38010 = cljs.core.async.timeout.call(null,(2000));
var state_38016__$1 = state_38016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38016__$1,(2),inst_38010);
} else {
if((state_val_38017 === (2))){
var inst_38012 = (state_38016[(2)]);
var inst_38013 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38014 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38013);
var state_38016__$1 = (function (){var statearr_38018 = state_38016;
(statearr_38018[(7)] = inst_38012);

return statearr_38018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38016__$1,inst_38014);
} else {
return null;
}
}
});})(c__33555__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____0 = (function (){
var statearr_38019 = [null,null,null,null,null,null,null,null];
(statearr_38019[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__);

(statearr_38019[(1)] = (1));

return statearr_38019;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____1 = (function (state_38016){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_38016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e38020){if((e38020 instanceof Object)){
var ex__33471__auto__ = e38020;
var statearr_38021_38023 = state_38016;
(statearr_38021_38023[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38024 = state_38016;
state_38016 = G__38024;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__ = function(state_38016){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____1.call(this,state_38016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33557__auto__ = (function (){var statearr_38022 = f__33556__auto__.call(null);
(statearr_38022[(6)] = c__33555__auto__);

return statearr_38022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__,figwheel_version,temp__4657__auto__))
);

return c__33555__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38025){
var map__38026 = p__38025;
var map__38026__$1 = ((((!((map__38026 == null)))?((((map__38026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38026):map__38026);
var file = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38028 = "";
var G__38028__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38028),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38028);
var G__38028__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38028__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38028__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38028__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38028__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38029){
var map__38030 = p__38029;
var map__38030__$1 = ((((!((map__38030 == null)))?((((map__38030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38030):map__38030);
var ed = map__38030__$1;
var formatted_exception = cljs.core.get.call(null,map__38030__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38030__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38030__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38032_38036 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38033_38037 = null;
var count__38034_38038 = (0);
var i__38035_38039 = (0);
while(true){
if((i__38035_38039 < count__38034_38038)){
var msg_38040 = cljs.core._nth.call(null,chunk__38033_38037,i__38035_38039);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38040);

var G__38041 = seq__38032_38036;
var G__38042 = chunk__38033_38037;
var G__38043 = count__38034_38038;
var G__38044 = (i__38035_38039 + (1));
seq__38032_38036 = G__38041;
chunk__38033_38037 = G__38042;
count__38034_38038 = G__38043;
i__38035_38039 = G__38044;
continue;
} else {
var temp__4657__auto___38045 = cljs.core.seq.call(null,seq__38032_38036);
if(temp__4657__auto___38045){
var seq__38032_38046__$1 = temp__4657__auto___38045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38032_38046__$1)){
var c__29125__auto___38047 = cljs.core.chunk_first.call(null,seq__38032_38046__$1);
var G__38048 = cljs.core.chunk_rest.call(null,seq__38032_38046__$1);
var G__38049 = c__29125__auto___38047;
var G__38050 = cljs.core.count.call(null,c__29125__auto___38047);
var G__38051 = (0);
seq__38032_38036 = G__38048;
chunk__38033_38037 = G__38049;
count__38034_38038 = G__38050;
i__38035_38039 = G__38051;
continue;
} else {
var msg_38052 = cljs.core.first.call(null,seq__38032_38046__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38052);

var G__38053 = cljs.core.next.call(null,seq__38032_38046__$1);
var G__38054 = null;
var G__38055 = (0);
var G__38056 = (0);
seq__38032_38036 = G__38053;
chunk__38033_38037 = G__38054;
count__38034_38038 = G__38055;
i__38035_38039 = G__38056;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38057){
var map__38058 = p__38057;
var map__38058__$1 = ((((!((map__38058 == null)))?((((map__38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38058):map__38058);
var w = map__38058__$1;
var message = cljs.core.get.call(null,map__38058__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38060 = cljs.core.seq.call(null,plugins);
var chunk__38061 = null;
var count__38062 = (0);
var i__38063 = (0);
while(true){
if((i__38063 < count__38062)){
var vec__38064 = cljs.core._nth.call(null,chunk__38061,i__38063);
var k = cljs.core.nth.call(null,vec__38064,(0),null);
var plugin = cljs.core.nth.call(null,vec__38064,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38070 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38060,chunk__38061,count__38062,i__38063,pl_38070,vec__38064,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38070.call(null,msg_hist);
});})(seq__38060,chunk__38061,count__38062,i__38063,pl_38070,vec__38064,k,plugin))
);
} else {
}

var G__38071 = seq__38060;
var G__38072 = chunk__38061;
var G__38073 = count__38062;
var G__38074 = (i__38063 + (1));
seq__38060 = G__38071;
chunk__38061 = G__38072;
count__38062 = G__38073;
i__38063 = G__38074;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38060);
if(temp__4657__auto__){
var seq__38060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38060__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__38060__$1);
var G__38075 = cljs.core.chunk_rest.call(null,seq__38060__$1);
var G__38076 = c__29125__auto__;
var G__38077 = cljs.core.count.call(null,c__29125__auto__);
var G__38078 = (0);
seq__38060 = G__38075;
chunk__38061 = G__38076;
count__38062 = G__38077;
i__38063 = G__38078;
continue;
} else {
var vec__38067 = cljs.core.first.call(null,seq__38060__$1);
var k = cljs.core.nth.call(null,vec__38067,(0),null);
var plugin = cljs.core.nth.call(null,vec__38067,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38079 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38060,chunk__38061,count__38062,i__38063,pl_38079,vec__38067,k,plugin,seq__38060__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38079.call(null,msg_hist);
});})(seq__38060,chunk__38061,count__38062,i__38063,pl_38079,vec__38067,k,plugin,seq__38060__$1,temp__4657__auto__))
);
} else {
}

var G__38080 = cljs.core.next.call(null,seq__38060__$1);
var G__38081 = null;
var G__38082 = (0);
var G__38083 = (0);
seq__38060 = G__38080;
chunk__38061 = G__38081;
count__38062 = G__38082;
i__38063 = G__38083;
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
var G__38085 = arguments.length;
switch (G__38085) {
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

var seq__38086_38091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38087_38092 = null;
var count__38088_38093 = (0);
var i__38089_38094 = (0);
while(true){
if((i__38089_38094 < count__38088_38093)){
var msg_38095 = cljs.core._nth.call(null,chunk__38087_38092,i__38089_38094);
figwheel.client.socket.handle_incoming_message.call(null,msg_38095);

var G__38096 = seq__38086_38091;
var G__38097 = chunk__38087_38092;
var G__38098 = count__38088_38093;
var G__38099 = (i__38089_38094 + (1));
seq__38086_38091 = G__38096;
chunk__38087_38092 = G__38097;
count__38088_38093 = G__38098;
i__38089_38094 = G__38099;
continue;
} else {
var temp__4657__auto___38100 = cljs.core.seq.call(null,seq__38086_38091);
if(temp__4657__auto___38100){
var seq__38086_38101__$1 = temp__4657__auto___38100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38086_38101__$1)){
var c__29125__auto___38102 = cljs.core.chunk_first.call(null,seq__38086_38101__$1);
var G__38103 = cljs.core.chunk_rest.call(null,seq__38086_38101__$1);
var G__38104 = c__29125__auto___38102;
var G__38105 = cljs.core.count.call(null,c__29125__auto___38102);
var G__38106 = (0);
seq__38086_38091 = G__38103;
chunk__38087_38092 = G__38104;
count__38088_38093 = G__38105;
i__38089_38094 = G__38106;
continue;
} else {
var msg_38107 = cljs.core.first.call(null,seq__38086_38101__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38107);

var G__38108 = cljs.core.next.call(null,seq__38086_38101__$1);
var G__38109 = null;
var G__38110 = (0);
var G__38111 = (0);
seq__38086_38091 = G__38108;
chunk__38087_38092 = G__38109;
count__38088_38093 = G__38110;
i__38089_38094 = G__38111;
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
var len__29455__auto___38116 = arguments.length;
var i__29456__auto___38117 = (0);
while(true){
if((i__29456__auto___38117 < len__29455__auto___38116)){
args__29462__auto__.push((arguments[i__29456__auto___38117]));

var G__38118 = (i__29456__auto___38117 + (1));
i__29456__auto___38117 = G__38118;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38113){
var map__38114 = p__38113;
var map__38114__$1 = ((((!((map__38114 == null)))?((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38114):map__38114);
var opts = map__38114__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38112){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38112));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38119){if((e38119 instanceof Error)){
var e = e38119;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38119;

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
return (function (p__38120){
var map__38121 = p__38120;
var map__38121__$1 = ((((!((map__38121 == null)))?((((map__38121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38121):map__38121);
var msg_name = cljs.core.get.call(null,map__38121__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513190778593
