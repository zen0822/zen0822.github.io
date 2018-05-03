webpackJsonp([5],{548:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(595);var l=n(o(596)),a=n(o(556));function n(t){return t&&t.__esModule?t:{default:t}}e.default={name:"PageCompTab",template:(0,l.default)(),mixins:[a.default],data:function(){return{testName:"test"}}}},556:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(o(185)),a=n(o(132));function n(t){return t&&t.__esModule?t:{default:t}}for(var c=[],r=0;r<33;r++)c.push({text:"test-"+r,name:"name-"+r,size:"size-"+r,en:"en-"+r,value:r});e.default={store:l.default,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return c},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},595:function(t,e){},596:function(t,e,o){var l=o(92);t.exports=function(t){var e,o="",a={};return a.section=e=function(t,a){var n=this&&this.block;this&&this.attributes,o=o+'<section><router-link class="anchor-title"'+l.attr("id",t,!0,!0)+' tag="h1"'+l.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+l.escape(null==(e=a)?"":e)+"</span></router-link>",n?n&&n():o+="<p>暂无内容</p>",o+="</section>"},o+='<div><article class="example-article">',a.section.call({block:function(){o=o+'<z-tab :ui="typeUI" :theme="typeTheme" query :init-opt="testOpt.slice(0, 8)"></z-tab><z-code type="html" :theme="typeTheme">'+l.escape(null==(e='<z-tab query :init-opt="testOpt"></z-tab>')?"":e)+"</z-code><z-code type=\"js\" :theme=\"typeTheme\">...\n  data() {\n    return {\n      testOpt: [{\n        value: 0,\n        text: 'test-0'\n      }, {\n        value: 1,\n        text: 'test-1'\n      }]\n    }\n  },\n...</z-code>"}},"start","开始使用"),a.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;23px&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>initOpt</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>tab 的初始选项</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>initVal</z-table-col><z-table-col>String, Number</z-table-col><z-table-col>——</z-table-col><z-table-col>初始化 tab 的当前 value 值</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>query</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>开启根据网址的 search 参数来选择选项卡</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>click</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>点击事件, 以下的为返回值说明</p><ul><li>emitter - 事件宿主</li><li>value - 当前选项卡的值</li><li>text - 当前选项卡的文本</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),o+="</article></div>"}}});