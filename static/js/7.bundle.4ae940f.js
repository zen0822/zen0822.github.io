(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{502:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return h}));for(var r=n(101),o=n(9),c=n(155),i=n(37),u=Object(r.c)(),p=[],s=0;s<33;s++)p.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});var a=Object(i.e)("VUE2DO"),d=Object(i.e)(p),f=(Object(r.b)(o.appContent.get),Object(r.b)(o.compStage.get)),l=(Object(r.b)(o.deviceSize.get),Object(r.b)(o.typeUI.get)),g=Object(r.b)(o.typeTheme.get),m=function(e){var t=e.currentTarget;f.scrollTop=t.offsetTop},v=function(e,t){return e.path+"#"+t},h=function(){function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),u.dispatch(o.deviceSize,t))}window.addEventListener("resize",Object(c.a)(e,100)),e()},b={store:u,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return a},testOpt:function(){return p},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var e=this;function t(){var t=document.querySelector(".z-css-device-size"),n="";t&&(n=getComputedStyle(t,":after").getPropertyValue("content"),e.$store.dispatch(o.deviceSize,n))}this._initComp(),window.addEventListener("resize",Object(c.a)(t,100)),t()}};t.b=b},507:function(e,t,n){},508:function(e,t,n){var r=n(124);e.exports=function(e){var t="";return t+'<div class="page-build"><article class="example-article"><p>构建单页应用（spa）和多页应用（mpa）</p><p>全局安装 vue2do</p><z-code type="shell">npm i vue2do -g</z-code><p>初始化应用项目</p><z-code type="shell">vue2do init project [projectName] // projectName: 项目名字</z-code><p>构建应用</p><z-code type="shell">cd [projectName] // 初始化的项目应用目录下\nvue2do build '+r.escape("<appType>")+" [appName]</z-code></article></div>"}},571:function(e,t,n){"use strict";n.r(t),n(507);var r=n(508),o=n.n(r),c=n(502);t.default={name:"PageBuild",template:o()(),mixins:[c.b],data:function(){return{}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);