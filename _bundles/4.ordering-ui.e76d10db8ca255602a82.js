(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[4],{539:function(r,a,e){"use strict";function s(r,a){return Object.keys(a).reduce((function(e,s){s.startsWith(r)&&(e[s.substr(r.length)]=a[s]);return e}),{})}e.r(a),e.d(a,"queryString",(function(){return i}));var t=e(156);function i(r,a){var e=document.createElement("a");e.href=a;var i=e.search.slice(1).split("&").reduce((function(r,a){var e=a.split("="),s=e[0],i=e[1];return r[s]=Object(t.a)(i),r}),{}),n=[],u=i.ajs_uid,c=i.ajs_event;if(i.ajs_aid){var d=Array.isArray(i.ajs_aid)?i.ajs_aid[0]:i.ajs_aid;r.setAnonymousId(d)}if(u){var j=Array.isArray(i.ajs_uid)?i.ajs_uid[0]:i.ajs_uid,_=s("ajs_trait_",i);n.push(r.identify(j,_))}if(c){var o=Array.isArray(i.ajs_event)?i.ajs_event[0]:i.ajs_event,f=s("ajs_prop_",i);n.push(r.track(o,f))}return Promise.all(n)}}}]);