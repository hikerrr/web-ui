(function(t){function a(a){for(var i,o,r=a[0],l=a[1],c=a[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(a);while(u.length)u.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(i=!1)}i&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},s=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/admin/dashboard/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var i=e("85ec"),n=e.n(i);n.a},"15fb":function(t,a,e){"use strict";var i=e("888a"),n=e.n(i);n.a},2729:function(t,a,e){"use strict";var i=e("c829"),n=e.n(i);n.a},"29f4":function(t,a,e){},"2ac3":function(t,a,e){"use strict";var i=e("7440"),n=e.n(i);n.a},4854:function(t,a,e){},"4e4b":function(t,a,e){"use strict";var i=e("f562"),n=e.n(i);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-global-wrapper",attrs:{id:"app"}},[e("div",{staticClass:"app-wrapper"},[e("TopPanel"),e("NavigationPanel"),e("DataPanel")],1)])},s=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-panel",class:{"panel-open":!t.isCollapsed}},[e("div",{staticClass:"bars-wrapper"},[e("div",{staticClass:"bars-container",on:{click:t.toggleNav}},[e("div",{staticClass:"bar-middle"})])]),e("div"),e("div",{staticClass:"settings-wrapper",on:{click:t.toggleSettings}},[e("i",{staticClass:"fa fa-cog settings-icon"}),t.isSettingOpen?e("div",{staticClass:"settings-panel"},[e("ul",{staticClass:"settings"},[e("li",[e("router-link",{attrs:{to:"/notifications"}},[e("a",{attrs:{href:"notifications"}},[t._v("Notifications")])])],1),e("li",[e("router-link",{attrs:{to:"/profile"}},[e("a",{attrs:{href:"profile"}},[t._v("Profile")])])],1),t._m(0)])]):t._e()])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"/admin/logout"}},[t._v("Sign Out")])])}],l={name:"TopPanel",data:function(){return{isCollapsed:!0,isSettingOpen:!1}},methods:{toggleNav:function(){this.isCollapsed=!this.isCollapsed},toggleSettings:function(){this.isSettingOpen=!this.isSettingOpen}}},c=l,d=(e("2ac3"),e("2877")),m=Object(d["a"])(c,o,r,!1,null,"1307a330",null),u=m.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navigation-panel"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/admin/dashboard/destinations"}},[e("a",{attrs:{href:"/admin/dashboard/destinations"}},[e("i",{staticClass:"fa fa-home"}),e("span",[t._v("Destinations")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/cities"}},[e("a",{attrs:{href:"/admin/dashboard/cities"}},[e("i",{staticClass:"fa fa-building"}),e("span",[t._v("Cities")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/bookings"}},[e("a",{attrs:{href:"/admin/dashboard/bookings"}},[e("i",{staticClass:"fa fa-address-card"}),e("span",[t._v("Bookings")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/styles"}},[e("a",{attrs:{href:"/admin/dashboard/styles"}},[e("i",{staticClass:"fa fa-map"}),e("span",[t._v("Trip Styles")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/tours"}},[e("a",{attrs:{href:"/admin/dashboard/tours"}},[e("i",{staticClass:"fa fa-bus"}),e("span",[t._v("Tours")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/blogs"}},[e("a",{attrs:{href:"/admin/dashboard/blogs"}},[e("i",{staticClass:"fa fa-book"}),e("span",[t._v("Blogs")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/analytics"}},[e("a",{attrs:{href:"/admin/dashboard/analytics"}},[e("i",{staticClass:"fa fa-tree"}),e("span",[t._v("Site Analytics")])])])],1),e("li",[e("router-link",{attrs:{to:"/admin/dashboard/upload"}},[e("a",{attrs:{href:"/admin/dashboard/upload"}},[e("i",{staticClass:"fa fa-upload"}),e("span",[t._v("Uploads")])])])],1)])])},f=[],h={name:"NavigationPanel"},g=h,v=(e("4e4b"),Object(d["a"])(g,p,f,!1,null,"19965a56",null)),_=v.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-panel"},[e("router-view")],1)},C=[],N={name:"DataPanel"},k=N,y=(e("15fb"),Object(d["a"])(k,b,C,!1,null,"1449eac5",null)),P=y.exports,D={name:"App",components:{TopPanel:u,NavigationPanel:_,DataPanel:P},created:function(){this.$store.dispatch("getDestinations"),this.$store.dispatch("getCities")}},E=D,S=(e("034f"),Object(d["a"])(E,n,s,!1,null,null,null)),x=S.exports,T=e("8c4f"),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"destination-list-wrapper"},[e("div",{staticClass:"destination-list"},t._l(t.destinations,(function(t){return e("DestinationListItem",{key:t._id,attrs:{destination:t}})})),1),e("router-link",{attrs:{to:"/admin/dashboard/destinations/new"}},[e("div",{staticClass:"add-btn-wrapper"},[e("a",{staticClass:"add-btn",attrs:{href:"#"}},[t._v("+")])])])],1)},w=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list-item-wrapper"},[e("div",{staticClass:"list-item"},[e("div",{staticClass:"list-item-name"},[e("p",[t._v(t._s(t.destination.heading))])]),e("div",{staticClass:"list-item-options"},[e("router-link",{attrs:{to:"/admin/dashboard/destinations/"+t.destination._id}},[e("a",{staticClass:"list-item-option",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-edit"})])]),e("a",{staticClass:"list-item-option",attrs:{href:"#"},on:{click:t.deleteDestById}},[e("i",{staticClass:"fa fa-trash"})])],1)])])},I=[],A={name:"DestinationListItem",props:["destination"],methods:{deleteDestById:function(){this.$store.dispatch("deleteDestination",this.destination.linkName)}}},U=A,L=(e("2729"),Object(d["a"])(U,O,I,!1,null,"50fea510",null)),j=L.exports,B={name:"DestinationList",computed:{destinations:function(){return this.$store.getters.destinations}},components:{DestinationListItem:j}},q=B,F=(e("fbc2"),Object(d["a"])(q,$,w,!1,null,"243b63a0",null)),M=F.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"destination-form-wrapper"},[t.destination?e("div",{staticClass:"destination-form"},[e("form",{staticClass:"form"},[e("div",{staticClass:"form-field"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.linkName,expression:"destination.linkName"}],staticClass:"form-input",class:{"border-red":t.errors.linkName},attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.linkName},on:{input:function(a){a.target.composing||t.$set(t.destination,"linkName",a.target.value)}}}),t.errors.linkName?e("span",{staticClass:"error"},[t._v(t._s(t.errors.linkName))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.heading,expression:"destination.heading"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.heading},on:{input:function(a){a.target.composing||t.$set(t.destination,"heading",a.target.value)}}}),t.errors.heading?e("span",{staticClass:"error"},[t._v(t._s(t.errors.heading))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.imageName,expression:"destination.imageName"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.imageName},on:{input:function(a){a.target.composing||t.$set(t.destination,"imageName",a.target.value)}}}),t.errors.imageName?e("span",{staticClass:"error"},[t._v(t._s(t.errors.imageName))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.imageCaption,expression:"destination.imageCaption"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.imageCaption},on:{input:function(a){a.target.composing||t.$set(t.destination,"imageCaption",a.target.value)}}}),t.errors.imageCaption?e("span",{staticClass:"error"},[t._v(t._s(t.errors.imageCaption))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(4),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.destination.caption,expression:"destination.caption"}],staticClass:"form-area",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.caption},on:{input:function(a){a.target.composing||t.$set(t.destination,"caption",a.target.value)}}}),t.errors.caption?e("span",{staticClass:"error"},[t._v(t._s(t.errors.caption))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(5),e("div",{staticClass:"cities"},t._l(t.cities,(function(a){return e("label",{key:a._id},[e("input",{staticClass:"form-checkbox",attrs:{type:"checkbox",name:"cities[]"},domProps:{checked:!!t.isCityPresent(a.linkName),value:a._id}}),e("span",{staticClass:"checkbox-label"},[t._v(t._s(a.heading))])])})),0)]),e("a",{staticClass:"form-btn",attrs:{disable:t.loading,href:"#"},on:{click:t.saveData}},[t._v("Save")]),e("router-link",{attrs:{to:"/admin/dashboard/destinations"}},[e("a",{staticClass:"form-btn",attrs:{href:"/admin/dashboard/destinations"}},[t._v("Back")])]),e("div",{staticClass:"loader"},[e("p",{staticStyle:{color:"green"}},[t._v("Last Update Status: ["+t._s(t.msg)+"]")])])],1)]):t._e()])},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"linkName"}},[t._v("Link Name "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Heading "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Image Name "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Image Caption "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Caption "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Cities "),e("span",{staticClass:"red"},[t._v(" *")])])}],J=(e("caad"),e("2532"),{name:"DestinationForm",props:["id"],data:function(){return{loading:!1,msg:"None",errors:{linkName:!1,heading:!1,imageName:!1,imageCaption:!1,caption:!1}}},computed:{cities:function(){return this.$store.getters.cities},destination:function(){return this.$store.getters.destById(this.id)}},methods:{isCityPresent:function(t){for(var a=0;a<this.destination.cities.length;a++)if(this.destination.cities[a].linkName===t)return!0;return!1},saveData:function(t){var a=this;if(t.preventDefault(),this.validateForm()){for(var e=[],i=document.getElementsByName("cities[]"),n=0;n<i.length;n++)i[n].checked&&e.push(i[n]._value);var s=this.destination.cities;this.destination.cities=e,this.loading=!0,this.msg="Saving...",this.$store.dispatch("updateDestination",this.destination).then((function(){a.loading=!1,a.msg="Updated"})).catch((function(t){a.destination.cities=s,a.loading=!1,a.msg=t}))}},validateForm:function(){var t=!0;return""==this.destination.linkName?(this.errors.linkName="Link name cannot be empty.",t=!1):this.destination.linkName.includes(" ")?this.errors.linkName="Link name cannot have spaces.":this.destination.linkName.length>20&&(this.errors.linkName="Link name cannot be longer than 20 characters."),""==this.destination.heading&&(this.errors.heading="Heading cannot be empty.",t=!1),""==this.destination.imageName&&(this.errors.imageName="Image name cannot be empty.",t=!1),""==this.destination.imageCaption&&(this.errors.imageCaption="Image caption cannot be empty.",t=!1),""==this.destination.caption?(this.errors.caption="Caption cannot be empty.",t=!1):this.destination.caption.length>300&&(this.errors.caption="Caption cannot be longer than 300 characters.",t=!1),t}}}),K=J,R=(e("d754"),Object(d["a"])(K,G,H,!1,null,"caed784a",null)),Y=R.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"destination-form-wrapper"},[t.destination?e("div",{staticClass:"destination-form"},[e("form",{staticClass:"form"},[e("div",{staticClass:"form-field"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.linkName,expression:"destination.linkName"}],staticClass:"form-input",class:{"border-red":t.errors.linkName},attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.linkName},on:{input:function(a){a.target.composing||t.$set(t.destination,"linkName",a.target.value)}}}),t.errors.linkName?e("span",{staticClass:"error"},[t._v(t._s(t.errors.linkName))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.heading,expression:"destination.heading"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.heading},on:{input:function(a){a.target.composing||t.$set(t.destination,"heading",a.target.value)}}}),t.errors.heading?e("span",{staticClass:"error"},[t._v(t._s(t.errors.heading))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.imageName,expression:"destination.imageName"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.imageName},on:{input:function(a){a.target.composing||t.$set(t.destination,"imageName",a.target.value)}}}),t.errors.imageName?e("span",{staticClass:"error"},[t._v(t._s(t.errors.imageName))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.destination.imageCaption,expression:"destination.imageCaption"}],staticClass:"form-input",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.imageCaption},on:{input:function(a){a.target.composing||t.$set(t.destination,"imageCaption",a.target.value)}}}),t.errors.imageCaption?e("span",{staticClass:"error"},[t._v(t._s(t.errors.imageCaption))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(4),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.destination.caption,expression:"destination.caption"}],staticClass:"form-area",attrs:{type:"text",name:"",value:"",required:""},domProps:{value:t.destination.caption},on:{input:function(a){a.target.composing||t.$set(t.destination,"caption",a.target.value)}}}),t.errors.caption?e("span",{staticClass:"error"},[t._v(t._s(t.errors.caption))]):t._e()]),e("div",{staticClass:"form-field"},[t._m(5),e("div",{staticClass:"cities"},t._l(t.cities,(function(a){return e("label",{key:a._id},[e("input",{staticClass:"form-checkbox",attrs:{type:"checkbox",name:"cities[]"},domProps:{value:a._id}}),e("span",{staticClass:"checkbox-label"},[t._v(t._s(a.heading))])])})),0)]),e("a",{staticClass:"form-btn",attrs:{disable:t.loading,href:"#"},on:{click:t.saveData}},[t._v("Save")]),e("router-link",{attrs:{to:"/admin/dashboard/destinations"}},[e("a",{staticClass:"form-btn",attrs:{href:"/admin/dashboard/destinations"}},[t._v("Back")])]),e("div",{staticClass:"loader"},[e("p",{staticStyle:{color:"green"}},[t._v("Last Update Status: ["+t._s(t.msg)+"]")])])],1)]):t._e()])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"linkName"}},[t._v("Link Name "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Heading "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Image Name "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Image Caption "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Caption "),e("span",{staticClass:"red"},[t._v(" *")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"form-label",attrs:{for:"heading"}},[t._v("Cities "),e("span",{staticClass:"red"},[t._v(" *")])])}],V={name:"DestinationFormNew",props:["id"],data:function(){return{loading:!1,msg:"None",destination:{linkName:"",heading:"",imageName:"",imageCaption:"",caption:"",cities:[]},errors:{linkName:!1,heading:!1,imageName:!1,imageCaption:!1,caption:!1}}},computed:{cities:function(){return this.$store.getters.cities}},methods:{saveData:function(t){var a=this;if(t.preventDefault(),this.validateForm()){for(var e=[],i=document.getElementsByName("cities[]"),n=0;n<i.length;n++)i[n].checked&&e.push(i[n]._value);this.destination.cities=e,this.loading=!0,this.msg="Saving...",this.$store.dispatch("addDestination",this.destination).then((function(){a.loading=!1,a.msg="Updated"})).catch((function(t){a.loading=!1,a.msg=t}))}},validateForm:function(){var t=!0;return""==this.destination.linkName?(this.errors.linkName="Link name cannot be empty.",t=!1):this.destination.linkName.includes(" ")?(this.errors.linkName="Link name cannot have spaces.",t=!1):this.destination.linkName.length>20?(this.errors.linkName="Link name cannot be longer than 20 characters.",t=!1):this.errors.linkName="",""==this.destination.heading?(this.errors.heading="Heading cannot be empty.",t=!1):this.errors.heading="",""==this.destination.imageName?(this.errors.imageName="Image name cannot be empty.",t=!1):this.errors.imageName="",""==this.destination.imageCaption?(this.errors.imageCaption="Image caption cannot be empty.",t=!1):this.errors.imageCaption="",""==this.destination.caption?(this.errors.caption="Caption cannot be empty.",t=!1):this.destination.caption.length>300?(this.errors.caption="Caption cannot be longer than 300 characters.",t=!1):this.errors.caption="",t}}},W=V,X=(e("de0f"),Object(d["a"])(W,z,Q,!1,null,"f36b0326",null)),Z=X.exports;i["a"].use(T["a"]);var tt=[{path:"/admin/dashboard",component:M},{path:"/admin/dashboard/destinations",component:M},{path:"/admin/dashboard/destinations/new",component:Z},{path:"/admin/dashboard/destinations/:id",component:Y,props:!0},{path:"*",redirect:"/admin/dashboard"}],at=new T["a"]({mode:"history",routes:tt}),et=e("2f62"),it=e("bc3a"),nt=e.n(it),st={getAdmins:function(t){nt.a.get("/api/admins").then((function(a){t.commit("UPDATE_ADMINS",a.data)}))}},ot=st,rt={admins:function(t){return t.admins}},lt=rt,ct={UPDATE_ADMINS:function(t,a){t.admins=a}},dt=ct,mt={admins:[]},ut={namspaced:!1,state:mt,mutations:dt,actions:ot,getters:lt},pt=ut,ft={getBlogs:function(t){nt.a.get("/api/blogs").then((function(a){t.commit("UPDATE_BLOGS",a.data.data)}))}},ht=ft,gt={blogs:function(t){return t.blogs}},vt=gt,_t={UPDATE_BLOGS:function(t,a){t.blogs=a}},bt=_t,Ct={blogs:[]},Nt={namspaced:!1,state:Ct,mutations:bt,actions:ht,getters:vt},kt=Nt,yt={getCities:function(t){nt.a.get("/api/cities").then((function(a){200===a.status&&t.commit("UPDATE_CITIES",a.data)})).catch((function(t){console.log(t)}))}},Pt=yt,Dt={cities:function(t){return t.cities}},Et=Dt,St={UPDATE_CITIES:function(t,a){t.cities=a}},xt=St,Tt={cities:[]},$t={namspaced:!1,state:Tt,mutations:xt,actions:Pt,getters:Et},wt=$t,Ot={getBookings:function(t){nt.a.get("/api/bookings").then((function(a){t.commit("UPDATE_BOOKINGS",a.data.data)}))}},It=Ot,At={bookings:function(t){return t.bookings}},Ut=At,Lt={UPDATE_BOOKINGS:function(t,a){t.bookings=a}},jt=Lt,Bt={bookings:[]},qt={namspaced:!1,state:Bt,mutations:jt,actions:It,getters:Ut},Ft=qt,Mt={getStyles:function(t){nt.a.get("/api/styles").then((function(a){t.commit("UPDATE_STYLES",a.data.data)}))}},Gt=Mt,Ht={styles:function(t){return t.styles}},Jt=Ht,Kt={UPDATE_STYLES:function(t,a){t.styles=a}},Rt=Kt,Yt={styles:[]},zt={namspaced:!1,state:Yt,mutations:Rt,actions:Gt,getters:Jt},Qt=zt,Vt=(e("d3b7"),{getDestinations:function(t){nt.a.get("/api/destinations").then((function(a){200===a.status&&t.commit("UPDATE_DESTINATIONS",a.data)})).catch((function(t){console.log(t)}))},updateDestination:function(t,a){return new Promise((function(e,i){nt.a.patch("/api/destinations/".concat(a.linkName),a).then((function(a){200===a.status?(t.commit("UPDATE_DESTINATIONS",a.data),e(!0)):i(a.statusText)})).catch((function(t){i(t)}))}))},addDestination:function(t,a){return new Promise((function(e,i){nt.a.post("/api/destinations",a).then((function(a){200===a.status?(t.commit("UPDATE_DESTINATIONS",a.data),e(!0)):i(a.statusText)})).catch((function(t){i(t)}))}))},deleteDestination:function(t,a){return new Promise((function(e,i){nt.a.delete("/api/destinations/"+a).then((function(a){200===a.status?(t.commit("UPDATE_DESTINATIONS",a.data),e(!0)):i(a.statusText)})).catch((function(t){i(t)}))}))}}),Wt=Vt,Xt=(e("7db0"),{destinations:function(t){return t.destinations},destById:function(t){return function(a){return t.destinations.find((function(t){return t._id===a}))}}}),Zt=Xt,ta={UPDATE_DESTINATIONS:function(t,a){t.destinations=a}},aa=ta,ea={destinations:[]},ia={namspaced:!1,state:ea,mutations:aa,actions:Wt,getters:Zt},na=ia,sa={getTours:function(t){nt.a.get("/api/tours").then((function(a){t.commit("UPDATE_TOURS",a.data.data)}))}},oa=sa,ra={tours:function(t){return t.tours}},la=ra,ca={UPDATE_TOURS:function(t,a){t.tours=a}},da=ca,ma={tours:[]},ua={namspaced:!1,state:ma,mutations:da,actions:oa,getters:la},pa=ua;i["a"].use(et["a"]);var fa=new et["a"].Store({modules:{admin:pt,blog:kt,city:wt,booking:Ft,style:Qt,destination:na,tour:pa}}),ha=new i["a"];i["a"].config.productionTip=!1,new i["a"]({bus:ha,router:at,store:fa,render:function(t){return t(x)}}).$mount("#app")},"5f87":function(t,a,e){},7440:function(t,a,e){},"85ec":function(t,a,e){},"888a":function(t,a,e){},c829:function(t,a,e){},d754:function(t,a,e){"use strict";var i=e("5f87"),n=e.n(i);n.a},de0f:function(t,a,e){"use strict";var i=e("29f4"),n=e.n(i);n.a},f562:function(t,a,e){},fbc2:function(t,a,e){"use strict";var i=e("4854"),n=e.n(i);n.a}});
//# sourceMappingURL=app.61a5ea3a.js.map