// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var e,r,n,o,u;if(null==t)return v.call(t);r=t[_],u=_,e=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[_]=r:delete t[_],n}:function(t){return v.call(t)},m=Boolean.prototype.toString;var g=s();function j(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function h(t){return y(t)||j(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",j);var E="object"==typeof self?self:null,I="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var A=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(I)return I;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),N=A.document&&A.document.childNodes,P=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function G(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=x.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var F="function"==typeof t||"object"==typeof P||"function"==typeof N?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function k(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&function(t){return"function"===F(t)}(t.next)}var L=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function R(t){return t!=t}function U(t){var e,r,n,o,u;if(!k(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("1Kn3w,G7",t));for(o=M,u=L,e=function(t){return 0===arguments.length?void 0===n?null:n/2:(R(t)&&(u=t,o=t),t>o&&(o=t),t<u&&(u=t),(n=o+u)/2)};!(r=t.next()).done;)"number"==typeof r.value?e(r.value):e(NaN);return e()}export{U as default};
//# sourceMappingURL=mod.js.map
