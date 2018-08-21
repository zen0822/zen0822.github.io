webpackJsonp([1],{541:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),t(580);var o=z(t(581)),a=z(t(559)),c=t(184),b=z(t(561));function z(e){return e&&e.__esModule?e:{default:e}}l.default={name:"PageCompModal",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test",homeBgImg:b.default}},methods:{simple:function(){this.$refs.simple.show()},alert:function(){(0,c.alert)({message:"这是一个警告弹窗",theme:this.typeTheme,ui:this.typeUI})},confirm:function(){(0,c.confirm)({message:"这是一个确认弹窗",title:"测试确认弹出",theme:"danger",ui:"bootstrap"})},showFullPop:function(){this.$refs.fullPop.show()},hideFullPop:function(){this.$refs.fullPop.hide()},purePop:function(){this.$refs.purePop.show()}}}},559:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=c(t(183)),a=c(t(132));function c(e){return e&&e.__esModule?e:{default:e}}for(var b=[],z=0;z<33;z++)b.push({text:"test-"+z,name:"name-"+z,size:"size-"+z,en:"en-"+z,value:z});l.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var l=e.currentTarget;this.compStage.scrollTop=l.offsetTop}},computed:{varPrefix:function(){return"VUE2DO"},testOpt:function(){return b},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]},typeUI:function(){return this.$store.getters[a.default.typeUI.get]},typeTheme:function(){return this.$store.getters[a.default.typeTheme.get]}},mounted:function(){this._initComp()}}},561:function(e,l,t){e.exports=t.p+"static/img/home-bg.c5db186.jpg"},580:function(e,l){},581:function(e,l,t){var o=t(93);e.exports=function(e){var l,t="",a={};return a.section=l=function(e,a){var c=this&&this.block;this&&this.attributes,t=t+'<section><router-link class="anchor-title"'+o.attr("id",e,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+e+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(l=a)?"":l)+"</span></router-link>",c?c&&c():t+="<p>暂无内容</p>",t+="</section>"},t+='<div class="component-modal"><article class="example-article">',a.section.call({block:function(){t=t+'<z-btn :ui="typeUI" :theme="typeTheme" @click="simple">确认</z-btn><z-modal :ui="typeUI" :theme="typeTheme" ref="simple"><p>这是一个简单</p><p>的小弹窗</p></z-modal><z-code :theme="typeTheme">'+o.escape(null==(l='<z-btn @click="simple">')?"":l)+"\n  确认\n"+o.escape(null==(l="</z-btn>")?"":l)+"\n"+o.escape(null==(l='<z-modal ref="simple">')?"":l)+"\n  "+o.escape(null==(l="<p> 这是一个简单</p>")?"":l)+"\n  "+o.escape(null==(l="<p> 的小弹窗</p>")?"":l)+"\n"+o.escape(null==(l="</z-modal>")?"":l)+"</z-code>"}},"start","弹窗"),a.section.call({block:function(){t=t+'<z-btn :ui="typeUI" :theme="typeTheme" @click="alert">警告弹窗</z-btn><z-code :theme="typeTheme">'+o.escape(null==(l='<z-btn @click="alert">')?"":l)+"\n  警告弹窗\n"+o.escape(null==(l="</z-btn>")?"":l)+"</z-code>"}},"alert","警告弹窗"),a.section.call({block:function(){t=t+'<z-btn :ui="typeUI" :theme="typeTheme" @click="confirm">确认弹窗</z-btn><z-code :theme="typeTheme">'+o.escape(null==(l='<z-btn @click="confirm">')?"":l)+"\n  这是一个确认弹窗\n"+o.escape(null==(l="</z-btn>")?"":l)+"</z-code>"}},"confirm","确认弹窗"),a.section.call({block:function(){t+='<z-btn :ui="typeUI" :theme="typeTheme" @click="showFullPop">全屏弹窗</z-btn><z-modal :ui="typeUI" :theme="typeTheme" commit header="dasfdfasdf" ok-btn="发布" type="full" ref="fullPop">';for(var e=0;e<8;)t=t+"<p>full-"+o.escape(null==(l=e++)?"":l)+"</p>";t=t+'</z-modal><z-code :theme="typeTheme">'+o.escape(null==(l='<z-modal header-name="custom" ref="modal">')?"":l)+"\n  "+o.escape(null==(l="<p>custom</p>")?"":l)+"\n"+o.escape(null==(l="</z-modal>")?"":l)+"\n</z-code>"}},"full","全屏弹窗 (移动端) "),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>coommit</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>当是 full 类型的时候，不用确认直接提交的模态框，默认为否</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>header</z-table-col><z-table-col>string</z-table-col><z-table-col>——</z-table-col><z-table-col>弹窗头部标题</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>message</z-table-col><z-table-col>string</z-table-col><z-table-col>——</z-table-col><z-table-col>模态框信息</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>okCb</z-table-col><z-table-col>function | boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>确定的回调函数，如果为 false 则执行默认的回调函数，否则如果是函数就执行，不是就不执行</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>noCb</z-table-col><z-table-col>function | boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>取消的回调函数，如果为 false 则执行默认的回调函数，否则如果是函数就执行，不是就不执行</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>okBtn</z-table-col><z-table-col>string</z-table-col><z-table-col>确定</z-table-col><z-table-col>确定按钮的名字</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>noBtn</z-table-col><z-table-col>string</z-table-col><z-table-col>取消</z-table-col><z-table-col>取消按钮的名字</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>noBtnDisplay</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*false | true</z-table-col><z-table-col>取消按钮是否显示</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>headerDisplay</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*(空)没有默认值 | false | true</z-table-col><z-table-col>弹窗头部状态，只有两种 显示和隐藏，默认为空则根据 type 属性来判断</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>footerDisplay</z-table-col><z-table-col>boolean</z-table-col><z-table-col>*(空)没有默认值 | false | true</z-table-col><z-table-col>弹窗低部状态，只有两种 显示和隐藏，默认为空则根据 type 属性来判断</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>height</z-table-col><z-table-col>string | number</z-table-col><z-table-col>([Number] | \'auto\' | \'100%\')</z-table-col><z-table-col>弹窗内容的高度</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>type</z-table-col><z-table-col>string</z-table-col><z-table-col>full | alert | confirm | simple | long</z-table-col><z-table-col>弹窗类型</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>show</z-table-col><z-table-col>Object</z-table-col><z-table-col><P>显示之后事件</P><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>hide</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>隐藏之后事件</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>ok</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>点击确定按钮事件</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>no</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>点击取消按钮事件</p><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的组件上下文</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>—— (default)</z-table-col><z-table-col>弹窗的主体内容</z-table-col></z-table-row></z-table>'}},"slots","slots 内容分发"),t+="</article></div>"}}});