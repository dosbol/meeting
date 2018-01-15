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
}catch (e38106){if((e38106 instanceof Error)){
var e = e38106;
return "Error: Unable to stringify";
} else {
throw e38106;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38109 = arguments.length;
switch (G__38109) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38107_SHARP_){
if(typeof p1__38107_SHARP_ === 'string'){
return p1__38107_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38107_SHARP_);
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
var len__28364__auto___38112 = arguments.length;
var i__28365__auto___38113 = (0);
while(true){
if((i__28365__auto___38113 < len__28364__auto___38112)){
args__28371__auto__.push((arguments[i__28365__auto___38113]));

var G__38114 = (i__28365__auto___38113 + (1));
i__28365__auto___38113 = G__38114;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38111){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38111));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38116 = arguments.length;
var i__28365__auto___38117 = (0);
while(true){
if((i__28365__auto___38117 < len__28364__auto___38116)){
args__28371__auto__.push((arguments[i__28365__auto___38117]));

var G__38118 = (i__28365__auto___38117 + (1));
i__28365__auto___38117 = G__38118;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38115){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38115));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38119){
var map__38120 = p__38119;
var map__38120__$1 = ((((!((map__38120 == null)))?((((map__38120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38120):map__38120);
var message = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38120__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30624__auto___38199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38199,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38199,ch){
return (function (state_38171){
var state_val_38172 = (state_38171[(1)]);
if((state_val_38172 === (7))){
var inst_38167 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38173_38200 = state_38171__$1;
(statearr_38173_38200[(2)] = inst_38167);

(statearr_38173_38200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (1))){
var state_38171__$1 = state_38171;
var statearr_38174_38201 = state_38171__$1;
(statearr_38174_38201[(2)] = null);

(statearr_38174_38201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (4))){
var inst_38124 = (state_38171[(7)]);
var inst_38124__$1 = (state_38171[(2)]);
var state_38171__$1 = (function (){var statearr_38175 = state_38171;
(statearr_38175[(7)] = inst_38124__$1);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38124__$1)){
var statearr_38176_38202 = state_38171__$1;
(statearr_38176_38202[(1)] = (5));

} else {
var statearr_38177_38203 = state_38171__$1;
(statearr_38177_38203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (15))){
var inst_38131 = (state_38171[(8)]);
var inst_38146 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38131);
var inst_38147 = cljs.core.first.call(null,inst_38146);
var inst_38148 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38147);
var inst_38149 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38148)].join('');
var inst_38150 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38149);
var state_38171__$1 = state_38171;
var statearr_38178_38204 = state_38171__$1;
(statearr_38178_38204[(2)] = inst_38150);

(statearr_38178_38204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (13))){
var inst_38155 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38179_38205 = state_38171__$1;
(statearr_38179_38205[(2)] = inst_38155);

(statearr_38179_38205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (6))){
var state_38171__$1 = state_38171;
var statearr_38180_38206 = state_38171__$1;
(statearr_38180_38206[(2)] = null);

(statearr_38180_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (17))){
var inst_38153 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38181_38207 = state_38171__$1;
(statearr_38181_38207[(2)] = inst_38153);

(statearr_38181_38207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (3))){
var inst_38169 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38171__$1,inst_38169);
} else {
if((state_val_38172 === (12))){
var inst_38130 = (state_38171[(9)]);
var inst_38144 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38130,opts);
var state_38171__$1 = state_38171;
if(cljs.core.truth_(inst_38144)){
var statearr_38182_38208 = state_38171__$1;
(statearr_38182_38208[(1)] = (15));

} else {
var statearr_38183_38209 = state_38171__$1;
(statearr_38183_38209[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (2))){
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38171__$1,(4),ch);
} else {
if((state_val_38172 === (11))){
var inst_38131 = (state_38171[(8)]);
var inst_38136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38137 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38131);
var inst_38138 = cljs.core.async.timeout.call(null,(1000));
var inst_38139 = [inst_38137,inst_38138];
var inst_38140 = (new cljs.core.PersistentVector(null,2,(5),inst_38136,inst_38139,null));
var state_38171__$1 = state_38171;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38171__$1,(14),inst_38140);
} else {
if((state_val_38172 === (9))){
var inst_38131 = (state_38171[(8)]);
var inst_38157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38158 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38131);
var inst_38159 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38158);
var inst_38160 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38159)].join('');
var inst_38161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38160);
var state_38171__$1 = (function (){var statearr_38184 = state_38171;
(statearr_38184[(10)] = inst_38157);

return statearr_38184;
})();
var statearr_38185_38210 = state_38171__$1;
(statearr_38185_38210[(2)] = inst_38161);

(statearr_38185_38210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (5))){
var inst_38124 = (state_38171[(7)]);
var inst_38126 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38127 = (new cljs.core.PersistentArrayMap(null,2,inst_38126,null));
var inst_38128 = (new cljs.core.PersistentHashSet(null,inst_38127,null));
var inst_38129 = figwheel.client.focus_msgs.call(null,inst_38128,inst_38124);
var inst_38130 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38129);
var inst_38131 = cljs.core.first.call(null,inst_38129);
var inst_38132 = figwheel.client.autoload_QMARK_.call(null);
var state_38171__$1 = (function (){var statearr_38186 = state_38171;
(statearr_38186[(9)] = inst_38130);

(statearr_38186[(8)] = inst_38131);

return statearr_38186;
})();
if(cljs.core.truth_(inst_38132)){
var statearr_38187_38211 = state_38171__$1;
(statearr_38187_38211[(1)] = (8));

} else {
var statearr_38188_38212 = state_38171__$1;
(statearr_38188_38212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (14))){
var inst_38142 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38189_38213 = state_38171__$1;
(statearr_38189_38213[(2)] = inst_38142);

(statearr_38189_38213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (16))){
var state_38171__$1 = state_38171;
var statearr_38190_38214 = state_38171__$1;
(statearr_38190_38214[(2)] = null);

(statearr_38190_38214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (10))){
var inst_38163 = (state_38171[(2)]);
var state_38171__$1 = (function (){var statearr_38191 = state_38171;
(statearr_38191[(11)] = inst_38163);

return statearr_38191;
})();
var statearr_38192_38215 = state_38171__$1;
(statearr_38192_38215[(2)] = null);

(statearr_38192_38215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (8))){
var inst_38130 = (state_38171[(9)]);
var inst_38134 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38130,opts);
var state_38171__$1 = state_38171;
if(cljs.core.truth_(inst_38134)){
var statearr_38193_38216 = state_38171__$1;
(statearr_38193_38216[(1)] = (11));

} else {
var statearr_38194_38217 = state_38171__$1;
(statearr_38194_38217[(1)] = (12));

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
});})(c__30624__auto___38199,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38199,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1 = (function (state_38171){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__30540__auto__ = e38196;
var statearr_38197_38218 = state_38171;
(statearr_38197_38218[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38219 = state_38171;
state_38171 = G__38219;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = function(state_38171){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1.call(this,state_38171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38199,ch))
})();
var state__30626__auto__ = (function (){var statearr_38198 = f__30625__auto__.call(null);
(statearr_38198[(6)] = c__30624__auto___38199);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38199,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38220_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38220_SHARP_));
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
var base_path_38222 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38222){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38221){if((e38221 instanceof Error)){
var e = e38221;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38222], null));
} else {
var e = e38221;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38222))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38223){
var map__38224 = p__38223;
var map__38224__$1 = ((((!((map__38224 == null)))?((((map__38224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38224):map__38224);
var opts = map__38224__$1;
var build_id = cljs.core.get.call(null,map__38224__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38224,map__38224__$1,opts,build_id){
return (function (p__38226){
var vec__38227 = p__38226;
var seq__38228 = cljs.core.seq.call(null,vec__38227);
var first__38229 = cljs.core.first.call(null,seq__38228);
var seq__38228__$1 = cljs.core.next.call(null,seq__38228);
var map__38230 = first__38229;
var map__38230__$1 = ((((!((map__38230 == null)))?((((map__38230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38230):map__38230);
var msg = map__38230__$1;
var msg_name = cljs.core.get.call(null,map__38230__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38228__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38227,seq__38228,first__38229,seq__38228__$1,map__38230,map__38230__$1,msg,msg_name,_,map__38224,map__38224__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38227,seq__38228,first__38229,seq__38228__$1,map__38230,map__38230__$1,msg,msg_name,_,map__38224,map__38224__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38224,map__38224__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38232){
var vec__38233 = p__38232;
var seq__38234 = cljs.core.seq.call(null,vec__38233);
var first__38235 = cljs.core.first.call(null,seq__38234);
var seq__38234__$1 = cljs.core.next.call(null,seq__38234);
var map__38236 = first__38235;
var map__38236__$1 = ((((!((map__38236 == null)))?((((map__38236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38236):map__38236);
var msg = map__38236__$1;
var msg_name = cljs.core.get.call(null,map__38236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38234__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38238){
var map__38239 = p__38238;
var map__38239__$1 = ((((!((map__38239 == null)))?((((map__38239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38239):map__38239);
var on_compile_warning = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38239,map__38239__$1,on_compile_warning,on_compile_fail){
return (function (p__38241){
var vec__38242 = p__38241;
var seq__38243 = cljs.core.seq.call(null,vec__38242);
var first__38244 = cljs.core.first.call(null,seq__38243);
var seq__38243__$1 = cljs.core.next.call(null,seq__38243);
var map__38245 = first__38244;
var map__38245__$1 = ((((!((map__38245 == null)))?((((map__38245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38245):map__38245);
var msg = map__38245__$1;
var msg_name = cljs.core.get.call(null,map__38245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38243__$1;
var pred__38247 = cljs.core._EQ_;
var expr__38248 = msg_name;
if(cljs.core.truth_(pred__38247.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38248))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38247.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38248))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38239,map__38239__$1,on_compile_warning,on_compile_fail))
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
return (function (state_38337){
var state_val_38338 = (state_38337[(1)]);
if((state_val_38338 === (7))){
var inst_38257 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38257)){
var statearr_38339_38386 = state_38337__$1;
(statearr_38339_38386[(1)] = (8));

} else {
var statearr_38340_38387 = state_38337__$1;
(statearr_38340_38387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (20))){
var inst_38331 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38341_38388 = state_38337__$1;
(statearr_38341_38388[(2)] = inst_38331);

(statearr_38341_38388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (27))){
var inst_38327 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38342_38389 = state_38337__$1;
(statearr_38342_38389[(2)] = inst_38327);

(statearr_38342_38389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (1))){
var inst_38250 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38250)){
var statearr_38343_38390 = state_38337__$1;
(statearr_38343_38390[(1)] = (2));

} else {
var statearr_38344_38391 = state_38337__$1;
(statearr_38344_38391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (24))){
var inst_38329 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38345_38392 = state_38337__$1;
(statearr_38345_38392[(2)] = inst_38329);

(statearr_38345_38392[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (4))){
var inst_38335 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38337__$1,inst_38335);
} else {
if((state_val_38338 === (15))){
var inst_38333 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38346_38393 = state_38337__$1;
(statearr_38346_38393[(2)] = inst_38333);

(statearr_38346_38393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (21))){
var inst_38286 = (state_38337[(2)]);
var inst_38287 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38288 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38287);
var state_38337__$1 = (function (){var statearr_38347 = state_38337;
(statearr_38347[(7)] = inst_38286);

return statearr_38347;
})();
var statearr_38348_38394 = state_38337__$1;
(statearr_38348_38394[(2)] = inst_38288);

(statearr_38348_38394[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (31))){
var inst_38316 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38316)){
var statearr_38349_38395 = state_38337__$1;
(statearr_38349_38395[(1)] = (34));

} else {
var statearr_38350_38396 = state_38337__$1;
(statearr_38350_38396[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (32))){
var inst_38325 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38351_38397 = state_38337__$1;
(statearr_38351_38397[(2)] = inst_38325);

(statearr_38351_38397[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (33))){
var inst_38312 = (state_38337[(2)]);
var inst_38313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38314 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38313);
var state_38337__$1 = (function (){var statearr_38352 = state_38337;
(statearr_38352[(8)] = inst_38312);

return statearr_38352;
})();
var statearr_38353_38398 = state_38337__$1;
(statearr_38353_38398[(2)] = inst_38314);

(statearr_38353_38398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (13))){
var inst_38271 = figwheel.client.heads_up.clear.call(null);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(16),inst_38271);
} else {
if((state_val_38338 === (22))){
var inst_38292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38293 = figwheel.client.heads_up.append_warning_message.call(null,inst_38292);
var state_38337__$1 = state_38337;
var statearr_38354_38399 = state_38337__$1;
(statearr_38354_38399[(2)] = inst_38293);

(statearr_38354_38399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (36))){
var inst_38323 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38355_38400 = state_38337__$1;
(statearr_38355_38400[(2)] = inst_38323);

(statearr_38355_38400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (29))){
var inst_38303 = (state_38337[(2)]);
var inst_38304 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38305 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38304);
var state_38337__$1 = (function (){var statearr_38356 = state_38337;
(statearr_38356[(9)] = inst_38303);

return statearr_38356;
})();
var statearr_38357_38401 = state_38337__$1;
(statearr_38357_38401[(2)] = inst_38305);

(statearr_38357_38401[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (6))){
var inst_38252 = (state_38337[(10)]);
var state_38337__$1 = state_38337;
var statearr_38358_38402 = state_38337__$1;
(statearr_38358_38402[(2)] = inst_38252);

(statearr_38358_38402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (28))){
var inst_38299 = (state_38337[(2)]);
var inst_38300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38301 = figwheel.client.heads_up.display_warning.call(null,inst_38300);
var state_38337__$1 = (function (){var statearr_38359 = state_38337;
(statearr_38359[(11)] = inst_38299);

return statearr_38359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(29),inst_38301);
} else {
if((state_val_38338 === (25))){
var inst_38297 = figwheel.client.heads_up.clear.call(null);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(28),inst_38297);
} else {
if((state_val_38338 === (34))){
var inst_38318 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(37),inst_38318);
} else {
if((state_val_38338 === (17))){
var inst_38277 = (state_38337[(2)]);
var inst_38278 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38279 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38278);
var state_38337__$1 = (function (){var statearr_38360 = state_38337;
(statearr_38360[(12)] = inst_38277);

return statearr_38360;
})();
var statearr_38361_38403 = state_38337__$1;
(statearr_38361_38403[(2)] = inst_38279);

(statearr_38361_38403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (3))){
var inst_38269 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38269)){
var statearr_38362_38404 = state_38337__$1;
(statearr_38362_38404[(1)] = (13));

} else {
var statearr_38363_38405 = state_38337__$1;
(statearr_38363_38405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (12))){
var inst_38265 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38364_38406 = state_38337__$1;
(statearr_38364_38406[(2)] = inst_38265);

(statearr_38364_38406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (2))){
var inst_38252 = (state_38337[(10)]);
var inst_38252__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38337__$1 = (function (){var statearr_38365 = state_38337;
(statearr_38365[(10)] = inst_38252__$1);

return statearr_38365;
})();
if(cljs.core.truth_(inst_38252__$1)){
var statearr_38366_38407 = state_38337__$1;
(statearr_38366_38407[(1)] = (5));

} else {
var statearr_38367_38408 = state_38337__$1;
(statearr_38367_38408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (23))){
var inst_38295 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38295)){
var statearr_38368_38409 = state_38337__$1;
(statearr_38368_38409[(1)] = (25));

} else {
var statearr_38369_38410 = state_38337__$1;
(statearr_38369_38410[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (35))){
var state_38337__$1 = state_38337;
var statearr_38370_38411 = state_38337__$1;
(statearr_38370_38411[(2)] = null);

(statearr_38370_38411[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (19))){
var inst_38290 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38290)){
var statearr_38371_38412 = state_38337__$1;
(statearr_38371_38412[(1)] = (22));

} else {
var statearr_38372_38413 = state_38337__$1;
(statearr_38372_38413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (11))){
var inst_38261 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38373_38414 = state_38337__$1;
(statearr_38373_38414[(2)] = inst_38261);

(statearr_38373_38414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (9))){
var inst_38263 = figwheel.client.heads_up.clear.call(null);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(12),inst_38263);
} else {
if((state_val_38338 === (5))){
var inst_38254 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38337__$1 = state_38337;
var statearr_38374_38415 = state_38337__$1;
(statearr_38374_38415[(2)] = inst_38254);

(statearr_38374_38415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (14))){
var inst_38281 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38281)){
var statearr_38375_38416 = state_38337__$1;
(statearr_38375_38416[(1)] = (18));

} else {
var statearr_38376_38417 = state_38337__$1;
(statearr_38376_38417[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (26))){
var inst_38307 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38337__$1 = state_38337;
if(cljs.core.truth_(inst_38307)){
var statearr_38377_38418 = state_38337__$1;
(statearr_38377_38418[(1)] = (30));

} else {
var statearr_38378_38419 = state_38337__$1;
(statearr_38378_38419[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (16))){
var inst_38273 = (state_38337[(2)]);
var inst_38274 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38275 = figwheel.client.heads_up.display_exception.call(null,inst_38274);
var state_38337__$1 = (function (){var statearr_38379 = state_38337;
(statearr_38379[(13)] = inst_38273);

return statearr_38379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(17),inst_38275);
} else {
if((state_val_38338 === (30))){
var inst_38309 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38310 = figwheel.client.heads_up.display_warning.call(null,inst_38309);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(33),inst_38310);
} else {
if((state_val_38338 === (10))){
var inst_38267 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38380_38420 = state_38337__$1;
(statearr_38380_38420[(2)] = inst_38267);

(statearr_38380_38420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (18))){
var inst_38283 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38284 = figwheel.client.heads_up.display_exception.call(null,inst_38283);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(21),inst_38284);
} else {
if((state_val_38338 === (37))){
var inst_38320 = (state_38337[(2)]);
var state_38337__$1 = state_38337;
var statearr_38381_38421 = state_38337__$1;
(statearr_38381_38421[(2)] = inst_38320);

(statearr_38381_38421[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38338 === (8))){
var inst_38259 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38337__$1 = state_38337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38337__$1,(11),inst_38259);
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
var statearr_38382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38382[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__);

(statearr_38382[(1)] = (1));

return statearr_38382;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1 = (function (state_38337){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38383){if((e38383 instanceof Object)){
var ex__30540__auto__ = e38383;
var statearr_38384_38422 = state_38337;
(statearr_38384_38422[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38423 = state_38337;
state_38337 = G__38423;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__ = function(state_38337){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1.call(this,state_38337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,msg_hist,msg_names,msg))
})();
var state__30626__auto__ = (function (){var statearr_38385 = f__30625__auto__.call(null);
(statearr_38385[(6)] = c__30624__auto__);

return statearr_38385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,msg_hist,msg_names,msg))
);

return c__30624__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30624__auto___38452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38452,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38452,ch){
return (function (state_38438){
var state_val_38439 = (state_38438[(1)]);
if((state_val_38439 === (1))){
var state_38438__$1 = state_38438;
var statearr_38440_38453 = state_38438__$1;
(statearr_38440_38453[(2)] = null);

(statearr_38440_38453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38439 === (2))){
var state_38438__$1 = state_38438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38438__$1,(4),ch);
} else {
if((state_val_38439 === (3))){
var inst_38436 = (state_38438[(2)]);
var state_38438__$1 = state_38438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38438__$1,inst_38436);
} else {
if((state_val_38439 === (4))){
var inst_38426 = (state_38438[(7)]);
var inst_38426__$1 = (state_38438[(2)]);
var state_38438__$1 = (function (){var statearr_38441 = state_38438;
(statearr_38441[(7)] = inst_38426__$1);

return statearr_38441;
})();
if(cljs.core.truth_(inst_38426__$1)){
var statearr_38442_38454 = state_38438__$1;
(statearr_38442_38454[(1)] = (5));

} else {
var statearr_38443_38455 = state_38438__$1;
(statearr_38443_38455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38439 === (5))){
var inst_38426 = (state_38438[(7)]);
var inst_38428 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38426);
var state_38438__$1 = state_38438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38438__$1,(8),inst_38428);
} else {
if((state_val_38439 === (6))){
var state_38438__$1 = state_38438;
var statearr_38444_38456 = state_38438__$1;
(statearr_38444_38456[(2)] = null);

(statearr_38444_38456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38439 === (7))){
var inst_38434 = (state_38438[(2)]);
var state_38438__$1 = state_38438;
var statearr_38445_38457 = state_38438__$1;
(statearr_38445_38457[(2)] = inst_38434);

(statearr_38445_38457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38439 === (8))){
var inst_38430 = (state_38438[(2)]);
var state_38438__$1 = (function (){var statearr_38446 = state_38438;
(statearr_38446[(8)] = inst_38430);

return statearr_38446;
})();
var statearr_38447_38458 = state_38438__$1;
(statearr_38447_38458[(2)] = null);

(statearr_38447_38458[(1)] = (2));


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
});})(c__30624__auto___38452,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38452,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38448 = [null,null,null,null,null,null,null,null,null];
(statearr_38448[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30537__auto__);

(statearr_38448[(1)] = (1));

return statearr_38448;
});
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1 = (function (state_38438){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38449){if((e38449 instanceof Object)){
var ex__30540__auto__ = e38449;
var statearr_38450_38459 = state_38438;
(statearr_38450_38459[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38460 = state_38438;
state_38438 = G__38460;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = function(state_38438){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1.call(this,state_38438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38452,ch))
})();
var state__30626__auto__ = (function (){var statearr_38451 = f__30625__auto__.call(null);
(statearr_38451[(6)] = c__30624__auto___38452);

return statearr_38451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38452,ch))
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
return (function (state_38466){
var state_val_38467 = (state_38466[(1)]);
if((state_val_38467 === (1))){
var inst_38461 = cljs.core.async.timeout.call(null,(3000));
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38466__$1,(2),inst_38461);
} else {
if((state_val_38467 === (2))){
var inst_38463 = (state_38466[(2)]);
var inst_38464 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38466__$1 = (function (){var statearr_38468 = state_38466;
(statearr_38468[(7)] = inst_38463);

return statearr_38468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38466__$1,inst_38464);
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
var statearr_38469 = [null,null,null,null,null,null,null,null];
(statearr_38469[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__);

(statearr_38469[(1)] = (1));

return statearr_38469;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1 = (function (state_38466){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38470){if((e38470 instanceof Object)){
var ex__30540__auto__ = e38470;
var statearr_38471_38473 = state_38466;
(statearr_38471_38473[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38474 = state_38466;
state_38466 = G__38474;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__ = function(state_38466){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1.call(this,state_38466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38472 = f__30625__auto__.call(null);
(statearr_38472[(6)] = c__30624__auto__);

return statearr_38472;
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
return (function (state_38481){
var state_val_38482 = (state_38481[(1)]);
if((state_val_38482 === (1))){
var inst_38475 = cljs.core.async.timeout.call(null,(2000));
var state_38481__$1 = state_38481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38481__$1,(2),inst_38475);
} else {
if((state_val_38482 === (2))){
var inst_38477 = (state_38481[(2)]);
var inst_38478 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38479 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38478);
var state_38481__$1 = (function (){var statearr_38483 = state_38481;
(statearr_38483[(7)] = inst_38477);

return statearr_38483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38481__$1,inst_38479);
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
var statearr_38484 = [null,null,null,null,null,null,null,null];
(statearr_38484[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__);

(statearr_38484[(1)] = (1));

return statearr_38484;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1 = (function (state_38481){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38485){if((e38485 instanceof Object)){
var ex__30540__auto__ = e38485;
var statearr_38486_38488 = state_38481;
(statearr_38486_38488[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38489 = state_38481;
state_38481 = G__38489;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__ = function(state_38481){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1.call(this,state_38481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38487 = f__30625__auto__.call(null);
(statearr_38487[(6)] = c__30624__auto__);

return statearr_38487;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38490){
var map__38491 = p__38490;
var map__38491__$1 = ((((!((map__38491 == null)))?((((map__38491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38491):map__38491);
var file = cljs.core.get.call(null,map__38491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38491__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38491__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38493 = "";
var G__38493__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38493),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38493);
var G__38493__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38493__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38493__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38493__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38493__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38494){
var map__38495 = p__38494;
var map__38495__$1 = ((((!((map__38495 == null)))?((((map__38495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38495):map__38495);
var ed = map__38495__$1;
var formatted_exception = cljs.core.get.call(null,map__38495__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38495__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38495__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38497_38501 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38498_38502 = null;
var count__38499_38503 = (0);
var i__38500_38504 = (0);
while(true){
if((i__38500_38504 < count__38499_38503)){
var msg_38505 = cljs.core._nth.call(null,chunk__38498_38502,i__38500_38504);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38505);

var G__38506 = seq__38497_38501;
var G__38507 = chunk__38498_38502;
var G__38508 = count__38499_38503;
var G__38509 = (i__38500_38504 + (1));
seq__38497_38501 = G__38506;
chunk__38498_38502 = G__38507;
count__38499_38503 = G__38508;
i__38500_38504 = G__38509;
continue;
} else {
var temp__4657__auto___38510 = cljs.core.seq.call(null,seq__38497_38501);
if(temp__4657__auto___38510){
var seq__38497_38511__$1 = temp__4657__auto___38510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38497_38511__$1)){
var c__28034__auto___38512 = cljs.core.chunk_first.call(null,seq__38497_38511__$1);
var G__38513 = cljs.core.chunk_rest.call(null,seq__38497_38511__$1);
var G__38514 = c__28034__auto___38512;
var G__38515 = cljs.core.count.call(null,c__28034__auto___38512);
var G__38516 = (0);
seq__38497_38501 = G__38513;
chunk__38498_38502 = G__38514;
count__38499_38503 = G__38515;
i__38500_38504 = G__38516;
continue;
} else {
var msg_38517 = cljs.core.first.call(null,seq__38497_38511__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38517);

var G__38518 = cljs.core.next.call(null,seq__38497_38511__$1);
var G__38519 = null;
var G__38520 = (0);
var G__38521 = (0);
seq__38497_38501 = G__38518;
chunk__38498_38502 = G__38519;
count__38499_38503 = G__38520;
i__38500_38504 = G__38521;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38522){
var map__38523 = p__38522;
var map__38523__$1 = ((((!((map__38523 == null)))?((((map__38523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38523):map__38523);
var w = map__38523__$1;
var message = cljs.core.get.call(null,map__38523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38525 = cljs.core.seq.call(null,plugins);
var chunk__38526 = null;
var count__38527 = (0);
var i__38528 = (0);
while(true){
if((i__38528 < count__38527)){
var vec__38529 = cljs.core._nth.call(null,chunk__38526,i__38528);
var k = cljs.core.nth.call(null,vec__38529,(0),null);
var plugin = cljs.core.nth.call(null,vec__38529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38535 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38525,chunk__38526,count__38527,i__38528,pl_38535,vec__38529,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38535.call(null,msg_hist);
});})(seq__38525,chunk__38526,count__38527,i__38528,pl_38535,vec__38529,k,plugin))
);
} else {
}

var G__38536 = seq__38525;
var G__38537 = chunk__38526;
var G__38538 = count__38527;
var G__38539 = (i__38528 + (1));
seq__38525 = G__38536;
chunk__38526 = G__38537;
count__38527 = G__38538;
i__38528 = G__38539;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38525);
if(temp__4657__auto__){
var seq__38525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38525__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38525__$1);
var G__38540 = cljs.core.chunk_rest.call(null,seq__38525__$1);
var G__38541 = c__28034__auto__;
var G__38542 = cljs.core.count.call(null,c__28034__auto__);
var G__38543 = (0);
seq__38525 = G__38540;
chunk__38526 = G__38541;
count__38527 = G__38542;
i__38528 = G__38543;
continue;
} else {
var vec__38532 = cljs.core.first.call(null,seq__38525__$1);
var k = cljs.core.nth.call(null,vec__38532,(0),null);
var plugin = cljs.core.nth.call(null,vec__38532,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38525,chunk__38526,count__38527,i__38528,pl_38544,vec__38532,k,plugin,seq__38525__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38544.call(null,msg_hist);
});})(seq__38525,chunk__38526,count__38527,i__38528,pl_38544,vec__38532,k,plugin,seq__38525__$1,temp__4657__auto__))
);
} else {
}

var G__38545 = cljs.core.next.call(null,seq__38525__$1);
var G__38546 = null;
var G__38547 = (0);
var G__38548 = (0);
seq__38525 = G__38545;
chunk__38526 = G__38546;
count__38527 = G__38547;
i__38528 = G__38548;
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
var G__38550 = arguments.length;
switch (G__38550) {
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

var seq__38551_38556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38552_38557 = null;
var count__38553_38558 = (0);
var i__38554_38559 = (0);
while(true){
if((i__38554_38559 < count__38553_38558)){
var msg_38560 = cljs.core._nth.call(null,chunk__38552_38557,i__38554_38559);
figwheel.client.socket.handle_incoming_message.call(null,msg_38560);

var G__38561 = seq__38551_38556;
var G__38562 = chunk__38552_38557;
var G__38563 = count__38553_38558;
var G__38564 = (i__38554_38559 + (1));
seq__38551_38556 = G__38561;
chunk__38552_38557 = G__38562;
count__38553_38558 = G__38563;
i__38554_38559 = G__38564;
continue;
} else {
var temp__4657__auto___38565 = cljs.core.seq.call(null,seq__38551_38556);
if(temp__4657__auto___38565){
var seq__38551_38566__$1 = temp__4657__auto___38565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38551_38566__$1)){
var c__28034__auto___38567 = cljs.core.chunk_first.call(null,seq__38551_38566__$1);
var G__38568 = cljs.core.chunk_rest.call(null,seq__38551_38566__$1);
var G__38569 = c__28034__auto___38567;
var G__38570 = cljs.core.count.call(null,c__28034__auto___38567);
var G__38571 = (0);
seq__38551_38556 = G__38568;
chunk__38552_38557 = G__38569;
count__38553_38558 = G__38570;
i__38554_38559 = G__38571;
continue;
} else {
var msg_38572 = cljs.core.first.call(null,seq__38551_38566__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38572);

var G__38573 = cljs.core.next.call(null,seq__38551_38566__$1);
var G__38574 = null;
var G__38575 = (0);
var G__38576 = (0);
seq__38551_38556 = G__38573;
chunk__38552_38557 = G__38574;
count__38553_38558 = G__38575;
i__38554_38559 = G__38576;
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
var len__28364__auto___38581 = arguments.length;
var i__28365__auto___38582 = (0);
while(true){
if((i__28365__auto___38582 < len__28364__auto___38581)){
args__28371__auto__.push((arguments[i__28365__auto___38582]));

var G__38583 = (i__28365__auto___38582 + (1));
i__28365__auto___38582 = G__38583;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38578){
var map__38579 = p__38578;
var map__38579__$1 = ((((!((map__38579 == null)))?((((map__38579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38579):map__38579);
var opts = map__38579__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38577){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38577));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38584){if((e38584 instanceof Error)){
var e = e38584;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38584;

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
return (function (p__38585){
var map__38586 = p__38585;
var map__38586__$1 = ((((!((map__38586 == null)))?((((map__38586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38586):map__38586);
var msg_name = cljs.core.get.call(null,map__38586__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1516053490168
