(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],p=0,h=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0786":function(e,t,n){},"4d30":function(e,t,n){"use strict";var r=n("0786"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-body")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",[n("div",{staticClass:"container"},[n("div",{staticClass:"info"},[e._m(0),e._m(1),n("div",[e._v(" +"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.countryCode,expression:"user.countryCode"}],staticClass:"form-control",attrs:{type:"number",id:"cCode",maxlength:"2"},domProps:{value:e.user.countryCode},on:{focus:e.clearStatus,input:function(t){t.target.composing||e.$set(e.user,"countryCode",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phoneNumber,expression:"user.phoneNumber"}],staticClass:"form-control",attrs:{type:"number",id:"phoneNumber",maxlength:"10"},domProps:{value:e.user.phoneNumber},on:{focus:e.clearStatus,paste:function(t){return t.preventDefault(),e.onPaste(t)},input:function(t){t.target.composing||e.$set(e.user,"phoneNumber",t.target.value)}}}),e.error||e.success?e._e():n("div",[n("i",[e._v("Number count: ")]),n("span",{class:{success_message:this.validCountryCode&&this.validPhoneNumber,error_message:!this.validCountryCode||!this.validPhoneNumber},staticStyle:{"font-family":"sans-serif"}},[e._v(e._s(this.user.countryCode.length)+" + "+e._s(this.user.phoneNumber.length))])])]),e.error?n("p",{staticClass:"error_message"},[e._v(" ❗Please enter a 10 digit number with a 2 digit country code ")]):e._e(),e.success?n("p",{staticClass:"success_message"},[e._v(" ✅ Success! Make sure you don't have pop ups blocked! ")]):e._e(),n("button",{staticClass:"accent-button",attrs:{type:"button"},on:{click:e.handleSubmit}},[e._v("Start Chat")])]),n("div",{attrs:{id:"photo"}},[n("p",[e._v("+"+e._s(e.iPhoneOutput))])]),e._m(2)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("i",{staticClass:"fa fa-whatsapp",staticStyle:{color:"blue"},attrs:{"aria-hidden":"true"}}),e._v(" WhatsApp ASAP")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{margin:"0"}},[e._v("A simple way to open up a WhatsApp chat "),n("b",[e._v("without")]),e._v(" having to save the contact first."),n("br"),e._v(" Works on all phones and WhatsApp-Web")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://github.com/HashTalmiz/WhatsApp-ASAP",target:"_blank"}},[n("i",{staticClass:"fa fa-github",attrs:{id:"github-icon","aria-hidden":"true"}})]),n("p",[n("i",[e._v("© 2020 Talmiz Ahmed ")])])])}],i=(n("fb6a"),n("ac1f"),n("5319"),n("498a"),{name:"MainBody",data:function(){return{error:!1,success:!1,user:{phoneNumber:"",countryCode:"91"}}},beforeCreate:function(){document.title="WhatsApp ASAP | Open a New WhatsApp chat without saving to contacts first",console.log("HEY, what are you doing down here?")},computed:{validCountryCode:function(){return 2===this.user.countryCode.length},validPhoneNumber:function(){return 10===this.user.phoneNumber.length},iPhoneOutput:function(){return this.user.countryCode<=2&&this.user.phoneNumber<=10?this.user.countryCode+" "+this.user.phoneNumber:this.user.countryCode.slice(0,2)+" "+this.user.phoneNumber.slice(0,10)},redirectLink:function(){return"https://api.WhatsApp.com/send?phone=".concat(this.user.countryCode+this.user.phoneNumber)}},methods:{clearStatus:function(){this.error=!1,this.success=!1},sanitize:function(e){return e=e.trim(),e=e.replace(/[^\d]/g,""),e},handleSubmit:function(){this.clearStatus(),this.validCountryCode&&this.validPhoneNumber?(this.success=!0,this.openWhatsapp()):this.error=!0},onPaste:function(e){var t=e.clipboardData.getData("text"),n=this.sanitize(t);this.user.phoneNumber=n,console.log(this.user.phoneNumber)},openWhatsapp:function(){window.open("".concat(this.redirectLink))}}}),c=i,l=(n("4d30"),n("2877")),p=Object(l["a"])(c,a,u,!1,null,"3b02181d",null),h=p.exports,d={name:"App",components:{MainBody:h}},f=d,m=Object(l["a"])(f,o,s,!1,null,null,null),v=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.13a99a33.js.map