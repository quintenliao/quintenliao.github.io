// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../var/document","../var/isFunction","./var/rsingleTag","../traversing/findFilter"],function(e,t,i,n){"use strict";var r,s=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,f=e.fn.init=function(f,u,l){var h,o;if(!f){return this}l=l||r;if(typeof f==="string"){if(f[0]==="<"&&f[f.length-1]===">"&&f.length>=3){h=[null,f,null]}else{h=s.exec(f)}if(h&&(h[1]||!u)){if(h[1]){u=u instanceof e?u[0]:u;e.merge(this,e.parseHTML(h[1],u&&u.nodeType?u.ownerDocument||u:t,true));if(n.test(h[1])&&e.isPlainObject(u)){for(h in u){if(i(this[h])){this[h](u[h])}else{this.attr(h,u[h])}}}return this}else{o=t.getElementById(h[2]);if(o){this[0]=o;this.length=1}return this}}else if(!u||u.jquery){return(u||l).find(f)}else{return this.constructor(u).find(f)}}else if(f.nodeType){this[0]=f;this.length=1;return this}else if(i(f)){return l.ready!==undefined?l.ready(f):f(e)}return e.makeArray(f,this)};f.prototype=e.fn;r=e(t);return f});
//rebuild by neat 