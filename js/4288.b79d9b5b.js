"use strict";(self["webpackChunksalsavica"]=self["webpackChunksalsavica"]||[]).push([[4288],{4288:(a,e,s)=>{s.r(e),s.d(e,{default:()=>Z});var l=s(3673),t=s(2323);(0,l.dD)("data-v-0e346cb2");const r={class:"row q-mb-md col-gutter-md"},n={class:"col-md-6 col-xs-12 col-lg-12"},o={class:"row"},d=(0,l._)("div",{class:"col-auto"},[(0,l._)("div",{class:"left"})],-1),p={class:"col"},c=(0,l._)("div",{class:"text-h6"},"Data User Gapari",-1),i=(0,l._)("div",null,"Pengguna Aplikasi",-1),u={class:"row"},m={class:"col-md-12 q-pa-md col-xs-12"},w=(0,l._)("div",{class:"text-h5 text-white q-pa-md text-center hijau",style:{"border-radius":"5px"}}," Data User Gapari ",-1);function f(a,e,s,f,_,g){const b=(0,l.up)("q-banner"),h=(0,l.up)("q-td"),v=(0,l.up)("q-tr"),k=(0,l.up)("q-table"),q=(0,l.up)("q-card"),W=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(W,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("div",n,[(0,l._)("div",o,[d,(0,l._)("div",p,[(0,l.Wm)(b,{"inline-actions":"",class:"warna"},{default:(0,l.w5)((()=>[c,i])),_:1})])])])]),(0,l._)("div",u,[(0,l._)("div",m,[w,(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{rows:a.rows,columns:a.columns,"row-key":"name",flats:""},{body:(0,l.w5)((a=>[(0,l.Wm)(v,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{key:"No",props:a},null,8,["props"]),(0,l.Wm)(h,{key:"name",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.row.name),1)])),_:2},1032,["props"]),(0,l.Wm)(h,{key:"username",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.row.username),1)])),_:2},1032,["props"]),(0,l.Wm)(h,{key:"address",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.row.address),1)])),_:2},1032,["props"]),(0,l.Wm)(h,{key:"phone",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.row.phone),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})])])])),_:1})}(0,l.Cn)();const _=(0,l.aZ)({name:"PageIndex",components:{},data(){return{columns:[{name:"name",align:"left",label:"Nama Lengkap",field:"name",sortable:!0},{name:"username",align:"left",label:"Username",field:"username",sortable:!0},{name:"address",align:"left",label:"Alamat",field:"address",sortable:!0},{name:"phone",align:"left",label:"No Telepon",field:"phone",sortable:!0}],rows:[]}},created(){this.getData()},methods:{getData(){this.$api.get("users/get_user").then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const e=a.data.result;this.rows=e}}))}}});var g=s(4379),b=s(5607),h=s(151),v=s(1993),k=s(8186),q=s(3884),W=s(2165),x=s(7518),y=s.n(x);_.render=f,_.__scopeId="data-v-0e346cb2";const Z=_;y()(_,"components",{QPage:g.Z,QBanner:b.Z,QCard:h.Z,QTable:v.Z,QTr:k.Z,QTd:q.Z,QBtn:W.Z})}}]);