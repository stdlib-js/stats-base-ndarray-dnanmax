"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=v(function(l,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-dnanmax/dist').ndarray;function x(e){var r=e[0];return o(s(r,0),m(r),q(r,0),d(r))}a.exports=x
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,n=c(f(__dirname,"./native.js"));g(n)?i=j:i=n;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
