(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0e65":function(t,e,s){"use strict";s("cff8")},"0e81":function(t,e,s){},"20a3":function(t,e,s){"use strict";s("8c16")},"26ce":function(t,e,s){"use strict";s("0e81")},"2ca9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Headerbar"),s("router-view"),s("Footer")],1)},n=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[s("div",{staticClass:"container-fluid"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link fas fa-address-card",attrs:{href:"#"}})]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link far fa-address-book",attrs:{href:"#"}})]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link far fa-bell",attrs:{href:"#"}})])]),s("a",{staticClass:"navbar-brand mx-auto",attrs:{href:"#"}},[t._v("CONTROL PARKING")]),s("ul",{staticClass:"nav navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About")])])])])])])}],c=(s("0e65"),s("2877")),l={},u=Object(c["a"])(l,r,o,!1,null,"5f7502fe",null),d=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fin"},[s("div",[s("p",[t._v(" @copyright Todos los derechos reservados")])]),s("div",{staticClass:"contact"},[s("a",{attrs:{href:"#"}},[t._v("Contactanos")])])])}],p=(s("20a3"),{}),h=Object(c["a"])(p,m,v,!1,null,"a9624486",null),f=h.exports,_={name:"App",components:{Headerbar:d,Footer:f}},C=_,g=(s("034f"),Object(c["a"])(C,i,n,!1,null,null,null)),b=g.exports,k=s("1e18"),w=(s("2dd8"),s("f9e3"),s("8c4f")),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("main",{staticClass:"login-1"},[s("div",{staticClass:"center"},[s("h1",[t._v("Sistema de control de parqueadero")]),s("p",[t._v("Logeate para ingresar al panel de asignacion")]),s("router-link",{staticClass:"btn btn-success",attrs:{to:"/home",type:"button",href:""}},[t._v("Ingresar")])],1)])])},y=[],D=(s("6a9b"),{}),j=Object(c["a"])(D,x,y,!1,null,"dc6aded2",null),P=j.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("Dashboar"),s("form",{staticClass:"container gestion mx-5 ",on:{submit:function(e){return e.preventDefault(),t.addTicke()}}},[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),s("h2",{staticClass:"my-1"},[t._v("Ingrese informacion correpondiente")]),s("div",{staticClass:"input-group mb-3"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Ingrese placa")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ticketDato.placa,expression:"ticketDato.placa"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.ticketDato.placa},on:{input:function(e){e.target.composing||t.$set(t.ticketDato,"placa",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Ingrese puesto")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ticketDato.Puesto,expression:"ticketDato.Puesto"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.ticketDato.Puesto},on:{input:function(e){e.target.composing||t.$set(t.ticketDato,"Puesto",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[s("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect01"}},[t._v("Seleccione tipo de vehiculo")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.ticketDato.TipoVehiculo,expression:"ticketDato.TipoVehiculo"}],staticClass:"form-select",attrs:{id:"inputGroupSelect01"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.ticketDato,"TipoVehiculo",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:""}},[t._v("Seleccione")]),s("option",{attrs:{value:"Motocicleta"}},[t._v("Motocicleta")]),s("option",{attrs:{value:"Carro"}},[t._v("Carro")]),s("option",{attrs:{value:"Camionetas"}},[t._v("Camionetas")]),s("option",{attrs:{value:"Camion"}},[t._v("Camion")]),s("option",{attrs:{value:"Vans"}},[t._v("Vans")])])]),s("div",{staticClass:"input-group mb-3"}),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Ingresar")])],1)],1)},T=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",staticStyle:{width:"350px",height:"100%"}},[s("a",{staticClass:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",attrs:{href:"/"}},[s("svg",{staticClass:"bi me-2",attrs:{width:"40",height:"32"}},[s("use",{attrs:{"xlink:href":"#bootstrap"}})]),s("span",{staticClass:"fs-4"},[t._v("Panel")])]),s("hr"),s("ul",{staticClass:"nav nav-pills flex-column mb-auto"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"/home","aria-current":"page"}},[s("svg",{staticClass:"bi me-2",attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#home"}})]),t._v(" Home ")])]),s("li",[s("a",{staticClass:"nav-link text-white",attrs:{href:"/Panelparking"}},[s("svg",{staticClass:"bi me-2",attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#table"}})]),t._v(" Panel de parqueaderos ")])]),s("li",[s("a",{staticClass:"nav-link text-white",attrs:{href:"/Tickets"}},[s("svg",{staticClass:"bi me-2",attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#grid"}})]),t._v(" Tickets generados ")])]),s("li")]),s("hr"),t._m(0)])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown"},[s("a",{staticClass:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",attrs:{href:"#",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"}},[s("img",{staticClass:"rounded-circle me-2",attrs:{src:"https://randomuser.me/api/portraits/thumb/women/10.jpg",alt:"",width:"32",height:"32"}}),s("strong",[t._v("Admin")])]),s("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("New project...")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Settings")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Profile")])]),s("li",[s("hr",{staticClass:"dropdown-divider"})]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sign out")])])])])}],E={},V=Object(c["a"])(E,$,S,!1,null,null,null),A=V.exports,I={data:function(){return{datotickets:[],mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,ticketDato:{placa:"",tipoVehiculo:"",Puesto:"",tiempoI:Date.now(),valorP:0}}},created:function(){},methods:{addTicke:function(){var t=this;this.axios.post("/nuevoticket",this.ticketDato).then((function(e){t.datotickets.push(e.data),t.ticketDato.placa="",t.ticketDato.Puesto="",t.ticketDato.tipoVehiculo="",t.mensaje.color="success",t.mensaje.texto="Ticket agregado",t.showAlert()})).catch((function(t){console.log(t.res)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},components:{Dashboar:A}},U=I,F=(s("26ce"),Object(c["a"])(U,O,T,!1,null,null,null)),R=F.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("Dashboar"),t._m(0)],1)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Panel de parqueaderos")]),s("div",{staticClass:"items"},[s("div",{staticClass:"item"},[t._v(".1")]),s("div",{staticClass:"item"},[t._v(".2")]),s("div",{staticClass:"item"},[t._v(".3")]),s("div",{staticClass:"item"},[t._v(".4")]),s("div",{staticClass:"item"},[t._v(".5")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")]),s("div",{staticClass:"item"},[t._v(".item")])])])}],z={components:{Dashboar:A}},M=z,q=(s("ff1c"),Object(c["a"])(M,G,N,!1,null,null,null)),L=q.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("404")]),s("h2",[t._v("page not found")])])}],B={},K=Object(c["a"])(B,H,J,!1,null,null,null),Q=K.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded?s("div",[s("img",{attrs:{src:t.user.picture.large,alt:""}}),s("h4",[t._v(t._s(t.user.name.first))])]):s("div",[s("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1)},X=[],Y=s("1da1"),Z=(s("96cf"),s("d3b7"),"https://randomuser.me/api/");function tt(){return fetch(Z).then((function(t){return t.json()})).then((function(t){return t.results})).catch((function(t){return console.log(t)}))}var et=function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(Z+"?results=50");case 3:return e=t.sent,t.next=6,e.json();case 6:return s=t.sent,t.abrupt("return",s.results);case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),st=function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(Z,"?id=").concat(e));case 3:return s=t.sent,t.next=6,s.json();case 6:return a=t.sent,t.abrupt("return",a.results[0]);case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),at={getUsersPromise:tt,getUserAsync:et,getUserData:st},it={data:function(){return{user:{},loaded:!1}},created:function(){this.getUser(this.$route.query.id)},methods:{getUser:function(t){var e=this;Object(Y["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,at.getUserData(t);case 2:e.user=s.sent,e.loaded=!0,console.log(e.user);case 5:case"end":return s.stop()}}),s)})))()}}},nt=it,rt=Object(c["a"])(nt,W,X,!1,null,null,null),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("UserTable",{attrs:{users:t.users}}),s("users",{attrs:{users:t.users}})],1)},lt=[],ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},t._l(t.users,(function(e){return s("div",{key:e.login.uuid,staticClass:"col-3"},[s("div",{staticClass:"card-img-top",attrs:{src:e.picture.large}},[s("a",{attrs:{href:"/user/"+e.login.uuid}},[s("img",{attrs:{src:e.picture.medium,alt:""}})]),s("p",[t._v(t._s(e.name.first))]),s("p",[t._v(t._s(e.location.city))])])])})),0)},dt=[],mt={props:{users:{type:Array,default:function(){return[]}}}},vt=mt,pt=Object(c["a"])(vt,ut,dt,!1,null,null,null),ht=pt.exports,ft={components:{Users:ht},data:function(){return{users:[]}},created:function(){var t=this;Object(Y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,at.getUserAsync();case 2:t.users=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},_t=ft,Ct=Object(c["a"])(_t,ct,lt,!1,null,null,null),gt=Ct.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("Dashboar"),s("div",{staticClass:"container"},[s("h1",[t._v("Gestion tickets")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input is rounded",attrs:{type:"text"},domProps:{value:t.search},on:{keyup:t.searchData,input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("button",{staticClass:"success",on:{click:t.searchData}},[t._v(" Buscar ")])]),s("div",{staticClass:"item-resul"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.ticket.placa))]),s("td",[t._v(t._s(t.ticket.tiempoInicio)+" ")]),s("td",[t._v(t._s(t.ticket.Puesto))]),s("td",[t._v(t._s(t.ticket.TipoVehiculo))]),s("td",[t._v(t._s(t.ticket.tiempoFinal))]),s("td",[t._v("$"+t._s(t.ticketeditar.valorP))]),s("td",[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.finTickt}},[t._v("Finalizar tiempo")]),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.valorPagar}},[t._v("Valor a pagar")])])])])])]),s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")])],1)],1)},kt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Placa")]),s("th",{attrs:{scope:"col"}},[t._v("tiempo")]),s("th",{attrs:{scope:"col"}},[t._v("puesto")]),s("th",{attrs:{scope:"col"}},[t._v("vehiculo")]),s("th",{attrs:{scope:"col"}},[t._v("tiempo")]),s("th",{attrs:{scope:"col"}},[t._v("Pagar")]),s("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],wt=(s("a9e3"),s("ac1f"),s("841c"),{data:function(){return{ticketeditar:{tiempoFinal:Date(),valorP:Number},tickets:[],search:"",ticket:{placa:"",tiempoInicio:"",TipoVehiculo:"",Puesto:"",tiempoFinal:""},mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,diffe:Number,star:"",end:"",min:Number}},components:{Dashboar:A},created:function(){},methods:{searchData:function(){var t=this;this.axios.get("/tickets/placa/"+this.search).then((function(e){t.ticket=e.data,t.ticket.placa=e.data[0].placa,t.ticket.tiempoInicio=e.data[0].tiempoInicio,t.ticket.TipoVehiculo=e.data[0].TipoVehiculo,t.ticket.Puesto=e.data[0].Puesto,t.ticket.tiempoFinal=e.data[0].tiempoFinal,console.log(t.ticket)})).catch((function(t){console.log(t.res)}))},finTickt:function(){var t=this;this.axios.put("/tickets/placa/"+this.search,this.ticketeditar).then((function(e){t.ticketeditar=e.data.tiempoFinal,console.log(e),t.mensaje.color="danger",t.mensaje.texto=" Finalizacion de tiempo",t.showAlert()})).catch((function(t){console.log(t)}))},valorPagar:function(){this.end=new Date(this.ticket.tiempoFinal),this.star=new Date(this.ticket.tiempoInicio),this.diffe=Math.abs(this.end-this.star),this.min=Math.floor(this.diffe/1e3/60),"Camion"===this.ticket.TipoVehiculo&&"Carro"===this.ticket.TipoVehiculo&&"Camionetas"===this.ticket.TipoVehiculo&&"Vans"===this.ticket.TipoVehiculo?this.ticketeditar.valorP=75*this.min:this.ticketeditar.valorP=52*this.min,this.mensaje.color="warning",this.mensaje.texto="Ticket Guardado y valor a pagar ",this.showAlert(),console.log(this.min)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),xt=wt,yt=(s("ab66"),Object(c["a"])(xt,bt,kt,!1,null,"44b487ce",null)),Dt=yt.exports;a["default"].use(w["a"]);var jt=new w["a"]({mode:"history",routes:[{path:"/",name:"Login",component:P},{path:"*",name:"error",component:Q},{path:"/home1",name:"home1",component:gt},{path:"/user/:id",name:"user",component:ot},{path:"/home",name:"home",component:R},{path:"/Panelparking",name:"PanelParqueo",component:L},{path:"/Tickets",name:"GetionTickets",component:Dt}]}),Pt=s("bc3a"),Ot=s.n(Pt),Tt=s("130e");a["default"].use(Tt["a"],Ot.a),Ot.a.defaults.baseURL="http://localhost:3000/api",a["default"].config.productionTip=!1,a["default"].use(k["a"]),new a["default"]({router:jt,render:function(t){return t(b)}}).$mount("#app")},"59b1":function(t,e,s){},"6a9b":function(t,e,s){"use strict";s("59b1")},"85ec":function(t,e,s){},"8c16":function(t,e,s){},ab66:function(t,e,s){"use strict";s("e215")},cff8:function(t,e,s){},e215:function(t,e,s){},ff1c:function(t,e,s){"use strict";s("2ca9")}});
//# sourceMappingURL=app.ec980008.js.map