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
}catch (e37661){if((e37661 instanceof Error)){
var e = e37661;
return "Error: Unable to stringify";
} else {
throw e37661;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37664 = arguments.length;
switch (G__37664) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37662_SHARP_){
if(typeof p1__37662_SHARP_ === 'string'){
return p1__37662_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37662_SHARP_);
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
var len__29455__auto___37667 = arguments.length;
var i__29456__auto___37668 = (0);
while(true){
if((i__29456__auto___37668 < len__29455__auto___37667)){
args__29462__auto__.push((arguments[i__29456__auto___37668]));

var G__37669 = (i__29456__auto___37668 + (1));
i__29456__auto___37668 = G__37669;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37666){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37666));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37671 = arguments.length;
var i__29456__auto___37672 = (0);
while(true){
if((i__29456__auto___37672 < len__29455__auto___37671)){
args__29462__auto__.push((arguments[i__29456__auto___37672]));

var G__37673 = (i__29456__auto___37672 + (1));
i__29456__auto___37672 = G__37673;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37670){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37670));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37674){
var map__37675 = p__37674;
var map__37675__$1 = ((((!((map__37675 == null)))?((((map__37675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37675):map__37675);
var message = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33575__auto___37754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___37754,ch){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___37754,ch){
return (function (state_37726){
var state_val_37727 = (state_37726[(1)]);
if((state_val_37727 === (7))){
var inst_37722 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37728_37755 = state_37726__$1;
(statearr_37728_37755[(2)] = inst_37722);

(statearr_37728_37755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (1))){
var state_37726__$1 = state_37726;
var statearr_37729_37756 = state_37726__$1;
(statearr_37729_37756[(2)] = null);

(statearr_37729_37756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (4))){
var inst_37679 = (state_37726[(7)]);
var inst_37679__$1 = (state_37726[(2)]);
var state_37726__$1 = (function (){var statearr_37730 = state_37726;
(statearr_37730[(7)] = inst_37679__$1);

return statearr_37730;
})();
if(cljs.core.truth_(inst_37679__$1)){
var statearr_37731_37757 = state_37726__$1;
(statearr_37731_37757[(1)] = (5));

} else {
var statearr_37732_37758 = state_37726__$1;
(statearr_37732_37758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (15))){
var inst_37686 = (state_37726[(8)]);
var inst_37701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37686);
var inst_37702 = cljs.core.first.call(null,inst_37701);
var inst_37703 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37702);
var inst_37704 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37703)].join('');
var inst_37705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37704);
var state_37726__$1 = state_37726;
var statearr_37733_37759 = state_37726__$1;
(statearr_37733_37759[(2)] = inst_37705);

(statearr_37733_37759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (13))){
var inst_37710 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37734_37760 = state_37726__$1;
(statearr_37734_37760[(2)] = inst_37710);

(statearr_37734_37760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (6))){
var state_37726__$1 = state_37726;
var statearr_37735_37761 = state_37726__$1;
(statearr_37735_37761[(2)] = null);

(statearr_37735_37761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (17))){
var inst_37708 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37736_37762 = state_37726__$1;
(statearr_37736_37762[(2)] = inst_37708);

(statearr_37736_37762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (3))){
var inst_37724 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37726__$1,inst_37724);
} else {
if((state_val_37727 === (12))){
var inst_37685 = (state_37726[(9)]);
var inst_37699 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37685,opts);
var state_37726__$1 = state_37726;
if(cljs.core.truth_(inst_37699)){
var statearr_37737_37763 = state_37726__$1;
(statearr_37737_37763[(1)] = (15));

} else {
var statearr_37738_37764 = state_37726__$1;
(statearr_37738_37764[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (2))){
var state_37726__$1 = state_37726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37726__$1,(4),ch);
} else {
if((state_val_37727 === (11))){
var inst_37686 = (state_37726[(8)]);
var inst_37691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37692 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37686);
var inst_37693 = cljs.core.async.timeout.call(null,(1000));
var inst_37694 = [inst_37692,inst_37693];
var inst_37695 = (new cljs.core.PersistentVector(null,2,(5),inst_37691,inst_37694,null));
var state_37726__$1 = state_37726;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37726__$1,(14),inst_37695);
} else {
if((state_val_37727 === (9))){
var inst_37686 = (state_37726[(8)]);
var inst_37712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37686);
var inst_37714 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37713);
var inst_37715 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37714)].join('');
var inst_37716 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37715);
var state_37726__$1 = (function (){var statearr_37739 = state_37726;
(statearr_37739[(10)] = inst_37712);

return statearr_37739;
})();
var statearr_37740_37765 = state_37726__$1;
(statearr_37740_37765[(2)] = inst_37716);

(statearr_37740_37765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (5))){
var inst_37679 = (state_37726[(7)]);
var inst_37681 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37682 = (new cljs.core.PersistentArrayMap(null,2,inst_37681,null));
var inst_37683 = (new cljs.core.PersistentHashSet(null,inst_37682,null));
var inst_37684 = figwheel.client.focus_msgs.call(null,inst_37683,inst_37679);
var inst_37685 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37684);
var inst_37686 = cljs.core.first.call(null,inst_37684);
var inst_37687 = figwheel.client.autoload_QMARK_.call(null);
var state_37726__$1 = (function (){var statearr_37741 = state_37726;
(statearr_37741[(9)] = inst_37685);

(statearr_37741[(8)] = inst_37686);

return statearr_37741;
})();
if(cljs.core.truth_(inst_37687)){
var statearr_37742_37766 = state_37726__$1;
(statearr_37742_37766[(1)] = (8));

} else {
var statearr_37743_37767 = state_37726__$1;
(statearr_37743_37767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (14))){
var inst_37697 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37744_37768 = state_37726__$1;
(statearr_37744_37768[(2)] = inst_37697);

(statearr_37744_37768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (16))){
var state_37726__$1 = state_37726;
var statearr_37745_37769 = state_37726__$1;
(statearr_37745_37769[(2)] = null);

(statearr_37745_37769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (10))){
var inst_37718 = (state_37726[(2)]);
var state_37726__$1 = (function (){var statearr_37746 = state_37726;
(statearr_37746[(11)] = inst_37718);

return statearr_37746;
})();
var statearr_37747_37770 = state_37726__$1;
(statearr_37747_37770[(2)] = null);

(statearr_37747_37770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (8))){
var inst_37685 = (state_37726[(9)]);
var inst_37689 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37685,opts);
var state_37726__$1 = state_37726;
if(cljs.core.truth_(inst_37689)){
var statearr_37748_37771 = state_37726__$1;
(statearr_37748_37771[(1)] = (11));

} else {
var statearr_37749_37772 = state_37726__$1;
(statearr_37749_37772[(1)] = (12));

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
});})(c__33575__auto___37754,ch))
;
return ((function (switch__33487__auto__,c__33575__auto___37754,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____0 = (function (){
var statearr_37750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37750[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__);

(statearr_37750[(1)] = (1));

return statearr_37750;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____1 = (function (state_37726){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_37726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e37751){if((e37751 instanceof Object)){
var ex__33491__auto__ = e37751;
var statearr_37752_37773 = state_37726;
(statearr_37752_37773[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_37726;
state_37726 = G__37774;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__ = function(state_37726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____1.call(this,state_37726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33488__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___37754,ch))
})();
var state__33577__auto__ = (function (){var statearr_37753 = f__33576__auto__.call(null);
(statearr_37753[(6)] = c__33575__auto___37754);

return statearr_37753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___37754,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37775_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37775_SHARP_));
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
var base_path_37777 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37777){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37776){if((e37776 instanceof Error)){
var e = e37776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37777], null));
} else {
var e = e37776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37777))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37778){
var map__37779 = p__37778;
var map__37779__$1 = ((((!((map__37779 == null)))?((((map__37779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37779):map__37779);
var opts = map__37779__$1;
var build_id = cljs.core.get.call(null,map__37779__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37779,map__37779__$1,opts,build_id){
return (function (p__37781){
var vec__37782 = p__37781;
var seq__37783 = cljs.core.seq.call(null,vec__37782);
var first__37784 = cljs.core.first.call(null,seq__37783);
var seq__37783__$1 = cljs.core.next.call(null,seq__37783);
var map__37785 = first__37784;
var map__37785__$1 = ((((!((map__37785 == null)))?((((map__37785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37785):map__37785);
var msg = map__37785__$1;
var msg_name = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37783__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37782,seq__37783,first__37784,seq__37783__$1,map__37785,map__37785__$1,msg,msg_name,_,map__37779,map__37779__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37782,seq__37783,first__37784,seq__37783__$1,map__37785,map__37785__$1,msg,msg_name,_,map__37779,map__37779__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37779,map__37779__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37787){
var vec__37788 = p__37787;
var seq__37789 = cljs.core.seq.call(null,vec__37788);
var first__37790 = cljs.core.first.call(null,seq__37789);
var seq__37789__$1 = cljs.core.next.call(null,seq__37789);
var map__37791 = first__37790;
var map__37791__$1 = ((((!((map__37791 == null)))?((((map__37791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37791):map__37791);
var msg = map__37791__$1;
var msg_name = cljs.core.get.call(null,map__37791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37789__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37793){
var map__37794 = p__37793;
var map__37794__$1 = ((((!((map__37794 == null)))?((((map__37794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37794):map__37794);
var on_compile_warning = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37794,map__37794__$1,on_compile_warning,on_compile_fail){
return (function (p__37796){
var vec__37797 = p__37796;
var seq__37798 = cljs.core.seq.call(null,vec__37797);
var first__37799 = cljs.core.first.call(null,seq__37798);
var seq__37798__$1 = cljs.core.next.call(null,seq__37798);
var map__37800 = first__37799;
var map__37800__$1 = ((((!((map__37800 == null)))?((((map__37800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37800):map__37800);
var msg = map__37800__$1;
var msg_name = cljs.core.get.call(null,map__37800__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37798__$1;
var pred__37802 = cljs.core._EQ_;
var expr__37803 = msg_name;
if(cljs.core.truth_(pred__37802.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37803))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37802.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37803))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37794,map__37794__$1,on_compile_warning,on_compile_fail))
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__,msg_hist,msg_names,msg){
return (function (state_37892){
var state_val_37893 = (state_37892[(1)]);
if((state_val_37893 === (7))){
var inst_37812 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37812)){
var statearr_37894_37941 = state_37892__$1;
(statearr_37894_37941[(1)] = (8));

} else {
var statearr_37895_37942 = state_37892__$1;
(statearr_37895_37942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (20))){
var inst_37886 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37896_37943 = state_37892__$1;
(statearr_37896_37943[(2)] = inst_37886);

(statearr_37896_37943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (27))){
var inst_37882 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37897_37944 = state_37892__$1;
(statearr_37897_37944[(2)] = inst_37882);

(statearr_37897_37944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (1))){
var inst_37805 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37805)){
var statearr_37898_37945 = state_37892__$1;
(statearr_37898_37945[(1)] = (2));

} else {
var statearr_37899_37946 = state_37892__$1;
(statearr_37899_37946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (24))){
var inst_37884 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37900_37947 = state_37892__$1;
(statearr_37900_37947[(2)] = inst_37884);

(statearr_37900_37947[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (4))){
var inst_37890 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37892__$1,inst_37890);
} else {
if((state_val_37893 === (15))){
var inst_37888 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37901_37948 = state_37892__$1;
(statearr_37901_37948[(2)] = inst_37888);

(statearr_37901_37948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (21))){
var inst_37841 = (state_37892[(2)]);
var inst_37842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37843 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37842);
var state_37892__$1 = (function (){var statearr_37902 = state_37892;
(statearr_37902[(7)] = inst_37841);

return statearr_37902;
})();
var statearr_37903_37949 = state_37892__$1;
(statearr_37903_37949[(2)] = inst_37843);

(statearr_37903_37949[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (31))){
var inst_37871 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37871)){
var statearr_37904_37950 = state_37892__$1;
(statearr_37904_37950[(1)] = (34));

} else {
var statearr_37905_37951 = state_37892__$1;
(statearr_37905_37951[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (32))){
var inst_37880 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37906_37952 = state_37892__$1;
(statearr_37906_37952[(2)] = inst_37880);

(statearr_37906_37952[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (33))){
var inst_37867 = (state_37892[(2)]);
var inst_37868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37869 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37868);
var state_37892__$1 = (function (){var statearr_37907 = state_37892;
(statearr_37907[(8)] = inst_37867);

return statearr_37907;
})();
var statearr_37908_37953 = state_37892__$1;
(statearr_37908_37953[(2)] = inst_37869);

(statearr_37908_37953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (13))){
var inst_37826 = figwheel.client.heads_up.clear.call(null);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(16),inst_37826);
} else {
if((state_val_37893 === (22))){
var inst_37847 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37848 = figwheel.client.heads_up.append_warning_message.call(null,inst_37847);
var state_37892__$1 = state_37892;
var statearr_37909_37954 = state_37892__$1;
(statearr_37909_37954[(2)] = inst_37848);

(statearr_37909_37954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (36))){
var inst_37878 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37910_37955 = state_37892__$1;
(statearr_37910_37955[(2)] = inst_37878);

(statearr_37910_37955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (29))){
var inst_37858 = (state_37892[(2)]);
var inst_37859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37859);
var state_37892__$1 = (function (){var statearr_37911 = state_37892;
(statearr_37911[(9)] = inst_37858);

return statearr_37911;
})();
var statearr_37912_37956 = state_37892__$1;
(statearr_37912_37956[(2)] = inst_37860);

(statearr_37912_37956[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (6))){
var inst_37807 = (state_37892[(10)]);
var state_37892__$1 = state_37892;
var statearr_37913_37957 = state_37892__$1;
(statearr_37913_37957[(2)] = inst_37807);

(statearr_37913_37957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (28))){
var inst_37854 = (state_37892[(2)]);
var inst_37855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37856 = figwheel.client.heads_up.display_warning.call(null,inst_37855);
var state_37892__$1 = (function (){var statearr_37914 = state_37892;
(statearr_37914[(11)] = inst_37854);

return statearr_37914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(29),inst_37856);
} else {
if((state_val_37893 === (25))){
var inst_37852 = figwheel.client.heads_up.clear.call(null);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(28),inst_37852);
} else {
if((state_val_37893 === (34))){
var inst_37873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(37),inst_37873);
} else {
if((state_val_37893 === (17))){
var inst_37832 = (state_37892[(2)]);
var inst_37833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37834 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37833);
var state_37892__$1 = (function (){var statearr_37915 = state_37892;
(statearr_37915[(12)] = inst_37832);

return statearr_37915;
})();
var statearr_37916_37958 = state_37892__$1;
(statearr_37916_37958[(2)] = inst_37834);

(statearr_37916_37958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (3))){
var inst_37824 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37824)){
var statearr_37917_37959 = state_37892__$1;
(statearr_37917_37959[(1)] = (13));

} else {
var statearr_37918_37960 = state_37892__$1;
(statearr_37918_37960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (12))){
var inst_37820 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37919_37961 = state_37892__$1;
(statearr_37919_37961[(2)] = inst_37820);

(statearr_37919_37961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (2))){
var inst_37807 = (state_37892[(10)]);
var inst_37807__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37892__$1 = (function (){var statearr_37920 = state_37892;
(statearr_37920[(10)] = inst_37807__$1);

return statearr_37920;
})();
if(cljs.core.truth_(inst_37807__$1)){
var statearr_37921_37962 = state_37892__$1;
(statearr_37921_37962[(1)] = (5));

} else {
var statearr_37922_37963 = state_37892__$1;
(statearr_37922_37963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (23))){
var inst_37850 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37850)){
var statearr_37923_37964 = state_37892__$1;
(statearr_37923_37964[(1)] = (25));

} else {
var statearr_37924_37965 = state_37892__$1;
(statearr_37924_37965[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (35))){
var state_37892__$1 = state_37892;
var statearr_37925_37966 = state_37892__$1;
(statearr_37925_37966[(2)] = null);

(statearr_37925_37966[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (19))){
var inst_37845 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37845)){
var statearr_37926_37967 = state_37892__$1;
(statearr_37926_37967[(1)] = (22));

} else {
var statearr_37927_37968 = state_37892__$1;
(statearr_37927_37968[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (11))){
var inst_37816 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37928_37969 = state_37892__$1;
(statearr_37928_37969[(2)] = inst_37816);

(statearr_37928_37969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (9))){
var inst_37818 = figwheel.client.heads_up.clear.call(null);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(12),inst_37818);
} else {
if((state_val_37893 === (5))){
var inst_37809 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37892__$1 = state_37892;
var statearr_37929_37970 = state_37892__$1;
(statearr_37929_37970[(2)] = inst_37809);

(statearr_37929_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (14))){
var inst_37836 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37836)){
var statearr_37930_37971 = state_37892__$1;
(statearr_37930_37971[(1)] = (18));

} else {
var statearr_37931_37972 = state_37892__$1;
(statearr_37931_37972[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (26))){
var inst_37862 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37862)){
var statearr_37932_37973 = state_37892__$1;
(statearr_37932_37973[(1)] = (30));

} else {
var statearr_37933_37974 = state_37892__$1;
(statearr_37933_37974[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (16))){
var inst_37828 = (state_37892[(2)]);
var inst_37829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37830 = figwheel.client.heads_up.display_exception.call(null,inst_37829);
var state_37892__$1 = (function (){var statearr_37934 = state_37892;
(statearr_37934[(13)] = inst_37828);

return statearr_37934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(17),inst_37830);
} else {
if((state_val_37893 === (30))){
var inst_37864 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37865 = figwheel.client.heads_up.display_warning.call(null,inst_37864);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(33),inst_37865);
} else {
if((state_val_37893 === (10))){
var inst_37822 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37935_37975 = state_37892__$1;
(statearr_37935_37975[(2)] = inst_37822);

(statearr_37935_37975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (18))){
var inst_37838 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37839 = figwheel.client.heads_up.display_exception.call(null,inst_37838);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(21),inst_37839);
} else {
if((state_val_37893 === (37))){
var inst_37875 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37936_37976 = state_37892__$1;
(statearr_37936_37976[(2)] = inst_37875);

(statearr_37936_37976[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (8))){
var inst_37814 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(11),inst_37814);
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
});})(c__33575__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33487__auto__,c__33575__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____0 = (function (){
var statearr_37937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37937[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__);

(statearr_37937[(1)] = (1));

return statearr_37937;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____1 = (function (state_37892){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_37892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e37938){if((e37938 instanceof Object)){
var ex__33491__auto__ = e37938;
var statearr_37939_37977 = state_37892;
(statearr_37939_37977[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37978 = state_37892;
state_37892 = G__37978;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__ = function(state_37892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____1.call(this,state_37892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__,msg_hist,msg_names,msg))
})();
var state__33577__auto__ = (function (){var statearr_37940 = f__33576__auto__.call(null);
(statearr_37940[(6)] = c__33575__auto__);

return statearr_37940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__,msg_hist,msg_names,msg))
);

return c__33575__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33575__auto___38007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___38007,ch){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___38007,ch){
return (function (state_37993){
var state_val_37994 = (state_37993[(1)]);
if((state_val_37994 === (1))){
var state_37993__$1 = state_37993;
var statearr_37995_38008 = state_37993__$1;
(statearr_37995_38008[(2)] = null);

(statearr_37995_38008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (2))){
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37993__$1,(4),ch);
} else {
if((state_val_37994 === (3))){
var inst_37991 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37993__$1,inst_37991);
} else {
if((state_val_37994 === (4))){
var inst_37981 = (state_37993[(7)]);
var inst_37981__$1 = (state_37993[(2)]);
var state_37993__$1 = (function (){var statearr_37996 = state_37993;
(statearr_37996[(7)] = inst_37981__$1);

return statearr_37996;
})();
if(cljs.core.truth_(inst_37981__$1)){
var statearr_37997_38009 = state_37993__$1;
(statearr_37997_38009[(1)] = (5));

} else {
var statearr_37998_38010 = state_37993__$1;
(statearr_37998_38010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (5))){
var inst_37981 = (state_37993[(7)]);
var inst_37983 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37981);
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37993__$1,(8),inst_37983);
} else {
if((state_val_37994 === (6))){
var state_37993__$1 = state_37993;
var statearr_37999_38011 = state_37993__$1;
(statearr_37999_38011[(2)] = null);

(statearr_37999_38011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (7))){
var inst_37989 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
var statearr_38000_38012 = state_37993__$1;
(statearr_38000_38012[(2)] = inst_37989);

(statearr_38000_38012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (8))){
var inst_37985 = (state_37993[(2)]);
var state_37993__$1 = (function (){var statearr_38001 = state_37993;
(statearr_38001[(8)] = inst_37985);

return statearr_38001;
})();
var statearr_38002_38013 = state_37993__$1;
(statearr_38002_38013[(2)] = null);

(statearr_38002_38013[(1)] = (2));


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
});})(c__33575__auto___38007,ch))
;
return ((function (switch__33487__auto__,c__33575__auto___38007,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33488__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33488__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null,null,null];
(statearr_38003[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33488__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var figwheel$client$heads_up_plugin_$_state_machine__33488__auto____1 = (function (state_37993){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_37993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__33491__auto__ = e38004;
var statearr_38005_38014 = state_37993;
(statearr_38005_38014[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38015 = state_37993;
state_37993 = G__38015;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33488__auto__ = function(state_37993){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33488__auto____1.call(this,state_37993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33488__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33488__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___38007,ch))
})();
var state__33577__auto__ = (function (){var statearr_38006 = f__33576__auto__.call(null);
(statearr_38006[(6)] = c__33575__auto___38007);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___38007,ch))
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_38021){
var state_val_38022 = (state_38021[(1)]);
if((state_val_38022 === (1))){
var inst_38016 = cljs.core.async.timeout.call(null,(3000));
var state_38021__$1 = state_38021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38021__$1,(2),inst_38016);
} else {
if((state_val_38022 === (2))){
var inst_38018 = (state_38021[(2)]);
var inst_38019 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38021__$1 = (function (){var statearr_38023 = state_38021;
(statearr_38023[(7)] = inst_38018);

return statearr_38023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38021__$1,inst_38019);
} else {
return null;
}
}
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____0 = (function (){
var statearr_38024 = [null,null,null,null,null,null,null,null];
(statearr_38024[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__);

(statearr_38024[(1)] = (1));

return statearr_38024;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____1 = (function (state_38021){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_38021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e38025){if((e38025 instanceof Object)){
var ex__33491__auto__ = e38025;
var statearr_38026_38028 = state_38021;
(statearr_38026_38028[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_38021;
state_38021 = G__38029;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__ = function(state_38021){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____1.call(this,state_38021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33488__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_38027 = f__33576__auto__.call(null);
(statearr_38027[(6)] = c__33575__auto__);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38036){
var state_val_38037 = (state_38036[(1)]);
if((state_val_38037 === (1))){
var inst_38030 = cljs.core.async.timeout.call(null,(2000));
var state_38036__$1 = state_38036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38036__$1,(2),inst_38030);
} else {
if((state_val_38037 === (2))){
var inst_38032 = (state_38036[(2)]);
var inst_38033 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38034 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38033);
var state_38036__$1 = (function (){var statearr_38038 = state_38036;
(statearr_38038[(7)] = inst_38032);

return statearr_38038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38036__$1,inst_38034);
} else {
return null;
}
}
});})(c__33575__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____0 = (function (){
var statearr_38039 = [null,null,null,null,null,null,null,null];
(statearr_38039[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__);

(statearr_38039[(1)] = (1));

return statearr_38039;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____1 = (function (state_38036){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_38036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e38040){if((e38040 instanceof Object)){
var ex__33491__auto__ = e38040;
var statearr_38041_38043 = state_38036;
(statearr_38041_38043[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38044 = state_38036;
state_38036 = G__38044;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__ = function(state_38036){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____1.call(this,state_38036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33577__auto__ = (function (){var statearr_38042 = f__33576__auto__.call(null);
(statearr_38042[(6)] = c__33575__auto__);

return statearr_38042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__,figwheel_version,temp__4657__auto__))
);

return c__33575__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38045){
var map__38046 = p__38045;
var map__38046__$1 = ((((!((map__38046 == null)))?((((map__38046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38046):map__38046);
var file = cljs.core.get.call(null,map__38046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38046__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38046__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38048 = "";
var G__38048__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38048),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38048);
var G__38048__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38048__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38048__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38048__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38048__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38049){
var map__38050 = p__38049;
var map__38050__$1 = ((((!((map__38050 == null)))?((((map__38050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38050):map__38050);
var ed = map__38050__$1;
var formatted_exception = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38052_38056 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38053_38057 = null;
var count__38054_38058 = (0);
var i__38055_38059 = (0);
while(true){
if((i__38055_38059 < count__38054_38058)){
var msg_38060 = cljs.core._nth.call(null,chunk__38053_38057,i__38055_38059);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38060);

var G__38061 = seq__38052_38056;
var G__38062 = chunk__38053_38057;
var G__38063 = count__38054_38058;
var G__38064 = (i__38055_38059 + (1));
seq__38052_38056 = G__38061;
chunk__38053_38057 = G__38062;
count__38054_38058 = G__38063;
i__38055_38059 = G__38064;
continue;
} else {
var temp__4657__auto___38065 = cljs.core.seq.call(null,seq__38052_38056);
if(temp__4657__auto___38065){
var seq__38052_38066__$1 = temp__4657__auto___38065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38052_38066__$1)){
var c__29125__auto___38067 = cljs.core.chunk_first.call(null,seq__38052_38066__$1);
var G__38068 = cljs.core.chunk_rest.call(null,seq__38052_38066__$1);
var G__38069 = c__29125__auto___38067;
var G__38070 = cljs.core.count.call(null,c__29125__auto___38067);
var G__38071 = (0);
seq__38052_38056 = G__38068;
chunk__38053_38057 = G__38069;
count__38054_38058 = G__38070;
i__38055_38059 = G__38071;
continue;
} else {
var msg_38072 = cljs.core.first.call(null,seq__38052_38066__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38072);

var G__38073 = cljs.core.next.call(null,seq__38052_38066__$1);
var G__38074 = null;
var G__38075 = (0);
var G__38076 = (0);
seq__38052_38056 = G__38073;
chunk__38053_38057 = G__38074;
count__38054_38058 = G__38075;
i__38055_38059 = G__38076;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38077){
var map__38078 = p__38077;
var map__38078__$1 = ((((!((map__38078 == null)))?((((map__38078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38078):map__38078);
var w = map__38078__$1;
var message = cljs.core.get.call(null,map__38078__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38080 = cljs.core.seq.call(null,plugins);
var chunk__38081 = null;
var count__38082 = (0);
var i__38083 = (0);
while(true){
if((i__38083 < count__38082)){
var vec__38084 = cljs.core._nth.call(null,chunk__38081,i__38083);
var k = cljs.core.nth.call(null,vec__38084,(0),null);
var plugin = cljs.core.nth.call(null,vec__38084,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38090 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38080,chunk__38081,count__38082,i__38083,pl_38090,vec__38084,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38090.call(null,msg_hist);
});})(seq__38080,chunk__38081,count__38082,i__38083,pl_38090,vec__38084,k,plugin))
);
} else {
}

var G__38091 = seq__38080;
var G__38092 = chunk__38081;
var G__38093 = count__38082;
var G__38094 = (i__38083 + (1));
seq__38080 = G__38091;
chunk__38081 = G__38092;
count__38082 = G__38093;
i__38083 = G__38094;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38080);
if(temp__4657__auto__){
var seq__38080__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38080__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__38080__$1);
var G__38095 = cljs.core.chunk_rest.call(null,seq__38080__$1);
var G__38096 = c__29125__auto__;
var G__38097 = cljs.core.count.call(null,c__29125__auto__);
var G__38098 = (0);
seq__38080 = G__38095;
chunk__38081 = G__38096;
count__38082 = G__38097;
i__38083 = G__38098;
continue;
} else {
var vec__38087 = cljs.core.first.call(null,seq__38080__$1);
var k = cljs.core.nth.call(null,vec__38087,(0),null);
var plugin = cljs.core.nth.call(null,vec__38087,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38099 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38080,chunk__38081,count__38082,i__38083,pl_38099,vec__38087,k,plugin,seq__38080__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38099.call(null,msg_hist);
});})(seq__38080,chunk__38081,count__38082,i__38083,pl_38099,vec__38087,k,plugin,seq__38080__$1,temp__4657__auto__))
);
} else {
}

var G__38100 = cljs.core.next.call(null,seq__38080__$1);
var G__38101 = null;
var G__38102 = (0);
var G__38103 = (0);
seq__38080 = G__38100;
chunk__38081 = G__38101;
count__38082 = G__38102;
i__38083 = G__38103;
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
var G__38105 = arguments.length;
switch (G__38105) {
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

var seq__38106_38111 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38107_38112 = null;
var count__38108_38113 = (0);
var i__38109_38114 = (0);
while(true){
if((i__38109_38114 < count__38108_38113)){
var msg_38115 = cljs.core._nth.call(null,chunk__38107_38112,i__38109_38114);
figwheel.client.socket.handle_incoming_message.call(null,msg_38115);

var G__38116 = seq__38106_38111;
var G__38117 = chunk__38107_38112;
var G__38118 = count__38108_38113;
var G__38119 = (i__38109_38114 + (1));
seq__38106_38111 = G__38116;
chunk__38107_38112 = G__38117;
count__38108_38113 = G__38118;
i__38109_38114 = G__38119;
continue;
} else {
var temp__4657__auto___38120 = cljs.core.seq.call(null,seq__38106_38111);
if(temp__4657__auto___38120){
var seq__38106_38121__$1 = temp__4657__auto___38120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38106_38121__$1)){
var c__29125__auto___38122 = cljs.core.chunk_first.call(null,seq__38106_38121__$1);
var G__38123 = cljs.core.chunk_rest.call(null,seq__38106_38121__$1);
var G__38124 = c__29125__auto___38122;
var G__38125 = cljs.core.count.call(null,c__29125__auto___38122);
var G__38126 = (0);
seq__38106_38111 = G__38123;
chunk__38107_38112 = G__38124;
count__38108_38113 = G__38125;
i__38109_38114 = G__38126;
continue;
} else {
var msg_38127 = cljs.core.first.call(null,seq__38106_38121__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38127);

var G__38128 = cljs.core.next.call(null,seq__38106_38121__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__38106_38111 = G__38128;
chunk__38107_38112 = G__38129;
count__38108_38113 = G__38130;
i__38109_38114 = G__38131;
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
var len__29455__auto___38136 = arguments.length;
var i__29456__auto___38137 = (0);
while(true){
if((i__29456__auto___38137 < len__29455__auto___38136)){
args__29462__auto__.push((arguments[i__29456__auto___38137]));

var G__38138 = (i__29456__auto___38137 + (1));
i__29456__auto___38137 = G__38138;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38133){
var map__38134 = p__38133;
var map__38134__$1 = ((((!((map__38134 == null)))?((((map__38134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38134):map__38134);
var opts = map__38134__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38132){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38132));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38139){if((e38139 instanceof Error)){
var e = e38139;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38139;

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
return (function (p__38140){
var map__38141 = p__38140;
var map__38141__$1 = ((((!((map__38141 == null)))?((((map__38141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38141):map__38141);
var msg_name = cljs.core.get.call(null,map__38141__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513400451498
