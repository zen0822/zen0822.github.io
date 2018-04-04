webpackJsonp([10],{537:function(l,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(574);var o=c(t(575)),a=c(t(556));t(186);function c(l){return l&&l.__esModule?l:{default:l}}e.default={name:"PageCompInput",template:(0,o.default)(),mixins:[a.default],data:function(){return{testName:"test"}},methods:{clickVerifyInput:function(){this.$refs.verifyInput.validate()}}}},556:function(l,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=c(t(185)),a=c(t(132));function c(l){return l&&l.__esModule?l:{default:l}}for(var z=[],b=0;b<33;b++)z.push({text:"test-"+b,name:"name-"+b,size:"size-"+b,en:"en-"+b,value:b});e.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(l){return this.$route.path+"#"+l},goAnchor:function(l){var e=l.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{testOpt:function(){return z},appContent:function(){return this.$store.getters[a.default.appContent.get]},compStage:function(){return this.$store.getters[a.default.compStage.get]}},mounted:function(){this._initComp()}}},574:function(l,e){},575:function(l,e,t){var o=t(92);l.exports=function(l){var e,t="",a={};return a.section=e=function(l,a){var c=this&&this.block;this&&this.attributes,t=t+'<section><router-link class="anchor-title"'+o.attr("id",l,!0,!0)+' tag="h1"'+o.attr(":to",'anchorLink("'+l+'")',!0,!0)+'><span @click="goAnchor">'+o.escape(null==(e=a)?"":e)+"</span></router-link>",c?c&&c():t+="<p>暂无内容</p>",t+="</section>"},t+='<div><article class="example-article">',a.section.call({block:function(){t=t+'<z-input block required helper-text="输入文本" multiline placeholder="asd输入区域" ref="startInput" ui="bootstrap"></z-input><z-code>'+o.escape(null==(e="<z-input")?"":e)+'\n  multiline\n  block\n  required\n  helper-text="输入文本"\n  '+o.escape(null==(e='ui="bootstrap"></z-input>')?"":e)+"</z-code>"}},"start","开始使用"),a.section.call({block:function(){t=t+'<z-input textLengthTip :max="10" label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input><z-code>'+o.escape(null==(e='<z-input label="区域标签" type="area" :row="4" placeholder="请输入..."></z-input>')?"":e)+"</z-code>"}},"textarea","输入区域"),a.section.call({block:function(){t=t+'<z-input completion label="补全功能" placeholder="请输入...会补全的..." ref="input"><z-search :option="testOpt" :input="false" ref="completion" slot="completion"></z-search></z-input><z-code>'+o.escape(null==(e="<z-input")?"":e)+"\n    "+o.escape(null==(e="completion")?"":e)+'\n    label="补全功能"\n    '+o.escape(null==(e='placeholder="请输入...会补全的..."')?"":e)+"\n    "+o.escape(null==(e='ref="input">')?"":e)+"\n  "+o.escape(null==(e="<z-search")?"":e)+"\n      "+o.escape(null==(e=':option="testOpt"')?"":e)+"\n      "+o.escape(null==(e='ref="completion"')?"":e)+"\n      "+o.escape(null==(e='slot="completion"></z-search>')?"":e)+"\n"+o.escape(null==(e="<z-input>")?"":e)+"</z-code>"}},"completion","补全功能"),a.section.call({block:function(){t=t+'<z-input active-verify label="手机" :min="2" :max="11" name="手机" placeholder="例如: 13111111111" helper-text="限制只能输入2-10位以内" verified-type="mobile" :header-span="4" ref="verifyInput"></z-input><z-btn class="z-css-m-l" @click.native="clickVerifyInput">点击验证是否为手机</z-btn><z-code>'+o.escape(null==(e="<z-input")?"":e)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="email"\n    '+o.escape(null==(e='ref="verifyInput"></z-input>')?"":e)+"</z-code>"}},"verify","验证功能"),a.section.call({block:function(){t=t+'<z-input :min="2" :max="10" error-message="邮箱" placeholder="限制只能输入2-10位以内" verified-type="email" :header-span="4"><div slot="header"><z-menu :init-opt="testOpt" style="width:40px;"></z-menu></div></z-input><z-btn class="z-css-m-l">点击验证是否为邮箱</z-btn><z-code>'+o.escape(null==(e="<z-input")?"":e)+'\n    :min="2"\n    :max="10"\n    error-message="邮箱"\n    placeholder="限制只能输入2-10位以内"\n    verifedType="mobile"\n    '+o.escape(null==(e='ref="verifyInput"></z-input>')?"":e)+"</z-code>"}},"append","添加附加项"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;类型&quot;, &quot;可选值&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>hidden</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>设置为隐藏域</z-table-col></z-table-row><z-table-row slot="2"><z-table-col>initVal</z-table-col><z-table-col>All</z-table-col><z-table-col>——</z-table-col><z-table-col>设置当前输入框的值</z-table-col></z-table-row><z-table-row slot="3"><z-table-col>number</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>输入框的数字指定为 nmuber 类型</z-table-col></z-table-row><z-table-row slot="4"><z-table-col>placeholder</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>占位符</z-table-col></z-table-row><z-table-row slot="5"><z-table-col>param</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>查询参数名</z-table-col></z-table-row><z-table-row slot="6"><z-table-col>readOnly</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为只读状态</z-table-col></z-table-row><z-table-row slot="7"><z-table-col>required</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否为必填，默认否</z-table-col></z-table-row><z-table-row slot="8"><z-table-col>row</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>textarea 的行数, 默认为 4</z-table-col></z-table-row><z-table-row slot="9"><z-table-col>textLengthTip</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>( *false | true )</z-table-col><z-table-col>显示当前输入的长度的提示</z-table-col></z-table-row><z-table-row slot="10"><z-table-col>type</z-table-col><z-table-col>String</z-table-col><z-table-col>(*input | textarea)</z-table-col><z-table-col>输入类型( text | textarea )</z-table-col></z-table-row><z-table-row slot="11"><z-table-col>theme</z-table-col><z-table-col>String</z-table-col><z-table-col>(default | *primary)</z-table-col><z-table-col>主题</z-table-col></z-table-row><z-table-row slot="12"><z-table-col>errorMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>input 为空和格式不对的错误信息</z-table-col></z-table-row><z-table-row slot="13"><z-table-col>errorTipType</z-table-col><z-table-col>String</z-table-col><z-table-col>( bubble | *tip )</z-table-col><z-table-col>弹出错误提示的类型（ bubble | tip ）</z-table-col></z-table-row><z-table-row slot="14"><z-table-col>formatMessage</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>格式错误的提示信息</z-table-col></z-table-row><z-table-row slot="15"><z-table-col>min</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最小长度（数字）</z-table-col></z-table-row><z-table-row slot="16"><z-table-col>max</z-table-col><z-table-col>Number</z-table-col><z-table-col>——</z-table-col><z-table-col>input，textarea 可输入最大长度（数字）</z-table-col></z-table-row><z-table-row slot="17"><z-table-col>regex</z-table-col><z-table-col>String</z-table-col><z-table-col>——</z-table-col><z-table-col>验证值的正则</z-table-col></z-table-row><z-table-row slot="18"><z-table-col>verifedType</z-table-col><z-table-col>String</z-table-col><z-table-col>(email | phone | password | url | tel)</z-table-col><z-table-col>验证值的类型</z-table-col></z-table-row><z-table-row slot="19"><z-table-col>completion</z-table-col><z-table-col>Boolean</z-table-col><z-table-col>——</z-table-col><z-table-col>是否启用自动搜索补全功能</z-table-col></z-table-row></z-table>'}},"props","props 数据类型"),a.section.call({block:function(){t+='<z-table border="row" auto :pageSize="10"><template slot="thead" v-for="item in [&quot;名字&quot;, &quot;返回值类型&quot;, &quot;说明&quot;]"><z-table-col>{{ item }}</z-table-col></template><z-table-row slot="1"><z-table-col>change</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li><li>value - 输入框的值</li></ul></z-table-col></z-table-row><z-table-row slot="2"><z-table-col>focus</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="3"><z-table-col>blur</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row><z-table-row slot="4"><z-table-col>keyup</z-table-col><z-table-col>Object</z-table-col><z-table-col><p>以下的为返回值说明</p><ul><li>emitter - 派送事件的宿主</li></ul></z-table-col></z-table-row></z-table>'}},"events","events 组件事件"),t+="</article></div>"}}});