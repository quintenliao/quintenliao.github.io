// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../selector","../effects"],function(e){"use strict";e.expr.pseudos.animated=function(t){return e.grep(e.timers,function(e){return t===e.elem}).length}});
//rebuild by neat 