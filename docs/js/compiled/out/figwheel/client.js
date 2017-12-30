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
}catch (e38036){if((e38036 instanceof Error)){
var e = e38036;
return "Error: Unable to stringify";
} else {
throw e38036;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38039 = arguments.length;
switch (G__38039) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38037_SHARP_){
if(typeof p1__38037_SHARP_ === 'string'){
return p1__38037_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38037_SHARP_);
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
var args__28372__auto__ = [];
var len__28365__auto___38042 = arguments.length;
var i__28366__auto___38043 = (0);
while(true){
if((i__28366__auto___38043 < len__28365__auto___38042)){
args__28372__auto__.push((arguments[i__28366__auto___38043]));

var G__38044 = (i__28366__auto___38043 + (1));
i__28366__auto___38043 = G__38044;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38041){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38041));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28372__auto__ = [];
var len__28365__auto___38046 = arguments.length;
var i__28366__auto___38047 = (0);
while(true){
if((i__28366__auto___38047 < len__28365__auto___38046)){
args__28372__auto__.push((arguments[i__28366__auto___38047]));

var G__38048 = (i__28366__auto___38047 + (1));
i__28366__auto___38047 = G__38048;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38045){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38045));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38049){
var map__38050 = p__38049;
var map__38050__$1 = ((((!((map__38050 == null)))?((((map__38050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38050):map__38050);
var message = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38050__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27196__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27184__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27184__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27184__auto__;
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
var c__30625__auto___38129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___38129,ch){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___38129,ch){
return (function (state_38101){
var state_val_38102 = (state_38101[(1)]);
if((state_val_38102 === (7))){
var inst_38097 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38103_38130 = state_38101__$1;
(statearr_38103_38130[(2)] = inst_38097);

(statearr_38103_38130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (1))){
var state_38101__$1 = state_38101;
var statearr_38104_38131 = state_38101__$1;
(statearr_38104_38131[(2)] = null);

(statearr_38104_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (4))){
var inst_38054 = (state_38101[(7)]);
var inst_38054__$1 = (state_38101[(2)]);
var state_38101__$1 = (function (){var statearr_38105 = state_38101;
(statearr_38105[(7)] = inst_38054__$1);

return statearr_38105;
})();
if(cljs.core.truth_(inst_38054__$1)){
var statearr_38106_38132 = state_38101__$1;
(statearr_38106_38132[(1)] = (5));

} else {
var statearr_38107_38133 = state_38101__$1;
(statearr_38107_38133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (15))){
var inst_38061 = (state_38101[(8)]);
var inst_38076 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38061);
var inst_38077 = cljs.core.first.call(null,inst_38076);
var inst_38078 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38077);
var inst_38079 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38078)].join('');
var inst_38080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38079);
var state_38101__$1 = state_38101;
var statearr_38108_38134 = state_38101__$1;
(statearr_38108_38134[(2)] = inst_38080);

(statearr_38108_38134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (13))){
var inst_38085 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38109_38135 = state_38101__$1;
(statearr_38109_38135[(2)] = inst_38085);

(statearr_38109_38135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (6))){
var state_38101__$1 = state_38101;
var statearr_38110_38136 = state_38101__$1;
(statearr_38110_38136[(2)] = null);

(statearr_38110_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (17))){
var inst_38083 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38111_38137 = state_38101__$1;
(statearr_38111_38137[(2)] = inst_38083);

(statearr_38111_38137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (3))){
var inst_38099 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38101__$1,inst_38099);
} else {
if((state_val_38102 === (12))){
var inst_38060 = (state_38101[(9)]);
var inst_38074 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38060,opts);
var state_38101__$1 = state_38101;
if(cljs.core.truth_(inst_38074)){
var statearr_38112_38138 = state_38101__$1;
(statearr_38112_38138[(1)] = (15));

} else {
var statearr_38113_38139 = state_38101__$1;
(statearr_38113_38139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (2))){
var state_38101__$1 = state_38101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38101__$1,(4),ch);
} else {
if((state_val_38102 === (11))){
var inst_38061 = (state_38101[(8)]);
var inst_38066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38067 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38061);
var inst_38068 = cljs.core.async.timeout.call(null,(1000));
var inst_38069 = [inst_38067,inst_38068];
var inst_38070 = (new cljs.core.PersistentVector(null,2,(5),inst_38066,inst_38069,null));
var state_38101__$1 = state_38101;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38101__$1,(14),inst_38070);
} else {
if((state_val_38102 === (9))){
var inst_38061 = (state_38101[(8)]);
var inst_38087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38061);
var inst_38089 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38088);
var inst_38090 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38089)].join('');
var inst_38091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38090);
var state_38101__$1 = (function (){var statearr_38114 = state_38101;
(statearr_38114[(10)] = inst_38087);

return statearr_38114;
})();
var statearr_38115_38140 = state_38101__$1;
(statearr_38115_38140[(2)] = inst_38091);

