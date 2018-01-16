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
}catch (e38113){if((e38113 instanceof Error)){
var e = e38113;
return "Error: Unable to stringify";
} else {
throw e38113;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38116 = arguments.length;
switch (G__38116) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38114_SHARP_){
if(typeof p1__38114_SHARP_ === 'string'){
return p1__38114_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38114_SHARP_);
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
var len__28364__auto___38119 = arguments.length;
var i__28365__auto___38120 = (0);
while(true){
if((i__28365__auto___38120 < len__28364__auto___38119)){
args__28371__auto__.push((arguments[i__28365__auto___38120]));

var G__38121 = (i__28365__auto___38120 + (1));
i__28365__auto___38120 = G__38121;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38118){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38118));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38123 = arguments.length;
var i__28365__auto___38124 = (0);
while(true){
if((i__28365__auto___38124 < len__28364__auto___38123)){
args__28371__auto__.push((arguments[i__28365__auto___38124]));

var G__38125 = (i__28365__auto___38124 + (1));
i__28365__auto___38124 = G__38125;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38122){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38122));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38126){
var map__38127 = p__38126;
var map__38127__$1 = ((((!((map__38127 == null)))?((((map__38127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38127):map__38127);
var message = cljs.core.get.call(null,map__38127__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38127__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30624__auto___38206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38206,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38206,ch){
return (function (state_38178){
var state_val_38179 = (state_38178[(1)]);
if((state_val_38179 === (7))){
var inst_38174 = (state_38178[(2)]);
var state_38178__$1 = state_38178;
var statearr_38180_38207 = state_38178__$1;
(statearr_38180_38207[(2)] = inst_38174);

(statearr_38180_38207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (1))){
var state_38178__$1 = state_38178;
var statearr_38181_38208 = state_38178__$1;
(statearr_38181_38208[(2)] = null);

(statearr_38181_38208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (4))){
var inst_38131 = (state_38178[(7)]);
var inst_38131__$1 = (state_38178[(2)]);
var state_38178__$1 = (function (){var statearr_38182 = state_38178;
(statearr_38182[(7)] = inst_38131__$1);

return statearr_38182;
})();
if(cljs.core.truth_(inst_38131__$1)){
var statearr_38183_38209 = state_38178__$1;
(statearr_38183_38209[(1)] = (5));

} else {
var statearr_38184_38210 = state_38178__$1;
(statearr_38184_38210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (15))){
var inst_38138 = (state_38178[(8)]);
var inst_38153 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38138);
var inst_38154 = cljs.core.first.call(null,inst_38153);
var inst_38155 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38154);
var inst_38156 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38155)].join('');
var inst_38157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38156);
var state_38178__$1 = state_38178;
var statearr_38185_38211 = state_38178__$1;
(statearr_38185_38211[(2)] = inst_38157);

(statearr_38185_38211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (13))){
var inst_38162 = (state_38178[(2)]);
var state_38178__$1 = state_38178;
var statearr_38186_38212 = state_38178__$1;
(statearr_38186_38212[(2)] = inst_38162);

(statearr_38186_38212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (6))){
var state_38178__$1 = state_38178;
var statearr_38187_38213 = state_38178__$1;
(statearr_38187_38213[(2)] = null);

(statearr_38187_38213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (17))){
var inst_38160 = (state_38178[(2)]);
var state_38178__$1 = state_38178;
var statearr_38188_38214 = state_38178__$1;
(statearr_38188_38214[(2)] = inst_38160);

(statearr_38188_38214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (3))){
var inst_38176 = (state_38178[(2)]);
var state_38178__$1 = state_38178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38178__$1,inst_38176);
} else {
if((state_val_38179 === (12))){
var inst_38137 = (state_38178[(9)]);
var inst_38151 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38137,opts);
var state_38178__$1 = state_38178;
if(cljs.core.truth_(inst_38151)){
var statearr_38189_38215 = state_38178__$1;
(statearr_38189_38215[(1)] = (15));

} else {
var statearr_38190_38216 = state_38178__$1;
(statearr_38190_38216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (2))){
var state_38178__$1 = state_38178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38178__$1,(4),ch);
} else {
if((state_val_38179 === (11))){
var inst_38138 = (state_38178[(8)]);
var inst_38143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38144 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38138);
var inst_38145 = cljs.core.async.timeout.call(null,(1000));
var inst_38146 = [inst_38144,inst_38145];
var inst_38147 = (new cljs.core.PersistentVector(null,2,(5),inst_38143,inst_38146,null));
var state_38178__$1 = state_38178;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38178__$1,(14),inst_38147);
} else {
if((state_val_38179 === (9))){
var inst_38138 = (state_38178[(8)]);
var inst_38164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38165 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38138);
var inst_38166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38165);
var inst_38167 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38166)].join('');
var inst_38168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38167);
var state_38178__$1 = (function (){var statearr_38191 = state_38178;
(statearr_38191[(10)] = inst_38164);

return statearr_38191;
})();
var statearr_38192_38217 = state_38178__$1;
(statearr_38192_38217[(2)] = inst_38168);

(statearr_38192_38217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (5))){
var inst_38131 = (state_38178[(7)]);
var inst_38133 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38134 = (new cljs.core.PersistentArrayMap(null,2,inst_38133,null));
var inst_38135 = (new cljs.core.PersistentHashSet(null,inst_38134,null));
var inst_38136 = figwheel.client.focus_msgs.call(null,inst_38135,inst_38131);
var inst_38137 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38136);
var inst_38138 = cljs.core.first.call(null,inst_38136);
var inst_38139 = figwheel.client.autoload_QMARK_.call(null);
var state_38178__$1 = (function (){var statearr_38193 = state_38178;
(statearr_38193[(9)] = inst_38137);

(statearr_38193[(8)] = inst_38138);

return statearr_38193;
})();
if(cljs.core.truth_(inst_38139)){
var statearr_38194_38218 = state_38178__$1;
(statearr_38194_38218[(1)] = (8));

} else {
var statearr_38195_38219 = state_38178__$1;
(statearr_38195_38219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (14))){
var inst_38149 = (state_38178[(2)]);
var state_38178__$1 = state_38178;
var statearr_38196_38220 = state_38178__$1;
(statearr_38196_38220[(2)] = inst_38149);

(statearr_38196_38220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (16))){
var state_38178__$1 = state_38178;
var statearr_38197_38221 = state_38178__$1;
(statearr_38197_38221[(2)] = null);

(statearr_38197_38221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (10))){
var inst_38170 = (state_38178[(2)]);
var state_38178__$1 = (function (){var statearr_38198 = state_38178;
(statearr_38198[(11)] = inst_38170);

return statearr_38198;
})();
var statearr_38199_38222 = state_38178__$1;
(statearr_38199_38222[(2)] = null);

(statearr_38199_38222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38179 === (8))){
var inst_38137 = (state_38178[(9)]);
var inst_38141 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38137,opts);
var state_38178__$1 = state_38178;
if(cljs.core.truth_(inst_38141)){
var statearr_38200_38223 = state_38178__$1;
(statearr_38200_38223[(1)] = (11));

} else {
var statearr_38201_38224 = state_38178__$1;
(statearr_38201_38224[(1)] = (12));

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
});})(c__30624__auto___38206,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38206,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38202[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__);

(statearr_38202[(1)] = (1));

return statearr_38202;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1 = (function (state_38178){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38203){if((e38203 instanceof Object)){
var ex__30540__auto__ = e38203;
var statearr_38204_38225 = state_38178;
(statearr_38204_38225[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38226 = state_38178;
state_38178 = G__38226;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__ = function(state_38178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1.call(this,state_38178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30537__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38206,ch))
})();
var state__30626__auto__ = (function (){var statearr_38205 = f__30625__auto__.call(null);
(statearr_38205[(6)] = c__30624__auto___38206);

return statearr_38205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38206,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38227_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38227_SHARP_));
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
var base_path_38229 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38229){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38228){if((e38228 instanceof Error)){
var e = e38228;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38229], null));
} else {
var e = e38228;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38229))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38230){
var map__38231 = p__38230;
var map__38231__$1 = ((((!((map__38231 == null)))?((((map__38231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38231):map__38231);
var opts = map__38231__$1;
var build_id = cljs.core.get.call(null,map__38231__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38231,map__38231__$1,opts,build_id){
return (function (p__38233){
var vec__38234 = p__38233;
var seq__38235 = cljs.core.seq.call(null,vec__38234);
var first__38236 = cljs.core.first.call(null,seq__38235);
var seq__38235__$1 = cljs.core.next.call(null,seq__38235);
var map__38237 = first__38236;
var map__38237__$1 = ((((!((map__38237 == null)))?((((map__38237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38237):map__38237);
var msg = map__38237__$1;
var msg_name = cljs.core.get.call(null,map__38237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38235__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38234,seq__38235,first__38236,seq__38235__$1,map__38237,map__38237__$1,msg,msg_name,_,map__38231,map__38231__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38234,seq__38235,first__38236,seq__38235__$1,map__38237,map__38237__$1,msg,msg_name,_,map__38231,map__38231__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38231,map__38231__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38239){
var vec__38240 = p__38239;
var seq__38241 = cljs.core.seq.call(null,vec__38240);
var first__38242 = cljs.core.first.call(null,seq__38241);
var seq__38241__$1 = cljs.core.next.call(null,seq__38241);
var map__38243 = first__38242;
var map__38243__$1 = ((((!((map__38243 == null)))?((((map__38243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38243):map__38243);
var msg = map__38243__$1;
var msg_name = cljs.core.get.call(null,map__38243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38241__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38245){
var map__38246 = p__38245;
var map__38246__$1 = ((((!((map__38246 == null)))?((((map__38246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38246):map__38246);
var on_compile_warning = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38246,map__38246__$1,on_compile_warning,on_compile_fail){
return (function (p__38248){
var vec__38249 = p__38248;
var seq__38250 = cljs.core.seq.call(null,vec__38249);
var first__38251 = cljs.core.first.call(null,seq__38250);
var seq__38250__$1 = cljs.core.next.call(null,seq__38250);
var map__38252 = first__38251;
var map__38252__$1 = ((((!((map__38252 == null)))?((((map__38252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38252):map__38252);
var msg = map__38252__$1;
var msg_name = cljs.core.get.call(null,map__38252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38250__$1;
var pred__38254 = cljs.core._EQ_;
var expr__38255 = msg_name;
if(cljs.core.truth_(pred__38254.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38255))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38254.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38255))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38246,map__38246__$1,on_compile_warning,on_compile_fail))
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
return (function (state_38344){
var state_val_38345 = (state_38344[(1)]);
if((state_val_38345 === (7))){
var inst_38264 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38264)){
var statearr_38346_38393 = state_38344__$1;
(statearr_38346_38393[(1)] = (8));

} else {
var statearr_38347_38394 = state_38344__$1;
(statearr_38347_38394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (20))){
var inst_38338 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38348_38395 = state_38344__$1;
(statearr_38348_38395[(2)] = inst_38338);

(statearr_38348_38395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (27))){
var inst_38334 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38349_38396 = state_38344__$1;
(statearr_38349_38396[(2)] = inst_38334);

(statearr_38349_38396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (1))){
var inst_38257 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38257)){
var statearr_38350_38397 = state_38344__$1;
(statearr_38350_38397[(1)] = (2));

} else {
var statearr_38351_38398 = state_38344__$1;
(statearr_38351_38398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (24))){
var inst_38336 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38352_38399 = state_38344__$1;
(statearr_38352_38399[(2)] = inst_38336);

(statearr_38352_38399[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (4))){
var inst_38342 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38344__$1,inst_38342);
} else {
if((state_val_38345 === (15))){
var inst_38340 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38353_38400 = state_38344__$1;
(statearr_38353_38400[(2)] = inst_38340);

(statearr_38353_38400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (21))){
var inst_38293 = (state_38344[(2)]);
var inst_38294 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38295 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38294);
var state_38344__$1 = (function (){var statearr_38354 = state_38344;
(statearr_38354[(7)] = inst_38293);

return statearr_38354;
})();
var statearr_38355_38401 = state_38344__$1;
(statearr_38355_38401[(2)] = inst_38295);

(statearr_38355_38401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (31))){
var inst_38323 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38323)){
var statearr_38356_38402 = state_38344__$1;
(statearr_38356_38402[(1)] = (34));

} else {
var statearr_38357_38403 = state_38344__$1;
(statearr_38357_38403[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (32))){
var inst_38332 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38358_38404 = state_38344__$1;
(statearr_38358_38404[(2)] = inst_38332);

(statearr_38358_38404[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (33))){
var inst_38319 = (state_38344[(2)]);
var inst_38320 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38321 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38320);
var state_38344__$1 = (function (){var statearr_38359 = state_38344;
(statearr_38359[(8)] = inst_38319);

return statearr_38359;
})();
var statearr_38360_38405 = state_38344__$1;
(statearr_38360_38405[(2)] = inst_38321);

(statearr_38360_38405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (13))){
var inst_38278 = figwheel.client.heads_up.clear.call(null);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(16),inst_38278);
} else {
if((state_val_38345 === (22))){
var inst_38299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38300 = figwheel.client.heads_up.append_warning_message.call(null,inst_38299);
var state_38344__$1 = state_38344;
var statearr_38361_38406 = state_38344__$1;
(statearr_38361_38406[(2)] = inst_38300);

(statearr_38361_38406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (36))){
var inst_38330 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38362_38407 = state_38344__$1;
(statearr_38362_38407[(2)] = inst_38330);

(statearr_38362_38407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (29))){
var inst_38310 = (state_38344[(2)]);
var inst_38311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38312 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38311);
var state_38344__$1 = (function (){var statearr_38363 = state_38344;
(statearr_38363[(9)] = inst_38310);

return statearr_38363;
})();
var statearr_38364_38408 = state_38344__$1;
(statearr_38364_38408[(2)] = inst_38312);

(statearr_38364_38408[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (6))){
var inst_38259 = (state_38344[(10)]);
var state_38344__$1 = state_38344;
var statearr_38365_38409 = state_38344__$1;
(statearr_38365_38409[(2)] = inst_38259);

(statearr_38365_38409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (28))){
var inst_38306 = (state_38344[(2)]);
var inst_38307 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38308 = figwheel.client.heads_up.display_warning.call(null,inst_38307);
var state_38344__$1 = (function (){var statearr_38366 = state_38344;
(statearr_38366[(11)] = inst_38306);

return statearr_38366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(29),inst_38308);
} else {
if((state_val_38345 === (25))){
var inst_38304 = figwheel.client.heads_up.clear.call(null);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(28),inst_38304);
} else {
if((state_val_38345 === (34))){
var inst_38325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(37),inst_38325);
} else {
if((state_val_38345 === (17))){
var inst_38284 = (state_38344[(2)]);
var inst_38285 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38286 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38285);
var state_38344__$1 = (function (){var statearr_38367 = state_38344;
(statearr_38367[(12)] = inst_38284);

return statearr_38367;
})();
var statearr_38368_38410 = state_38344__$1;
(statearr_38368_38410[(2)] = inst_38286);

(statearr_38368_38410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (3))){
var inst_38276 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38276)){
var statearr_38369_38411 = state_38344__$1;
(statearr_38369_38411[(1)] = (13));

} else {
var statearr_38370_38412 = state_38344__$1;
(statearr_38370_38412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (12))){
var inst_38272 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38371_38413 = state_38344__$1;
(statearr_38371_38413[(2)] = inst_38272);

(statearr_38371_38413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (2))){
var inst_38259 = (state_38344[(10)]);
var inst_38259__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38344__$1 = (function (){var statearr_38372 = state_38344;
(statearr_38372[(10)] = inst_38259__$1);

return statearr_38372;
})();
if(cljs.core.truth_(inst_38259__$1)){
var statearr_38373_38414 = state_38344__$1;
(statearr_38373_38414[(1)] = (5));

} else {
var statearr_38374_38415 = state_38344__$1;
(statearr_38374_38415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (23))){
var inst_38302 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38302)){
var statearr_38375_38416 = state_38344__$1;
(statearr_38375_38416[(1)] = (25));

} else {
var statearr_38376_38417 = state_38344__$1;
(statearr_38376_38417[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (35))){
var state_38344__$1 = state_38344;
var statearr_38377_38418 = state_38344__$1;
(statearr_38377_38418[(2)] = null);

(statearr_38377_38418[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (19))){
var inst_38297 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38297)){
var statearr_38378_38419 = state_38344__$1;
(statearr_38378_38419[(1)] = (22));

} else {
var statearr_38379_38420 = state_38344__$1;
(statearr_38379_38420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (11))){
var inst_38268 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38380_38421 = state_38344__$1;
(statearr_38380_38421[(2)] = inst_38268);

(statearr_38380_38421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (9))){
var inst_38270 = figwheel.client.heads_up.clear.call(null);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(12),inst_38270);
} else {
if((state_val_38345 === (5))){
var inst_38261 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38344__$1 = state_38344;
var statearr_38381_38422 = state_38344__$1;
(statearr_38381_38422[(2)] = inst_38261);

(statearr_38381_38422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (14))){
var inst_38288 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38288)){
var statearr_38382_38423 = state_38344__$1;
(statearr_38382_38423[(1)] = (18));

} else {
var statearr_38383_38424 = state_38344__$1;
(statearr_38383_38424[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (26))){
var inst_38314 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38314)){
var statearr_38384_38425 = state_38344__$1;
(statearr_38384_38425[(1)] = (30));

} else {
var statearr_38385_38426 = state_38344__$1;
(statearr_38385_38426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (16))){
var inst_38280 = (state_38344[(2)]);
var inst_38281 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38282 = figwheel.client.heads_up.display_exception.call(null,inst_38281);
var state_38344__$1 = (function (){var statearr_38386 = state_38344;
(statearr_38386[(13)] = inst_38280);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(17),inst_38282);
} else {
if((state_val_38345 === (30))){
var inst_38316 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38317 = figwheel.client.heads_up.display_warning.call(null,inst_38316);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(33),inst_38317);
} else {
if((state_val_38345 === (10))){
var inst_38274 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38387_38427 = state_38344__$1;
(statearr_38387_38427[(2)] = inst_38274);

(statearr_38387_38427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (18))){
var inst_38290 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38291 = figwheel.client.heads_up.display_exception.call(null,inst_38290);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(21),inst_38291);
} else {
if((state_val_38345 === (37))){
var inst_38327 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38388_38428 = state_38344__$1;
(statearr_38388_38428[(2)] = inst_38327);

(statearr_38388_38428[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (8))){
var inst_38266 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(11),inst_38266);
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
var statearr_38389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38389[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__);

(statearr_38389[(1)] = (1));

return statearr_38389;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1 = (function (state_38344){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38390){if((e38390 instanceof Object)){
var ex__30540__auto__ = e38390;
var statearr_38391_38429 = state_38344;
(statearr_38391_38429[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38430 = state_38344;
state_38344 = G__38430;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__ = function(state_38344){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1.call(this,state_38344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,msg_hist,msg_names,msg))
})();
var state__30626__auto__ = (function (){var statearr_38392 = f__30625__auto__.call(null);
(statearr_38392[(6)] = c__30624__auto__);

return statearr_38392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,msg_hist,msg_names,msg))
);

return c__30624__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30624__auto___38459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___38459,ch){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___38459,ch){
return (function (state_38445){
var state_val_38446 = (state_38445[(1)]);
if((state_val_38446 === (1))){
var state_38445__$1 = state_38445;
var statearr_38447_38460 = state_38445__$1;
(statearr_38447_38460[(2)] = null);

(statearr_38447_38460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (2))){
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38445__$1,(4),ch);
} else {
if((state_val_38446 === (3))){
var inst_38443 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38445__$1,inst_38443);
} else {
if((state_val_38446 === (4))){
var inst_38433 = (state_38445[(7)]);
var inst_38433__$1 = (state_38445[(2)]);
var state_38445__$1 = (function (){var statearr_38448 = state_38445;
(statearr_38448[(7)] = inst_38433__$1);

return statearr_38448;
})();
if(cljs.core.truth_(inst_38433__$1)){
var statearr_38449_38461 = state_38445__$1;
(statearr_38449_38461[(1)] = (5));

} else {
var statearr_38450_38462 = state_38445__$1;
(statearr_38450_38462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (5))){
var inst_38433 = (state_38445[(7)]);
var inst_38435 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38433);
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38445__$1,(8),inst_38435);
} else {
if((state_val_38446 === (6))){
var state_38445__$1 = state_38445;
var statearr_38451_38463 = state_38445__$1;
(statearr_38451_38463[(2)] = null);

(statearr_38451_38463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (7))){
var inst_38441 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38452_38464 = state_38445__$1;
(statearr_38452_38464[(2)] = inst_38441);

(statearr_38452_38464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (8))){
var inst_38437 = (state_38445[(2)]);
var state_38445__$1 = (function (){var statearr_38453 = state_38445;
(statearr_38453[(8)] = inst_38437);

return statearr_38453;
})();
var statearr_38454_38465 = state_38445__$1;
(statearr_38454_38465[(2)] = null);

(statearr_38454_38465[(1)] = (2));


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
});})(c__30624__auto___38459,ch))
;
return ((function (switch__30536__auto__,c__30624__auto___38459,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0 = (function (){
var statearr_38455 = [null,null,null,null,null,null,null,null,null];
(statearr_38455[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30537__auto__);

(statearr_38455[(1)] = (1));

return statearr_38455;
});
var figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1 = (function (state_38445){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38456){if((e38456 instanceof Object)){
var ex__30540__auto__ = e38456;
var statearr_38457_38466 = state_38445;
(statearr_38457_38466[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38467 = state_38445;
state_38445 = G__38467;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__ = function(state_38445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1.call(this,state_38445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30537__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___38459,ch))
})();
var state__30626__auto__ = (function (){var statearr_38458 = f__30625__auto__.call(null);
(statearr_38458[(6)] = c__30624__auto___38459);

return statearr_38458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___38459,ch))
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
return (function (state_38473){
var state_val_38474 = (state_38473[(1)]);
if((state_val_38474 === (1))){
var inst_38468 = cljs.core.async.timeout.call(null,(3000));
var state_38473__$1 = state_38473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38473__$1,(2),inst_38468);
} else {
if((state_val_38474 === (2))){
var inst_38470 = (state_38473[(2)]);
var inst_38471 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38473__$1 = (function (){var statearr_38475 = state_38473;
(statearr_38475[(7)] = inst_38470);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38473__$1,inst_38471);
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
var statearr_38476 = [null,null,null,null,null,null,null,null];
(statearr_38476[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__);

(statearr_38476[(1)] = (1));

return statearr_38476;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1 = (function (state_38473){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38477){if((e38477 instanceof Object)){
var ex__30540__auto__ = e38477;
var statearr_38478_38480 = state_38473;
(statearr_38478_38480[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38481 = state_38473;
state_38473 = G__38481;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__ = function(state_38473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1.call(this,state_38473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38479 = f__30625__auto__.call(null);
(statearr_38479[(6)] = c__30624__auto__);

return statearr_38479;
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
return (function (state_38488){
var state_val_38489 = (state_38488[(1)]);
if((state_val_38489 === (1))){
var inst_38482 = cljs.core.async.timeout.call(null,(2000));
var state_38488__$1 = state_38488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38488__$1,(2),inst_38482);
} else {
if((state_val_38489 === (2))){
var inst_38484 = (state_38488[(2)]);
var inst_38485 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38486 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38485);
var state_38488__$1 = (function (){var statearr_38490 = state_38488;
(statearr_38490[(7)] = inst_38484);

return statearr_38490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38488__$1,inst_38486);
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
var statearr_38491 = [null,null,null,null,null,null,null,null];
(statearr_38491[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__);

(statearr_38491[(1)] = (1));

return statearr_38491;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1 = (function (state_38488){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_38488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e38492){if((e38492 instanceof Object)){
var ex__30540__auto__ = e38492;
var statearr_38493_38495 = state_38488;
(statearr_38493_38495[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38496 = state_38488;
state_38488 = G__38496;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__ = function(state_38488){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1.call(this,state_38488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30626__auto__ = (function (){var statearr_38494 = f__30625__auto__.call(null);
(statearr_38494[(6)] = c__30624__auto__);

return statearr_38494;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38497){
var map__38498 = p__38497;
var map__38498__$1 = ((((!((map__38498 == null)))?((((map__38498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38498):map__38498);
var file = cljs.core.get.call(null,map__38498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38500 = "";
var G__38500__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38500),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38500);
var G__38500__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38500__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38500__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38500__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38500__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38501){
var map__38502 = p__38501;
var map__38502__$1 = ((((!((map__38502 == null)))?((((map__38502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38502):map__38502);
var ed = map__38502__$1;
var formatted_exception = cljs.core.get.call(null,map__38502__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38502__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38502__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38504_38508 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38505_38509 = null;
var count__38506_38510 = (0);
var i__38507_38511 = (0);
while(true){
if((i__38507_38511 < count__38506_38510)){
var msg_38512 = cljs.core._nth.call(null,chunk__38505_38509,i__38507_38511);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38512);

var G__38513 = seq__38504_38508;
var G__38514 = chunk__38505_38509;
var G__38515 = count__38506_38510;
var G__38516 = (i__38507_38511 + (1));
seq__38504_38508 = G__38513;
chunk__38505_38509 = G__38514;
count__38506_38510 = G__38515;
i__38507_38511 = G__38516;
continue;
} else {
var temp__4657__auto___38517 = cljs.core.seq.call(null,seq__38504_38508);
if(temp__4657__auto___38517){
var seq__38504_38518__$1 = temp__4657__auto___38517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38504_38518__$1)){
var c__28034__auto___38519 = cljs.core.chunk_first.call(null,seq__38504_38518__$1);
var G__38520 = cljs.core.chunk_rest.call(null,seq__38504_38518__$1);
var G__38521 = c__28034__auto___38519;
var G__38522 = cljs.core.count.call(null,c__28034__auto___38519);
var G__38523 = (0);
seq__38504_38508 = G__38520;
chunk__38505_38509 = G__38521;
count__38506_38510 = G__38522;
i__38507_38511 = G__38523;
continue;
} else {
var msg_38524 = cljs.core.first.call(null,seq__38504_38518__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38524);

var G__38525 = cljs.core.next.call(null,seq__38504_38518__$1);
var G__38526 = null;
var G__38527 = (0);
var G__38528 = (0);
seq__38504_38508 = G__38525;
chunk__38505_38509 = G__38526;
count__38506_38510 = G__38527;
i__38507_38511 = G__38528;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38529){
var map__38530 = p__38529;
var map__38530__$1 = ((((!((map__38530 == null)))?((((map__38530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38530):map__38530);
var w = map__38530__$1;
var message = cljs.core.get.call(null,map__38530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38532 = cljs.core.seq.call(null,plugins);
var chunk__38533 = null;
var count__38534 = (0);
var i__38535 = (0);
while(true){
if((i__38535 < count__38534)){
var vec__38536 = cljs.core._nth.call(null,chunk__38533,i__38535);
var k = cljs.core.nth.call(null,vec__38536,(0),null);
var plugin = cljs.core.nth.call(null,vec__38536,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38532,chunk__38533,count__38534,i__38535,pl_38542,vec__38536,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38542.call(null,msg_hist);
});})(seq__38532,chunk__38533,count__38534,i__38535,pl_38542,vec__38536,k,plugin))
);
} else {
}

var G__38543 = seq__38532;
var G__38544 = chunk__38533;
var G__38545 = count__38534;
var G__38546 = (i__38535 + (1));
seq__38532 = G__38543;
chunk__38533 = G__38544;
count__38534 = G__38545;
i__38535 = G__38546;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38532);
if(temp__4657__auto__){
var seq__38532__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38532__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38532__$1);
var G__38547 = cljs.core.chunk_rest.call(null,seq__38532__$1);
var G__38548 = c__28034__auto__;
var G__38549 = cljs.core.count.call(null,c__28034__auto__);
var G__38550 = (0);
seq__38532 = G__38547;
chunk__38533 = G__38548;
count__38534 = G__38549;
i__38535 = G__38550;
continue;
} else {
var vec__38539 = cljs.core.first.call(null,seq__38532__$1);
var k = cljs.core.nth.call(null,vec__38539,(0),null);
var plugin = cljs.core.nth.call(null,vec__38539,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38551 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38532,chunk__38533,count__38534,i__38535,pl_38551,vec__38539,k,plugin,seq__38532__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38551.call(null,msg_hist);
});})(seq__38532,chunk__38533,count__38534,i__38535,pl_38551,vec__38539,k,plugin,seq__38532__$1,temp__4657__auto__))
);
} else {
}

var G__38552 = cljs.core.next.call(null,seq__38532__$1);
var G__38553 = null;
var G__38554 = (0);
var G__38555 = (0);
seq__38532 = G__38552;
chunk__38533 = G__38553;
count__38534 = G__38554;
i__38535 = G__38555;
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
var G__38557 = arguments.length;
switch (G__38557) {
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

var seq__38558_38563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38559_38564 = null;
var count__38560_38565 = (0);
var i__38561_38566 = (0);
while(true){
if((i__38561_38566 < count__38560_38565)){
var msg_38567 = cljs.core._nth.call(null,chunk__38559_38564,i__38561_38566);
figwheel.client.socket.handle_incoming_message.call(null,msg_38567);

var G__38568 = seq__38558_38563;
var G__38569 = chunk__38559_38564;
var G__38570 = count__38560_38565;
var G__38571 = (i__38561_38566 + (1));
seq__38558_38563 = G__38568;
chunk__38559_38564 = G__38569;
count__38560_38565 = G__38570;
i__38561_38566 = G__38571;
continue;
} else {
var temp__4657__auto___38572 = cljs.core.seq.call(null,seq__38558_38563);
if(temp__4657__auto___38572){
var seq__38558_38573__$1 = temp__4657__auto___38572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38558_38573__$1)){
var c__28034__auto___38574 = cljs.core.chunk_first.call(null,seq__38558_38573__$1);
var G__38575 = cljs.core.chunk_rest.call(null,seq__38558_38573__$1);
var G__38576 = c__28034__auto___38574;
var G__38577 = cljs.core.count.call(null,c__28034__auto___38574);
var G__38578 = (0);
seq__38558_38563 = G__38575;
chunk__38559_38564 = G__38576;
count__38560_38565 = G__38577;
i__38561_38566 = G__38578;
continue;
} else {
var msg_38579 = cljs.core.first.call(null,seq__38558_38573__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38579);

var G__38580 = cljs.core.next.call(null,seq__38558_38573__$1);
var G__38581 = null;
var G__38582 = (0);
var G__38583 = (0);
seq__38558_38563 = G__38580;
chunk__38559_38564 = G__38581;
count__38560_38565 = G__38582;
i__38561_38566 = G__38583;
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
var len__28364__auto___38588 = arguments.length;
var i__28365__auto___38589 = (0);
while(true){
if((i__28365__auto___38589 < len__28364__auto___38588)){
args__28371__auto__.push((arguments[i__28365__auto___38589]));

var G__38590 = (i__28365__auto___38589 + (1));
i__28365__auto___38589 = G__38590;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38585){
var map__38586 = p__38585;
var map__38586__$1 = ((((!((map__38586 == null)))?((((map__38586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38586):map__38586);
var opts = map__38586__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38584){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38584));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38591){if((e38591 instanceof Error)){
var e = e38591;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38591;

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
return (function (p__38592){
var map__38593 = p__38592;
var map__38593__$1 = ((((!((map__38593 == null)))?((((map__38593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38593):map__38593);
var msg_name = cljs.core.get.call(null,map__38593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1516093593483
