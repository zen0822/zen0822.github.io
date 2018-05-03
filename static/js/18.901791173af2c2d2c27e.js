webpackJsonp([18],{550:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(599);var l=n(o(600)),a=n(o(556));function n(t){return t&&t.__esModule?t:{default:t}}e.default={name:"PageCompMotion",template:(0,l.default)(),mixins:[a.default],data:function(){return{testName:"test"}},methods:{zoomIn:function(){this.$refs.zoom.enter()},zoomOut:function(){this.$refs.zoom.leave()},slideIn:function(){this.$refs.slide.enter()},slideOut:function(){this.$refs.slide.leave()},fadeIn:function(){this.$refs.fade.enter()},fadeOut:function(){this.$refs.fade.leave()},unfold:function(){this.$refs.fold.enter()},fold:function(){this.$refs.fold.leave()},rip:function(){this.$refs.rip.enter()}}}},556:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(o(185)),a=n(o(132));function n(t){return t&&t.__esModule?t:{default:t}}for(var r=[],c=0;c<33;c++)r.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});e.default={store:l.default,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return r},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},599:function(t,e){},600:function(t,e,o){var l=o(92);t.exports=function(t){var e,o="",a={};return a.section=e=function(t,a){var n=this&&this.block;this&&this.attributes,o=o+'<section><router-link class="anchor-title"'+l.attr("id",t,!0,!0)+' tag="h1"'+l.attr(":to",'anchorLink("'+t+'")',!0,!0)+'><span @click="goAnchor">'+l.escape(null==(e=a)?"":e)+"</span></router-link>",n?n&&n():o+="<p>暂无内容</p>",o+="</section>"},o+='<div class="component-transition"><router-view></router-view><article class="example-article">',a.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>display</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>默认一开始是隐藏（进来之前的状态）</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>speed</z-table-col><z-table-col>string</z-table-col><z-table-col>slow | *normal | fast</z-table-col><z-table-col>过渡的速度</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>sync</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>调用多次动画时，动画与动画之间是否时同步</z-table-col></z-table-row></z-table>'}},"transitionProps","公共的 props"),a.section.call({block:function(){o+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>beforeEnter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡之前</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>enter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡期间</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>afterEnter</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>进来过渡完成</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row></z-table>'}},"transitionProps","公共的 event"),o+="</article></div>"}}});