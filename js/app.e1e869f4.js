(()=>{"use strict";var e={7834:(e,n,t)=>{t(7280),t(5363),t(71);var a=t(8880),o=t(9592),r=t(3673);function i(e,n,t,a,o,i){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(l)}const l={name:"App"};l.render=i;const c=l;var d=t(4584),p=t(7083),s=t(9582),m=t(6395);const u=[{path:"/auth",component:()=>Promise.all([t.e(4736),t.e(6512)]).then(t.bind(t,6512)),children:[{path:"",name:"signin",component:()=>Promise.all([t.e(4736),t.e(3221)]).then(t.bind(t,3221))}],meta:{authGuest:!0}},{path:"/akuntansi",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(6406)]).then(t.bind(t,6406)),meta:{authAdmin:!0},children:[{path:"",name:"dashboard",component:()=>Promise.all([t.e(4736),t.e(4089)]).then(t.bind(t,4089))},{path:"/product",name:"product",component:()=>Promise.all([t.e(4736),t.e(8222)]).then(t.bind(t,8222))},{path:"/product/input",name:"product_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(5395)]).then(t.bind(t,5395))},{path:"/product/edit/:id",name:"product_edit",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(6751)]).then(t.bind(t,6751))},{path:"/kategoriproduk/input",name:"product_kategori_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(285)]).then(t.bind(t,285))},{path:"/kategoriproduk/edit/:id",name:"product_kategori_edit",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(648)]).then(t.bind(t,648))},{path:"/jenisproduk/input",name:"product_jenis_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(9343)]).then(t.bind(t,9343))},{path:"/jenisproduk/edit/:id",name:"product_jenis_edit",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(5078)]).then(t.bind(t,5078))},{path:"/penjualan",name:"penjualan",component:()=>Promise.all([t.e(4736),t.e(3136)]).then(t.bind(t,3136))},{path:"/penjualan/input",name:"penjualan_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(6337)]).then(t.bind(t,6337))},{path:"/pembelian",name:"pembelian",component:()=>Promise.all([t.e(4736),t.e(3786)]).then(t.bind(t,3786))},{path:"/pembelian/input",name:"pembelian_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(4707)]).then(t.bind(t,4707))},{path:"/pengeluaran",name:"pengeluaran",component:()=>Promise.all([t.e(4736),t.e(544)]).then(t.bind(t,544))},{path:"/pengeluaran/input",name:"pengeluaran_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(28)]).then(t.bind(t,28))},{path:"/retur",name:"retur",component:()=>Promise.all([t.e(4736),t.e(3267)]).then(t.bind(t,3267))},{path:"/retur/input",name:"retur_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(5473)]).then(t.bind(t,5473))},{path:"/modal",name:"modal",component:()=>Promise.all([t.e(4736),t.e(9563)]).then(t.bind(t,9563))},{path:"/modal/input",name:"modal_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(979)]).then(t.bind(t,6391))},{path:"/laporan",name:"laporan",component:()=>Promise.all([t.e(4736),t.e(1742)]).then(t.bind(t,1742))},{path:"/profile",name:"profile",component:()=>Promise.all([t.e(4736),t.e(268)]).then(t.bind(t,268))},{path:"/invoice",name:"invoice",component:()=>Promise.all([t.e(4736),t.e(9944)]).then(t.bind(t,9944))},{path:"/customer_add",name:"customer_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(437)]).then(t.bind(t,437))},{path:"/customer",name:"customer",component:()=>Promise.all([t.e(4736),t.e(4837)]).then(t.bind(t,4837))},{path:"/supplier_add",name:"supplier_add",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(7008)]).then(t.bind(t,7008))},{path:"/supplier",name:"supplier",component:()=>Promise.all([t.e(4736),t.e(2450)]).then(t.bind(t,2450))}]},{path:"/selsafical",component:()=>Promise.all([t.e(4736),t.e(8422)]).then(t.bind(t,8422)),children:[{path:"",name:"index",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(7878)]).then(t.bind(t,7878))},{path:"produk",name:"produk",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(1909)]).then(t.bind(t,1909))},{path:"tentangKami",name:"tentangKami",component:()=>Promise.all([t.e(4736),t.e(9847)]).then(t.bind(t,9847))},{path:"mengapaKami",name:"mengapaKami",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(5619)]).then(t.bind(t,5619))},{path:"gulaJahe",name:"gulaJahe",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(8040)]).then(t.bind(t,8040))},{path:"gulaJaheMerah",name:"gulaJaheMareh",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(7977)]).then(t.bind(t,7977))},{path:"gulaBerasKencur",name:"gulaBerasKencur",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(7108)]).then(t.bind(t,7108))},{path:"gulaCetak",name:"gulaCetak",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(9057)]).then(t.bind(t,9057))},{path:"gulaArenOriginal",name:"gulaArenOriginal",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(2458)]).then(t.bind(t,2458))},{path:"gulaArenTemulawak",name:"gulaArenTemulawak",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(4038)]).then(t.bind(t,4038))}]},{path:"/login",component:()=>Promise.all([t.e(4736),t.e(1765)]).then(t.bind(t,1765)),meta:{authGuest:!0},children:[{path:"",name:"loginGapari",component:()=>Promise.all([t.e(4736),t.e(2044)]).then(t.bind(t,2044))},{path:"loginUser",name:"loginUser",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(5219)]).then(t.bind(t,5219))},{path:"/registerUser",name:"registerUser",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(2617)]).then(t.bind(t,2617))},{path:"registerGapari",name:"registerGapari",component:()=>Promise.all([t.e(4736),t.e(3456)]).then(t.bind(t,3456))}]},{path:"/",component:()=>Promise.all([t.e(4736),t.e(7268)]).then(t.bind(t,7268)),children:[{path:"",name:"dash",component:()=>Promise.all([t.e(4736),t.e(3868)]).then(t.bind(t,3868))},{path:"website",name:"website",component:()=>Promise.all([t.e(4736),t.e(6114)]).then(t.bind(t,6114))}]},{path:"/login_user",name:"login_user",component:()=>Promise.all([t.e(4736),t.e(7990)]).then(t.bind(t,7990))},{path:"/poktan",component:()=>Promise.all([t.e(4736),t.e(669)]).then(t.bind(t,669)),children:[{path:"",name:"dashboard_poktan",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(8826)]).then(t.bind(t,8826))},{path:"about_poktan",name:"about_poktan",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(3433)]).then(t.bind(t,3433))},{path:"shop_poktan",name:"shop_poktan",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(9423)]).then(t.bind(t,9423))}]},{path:"/admin",component:()=>Promise.all([t.e(4736),t.e(3064),t.e(8064)]).then(t.bind(t,8064)),children:[{path:"",name:"admin_dash",component:()=>t.e(1579).then(t.bind(t,1579))},{path:"data_user",name:"data_user",component:()=>Promise.all([t.e(4736),t.e(4288)]).then(t.bind(t,4288))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(4736),t.e(6100)]).then(t.bind(t,6100))}],h=u,b=(0,p.BC)((function(){const e=s.r5,n=(0,s.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return n.beforeEach(((e,n,t)=>{const a=m.Z.getItem("user");e.matched.some((e=>e.meta.authAdmin))?null===a||"undefined"===a?(t({name:"loginGapari"}),this.$showNotif("Anda belum login!","negative")):t():null===a||"undefined"===a?t():t({name:"dashboard"})})),n}));async function f(e,n){const a="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:r}=await Promise.resolve().then(t.bind(t,4584)),i="function"===typeof b?await b({store:a}):b;a.$router=i;const l=e(c);return l.use(o.Z,n),{app:l,store:a,storeKey:r,router:i}}var g=t(4434),P=t(499);const v={config:{},plugins:{LocalStorage:m.Z,Notify:g.Z,Dialog:P.Z}};let _="function"===typeof c.preFetch?c.preFetch:void 0!==c.__c&&"function"===typeof c.__c.preFetch&&c.__c.preFetch;function y(e,n){const t=e?e.matched?e:n.resolve(e).route:n.currentRoute;return t?Array.prototype.concat.apply([],t.matched.map((e=>Object.keys(e.components).map((n=>{const t=e.components[n];return{path:e.path,c:t}}))))):[]}function w(e,n,t){e.beforeResolve(((a,o,r)=>{const i=window.location.href.replace(window.location.origin,""),l=y(a,e),c=y(o,e);let d=!1;const p=l.filter(((e,n)=>d||(d=!c[n]||c[n].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==_&&(p.unshift(_),_=!1),0===p.length)return r();let s=!1;const m=e=>{s=!0,r(e)},u=()=>{!1===s&&r()};p.reduce(((e,r)=>e.then((()=>!1===s&&r({store:n,currentRoute:a,previousRoute:o,redirect:m,urlPath:i,publicPath:t})))),Promise.resolve()).then(u).catch((e=>{console.error(e),u()}))}))}const k="";async function j({app:e,router:n,store:t,storeKey:a},o){let r=!1;const i=e=>{r=!0;const t=Object(e)===e?n.resolve(e).fullPath:e;window.location.href=t},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===r&&d<o.length;d++)try{await o[d]({app:e,router:n,store:t,ssrContext:null,redirect:i,urlPath:l,publicPath:k})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&(e.use(n),e.use(t,a),w(n,t),e.mount("#q-app"))}f(a.ri,v).then((e=>Promise.all([Promise.resolve().then(t.bind(t,4112)),Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,7813))]).then((n=>{const t=n.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,t)}))))},5474:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c,api:()=>l,axios:()=>r.a});var a=t(7083),o=t(52),r=t.n(o);const i="https://gapari-gold.vercel.app",l=r().create({baseURL:i}),c=(0,a.xr)((({app:e,router:n})=>{e.config.globalProperties.$axios=r(),e.config.globalProperties.$imgUrl=i,e.config.globalProperties.$api=l}))},4112:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c,i18n:()=>l});var a=t(7083),o=t(5948);const r={failed:"Action failed",success:"Action was successful"},i={"en-US":r},l=(0,o.o)({locale:"en-US",messages:i}),c=(0,a.xr)((({app:e})=>{e.use(l)}))},7813:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(7280),t(5363);var a=t(7083),o=t(4434),r=t(499);const i=r.Z,l=(e,n)=>{o.Z.create({message:e,color:n,timeout:2e3})},c=e=>{const n=(e/1).toFixed(0).replace(".",".");return"Rp. "+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+",-"},d=e=>{const n=e.substring(0,25)+"...";return n},p=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],s=e=>{let n;if(""===e||null===e||void 0===e)n={date:"-",dateLocal:"-",fullDate:"-",timeStap:"-"};else{const t=new Date(e),a=""+(t.getMonth()+1),o=""+t.getDate(),r=t.getFullYear(),i=o+" "+p[a-1]+" "+r;n={date:[r,a<10?"0"+a:a,o<10?"0"+o:o].join("/")+"_"+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),dateLocal:[o<10?"0"+o:o,a<10?"0"+a:a].join(" "),fullDate:i,timeStap:`${i} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`}}return n},m=()=>"ID-"+Math.floor(1e8*Math.random()),u=(0,a.xr)((({app:e})=>{e.config.globalProperties.$showNotif=l,e.config.globalProperties.$dialog=i,e.config.globalProperties.$generateId=m,e.config.globalProperties.$formatPrice=c,e.config.globalProperties.$parseDate=s,e.config.globalProperties.$subString=d}))},4584:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var a=t(7083),o=t(7874);const r=(0,a.h)((function(){const e=(0,o.MT)({modules:{},strict:!1});return e}))}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,(()=>{t.amdO={}})(),(()=>{var e=[];t.O=(n,a,o,r)=>{if(!a){var i=1/0;for(p=0;p<e.length;p++){for(var[a,o,r]=e[p],l=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((e=>t.O[e](a[c])))?a.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(p--,1);var d=o();void 0!==d&&(n=d)}}return n}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,o,r]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,a)=>(t.f[a](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(3064===e?"chunk-common":e)+"."+{28:"9fa400c7",268:"bdcaa9bc",285:"6ac8dd17",437:"32dbdbb3",544:"fc9a52ff",648:"33ff9f1a",669:"db998470",979:"9bfdf55e",1579:"6a587615",1742:"59b50099",1765:"6df94dc1",1909:"f3963ede",2044:"a2d49a66",2450:"bc869eb1",2458:"1e0a5e81",2617:"6f137e09",3064:"ad10786d",3136:"929dadea",3221:"19e3dc5d",3267:"4bb9683d",3433:"9c51d331",3456:"5fca5178",3786:"8fa1b278",3868:"9dc8d962",4038:"6857f8d1",4089:"3e29da2c",4288:"b79d9b5b",4707:"f3c10a54",4837:"ca219b69",5078:"9cba5bea",5219:"3586e3c2",5395:"ded168c0",5473:"1ac3599b",5619:"0532f8cb",6100:"aff6b01b",6114:"5d8f95e8",6337:"bf1236ec",6406:"cd819495",6512:"56607f29",6751:"d57ea541",7008:"be02a5fb",7108:"e20c12c5",7268:"a3984bec",7878:"21a0f376",7977:"051cb8ee",7990:"fedf1815",8040:"5df8cdd3",8064:"412ed4e1",8222:"29743c5d",8422:"64467c8f",8826:"c0d34672",9057:"e26fc2b2",9343:"01d7ec6b",9423:"5e5cfc70",9563:"3e79b68d",9847:"5399d604",9944:"1ee85cd0"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({2143:"app",4736:"vendor"}[e]||e)+"."+{669:"f37008a7",1765:"0e1379dc",1909:"16ce0b08",2044:"56f6796e",2143:"f0bf4256",2458:"dc9aecff",2617:"e095f672",3221:"e8b8d64f",3433:"4644dd9d",3456:"1908f8d0",3868:"c64f6c5f",4038:"b03bee70",4089:"84fe0353",4288:"495de960",4736:"70ac14ec",5219:"c4d4c000",5619:"c72ec540",6114:"3ba2c7cc",7108:"06042fa4",7268:"d244d19b",7878:"48e9d5ec",7977:"618e18c6",8040:"01f733e5",8422:"635e0c0a",8826:"39c4d12b",9057:"3fc7514e",9423:"a43ea259",9847:"2b79da94"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="salsavica:";t.l=(a,o,r,i)=>{if(e[a])e[a].push(o);else{var l,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),p=0;p<d.length;p++){var s=d[p];if(s.getAttribute("src")==a||s.getAttribute("data-webpack")==n+r){l=s;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+r),l.src=a),e[a]=[o];var m=(n,t)=>{l.onerror=l.onload=null,clearTimeout(u);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),n)return n(t)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e=(e,n,t,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=r=>{if(o.onerror=o.onload=null,"load"===r.type)t();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=r,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=t[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===n))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===n)return o}},a=a=>new Promise(((o,r)=>{var i=t.miniCssF(a),l=t.p+i;if(n(i,l))return o();e(a,l,o,r)})),o={2143:0};t.f.miniCss=(e,n)=>{var t={669:1,1765:1,1909:1,2044:1,2458:1,2617:1,3221:1,3433:1,3456:1,3868:1,4038:1,4089:1,4288:1,5219:1,5619:1,6114:1,7108:1,7268:1,7878:1,7977:1,8040:1,8422:1,8826:1,9057:1,9423:1,9847:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=a(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={2143:0};t.f.j=(n,a)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise(((t,a)=>o=e[n]=[t,a]));a.push(o[2]=r);var i=t.p+t.u(n),l=new Error,c=a=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,a)=>{var o,r,[i,l,c]=a,d=0;if(i.some((n=>0!==e[n]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var p=c(t)}for(n&&n(a);d<i.length;d++)r=i[d],t.o(e,r)&&e[r]&&e[r][0](),e[i[d]]=0;return t.O(p)},a=self["webpackChunksalsavica"]=self["webpackChunksalsavica"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var a=t.O(void 0,[4736],(()=>t(7834)));a=t.O(a)})();