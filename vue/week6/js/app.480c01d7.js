(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],d=0,s=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&s.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==u[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"65191a5a","chunk-46039914":"56919ae8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-46039914":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-46039914":"6b949efd"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var l=c[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===u))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],d=l.getAttribute("data-href");if(d===r||d===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}u[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3912:function(e,t,n){},"55d9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("bc3a"),u=n.n(o),c=n("2106"),a=n.n(c),i={id:"nav"},l=Object(r["f"])("Home"),d=Object(r["f"])(" | "),s=Object(r["f"])("About"),f=Object(r["f"])("| "),p=Object(r["f"])("Products");function b(e,t){var n=Object(r["w"])("router-link"),o=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",i,[Object(r["g"])(n,{to:"/"},{default:Object(r["B"])((function(){return[l]})),_:1}),d,Object(r["g"])(n,{to:"/about"},{default:Object(r["B"])((function(){return[s]})),_:1}),f,Object(r["g"])(n,{to:"/products"},{default:Object(r["B"])((function(){return[p]})),_:1})]),Object(r["g"])(o)],64)}n("5ee3");const h={};h.render=b;var m=h,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g={class:"home"};function j(e,t,n,o,u,c){var a=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",g,[Object(r["g"])(a,{msg:"Welcome to Your Vue.js App"})])}var O=Object(r["C"])("data-v-b654dbdc"),y=O((function(e,t,n,o,u,c){return Object(r["p"])(),Object(r["d"])("h2",null,"首頁")})),w={name:"HelloWorld",props:{msg:String}};n("59c7");w.render=y,w.__scopeId="data-v-b654dbdc";var _=w,k={name:"Home",components:{HelloWorld:_}};k.render=j;var P=k,S=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/products",name:"Products",component:function(){return n.e("chunk-46039914").then(n.bind(null,"e6dc"))}}],A=Object(v["a"])({history:Object(v["b"])(),routes:S}),E=A;Object(r["c"])(m).use(E).use(a.a,u.a).mount("#app")},"59c7":function(e,t,n){"use strict";n("55d9")},"5ee3":function(e,t,n){"use strict";n("3912")}});
//# sourceMappingURL=app.480c01d7.js.map