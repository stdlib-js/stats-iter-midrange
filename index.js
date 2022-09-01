// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).itermidrange=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(e){var t,r,n,o,u;if(null==e)return d.call(e);r=e[m],u=m,t=null!=(o=e)&&v.call(o,u);try{e[m]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[m]=r:delete e[m],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var w=b();function j(e){return"object"==typeof e&&(e instanceof Boolean||(w?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function h(e){return y(e)||j(e)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",j);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof I?I:null;var A=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(E)return E;if(T)return T;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),N=A.document&&A.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",B);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};function C(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=_(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=B.exec(n.toString()))return t[1]}return C(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(C));var G="function"==typeof e||"object"==typeof P||"function"==typeof N?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function k(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&function(e){return"function"===G(e)}(e.next)}var L=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function R(e){return e!=e}return function(e){var t,r,n,o,u;if(!k(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("0fI49",e));for(o=M,u=L,t=function(e){return 0===arguments.length?void 0===n?null:n/2:(R(e)&&(u=e,o=e),e>o&&(o=e),e<u&&(u=e),(n=o+u)/2)};!(r=e.next()).done;)"number"==typeof r.value?t(r.value):t(NaN);return t()}}));
//# sourceMappingURL=index.js.map
