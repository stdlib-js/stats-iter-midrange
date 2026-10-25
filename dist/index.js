"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(l,a){
var n=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/stats-incr-midrange/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function o(i){var r,e;if(!n(i))throw new TypeError(s('1Kn3w',i));for(r=v();e=i.next(),!e.done;)typeof e.value=="number"?r(e.value):r(NaN);return r()}a.exports=o
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
