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
}catch (e38040){if((e38040 instanceof Error)){
var e = e38040;
return "Error: Unable to stringify";
} else {
throw e38040;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38043 = arguments.length;
switch (G__38043) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38041_SHARP_){
if(typeof p1__38041_SHARP_ === 'string'){
return p1__38041_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38041_SHARP_);
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
var args__28373__auto__ = [];
var len__28366__auto___38046 = arguments.length;
var i__28367__auto___38047 = (0);
while(true){
if((i__28367__auto___38047 < len__28366__auto___38046)){
args__28373__auto__.push((arguments[i__28367__auto___38047]));

var G__38048 = (i__28367__auto___38047 + (1));
i__28367__auto___38047 = G__38048;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((0) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28374__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38045){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38045));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28373__auto__ = [];
var len__28366__auto___38050 = arguments.length;
var i__28367__auto___38051 = (0);
while(true){
if((i__28367__auto___38051 < len__28366__auto___38050)){
args__28373__auto__.push((arguments[i__28367__auto___38051]));

var G__38052 = (i__28367__auto___38051 + (1));
i__28367__auto___38051 = G__38052;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((0) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28374__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38049){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38049));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38053){
var map__38054 = p__38053;
var map__38054__$1 = ((((!((map__38054 == null)))?((((map__38054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38054):map__38054);
var message = cljs.core.get.call(null,map__38054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38054__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30625__auto___38133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___38133,ch){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___38133,ch){
return (function (state_38105){
var state_val_38106 = (state_38105[(1)]);
if((state_val_38106 === (7))){
var inst_38101 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
var statearr_38107_38134 = state_38105__$1;
(statearr_38107_38134[(2)] = inst_38101);

(statearr_38107_38134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (1))){
var state_38105__$1 = state_38105;
var statearr_38108_38135 = state_38105__$1;
(statearr_38108_38135[(2)] = null);

(statearr_38108_38135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (4))){
var inst_38058 = (state_38105[(7)]);
var inst_38058__$1 = (state_38105[(2)]);
var state_38105__$1 = (function (){var statearr_38109 = state_38105;
(statearr_38109[(7)] = inst_38058__$1);

return statearr_38109;
})();
if(cljs.core.truth_(inst_38058__$1)){
var statearr_38110_38136 = state_38105__$1;
(statearr_38110_38136[(1)] = (5));

} else {
var statearr_38111_38137 = state_38105__$1;
(statearr_38111_38137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (15))){
var inst_38065 = (state_38105[(8)]);
var inst_38080 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38065);
var inst_38081 = cljs.core.first.call(null,inst_38080);
var inst_38082 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38081);
var inst_38083 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38082)].join('');
var inst_38084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38083);
var state_38105__$1 = state_38105;
var statearr_38112_38138 = state_38105__$1;
(statearr_38112_38138[(2)] = inst_38084);

(statearr_38112_38138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (13))){
var inst_38089 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
var statearr_38113_38139 = state_38105__$1;
(statearr_38113_38139[(2)] = inst_38089);

(statearr_38113_38139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (6))){
var state_38105__$1 = state_38105;
var statearr_38114_38140 = state_38105__$1;
(statearr_38114_38140[(2)] = null);

(statearr_38114_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (17))){
var inst_38087 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
var statearr_38115_38141 = state_38105__$1;
(statearr_38115_38141[(2)] = inst_38087);

(statearr_38115_38141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (3))){
var inst_38103 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38105__$1,inst_38103);
} else {
if((state_val_38106 === (12))){
var inst_38064 = (state_38105[(9)]);
var inst_38078 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38064,opts);
var state_38105__$1 = state_38105;
if(cljs.core.truth_(inst_38078)){
var statearr_38116_38142 = state_38105__$1;
(statearr_38116_38142[(1)] = (15));

} else {
var statearr_38117_38143 = state_38105__$1;
(statearr_38117_38143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (2))){
var state_38105__$1 = state_38105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38105__$1,(4),ch);
} else {
if((state_val_38106 === (11))){
var inst_38065 = (state_38105[(8)]);
var inst_38070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38071 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38065);
var inst_38072 = cljs.core.async.timeout.call(null,(1000));
var inst_38073 = [inst_38071,inst_38072];
var inst_38074 = (new cljs.core.PersistentVector(null,2,(5),inst_38070,inst_38073,null));
var state_38105__$1 = state_38105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38105__$1,(14),inst_38074);
} else {
if((state_val_38106 === (9))){
var inst_38065 = (state_38105[(8)]);
var inst_38091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38092 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38065);
var inst_38093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38092);
var inst_38094 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38093)].join('');
var inst_38095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38094);
var state_38105__$1 = (function (){var statearr_38118 = state_38105;
(statearr_38118[(10)] = inst_38091);

return statearr_38118;
})();
var statearr_38119_38144 = state_38105__$1;
(statearr_38119_38144[(2)] = inst_38095);

(statearr_38119_38144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (5))){
var inst_38058 = (state_38105[(7)]);
var inst_38060 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38061 = (new cljs.core.PersistentArrayMap(null,2,inst_38060,null));
var inst_38062 = (new cljs.core.PersistentHashSet(null,inst_38061,null));
var inst_38063 = figwheel.client.focus_msgs.call(null,inst_38062,inst_38058);
var inst_38064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38063);
var inst_38065 = cljs.core.first.call(null,inst_38063);
var inst_38066 = figwheel.client.autoload_QMARK_.call(null);
var state_38105__$1 = (function (){var statearr_38120 = state_38105;
(statearr_38120[(8)] = inst_38065);

(statearr_38120[(9)] = inst_38064);

return statearr_38120;
})();
if(cljs.core.truth_(inst_38066)){
var statearr_38121_38145 = state_38105__$1;
(statearr_38121_38145[(1)] = (8));

} else {
var statearr_38122_38146 = state_38105__$1;
(statearr_38122_38146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (14))){
var inst_38076 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
var statearr_38123_38147 = state_38105__$1;
(statearr_38123_38147[(2)] = inst_38076);

(statearr_38123_38147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (16))){
var state_38105__$1 = state_38105;
var statearr_38124_38148 = state_38105__$1;
(statearr_38124_38148[(2)] = null);

(statearr_38124_38148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (10))){
var inst_38097 = (state_38105[(2)]);
var state_38105__$1 = (function (){var statearr_38125 = state_38105;
(statearr_38125[(11)] = inst_38097);

return statearr_38125;
})();
var statearr_38126_38149 = state_38105__$1;
(statearr_38126_38149[(2)] = null);

(statearr_38126_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (8))){
var inst_38064 = (state_38105[(9)]);
var inst_38068 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38064,opts);
var state_38105__$1 = state_38105;
if(cljs.core.truth_(inst_38068)){
var statearr_38127_38150 = state_38105__$1;
(statearr_38127_38150[(1)] = (11));

} else {
var statearr_38128_38151 = state_38105__$1;
(statearr_38128_38151[(1)] = (12));

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
});})(c__30625__auto___38133,ch))
;
return ((function (switch__30537__auto__,c__30625__auto___38133,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38129[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__);

(statearr_38129[(1)] = (1));

return statearr_38129;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1 = (function (state_38105){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38130){if((e38130 instanceof Object)){
var ex__30541__auto__ = e38130;
var statearr_38131_38152 = state_38105;
(statearr_38131_38152[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38153 = state_38105;
state_38105 = G__38153;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__ = function(state_38105){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1.call(this,state_38105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30538__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___38133,ch))
})();
var state__30627__auto__ = (function (){var statearr_38132 = f__30626__auto__.call(null);
(statearr_38132[(6)] = c__30625__auto___38133);

return statearr_38132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___38133,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38154_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38154_SHARP_));
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
var base_path_38156 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38156){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38155){if((e38155 instanceof Error)){
var e = e38155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38156], null));
} else {
var e = e38155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38156))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38157){
var map__38158 = p__38157;
var map__38158__$1 = ((((!((map__38158 == null)))?((((map__38158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38158):map__38158);
var opts = map__38158__$1;
var build_id = cljs.core.get.call(null,map__38158__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38158,map__38158__$1,opts,build_id){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38161,seq__38162,first__38163,seq__38162__$1,map__38164,map__38164__$1,msg,msg_name,_,map__38158,map__38158__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38161,seq__38162,first__38163,seq__38162__$1,map__38164,map__38164__$1,msg,msg_name,_,map__38158,map__38158__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38158,map__38158__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38166){
var vec__38167 = p__38166;
var seq__38168 = cljs.core.seq.call(null,vec__38167);
var first__38169 = cljs.core.first.call(null,seq__38168);
var seq__38168__$1 = cljs.core.next.call(null,seq__38168);
var map__38170 = first__38169;
var map__38170__$1 = ((((!((map__38170 == null)))?((((map__38170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38170):map__38170);
var msg = map__38170__$1;
var msg_name = cljs.core.get.call(null,map__38170__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38168__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38172){
var map__38173 = p__38172;
var map__38173__$1 = ((((!((map__38173 == null)))?((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38173):map__38173);
var on_compile_warning = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38173,map__38173__$1,on_compile_warning,on_compile_fail){
return (function (p__38175){
var vec__38176 = p__38175;
var seq__38177 = cljs.core.seq.call(null,vec__38176);
var first__38178 = cljs.core.first.call(null,seq__38177);
var seq__38177__$1 = cljs.core.next.call(null,seq__38177);
var map__38179 = first__38178;
var map__38179__$1 = ((((!((map__38179 == null)))?((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38179):map__38179);
var msg = map__38179__$1;
var msg_name = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38177__$1;
var pred__38181 = cljs.core._EQ_;
var expr__38182 = msg_name;
if(cljs.core.truth_(pred__38181.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38182))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38181.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38182))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38173,map__38173__$1,on_compile_warning,on_compile_fail))
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
return (function (state_38271){
var state_val_38272 = (state_38271[(1)]);
if((state_val_38272 === (7))){
var inst_38191 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38191)){
var statearr_38273_38320 = state_38271__$1;
(statearr_38273_38320[(1)] = (8));

} else {
var statearr_38274_38321 = state_38271__$1;
(statearr_38274_38321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (20))){
var inst_38265 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38275_38322 = state_38271__$1;
(statearr_38275_38322[(2)] = inst_38265);

(statearr_38275_38322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (27))){
var inst_38261 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38276_38323 = state_38271__$1;
(statearr_38276_38323[(2)] = inst_38261);

(statearr_38276_38323[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (1))){
var inst_38184 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38184)){
var statearr_38277_38324 = state_38271__$1;
(statearr_38277_38324[(1)] = (2));

} else {
var statearr_38278_38325 = state_38271__$1;
(statearr_38278_38325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (24))){
var inst_38263 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38279_38326 = state_38271__$1;
(statearr_38279_38326[(2)] = inst_38263);

(statearr_38279_38326[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (4))){
var inst_38269 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38271__$1,inst_38269);
} else {
if((state_val_38272 === (15))){
var inst_38267 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38280_38327 = state_38271__$1;
(statearr_38280_38327[(2)] = inst_38267);

(statearr_38280_38327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (21))){
var inst_38220 = (state_38271[(2)]);
var inst_38221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38222 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38221);
var state_38271__$1 = (function (){var statearr_38281 = state_38271;
(statearr_38281[(7)] = inst_38220);

return statearr_38281;
})();
var statearr_38282_38328 = state_38271__$1;
(statearr_38282_38328[(2)] = inst_38222);

(statearr_38282_38328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (31))){
var inst_38250 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38250)){
var statearr_38283_38329 = state_38271__$1;
(statearr_38283_38329[(1)] = (34));

} else {
var statearr_38284_38330 = state_38271__$1;
(statearr_38284_38330[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (32))){
var inst_38259 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38285_38331 = state_38271__$1;
(statearr_38285_38331[(2)] = inst_38259);

(statearr_38285_38331[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (33))){
var inst_38246 = (state_38271[(2)]);
var inst_38247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38248 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38247);
var state_38271__$1 = (function (){var statearr_38286 = state_38271;
(statearr_38286[(8)] = inst_38246);

return statearr_38286;
})();
var statearr_38287_38332 = state_38271__$1;
(statearr_38287_38332[(2)] = inst_38248);

(statearr_38287_38332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (13))){
var inst_38205 = figwheel.client.heads_up.clear.call(null);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(16),inst_38205);
} else {
if((state_val_38272 === (22))){
var inst_38226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38227 = figwheel.client.heads_up.append_warning_message.call(null,inst_38226);
var state_38271__$1 = state_38271;
var statearr_38288_38333 = state_38271__$1;
(statearr_38288_38333[(2)] = inst_38227);

(statearr_38288_38333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (36))){
var inst_38257 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38289_38334 = state_38271__$1;
(statearr_38289_38334[(2)] = inst_38257);

(statearr_38289_38334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (29))){
var inst_38237 = (state_38271[(2)]);
var inst_38238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38239 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38238);
var state_38271__$1 = (function (){var statearr_38290 = state_38271;
(statearr_38290[(9)] = inst_38237);

return statearr_38290;
})();
var statearr_38291_38335 = state_38271__$1;
(statearr_38291_38335[(2)] = inst_38239);

(statearr_38291_38335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (6))){
var inst_38186 = (state_38271[(10)]);
var state_38271__$1 = state_38271;
var statearr_38292_38336 = state_38271__$1;
(statearr_38292_38336[(2)] = inst_38186);

(statearr_38292_38336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (28))){
var inst_38233 = (state_38271[(2)]);
var inst_38234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38235 = figwheel.client.heads_up.display_warning.call(null,inst_38234);
var state_38271__$1 = (function (){var statearr_38293 = state_38271;
(statearr_38293[(11)] = inst_38233);

return statearr_38293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(29),inst_38235);
} else {
if((state_val_38272 === (25))){
var inst_38231 = figwheel.client.heads_up.clear.call(null);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(28),inst_38231);
} else {
if((state_val_38272 === (34))){
var inst_38252 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(37),inst_38252);
} else {
if((state_val_38272 === (17))){
var inst_38211 = (state_38271[(2)]);
var inst_38212 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38213 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38212);
var state_38271__$1 = (function (){var statearr_38294 = state_38271;
(statearr_38294[(12)] = inst_38211);

return statearr_38294;
})();
var statearr_38295_38337 = state_38271__$1;
(statearr_38295_38337[(2)] = inst_38213);

(statearr_38295_38337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (3))){
var inst_38203 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38203)){
var statearr_38296_38338 = state_38271__$1;
(statearr_38296_38338[(1)] = (13));

} else {
var statearr_38297_38339 = state_38271__$1;
(statearr_38297_38339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (12))){
var inst_38199 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38298_38340 = state_38271__$1;
(statearr_38298_38340[(2)] = inst_38199);

(statearr_38298_38340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (2))){
var inst_38186 = (state_38271[(10)]);
var inst_38186__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38271__$1 = (function (){var statearr_38299 = state_38271;
(statearr_38299[(10)] = inst_38186__$1);

return statearr_38299;
})();
if(cljs.core.truth_(inst_38186__$1)){
var statearr_38300_38341 = state_38271__$1;
(statearr_38300_38341[(1)] = (5));

} else {
var statearr_38301_38342 = state_38271__$1;
(statearr_38301_38342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (23))){
var inst_38229 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38229)){
var statearr_38302_38343 = state_38271__$1;
(statearr_38302_38343[(1)] = (25));

} else {
var statearr_38303_38344 = state_38271__$1;
(statearr_38303_38344[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (35))){
var state_38271__$1 = state_38271;
var statearr_38304_38345 = state_38271__$1;
(statearr_38304_38345[(2)] = null);

(statearr_38304_38345[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (19))){
var inst_38224 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38224)){
var statearr_38305_38346 = state_38271__$1;
(statearr_38305_38346[(1)] = (22));

} else {
var statearr_38306_38347 = state_38271__$1;
(statearr_38306_38347[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (11))){
var inst_38195 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38307_38348 = state_38271__$1;
(statearr_38307_38348[(2)] = inst_38195);

(statearr_38307_38348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (9))){
var inst_38197 = figwheel.client.heads_up.clear.call(null);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(12),inst_38197);
} else {
if((state_val_38272 === (5))){
var inst_38188 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38271__$1 = state_38271;
var statearr_38308_38349 = state_38271__$1;
(statearr_38308_38349[(2)] = inst_38188);

(statearr_38308_38349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (14))){
var inst_38215 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38215)){
var statearr_38309_38350 = state_38271__$1;
(statearr_38309_38350[(1)] = (18));

} else {
var statearr_38310_38351 = state_38271__$1;
(statearr_38310_38351[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (26))){
var inst_38241 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38241)){
var statearr_38311_38352 = state_38271__$1;
(statearr_38311_38352[(1)] = (30));

} else {
var statearr_38312_38353 = state_38271__$1;
(statearr_38312_38353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (16))){
var inst_38207 = (state_38271[(2)]);
var inst_38208 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38209 = figwheel.client.heads_up.display_exception.call(null,inst_38208);
var state_38271__$1 = (function (){var statearr_38313 = state_38271;
(statearr_38313[(13)] = inst_38207);

return statearr_38313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(17),inst_38209);
} else {
if((state_val_38272 === (30))){
var inst_38243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38244 = figwheel.client.heads_up.display_warning.call(null,inst_38243);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(33),inst_38244);
} else {
if((state_val_38272 === (10))){
var inst_38201 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38314_38354 = state_38271__$1;
(statearr_38314_38354[(2)] = inst_38201);

(statearr_38314_38354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (18))){
var inst_38217 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38218 = figwheel.client.heads_up.display_exception.call(null,inst_38217);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(21),inst_38218);
} else {
if((state_val_38272 === (37))){
var inst_38254 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38315_38355 = state_38271__$1;
(statearr_38315_38355[(2)] = inst_38254);

(statearr_38315_38355[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (8))){
var inst_38193 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(11),inst_38193);
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
var statearr_38316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38316[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__);

(statearr_38316[(1)] = (1));

return statearr_38316;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1 = (function (state_38271){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38317){if((e38317 instanceof Object)){
var ex__30541__auto__ = e38317;
var statearr_38318_38356 = state_38271;
(statearr_38318_38356[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38357 = state_38271;
state_38271 = G__38357;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__ = function(state_38271){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1.call(this,state_38271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,msg_hist,msg_names,msg))
})();
var state__30627__auto__ = (function (){var statearr_38319 = f__30626__auto__.call(null);
(statearr_38319[(6)] = c__30625__auto__);

return statearr_38319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,msg_hist,msg_names,msg))
);

return c__30625__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30625__auto___38386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___38386,ch){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___38386,ch){
return (function (state_38372){
var state_val_38373 = (state_38372[(1)]);
if((state_val_38373 === (1))){
var state_38372__$1 = state_38372;
var statearr_38374_38387 = state_38372__$1;
(statearr_38374_38387[(2)] = null);

(statearr_38374_38387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (2))){
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38372__$1,(4),ch);
} else {
if((state_val_38373 === (3))){
var inst_38370 = (state_38372[(2)]);
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38372__$1,inst_38370);
} else {
if((state_val_38373 === (4))){
var inst_38360 = (state_38372[(7)]);
var inst_38360__$1 = (state_38372[(2)]);
var state_38372__$1 = (function (){var statearr_38375 = state_38372;
(statearr_38375[(7)] = inst_38360__$1);

return statearr_38375;
})();
if(cljs.core.truth_(inst_38360__$1)){
var statearr_38376_38388 = state_38372__$1;
(statearr_38376_38388[(1)] = (5));

} else {
var statearr_38377_38389 = state_38372__$1;
(statearr_38377_38389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (5))){
var inst_38360 = (state_38372[(7)]);
var inst_38362 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38360);
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38372__$1,(8),inst_38362);
} else {
if((state_val_38373 === (6))){
var state_38372__$1 = state_38372;
var statearr_38378_38390 = state_38372__$1;
(statearr_38378_38390[(2)] = null);

(statearr_38378_38390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (7))){
var inst_38368 = (state_38372[(2)]);
var state_38372__$1 = state_38372;
var statearr_38379_38391 = state_38372__$1;
(statearr_38379_38391[(2)] = inst_38368);

(statearr_38379_38391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (8))){
var inst_38364 = (state_38372[(2)]);
var state_38372__$1 = (function (){var statearr_38380 = state_38372;
(statearr_38380[(8)] = inst_38364);

return statearr_38380;
})();
var statearr_38381_38392 = state_38372__$1;
(statearr_38381_38392[(2)] = null);

(statearr_38381_38392[(1)] = (2));


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
});})(c__30625__auto___38386,ch))
;
return ((function (switch__30537__auto__,c__30625__auto___38386,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0 = (function (){
var statearr_38382 = [null,null,null,null,null,null,null,null,null];
(statearr_38382[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30538__auto__);

(statearr_38382[(1)] = (1));

return statearr_38382;
});
var figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1 = (function (state_38372){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38383){if((e38383 instanceof Object)){
var ex__30541__auto__ = e38383;
var statearr_38384_38393 = state_38372;
(statearr_38384_38393[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38394 = state_38372;
state_38372 = G__38394;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__ = function(state_38372){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1.call(this,state_38372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30538__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30538__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___38386,ch))
})();
var state__30627__auto__ = (function (){var statearr_38385 = f__30626__auto__.call(null);
(statearr_38385[(6)] = c__30625__auto___38386);

return statearr_38385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___38386,ch))
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
return (function (state_38400){
var state_val_38401 = (state_38400[(1)]);
if((state_val_38401 === (1))){
var inst_38395 = cljs.core.async.timeout.call(null,(3000));
var state_38400__$1 = state_38400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38400__$1,(2),inst_38395);
} else {
if((state_val_38401 === (2))){
var inst_38397 = (state_38400[(2)]);
var inst_38398 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38400__$1 = (function (){var statearr_38402 = state_38400;
(statearr_38402[(7)] = inst_38397);

return statearr_38402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38400__$1,inst_38398);
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
var statearr_38403 = [null,null,null,null,null,null,null,null];
(statearr_38403[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__);

(statearr_38403[(1)] = (1));

return statearr_38403;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1 = (function (state_38400){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38404){if((e38404 instanceof Object)){
var ex__30541__auto__ = e38404;
var statearr_38405_38407 = state_38400;
(statearr_38405_38407[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38408 = state_38400;
state_38400 = G__38408;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__ = function(state_38400){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1.call(this,state_38400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30538__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38406 = f__30626__auto__.call(null);
(statearr_38406[(6)] = c__30625__auto__);

return statearr_38406;
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
return (function (state_38415){
var state_val_38416 = (state_38415[(1)]);
if((state_val_38416 === (1))){
var inst_38409 = cljs.core.async.timeout.call(null,(2000));
var state_38415__$1 = state_38415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38415__$1,(2),inst_38409);
} else {
if((state_val_38416 === (2))){
var inst_38411 = (state_38415[(2)]);
var inst_38412 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38413 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38412);
var state_38415__$1 = (function (){var statearr_38417 = state_38415;
(statearr_38417[(7)] = inst_38411);

return statearr_38417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38415__$1,inst_38413);
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
var statearr_38418 = [null,null,null,null,null,null,null,null];
(statearr_38418[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__);

(statearr_38418[(1)] = (1));

return statearr_38418;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1 = (function (state_38415){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38419){if((e38419 instanceof Object)){
var ex__30541__auto__ = e38419;
var statearr_38420_38422 = state_38415;
(statearr_38420_38422[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38423 = state_38415;
state_38415 = G__38423;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__ = function(state_38415){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1.call(this,state_38415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38421 = f__30626__auto__.call(null);
(statearr_38421[(6)] = c__30625__auto__);

return statearr_38421;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38424){
var map__38425 = p__38424;
var map__38425__$1 = ((((!((map__38425 == null)))?((((map__38425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38425):map__38425);
var file = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38427 = "";
var G__38427__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38427),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38427);
var G__38427__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38427__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38427__$1);
if(cljs.core.truth_((function (){var and__27184__auto__ = line;
if(cljs.core.truth_(and__27184__auto__)){
return column;
} else {
return and__27184__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38427__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38427__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38428){
var map__38429 = p__38428;
var map__38429__$1 = ((((!((map__38429 == null)))?((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38429):map__38429);
var ed = map__38429__$1;
var formatted_exception = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38431_38435 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38432_38436 = null;
var count__38433_38437 = (0);
var i__38434_38438 = (0);
while(true){
if((i__38434_38438 < count__38433_38437)){
var msg_38439 = cljs.core._nth.call(null,chunk__38432_38436,i__38434_38438);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38439);

var G__38440 = seq__38431_38435;
var G__38441 = chunk__38432_38436;
var G__38442 = count__38433_38437;
var G__38443 = (i__38434_38438 + (1));
seq__38431_38435 = G__38440;
chunk__38432_38436 = G__38441;
count__38433_38437 = G__38442;
i__38434_38438 = G__38443;
continue;
} else {
var temp__4657__auto___38444 = cljs.core.seq.call(null,seq__38431_38435);
if(temp__4657__auto___38444){
var seq__38431_38445__$1 = temp__4657__auto___38444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38431_38445__$1)){
var c__28035__auto___38446 = cljs.core.chunk_first.call(null,seq__38431_38445__$1);
var G__38447 = cljs.core.chunk_rest.call(null,seq__38431_38445__$1);
var G__38448 = c__28035__auto___38446;
var G__38449 = cljs.core.count.call(null,c__28035__auto___38446);
var G__38450 = (0);
seq__38431_38435 = G__38447;
chunk__38432_38436 = G__38448;
count__38433_38437 = G__38449;
i__38434_38438 = G__38450;
continue;
} else {
var msg_38451 = cljs.core.first.call(null,seq__38431_38445__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38451);

var G__38452 = cljs.core.next.call(null,seq__38431_38445__$1);
var G__38453 = null;
var G__38454 = (0);
var G__38455 = (0);
seq__38431_38435 = G__38452;
chunk__38432_38436 = G__38453;
count__38433_38437 = G__38454;
i__38434_38438 = G__38455;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38456){
var map__38457 = p__38456;
var map__38457__$1 = ((((!((map__38457 == null)))?((((map__38457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38457):map__38457);
var w = map__38457__$1;
var message = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38459 = cljs.core.seq.call(null,plugins);
var chunk__38460 = null;
var count__38461 = (0);
var i__38462 = (0);
while(true){
if((i__38462 < count__38461)){
var vec__38463 = cljs.core._nth.call(null,chunk__38460,i__38462);
var k = cljs.core.nth.call(null,vec__38463,(0),null);
var plugin = cljs.core.nth.call(null,vec__38463,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38469 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38459,chunk__38460,count__38461,i__38462,pl_38469,vec__38463,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38469.call(null,msg_hist);
});})(seq__38459,chunk__38460,count__38461,i__38462,pl_38469,vec__38463,k,plugin))
);
} else {
}

var G__38470 = seq__38459;
var G__38471 = chunk__38460;
var G__38472 = count__38461;
var G__38473 = (i__38462 + (1));
seq__38459 = G__38470;
chunk__38460 = G__38471;
count__38461 = G__38472;
i__38462 = G__38473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38459);
if(temp__4657__auto__){
var seq__38459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38459__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__38459__$1);
var G__38474 = cljs.core.chunk_rest.call(null,seq__38459__$1);
var G__38475 = c__28035__auto__;
var G__38476 = cljs.core.count.call(null,c__28035__auto__);
var G__38477 = (0);
seq__38459 = G__38474;
chunk__38460 = G__38475;
count__38461 = G__38476;
i__38462 = G__38477;
continue;
} else {
var vec__38466 = cljs.core.first.call(null,seq__38459__$1);
var k = cljs.core.nth.call(null,vec__38466,(0),null);
var plugin = cljs.core.nth.call(null,vec__38466,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38478 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38459,chunk__38460,count__38461,i__38462,pl_38478,vec__38466,k,plugin,seq__38459__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38478.call(null,msg_hist);
});})(seq__38459,chunk__38460,count__38461,i__38462,pl_38478,vec__38466,k,plugin,seq__38459__$1,temp__4657__auto__))
);
} else {
}

var G__38479 = cljs.core.next.call(null,seq__38459__$1);
var G__38480 = null;
var G__38481 = (0);
var G__38482 = (0);
seq__38459 = G__38479;
chunk__38460 = G__38480;
count__38461 = G__38481;
i__38462 = G__38482;
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
var G__38484 = arguments.length;
switch (G__38484) {
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

var seq__38485_38490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38486_38491 = null;
var count__38487_38492 = (0);
var i__38488_38493 = (0);
while(true){
if((i__38488_38493 < count__38487_38492)){
var msg_38494 = cljs.core._nth.call(null,chunk__38486_38491,i__38488_38493);
figwheel.client.socket.handle_incoming_message.call(null,msg_38494);

var G__38495 = seq__38485_38490;
var G__38496 = chunk__38486_38491;
var G__38497 = count__38487_38492;
var G__38498 = (i__38488_38493 + (1));
seq__38485_38490 = G__38495;
chunk__38486_38491 = G__38496;
count__38487_38492 = G__38497;
i__38488_38493 = G__38498;
continue;
} else {
var temp__4657__auto___38499 = cljs.core.seq.call(null,seq__38485_38490);
if(temp__4657__auto___38499){
var seq__38485_38500__$1 = temp__4657__auto___38499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38485_38500__$1)){
var c__28035__auto___38501 = cljs.core.chunk_first.call(null,seq__38485_38500__$1);
var G__38502 = cljs.core.chunk_rest.call(null,seq__38485_38500__$1);
var G__38503 = c__28035__auto___38501;
var G__38504 = cljs.core.count.call(null,c__28035__auto___38501);
var G__38505 = (0);
seq__38485_38490 = G__38502;
chunk__38486_38491 = G__38503;
count__38487_38492 = G__38504;
i__38488_38493 = G__38505;
continue;
} else {
var msg_38506 = cljs.core.first.call(null,seq__38485_38500__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38506);

var G__38507 = cljs.core.next.call(null,seq__38485_38500__$1);
var G__38508 = null;
var G__38509 = (0);
var G__38510 = (0);
seq__38485_38490 = G__38507;
chunk__38486_38491 = G__38508;
count__38487_38492 = G__38509;
i__38488_38493 = G__38510;
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
var args__28373__auto__ = [];
var len__28366__auto___38515 = arguments.length;
var i__28367__auto___38516 = (0);
while(true){
if((i__28367__auto___38516 < len__28366__auto___38515)){
args__28373__auto__.push((arguments[i__28367__auto___38516]));

var G__38517 = (i__28367__auto___38516 + (1));
i__28367__auto___38516 = G__38517;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((0) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28374__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38512){
var map__38513 = p__38512;
var map__38513__$1 = ((((!((map__38513 == null)))?((((map__38513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38513):map__38513);
var opts = map__38513__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38511){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38511));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38518){if((e38518 instanceof Error)){
var e = e38518;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38518;

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
return (function (p__38519){
var map__38520 = p__38519;
var map__38520__$1 = ((((!((map__38520 == null)))?((((map__38520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38520):map__38520);
var msg_name = cljs.core.get.call(null,map__38520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515350498687
