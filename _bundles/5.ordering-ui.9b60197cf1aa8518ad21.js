(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[5],{646:function(e,t,r){"use strict";r.r(t),r.d(t,"remoteMiddlewares",(function(){return s}));var n=r(4),i=r(76),a=r(140),c=r(62);function s(e,t,r){var s;return Object(n.b)(this,void 0,void 0,(function(){var o,u,d,l,b=this;return Object(n.d)(this,(function(w){switch(w.label){case 0:return Object(i.b)()?[2,[]]:(o=Object(c.b)(),u=null!==(s=t.enabledMiddleware)&&void 0!==s?s:{},d=Object.entries(u).filter((function(e){e[0];return e[1]})).map((function(e){return e[0]})),l=d.map((function(t){return Object(n.b)(b,void 0,void 0,(function(){var i,c,s,u;return Object(n.d)(this,(function(n){switch(n.label){case 0:i=t.replace("@segment/",""),c=i,r&&(c=btoa(i).replace(/=/g,"")),s=o+"/middleware/"+c+"/latest/"+c+".js.gz",n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(a.a)(s)];case 2:return n.sent(),[2,window[i+"Middleware"]];case 3:return u=n.sent(),e.log("error",u),e.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(l)]);case 1:return[2,w.sent().filter(Boolean)]}}))}))}}}]);