webpackJsonp([4],{546:function(l,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e(591);var o=c(e(592)),a=c(e(556));function c(l){return l&&l.__esModule?l:{default:l}}t.default={template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test"}}}},556:function(l,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(e(185)),a=c(e(132));function c(l){return l&&l.__esModule?l:{default:l}}for(var z=[],b=0;b<33;b++)z.push({text:"test-"+b,name:"name-"+b,size:"size-"+b,en:"en-"+b,value:b});t.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(l){return this.$route.path+"#"+l},goAnchor:function(l){var t=l.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return z},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},591:function(l,t){},592:function(l,t,e){var o=e(92);l.exports=function(l){var t,e="",a={};return a.section=t=function(l,a){var c=this&&this.block;this&&this.attributes,e=e+'<section><router-link class="anchor-title"'+o.attr("id",l,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+l+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(t=a)?"":t)+"</span></router-link>",c?c&&c():e+="<p>暂无内容</p>",e+="</section>"},e+='<div><article class="example-article">',a.section.call({block:function(){e=e+'<z-row :gap="10"><z-col :l="4" :xs="12">name:</z-col><z-col :l="4" :xs="8"><z-input number init-val="test-input"></z-input></z-col><z-col :l="4" :xs="4">测试1</z-col></z-row><z-row :gap="10"><z-col :l="4" :xs="12">test1:</z-col><z-col :l="8" :xs="12"><z-input required label="ex: 张三"></z-input></z-col></z-row><z-code :theme="typeTheme">'+o.escape(null==(t='<z-row :gap="10">')?"":t)+"\n  "+o.escape(null==(t='<z-col :l="4" :xs="12">name: </z-col>')?"":t)+"\n  "+o.escape(null==(t='<z-col :l="4" :xs="8">')?"":t)+"\n    "+o.escape(null==(t="<z-input")?"":t)+"\n        number\n        "+o.escape(null==(t='init-val="test-input"')?"":t)+"\n    "+o.escape(null==(t="</z-input>")?"":t)+"\n  "+o.escape(null==(t="</z-col>")?"":t)+"\n  "+o.escape(null==(t='<z-col :l="4" :xs="4">')?"":t)+"\n    "+o.escape(null==(t='<z-input init-val="test-input" query-name="test"></z-input>')?"":t)+"\n  "+o.escape(null==(t="</z-col>")?"":t)+"\n"+o.escape(null==(t="</z-row>")?"":t)+"\n"+o.escape(null==(t='<z-row :gap="10">')?"":t)+"\n  "+o.escape(null==(t='<z-col :l="4" :xs="12">test1: </z-col>')?"":t)+"\n  "+o.escape(null==(t='<z-col :l="8" :xs="12">')?"":t)+"\n    "+o.escape(null==(t='<z-input required label="ex: 张三"></z-input>')?"":t)+"\n  "+o.escape(null==(t="</z-col>")?"":t)+"\n"+o.escape(null==(t="</z-row>")?"":t)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){e+='<z-table border="row" stripe auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>align</z-table-col><z-table-col>String</z-table-col><z-table-col>(start, end, *center)</z-table-col><z-table-col>定义了列在行上垂直方向上的对齐方式，对应 flex 的 align-items 属性</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>gap</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>每列的间隔是多少（px）-- 草案</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>justify</z-table-col><z-table-col>String</z-table-col><z-table-col>(start, end, center, *justify)</z-table-col><z-table-col>定义了列在行上的水平空间的对齐方式，对应 flex 的 justify-content 属性</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>wrap</z-table-col><z-table-col>String</z-table-col><z-table-col>(nowrap | wrap)</z-table-col><z-table-col>定义列的换行模式，对应 flex 的 flex-wrap 属性（nowrap | wrap）</z-table-col></z-table-row></z-table>'}},"rowProps","row 的 props 数据类型"),a.section.call({block:function(){e+='<z-table border="row" stripe auto :pageSize="10"><template slot="thead" v-for="(item, index) in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col :max-width="index === 3 ? &quot;30%&quot; : &quot;&quot;">{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>gap</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>定义间隔的宽度（px），覆盖行设置的间隔 (5, 10, 20, 30, 40, 50)</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>pull</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>定义了列在 x 反方向偏移的栅格数</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>push</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>定义了列在 x 正方向偏移的栅格数</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>offset</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>定义了列离开头的栅格数</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>span</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>定义了列在行上的水平跨度（采用 12 栏栅格）</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>xs</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>加小型设备的水平跨度栅格数</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>s</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>小型设备的水平跨度栅格数</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>m</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>中型设备的水平跨度栅格数</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>l</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>大型设备的水平跨度栅格数</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>xl</z-table-col><z-table-col>Number</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col>加大型设备的水平跨度栅格数</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>grid</z-table-col><z-table-col>Object</z-table-col><z-table-col>(1~12)</z-table-col><z-table-col><p>集合所有设备水平跨度的栅格数，例如</p>\n{xs: 4, l: 8, span: 9}</z-table-col></z-table-row></z-table>'}},"colProps","col 的 props 数据类型"),e+="</article></div>"}}});