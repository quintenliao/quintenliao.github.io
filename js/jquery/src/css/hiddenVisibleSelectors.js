// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../selector"],function(e){"use strict";e.expr.pseudos.hidden=function(t){return!e.expr.pseudos.visible(t)};e.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}});
//rebuild by neat 