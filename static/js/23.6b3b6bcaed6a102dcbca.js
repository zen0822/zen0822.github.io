(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{485:function(e,t,l){"use strict";for(var n=l(85),o=l(10),a=l(136),u=[],c=0;c<33;c++)u.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});t.a={store:n.a,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return u},appContent:function(){return this.$store.getters[o.appContent.get]},compStage:function(){return this.$store.getters[o.compStage.get]},typeUI:function(){return this.$store.getters[o.typeUI.get]},typeTheme:function(){return this.$store.getters[o.typeTheme.get]},deviceSize:function(){return this.$store.getters[o.deviceSize]}},mounted:function(){var l=this;this._initComp();function e(){var e=document.querySelector(".z-css-device-size"),t="";e&&(t=getComputedStyle(e,":after").getPropertyValue("content"),l.$store.dispatch(o.deviceSize,t))}window.addEventListener("resize",Object(a.a)(e,100)),e()}}},539:function(e,t,l){},540:function(e,t,l){var a=l(101);e.exports=function(e){var n,o="",t={};return t.section=n=function(e,t){var l=this&&this.block;this&&this.attributes;o=o+'<section><router-link class="anchor-title"'+a.attr("id",e,!0,!0)+' tag="h1"'+a.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+a.escape(null==(n=t)?"":n)+"</span></router-link>",l?l&&l():o+="<p>暂无内容</p>",o+="</section>"},o+='<div><article class="example-article">',t.section.call({block:function(){o=o+'<z-menu :ui="typeUI" :theme="typeTheme"><z-menu-ele value="1">{{ testName }}</z-menu-ele><z-menu-ele value="2"><z-btn>按钮</z-btn></z-menu-ele><z-menu-ele value="3">测试3</z-menu-ele><z-menu-ele value="4">测试4</z-menu-ele><z-menu-ele value="5">测试5</z-menu-ele></z-menu><z-code :theme="typeTheme">'+a.escape(null==(n="<z-menu>")?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="1">{{ testName }}</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="2">')?"":n)+"\n    "+a.escape(null==(n="<z-btn>按钮</z-btn>")?"":n)+"\n  "+a.escape(null==(n="</z-menu-ele>")?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="3">测试222</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="4">测试3</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="5">测试4</z-menu-ele>')?"":n)+"\n"+a.escape(null==(n="</z-menu>")?"":n)+"</z-code>"}},"start","开始使用"),t.section.call({block:function(){o=o+'<p class="section-description">使用自定义的触发器，并且不遮盖触发器</p><z-menu :ui="typeUI" :theme="typeTheme" noCoverTrig><z-btn slot="trigger" type="text">菜单</z-btn><z-menu-ele value="1">{{ testName }}</z-menu-ele><z-menu-ele value="2"><z-btn>按钮</z-btn></z-menu-ele><z-menu-ele value="3">测试3</z-menu-ele><z-menu-ele value="4">测试4</z-menu-ele><z-menu-ele value="5">测试5</z-menu-ele></z-menu><z-code :theme="typeTheme">'+a.escape(null==(n="<z-menu noCoverTrig>")?"":n)+"\n  "+a.escape(null==(n='<z-menu-trig slot="trigger"><z-btn type="text" />菜单</z-btn></z-menu-trig>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="1">{{ testName }}</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="2">')?"":n)+"\n    "+a.escape(null==(n="<z-btn>按钮</z-btn>")?"":n)+"\n  "+a.escape(null==(n="</z-menu-ele>")?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="3">测试222</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="4">测试3</z-menu-ele>')?"":n)+"\n  "+a.escape(null==(n='<z-menu-ele value="5">测试4</z-menu-ele>')?"":n)+"\n"+a.escape(null==(n="</z-menu>")?"":n)+"</z-code>"}},"start","开始使用"),t.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>store</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col>储存实例化的信息</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>noCoverTrig</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>菜单展开是不遮挡触发器，TODO： pc 上默认是不遮挡的，mobile 是默认遮挡的</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>noTrig</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>不使用组件自带的菜单触发器</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>height</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单高度，1、auto：根据菜单内容的高度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>width</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单宽度，1、auto：根据菜单内容的宽度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>trigHeight</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>菜单触发器的高度，1、auto：根据菜单内容的高度，2、数字：输入数字就是自定义的像素高度</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),o+="</article></div>"}},578:function(e,t,l){"use strict";l.r(t);l(539);var n=l(540),o=l.n(n),a=l(485);t.default={name:"PageCompMenu",template:o()(),mixins:[a.a],data:function(){return{testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},computed:{selectOpt:function(){return this.testOpt.unshift({value:-1,text:"请选择"}),this.testOpt}}}}}]);