// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../var/document","../var/support"],function(e,r){"use strict";r.createHTMLDocument=function(){var r=e.implementation.createHTMLDocument("").body;r.innerHTML="<form></form><form></form>";return r.childNodes.length===2}();return r});
//rebuild by neat 