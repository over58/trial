(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3e15a119":"37529859"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/trial/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"27d8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Nav"),n("router-view")],1)},a=[],u=n("af20"),c={name:"App",components:{Nav:u["default"]}},i=c,s=(n("7c55"),n("2877")),l=Object(s["a"])(i,o,a,!1,null,null,null),f=l.exports,p=n("2f62");r["a"].use(p["a"]);var d=new p["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("2909"),h=n("8c4f"),m=n("d046");r["a"].use(h["a"]);var b=new h["a"]({mode:"history",routes:[{path:"/trial",component:f,children:Object(v["a"])(m["a"])}]});r["a"].config.productionTip=!1,new r["a"]({store:d,router:b,render:function(e){return e(f)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"890b":function(e,t,n){"use strict";var r=n("27d8"),o=n.n(r);o.a},af20:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav-container"},[n("li",{staticClass:"title"},[e._v("导航栏")]),e._l(e.routes,(function(t){return n("li",{key:t.name,staticClass:"nav-item",on:{click:function(n){return e.handleRoute(t)}}},[e._v(e._s(t.name))])}))],2)},o=[],a=(n("b0c0"),n("d046")),u={data:function(){return{routes:a["a"]}},methods:{handleRoute:function(e){this.$router.push({name:e.name})}}},c=u,i=(n("890b"),n("2877")),s=Object(i["a"])(c,r,o,!1,null,"b9e42b7c",null);t["default"]=s.exports},d046:function(e,t,n){"use strict";n("d3b7");t["a"]=[{path:"",name:"Nav",component:function(){return Promise.resolve().then(n.bind(null,"af20"))}},{path:"qrcode",name:"qrcode",component:function(){return n.e("chunk-3e15a119").then(n.bind(null,"625c"))}}]}});