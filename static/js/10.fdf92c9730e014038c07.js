(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{485:function(e,t,s){"use strict";for(var o=s(85),n=s(10),c=s(136),i=[],r=0;r<33;r++)i.push({text:"test-"+r,name:"name-"+r,size:"size-"+r,en:"en-"+r,value:r});t.a={store:o.a,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return i},appContent:function(){return this.$store.getters[n.appContent.get]},compStage:function(){return this.$store.getters[n.compStage.get]},typeUI:function(){return this.$store.getters[n.typeUI.get]},typeTheme:function(){return this.$store.getters[n.typeTheme.get]},deviceSize:function(){return this.$store.getters[n.deviceSize]}},mounted:function(){var s=this;this._initComp();function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),s.$store.dispatch(n.deviceSize,t))}window.addEventListener("resize",Object(c.a)(e,100)),e()}}},487:function(e,t,s){"use strict";s(198),s(199),s(43),s(200),s(201),e.exports={cssLoader:function(e,t,s){return function(){}}}},489:function(e,t,s){},490:function(e,t,s){s(101);e.exports=function(e){var t="";return t+='<div class="welcome"><div class="welcome-bg"><h3 class="z-css-text-center z-css-m-t-double">welcome to</h3><h2 class="z-css-text-center z-css-m-t-double">vue2do</h2></div><div class="welcome-container"><z-row align="start" justify="justify"><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">响应</div><p class="welcome-detail-col-text">适配任何设备，在移动端有更好的用户体验。\n支持五种尺寸的设备，让你不再担心适配不同设备的尺寸带来的烦恼。</p></z-col><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">灵活</div><p class="welcome-detail-col-text">组件和组件之间可以灵活组合，能满足任何需求。\n组件的功能丰富，能随意搭配成需要的功能</p></z-col><z-col class="welcome-detail-col" :l="4" :xs="12" :span="4"><div class="welcome-detail-col-title">样式</div><p class="welcome-detail-col-text">内置多种 UI 规范和主题，让组件不再单调，为您提供更多的样式选择。\n支持 primary、danger、success、warning、orange、light、dark 7 种主题颜色，\n将会支持谷歌的 material UI、bootstrap UI、苹果的 OS UI 和微软的 metro UI。</p></z-col></z-row></div></div>'}},552:function(e,t,s){"use strict";s.r(t);s(489);var o=s(490),n=s.n(o),c=s(485);s(487);t.default={name:"PageWelcome",template:n()(),mixins:[c.a],data:function(){return{}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);