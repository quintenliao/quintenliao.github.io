// build time:Wed Apr 15 2020 21:36:38 GMT+0800 (GMT+08:00)
define(["../core","../core/toType","../var/isFunction"],function(e,r,n){"use strict";var t=function(i,u,f,l,c,o,a){var s=0,d=i.length,v=f==null;if(r(f)==="object"){c=true;for(s in f){t(i,u,s,f[s],true,o,a)}}else if(l!==undefined){c=true;if(!n(l)){a=true}if(v){if(a){u.call(i,l);u=null}else{v=u;u=function(r,n,t){return v.call(e(r),t)}}}if(u){for(;s<d;s++){u(i[s],f,a?l:l.call(i[s],s,u(i[s],f)))}}}if(c){return i}if(v){return u.call(i)}return d?u(i[0],f):o};return t});
//rebuild by neat 