// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('meeting.events');
goog.require('meeting.routes');
goog.require('meeting.views');
goog.require('meeting.config');
meeting.core.dev_setup = (function meeting$core$dev_setup(){
if(meeting.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
meeting.core.mount_root = (function meeting$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.main_panel], null),document.getElementById("app"));
});
meeting.core.init = (function meeting$core$init(){
meeting.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988)], null));

meeting.core.dev_setup.call(null);

return meeting.core.mount_root.call(null);
});
goog.exportSymbol('meeting.core.init', meeting.core.init);
meeting.core.dispatch_timer_event = (function meeting$core$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536)], null));
});
if(typeof meeting.core.do_timer !== 'undefined'){
} else {
meeting.core.do_timer = setInterval(meeting.core.dispatch_timer_event,(1000));
}

//# sourceMappingURL=core.js.map?rel=1516054981030
