"use strict";(self["webpackChunkarkose_vue2_example"]=self["webpackChunkarkose_vue2_example"]||[]).push([[604],{325:function(e,t,o){o.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e._self._c;return"inline"===e.mode?t("div",{attrs:{id:e.selector?.slice(1)}}):e._e()},r=[],i={name:"Arkose",props:{publicKey:{type:String,default:""},mode:{type:String,default:""},selector:{type:String,default:null},nonce:{type:String,default:""}},data(){return{scriptId:""}},methods:{removeScript(){const e=document.getElementById(this.scriptId);e&&e.remove()},loadScript(e,t){this.removeScript();const o=document.createElement("script");return o.id=this.scriptId,o.type="text/javascript",o.src=`https://client-api.arkoselabs.com/v2/${e}/api.js`,o.setAttribute("data-callback","setupEnforcement"),o.async=!0,o.defer=!0,t&&o.setAttribute("data-nonce",t),document.body.appendChild(o),o},setupEnforcement(e){window.myEnforcement=e,window.myEnforcement.setConfig({selector:this.selector,mode:this.mode,onReady:()=>{this.$emit("onReady"),window.myEnforcement.run()},onShown:()=>{this.$emit("onShown")},onShow:()=>{this.$emit("onShow")},onSuppress:()=>{this.$emit("onSuppress")},onCompleted:e=>{this.$emit("onCompleted",e.token)},onReset:()=>{this.$emit("onReset")},onHide:()=>{this.$emit("onHide")},onError:e=>{this.$emit("onError",e)},onFailed:e=>{this.$emit("onFailed",e)}})}},mounted(){this.scriptId=`arkose-script-${this.publicKey}`;const e=this.loadScript(this.publicKey,this.nonce);e.onload=()=>{console.log("Arkose API Script loaded"),window.setupEnforcement=this.setupEnforcement.bind(this)},e.onerror=()=>{console.log("Could not load the Arkose API Script!")}},destroyed(){window.myEnforcement&&delete window.myEnforcement,window.setupEnforcement&&delete window.setupEnforcement,this.removeScript()}},s=i,l=o(1),c=(0,l.Z)(s,n,r,!1,null,null,null),d=c.exports},604:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("Forgot Password")]),t("Arkose",{attrs:{"public-key":e.publicKey,mode:"inline",selector:"#arkose-ec"},on:{onCompleted:function(t){return e.onCompleted(t)},onError:function(t){return e.onError(t)}}}),t("input",{attrs:{type:"text",id:"email",name:"email",placeholder:"Email"}}),t("input",{attrs:{type:"submit",value:"Submit",disabled:!e.arkoseToken},on:{click:function(t){return e.onSubmit()}}}),t("nav",[t("router-link",{attrs:{to:"/"}},[e._v(" Login ")])],1)],1)},r=[],i=o(887),s=o(325),l={name:"ForgotPassword",components:{Arkose:s.Z},data(){return{publicKey:"11111111-1111-1111-1111-111111111111",arkoseToken:null}},methods:{onCompleted(e){this.arkoseToken=e},onError(e){alert(e)},onSubmit(){this.arkoseToken&&i.Z.replace({path:"/"})}}},c=l,d=o(1),a=(0,d.Z)(c,n,r,!1,null,null,null),u=a.exports}}]);
//# sourceMappingURL=604.25b22b84.js.map