webpackJsonp([28],{531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(564)),o=i(n(559));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageCompMotionFade",template:(0,a.default)(),mixins:[o.default],data:function(){return{testName:"test"}},methods:{fadeIn:function(){this.$refs.fade.enter()},fadeOut:function(){this.$refs.fade.leave()}}}},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(133)),o=i(n(93));function i(e){return e&&e.__esModule?e:{default:e}}for(var s=[],r=0;r<33;r++)s.push({text:"test-"+r,name:"name-"+r,size:"size-"+r,en:"en-"+r,value:r});t.default={store:a.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return s},appContent:function(){return this.$store.getters[o.default.appContent.get]},compStage:function(){return this.$store.getters[o.default.compStage.get]},typeUI:function(){return this.$store.getters[o.default.typeUI.get]},typeTheme:function(){return this.$store.getters[o.default.typeTheme.get]}},mounted:function(){this._initComp()}}},564:function(e,t,n){var a=n(94);e.exports=function(e){var t,n="",o={};return o.section=t=function(e,o){var i=this&&this.block;this&&this.attributes,n=n+'<section><router-link class="anchor-title"'+a.attr("id",e,!0,!0)+' tag="h1"'+a.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+a.escape(null==(t=o)?"":t)+"</span></router-link>",i?i&&i():n+="<p>暂无内容</p>",n+="</section>"},n+='<div class="component-transition"><article class="example-article">',o.section.call({block:function(){n=n+'<z-btn :ui="typeUI" :theme="typeTheme" @click="fadeIn">淡入</z-btn><z-btn class="z-css-m-l" :ui="typeUI" :theme="typeTheme" @click="fadeOut">淡出</z-btn><div class="transitioner"><z-motion-fade ref="fade" :offset="100"><div>我被淡淡了！</div></z-motion-fade></div><z-code type="html" :theme="typeTheme">'+a.escape(null==(t='<z-btn @click="fadeIn">')?"":t)+"\n  淡入\n"+a.escape(null==(t="</z-btn>")?"":t)+"\n\n"+a.escape(null==(t='<z-btn @click="fadeOut">')?"":t)+"\n  淡出\n"+a.escape(null==(t="</z-btn>")?"":t)+"\n\n"+a.escape(null==(t='<z-motion-fade ref="fade">')?"":t)+"\n  "+a.escape(null==(t="<div>我被淡淡了！</div>")?"":t)+"\n"+a.escape(null==(t="</z-motion-fade>")?"":t)+'</z-code><z-code type="js" :theme="typeTheme">...\n  methods: {\n    fadeIn() {\n      this.$refs.fade.enter()\n    },\n    fadeOut() {\n      this.$refs.fade.leave()\n    }\n  }</z-code>'}},"fade","淡淡"),n+="</article></div>"}}});