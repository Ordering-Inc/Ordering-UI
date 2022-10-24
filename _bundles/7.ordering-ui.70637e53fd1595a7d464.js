/*! For license information please see 7.ordering-ui.70637e53fd1595a7d464.js.LICENSE.txt */
(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[7,3],{587:function(t,e,n){"use strict";var r,i=n(623),o=n(627),s=n(628);r=i()?s:o,t.exports=r},588:function(t,e,n){"use strict";function r(t,e){var n,r;return"boolean"==typeof(null==e?void 0:e.enabled)?e.enabled:null===(r=null===(n=null==t?void 0:t.__default)||void 0===n?void 0:n.enabled)||void 0===r||r}n.d(e,"a",(function(){return r}))},589:function(t,e,n){t.exports=function(t,e,n,r,i){for(e=e.split?e.split("."):e,r=0;r<e.length;r++)t=t?t[e[r]]:i;return t===i?n:t}},590:function(t,e,n){"use strict";var r,i=n(619),o=n(634),s=n(635);r=i()?o:s,t.exports=r},591:function(t,e,n){"use strict";var r,i=n(636),o=n(641),s=n(642);r=i()?o:s,t.exports=r},592:function(t,e,n){"use strict";var r=n(644);t.exports=r},593:function(t,e,n){"use strict";n.r(e),n.d(e,"applyDestinationMiddleware",(function(){return u})),n.d(e,"sourceMiddlewarePlugin",(function(){return c}));var r=n(3),i=n(19),o=n(89),s=n(167);function u(t,e,n){return Object(r.b)(this,void 0,void 0,(function(){function i(e,n){return Object(r.b)(this,void 0,void 0,(function(){var i,u,c;return Object(r.d)(this,(function(a){switch(a.label){case 0:return i=!1,u=null,[4,Object(o.a)(n({payload:Object(s.a)(e,{clone:!0,traverse:!1}),integration:t,next:function(t){i=!0,null===t&&(u=null),t&&(u=t.obj)}}))];case 1:return a.sent(),i||null===u||(u.integrations=Object(r.a)(Object(r.a)({},e.integrations),((c={})[t]=!1,c))),[2,u]}}))}))}var u,c,a,f;return Object(r.d)(this,(function(t){switch(t.label){case 0:u=0,c=n,t.label=1;case 1:return u<c.length?(a=c[u],[4,i(e,a)]):[3,4];case 2:if(null===(f=t.sent()))return[2,null];e=f,t.label=3;case 3:return u++,[3,1];case 4:return[2,e]}}))}))}function c(t,e){function n(n){return Object(r.b)(this,void 0,void 0,(function(){var u;return Object(r.d)(this,(function(r){switch(r.label){case 0:return u=!1,[4,Object(o.a)(t({payload:Object(s.a)(n.event,{clone:!0,traverse:!1}),integrations:null!=e?e:{},next:function(t){u=!0,t&&(n.event=t.obj)}}))];case 1:if(r.sent(),!u)throw new i.b({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,n]}}))}))}return{name:"Source Middleware ".concat(t.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(t){return Promise.resolve(t)},track:n,page:n,identify:n,alias:n,group:n}}},594:function(t,e,n){"use strict";var r=Number.POSITIVE_INFINITY;t.exports=r},595:function(t,e,n){"use strict";var r=n(608).NEGATIVE_INFINITY;t.exports=r},596:function(t,e,n){"use strict";t.exports=1023},597:function(t,e,n){"use strict";var r=n(613);t.exports=r},598:function(t,e,n){"use strict";var r=n(614);t.exports=r},599:function(t,e,n){"use strict";var r=n(617);t.exports=r},600:function(t,e,n){"use strict";var r=Object.prototype.toString;t.exports=r},601:function(t,e,n){"use strict";var r=n(664);t.exports=r},602:function(t,e,n){"use strict";var r=n(666);t.exports=r},603:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Store=e.matches=e.transform=void 0;var i=n(604);Object.defineProperty(e,"transform",{enumerable:!0,get:function(){return r(i).default}});var o=n(678);Object.defineProperty(e,"matches",{enumerable:!0,get:function(){return r(o).default}});var s=n(679);Object.defineProperty(e,"Store",{enumerable:!0,get:function(){return r(s).default}})},604:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(605)),o=r(n(589)),s=r(n(606)),u=n(83),c=n(677);function a(t,e){for(var n in e.drop)if(e.drop.hasOwnProperty(n)){var r=""===n?t:(0,o.default)(t,n);if("object"==typeof r&&null!==r)for(var i=0,s=e.drop[n];i<s.length;i++){delete r[s[i]]}}}function f(t,e){for(var n in e.allow)if(e.allow.hasOwnProperty(n)){var r=""===n?t:(0,o.default)(t,n);if("object"==typeof r&&null!==r)for(var i in r)r.hasOwnProperty(i)&&-1===e.allow[n].indexOf(i)&&delete r[i]}}function l(t,e){var n=JSON.parse(JSON.stringify(t));for(var r in e.map)if(e.map.hasOwnProperty(r)){var i=e.map[r],s=r.split("."),a=void 0;if(s.length>1?(s.pop(),a=(0,o.default)(n,s.join("."))):a=t,"object"==typeof a){if(i.copy){var f=(0,o.default)(n,i.copy);void 0!==f&&(0,u.dset)(t,r,f)}else if(i.move){var l=(0,o.default)(n,i.move);void 0!==l&&(0,u.dset)(t,r,l),(0,c.unset)(t,i.move)}else i.hasOwnProperty("set")&&(0,u.dset)(t,r,i.set);if(i.to_string){var p=(0,o.default)(t,r);if("string"==typeof p||"object"==typeof p&&null!==p)continue;void 0!==p?(0,u.dset)(t,r,JSON.stringify(p)):(0,u.dset)(t,r,"undefined")}}}}function p(t,e){return!(e.sample.percent<=0)&&(e.sample.percent>=1||(e.sample.path?function(t,e){var n=(0,o.default)(t,e.sample.path),r=(0,i.default)(JSON.stringify(n)),u=-64,c=[];d(r.slice(0,8),c);for(var a=0,f=0;f<64&&1!==c[f];f++)a++;if(0!==a){var l=[];d(r.slice(9,16),l),u-=a,c.splice(0,a),l.splice(64-a),c=c.concat(l)}return c[63]=0===c[63]?1:0,(0,s.default)(parseInt(c.join(""),2),u)<e.sample.percent}(t,e):(n=e.sample.percent,Math.random()<=n)));var n}function d(t,e){for(var n=0;n<8;n++)for(var r=t[n],i=128;i>=1;i/=2)r-i>=0?(r-=i,e.push(1)):e.push(0)}e.default=function(t,e){for(var n=t,r=0,i=e;r<i.length;r++){var o=i[r];switch(o.type){case"drop":return null;case"drop_properties":a(n,o.config);break;case"allow_properties":f(n,o.config);break;case"sample_event":if(p(n,o.config))break;return null;case"map_properties":l(n,o.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return n}},605:function(t,e,n){"use strict";n.r(e);for(var r=[],i=0;i<64;)r[i]=0|4294967296*Math.sin(++i%Math.PI);e.default=function(t){var e,n,o,s=[e=1732584193,n=4023233417,~e,~n],u=[],c=unescape(encodeURI(t))+"",a=c.length;for(t=--a/4+2|15,u[--t]=8*a;~a;)u[a>>2]|=c.charCodeAt(a)<<8*a--;for(i=c=0;i<t;i+=16){for(a=s;c<64;a=[o=a[3],e+((o=a[0]+[e&n|~e&o,o&e|~o&n,e^n^o,n^(e|~o)][a=c>>4]+r[c]+~~u[i|15&[c,5*c+1,3*c+5,7*c][a]])<<(a=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*a+c++%4])|o>>>-a),e,n])e=0|a[1],n=a[2];for(c=4;c;)s[--c]+=a[c]}for(t="";c<32;)t+=(s[c>>3]>>4*(1^c++)&15).toString(16);return t}},606:function(t,e,n){"use strict";var r=n(607);t.exports=r},607:function(t,e,n){"use strict";var r=n(594),i=n(595),o=n(596),s=n(610),u=n(611),c=n(612),a=n(597),f=n(598),l=n(615),p=n(668),d=n(674),v=n(599),h=n(602),y=[0,0],b=[0,0];t.exports=function(t,e){var n,g;return 0===t||a(t)||f(t)?t:(p(y,t),e+=y[1],(e+=d(t=y[0]))<c?l(0,t):e>s?t<0?i:r:(e<=u?(e+=52,g=2220446049250313e-31):g=1,v(b,t),n=b[0],n&=2148532223,g*h(n|=e+o<<20,b[1])))}},608:function(t,e,n){"use strict";var r=n(609);t.exports=r},609:function(t,e,n){"use strict";t.exports=Number},610:function(t,e,n){"use strict";t.exports=1023},611:function(t,e,n){"use strict";t.exports=-1023},612:function(t,e,n){"use strict";t.exports=-1074},613:function(t,e,n){"use strict";t.exports=function(t){return t!=t}},614:function(t,e,n){"use strict";var r=n(594),i=n(595);t.exports=function(t){return t===r||t===i}},615:function(t,e,n){"use strict";var r=n(616);t.exports=r},616:function(t,e,n){"use strict";var r=n(599),i=n(601),o=n(602),s=[0,0];t.exports=function(t,e){var n,u;return r(s,t),n=s[0],n&=2147483647,u=i(e),o(n|=u&=2147483648,s[1])}},617:function(t,e,n){"use strict";var r=n(618);t.exports=function(t,e){return 1===arguments.length?r([0,0],t):r(t,e)}},618:function(t,e,n){"use strict";var r=n(590),i=n(591),o=n(643),s=new i(1),u=new r(s.buffer),c=o.HIGH,a=o.LOW;t.exports=function(t,e){return s[0]=e,t[0]=u[c],t[1]=u[a],t}},619:function(t,e,n){"use strict";var r=n(620);t.exports=r},620:function(t,e,n){"use strict";var r=n(621),i=n(632),o=n(633);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},621:function(t,e,n){"use strict";var r=n(622);t.exports=r},622:function(t,e,n){"use strict";var r=n(587),i="function"==typeof Uint32Array;t.exports=function(t){return i&&t instanceof Uint32Array||"[object Uint32Array]"===r(t)}},623:function(t,e,n){"use strict";var r=n(624);t.exports=r},624:function(t,e,n){"use strict";var r=n(625)();t.exports=function(){return r&&"symbol"==typeof Symbol.toStringTag}},625:function(t,e,n){"use strict";var r=n(626);t.exports=r},626:function(t,e,n){"use strict";t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},627:function(t,e,n){"use strict";var r=n(600);t.exports=function(t){return r.call(t)}},628:function(t,e,n){"use strict";var r=n(629),i=n(631),o=n(600);t.exports=function(t){var e,n,s;if(null==t)return o.call(t);n=t[i],e=r(t,i);try{t[i]=void 0}catch(e){return o.call(t)}return s=o.call(t),e?t[i]=n:delete t[i],s}},629:function(t,e,n){"use strict";var r=n(630);t.exports=r},630:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},631:function(t,e,n){"use strict";var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},632:function(t,e,n){"use strict";t.exports=4294967295},633:function(t,e,n){"use strict";var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},634:function(t,e,n){"use strict";var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},635:function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},636:function(t,e,n){"use strict";var r=n(637);t.exports=r},637:function(t,e,n){"use strict";var r=n(638),i=n(640);t.exports=function(){var t,e;if("function"!=typeof i)return!1;try{e=new i([1,3.14,-3.14,NaN]),t=r(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}},638:function(t,e,n){"use strict";var r=n(639);t.exports=r},639:function(t,e,n){"use strict";var r=n(587),i="function"==typeof Float64Array;t.exports=function(t){return i&&t instanceof Float64Array||"[object Float64Array]"===r(t)}},640:function(t,e,n){"use strict";var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},641:function(t,e,n){"use strict";var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},642:function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},643:function(t,e,n){"use strict";var r,i,o;!0===n(592)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},644:function(t,e,n){"use strict";var r,i,o=n(645);(i=new o.uint16(1))[0]=4660,r=52===new o.uint8(i.buffer)[0],t.exports=r},645:function(t,e,n){"use strict";var r=n(646),i={uint16:n(655),uint8:r};t.exports=i},646:function(t,e,n){"use strict";var r,i=n(647),o=n(653),s=n(654);r=i()?o:s,t.exports=r},647:function(t,e,n){"use strict";var r=n(648);t.exports=r},648:function(t,e,n){"use strict";var r=n(649),i=n(651),o=n(652);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},649:function(t,e,n){"use strict";var r=n(650);t.exports=r},650:function(t,e,n){"use strict";var r=n(587),i="function"==typeof Uint8Array;t.exports=function(t){return i&&t instanceof Uint8Array||"[object Uint8Array]"===r(t)}},651:function(t,e,n){"use strict";t.exports=255},652:function(t,e,n){"use strict";var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},653:function(t,e,n){"use strict";var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},654:function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},655:function(t,e,n){"use strict";var r,i=n(656),o=n(662),s=n(663);r=i()?o:s,t.exports=r},656:function(t,e,n){"use strict";var r=n(657);t.exports=r},657:function(t,e,n){"use strict";var r=n(658),i=n(660),o=n(661);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},658:function(t,e,n){"use strict";var r=n(659);t.exports=r},659:function(t,e,n){"use strict";var r=n(587),i="function"==typeof Uint16Array;t.exports=function(t){return i&&t instanceof Uint16Array||"[object Uint16Array]"===r(t)}},660:function(t,e,n){"use strict";t.exports=65535},661:function(t,e,n){"use strict";var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},662:function(t,e,n){"use strict";var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},663:function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},664:function(t,e,n){"use strict";var r=n(590),i=n(591),o=n(665),s=new i(1),u=new r(s.buffer);t.exports=function(t){return s[0]=t,u[o]}},665:function(t,e,n){"use strict";var r;r=!0===n(592)?1:0,t.exports=r},666:function(t,e,n){"use strict";var r=n(590),i=n(591),o=n(667),s=new i(1),u=new r(s.buffer),c=o.HIGH,a=o.LOW;t.exports=function(t,e){return u[c]=t,u[a]=e,s[0]}},667:function(t,e,n){"use strict";var r,i,o;!0===n(592)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},668:function(t,e,n){"use strict";var r=n(669);t.exports=r},669:function(t,e,n){"use strict";var r=n(670);t.exports=function(t,e){return 1===arguments.length?r([0,0],t):r(t,e)}},670:function(t,e,n){"use strict";var r=n(671),i=n(598),o=n(597),s=n(672);t.exports=function(t,e){return o(e)||i(e)?(t[0]=e,t[1]=0,t):0!==e&&s(e)<r?(t[0]=4503599627370496*e,t[1]=-52,t):(t[0]=e,t[1]=0,t)}},671:function(t,e,n){"use strict";t.exports=22250738585072014e-324},672:function(t,e,n){"use strict";var r=n(673);t.exports=r},673:function(t,e,n){"use strict";t.exports=function(t){return Math.abs(t)}},674:function(t,e,n){"use strict";var r=n(675);t.exports=r},675:function(t,e,n){"use strict";var r=n(601),i=n(676),o=n(596);t.exports=function(t){var e=r(t);return(e=(e&i)>>>20)-o|0}},676:function(t,e,n){"use strict";t.exports=2146435072},677:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.unset=void 0;var i=r(n(589));e.unset=function(t,e){if((0,i.default)(t,e)){for(var n=e.split("."),r=n.pop();n.length&&"\\"===n[n.length-1].slice(-1);)r=n.pop().slice(0,-1)+"."+r;for(;n.length;)t=t[e=n.shift()];return delete t[r]}return!0}},678:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(589));function o(t,e){if(!Array.isArray(t))return!0===s(t,e);var n=t[0];switch(n){case"!":return!o(t[1],e);case"or":for(var r=1;r<t.length;r++)if(o(t[r],e))return!0;return!1;case"and":for(r=1;r<t.length;r++)if(!o(t[r],e))return!1;return!0;case"=":case"!=":return function(t,e,n,r){u(t)&&(t=o(t,r));u(e)&&(e=o(e,r));"object"==typeof t&&"object"==typeof e&&(t=JSON.stringify(t),e=JSON.stringify(e));switch(n){case"=":return t===e;case"!=":return t!==e;default:throw new Error("Invalid operator in compareItems: ".concat(n))}}(s(t[1],e),s(t[2],e),n,e);case"<=":case"<":case">":case">=":return function(t,e,n,r){u(t)&&(t=o(t,r));u(e)&&(e=o(e,r));if("number"!=typeof t||"number"!=typeof e)return!1;switch(n){case"<=":return t<=e;case">=":return t>=e;case"<":return t<e;case">":return t>e;default:throw new Error("Invalid operator in compareNumbers: ".concat(n))}}(s(t[1],e),s(t[2],e),n,e);case"contains":return function(t,e){if("string"!=typeof t||"string"!=typeof e)return!1;return-1!==t.indexOf(e)}(s(t[1],e),s(t[2],e));case"match":return function(t,e){if("string"!=typeof t||"string"!=typeof e)return!1;return function(t,e){var n,r;t:for(;t.length>0;){var i=void 0,o=void 0;if(i=(n=c(t)).star,o=n.chunk,t=n.pattern,i&&""===o)return!0;var s=a(o,e),u=s.t,f=s.ok,l=s.err;if(l)return!1;if(!f||!(0===u.length||t.length>0)){if(i)for(var p=0;p<e.length;p++){if(u=(r=a(o,e.slice(p+1))).t,f=r.ok,l=r.err,f){if(0===t.length&&u.length>0)continue;e=u;continue t}if(l)return!1}return!1}e=u}return 0===e.length}(e,t)}(s(t[1],e),s(t[2],e));case"lowercase":var i=s(t[1],e);return"string"!=typeof i?null:i.toLowerCase();case"typeof":return typeof s(t[1],e);case"length":return function(t){if(null===t)return 0;if(!Array.isArray(t)&&"string"!=typeof t)return NaN;return t.length}(s(t[1],e));default:throw new Error("FQL IR could not evaluate for token: ".concat(n))}}function s(t,e){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,i.default)(e,t)}function u(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function c(t){for(var e={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),e.star=!0;var n,r=!1;t:for(n=0;n<t.length;n++)switch(t[n]){case"\\":n+1<t.length&&n++;break;case"[":r=!0;break;case"]":r=!1;break;case"*":if(!r)break t}return e.chunk=t.slice(0,n),e.pattern=t.slice(n),e}function a(t,e){for(var n,r,i={t:"",ok:!1,err:!1};t.length>0;){if(0===e.length)return i;switch(t[0]){case"[":var o=e[0];e=e.slice(1);var s=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(s=!1,t=t.slice(1));for(var u=!1,c=0;;){if(t.length>0&&"]"===t[0]&&c>0){t=t.slice(1);break}var a,l="";if(a=(n=f(t)).char,t=n.newChunk,n.err)return i;if(l=a,"-"===t[0]&&(l=(r=f(t.slice(1))).char,t=r.newChunk,r.err))return i;a<=o&&o<=l&&(u=!0),c++}if(u!==s)return i;break;case"?":e=e.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return i.err=!0,i;default:if(t[0]!==e[0])return i;e=e.slice(1),t=t.slice(1)}}return i.t=e,i.ok=!0,i.err=!1,i}function f(t){var e={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?(e.err=!0,e):(e.char=t[0],e.newChunk=t.slice(1),0===e.newChunk.length&&(e.err=!0),e)}e.default=function(t,e){if(!e)throw new Error("No matcher supplied!");switch(e.type){case"all":return!0;case"fql":return function(t,e){if(!t)return!1;try{t=JSON.parse(t)}catch(e){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(e))}var n=o(t,e);if("boolean"!=typeof n)return!1;return n}(e.ir,t);default:throw new Error("Matcher of type ".concat(e.type," unsupported."))}}},679:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var e=[],n=0,r=this.rules;n<r.length;n++){var i=r[n];i.destinationName!==t&&void 0!==i.destinationName||e.push(i)}return e},t}();e.default=r},686:function(t,e,n){"use strict";n.r(e),n.d(e,"LegacyDestination",(function(){return x})),n.d(e,"ajsDestinations",(function(){return _}));var r=n(3),i=n(53),o=n(44),s=n(19),u=n(96),c=n(60),a=n(89),f=n(588),l=n(185),p=n(186),d=n(45),v=n(65),h=n(593),y=n(603),b=n(81),g=n(101);function w(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function m(t,e){return void 0===e&&(e=!1),e?btoa(t).replace(/=/g,""):void 0}function j(t,e,n,i,o,s){return Object(r.b)(this,void 0,void 0,(function(){var u,c,a,f,l,p,d,v;return Object(r.d)(this,(function(h){switch(h.label){case 0:u=w(n),c=m(u,s),a=Object(b.b)(),f="".concat(a,"/integrations/").concat(null!=c?c:u,"/").concat(i,"/").concat(null!=c?c:u,".dynamic.js.gz"),h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Object(g.a)(f)];case 2:return h.sent(),function(t,e,n){var i,o;try{var s=(null!==(o=null===(i=null===window||void 0===window?void 0:window.performance)||void 0===i?void 0:i.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];s&&e.stats.gauge("legacy_destination_time",Math.round(s.duration),Object(r.f)([n],s.duration<100?["cached"]:[],!0))}catch(t){}}(f,t,n),[3,4];case 3:throw l=h.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(n),"failed"]),l;case 4:return p=window["".concat(u,"Deps")],[4,Promise.all(p.map((function(t){return Object(g.a)(a+t+".gz")})))];case 5:return h.sent(),window["".concat(u,"Loader")](),(d=window["".concat(u,"Integration")]).Integration&&(d({user:function(){return e.user()},addIntegration:function(){}}),d=d.Integration),(v=new d(o)).analytics=e,[2,v]}}))}))}function O(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n,i=this;return Object(r.d)(this,(function(u){switch(u.label){case 0:return n=[],Object(o.a)()?[2,e]:[4,Object(p.a)((function(){return e.length>0&&Object(o.b)()}),(function(){return Object(r.b)(i,void 0,void 0,(function(){var i,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return(i=e.pop())?[4,Object(c.a)(i,t)]:[2];case 1:return o=r.sent(),o instanceof s.a||n.push(i),[2]}}))}))}))];case 1:return u.sent(),n.map((function(t){return e.pushWithBackoff(t)})),[2,e]}}))}))}var x=function(){function t(t,e,n,i){void 0===n&&(n={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=e,this.settings=Object(r.a)({},n),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=i,this.buffer=i.disableClientPersistence?new d.b(4,[]):new v.a(4,"dest-".concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n,i=this;return Object(r.d)(this,(function(r){switch(r.label){case 0:return this._ready||void 0!==this.onReady?[2]:(n=this,[4,j(t,e,this.name,this.version,this.settings,this.options.obfuscate)]);case 1:n.integration=r.sent(),this.onReady=new Promise((function(t){i.integration.once("ready",(function(){i._ready=!0,t(!0)}))})),this.onInitialize=new Promise((function(t){i.integration.on("initialize",(function(){i._initialized=!0,t(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(e){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),e}return[2]}}))}))},t.prototype.unload=function(t,e){return function(t,e,n){return Object(r.b)(this,void 0,void 0,(function(){var i,o,s,u;return Object(r.d)(this,(function(r){return i=Object(b.b)(),o=w(t),s=m(t,n),u="".concat(i,"/integrations/").concat(null!=s?s:o,"/").concat(e,"/").concat(null!=s?s:o,".dynamic.js.gz"),[2,Object(g.b)(u)]}))}))}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.middleware=(t=this.middleware).concat.apply(t,e)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&(Object(o.a)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,e,n){var i,o;return Object(r.b)(this,void 0,void 0,(function(){var u,c,l,p,d,v;return Object(r.d)(this,(function(y){switch(y.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(u=null===(o=null===(i=this.options)||void 0===i?void 0:i.plan)||void 0===o?void 0:o.track,c=t.event.event,u&&c&&"Segment.io"!==this.name){if(l=u[c],!Object(f.a)(u,l))return t.updateEvent("integrations",Object(r.a)(Object(r.a)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new s.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",Object(r.a)(Object(r.a)({},t.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&!1===(null==l?void 0:l.integrations[this.name]))return t.cancel(new s.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,Object(h.applyDestinationMiddleware)(this.name,(b=t.event,JSON.parse(JSON.stringify(b))),this.middleware)];case 1:if(null===(p=y.sent()))return[2,t];d=new e(p,{}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(n),"integration_name:".concat(this.name)]),y.label=2;case 2:return y.trys.push([2,5,,6]),this.integration?[4,Object(a.a)(this.integration.invoke.call(this.integration,n,d))]:[3,4];case 3:y.sent(),y.label=4;case 4:return[3,6];case 5:throw v=y.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(n),"integration_name:".concat(this.name)]),v;case 6:return[2,t]}var b}))}))},t.prototype.track=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Track,"track")]}))}))},t.prototype.page=function(t){var e;return Object(r.b)(this,void 0,void 0,(function(){var n=this;return Object(r.d)(this,(function(r){return(null===(e=this.integration)||void 0===e?void 0:e._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return n.send(t,i.Page,"page")}))]}))}))},t.prototype.identify=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Identify,"identify")]}))}))},t.prototype.alias=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Alias,"alias")]}))}))},t.prototype.group=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Group,"group")]}))}))},t.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return Object(r.b)(t,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:return this.flushing=!0,t=this,[4,O(this,this.buffer)];case 1:return t.buffer=e.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},t}();function _(t,e,n){var r,i;if(void 0===e&&(e={}),void 0===n&&(n={}),Object(u.b)())return[];t.plan&&((n=null!=n?n:{}).plan=t.plan);var o,s=null!==(i=null===(r=t.middlewareSettings)||void 0===r?void 0:r.routingRules)&&void 0!==i?i:[],c=(o=s,function(t){var e=t.payload,n=t.integration,r=t.next;new y.Store(o).getRulesByDestinationName(n).forEach((function(t){for(var n=t.matchers,i=t.transformers,o=0;o<n.length;o++)if(y.matches(e.obj,n[o])&&(e.obj=y.transform(e.obj,i[o]),null===e.obj))return r(null)})),r(e)}),a=Object(l.a)(t,null!=n?n:{});return Object.entries(t.integrations).map((function(t){var r,i=t[0],o=t[1];if(!i.startsWith("Segment")){var u=!1===e.All&&void 0===e[i];if(!1!==e[i]&&!u){var f=o.type,l=o.bundlingStatus,p=o.versionSettings;if(("unbundled"!==l&&("browser"===f||(null===(r=null==p?void 0:p.componentTypes)||void 0===r?void 0:r.includes("browser")))||"Segment.io"===i)&&"Iterable"!==i){var d=function(t){var e,n,r,i;return null!==(i=null!==(n=null===(e=t.versionSettings)||void 0===e?void 0:e.override)&&void 0!==n?n:null===(r=t.versionSettings)||void 0===r?void 0:r.version)&&void 0!==i?i:"latest"}(o),v=new x(i,d,a[i],n);return s.filter((function(t){return t.destinationName===i})).length>0&&v.addMiddleware(c),v}}}})).filter((function(t){return void 0!==t}))}}}]);