(statearr_38115_38140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (5))){
var inst_38054 = (state_38101[(7)]);
var inst_38056 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38057 = (new cljs.core.PersistentArrayMap(null,2,inst_38056,null));
var inst_38058 = (new cljs.core.PersistentHashSet(null,inst_38057,null));
var inst_38059 = figwheel.client.focus_msgs.call(null,inst_38058,inst_38054);
var inst_38060 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38059);
var inst_38061 = cljs.core.first.call(null,inst_38059);
var inst_38062 = figwheel.client.autoload_QMARK_.call(null);
var state_38101__$1 = (function (){var statearr_38116 = state_38101;
(statearr_38116[(9)] = inst_38060);

(statearr_38116[(8)] = inst_38061);

return statearr_38116;
})();
if(cljs.core.truth_(inst_38062)){
var statearr_38117_38141 = state_38101__$1;
(statearr_38117_38141[(1)] = (8));

} else {
var statearr_38118_38142 = state_38101__$1;
(statearr_38118_38142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (14))){
var inst_38072 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38119_38143 = state_38101__$1;
(statearr_38119_38143[(2)] = inst_38072);

(statearr_38119_38143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (16))){
var state_38101__$1 = state_38101;
var statearr_38120_38144 = state_38101__$1;
(statearr_38120_38144[(2)] = null);

(statearr_38120_38144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (10))){
var inst_38093 = (state_38101[(2)]);
var state_38101__$1 = (function (){var statearr_38121 = state_38101;
(statearr_38121[(11)] = inst_38093);

return statearr_38121;
})();
var statearr_38122_38145 = state_38101__$1;
(statearr_38122_38145[(2)] = null);

(statearr_38122_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (8))){
var inst_38060 = (state_38101[(9)]);
var inst_38064 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38060,opts);
var state_38101__$1 = state_38101;
if(cljs.core.truth_(inst_38064)){
var statearr_38123_38146 = state_38101__$1;
(statearr_38123_38146[(1)] = (11));

} else {
var statearr_38124_38147 = state_38101__$1;
(statearr_38124_38147[(1)] = (12));

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
});})(c__30625__auto___38129,ch))
;
return ((function (switch__30537__auto__,c__30625__auto___38129,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38125[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__);

(statearr_38125[(1)] = (1));

return statearr_38125;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1 = (function (state_38101){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38126){if((e38126 instanceof Object)){
var ex__30541__auto__ = e38126;
var statearr_38127_38148 = state_38101;
(statearr_38127_38148[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38149 = state_38101;
state_38101 = G__38149;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__ = function(state_38101){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1.call(this,state_38101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___38129,ch))
})();
var state__30627__auto__ = (function (){var statearr_38128 = f__30626__auto__.call(null);
(statearr_38128[(6)] = c__30625__auto___38129);

return statearr_38128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___38129,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38150_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38150_SHARP_));
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
var base_path_38152 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38152){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38151){if((e38151 instanceof Error)){
var e = e38151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38152], null));
} else {
var e = e38151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38152))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38153){
var map__38154 = p__38153;
var map__38154__$1 = ((((!((map__38154 == null)))?((((map__38154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38154):map__38154);
var opts = map__38154__$1;
var build_id = cljs.core.get.call(null,map__38154__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38154,map__38154__$1,opts,build_id){
return (function (p__38156){
var vec__38157 = p__38156;
var seq__38158 = cljs.core.seq.call(null,vec__38157);
var first__38159 = cljs.core.first.call(null,seq__38158);
var seq__38158__$1 = cljs.core.next.call(null,seq__38158);
var map__38160 = first__38159;
var map__38160__$1 = ((((!((map__38160 == null)))?((((map__38160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38160):map__38160);
var msg = map__38160__$1;
var msg_name = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38158__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38157,seq__38158,first__38159,seq__38158__$1,map__38160,map__38160__$1,msg,msg_name,_,map__38154,map__38154__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38157,seq__38158,first__38159,seq__38158__$1,map__38160,map__38160__$1,msg,msg_name,_,map__38154,map__38154__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38154,map__38154__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38162){
var vec__38163 = p__38162;
var seq__38164 = cljs.core.seq.call(null,vec__38163);
var first__38165 = cljs.core.first.call(null,seq__38164);
var seq__38164__$1 = cljs.core.next.call(null,seq__38164);
var map__38166 = first__38165;
var map__38166__$1 = ((((!((map__38166 == null)))?((((map__38166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38166):map__38166);
var msg = map__38166__$1;
var msg_name = cljs.core.get.call(null,map__38166__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38164__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38168){
var map__38169 = p__38168;
var map__38169__$1 = ((((!((map__38169 == null)))?((((map__38169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38169):map__38169);
var on_compile_warning = cljs.core.get.call(null,map__38169__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38169__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38169,map__38169__$1,on_compile_warning,on_compile_fail){
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
var pred__38177 = cljs.core._EQ_;
var expr__38178 = msg_name;
if(cljs.core.truth_(pred__38177.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38178))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38177.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38178))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38169,map__38169__$1,on_compile_warning,on_compile_fail))
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,msg_hist,msg_names,msg){
return (function (state_38267){
var state_val_38268 = (state_38267[(1)]);
if((state_val_38268 === (7))){
var inst_38187 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38187)){
var statearr_38269_38316 = state_38267__$1;
(statearr_38269_38316[(1)] = (8));

} else {
var statearr_38270_38317 = state_38267__$1;
(statearr_38270_38317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (20))){
var inst_38261 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38271_38318 = state_38267__$1;
(statearr_38271_38318[(2)] = inst_38261);

(statearr_38271_38318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (27))){
var inst_38257 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38272_38319 = state_38267__$1;
(statearr_38272_38319[(2)] = inst_38257);

(statearr_38272_38319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (1))){
var inst_38180 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38180)){
var statearr_38273_38320 = state_38267__$1;
(statearr_38273_38320[(1)] = (2));

} else {
var statearr_38274_38321 = state_38267__$1;
(statearr_38274_38321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (24))){
var inst_38259 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38275_38322 = state_38267__$1;
(statearr_38275_38322[(2)] = inst_38259);

(statearr_38275_38322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (4))){
var inst_38265 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38267__$1,inst_38265);
} else {
if((state_val_38268 === (15))){
var inst_38263 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38276_38323 = state_38267__$1;
(statearr_38276_38323[(2)] = inst_38263);

(statearr_38276_38323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (21))){
var inst_38216 = (state_38267[(2)]);
var inst_38217 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38218 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38217);
var state_38267__$1 = (function (){var statearr_38277 = state_38267;
(statearr_38277[(7)] = inst_38216);

return statearr_38277;
})();
var statearr_38278_38324 = state_38267__$1;
(statearr_38278_38324[(2)] = inst_38218);

(statearr_38278_38324[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (31))){
var inst_38246 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38246)){
var statearr_38279_38325 = state_38267__$1;
(statearr_38279_38325[(1)] = (34));

} else {
var statearr_38280_38326 = state_38267__$1;
(statearr_38280_38326[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (32))){
var inst_38255 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38281_38327 = state_38267__$1;
(statearr_38281_38327[(2)] = inst_38255);

(statearr_38281_38327[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (33))){
var inst_38242 = (state_38267[(2)]);
var inst_38243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38244 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38243);
var state_38267__$1 = (function (){var statearr_38282 = state_38267;
(statearr_38282[(8)] = inst_38242);

return statearr_38282;
})();
var statearr_38283_38328 = state_38267__$1;
(statearr_38283_38328[(2)] = inst_38244);

(statearr_38283_38328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (13))){
var inst_38201 = figwheel.client.heads_up.clear.call(null);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(16),inst_38201);
} else {
if((state_val_38268 === (22))){
var inst_38222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38223 = figwheel.client.heads_up.append_warning_message.call(null,inst_38222);
var state_38267__$1 = state_38267;
var statearr_38284_38329 = state_38267__$1;
(statearr_38284_38329[(2)] = inst_38223);

(statearr_38284_38329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (36))){
var inst_38253 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38285_38330 = state_38267__$1;
(statearr_38285_38330[(2)] = inst_38253);

(statearr_38285_38330[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (29))){
var inst_38233 = (state_38267[(2)]);
var inst_38234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38235 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38234);
var state_38267__$1 = (function (){var statearr_38286 = state_38267;
(statearr_38286[(9)] = inst_38233);

return statearr_38286;
})();
var statearr_38287_38331 = state_38267__$1;
(statearr_38287_38331[(2)] = inst_38235);

(statearr_38287_38331[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (6))){
var inst_38182 = (state_38267[(10)]);
var state_38267__$1 = state_38267;
var statearr_38288_38332 = state_38267__$1;
(statearr_38288_38332[(2)] = inst_38182);

(statearr_38288_38332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (28))){
var inst_38229 = (state_38267[(2)]);
var inst_38230 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38231 = figwheel.client.heads_up.display_warning.call(null,inst_38230);
var state_38267__$1 = (function (){var statearr_38289 = state_38267;
(statearr_38289[(11)] = inst_38229);

return statearr_38289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(29),inst_38231);
} else {
if((state_val_38268 === (25))){
var inst_38227 = figwheel.client.heads_up.clear.call(null);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(28),inst_38227);
} else {
if((state_val_38268 === (34))){
var inst_38248 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(37),inst_38248);
} else {
if((state_val_38268 === (17))){
var inst_38207 = (state_38267[(2)]);
var inst_38208 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38209 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38208);
var state_38267__$1 = (function (){var statearr_38290 = state_38267;
(statearr_38290[(12)] = inst_38207);

return statearr_38290;
})();
var statearr_38291_38333 = state_38267__$1;
(statearr_38291_38333[(2)] = inst_38209);

(statearr_38291_38333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (3))){
var inst_38199 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38199)){
var statearr_38292_38334 = state_38267__$1;
(statearr_38292_38334[(1)] = (13));

} else {
var statearr_38293_38335 = state_38267__$1;
(statearr_38293_38335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (12))){
var inst_38195 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38294_38336 = state_38267__$1;
(statearr_38294_38336[(2)] = inst_38195);

(statearr_38294_38336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (2))){
var inst_38182 = (state_38267[(10)]);
var inst_38182__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38267__$1 = (function (){var statearr_38295 = state_38267;
(statearr_38295[(10)] = inst_38182__$1);

return statearr_38295;
})();
if(cljs.core.truth_(inst_38182__$1)){
var statearr_38296_38337 = state_38267__$1;
(statearr_38296_38337[(1)] = (5));

} else {
var statearr_38297_38338 = state_38267__$1;
(statearr_38297_38338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (23))){
var inst_38225 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38225)){
var statearr_38298_38339 = state_38267__$1;
(statearr_38298_38339[(1)] = (25));

} else {
var statearr_38299_38340 = state_38267__$1;
(statearr_38299_38340[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (35))){
var state_38267__$1 = state_38267;
var statearr_38300_38341 = state_38267__$1;
(statearr_38300_38341[(2)] = null);

(statearr_38300_38341[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (19))){
var inst_38220 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38220)){
var statearr_38301_38342 = state_38267__$1;
(statearr_38301_38342[(1)] = (22));

} else {
var statearr_38302_38343 = state_38267__$1;
(statearr_38302_38343[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (11))){
var inst_38191 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38303_38344 = state_38267__$1;
(statearr_38303_38344[(2)] = inst_38191);

(statearr_38303_38344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (9))){
var inst_38193 = figwheel.client.heads_up.clear.call(null);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(12),inst_38193);
} else {
if((state_val_38268 === (5))){
var inst_38184 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38267__$1 = state_38267;
var statearr_38304_38345 = state_38267__$1;
(statearr_38304_38345[(2)] = inst_38184);

(statearr_38304_38345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (14))){
var inst_38211 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38211)){
var statearr_38305_38346 = state_38267__$1;
(statearr_38305_38346[(1)] = (18));

} else {
var statearr_38306_38347 = state_38267__$1;
(statearr_38306_38347[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (26))){
var inst_38237 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38237)){
var statearr_38307_38348 = state_38267__$1;
(statearr_38307_38348[(1)] = (30));

} else {
var statearr_38308_38349 = state_38267__$1;
(statearr_38308_38349[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (16))){
var inst_38203 = (state_38267[(2)]);
var inst_38204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38205 = figwheel.client.heads_up.display_exception.call(null,inst_38204);
var state_38267__$1 = (function (){var statearr_38309 = state_38267;
(statearr_38309[(13)] = inst_38203);

return statearr_38309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(17),inst_38205);
} else {
if((state_val_38268 === (30))){
var inst_38239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38240 = figwheel.client.heads_up.display_warning.call(null,inst_38239);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(33),inst_38240);
} else {
if((state_val_38268 === (10))){
var inst_38197 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38310_38350 = state_38267__$1;
(statearr_38310_38350[(2)] = inst_38197);

(statearr_38310_38350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (18))){
var inst_38213 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38214 = figwheel.client.heads_up.display_exception.call(null,inst_38213);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(21),inst_38214);
} else {
if((state_val_38268 === (37))){
var inst_38250 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38311_38351 = state_38267__$1;
(statearr_38311_38351[(2)] = inst_38250);

(statearr_38311_38351[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (8))){
var inst_38189 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(11),inst_38189);
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
});})(c__30625__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30537__auto__,c__30625__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____0 = (function (){
var statearr_38312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38312[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__);

(statearr_38312[(1)] = (1));

return statearr_38312;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1 = (function (state_38267){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38313){if((e38313 instanceof Object)){
var ex__30541__auto__ = e38313;
var statearr_38314_38352 = state_38267;
(statearr_38314_38352[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38353 = state_38267;
state_38267 = G__38353;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__ = function(state_38267){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1.call(this,state_38267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,msg_hist,msg_names,msg))
})();
var state__30627__auto__ = (function (){var statearr_38315 = f__30626__auto__.call(null);
(statearr_38315[(6)] = c__30625__auto__);

return statearr_38315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,msg_hist,msg_names,msg))
);

return c__30625__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30625__auto___38382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___38382,ch){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___38382,ch){
return (function (state_38368){
var state_val_38369 = (state_38368[(1)]);
if((state_val_38369 === (1))){
var state_38368__$1 = state_38368;
var statearr_38370_38383 = state_38368__$1;
(statearr_38370_38383[(2)] = null);

(statearr_38370_38383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38369 === (2))){
var state_38368__$1 = state_38368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38368__$1,(4),ch);
} else {
if((state_val_38369 === (3))){
var inst_38366 = (state_38368[(2)]);
var state_38368__$1 = state_38368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38368__$1,inst_38366);
} else {
if((state_val_38369 === (4))){
var inst_38356 = (state_38368[(7)]);
var inst_38356__$1 = (state_38368[(2)]);
var state_38368__$1 = (function (){var statearr_38371 = state_38368;
(statearr_38371[(7)] = inst_38356__$1);

return statearr_38371;
})();
if(cljs.core.truth_(inst_38356__$1)){
var statearr_38372_38384 = state_38368__$1;
(statearr_38372_38384[(1)] = (5));

} else {
var statearr_38373_38385 = state_38368__$1;
(statearr_38373_38385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38369 === (5))){
var inst_38356 = (state_38368[(7)]);
var inst_38358 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38356);
var state_38368__$1 = state_38368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38368__$1,(8),inst_38358);
} else {
if((state_val_38369 === (6))){
var state_38368__$1 = state_38368;
var statearr_38374_38386 = state_38368__$1;
(statearr_38374_38386[(2)] = null);

(statearr_38374_38386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38369 === (7))){
var inst_38364 = (state_38368[(2)]);
var state_38368__$1 = state_38368;
var statearr_38375_38387 = state_38368__$1;
(statearr_38375_38387[(2)] = inst_38364);

(statearr_38375_38387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38369 === (8))){
var inst_38360 = (state_38368[(2)]);
var state_38368__$1 = (function (){var statearr_38376 = state_38368;
(statearr_38376[(8)] = inst_38360);

return statearr_38376;
})();
var statearr_38377_38388 = state_38368__$1;
(statearr_38377_38388[(2)] = null);

(statearr_38377_38388[(1)] = (2));


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
});})(c__30625__auto___38382,ch))
;
return ((function (switch__30537__auto__,c__30625__auto___38382,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38378 = [null,null,null,null,null,null,null,null,null];
(statearr_38378[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30538__auto__);

(statearr_38378[(1)] = (1));

return statearr_38378;
});
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1 = (function (state_38368){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38379){if((e38379 instanceof Object)){
var ex__30541__auto__ = e38379;
var statearr_38380_38389 = state_38368;
(statearr_38380_38389[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38390 = state_38368;
state_38368 = G__38390;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__ = function(state_38368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1.call(this,state_38368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___38382,ch))
})();
var state__30627__auto__ = (function (){var statearr_38381 = f__30626__auto__.call(null);
(statearr_38381[(6)] = c__30625__auto___38382);

return statearr_38381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___38382,ch))
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_38396){
var state_val_38397 = (state_38396[(1)]);
if((state_val_38397 === (1))){
var inst_38391 = cljs.core.async.timeout.call(null,(3000));
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(2),inst_38391);
} else {
if((state_val_38397 === (2))){
var inst_38393 = (state_38396[(2)]);
var inst_38394 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38396__$1 = (function (){var statearr_38398 = state_38396;
(statearr_38398[(7)] = inst_38393);

return statearr_38398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38396__$1,inst_38394);
} else {
return null;
}
}
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38399 = [null,null,null,null,null,null,null,null];
(statearr_38399[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__);

(statearr_38399[(1)] = (1));

return statearr_38399;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1 = (function (state_38396){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38400){if((e38400 instanceof Object)){
var ex__30541__auto__ = e38400;
var statearr_38401_38403 = state_38396;
(statearr_38401_38403[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38404 = state_38396;
state_38396 = G__38404;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__ = function(state_38396){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1.call(this,state_38396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38402 = f__30626__auto__.call(null);
(statearr_38402[(6)] = c__30625__auto__);

return statearr_38402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38411){
var state_val_38412 = (state_38411[(1)]);
if((state_val_38412 === (1))){
var inst_38405 = cljs.core.async.timeout.call(null,(2000));
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38411__$1,(2),inst_38405);
} else {
if((state_val_38412 === (2))){
var inst_38407 = (state_38411[(2)]);
var inst_38408 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38409 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38408);
var state_38411__$1 = (function (){var statearr_38413 = state_38411;
(statearr_38413[(7)] = inst_38407);

return statearr_38413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38411__$1,inst_38409);
} else {
return null;
}
}
});})(c__30625__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38414 = [null,null,null,null,null,null,null,null];
(statearr_38414[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__);

(statearr_38414[(1)] = (1));

return statearr_38414;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1 = (function (state_38411){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38415){if((e38415 instanceof Object)){
var ex__30541__auto__ = e38415;
var statearr_38416_38418 = state_38411;
(statearr_38416_38418[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38419 = state_38411;
state_38411 = G__38419;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__ = function(state_38411){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1.call(this,state_38411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38417 = f__30626__auto__.call(null);
(statearr_38417[(6)] = c__30625__auto__);

return statearr_38417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,figwheel_version,temp__4657__auto__))
);

return c__30625__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38420){
var map__38421 = p__38420;
var map__38421__$1 = ((((!((map__38421 == null)))?((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38421):map__38421);
var file = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38423 = "";
var G__38423__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38423),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38423);
var G__38423__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38423__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38423__$1);
if(cljs.core.truth_((function (){var and__27184__auto__ = line;
if(cljs.core.truth_(and__27184__auto__)){
return column;
} else {
return and__27184__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38423__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38423__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38424){
var map__38425 = p__38424;
var map__38425__$1 = ((((!((map__38425 == null)))?((((map__38425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38425):map__38425);
var ed = map__38425__$1;
var formatted_exception = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38427_38431 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38428_38432 = null;
var count__38429_38433 = (0);
var i__38430_38434 = (0);
while(true){
if((i__38430_38434 < count__38429_38433)){
var msg_38435 = cljs.core._nth.call(null,chunk__38428_38432,i__38430_38434);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38435);

var G__38436 = seq__38427_38431;
var G__38437 = chunk__38428_38432;
var G__38438 = count__38429_38433;
var G__38439 = (i__38430_38434 + (1));
seq__38427_38431 = G__38436;
chunk__38428_38432 = G__38437;
count__38429_38433 = G__38438;
i__38430_38434 = G__38439;
continue;
} else {
var temp__4657__auto___38440 = cljs.core.seq.call(null,seq__38427_38431);
if(temp__4657__auto___38440){
var seq__38427_38441__$1 = temp__4657__auto___38440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38427_38441__$1)){
var c__28035__auto___38442 = cljs.core.chunk_first.call(null,seq__38427_38441__$1);
var G__38443 = cljs.core.chunk_rest.call(null,seq__38427_38441__$1);
var G__38444 = c__28035__auto___38442;
var G__38445 = cljs.core.count.call(null,c__28035__auto___38442);
var G__38446 = (0);
seq__38427_38431 = G__38443;
chunk__38428_38432 = G__38444;
count__38429_38433 = G__38445;
i__38430_38434 = G__38446;
continue;
} else {
var msg_38447 = cljs.core.first.call(null,seq__38427_38441__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38447);

var G__38448 = cljs.core.next.call(null,seq__38427_38441__$1);
var G__38449 = null;
var G__38450 = (0);
var G__38451 = (0);
seq__38427_38431 = G__38448;
chunk__38428_38432 = G__38449;
count__38429_38433 = G__38450;
i__38430_38434 = G__38451;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38452){
var map__38453 = p__38452;
var map__38453__$1 = ((((!((map__38453 == null)))?((((map__38453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38453):map__38453);
var w = map__38453__$1;
var message = cljs.core.get.call(null,map__38453__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__27184__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27184__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27184__auto__;
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
var seq__38455 = cljs.core.seq.call(null,plugins);
var chunk__38456 = null;
var count__38457 = (0);
var i__38458 = (0);
while(true){
if((i__38458 < count__38457)){
var vec__38459 = cljs.core._nth.call(null,chunk__38456,i__38458);
var k = cljs.core.nth.call(null,vec__38459,(0),null);
var plugin = cljs.core.nth.call(null,vec__38459,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38465 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38455,chunk__38456,count__38457,i__38458,pl_38465,vec__38459,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38465.call(null,msg_hist);
});})(seq__38455,chunk__38456,count__38457,i__38458,pl_38465,vec__38459,k,plugin))
);
} else {
}

var G__38466 = seq__38455;
var G__38467 = chunk__38456;
var G__38468 = count__38457;
var G__38469 = (i__38458 + (1));
seq__38455 = G__38466;
chunk__38456 = G__38467;
count__38457 = G__38468;
i__38458 = G__38469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38455);
if(temp__4657__auto__){
var seq__38455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38455__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__38455__$1);
var G__38470 = cljs.core.chunk_rest.call(null,seq__38455__$1);
var G__38471 = c__28035__auto__;
var G__38472 = cljs.core.count.call(null,c__28035__auto__);
var G__38473 = (0);
seq__38455 = G__38470;
chunk__38456 = G__38471;
count__38457 = G__38472;
i__38458 = G__38473;
continue;
} else {
var vec__38462 = cljs.core.first.call(null,seq__38455__$1);
var k = cljs.core.nth.call(null,vec__38462,(0),null);
var plugin = cljs.core.nth.call(null,vec__38462,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38474 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38455,chunk__38456,count__38457,i__38458,pl_38474,vec__38462,k,plugin,seq__38455__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38474.call(null,msg_hist);
});})(seq__38455,chunk__38456,count__38457,i__38458,pl_38474,vec__38462,k,plugin,seq__38455__$1,temp__4657__auto__))
);
} else {
}

var G__38475 = cljs.core.next.call(null,seq__38455__$1);
var G__38476 = null;
var G__38477 = (0);
var G__38478 = (0);
seq__38455 = G__38475;
chunk__38456 = G__38476;
count__38457 = G__38477;
i__38458 = G__38478;
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
var G__38480 = arguments.length;
switch (G__38480) {
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

var seq__38481_38486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38482_38487 = null;
var count__38483_38488 = (0);
var i__38484_38489 = (0);
while(true){
if((i__38484_38489 < count__38483_38488)){
var msg_38490 = cljs.core._nth.call(null,chunk__38482_38487,i__38484_38489);
figwheel.client.socket.handle_incoming_message.call(null,msg_38490);

var G__38491 = seq__38481_38486;
var G__38492 = chunk__38482_38487;
var G__38493 = count__38483_38488;
var G__38494 = (i__38484_38489 + (1));
seq__38481_38486 = G__38491;
chunk__38482_38487 = G__38492;
count__38483_38488 = G__38493;
i__38484_38489 = G__38494;
continue;
} else {
var temp__4657__auto___38495 = cljs.core.seq.call(null,seq__38481_38486);
if(temp__4657__auto___38495){
var seq__38481_38496__$1 = temp__4657__auto___38495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38481_38496__$1)){
var c__28035__auto___38497 = cljs.core.chunk_first.call(null,seq__38481_38496__$1);
var G__38498 = cljs.core.chunk_rest.call(null,seq__38481_38496__$1);
var G__38499 = c__28035__auto___38497;
var G__38500 = cljs.core.count.call(null,c__28035__auto___38497);
var G__38501 = (0);
seq__38481_38486 = G__38498;
chunk__38482_38487 = G__38499;
count__38483_38488 = G__38500;
i__38484_38489 = G__38501;
continue;
} else {
var msg_38502 = cljs.core.first.call(null,seq__38481_38496__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38502);

var G__38503 = cljs.core.next.call(null,seq__38481_38496__$1);
var G__38504 = null;
var G__38505 = (0);
var G__38506 = (0);
seq__38481_38486 = G__38503;
chunk__38482_38487 = G__38504;
count__38483_38488 = G__38505;
i__38484_38489 = G__38506;
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
var args__28372__auto__ = [];
var len__28365__auto___38511 = arguments.length;
var i__28366__auto___38512 = (0);
while(true){
if((i__28366__auto___38512 < len__28365__auto___38511)){
args__28372__auto__.push((arguments[i__28366__auto___38512]));

var G__38513 = (i__28366__auto___38512 + (1));
i__28366__auto___38512 = G__38513;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((0) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28373__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38508){
var map__38509 = p__38508;
var map__38509__$1 = ((((!((map__38509 == null)))?((((map__38509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38509):map__38509);
var opts = map__38509__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38507){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38507));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38514){if((e38514 instanceof Error)){
var e = e38514;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38514;

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
return (function (p__38515){
var map__38516 = p__38515;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38516):map__38516);
var msg_name = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514660155535
