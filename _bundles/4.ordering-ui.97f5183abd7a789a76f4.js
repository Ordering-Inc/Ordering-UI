(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[4],{800:function(r,e,t){"use strict";function a(r,e){return Object.keys(e).reduce((function(t,a){a.startsWith(r)&&(t[a.substr(r.length)]=e[a]);return t}),{})}t.r(e),t.d(e,"queryString",(function(){return n}));var i=t(248),s=t(87);function n(r,e){var t=document.createElement("a");t.href=e;var n=t.search.slice(1).split("&").reduce((function(r,e){var t=e.split("="),a=t[0],s=t[1];return r[a]=Object(i.a)(s),r}),{}),u=[],d=n.ajs_uid,o=n.ajs_event,c=n.ajs_aid,j=Object(s.d)(r.options.useQueryString)?r.options.useQueryString:{},_=j.aid,v=void 0===_?/.+/:_,p=j.uid,f=void 0===p?/.+/:p;if(c){var y=Array.isArray(n.ajs_aid)?n.ajs_aid[0]:n.ajs_aid;v.test(y)&&r.setAnonymousId(y)}if(d){var h=Array.isArray(n.ajs_uid)?n.ajs_uid[0]:n.ajs_uid;if(f.test(h)){var l=a("ajs_trait_",n);u.push(r.identify(h,l))}}if(o){var A=Array.isArray(n.ajs_event)?n.ajs_event[0]:n.ajs_event,b=a("ajs_prop_",n);u.push(r.track(A,b))}return Promise.all(u)}}}]);