// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../queue","../effects"],function(e){"use strict";e.fn.delay=function(n,t){n=e.fx?e.fx.speeds[n]||n:n;t=t||"fx";return this.queue(t,function(e,t){var u=window.setTimeout(e,n);t.stop=function(){window.clearTimeout(u)}})};return e.fn.delay});
//rebuild by neat 