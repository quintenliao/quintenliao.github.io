// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core"],function(r){"use strict";r.parseXML=function(e){var n;if(!e||typeof e!=="string"){return null}try{n=(new window.DOMParser).parseFromString(e,"text/xml")}catch(t){n=undefined}if(!n||n.getElementsByTagName("parsererror").length){r.error("Invalid XML: "+e)}return n};return r.parseXML});
//rebuild by neat 