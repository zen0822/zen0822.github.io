(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{485:function(t,e,n){"use strict";for(var i=n(85),r=n(10),o=n(136),s=[],c=0;c<33;c++)s.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});e.a={store:i.a,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return s},appContent:function(){return this.$store.getters[r.appContent.get]},compStage:function(){return this.$store.getters[r.compStage.get]},typeUI:function(){return this.$store.getters[r.typeUI.get]},typeTheme:function(){return this.$store.getters[r.typeTheme.get]},deviceSize:function(){return this.$store.getters[r.deviceSize]}},mounted:function(){var n=this;this._initComp();function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),n.$store.dispatch(r.deviceSize,e))}window.addEventListener("resize",Object(o.a)(t,100)),t()}}},551:function(t,e,n){var o=n(101);t.exports=function(t){var i,r="",e={};return e.section=i=function(t,e){var n=this&&this.block;this&&this.attributes;r=r+'<section><router-link class="anchor-title"'+o.attr("id",t,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(i=e)?"":i)+"</span></router-link>",n?n&&n():r+="<p>暂无内容</p>",r+="</section>"},r+='<div class="component-transition"><article class="example-article">',e.section.call({block:function(){r=r+'<z-btn :ui="typeUI" :theme="typeTheme" @click="rip">开始涟漪</z-btn><div class="transitioner"><div class="transitioner-rip"><div>我有涟漪效果了！</div><z-motion-rip ref="rip" :offset="100"></z-motion-rip></div></div><z-code type="html" :theme="typeTheme">'+o.escape(null==(i='<z-btn @click="rip">')?"":i)+"\n  开始涟漪\n"+o.escape(null==(i="</z-btn>")?"":i)+"\n\n"+o.escape(null==(i='<z-motion-rip ref="rip">')?"":i)+"\n  "+o.escape(null==(i="<div>我有涟漪效果了！</div>")?"":i)+"\n"+o.escape(null==(i="</z-motion-rip>")?"":i)+'</z-code><z-code type="js" :theme="typeTheme">...\n  methods: {\n    rip() {\n      this.$refs.rip.enter()\n    }\n  }</z-code>'}},"rip","涟漪"),r+="</article></div>"}},586:function(t,e,n){"use strict";n.r(e);var i=n(551),r=n.n(i),o=n(485);e.default={name:"PageCompMotionRip",template:r()(),mixins:[o.a],data:function(){return{testName:"test"}},methods:{rip:function(){this.$refs.rip.enter()}}}}}]);