// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../deferred"],function(e){"use strict";var n=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;e.Deferred.exceptionHook=function(e,o){if(window.console&&window.console.warn&&e&&n.test(e.name)){window.console.warn("jQuery.Deferred exception: "+e.message,e.stack,o)}}});
//rebuild by neat 