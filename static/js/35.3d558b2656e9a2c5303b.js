(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{485:function(t,e,o){"use strict";for(var n=o(85),i=o(10),l=o(136),a=[],c=0;c<33;c++)a.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});e.a={store:n.a,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return a},appContent:function(){return this.$store.getters[i.appContent.get]},compStage:function(){return this.$store.getters[i.compStage.get]},typeUI:function(){return this.$store.getters[i.typeUI.get]},typeTheme:function(){return this.$store.getters[i.typeTheme.get]},deviceSize:function(){return this.$store.getters[i.deviceSize]}},mounted:function(){var o=this;this._initComp();function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),o.$store.dispatch(i.deviceSize,e))}window.addEventListener("resize",Object(l.a)(t,100)),t()}}},518:function(t,e,o){var l=o(101);t.exports=function(t){var n,i="",e={};return e.section=n=function(t,e){var o=this&&this.block;this&&this.attributes;i=i+'<section><router-link class="anchor-title"'+l.attr("id",t,!0,!0)+' tag="h1"'+l.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+l.escape(null==(n=e)?"":n)+"</span></router-link>",o?o&&o():i+="<p>暂无内容</p>",i+="</section>"},i+='<div><article class="example-article">',e.section.call({block:function(){i=i+'<z-icon kind="github" size="L"></z-icon><z-code :theme="typeTheme">'+l.escape(null==(n='<z-icon kind="github" size="L"></z-icon>')?"":n)+"</z-code>"}},"start","开始使用"),e.section.call({block:function(){i+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;30%&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>size</z-table-col><z-table-col>String</z-table-col><z-table-col>(*xs | s | m | l | xl)</z-table-col><z-table-col>图标尺寸</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>（fa | ali | *)</z-table-col><z-table-col><p>字符图标类型</p><ul><li>ali：默认值，vue2do 自带的 iconfont 图标</li><li>fa：内置的 fontawesome 的图标配置，但是需要自己加载 fontawesome 文件</li><li>自定义，用户自己加载 alimama 的 iconfont 文件进来，根据用户配置的图标前缀</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>kind</z-table-col><z-table-col>String</z-table-col><z-table-col>*</z-table-col><z-table-col>图标的种类（ex：fa-circle -> kind=\'circle\'，ali-fold -> kind=\'fold\')</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),i+="</article></div>"}},567:function(t,e,o){"use strict";o.r(e);var n=o(518),i=o.n(n),l=o(485);e.default={name:"PageCompIcon",template:i()(),mixins:[l.a],data:function(){return{testName:"test"}}}}}]);