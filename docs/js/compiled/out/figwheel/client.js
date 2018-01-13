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
}catch (e38054){if((e38054 instanceof Error)){
var e = e38054;
return "Error: Unable to stringify";
} else {
throw e38054;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38055_SHARP_){
if(typeof p1__38055_SHARP_ === 'string'){
return p1__38055_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38055_SHARP_);
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
var len__28364__auto___38060 = arguments.length;
var i__28365__auto___38061 = (0);
while(true){
if((i__28365__auto___38061 < len__28364__auto___38060)){
args__28371__auto__.push((arguments[i__28365__auto___38061]));

var G__38062 = (i__28365__auto___38061 + (1));
i__28365__auto___38061 = G__38062;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38059){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38059));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38064 = arguments.length;
var i__28365__auto___38065 = (0);
while(true){
if((i__28365__auto___38065 < len__28364__auto___38064)){
args__28371__auto__.push((arguments[i__28365__auto___38065]));

var G__38066 = (i__28365__auto___38065 + (1));
i__28365__auto___38065 = G__38066;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38063){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38063));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38067){
var map__38068 = p__38067;
var map__38068__$1 = ((((!((map__38068 == null)))?((((map__38068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38068):map__38068);
var message = cljs.core.get.call(null,map__38068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38068__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30623__auto___38147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___38147,ch){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___38147,ch){
return (function (state_38119){
var state_val_38120 = (state_38119[(1)]);
if((state_val_38120 === (7))){
var inst_38115 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38121_38148 = state_38119__$1;
(statearr_38121_38148[(2)] = inst_38115);

(statearr_38121_38148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (1))){
var state_38119__$1 = state_38119;
var statearr_38122_38149 = state_38119__$1;
(statearr_38122_38149[(2)] = null);

(statearr_38122_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (4))){
var inst_38072 = (state_38119[(7)]);
var inst_38072__$1 = (state_38119[(2)]);
var state_38119__$1 = (function (){var statearr_38123 = state_38119;
(statearr_38123[(7)] = inst_38072__$1);

return statearr_38123;
})();
if(cljs.core.truth_(inst_38072__$1)){
var statearr_38124_38150 = state_38119__$1;
(statearr_38124_38150[(1)] = (5));

} else {
var statearr_38125_38151 = state_38119__$1;
(statearr_38125_38151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (15))){
var inst_38079 = (state_38119[(8)]);
var inst_38094 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38079);
var inst_38095 = cljs.core.first.call(null,inst_38094);
var inst_38096 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38095);
var inst_38097 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38096)].join('');
var inst_38098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38097);
var state_38119__$1 = state_38119;
var statearr_38126_38152 = state_38119__$1;
(statearr_38126_38152[(2)] = inst_38098);

(statearr_38126_38152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (13))){
var inst_38103 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38127_38153 = state_38119__$1;
(statearr_38127_38153[(2)] = inst_38103);

(statearr_38127_38153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (6))){
var state_38119__$1 = state_38119;
var statearr_38128_38154 = state_38119__$1;
(statearr_38128_38154[(2)] = null);

(statearr_38128_38154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (17))){
var inst_38101 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38129_38155 = state_38119__$1;
(statearr_38129_38155[(2)] = inst_38101);

(statearr_38129_38155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (3))){
var inst_38117 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38119__$1,inst_38117);
} else {
if((state_val_38120 === (12))){
var inst_38078 = (state_38119[(9)]);
var inst_38092 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38078,opts);
var state_38119__$1 = state_38119;
if(cljs.core.truth_(inst_38092)){
var statearr_38130_38156 = state_38119__$1;
(statearr_38130_38156[(1)] = (15));

} else {
var statearr_38131_38157 = state_38119__$1;
(statearr_38131_38157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (2))){
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38119__$1,(4),ch);
} else {
if((state_val_38120 === (11))){
var inst_38079 = (state_38119[(8)]);
var inst_38084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38085 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38079);
var inst_38086 = cljs.core.async.timeout.call(null,(1000));
var inst_38087 = [inst_38085,inst_38086];
var inst_38088 = (new cljs.core.PersistentVector(null,2,(5),inst_38084,inst_38087,null));
var state_38119__$1 = state_38119;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38119__$1,(14),inst_38088);
} else {
if((state_val_38120 === (9))){
var inst_38079 = (state_38119[(8)]);
var inst_38105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38106 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38079);
var inst_38107 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38106);
var inst_38108 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38107)].join('');
var inst_38109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38108);
var state_38119__$1 = (function (){var statearr_38132 = state_38119;
(statearr_38132[(10)] = inst_38105);

return statearr_38132;
})();
var statearr_38133_38158 = state_38119__$1;
(statearr_38133_38158[(2)] = inst_38109);

(statearr_38133_38158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (5))){
var inst_38072 = (state_38119[(7)]);
var inst_38074 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38075 = (new cljs.core.PersistentArrayMap(null,2,inst_38074,null));
var inst_38076 = (new cljs.core.PersistentHashSet(null,inst_38075,null));
var inst_38077 = figwheel.client.focus_msgs.call(null,inst_38076,inst_38072);
var inst_38078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38077);
var inst_38079 = cljs.core.first.call(null,inst_38077);
var inst_38080 = figwheel.client.autoload_QMARK_.call(null);
var state_38119__$1 = (function (){var statearr_38134 = state_38119;
(statearr_38134[(8)] = inst_38079);

(statearr_38134[(9)] = inst_38078);

return statearr_38134;
})();
if(cljs.core.truth_(inst_38080)){
var statearr_38135_38159 = state_38119__$1;
(statearr_38135_38159[(1)] = (8));

} else {
var statearr_38136_38160 = state_38119__$1;
(statearr_38136_38160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (14))){
var inst_38090 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38137_38161 = state_38119__$1;
(statearr_38137_38161[(2)] = inst_38090);

(statearr_38137_38161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (16))){
var state_38119__$1 = state_38119;
var statearr_38138_38162 = state_38119__$1;
(statearr_38138_38162[(2)] = null);

(statearr_38138_38162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (10))){
var inst_38111 = (state_38119[(2)]);
var state_38119__$1 = (function (){var statearr_38139 = state_38119;
(statearr_38139[(11)] = inst_38111);

return statearr_38139;
})();
var statearr_38140_38163 = state_38119__$1;
(statearr_38140_38163[(2)] = null);

(statearr_38140_38163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (8))){
var inst_38078 = (state_38119[(9)]);
var inst_38082 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38078,opts);
var state_38119__$1 = state_38119;
if(cljs.core.truth_(inst_38082)){
var statearr_38141_38164 = state_38119__$1;
(statearr_38141_38164[(1)] = (11));

} else {
var statearr_38142_38165 = state_38119__$1;
(statearr_38142_38165[(1)] = (12));

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
});})(c__30623__auto___38147,ch))
;
return ((function (switch__30535__auto__,c__30623__auto___38147,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38143[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____1 = (function (state_38119){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_38119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__30539__auto__ = e38144;
var statearr_38145_38166 = state_38119;
(statearr_38145_38166[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38167 = state_38119;
state_38119 = G__38167;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__ = function(state_38119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____1.call(this,state_38119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30536__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___38147,ch))
})();
var state__30625__auto__ = (function (){var statearr_38146 = f__30624__auto__.call(null);
(statearr_38146[(6)] = c__30623__auto___38147);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___38147,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38168_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38168_SHARP_));
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
var base_path_38170 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38170){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38169){if((e38169 instanceof Error)){
var e = e38169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38170], null));
} else {
var e = e38169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38170))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38171){
var map__38172 = p__38171;
var map__38172__$1 = ((((!((map__38172 == null)))?((((map__38172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38172):map__38172);
var opts = map__38172__$1;
var build_id = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38172,map__38172__$1,opts,build_id){
return (function (p__38174){
var vec__38175 = p__38174;
var seq__38176 = cljs.core.seq.call(null,vec__38175);
var first__38177 = cljs.core.first.call(null,seq__38176);
var seq__38176__$1 = cljs.core.next.call(null,seq__38176);
var map__38178 = first__38177;
var map__38178__$1 = ((((!((map__38178 == null)))?((((map__38178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38178):map__38178);
var msg = map__38178__$1;
var msg_name = cljs.core.get.call(null,map__38178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38176__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38175,seq__38176,first__38177,seq__38176__$1,map__38178,map__38178__$1,msg,msg_name,_,map__38172,map__38172__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38175,seq__38176,first__38177,seq__38176__$1,map__38178,map__38178__$1,msg,msg_name,_,map__38172,map__38172__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38172,map__38172__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38180){
var vec__38181 = p__38180;
var seq__38182 = cljs.core.seq.call(null,vec__38181);
var first__38183 = cljs.core.first.call(null,seq__38182);
var seq__38182__$1 = cljs.core.next.call(null,seq__38182);
var map__38184 = first__38183;
var map__38184__$1 = ((((!((map__38184 == null)))?((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38184):map__38184);
var msg = map__38184__$1;
var msg_name = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38182__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38186){
var map__38187 = p__38186;
var map__38187__$1 = ((((!((map__38187 == null)))?((((map__38187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38187):map__38187);
var on_compile_warning = cljs.core.get.call(null,map__38187__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38187__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38187,map__38187__$1,on_compile_warning,on_compile_fail){
return (function (p__38189){
var vec__38190 = p__38189;
var seq__38191 = cljs.core.seq.call(null,vec__38190);
var first__38192 = cljs.core.first.call(null,seq__38191);
var seq__38191__$1 = cljs.core.next.call(null,seq__38191);
var map__38193 = first__38192;
var map__38193__$1 = ((((!((map__38193 == null)))?((((map__38193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38193):map__38193);
var msg = map__38193__$1;
var msg_name = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38191__$1;
var pred__38195 = cljs.core._EQ_;
var expr__38196 = msg_name;
if(cljs.core.truth_(pred__38195.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38196))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38195.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38196))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38187,map__38187__$1,on_compile_warning,on_compile_fail))
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__,msg_hist,msg_names,msg){
return (function (state_38285){
var state_val_38286 = (state_38285[(1)]);
if((state_val_38286 === (7))){
var inst_38205 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38205)){
var statearr_38287_38334 = state_38285__$1;
(statearr_38287_38334[(1)] = (8));

} else {
var statearr_38288_38335 = state_38285__$1;
(statearr_38288_38335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (20))){
var inst_38279 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38289_38336 = state_38285__$1;
(statearr_38289_38336[(2)] = inst_38279);

(statearr_38289_38336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (27))){
var inst_38275 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38290_38337 = state_38285__$1;
(statearr_38290_38337[(2)] = inst_38275);

(statearr_38290_38337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (1))){
var inst_38198 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38198)){
var statearr_38291_38338 = state_38285__$1;
(statearr_38291_38338[(1)] = (2));

} else {
var statearr_38292_38339 = state_38285__$1;
(statearr_38292_38339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (24))){
var inst_38277 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38293_38340 = state_38285__$1;
(statearr_38293_38340[(2)] = inst_38277);

(statearr_38293_38340[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (4))){
var inst_38283 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38285__$1,inst_38283);
} else {
if((state_val_38286 === (15))){
var inst_38281 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38294_38341 = state_38285__$1;
(statearr_38294_38341[(2)] = inst_38281);

(statearr_38294_38341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (21))){
var inst_38234 = (state_38285[(2)]);
var inst_38235 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38235);
var state_38285__$1 = (function (){var statearr_38295 = state_38285;
(statearr_38295[(7)] = inst_38234);

return statearr_38295;
})();
var statearr_38296_38342 = state_38285__$1;
(statearr_38296_38342[(2)] = inst_38236);

(statearr_38296_38342[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (31))){
var inst_38264 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38264)){
var statearr_38297_38343 = state_38285__$1;
(statearr_38297_38343[(1)] = (34));

} else {
var statearr_38298_38344 = state_38285__$1;
(statearr_38298_38344[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (32))){
var inst_38273 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38299_38345 = state_38285__$1;
(statearr_38299_38345[(2)] = inst_38273);

(statearr_38299_38345[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (33))){
var inst_38260 = (state_38285[(2)]);
var inst_38261 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38262 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38261);
var state_38285__$1 = (function (){var statearr_38300 = state_38285;
(statearr_38300[(8)] = inst_38260);

return statearr_38300;
})();
var statearr_38301_38346 = state_38285__$1;
(statearr_38301_38346[(2)] = inst_38262);

(statearr_38301_38346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (13))){
var inst_38219 = figwheel.client.heads_up.clear.call(null);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(16),inst_38219);
} else {
if((state_val_38286 === (22))){
var inst_38240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38241 = figwheel.client.heads_up.append_warning_message.call(null,inst_38240);
var state_38285__$1 = state_38285;
var statearr_38302_38347 = state_38285__$1;
(statearr_38302_38347[(2)] = inst_38241);

(statearr_38302_38347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (36))){
var inst_38271 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38303_38348 = state_38285__$1;
(statearr_38303_38348[(2)] = inst_38271);

(statearr_38303_38348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (29))){
var inst_38251 = (state_38285[(2)]);
var inst_38252 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38253 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38252);
var state_38285__$1 = (function (){var statearr_38304 = state_38285;
(statearr_38304[(9)] = inst_38251);

return statearr_38304;
})();
var statearr_38305_38349 = state_38285__$1;
(statearr_38305_38349[(2)] = inst_38253);

(statearr_38305_38349[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (6))){
var inst_38200 = (state_38285[(10)]);
var state_38285__$1 = state_38285;
var statearr_38306_38350 = state_38285__$1;
(statearr_38306_38350[(2)] = inst_38200);

(statearr_38306_38350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (28))){
var inst_38247 = (state_38285[(2)]);
var inst_38248 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38249 = figwheel.client.heads_up.display_warning.call(null,inst_38248);
var state_38285__$1 = (function (){var statearr_38307 = state_38285;
(statearr_38307[(11)] = inst_38247);

return statearr_38307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(29),inst_38249);
} else {
if((state_val_38286 === (25))){
var inst_38245 = figwheel.client.heads_up.clear.call(null);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(28),inst_38245);
} else {
if((state_val_38286 === (34))){
var inst_38266 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(37),inst_38266);
} else {
if((state_val_38286 === (17))){
var inst_38225 = (state_38285[(2)]);
var inst_38226 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38226);
var state_38285__$1 = (function (){var statearr_38308 = state_38285;
(statearr_38308[(12)] = inst_38225);

return statearr_38308;
})();
var statearr_38309_38351 = state_38285__$1;
(statearr_38309_38351[(2)] = inst_38227);

(statearr_38309_38351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (3))){
var inst_38217 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38217)){
var statearr_38310_38352 = state_38285__$1;
(statearr_38310_38352[(1)] = (13));

} else {
var statearr_38311_38353 = state_38285__$1;
(statearr_38311_38353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (12))){
var inst_38213 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38312_38354 = state_38285__$1;
(statearr_38312_38354[(2)] = inst_38213);

(statearr_38312_38354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (2))){
var inst_38200 = (state_38285[(10)]);
var inst_38200__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38285__$1 = (function (){var statearr_38313 = state_38285;
(statearr_38313[(10)] = inst_38200__$1);

return statearr_38313;
})();
if(cljs.core.truth_(inst_38200__$1)){
var statearr_38314_38355 = state_38285__$1;
(statearr_38314_38355[(1)] = (5));

} else {
var statearr_38315_38356 = state_38285__$1;
(statearr_38315_38356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (23))){
var inst_38243 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38243)){
var statearr_38316_38357 = state_38285__$1;
(statearr_38316_38357[(1)] = (25));

} else {
var statearr_38317_38358 = state_38285__$1;
(statearr_38317_38358[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (35))){
var state_38285__$1 = state_38285;
var statearr_38318_38359 = state_38285__$1;
(statearr_38318_38359[(2)] = null);

(statearr_38318_38359[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (19))){
var inst_38238 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38238)){
var statearr_38319_38360 = state_38285__$1;
(statearr_38319_38360[(1)] = (22));

} else {
var statearr_38320_38361 = state_38285__$1;
(statearr_38320_38361[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (11))){
var inst_38209 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38321_38362 = state_38285__$1;
(statearr_38321_38362[(2)] = inst_38209);

(statearr_38321_38362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (9))){
var inst_38211 = figwheel.client.heads_up.clear.call(null);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(12),inst_38211);
} else {
if((state_val_38286 === (5))){
var inst_38202 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38285__$1 = state_38285;
var statearr_38322_38363 = state_38285__$1;
(statearr_38322_38363[(2)] = inst_38202);

(statearr_38322_38363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (14))){
var inst_38229 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38229)){
var statearr_38323_38364 = state_38285__$1;
(statearr_38323_38364[(1)] = (18));

} else {
var statearr_38324_38365 = state_38285__$1;
(statearr_38324_38365[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (26))){
var inst_38255 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38285__$1 = state_38285;
if(cljs.core.truth_(inst_38255)){
var statearr_38325_38366 = state_38285__$1;
(statearr_38325_38366[(1)] = (30));

} else {
var statearr_38326_38367 = state_38285__$1;
(statearr_38326_38367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (16))){
var inst_38221 = (state_38285[(2)]);
var inst_38222 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38223 = figwheel.client.heads_up.display_exception.call(null,inst_38222);
var state_38285__$1 = (function (){var statearr_38327 = state_38285;
(statearr_38327[(13)] = inst_38221);

return statearr_38327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(17),inst_38223);
} else {
if((state_val_38286 === (30))){
var inst_38257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38258 = figwheel.client.heads_up.display_warning.call(null,inst_38257);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(33),inst_38258);
} else {
if((state_val_38286 === (10))){
var inst_38215 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38328_38368 = state_38285__$1;
(statearr_38328_38368[(2)] = inst_38215);

(statearr_38328_38368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (18))){
var inst_38231 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38232 = figwheel.client.heads_up.display_exception.call(null,inst_38231);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(21),inst_38232);
} else {
if((state_val_38286 === (37))){
var inst_38268 = (state_38285[(2)]);
var state_38285__$1 = state_38285;
var statearr_38329_38369 = state_38285__$1;
(statearr_38329_38369[(2)] = inst_38268);

(statearr_38329_38369[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38286 === (8))){
var inst_38207 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38285__$1 = state_38285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38285__$1,(11),inst_38207);
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
});})(c__30623__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30535__auto__,c__30623__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____0 = (function (){
var statearr_38330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38330[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__);

(statearr_38330[(1)] = (1));

return statearr_38330;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____1 = (function (state_38285){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_38285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e38331){if((e38331 instanceof Object)){
var ex__30539__auto__ = e38331;
var statearr_38332_38370 = state_38285;
(statearr_38332_38370[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38371 = state_38285;
state_38285 = G__38371;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__ = function(state_38285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____1.call(this,state_38285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__,msg_hist,msg_names,msg))
})();
var state__30625__auto__ = (function (){var statearr_38333 = f__30624__auto__.call(null);
(statearr_38333[(6)] = c__30623__auto__);

return statearr_38333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__,msg_hist,msg_names,msg))
);

return c__30623__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30623__auto___38400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___38400,ch){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___38400,ch){
return (function (state_38386){
var state_val_38387 = (state_38386[(1)]);
if((state_val_38387 === (1))){
var state_38386__$1 = state_38386;
var statearr_38388_38401 = state_38386__$1;
(statearr_38388_38401[(2)] = null);

(statearr_38388_38401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38387 === (2))){
var state_38386__$1 = state_38386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38386__$1,(4),ch);
} else {
if((state_val_38387 === (3))){
var inst_38384 = (state_38386[(2)]);
var state_38386__$1 = state_38386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38386__$1,inst_38384);
} else {
if((state_val_38387 === (4))){
var inst_38374 = (state_38386[(7)]);
var inst_38374__$1 = (state_38386[(2)]);
var state_38386__$1 = (function (){var statearr_38389 = state_38386;
(statearr_38389[(7)] = inst_38374__$1);

return statearr_38389;
})();
if(cljs.core.truth_(inst_38374__$1)){
var statearr_38390_38402 = state_38386__$1;
(statearr_38390_38402[(1)] = (5));

} else {
var statearr_38391_38403 = state_38386__$1;
(statearr_38391_38403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38387 === (5))){
var inst_38374 = (state_38386[(7)]);
var inst_38376 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38374);
var state_38386__$1 = state_38386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38386__$1,(8),inst_38376);
} else {
if((state_val_38387 === (6))){
var state_38386__$1 = state_38386;
var statearr_38392_38404 = state_38386__$1;
(statearr_38392_38404[(2)] = null);

(statearr_38392_38404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38387 === (7))){
var inst_38382 = (state_38386[(2)]);
var state_38386__$1 = state_38386;
var statearr_38393_38405 = state_38386__$1;
(statearr_38393_38405[(2)] = inst_38382);

(statearr_38393_38405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38387 === (8))){
var inst_38378 = (state_38386[(2)]);
var state_38386__$1 = (function (){var statearr_38394 = state_38386;
(statearr_38394[(8)] = inst_38378);

return statearr_38394;
})();
var statearr_38395_38406 = state_38386__$1;
(statearr_38395_38406[(2)] = null);

(statearr_38395_38406[(1)] = (2));


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
});})(c__30623__auto___38400,ch))
;
return ((function (switch__30535__auto__,c__30623__auto___38400,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30536__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30536__auto____0 = (function (){
var statearr_38396 = [null,null,null,null,null,null,null,null,null];
(statearr_38396[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30536__auto__);

(statearr_38396[(1)] = (1));

return statearr_38396;
});
var figwheel$client$heads_up_plugin_$_state_machine__30536__auto____1 = (function (state_38386){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_38386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e38397){if((e38397 instanceof Object)){
var ex__30539__auto__ = e38397;
var statearr_38398_38407 = state_38386;
(statearr_38398_38407[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38408 = state_38386;
state_38386 = G__38408;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30536__auto__ = function(state_38386){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30536__auto____1.call(this,state_38386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30536__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30536__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___38400,ch))
})();
var state__30625__auto__ = (function (){var statearr_38399 = f__30624__auto__.call(null);
(statearr_38399[(6)] = c__30623__auto___38400);

return statearr_38399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___38400,ch))
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_38414){
var state_val_38415 = (state_38414[(1)]);
if((state_val_38415 === (1))){
var inst_38409 = cljs.core.async.timeout.call(null,(3000));
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38414__$1,(2),inst_38409);
} else {
if((state_val_38415 === (2))){
var inst_38411 = (state_38414[(2)]);
var inst_38412 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38414__$1 = (function (){var statearr_38416 = state_38414;
(statearr_38416[(7)] = inst_38411);

return statearr_38416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38414__$1,inst_38412);
} else {
return null;
}
}
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____0 = (function (){
var statearr_38417 = [null,null,null,null,null,null,null,null];
(statearr_38417[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__);

(statearr_38417[(1)] = (1));

return statearr_38417;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____1 = (function (state_38414){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_38414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e38418){if((e38418 instanceof Object)){
var ex__30539__auto__ = e38418;
var statearr_38419_38421 = state_38414;
(statearr_38419_38421[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38422 = state_38414;
state_38414 = G__38422;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__ = function(state_38414){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____1.call(this,state_38414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30536__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_38420 = f__30624__auto__.call(null);
(statearr_38420[(6)] = c__30623__auto__);

return statearr_38420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38429){
var state_val_38430 = (state_38429[(1)]);
if((state_val_38430 === (1))){
var inst_38423 = cljs.core.async.timeout.call(null,(2000));
var state_38429__$1 = state_38429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38429__$1,(2),inst_38423);
} else {
if((state_val_38430 === (2))){
var inst_38425 = (state_38429[(2)]);
var inst_38426 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38427 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38426);
var state_38429__$1 = (function (){var statearr_38431 = state_38429;
(statearr_38431[(7)] = inst_38425);

return statearr_38431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38429__$1,inst_38427);
} else {
return null;
}
}
});})(c__30623__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____0 = (function (){
var statearr_38432 = [null,null,null,null,null,null,null,null];
(statearr_38432[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__);

(statearr_38432[(1)] = (1));

return statearr_38432;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____1 = (function (state_38429){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_38429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e38433){if((e38433 instanceof Object)){
var ex__30539__auto__ = e38433;
var statearr_38434_38436 = state_38429;
(statearr_38434_38436[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38437 = state_38429;
state_38429 = G__38437;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__ = function(state_38429){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____1.call(this,state_38429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30625__auto__ = (function (){var statearr_38435 = f__30624__auto__.call(null);
(statearr_38435[(6)] = c__30623__auto__);

return statearr_38435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__,figwheel_version,temp__4657__auto__))
);

return c__30623__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38438){
var map__38439 = p__38438;
var map__38439__$1 = ((((!((map__38439 == null)))?((((map__38439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38439):map__38439);
var file = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38441 = "";
var G__38441__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38441),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38441);
var G__38441__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38441__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38441__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38441__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38441__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38442){
var map__38443 = p__38442;
var map__38443__$1 = ((((!((map__38443 == null)))?((((map__38443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38443):map__38443);
var ed = map__38443__$1;
var formatted_exception = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38445_38449 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38446_38450 = null;
var count__38447_38451 = (0);
var i__38448_38452 = (0);
while(true){
if((i__38448_38452 < count__38447_38451)){
var msg_38453 = cljs.core._nth.call(null,chunk__38446_38450,i__38448_38452);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38453);

var G__38454 = seq__38445_38449;
var G__38455 = chunk__38446_38450;
var G__38456 = count__38447_38451;
var G__38457 = (i__38448_38452 + (1));
seq__38445_38449 = G__38454;
chunk__38446_38450 = G__38455;
count__38447_38451 = G__38456;
i__38448_38452 = G__38457;
continue;
} else {
var temp__4657__auto___38458 = cljs.core.seq.call(null,seq__38445_38449);
if(temp__4657__auto___38458){
var seq__38445_38459__$1 = temp__4657__auto___38458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38445_38459__$1)){
var c__28034__auto___38460 = cljs.core.chunk_first.call(null,seq__38445_38459__$1);
var G__38461 = cljs.core.chunk_rest.call(null,seq__38445_38459__$1);
var G__38462 = c__28034__auto___38460;
var G__38463 = cljs.core.count.call(null,c__28034__auto___38460);
var G__38464 = (0);
seq__38445_38449 = G__38461;
chunk__38446_38450 = G__38462;
count__38447_38451 = G__38463;
i__38448_38452 = G__38464;
continue;
} else {
var msg_38465 = cljs.core.first.call(null,seq__38445_38459__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38465);

var G__38466 = cljs.core.next.call(null,seq__38445_38459__$1);
var G__38467 = null;
var G__38468 = (0);
var G__38469 = (0);
seq__38445_38449 = G__38466;
chunk__38446_38450 = G__38467;
count__38447_38451 = G__38468;
i__38448_38452 = G__38469;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38470){
var map__38471 = p__38470;
var map__38471__$1 = ((((!((map__38471 == null)))?((((map__38471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38471):map__38471);
var w = map__38471__$1;
var message = cljs.core.get.call(null,map__38471__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38473 = cljs.core.seq.call(null,plugins);
var chunk__38474 = null;
var count__38475 = (0);
var i__38476 = (0);
while(true){
if((i__38476 < count__38475)){
var vec__38477 = cljs.core._nth.call(null,chunk__38474,i__38476);
var k = cljs.core.nth.call(null,vec__38477,(0),null);
var plugin = cljs.core.nth.call(null,vec__38477,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38483 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38473,chunk__38474,count__38475,i__38476,pl_38483,vec__38477,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38483.call(null,msg_hist);
});})(seq__38473,chunk__38474,count__38475,i__38476,pl_38483,vec__38477,k,plugin))
);
} else {
}

var G__38484 = seq__38473;
var G__38485 = chunk__38474;
var G__38486 = count__38475;
var G__38487 = (i__38476 + (1));
seq__38473 = G__38484;
chunk__38474 = G__38485;
count__38475 = G__38486;
i__38476 = G__38487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38473);
if(temp__4657__auto__){
var seq__38473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38473__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38473__$1);
var G__38488 = cljs.core.chunk_rest.call(null,seq__38473__$1);
var G__38489 = c__28034__auto__;
var G__38490 = cljs.core.count.call(null,c__28034__auto__);
var G__38491 = (0);
seq__38473 = G__38488;
chunk__38474 = G__38489;
count__38475 = G__38490;
i__38476 = G__38491;
continue;
} else {
var vec__38480 = cljs.core.first.call(null,seq__38473__$1);
var k = cljs.core.nth.call(null,vec__38480,(0),null);
var plugin = cljs.core.nth.call(null,vec__38480,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38492 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38473,chunk__38474,count__38475,i__38476,pl_38492,vec__38480,k,plugin,seq__38473__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38492.call(null,msg_hist);
});})(seq__38473,chunk__38474,count__38475,i__38476,pl_38492,vec__38480,k,plugin,seq__38473__$1,temp__4657__auto__))
);
} else {
}

var G__38493 = cljs.core.next.call(null,seq__38473__$1);
var G__38494 = null;
var G__38495 = (0);
var G__38496 = (0);
seq__38473 = G__38493;
chunk__38474 = G__38494;
count__38475 = G__38495;
i__38476 = G__38496;
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
var G__38498 = arguments.length;
switch (G__38498) {
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

var seq__38499_38504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38500_38505 = null;
var count__38501_38506 = (0);
var i__38502_38507 = (0);
while(true){
if((i__38502_38507 < count__38501_38506)){
var msg_38508 = cljs.core._nth.call(null,chunk__38500_38505,i__38502_38507);
figwheel.client.socket.handle_incoming_message.call(null,msg_38508);

var G__38509 = seq__38499_38504;
var G__38510 = chunk__38500_38505;
var G__38511 = count__38501_38506;
var G__38512 = (i__38502_38507 + (1));
seq__38499_38504 = G__38509;
chunk__38500_38505 = G__38510;
count__38501_38506 = G__38511;
i__38502_38507 = G__38512;
continue;
} else {
var temp__4657__auto___38513 = cljs.core.seq.call(null,seq__38499_38504);
if(temp__4657__auto___38513){
var seq__38499_38514__$1 = temp__4657__auto___38513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38499_38514__$1)){
var c__28034__auto___38515 = cljs.core.chunk_first.call(null,seq__38499_38514__$1);
var G__38516 = cljs.core.chunk_rest.call(null,seq__38499_38514__$1);
var G__38517 = c__28034__auto___38515;
var G__38518 = cljs.core.count.call(null,c__28034__auto___38515);
var G__38519 = (0);
seq__38499_38504 = G__38516;
chunk__38500_38505 = G__38517;
count__38501_38506 = G__38518;
i__38502_38507 = G__38519;
continue;
} else {
var msg_38520 = cljs.core.first.call(null,seq__38499_38514__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38520);

var G__38521 = cljs.core.next.call(null,seq__38499_38514__$1);
var G__38522 = null;
var G__38523 = (0);
var G__38524 = (0);
seq__38499_38504 = G__38521;
chunk__38500_38505 = G__38522;
count__38501_38506 = G__38523;
i__38502_38507 = G__38524;
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
var len__28364__auto___38529 = arguments.length;
var i__28365__auto___38530 = (0);
while(true){
if((i__28365__auto___38530 < len__28364__auto___38529)){
args__28371__auto__.push((arguments[i__28365__auto___38530]));

var G__38531 = (i__28365__auto___38530 + (1));
i__28365__auto___38530 = G__38531;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38526){
var map__38527 = p__38526;
var map__38527__$1 = ((((!((map__38527 == null)))?((((map__38527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38527):map__38527);
var opts = map__38527__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38525){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38532){if((e38532 instanceof Error)){
var e = e38532;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38532;

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
return (function (p__38533){
var map__38534 = p__38533;
var map__38534__$1 = ((((!((map__38534 == null)))?((((map__38534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38534):map__38534);
var msg_name = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515855014386
