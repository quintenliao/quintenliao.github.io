// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../var/documentElement","../selector"],function(e,n){"use strict";var o=function(n){return e.contains(n.ownerDocument,n)},t={composed:true};if(n.getRootNode){o=function(n){return e.contains(n.ownerDocument,n)||n.getRootNode(t)===n.ownerDocument}}return o});
//rebuild by neat 