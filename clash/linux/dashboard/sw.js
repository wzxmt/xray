if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),d={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>d[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.085153f0.js",revision:null},{url:"assets/index.fe5b8aed.css",revision:null},{url:"assets/vendor.55bb278d.js",revision:null},{url:"index.html",revision:"85f824ddd7d1745af7753abe47e60a15"},{url:"manifest.webmanifest",revision:"d3dd1da0aa7614180924343e65244285"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
