webpackJsonp([2],{554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(607);var o=c(n(608)),r=c(n(609)),a=c(n(556)),u=c(n(132));n(186);function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"PageComponent",template:(0,o.default)(),mixins:[a.default],beforeRouteEnter:function(e,t,n){n(function(t){t.$nextTick(function(){t.goAnchor(e.hash.replace("#",""))})})},data:function(){return{menuOpt:r.default,testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},computed:{componentStyle:function(){var e=this.appContent,t=document.querySelector(".z-css-device-size"),n="";return t&&(n=getComputedStyle(t,":after").getPropertyValue("content")),e&&'"xs"'!==n?{height:e.offsetHeight+"px"}:{}}},methods:{optProcessor:function(e){return e.unshift({value:-1,text:"optProcessor"}),e},clickIcon:function(){},submit:function(){this.$refs.submit.openLoading(),this.$refs.formArea.verify(),console.log(this.$refs.formArea.queryOpt)},next:function(){this.$refs.shift.rotate()},goAnchor:function(e){if(!e)return!1;var t=document.getElementById(e);t&&(this.compStage.scrollTop=t.offsetTop)},afterEnter:function(){return this.goAnchor(this.$route.hash.replace("#",""))}},created:function(){for(var e=0;e<33;e++)this.dropMenuOpt.push({text:"test-"+e,name:"name-"+e,size:"size-"+e,en:"en-"+e,value:e})},mounted:function(){var e=this;setTimeout(function(){e.dropMenuOpt=e.dropMenuOpt.concat([{value:4,text:"test4"},{value:5,text:"test5"},{value:6,text:"test6"}]),e.initVal=["2","4"]},3e3),this.$nextTick(function(){e.$store.dispatch(u.default.compStage.add,e.$refs.compStage)})}}},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(185)),r=a(n(132));function a(e){return e&&e.__esModule?e:{default:e}}for(var u=[],c=0;c<33;c++)u.push({text:"test-"+c,name:"name-"+c,size:"size-"+c,en:"en-"+c,value:c});t.default={store:o.default,methods:{_initComp:function(){},anchorLink:function(e){return this.$route.path+"#"+e},goAnchor:function(e){var t=e.currentTarget;this.compStage.scrollTop=t.offsetTop}},computed:{testOpt:function(){return u},appContent:function(){return this.$store.getters[r.default.appContent.get]},compStage:function(){return this.$store.getters[r.default.compStage.get]}},mounted:function(){this._initComp()}}},607:function(e,t){},608:function(e,t,n){n(92);e.exports=function(e){var t="";return t+='<div class="p-component"><z-row :gap="30" align="start"><z-col class="p-component-menu" :style="componentStyle" :xs="12" :span="3" :xl="2"><z-nav type="vertical" title="组件导航" trigger="show" spread-all :init-opt="menuOpt"></z-nav></z-col><z-col class="p-component-stage" :style="componentStyle" ref="compStage" :xs="12" :span="9" :xl="10"><transition name="z-fade" v-on:after-enter="afterEnter"><router-view></router-view></transition></z-col></z-row></div>'}},609:function(e,t){e.exports=[{name:"开始使用",route:"/component/start"},{name:"表单控件",sub:[{name:"按钮组件",route:"/component/btn"},{name:"选择组件",route:"/component/check"},{name:"下拉选择组件",route:"/component/select"},{name:"输入组件",route:"/component/input"}]},{name:"弹窗",sub:[{name:"确认弹窗",route:"/component/modal#confirm"},{name:"消息弹窗",route:"/component/modal#alert"}]},{name:"提示",sub:[{name:"泡泡提示",route:"/component/tip#bubble"},{name:"弹窗提示",route:"/component/tip#alert"},{name:"底部提示",route:"/component/tip#toast"}]},{name:"数据展示",sub:[{name:"表格数据",route:"/component/table"},{name:"列表数据",route:"/component/list"}]},{name:"样式与布局",sub:[{name:"布局组件",route:"/component/grid"},{name:"图标组件",route:"/component/icon"}]},{name:"分页控件",sub:[{name:"加载更多",route:"/component/pager#more"},{name:"页码跳转",route:"/component/pager#page-num"}]},{name:"过渡动画",sub:[{name:"放大缩小",route:"/component/motion/zoom"},{name:"淡入淡出",route:"/component/motion/fade"},{name:"折叠展开",route:"/component/motion/fold"},{name:"滑来滑去",route:"/component/motion/slide"},{name:"涟漪效果",route:"/component/motion/rip"}]},{name:"其他组件",sub:[{name:"滚动条",route:"/component/scroller"},{name:"选项卡",route:"/component/tab"},{name:"弹出",route:"/component/pop"},{name:"省略",route:"/component/omit"},{name:"菜单",route:"/component/menu"}]}]}});