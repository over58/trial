(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},o={index:0},u=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0e1782":"a6f88a3b","chunk-3e15a119":"ffd5d77a","chunk-5ad2e4dc":"88308866","chunk-5b44358a":"66854a61","chunk-5e808d09":"8b86640d","chunk-6e96eba8":"da813fc6","chunk-d2ae3d12":"0d04a4c9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5b44358a":1,"chunk-5e808d09":1,"chunk-d2ae3d12":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0e1782":"31d6cfe0","chunk-3e15a119":"31d6cfe0","chunk-5ad2e4dc":"31d6cfe0","chunk-5b44358a":"9a879972","chunk-5e808d09":"bbb993f6","chunk-6e96eba8":"31d6cfe0","chunk-d2ae3d12":"d62525a5"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/trial/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"2f0f":function(e,t,n){"use strict";var r=n("7ef2"),a=n.n(r);a.a},"3c8b":function(e,t,n){"use strict";var r=n("995d"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"App",components:{}},c=u,i=(n("7c55"),n("2877")),l=Object(i["a"])(c,a,o,!1,null,null,null),s=l.exports,d=n("2f62");r["default"].use(d["a"]);var f=new d["a"].Store({state:{},mutations:{},actions:{},modules:{}}),p=n("2909"),h=n("8c4f"),m=(n("d3b7"),[{path:"",redirect:"qrcode",component:function(){return n.e("chunk-3e15a119").then(n.bind(null,"625c"))}},{path:"qrcode",name:"qrcode",component:function(){return n.e("chunk-3e15a119").then(n.bind(null,"625c"))}},{path:"clipboard",name:"clipboard",component:function(){return n.e("chunk-6e96eba8").then(n.bind(null,"89e6"))}},{path:"vertical-align",name:"vertical-align",component:function(){return n.e("chunk-5e808d09").then(n.bind(null,"52b7"))}},{path:"sector",name:"sector",component:function(){return n.e("chunk-d2ae3d12").then(n.bind(null,"5f57"))}},{path:"ease",name:"ease",component:function(){return n.e("chunk-5ad2e4dc").then(n.bind(null,"2553"))}},{path:"test/vue",name:"test-vue",component:function(){return n.e("chunk-2d0e1782").then(n.bind(null,"7b23"))}},{path:"test/flex-scroll",name:"test-flex-scroll",component:function(){return n.e("chunk-5b44358a").then(n.bind(null,"3549"))}}]),v=m,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticStyle:{"background-color":"#eee"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":e.activeRoute},on:{select:e.selectMenuItem}},e._l(e.routes,(function(t){return n("el-menu-item",{key:t.name,attrs:{index:t.name}},[e._v(" "+e._s(t.meta&&t.meta.label||t.name)+" ")])})),1)],1),n("el-container",[n("el-main",[n("router-view")],1)],1)],1)],1)},g=[],k=(n("b0c0"),{name:"Index",data:function(){return{routes:v}},computed:{activeRoute:function(){return this.$route.name}},created:function(){},methods:{selectMenuItem:function(e){this.$router.push({name:e})}}}),y=k,w=(n("2f0f"),Object(i["a"])(y,b,g,!1,null,"97fb2fa6",null)),_=w.exports;r["default"].use(h["a"]);var x=new h["a"]({mode:"hash",routes:[{path:"/",name:"home",component:_,children:Object(p["a"])(v)},{path:"*",redirect:"/"}]}),O=n("5c96"),j=n.n(O),E=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-container"},[e._v(" comment Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, totam sapiente? Tempora sapiente quam vitae architecto voluptate doloribus autem provident molestiae dolor laudantium aliquid sint voluptatem, consequatur eveniet error excepturi! ")])}),S=[],P={},C=P,T=(n("3c8b"),Object(i["a"])(C,E,S,!1,null,"6f9091d0",null)),q=T.exports;r["default"].use(j.a),r["default"].component("comment",q),r["default"].config.productionTip=!1;var A=new r["default"]({el:"#app",store:f,router:x,render:function(e){return e(s)}});console.log(A)},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},"7ef2":function(e,t,n){},"995d":function(e,t,n){}});