function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire3cde;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire3cde=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=i.default(e,t,"get");return s.default(e,r)};var i=u(n("fExtF")),s=u(n("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,r){f.default(e,t),t.set(e,r)};var c,f=(c=n("7K24o"))&&c.__esModule?c:{default:c};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,r){var o=p.default(e,t,"set");return w.default(e,o,r),r};var p=v(n("fExtF")),w=v(n("3LGG3"));function v(e){return e&&e.__esModule?e:{default:e}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var b=new WeakMap,_=new WeakMap;var y=new WeakMap;class g{watch(t){console.log(`Watching ${t}! `);let r=0;if(void 0!==e(a)(this,y).viewsByShowNames.get(t))return r=e(a)(this,y).viewsByShowNames.get(t)+1,void e(a)(this,y).viewsByShowNames.set(t,r);e(a)(this,y).viewsByShowNames.set(t,1)}getRecommendationTrending(){}getRecommendationByGenre(e){}constructor(t){e(l)(this,y,{writable:!0,value:void 0}),e(d)(this,y,t)}}var M=new WeakMap;const x=new class{constructor(t,r){e(l)(this,b,{writable:!0,value:void 0}),e(l)(this,_,{writable:!0,value:[]}),e(h)(this,"viewsByShowNames",new Map),e(d)(this,b,t),e(d)(this,_,[...r])}}("Netflix",["DED PULL","Jack Sparrow"]),m=new class{subscribe(t){const r=new g(t);return e(a)(this,M).push(r),r}get subscriptions(){return e(a)(this,M)}constructor(){e(l)(this,M,{writable:!0,value:[]})}};m.subscribe(x),m.subscriptions[0].watch("Jack Sparrow"),m.subscriptions[0].watch("Jack Sparrow"),m.subscriptions[0].watch("Jack Sparrow"),console.log(x.viewsByShowNames);
//# sourceMappingURL=index.99a6b074.js.map
