(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{485:function(l,e,t){"use strict";for(var o=t(85),a=t(10),c=t(136),b=[],z=0;z<33;z++)b.push({text:"test-"+z,name:"name-"+z,size:"size-"+z,en:"en-"+z,value:z});e.a={store:o.a,methods:{_initComp:function(){},anchorLink:function(l){return this.$route.path+"#"+l},goAnchor:function(l){var e=l.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return b},appContent:function(){return this.$store.getters[a.appContent.get]},compStage:function(){return this.$store.getters[a.compStage.get]},typeUI:function(){return this.$store.getters[a.typeUI.get]},typeTheme:function(){return this.$store.getters[a.typeTheme.get]},deviceSize:function(){return this.$store.getters[a.deviceSize]}},mounted:function(){var t=this;this._initComp();function l(){var l=document.querySelector(".z-css-device-size"),e="";l&&(e=getComputedStyle(l,":after").getPropertyValue("content"),t.$store.dispatch(a.deviceSize,e))}window.addEventListener("resize",Object(c.a)(l,100)),l()}}},527:function(l,e,t){},528:function(l,e,t){var c=t(101);l.exports=function(l){var o,a="",e={};return e.section=o=function(l,e){var t=this&&this.block;this&&this.attributes;a=a+'<section><router-link class="anchor-title"'+c.attr("id",l,!0,!0)+' tag="h1"'+c.attr(":to",'anchorLink("'+l+'")',!0,!0)+'><span @click="goAnchor">'+c.escape(null==(o=e)?"":o)+"</span></router-link>",t?t&&t():a+="<p>暂无内容</p>",a+="</section>"},a+='<div><article class="example-article">',e.section.call({block:function(){a=a+'<z-table :ui="typeUI" :theme="typeTheme"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>display</z-table-col><z-table-col>布尔值</z-table-col><z-table-col>true</z-table-col><z-table-col>分页的显示状态</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>display2</z-table-col><z-table-col>布</z-table-col><z-table-col>false</z-table-col><z-table-col>分页的显示状态</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>display3</z-table-col><z-table-col>布尔值</z-table-col><z-table-col>true</z-table-col><z-table-col>撒旦发</z-table-col></z-table-row></z-table><z-code :theme="typeTheme" v-pre>'+c.escape(null==(o='<z-table ui="bootstrap">')?"":o)+"\n  "+c.escape(null==(o="<")?"":o)+"template slot=\"thead\" v-for=\"item in ['名字', '类型', '可选值', '说明']\""+c.escape(null==(o=">")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>{{ item }}</z-table-col>")?"":o)+"\n  "+c.escape(null==(o="</template>")?"":o)+"\n  "+c.escape(null==(o='<z-table-row slot="1">')?"":o)+"\n    "+c.escape(null==(o="<z-table-col>display</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>布尔值</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>true</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>分页的显示状态</z-table-col>")?"":o)+"\n  "+c.escape(null==(o="</z-table-row>")?"":o)+"\n  "+c.escape(null==(o='<z-table-row slot="2">')?"":o)+"\n    "+c.escape(null==(o="<z-table-col>display2</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>布尔值</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>false</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col></z-table-col>")?"":o)+"\n  "+c.escape(null==(o="</z-table-row>")?"":o)+"\n  "+c.escape(null==(o='<z-table-row slot="3">')?"":o)+"\n    "+c.escape(null==(o="<z-table-col>display3</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>布尔值</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>true</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>显示</z-table-col>")?"":o)+"\n  "+c.escape(null==(o="</z-table-row>")?"":o)+"\n"+c.escape(null==(o="</z-table>")?"":o)+"</z-code>"}},"start","开始使用"),e.section.call({block:function(){a=a+'<z-table auto list pager :page-size="11" :thead="[&quot;test&quot;, &quot;name&quot;, &quot;en&quot;]" :tbody="testOpt"><template slot="thead"><z-table-col max-width="30%">test</z-table-col><z-table-col>name</z-table-col><z-table-col max-width="100px">en</z-table-col></template><template slot="tbody" slot-scope="props"><z-table-col>{{ props.item.text }}</z-table-col><z-table-col>{{ props.item.name }}</z-table-col><z-table-col>{{ props.item.en }}</z-table-col></template></z-table><z-code v-pre>'+c.escape(null==(o="<z-table")?"":o)+"\n    auto\n    list\n    pager\n    :pageSize=\"10\"\n    :thead=\"['test', 'name', 'en']\"\n    "+c.escape(null==(o=':tbody="testOpt">')?"":o)+"\n  "+c.escape(null==(o='<template slot="thead">')?"":o)+"\n    "+c.escape(null==(o='<z-table-col max-width="30%">test</z-table-col>')?"":o)+"\n    "+c.escape(null==(o="<z-table-col>name</z-table-col>")?"":o)+"\n    "+c.escape(null==(o='<z-table-col max-width="100px">en</z-table-col>')?"":o)+"\n  "+c.escape(null==(o="</template>")?"":o)+"\n  "+c.escape(null==(o='<template slot="tbody" slot-scope="props">')?"":o)+"\n    "+c.escape(null==(o="<z-table-col>{{ props.item.text }}</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>{{ props.item.name }}</z-table-col>")?"":o)+"\n    "+c.escape(null==(o="<z-table-col>{{ props.item.en }}</z-table-col>")?"":o)+"\n  "+c.escape(null==(o="</template>")?"":o)+"\n"+c.escape(null==(o="</z-table>")?"":o)+"</z-code>"}},"list","展示列表化的表格数据"),e.section.call({block:function(){a+='<z-table scrollerAutoHide border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>auto</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>根据传入的列表数据生成分页数据</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>border</z-table-col><z-table-col>String</z-table-col><z-table-col>(*none | all | row | col)</z-table-col><z-table-col><p>表格的边界线的类型，</p>\n（none：默认是不要边界线，all：横竖都要，row：只要行与行之间要，col：只要列与列之间要）</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>page</z-table-col><z-table-col>Object</z-table-col><z-table-col>——</z-table-col><z-table-col><p>分页数据（没传的话，默认将传的列表数据（item）作为分页数据）</p><ul><li>current - 当前页码</li><li>total - 总共页码</li><li>length - 数据总长度</li><li>size - 每页展示的数据长度</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>pager</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>启动分页功能</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>list</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>默认是不以列表化的表格数据</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>thead</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>表头标题数据</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>tbody</z-table-col><z-table-col>Array</z-table-col><z-table-col>——</z-table-col><z-table-col>列表标题数据</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>pageSize</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>将列表数据（item）分为每页多少条数据, 默认为 5。</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>scrollerAutoHide</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>启动滚动条自动隐藏</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),e.section.call({block:function(){a+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>switchPage</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>换页触发事件, 返回值说明：</p><ul><li>currentPage: 当前页码</li><li>emitter: 派送事件的 viewModel</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 事件"),a+="</article></div>"}},572:function(l,e,t){"use strict";t.r(e);t(527);var o=t(528),a=t.n(o),c=t(485);e.default={name:"PageCompTable",template:a()(),mixins:[c.a],data:function(){return{testName:"test"}}}}}]);