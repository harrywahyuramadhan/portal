(function(t){function e(e){for(var r,n,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"34cd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=a("bc3a"),o=a.n(s);o.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL+"/theta",window.location.origin.includes("localhost")&&(o.a.defaults.withCredentials=!0,o.a.defaults.baseURL="http://localhost:9090/theta"),o.a.interceptors.request.use(t=>t,t=>{let e={title:"Unknown error",content:""};return t.response&&(400===t.response.status?e.title="Bad request":500===t.response.status?e.title="Server error":401===t.response.status?e.title="Unauthorized":403===t.response.status?(console.log("forbidden"),e.title="Forbidden"):404===t.response.status?e.title="Not found":e.title="Notification ("+t.response.status+")",e.content=t.response.data),(void 0).$store.commit("showNotification",e),Promise.reject(t)}),o.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o.a,window.axios=o.a,Object.defineProperties(t.prototype,{axios:{get(){return o.a}},$axios:{get(){return o.a}}})},r["a"].use(Plugin);Plugin;var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],l=(a("6031"),a("2877")),c={},u=Object(l["a"])(c,n,i,!1,null,null,null),p=u.exports,d=a("f309");r["a"].use(d["a"]);var f=new d["a"]({}),m=a("8c4f"),h=a("62ad"),g=a("a523"),v=a("adda"),y=a("0fd9"),b=a("8dd9"),w=function(){var t=this,e=t._self._c;return e(b["a"],{staticClass:"overflow-y-auto",attrs:{"max-height":"600"}},[e(g["a"],{staticStyle:{height:"1500px"}},[e(y["a"],{staticClass:"text-center"},[e(h["a"],{attrs:{cols:"12"}},[e(v["a"],{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),e(h["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v("PRINCIPAL")]),e("p",[t._v(t._s(t.$store.state.principal.name))])])],1)],1)],1)},_=[],x={name:"HelloWorld",data:()=>({})},k=x,P=Object(l["a"])(k,w,_,!1,null,null,null),S=P.exports,C=a("8fea"),O=function(){var t=this,e=t._self._c;return e(g["a"],{attrs:{fluid:""}},[e(h["a"],[e("h1",{staticStyle:{"text-align":"center"}},[t._v("Datatable with 3rd Party API")]),e(C["a"],{attrs:{"footer-props":{"items-per-page-options":[2,10,50]},"items-per-page":2,headers:t.headers,items:t.data,options:t.options,"server-items-length":t.serverItemsLength,loading:t.loading,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:options":function(e){t.options=e},"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"item.logo",fn:function({item:t}){return[e("img",{staticStyle:{width:"10%"},attrs:{src:t.airline.logo}})]}},{key:"item.website",fn:function({item:a}){return[e("a",{attrs:{href:a.airline.website}},[t._v(t._s(a.airline.website))])]}}])})],1)],1)},j=[],A={data(){return{loading:!0,data:[],options:{},headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Active",value:"active"}],sortBy:"id",sortDesc:!1,serverItemsLength:0}},watch:{options:{handler(){this.readDataFromAPI()}},deep:!0},methods:{readDataFromAPI(){this.loading=!0;const{sortBy:t,sortDesc:e,page:a,itemsPerPage:r}=this.options;let s=a-1;o.a.get("/api/person/datatables?itemsPerPage="+r+"&page="+s+"&sortBy="+t+"&sortDesc="+e).then(t=>{this.loading=!1,this.data=t.data.data,this.serverItemsLength=t.data.size})}},mounted(){this.readDataFromAPI()}},I=A,$=Object(l["a"])(I,O,j,!1,null,null,null),D=$.exports,z=a("7496"),N=function(){var t=this,e=t._self._c;return e(z["a"],[e("router-view",{key:t.$route.fullPath})],1)},B=[],L={methods:{hideNotification(){}}},U=L,E=Object(l["a"])(U,N,B,!1,null,null,null),J=E.exports,R=a("8336"),M=a("b0af"),T=a("4bd4"),Z=a("132d"),F=a("f6c4"),q=a("8654"),V=function(){var t=this,e=t._self._c;return e(F["a"],[e(y["a"],{staticClass:"fill-height",attrs:{"no-gutters":"",align:"center",justify:"center"}},[e("div",{staticClass:"text-center"},[e(y["a"],{attrs:{"no-gutters":"",justify:"center",align:"center"}},[e(M["a"],{staticClass:"rounded-lg card-login",staticStyle:{width:"476px"},attrs:{raised:"",color:"rgba(255, 255, 255, 0.75) !important"}},[e("div",{staticClass:"card-login-head"},[e(Z["a"],[t._v("mdi-person")])],1),e("div",{staticStyle:{margin:"32px 0 15px 0px",padding:"0px 40px"}},[e(T["a"],{ref:"form",attrs:{autocomplete:"off"}},[e("h2",{staticClass:"pt-0",staticStyle:{"font-size":"28px !important"}},[t._v("Login")]),e(q["a"],{staticClass:"pt-0",class:{"line-blue":""!=t.email&&t.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)},staticStyle:{"margin-top":"30px","font-size":"17px !important"},attrs:{type:"email",label:"Email",rules:[t=>!!t||"Please enter your registered email address",t=>!(!t||!t.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))||"Please enter a valid email address"]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.refPassword.focus()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(q["a"],{ref:"refPassword",class:{"line-blue":null!=t.password&&""!=t.password},staticStyle:{"font-size":"17px !important"},attrs:{label:"Password",type:"password",rules:[t=>!!t||"Please enter your password"]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(h["a"],{staticClass:"d-flex flex-column pa-0 pt-2",attrs:{cols:"12","align-self":"center"}},[e(y["a"],{staticClass:"mb-4",attrs:{"no-gutters":"",justify:"center"}},[e(R["a"],{staticClass:"btn-login elevation-0",on:{click:function(e){return t.login()}}},[t._v("Login")])],1)],1)],1)],1)])],1)],1)])],1)},W=[],H=(a("14d9"),{data:function(){return{email:"",password:"",rememberMe:!1,passwordType:!0,error:{show:!1,content:""}}},methods:{doRememberMe(){},login(){this.$refs.form.validate()&&this.$store.dispatch("login",{email:this.email,password:this.password}).then(t=>{this.$router.push({path:"hello"})}).catch(t=>{console.log("error: ",t)})}}}),G=H,K=Object(l["a"])(G,V,W,!1,null,null,null),Q=K.exports,X=a("40dc"),Y=a("5bc1"),tt=a("ce7e"),et=a("553a"),at=a("8860"),rt=a("56b0"),st=a("da13"),ot=a("8270"),nt=a("5d23"),it=a("34c3"),lt=a("f774"),ct=a("2fa4"),ut=a("2a7f"),pt=function(){var t=this,e=t._self._c;return e(z["a"],[e(lt["a"],{attrs:{app:"",absolute:"",temporary:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-2"},[e(R["a"],{attrs:{block:""}},[t._v(" Logout ")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(at["a"],[e(st["a"],[e(ot["a"],[e(v["a"],{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),e(nt["a"],[e(nt["c"],{staticClass:"text-h6 text-left"},[t._v(" "+t._s(t.$store.state.principal.name)+" ")]),e(nt["b"],{staticClass:"text-left"},[t._v(t._s(t.$store.state.principal.email))])],1)],1)],1),e(tt["a"]),e(at["a"],{attrs:{dense:""}},[e(st["a"],{attrs:{to:"/hello",link:""}},[e(it["a"],[e(Z["a"],[t._v("mdi-home")])],1),e(nt["c"],{staticClass:"text-left"},[t._v("Home")])],1),e(st["a"],{attrs:{to:"/datatables",link:""}},[e(it["a"],[e(Z["a"],[t._v("mdi-view-list")])],1),e(nt["c"],{staticClass:"text-left"},[t._v("Data Tables")])],1),e(rt["a"],{attrs:{value:!1,"prepend-icon":"mdi-account-circle"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(nt["c"],{staticClass:"text-left"},[t._v("Users")])]},proxy:!0}])},[e(rt["a"],{attrs:{value:!1,"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(nt["a"],[e(nt["c"],{staticClass:"text-left"},[t._v("Admin")])],1)]},proxy:!0}])},t._l(t.admins,(function([a,r],s){return e(st["a"],{key:s,attrs:{link:""}},[e(nt["c"],{domProps:{textContent:t._s(a)}}),e(it["a"],[e(Z["a"],{domProps:{textContent:t._s(r)}})],1)],1)})),1),e(rt["a"],{attrs:{"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(nt["a"],[e(nt["c"],{staticClass:"text-left"},[t._v("Actions")])],1)]},proxy:!0}])},t._l(t.cruds,(function([a,r],s){return e(st["a"],{key:s,attrs:{link:""}},[e(nt["c"],{domProps:{textContent:t._s(a)}}),e(it["a"],[e(Z["a"],{domProps:{textContent:t._s(r)}})],1)],1)})),1)],1)],1)],1),e(X["a"],{attrs:{app:"",absolute:"",color:"white","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[e(Y["a"],{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(ut["a"],[t._v("Title")]),e(ct["a"]),e(R["a"],{attrs:{icon:""}},[e(Z["a"],[t._v("mdi-magnify")])],1),e(R["a"],{attrs:{icon:""}},[e(Z["a"],[t._v("mdi-heart")])],1),e(R["a"],{attrs:{icon:""}},[e(Z["a"],[t._v("mdi-dots-vertical")])],1)],1),e(F["a"],[e("router-view",{key:t.$route.fullPath,staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-7"}})],1),e(et["a"],{attrs:{app:""}})],1)},dt=[],ft={data:()=>({drawer:null,collapseOnScroll:!0,admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]]})},mt=ft,ht=(a("9ec7"),Object(l["a"])(mt,pt,dt,!1,null,null,null)),gt=ht.exports;r["a"].use(m["a"]);const vt=[{path:"/",redirect:"/login"},{path:"",component:J,props:!0,children:[{path:"/login",component:Q,props:!0}]},{path:"",component:gt,props:!0,children:[{path:"/hello",component:S,props:!0},{path:"/datatables",component:D,props:!0}]}],yt=new m["a"]({mode:"history",base:"/",routes:vt});var bt=yt,wt=(a("88a7"),a("271a"),a("5494"),a("2f62"));r["a"].use(wt["a"]),localStorage.getItem("principal")&&JSON.parse(localStorage.getItem("principal")).token&&(o.a.defaults.headers.common["Authorization"]="Bearer "+JSON.parse(localStorage.getItem("principal")).token);var _t=new wt["a"].Store({state:{principal:localStorage.getItem("principal")&&JSON.parse(localStorage.getItem("principal"))||{},notification:{title:null,content:{},show:!1}},mutations:{login(t,e){t.principal=e,o.a.defaults.headers.common["Authorization"]="Bearer "+e.token,localStorage.setItem("principal",JSON.stringify(e))}},actions:{login({commit:t},e){const a=new URLSearchParams;return a.append("email",e.email),a.append("password",e.password),new Promise((e,r)=>{o.a.post("/api/login",a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>{let r=a.data;r&&r.token&&(t("login",r),e({response:a,principal:r}))}).catch(t=>r(t.message))})}},modules:{},getters:{isAuthenticated:t=>t.principal&&t.principal.token}});r["a"].config.productionTip=!1,new r["a"]({vuetify:f,router:bt,store:_t,render:t=>t(p),data(){return{loader:{count:0,stroke:7,diameter:50,value:!1}}},methods:{load(){this.loader.count++,this.loader.value=!0},unload(){this.loader.count--,this.loader.count<0&&(this.loader.count=0),this.loader.value=this.loader.count>0},clone(t){return JSON.parse(JSON.stringify(t))},ellipsify(t,e){return t&&t.length>e?t.substring(0,e)+"...":t},textify(t,e,a){return t&&t.trim().length>0?(e||"")+t+(a||""):""},enum(t){return t?t.replace(/_/g," "):t},capitalizeFirst(t){return t&&t[0].toUpperCase()+t.slice(1)},copyWith(t,e){var a=this.clone(e);return Object.assign(a,t)},isBlank(t){for(var e in t)return!1;return"number"!==typeof t&&"boolean"!==typeof t}}}).$mount("#app")},6031:function(t,e,a){"use strict";a("743c")},"743c":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.07d1e22e.svg"},"9ec7":function(t,e,a){"use strict";a("34cd")}});
//# sourceMappingURL=app.36d9d577.js.map