// build time:Wed Apr 15 2020 21:36:37 GMT+0800 (GMT+08:00)
define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./var/isFunction","./var/isWindow","./core/DOMEval","./core/toType"],function(r,t,n,e,i,o,u,a,c,f,l,s,h,p,v,g,y){"use strict";var b="3.4.1",m=function(r,t){return new m.fn.init(r,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;m.fn=m.prototype={jquery:b,constructor:m,length:0,toArray:function(){return e.call(this)},get:function(r){if(r==null){return e.call(this)}return r<0?this[r+this.length]:this[r]},pushStack:function(r){var t=m.merge(this.constructor(),r);t.prevObject=this;return t},each:function(r){return m.each(this,r)},map:function(r){return this.pushStack(m.map(this,function(t,n){return r.call(t,n,t)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(r){var t=this.length,n=+r+(r<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:r.sort,splice:r.splice};m.extend=m.fn.extend=function(){var r,t,n,e,i,o,u=arguments[0]||{},a=1,c=arguments.length,f=false;if(typeof u==="boolean"){f=u;u=arguments[a]||{};a++}if(typeof u!=="object"&&!p(u)){u={}}if(a===c){u=this;a--}for(;a<c;a++){if((r=arguments[a])!=null){for(t in r){e=r[t];if(t==="__proto__"||u===e){continue}if(f&&e&&(m.isPlainObject(e)||(i=Array.isArray(e)))){n=u[t];if(i&&!Array.isArray(n)){o=[]}else if(!i&&!m.isPlainObject(n)){o={}}else{o=n}i=false;u[t]=m.extend(f,o,e)}else if(e!==undefined){u[t]=e}}}}return u};m.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:true,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var t,e;if(!r||c.call(r)!=="[object Object]"){return false}t=n(r);if(!t){return true}e=f.call(t,"constructor")&&t.constructor;return typeof e==="function"&&l.call(e)===s},isEmptyObject:function(r){var t;for(t in r){return false}return true},globalEval:function(r,t){g(r,{nonce:t&&t.nonce})},each:function(r,t){var n,e=0;if(j(r)){n=r.length;for(;e<n;e++){if(t.call(r[e],e,r[e])===false){break}}}else{for(e in r){if(t.call(r[e],e,r[e])===false){break}}}return r},trim:function(r){return r==null?"":(r+"").replace(d,"")},makeArray:function(r,t){var n=t||[];if(r!=null){if(j(Object(r))){m.merge(n,typeof r==="string"?[r]:r)}else{o.call(n,r)}}return n},inArray:function(r,t,n){return t==null?-1:u.call(t,r,n)},merge:function(r,t){var n=+t.length,e=0,i=r.length;for(;e<n;e++){r[i++]=t[e]}r.length=i;return r},grep:function(r,t,n){var e,i=[],o=0,u=r.length,a=!n;for(;o<u;o++){e=!t(r[o],o);if(e!==a){i.push(r[o])}}return i},map:function(r,t,n){var e,o,u=0,a=[];if(j(r)){e=r.length;for(;u<e;u++){o=t(r[u],u,n);if(o!=null){a.push(o)}}}else{for(u in r){o=t(r[u],u,n);if(o!=null){a.push(o)}}}return i.apply([],a)},guid:1,support:h});if(typeof Symbol==="function"){m.fn[Symbol.iterator]=r[Symbol.iterator]}m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,t){a["[object "+t+"]"]=t.toLowerCase()});function j(r){var t=!!r&&"length"in r&&r.length,n=y(r);if(p(r)||v(r)){return false}return n==="array"||t===0||typeof t==="number"&&t>0&&t-1 in r}return m});
//rebuild by neat 