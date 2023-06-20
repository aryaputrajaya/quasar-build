"use strict";(self["webpackChunksalsavica"]=self["webpackChunksalsavica"]||[]).push([[4837],{4837:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});var s=l(3673),t=l(8880),o=l(2323);const r={class:"col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md"},m={class:"row q-mt-lg"},i={class:"row col-12 q-mt-md"},u=(0,s._)("div",{class:"col"},[(0,s._)("div",{class:"col-2 q-table__title"},"Master Data Customer"),(0,s._)("p",{class:"text-caption"},"Data customer yang di lakukan di dalam sistem salsafical.")],-1);function d(e,a,l,d,n,p){const c=(0,s.up)("q-breadcrumbs-el"),f=(0,s.up)("q-breadcrumbs"),w=(0,s.up)("q-card"),b=(0,s.up)("q-space"),C=(0,s.up)("q-btn"),k=(0,s.up)("q-input"),_=(0,s.up)("q-slide-transition"),q=(0,s.up)("q-td"),g=(0,s.up)("q-tr"),h=(0,s.up)("q-table"),W=(0,s.up)("q-card-section"),v=(0,s.up)("q-select"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{class:"q-pr-md q-pl-md q-pa-md"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.Wm)(w,{class:"my-card q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{separator:"---",class:"text-blue-10","active-color":"secondary"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{label:"Main Menu",icon:"widgets"}),(0,s.Wm)(c,{label:"Mitra",icon:"extension"}),(0,s.Wm)(c,{label:"Customers",icon:"shopping_bag"})])),_:1})])),_:1}),(0,s._)("div",m,[(0,s._)("div",i,[(0,s.Wm)(w,{class:"my-card col",flat:"",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{class:"col-12 q-pa-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{title:"Master Data Customers","aria-label":"Text",class:"text-h5",rows:n.rows,flat:"",columns:n.columns,"row-key":"name",filter:n.filter},{top:(0,s.w5)((()=>[u,(0,s.Wm)(b),(0,s.Wm)(C,{flat:"",round:"",color:"primary",icon:"search",onClick:a[0]||(a[0]=e=>n.visibles=!n.visibles),size:"md",class:"q-mr-sm"}),(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(k,{outlined:"",debounce:"300",placeholder:"Placeholder",style:{width:"300px"},color:"primary",modelValue:n.filter,"onUpdate:modelValue":a[1]||(a[1]=e=>n.filter=e),dense:""},null,8,["modelValue"])],512),[[t.F8,n.visibles]])])),_:1}),(0,s.Wm)(C,{dense:"",icon:"add",class:"q-ml-md q-pr-md",color:"blue-13",label:"Tambah Customer",to:{name:"customer_add"},size:"md",outline:""})])),body:(0,s.w5)((e=>[(0,s.Wm)(g,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{key:"id_customer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.id_customer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"namaCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.namaCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"alamatCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.alamatCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"kotaCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.kotaCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"posCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.posCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"teleponCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.teleponCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"emailCustomer",props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.row.emailCustomer),1)])),_:2},1032,["props"]),(0,s.Wm)(q,{key:"aksi",props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{round:"",outline:"",color:"red",icon:"delete","no-caps":"",class:"q-ml-sm"})])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])),_:1})])),_:1})])),_:1})])])]),(0,s.Wm)(v,{filled:"",label:"Nama Supplier",options:n.options,"option-value":"id_customer","option-label":"namaCustomer",outlined:"",dense:"",rules:[e=>e||"Nama produk tidak boleh kosong !"]},null,8,["options","rules"])])),_:1})}const n={name:"PageIndex",data(){return{options:[],namaCustomer:[],visibles:!1,filter:null,totalHutang:0,totalLunas:0,columns:[{name:"id_customer",required:!0,label:"ID Customers",align:"left",field:"id_customer",sortable:!0},{name:"namaCustomer",required:!0,label:"Nama Customer",align:"left",field:"namaCustomer",sortable:!0},{name:"alamatCustomer",required:!0,label:"Alamat",align:"left",field:"alamatCustomer",sortable:!0},{name:"kotaCustomer",required:!0,label:"Kota",align:"left",field:"kotaCustomer",sortable:!0},{name:"posCustomer",required:!0,label:"Kode POS",align:"left",field:"posCustomer",sortable:!0},{name:"teleponCustomer",required:!0,label:"No Telepon",align:"left",field:"teleponCustomer",sortable:!0},{name:"emailCustomer",required:!0,label:"Email",align:"left",field:"emailCustomer",sortable:!0},{name:"aksi",label:"Actions",field:"aksi",align:"center"}],rows:[]}},created(){this.getCustomer()},methods:{getCustomer(){try{this.$api.get("customer/view_customer").then((e=>{if(!0!==e.data.status)this.$showNotif(e.data.message,"negative");else{this.$showNotif(e.data.message,"positive");const a=e.data.result;this.rows=a,this.options=e.data.result}}))}catch(e){this.$showNotif("Terjadi kesalahan !","negative")}}}};var p=l(4379),c=l(151),f=l(1481),w=l(5926),b=l(5589),C=l(1993),k=l(2025),_=l(2165),q=l(2471),g=l(4689),h=l(8186),W=l(3884),v=l(3314),y=l(7518),Q=l.n(y);n.render=d;const Z=n;Q()(n,"components",{QPage:p.Z,QCard:c.Z,QBreadcrumbs:f.Z,QBreadcrumbsEl:w.Z,QCardSection:b.Z,QTable:C.Z,QSpace:k.Z,QBtn:_.Z,QSlideTransition:q.Z,QInput:g.Z,QTr:h.Z,QTd:W.Z,QSelect:v.Z})}}]);