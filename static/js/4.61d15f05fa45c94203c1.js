(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(t,e,n){"use strict";for(var r=n(85),o=n(10),i=n(136),s=[],u=0;u<33;u++)s.push({text:"test-"+u,name:"name-"+u,size:"size-"+u,en:"en-"+u,value:u});e.a={store:r.a,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return s},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var n=this;this._initComp();function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),n.$store.dispatch(o.deviceSize,e))}window.addEventListener("resize",Object(i.a)(t,100)),t()}}},487:function(t,e,n){"use strict";n(198),n(199),n(43),n(200),n(201),t.exports={cssLoader:function(t,e,n){return function(){}}}},494:function(t,e,n){},495:function(t,e,n){n(101);t.exports=function(t){var e="";return e+='<div class="page-about"><p>关于小熊的事也关于你 关于我</p><p>关于留 关于走 关于喜欢与否</p><p>关于小熊的事也关于你 关于我</p><p>关于留 关于走 关于喜欢与否</p></div>'}},555:function(t,e,n){"use strict";n.r(e);n(494);var r=n(495),o=n.n(r),i=n(485);n(487);e.default={name:"PageAbout",template:o()(),mixins:[i.a],data:function(){return{}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);