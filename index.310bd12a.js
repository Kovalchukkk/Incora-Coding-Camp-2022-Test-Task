function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequire3cde;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire3cde=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var n=i.default(e,t,"get");return o.default(e,n)};var i=u(s("fExtF")),o=u(s("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){c.default(e,t),t.set(e,n)};var d,c=(d=s("7K24o"))&&d.__esModule?d:{default:d};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,n){var r=h.default(e,t,"set");return w.default(e,r,n),n};var h=p(s("fExtF")),w=p(s("3LGG3"));function p(e){return e&&e.__esModule?e:{default:e}}var v=new WeakMap;class g{watch(t){if(e(a)(this,v).shows.find((e=>e.name===t))){let n=0;if(void 0!==e(a)(this,v).viewsByShowNames.get(t))return n=e(a)(this,v).viewsByShowNames.get(t)+1,void e(a)(this,v).viewsByShowNames.set(t,n);e(a)(this,v).viewsByShowNames.set(t,1)}else console.log(`Can't find '${t}' in streaming service ${e(a)(this,v).name}`)}getRecommendationTrending(){}getRecommendationByGenre(e){}constructor(t){e(l)(this,v,{writable:!0,value:void 0}),e(f)(this,v,t)}}var m=new WeakMap;var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){_.default(e,t),t.add(e)};var _=function(e){return e&&e.__esModule?e:{default:e}}(s("7K24o"));var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var M=new WeakMap,x=new WeakMap,O=new WeakSet;function P(e){const t=[];for(let n of e.keys())t.push(n);return t.length>10&&(t=t.slice(0,10)),t}class S{getDuration(){}constructor(){e(D)(this,"name",void 0),e(D)(this,"genre",{}),e(D)(this,"releaseDate",void 0)}}var j=new WeakMap,E=new WeakSet;function k(){return e(a)(this,j).reduce(((e,t)=>e+t.duration),0)}class N extends S{getDuration(){return this.duration}constructor({name:e,releaseDate:t,duration:n}){super(),this.name=e,this.releaseDate=t,this.duration=n}}const T=new class extends S{getDuration(){return this.duration}constructor({name:e,genre:t,releaseDate:n,duration:r}){super(),this.name=e,this.genre[e]=t,this.releaseDate=n,this.duration=r}}({name:"Pirates of the Caribbean: The Curse of the Black Pearl",genre:"fantasy",releaseDate:new Date("July 9, 2003"),duration:143}),B=new class extends S{setEpisodes(t){e(f)(this,j,[...t])}get episodes(){return e(a)(this,j)}getDuration(){return this.duration=e(b)(this,E,k).call(this),this.duration}constructor({name:t,genre:n,releaseDate:r}){super(),e(y)(this,E),e(l)(this,j,{writable:!0,value:[]}),this.name=t,this.genre[t]=n,this.releaseDate=r}}({name:"Rick and Morty",genre:"science fiction sitcom",releaseDate:new Date("December 2, 2013")}),R=[new N({name:"Pilot",releaseDate:new Date("December 2, 2013"),duration:15}),new N({name:"Lawnmower Dog",releaseDate:new Date("December 9, 2013"),duration:17}),new N({name:"Anatomy Park",releaseDate:new Date("December 16, 2013"),duration:13})];B.setEpisodes(R);const W=new class{addShow(t){e(a)(this,x).push(t)}get name(){return e(a)(this,M)}get shows(){return e(a)(this,x)}getMostViewedShowsOfYear(t){const n=e(a)(this,x).filter((e=>e.releaseDate.getFullYear()===t)),r=n.map((e=>e.name)),s=new Map;if(this.viewsByShowNames.forEach(((e,t)=>{r.includes(t)&&s.set(t,e)})),0!==s.size){const t=new Map([...s.entries()].sort(((e,t)=>t[1]-e[1]))),r=[],a=e(b)(this,O,P).call(this,t);for(let e=0;e<n.length;e++)a.includes(n[e].name)&&r.push(n[e]);return r.length>10?(r=r.slice(0,10),r):r}console.log("There is no shows released in this year")}getMostViewedShowsOfGenre(e){}constructor(t){e(y)(this,O),e(l)(this,M,{writable:!0,value:void 0}),e(l)(this,x,{writable:!0,value:[]}),e(D)(this,"viewsByShowNames",new Map),e(f)(this,M,t)}}("Netflix");W.addShow(T),W.addShow(B);const G=new class{subscribe(t){const n=new g(t);return e(a)(this,m).push(n),n}get subscriptions(){return e(a)(this,m)}constructor(){e(l)(this,m,{writable:!0,value:[]})}};G.subscribe(W),G.subscriptions[0].watch(T.name),G.subscriptions[0].watch(T.name),G.subscriptions[0].watch(T.name),G.subscriptions[0].watch("Very interesting show"),G.subscriptions[0].watch(B.name),console.log(W.viewsByShowNames),console.log(W.shows),console.log(W.getMostViewedShowsOfYear(2003));
//# sourceMappingURL=index.310bd12a.js.map
