// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__28372__auto__ = [];
var len__28365__auto___37861 = arguments.length;
var i__28366__auto___37862 = (0);
while(true){
if((i__28366__auto___37862 < len__28365__auto___37861)){
args__28372__auto__.push((arguments[i__28366__auto___37862]));

var G__37863 = (i__28366__auto___37862 + (1));
i__28366__auto___37862 = G__37863;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((2) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28373__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37853_37864 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37854_37865 = null;
var count__37855_37866 = (0);
var i__37856_37867 = (0);
while(true){
if((i__37856_37867 < count__37855_37866)){
var k_37868 = cljs.core._nth.call(null,chunk__37854_37865,i__37856_37867);
e.setAttribute(cljs.core.name.call(null,k_37868),cljs.core.get.call(null,attrs,k_37868));

var G__37869 = seq__37853_37864;
var G__37870 = chunk__37854_37865;
var G__37871 = count__37855_37866;
var G__37872 = (i__37856_37867 + (1));
seq__37853_37864 = G__37869;
chunk__37854_37865 = G__37870;
count__37855_37866 = G__37871;
i__37856_37867 = G__37872;
continue;
} else {
var temp__4657__auto___37873 = cljs.core.seq.call(null,seq__37853_37864);
if(temp__4657__auto___37873){
var seq__37853_37874__$1 = temp__4657__auto___37873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853_37874__$1)){
var c__28035__auto___37875 = cljs.core.chunk_first.call(null,seq__37853_37874__$1);
var G__37876 = cljs.core.chunk_rest.call(null,seq__37853_37874__$1);
var G__37877 = c__28035__auto___37875;
var G__37878 = cljs.core.count.call(null,c__28035__auto___37875);
var G__37879 = (0);
seq__37853_37864 = G__37876;
chunk__37854_37865 = G__37877;
count__37855_37866 = G__37878;
i__37856_37867 = G__37879;
continue;
} else {
var k_37880 = cljs.core.first.call(null,seq__37853_37874__$1);
e.setAttribute(cljs.core.name.call(null,k_37880),cljs.core.get.call(null,attrs,k_37880));

var G__37881 = cljs.core.next.call(null,seq__37853_37874__$1);
var G__37882 = null;
var G__37883 = (0);
var G__37884 = (0);
seq__37853_37864 = G__37881;
chunk__37854_37865 = G__37882;
count__37855_37866 = G__37883;
i__37856_37867 = G__37884;
continue;
}
} else {
}
}
break;
}

var seq__37857_37885 = cljs.core.seq.call(null,children);
var chunk__37858_37886 = null;
var count__37859_37887 = (0);
var i__37860_37888 = (0);
while(true){
if((i__37860_37888 < count__37859_37887)){
var ch_37889 = cljs.core._nth.call(null,chunk__37858_37886,i__37860_37888);
e.appendChild(ch_37889);

var G__37890 = seq__37857_37885;
var G__37891 = chunk__37858_37886;
var G__37892 = count__37859_37887;
var G__37893 = (i__37860_37888 + (1));
seq__37857_37885 = G__37890;
chunk__37858_37886 = G__37891;
count__37859_37887 = G__37892;
i__37860_37888 = G__37893;
continue;
} else {
var temp__4657__auto___37894 = cljs.core.seq.call(null,seq__37857_37885);
if(temp__4657__auto___37894){
var seq__37857_37895__$1 = temp__4657__auto___37894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37857_37895__$1)){
var c__28035__auto___37896 = cljs.core.chunk_first.call(null,seq__37857_37895__$1);
var G__37897 = cljs.core.chunk_rest.call(null,seq__37857_37895__$1);
var G__37898 = c__28035__auto___37896;
var G__37899 = cljs.core.count.call(null,c__28035__auto___37896);
var G__37900 = (0);
seq__37857_37885 = G__37897;
chunk__37858_37886 = G__37898;
count__37859_37887 = G__37899;
i__37860_37888 = G__37900;
continue;
} else {
var ch_37901 = cljs.core.first.call(null,seq__37857_37895__$1);
e.appendChild(ch_37901);

var G__37902 = cljs.core.next.call(null,seq__37857_37895__$1);
var G__37903 = null;
var G__37904 = (0);
var G__37905 = (0);
seq__37857_37885 = G__37902;
chunk__37858_37886 = G__37903;
count__37859_37887 = G__37904;
i__37860_37888 = G__37905;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37850){
var G__37851 = cljs.core.first.call(null,seq37850);
var seq37850__$1 = cljs.core.next.call(null,seq37850);
var G__37852 = cljs.core.first.call(null,seq37850__$1);
var seq37850__$2 = cljs.core.next.call(null,seq37850__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37851,G__37852,seq37850__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__28151__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28152__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28153__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28154__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28155__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__28151__auto__,prefer_table__28152__auto__,method_cache__28153__auto__,cached_hierarchy__28154__auto__,hierarchy__28155__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__28151__auto__,prefer_table__28152__auto__,method_cache__28153__auto__,cached_hierarchy__28154__auto__,hierarchy__28155__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28155__auto__,method_table__28151__auto__,prefer_table__28152__auto__,method_cache__28153__auto__,cached_hierarchy__28154__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_37906 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_37906.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37906.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37906.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37906);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37907,st_map){
var map__37908 = p__37907;
var map__37908__$1 = ((((!((map__37908 == null)))?((((map__37908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37908):map__37908);
var container_el = cljs.core.get.call(null,map__37908__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37908,map__37908__$1,container_el){
return (function (p__37910){
var vec__37911 = p__37910;
var k = cljs.core.nth.call(null,vec__37911,(0),null);
var v = cljs.core.nth.call(null,vec__37911,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__37908,map__37908__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37914,dom_str){
var map__37915 = p__37914;
var map__37915__$1 = ((((!((map__37915 == null)))?((((map__37915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37915):map__37915);
var c = map__37915__$1;
var content_area_el = cljs.core.get.call(null,map__37915__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37917){
var map__37918 = p__37917;
var map__37918__$1 = ((((!((map__37918 == null)))?((((map__37918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37918):map__37918);
var content_area_el = cljs.core.get.call(null,map__37918__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_37935){
var state_val_37936 = (state_37935[(1)]);
if((state_val_37936 === (1))){
var inst_37920 = (state_37935[(7)]);
var inst_37920__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37921 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37922 = ["10px","10px","100%","68px","1.0"];
var inst_37923 = cljs.core.PersistentHashMap.fromArrays(inst_37921,inst_37922);
var inst_37924 = cljs.core.merge.call(null,inst_37923,style);
var inst_37925 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37920__$1,inst_37924);
var inst_37926 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37920__$1,msg);
var inst_37927 = cljs.core.async.timeout.call(null,(300));
var state_37935__$1 = (function (){var statearr_37937 = state_37935;
(statearr_37937[(7)] = inst_37920__$1);

(statearr_37937[(8)] = inst_37926);

(statearr_37937[(9)] = inst_37925);

return statearr_37937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37935__$1,(2),inst_37927);
} else {
if((state_val_37936 === (2))){
var inst_37920 = (state_37935[(7)]);
var inst_37929 = (state_37935[(2)]);
var inst_37930 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37931 = ["auto"];
var inst_37932 = cljs.core.PersistentHashMap.fromArrays(inst_37930,inst_37931);
var inst_37933 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37920,inst_37932);
var state_37935__$1 = (function (){var statearr_37938 = state_37935;
(statearr_37938[(10)] = inst_37929);

return statearr_37938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37935__$1,inst_37933);
} else {
return null;
}
}
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____0 = (function (){
var statearr_37939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37939[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__);

(statearr_37939[(1)] = (1));

return statearr_37939;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____1 = (function (state_37935){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37940){if((e37940 instanceof Object)){
var ex__30541__auto__ = e37940;
var statearr_37941_37943 = state_37935;
(statearr_37941_37943[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37944 = state_37935;
state_37935 = G__37944;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__ = function(state_37935){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____1.call(this,state_37935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_37942 = f__30626__auto__.call(null);
(statearr_37942[(6)] = c__30625__auto__);

return statearr_37942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__37946 = arguments.length;
switch (G__37946) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__37948){
var map__37949 = p__37948;
var map__37949__$1 = ((((!((map__37949 == null)))?((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);
var file = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__27196__auto__ = file;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__37951){
var vec__37952 = p__37951;
var typ = cljs.core.nth.call(null,vec__37952,(0),null);
var line_number = cljs.core.nth.call(null,vec__37952,(1),null);
var line = cljs.core.nth.call(null,vec__37952,(2),null);
var pred__37955 = cljs.core._EQ_;
var expr__37956 = typ;
if(cljs.core.truth_(pred__37955.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__37956))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__37955.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__37956))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__37955.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__37956))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__37958_SHARP_){
return cljs.core.update_in.call(null,p1__37958_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__37959_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__37959_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__37962){
var map__37963 = p__37962;
var map__37963__$1 = ((((!((map__37963 == null)))?((((map__37963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37963):map__37963);
var exception = map__37963__$1;
var message = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__27184__auto__ = file;
if(cljs.core.truth_(and__27184__auto__)){
return line;
} else {
return and__27184__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37963,map__37963__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37960_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37960_SHARP_),"</div>"].join('');
});})(last_message,map__37963,map__37963__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__37963,map__37963__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37961_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__37961_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__37961_SHARP_)))].join('');
});})(last_message,map__37963,map__37963__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__37965){
var map__37966 = p__37965;
var map__37966__$1 = ((((!((map__37966 == null)))?((((map__37966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37966):map__37966);
var file = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__37969 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__37969__$1 = ((((!((map__37969 == null)))?((((map__37969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37969):map__37969);
var head = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__37972){
var map__37973 = p__37972;
var map__37973__$1 = ((((!((map__37973 == null)))?((((map__37973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37973):map__37973);
var warning_data = map__37973__$1;
var file = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__27184__auto__ = file;
if(cljs.core.truth_(and__27184__auto__)){
return line;
} else {
return and__27184__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37973,map__37973__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__37971_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37971_SHARP_),"</div>"].join('');
});})(last_message,map__37973,map__37973__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__37975 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__37975__$1 = ((((!((map__37975 == null)))?((((map__37975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37975):map__37975);
var head = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__37977){
var map__37978 = p__37977;
var map__37978__$1 = ((((!((map__37978 == null)))?((((map__37978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37978):map__37978);
var warning_data = map__37978__$1;
var message = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37978__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37980 = message;
var G__37980__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37980)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37980);
var G__37980__$2 = (cljs.core.truth_((function (){var and__27184__auto__ = line;
if(cljs.core.truth_(and__27184__auto__)){
return column;
} else {
return and__27184__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37980__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__37980__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37980__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__37980__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__37981){
var map__37982 = p__37981;
var map__37982__$1 = ((((!((map__37982 == null)))?((((map__37982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37982):map__37982);
var warning_data = map__37982__$1;
var message = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__37984 = figwheel.client.heads_up.ensure_container.call(null);
var map__37984__$1 = ((((!((map__37984 == null)))?((((map__37984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37984):map__37984);
var content_area_el = cljs.core.get.call(null,map__37984__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_38003){
var state_val_38004 = (state_38003[(1)]);
if((state_val_38004 === (1))){
var inst_37986 = (state_38003[(7)]);
var inst_37986__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37987 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37988 = ["0.0"];
var inst_37989 = cljs.core.PersistentHashMap.fromArrays(inst_37987,inst_37988);
var inst_37990 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37986__$1,inst_37989);
var inst_37991 = cljs.core.async.timeout.call(null,(300));
var state_38003__$1 = (function (){var statearr_38005 = state_38003;
(statearr_38005[(7)] = inst_37986__$1);

(statearr_38005[(8)] = inst_37990);

return statearr_38005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38003__$1,(2),inst_37991);
} else {
if((state_val_38004 === (2))){
var inst_37986 = (state_38003[(7)]);
var inst_37993 = (state_38003[(2)]);
var inst_37994 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37995 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37996 = cljs.core.PersistentHashMap.fromArrays(inst_37994,inst_37995);
var inst_37997 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37986,inst_37996);
var inst_37998 = cljs.core.async.timeout.call(null,(200));
var state_38003__$1 = (function (){var statearr_38006 = state_38003;
(statearr_38006[(9)] = inst_37997);

(statearr_38006[(10)] = inst_37993);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38003__$1,(3),inst_37998);
} else {
if((state_val_38004 === (3))){
var inst_37986 = (state_38003[(7)]);
var inst_38000 = (state_38003[(2)]);
var inst_38001 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37986,"");
var state_38003__$1 = (function (){var statearr_38007 = state_38003;
(statearr_38007[(11)] = inst_38000);

return statearr_38007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38003__$1,inst_38001);
} else {
return null;
}
}
}
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__30538__auto____0 = (function (){
var statearr_38008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38008[(0)] = figwheel$client$heads_up$clear_$_state_machine__30538__auto__);

(statearr_38008[(1)] = (1));

return statearr_38008;
});
var figwheel$client$heads_up$clear_$_state_machine__30538__auto____1 = (function (state_38003){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38009){if((e38009 instanceof Object)){
var ex__30541__auto__ = e38009;
var statearr_38010_38012 = state_38003;
(statearr_38010_38012[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38013 = state_38003;
state_38003 = G__38013;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__30538__auto__ = function(state_38003){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__30538__auto____1.call(this,state_38003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__30538__auto____0;
figwheel$client$heads_up$clear_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__30538__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38011 = f__30626__auto__.call(null);
(statearr_38011[(6)] = c__30625__auto__);

return statearr_38011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_38024){
var state_val_38025 = (state_38024[(1)]);
if((state_val_38025 === (1))){
var inst_38014 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38024__$1,(2),inst_38014);
} else {
if((state_val_38025 === (2))){
var inst_38016 = (state_38024[(2)]);
var inst_38017 = cljs.core.async.timeout.call(null,(400));
var state_38024__$1 = (function (){var statearr_38026 = state_38024;
(statearr_38026[(7)] = inst_38016);

return statearr_38026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38024__$1,(3),inst_38017);
} else {
if((state_val_38025 === (3))){
var inst_38019 = (state_38024[(2)]);
var inst_38020 = figwheel.client.heads_up.clear.call(null);
var state_38024__$1 = (function (){var statearr_38027 = state_38024;
(statearr_38027[(8)] = inst_38019);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38024__$1,(4),inst_38020);
} else {
if((state_val_38025 === (4))){
var inst_38022 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38024__$1,inst_38022);
} else {
return null;
}
}
}
}
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____0 = (function (){
var statearr_38028 = [null,null,null,null,null,null,null,null,null];
(statearr_38028[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__);

(statearr_38028[(1)] = (1));

return statearr_38028;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____1 = (function (state_38024){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_38024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e38029){if((e38029 instanceof Object)){
var ex__30541__auto__ = e38029;
var statearr_38030_38032 = state_38024;
(statearr_38030_38032[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_38024;
state_38024 = G__38033;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__ = function(state_38024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____1.call(this,state_38024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_38031 = f__30626__auto__.call(null);
(statearr_38031[(6)] = c__30625__auto__);

return statearr_38031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1514660154474
