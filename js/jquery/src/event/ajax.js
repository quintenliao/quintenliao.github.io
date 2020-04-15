// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../event"],function(a){"use strict";a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){a.fn[n]=function(a){return this.on(n,a)}})});
//rebuild by neat 