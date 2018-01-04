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
}catch (e38034){if((e38034 instanceof Error)){
var e = e38034;
return "Error: Unable to stringify";
} else {
throw e38034;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38037 = arguments.length;
switch (G__38037) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38035_SHARP_){
if(typeof p1__38035_SHARP_ === 'string'){
return p1__38035_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38035_SHARP_);
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
var len__28364__auto___38040 = arguments.length;
var i__28365__auto___38041 = (0);
while(true){
if((i__28365__auto___38041 < len__28364__auto___38040)){
args__28371__auto__.push((arguments[i__28365__auto___38041]));

var G__38042 = (i__28365__auto___38041 + (1));
i__28365__auto___38041 = G__38042;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38039){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38039));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38044 = arguments.length;
var i__28365__auto___38045 = (0);
while(true){
if((i__28365__auto___38045 < len__28364__auto___38044)){
args__28371__auto__.push((arguments[i__28365__auto___38045]));

var G__38046 = (i__28365__auto___38045 + (1));
i__28365__auto___38045 = G__38046;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38043){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38043));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38047){
var map__38048 = p__38047;
var map__38048__$1 = ((((!((map__38048 == null)))?((((map__38048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38048):map__38048);
var message = cljs.core.get.call(null,map__38048__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38048__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31946__auto___38127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___38127,ch){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___38127,ch){
return (function (state_38099){
var state_val_38100 = (state_38099[(1)]);
if((state_val_38100 === (7))){
var inst_38095 = (state_38099[(2)]);
var state_38099__$1 = state_38099;
var statearr_38101_38128 = state_38099__$1;
(statearr_38101_38128[(2)] = inst_38095);

(statearr_38101_38128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (1))){
var state_38099__$1 = state_38099;
var statearr_38102_38129 = state_38099__$1;
(statearr_38102_38129[(2)] = null);

(statearr_38102_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (4))){
var inst_38052 = (state_38099[(7)]);
var inst_38052__$1 = (state_38099[(2)]);
var state_38099__$1 = (function (){var statearr_38103 = state_38099;
(statearr_38103[(7)] = inst_38052__$1);

return statearr_38103;
})();
if(cljs.core.truth_(inst_38052__$1)){
var statearr_38104_38130 = state_38099__$1;
(statearr_38104_38130[(1)] = (5));

} else {
var statearr_38105_38131 = state_38099__$1;
(statearr_38105_38131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (15))){
var inst_38059 = (state_38099[(8)]);
var inst_38074 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38059);
var inst_38075 = cljs.core.first.call(null,inst_38074);
var inst_38076 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38075);
var inst_38077 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38076)].join('');
var inst_38078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38077);
var state_38099__$1 = state_38099;
var statearr_38106_38132 = state_38099__$1;
(statearr_38106_38132[(2)] = inst_38078);

(statearr_38106_38132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (13))){
var inst_38083 = (state_38099[(2)]);
var state_38099__$1 = state_38099;
var statearr_38107_38133 = state_38099__$1;
(statearr_38107_38133[(2)] = inst_38083);

(statearr_38107_38133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (6))){
var state_38099__$1 = state_38099;
var statearr_38108_38134 = state_38099__$1;
(statearr_38108_38134[(2)] = null);

(statearr_38108_38134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (17))){
var inst_38081 = (state_38099[(2)]);
var state_38099__$1 = state_38099;
var statearr_38109_38135 = state_38099__$1;
(statearr_38109_38135[(2)] = inst_38081);

(statearr_38109_38135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (3))){
var inst_38097 = (state_38099[(2)]);
var state_38099__$1 = state_38099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38099__$1,inst_38097);
} else {
if((state_val_38100 === (12))){
var inst_38058 = (state_38099[(9)]);
var inst_38072 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38058,opts);
var state_38099__$1 = state_38099;
if(cljs.core.truth_(inst_38072)){
var statearr_38110_38136 = state_38099__$1;
(statearr_38110_38136[(1)] = (15));

} else {
var statearr_38111_38137 = state_38099__$1;
(statearr_38111_38137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (2))){
var state_38099__$1 = state_38099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38099__$1,(4),ch);
} else {
if((state_val_38100 === (11))){
var inst_38059 = (state_38099[(8)]);
var inst_38064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38065 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38059);
var inst_38066 = cljs.core.async.timeout.call(null,(1000));
var inst_38067 = [inst_38065,inst_38066];
var inst_38068 = (new cljs.core.PersistentVector(null,2,(5),inst_38064,inst_38067,null));
var state_38099__$1 = state_38099;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38099__$1,(14),inst_38068);
} else {
if((state_val_38100 === (9))){
var inst_38059 = (state_38099[(8)]);
var inst_38085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38086 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38059);
var inst_38087 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38086);
var inst_38088 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38087)].join('');
var inst_38089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38088);
var state_38099__$1 = (function (){var statearr_38112 = state_38099;
(statearr_38112[(10)] = inst_38085);

return statearr_38112;
})();
var statearr_38113_38138 = state_38099__$1;
(statearr_38113_38138[(2)] = inst_38089);

(statearr_38113_38138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (5))){
var inst_38052 = (state_38099[(7)]);
var inst_38054 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38055 = (new cljs.core.PersistentArrayMap(null,2,inst_38054,null));
var inst_38056 = (new cljs.core.PersistentHashSet(null,inst_38055,null));
var inst_38057 = figwheel.client.focus_msgs.call(null,inst_38056,inst_38052);
var inst_38058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38057);
var inst_38059 = cljs.core.first.call(null,inst_38057);
var inst_38060 = figwheel.client.autoload_QMARK_.call(null);
var state_38099__$1 = (function (){var statearr_38114 = state_38099;
(statearr_38114[(9)] = inst_38058);

(statearr_38114[(8)] = inst_38059);

return statearr_38114;
})();
if(cljs.core.truth_(inst_38060)){
var statearr_38115_38139 = state_38099__$1;
(statearr_38115_38139[(1)] = (8));

} else {
var statearr_38116_38140 = state_38099__$1;
(statearr_38116_38140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (14))){
var inst_38070 = (state_38099[(2)]);
var state_38099__$1 = state_38099;
var statearr_38117_38141 = state_38099__$1;
(statearr_38117_38141[(2)] = inst_38070);

(statearr_38117_38141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (16))){
var state_38099__$1 = state_38099;
var statearr_38118_38142 = state_38099__$1;
(statearr_38118_38142[(2)] = null);

(statearr_38118_38142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (10))){
var inst_38091 = (state_38099[(2)]);
var state_38099__$1 = (function (){var statearr_38119 = state_38099;
(statearr_38119[(11)] = inst_38091);

return statearr_38119;
})();
var statearr_38120_38143 = state_38099__$1;
(statearr_38120_38143[(2)] = null);

(statearr_38120_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38100 === (8))){
var inst_38058 = (state_38099[(9)]);
var inst_38062 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38058,opts);
var state_38099__$1 = state_38099;
if(cljs.core.truth_(inst_38062)){
var statearr_38121_38144 = state_38099__$1;
(statearr_38121_38144[(1)] = (11));

} else {
var statearr_38122_38145 = state_38099__$1;
(statearr_38122_38145[(1)] = (12));

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
});})(c__31946__auto___38127,ch))
;
return ((function (switch__31858__auto__,c__31946__auto___38127,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____0 = (function (){
var statearr_38123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38123[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__);

(statearr_38123[(1)] = (1));

return statearr_38123;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____1 = (function (state_38099){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_38099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e38124){if((e38124 instanceof Object)){
var ex__31862__auto__ = e38124;
var statearr_38125_38146 = state_38099;
(statearr_38125_38146[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38147 = state_38099;
state_38099 = G__38147;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__ = function(state_38099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____1.call(this,state_38099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31859__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___38127,ch))
})();
var state__31948__auto__ = (function (){var statearr_38126 = f__31947__auto__.call(null);
(statearr_38126[(6)] = c__31946__auto___38127);

return statearr_38126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___38127,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38148_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38148_SHARP_));
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
var base_path_38150 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38150){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38149){if((e38149 instanceof Error)){
var e = e38149;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38150], null));
} else {
var e = e38149;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38150))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38151){
var map__38152 = p__38151;
var map__38152__$1 = ((((!((map__38152 == null)))?((((map__38152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38152):map__38152);
var opts = map__38152__$1;
var build_id = cljs.core.get.call(null,map__38152__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38152,map__38152__$1,opts,build_id){
return (function (p__38154){
var vec__38155 = p__38154;
var seq__38156 = cljs.core.seq.call(null,vec__38155);
var first__38157 = cljs.core.first.call(null,seq__38156);
var seq__38156__$1 = cljs.core.next.call(null,seq__38156);
var map__38158 = first__38157;
var map__38158__$1 = ((((!((map__38158 == null)))?((((map__38158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38158):map__38158);
var msg = map__38158__$1;
var msg_name = cljs.core.get.call(null,map__38158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38156__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38155,seq__38156,first__38157,seq__38156__$1,map__38158,map__38158__$1,msg,msg_name,_,map__38152,map__38152__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38155,seq__38156,first__38157,seq__38156__$1,map__38158,map__38158__$1,msg,msg_name,_,map__38152,map__38152__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38152,map__38152__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38160){
var vec__38161 = p__38160;
var seq__38162 = cljs.core.seq.call(null,vec__38161);
var first__38163 = cljs.core.first.call(null,seq__38162);
var seq__38162__$1 = cljs.core.next.call(null,seq__38162);
var map__38164 = first__38163;
var map__38164__$1 = ((((!((map__38164 == null)))?((((map__38164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38164):map__38164);
var msg = map__38164__$1;
var msg_name = cljs.core.get.call(null,map__38164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38162__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38166){
var map__38167 = p__38166;
var map__38167__$1 = ((((!((map__38167 == null)))?((((map__38167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38167):map__38167);
var on_compile_warning = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38167,map__38167__$1,on_compile_warning,on_compile_fail){
return (function (p__38169){
var vec__38170 = p__38169;
var seq__38171 = cljs.core.seq.call(null,vec__38170);
var first__38172 = cljs.core.first.call(null,seq__38171);
var seq__38171__$1 = cljs.core.next.call(null,seq__38171);
var map__38173 = first__38172;
var map__38173__$1 = ((((!((map__38173 == null)))?((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38173):map__38173);
var msg = map__38173__$1;
var msg_name = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38171__$1;
var pred__38175 = cljs.core._EQ_;
var expr__38176 = msg_name;
if(cljs.core.truth_(pred__38175.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38176))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38175.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38176))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38167,map__38167__$1,on_compile_warning,on_compile_fail))
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__,msg_hist,msg_names,msg){
return (function (state_38265){
var state_val_38266 = (state_38265[(1)]);
if((state_val_38266 === (7))){
var inst_38185 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38185)){
var statearr_38267_38314 = state_38265__$1;
(statearr_38267_38314[(1)] = (8));

} else {
var statearr_38268_38315 = state_38265__$1;
(statearr_38268_38315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (20))){
var inst_38259 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38269_38316 = state_38265__$1;
(statearr_38269_38316[(2)] = inst_38259);

(statearr_38269_38316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (27))){
var inst_38255 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38270_38317 = state_38265__$1;
(statearr_38270_38317[(2)] = inst_38255);

(statearr_38270_38317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (1))){
var inst_38178 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38178)){
var statearr_38271_38318 = state_38265__$1;
(statearr_38271_38318[(1)] = (2));

} else {
var statearr_38272_38319 = state_38265__$1;
(statearr_38272_38319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (24))){
var inst_38257 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38273_38320 = state_38265__$1;
(statearr_38273_38320[(2)] = inst_38257);

(statearr_38273_38320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (4))){
var inst_38263 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38265__$1,inst_38263);
} else {
if((state_val_38266 === (15))){
var inst_38261 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38274_38321 = state_38265__$1;
(statearr_38274_38321[(2)] = inst_38261);

(statearr_38274_38321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (21))){
var inst_38214 = (state_38265[(2)]);
var inst_38215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38216 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38215);
var state_38265__$1 = (function (){var statearr_38275 = state_38265;
(statearr_38275[(7)] = inst_38214);

return statearr_38275;
})();
var statearr_38276_38322 = state_38265__$1;
(statearr_38276_38322[(2)] = inst_38216);

(statearr_38276_38322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (31))){
var inst_38244 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38244)){
var statearr_38277_38323 = state_38265__$1;
(statearr_38277_38323[(1)] = (34));

} else {
var statearr_38278_38324 = state_38265__$1;
(statearr_38278_38324[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (32))){
var inst_38253 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38279_38325 = state_38265__$1;
(statearr_38279_38325[(2)] = inst_38253);

(statearr_38279_38325[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (33))){
var inst_38240 = (state_38265[(2)]);
var inst_38241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38242 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38241);
var state_38265__$1 = (function (){var statearr_38280 = state_38265;
(statearr_38280[(8)] = inst_38240);

return statearr_38280;
})();
var statearr_38281_38326 = state_38265__$1;
(statearr_38281_38326[(2)] = inst_38242);

(statearr_38281_38326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (13))){
var inst_38199 = figwheel.client.heads_up.clear.call(null);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(16),inst_38199);
} else {
if((state_val_38266 === (22))){
var inst_38220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38221 = figwheel.client.heads_up.append_warning_message.call(null,inst_38220);
var state_38265__$1 = state_38265;
var statearr_38282_38327 = state_38265__$1;
(statearr_38282_38327[(2)] = inst_38221);

(statearr_38282_38327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (36))){
var inst_38251 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38283_38328 = state_38265__$1;
(statearr_38283_38328[(2)] = inst_38251);

(statearr_38283_38328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (29))){
var inst_38231 = (state_38265[(2)]);
var inst_38232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38232);
var state_38265__$1 = (function (){var statearr_38284 = state_38265;
(statearr_38284[(9)] = inst_38231);

return statearr_38284;
})();
var statearr_38285_38329 = state_38265__$1;
(statearr_38285_38329[(2)] = inst_38233);

(statearr_38285_38329[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (6))){
var inst_38180 = (state_38265[(10)]);
var state_38265__$1 = state_38265;
var statearr_38286_38330 = state_38265__$1;
(statearr_38286_38330[(2)] = inst_38180);

(statearr_38286_38330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (28))){
var inst_38227 = (state_38265[(2)]);
var inst_38228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38229 = figwheel.client.heads_up.display_warning.call(null,inst_38228);
var state_38265__$1 = (function (){var statearr_38287 = state_38265;
(statearr_38287[(11)] = inst_38227);

return statearr_38287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(29),inst_38229);
} else {
if((state_val_38266 === (25))){
var inst_38225 = figwheel.client.heads_up.clear.call(null);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(28),inst_38225);
} else {
if((state_val_38266 === (34))){
var inst_38246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(37),inst_38246);
} else {
if((state_val_38266 === (17))){
var inst_38205 = (state_38265[(2)]);
var inst_38206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38207 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38206);
var state_38265__$1 = (function (){var statearr_38288 = state_38265;
(statearr_38288[(12)] = inst_38205);

return statearr_38288;
})();
var statearr_38289_38331 = state_38265__$1;
(statearr_38289_38331[(2)] = inst_38207);

(statearr_38289_38331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (3))){
var inst_38197 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38197)){
var statearr_38290_38332 = state_38265__$1;
(statearr_38290_38332[(1)] = (13));

} else {
var statearr_38291_38333 = state_38265__$1;
(statearr_38291_38333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (12))){
var inst_38193 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38292_38334 = state_38265__$1;
(statearr_38292_38334[(2)] = inst_38193);

(statearr_38292_38334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (2))){
var inst_38180 = (state_38265[(10)]);
var inst_38180__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38265__$1 = (function (){var statearr_38293 = state_38265;
(statearr_38293[(10)] = inst_38180__$1);

return statearr_38293;
})();
if(cljs.core.truth_(inst_38180__$1)){
var statearr_38294_38335 = state_38265__$1;
(statearr_38294_38335[(1)] = (5));

} else {
var statearr_38295_38336 = state_38265__$1;
(statearr_38295_38336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (23))){
var inst_38223 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38223)){
var statearr_38296_38337 = state_38265__$1;
(statearr_38296_38337[(1)] = (25));

} else {
var statearr_38297_38338 = state_38265__$1;
(statearr_38297_38338[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (35))){
var state_38265__$1 = state_38265;
var statearr_38298_38339 = state_38265__$1;
(statearr_38298_38339[(2)] = null);

(statearr_38298_38339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (19))){
var inst_38218 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38218)){
var statearr_38299_38340 = state_38265__$1;
(statearr_38299_38340[(1)] = (22));

} else {
var statearr_38300_38341 = state_38265__$1;
(statearr_38300_38341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (11))){
var inst_38189 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38301_38342 = state_38265__$1;
(statearr_38301_38342[(2)] = inst_38189);

(statearr_38301_38342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (9))){
var inst_38191 = figwheel.client.heads_up.clear.call(null);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(12),inst_38191);
} else {
if((state_val_38266 === (5))){
var inst_38182 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38265__$1 = state_38265;
var statearr_38302_38343 = state_38265__$1;
(statearr_38302_38343[(2)] = inst_38182);

(statearr_38302_38343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (14))){
var inst_38209 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38209)){
var statearr_38303_38344 = state_38265__$1;
(statearr_38303_38344[(1)] = (18));

} else {
var statearr_38304_38345 = state_38265__$1;
(statearr_38304_38345[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (26))){
var inst_38235 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38265__$1 = state_38265;
if(cljs.core.truth_(inst_38235)){
var statearr_38305_38346 = state_38265__$1;
(statearr_38305_38346[(1)] = (30));

} else {
var statearr_38306_38347 = state_38265__$1;
(statearr_38306_38347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (16))){
var inst_38201 = (state_38265[(2)]);
var inst_38202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38203 = figwheel.client.heads_up.display_exception.call(null,inst_38202);
var state_38265__$1 = (function (){var statearr_38307 = state_38265;
(statearr_38307[(13)] = inst_38201);

return statearr_38307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(17),inst_38203);
} else {
if((state_val_38266 === (30))){
var inst_38237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38238 = figwheel.client.heads_up.display_warning.call(null,inst_38237);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(33),inst_38238);
} else {
if((state_val_38266 === (10))){
var inst_38195 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38308_38348 = state_38265__$1;
(statearr_38308_38348[(2)] = inst_38195);

(statearr_38308_38348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (18))){
var inst_38211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38212 = figwheel.client.heads_up.display_exception.call(null,inst_38211);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(21),inst_38212);
} else {
if((state_val_38266 === (37))){
var inst_38248 = (state_38265[(2)]);
var state_38265__$1 = state_38265;
var statearr_38309_38349 = state_38265__$1;
(statearr_38309_38349[(2)] = inst_38248);

(statearr_38309_38349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38266 === (8))){
var inst_38187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38265__$1,(11),inst_38187);
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
});})(c__31946__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31858__auto__,c__31946__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____0 = (function (){
var statearr_38310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38310[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__);

(statearr_38310[(1)] = (1));

return statearr_38310;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____1 = (function (state_38265){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_38265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e38311){if((e38311 instanceof Object)){
var ex__31862__auto__ = e38311;
var statearr_38312_38350 = state_38265;
(statearr_38312_38350[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38351 = state_38265;
state_38265 = G__38351;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__ = function(state_38265){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____1.call(this,state_38265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__,msg_hist,msg_names,msg))
})();
var state__31948__auto__ = (function (){var statearr_38313 = f__31947__auto__.call(null);
(statearr_38313[(6)] = c__31946__auto__);

return statearr_38313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__,msg_hist,msg_names,msg))
);

return c__31946__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31946__auto___38380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___38380,ch){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___38380,ch){
return (function (state_38366){
var state_val_38367 = (state_38366[(1)]);
if((state_val_38367 === (1))){
var state_38366__$1 = state_38366;
var statearr_38368_38381 = state_38366__$1;
(statearr_38368_38381[(2)] = null);

(statearr_38368_38381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38367 === (2))){
var state_38366__$1 = state_38366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38366__$1,(4),ch);
} else {
if((state_val_38367 === (3))){
var inst_38364 = (state_38366[(2)]);
var state_38366__$1 = state_38366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38366__$1,inst_38364);
} else {
if((state_val_38367 === (4))){
var inst_38354 = (state_38366[(7)]);
var inst_38354__$1 = (state_38366[(2)]);
var state_38366__$1 = (function (){var statearr_38369 = state_38366;
(statearr_38369[(7)] = inst_38354__$1);

return statearr_38369;
})();
if(cljs.core.truth_(inst_38354__$1)){
var statearr_38370_38382 = state_38366__$1;
(statearr_38370_38382[(1)] = (5));

} else {
var statearr_38371_38383 = state_38366__$1;
(statearr_38371_38383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38367 === (5))){
var inst_38354 = (state_38366[(7)]);
var inst_38356 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38354);
var state_38366__$1 = state_38366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38366__$1,(8),inst_38356);
} else {
if((state_val_38367 === (6))){
var state_38366__$1 = state_38366;
var statearr_38372_38384 = state_38366__$1;
(statearr_38372_38384[(2)] = null);

(statearr_38372_38384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38367 === (7))){
var inst_38362 = (state_38366[(2)]);
var state_38366__$1 = state_38366;
var statearr_38373_38385 = state_38366__$1;
(statearr_38373_38385[(2)] = inst_38362);

(statearr_38373_38385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38367 === (8))){
var inst_38358 = (state_38366[(2)]);
var state_38366__$1 = (function (){var statearr_38374 = state_38366;
(statearr_38374[(8)] = inst_38358);

return statearr_38374;
})();
var statearr_38375_38386 = state_38366__$1;
(statearr_38375_38386[(2)] = null);

(statearr_38375_38386[(1)] = (2));


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
});})(c__31946__auto___38380,ch))
;
return ((function (switch__31858__auto__,c__31946__auto___38380,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31859__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31859__auto____0 = (function (){
var statearr_38376 = [null,null,null,null,null,null,null,null,null];
(statearr_38376[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31859__auto__);

(statearr_38376[(1)] = (1));

return statearr_38376;
});
var figwheel$client$heads_up_plugin_$_state_machine__31859__auto____1 = (function (state_38366){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_38366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e38377){if((e38377 instanceof Object)){
var ex__31862__auto__ = e38377;
var statearr_38378_38387 = state_38366;
(statearr_38378_38387[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38388 = state_38366;
state_38366 = G__38388;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31859__auto__ = function(state_38366){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31859__auto____1.call(this,state_38366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31859__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31859__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___38380,ch))
})();
var state__31948__auto__ = (function (){var statearr_38379 = f__31947__auto__.call(null);
(statearr_38379[(6)] = c__31946__auto___38380);

return statearr_38379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___38380,ch))
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__){
return (function (state_38394){
var state_val_38395 = (state_38394[(1)]);
if((state_val_38395 === (1))){
var inst_38389 = cljs.core.async.timeout.call(null,(3000));
var state_38394__$1 = state_38394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38394__$1,(2),inst_38389);
} else {
if((state_val_38395 === (2))){
var inst_38391 = (state_38394[(2)]);
var inst_38392 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38394__$1 = (function (){var statearr_38396 = state_38394;
(statearr_38396[(7)] = inst_38391);

return statearr_38396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38394__$1,inst_38392);
} else {
return null;
}
}
});})(c__31946__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____0 = (function (){
var statearr_38397 = [null,null,null,null,null,null,null,null];
(statearr_38397[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__);

(statearr_38397[(1)] = (1));

return statearr_38397;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____1 = (function (state_38394){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_38394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e38398){if((e38398 instanceof Object)){
var ex__31862__auto__ = e38398;
var statearr_38399_38401 = state_38394;
(statearr_38399_38401[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38402 = state_38394;
state_38394 = G__38402;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__ = function(state_38394){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____1.call(this,state_38394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31859__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__))
})();
var state__31948__auto__ = (function (){var statearr_38400 = f__31947__auto__.call(null);
(statearr_38400[(6)] = c__31946__auto__);

return statearr_38400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__))
);

return c__31946__auto__;
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38409){
var state_val_38410 = (state_38409[(1)]);
if((state_val_38410 === (1))){
var inst_38403 = cljs.core.async.timeout.call(null,(2000));
var state_38409__$1 = state_38409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38409__$1,(2),inst_38403);
} else {
if((state_val_38410 === (2))){
var inst_38405 = (state_38409[(2)]);
var inst_38406 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38407 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38406);
var state_38409__$1 = (function (){var statearr_38411 = state_38409;
(statearr_38411[(7)] = inst_38405);

return statearr_38411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38409__$1,inst_38407);
} else {
return null;
}
}
});})(c__31946__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____0 = (function (){
var statearr_38412 = [null,null,null,null,null,null,null,null];
(statearr_38412[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__);

(statearr_38412[(1)] = (1));

return statearr_38412;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____1 = (function (state_38409){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_38409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e38413){if((e38413 instanceof Object)){
var ex__31862__auto__ = e38413;
var statearr_38414_38416 = state_38409;
(statearr_38414_38416[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38417 = state_38409;
state_38409 = G__38417;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__ = function(state_38409){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____1.call(this,state_38409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31948__auto__ = (function (){var statearr_38415 = f__31947__auto__.call(null);
(statearr_38415[(6)] = c__31946__auto__);

return statearr_38415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__,figwheel_version,temp__4657__auto__))
);

return c__31946__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38418){
var map__38419 = p__38418;
var map__38419__$1 = ((((!((map__38419 == null)))?((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38419):map__38419);
var file = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38421 = "";
var G__38421__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38421),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38421);
var G__38421__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38421__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38421__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38421__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38421__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38422){
var map__38423 = p__38422;
var map__38423__$1 = ((((!((map__38423 == null)))?((((map__38423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38423):map__38423);
var ed = map__38423__$1;
var formatted_exception = cljs.core.get.call(null,map__38423__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38423__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38425_38429 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38426_38430 = null;
var count__38427_38431 = (0);
var i__38428_38432 = (0);
while(true){
if((i__38428_38432 < count__38427_38431)){
var msg_38433 = cljs.core._nth.call(null,chunk__38426_38430,i__38428_38432);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38433);

var G__38434 = seq__38425_38429;
var G__38435 = chunk__38426_38430;
var G__38436 = count__38427_38431;
var G__38437 = (i__38428_38432 + (1));
seq__38425_38429 = G__38434;
chunk__38426_38430 = G__38435;
count__38427_38431 = G__38436;
i__38428_38432 = G__38437;
continue;
} else {
var temp__4657__auto___38438 = cljs.core.seq.call(null,seq__38425_38429);
if(temp__4657__auto___38438){
var seq__38425_38439__$1 = temp__4657__auto___38438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38425_38439__$1)){
var c__28034__auto___38440 = cljs.core.chunk_first.call(null,seq__38425_38439__$1);
var G__38441 = cljs.core.chunk_rest.call(null,seq__38425_38439__$1);
var G__38442 = c__28034__auto___38440;
var G__38443 = cljs.core.count.call(null,c__28034__auto___38440);
var G__38444 = (0);
seq__38425_38429 = G__38441;
chunk__38426_38430 = G__38442;
count__38427_38431 = G__38443;
i__38428_38432 = G__38444;
continue;
} else {
var msg_38445 = cljs.core.first.call(null,seq__38425_38439__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38445);

var G__38446 = cljs.core.next.call(null,seq__38425_38439__$1);
var G__38447 = null;
var G__38448 = (0);
var G__38449 = (0);
seq__38425_38429 = G__38446;
chunk__38426_38430 = G__38447;
count__38427_38431 = G__38448;
i__38428_38432 = G__38449;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38450){
var map__38451 = p__38450;
var map__38451__$1 = ((((!((map__38451 == null)))?((((map__38451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38451):map__38451);
var w = map__38451__$1;
var message = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38453 = cljs.core.seq.call(null,plugins);
var chunk__38454 = null;
var count__38455 = (0);
var i__38456 = (0);
while(true){
if((i__38456 < count__38455)){
var vec__38457 = cljs.core._nth.call(null,chunk__38454,i__38456);
var k = cljs.core.nth.call(null,vec__38457,(0),null);
var plugin = cljs.core.nth.call(null,vec__38457,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38463 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38453,chunk__38454,count__38455,i__38456,pl_38463,vec__38457,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38463.call(null,msg_hist);
});})(seq__38453,chunk__38454,count__38455,i__38456,pl_38463,vec__38457,k,plugin))
);
} else {
}

var G__38464 = seq__38453;
var G__38465 = chunk__38454;
var G__38466 = count__38455;
var G__38467 = (i__38456 + (1));
seq__38453 = G__38464;
chunk__38454 = G__38465;
count__38455 = G__38466;
i__38456 = G__38467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38453);
if(temp__4657__auto__){
var seq__38453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38453__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38453__$1);
var G__38468 = cljs.core.chunk_rest.call(null,seq__38453__$1);
var G__38469 = c__28034__auto__;
var G__38470 = cljs.core.count.call(null,c__28034__auto__);
var G__38471 = (0);
seq__38453 = G__38468;
chunk__38454 = G__38469;
count__38455 = G__38470;
i__38456 = G__38471;
continue;
} else {
var vec__38460 = cljs.core.first.call(null,seq__38453__$1);
var k = cljs.core.nth.call(null,vec__38460,(0),null);
var plugin = cljs.core.nth.call(null,vec__38460,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38472 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38453,chunk__38454,count__38455,i__38456,pl_38472,vec__38460,k,plugin,seq__38453__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38472.call(null,msg_hist);
});})(seq__38453,chunk__38454,count__38455,i__38456,pl_38472,vec__38460,k,plugin,seq__38453__$1,temp__4657__auto__))
);
} else {
}

var G__38473 = cljs.core.next.call(null,seq__38453__$1);
var G__38474 = null;
var G__38475 = (0);
var G__38476 = (0);
seq__38453 = G__38473;
chunk__38454 = G__38474;
count__38455 = G__38475;
i__38456 = G__38476;
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
var G__38478 = arguments.length;
switch (G__38478) {
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

var seq__38479_38484 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38480_38485 = null;
var count__38481_38486 = (0);
var i__38482_38487 = (0);
while(true){
if((i__38482_38487 < count__38481_38486)){
var msg_38488 = cljs.core._nth.call(null,chunk__38480_38485,i__38482_38487);
figwheel.client.socket.handle_incoming_message.call(null,msg_38488);

var G__38489 = seq__38479_38484;
var G__38490 = chunk__38480_38485;
var G__38491 = count__38481_38486;
var G__38492 = (i__38482_38487 + (1));
seq__38479_38484 = G__38489;
chunk__38480_38485 = G__38490;
count__38481_38486 = G__38491;
i__38482_38487 = G__38492;
continue;
} else {
var temp__4657__auto___38493 = cljs.core.seq.call(null,seq__38479_38484);
if(temp__4657__auto___38493){
var seq__38479_38494__$1 = temp__4657__auto___38493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38479_38494__$1)){
var c__28034__auto___38495 = cljs.core.chunk_first.call(null,seq__38479_38494__$1);
var G__38496 = cljs.core.chunk_rest.call(null,seq__38479_38494__$1);
var G__38497 = c__28034__auto___38495;
var G__38498 = cljs.core.count.call(null,c__28034__auto___38495);
var G__38499 = (0);
seq__38479_38484 = G__38496;
chunk__38480_38485 = G__38497;
count__38481_38486 = G__38498;
i__38482_38487 = G__38499;
continue;
} else {
var msg_38500 = cljs.core.first.call(null,seq__38479_38494__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38500);

var G__38501 = cljs.core.next.call(null,seq__38479_38494__$1);
var G__38502 = null;
var G__38503 = (0);
var G__38504 = (0);
seq__38479_38484 = G__38501;
chunk__38480_38485 = G__38502;
count__38481_38486 = G__38503;
i__38482_38487 = G__38504;
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
var len__28364__auto___38509 = arguments.length;
var i__28365__auto___38510 = (0);
while(true){
if((i__28365__auto___38510 < len__28364__auto___38509)){
args__28371__auto__.push((arguments[i__28365__auto___38510]));

var G__38511 = (i__28365__auto___38510 + (1));
i__28365__auto___38510 = G__38511;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38506){
var map__38507 = p__38506;
var map__38507__$1 = ((((!((map__38507 == null)))?((((map__38507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38507):map__38507);
var opts = map__38507__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38505){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38505));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38512){if((e38512 instanceof Error)){
var e = e38512;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38512;

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
return (function (p__38513){
var map__38514 = p__38513;
var map__38514__$1 = ((((!((map__38514 == null)))?((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38514):map__38514);
var msg_name = cljs.core.get.call(null,map__38514__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515054907558
