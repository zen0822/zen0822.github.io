webpackJsonp([21],{532:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e(564);var r,o=e(565),a=(r=o)&&r.__esModule?r:{default:r};e(186);t.default={template:a.default,data:function(){return{testName:"test",dropMenuOpt:[],classifyOpt:{recent:[{value:1,text:"test1"}],hot:[{value:1,text:"test1"},{value:2,text:"test2"},{value:3,text:"test3"}]},initVal:[]}},methods:{optProcessor:function(n){return n.unshift({value:-1,text:"optProcessor"}),n},clickIcon:function(){},submit:function(){this.$refs.submit.openLoading(),this.$refs.formArea.verify(),console.log(this.$refs.formArea.queryOpt)},next:function(){this.$refs.shift.rotate()}},created:function(){for(var n=0;n<33;n++)this.dropMenuOpt.push({text:"test-"+n,name:"name-"+n,size:"size-"+n,en:"en-"+n,value:n})},mounted:function(){var n=this;setTimeout(function(){n.dropMenuOpt=n.dropMenuOpt.concat([{value:4,text:"test4"},{value:5,text:"test5"},{value:6,text:"test6"}]),n.initVal=["2","4"]},3e3)}}},564:function(n,t){},565:function(n,t){n.exports='<div class="welcome">\r\n  <article class="example-article">\r\n    <section>\r\n      <h1 class="anchor-title" id="z-btn-component">\r\n        <a href="#z-btn-component">按钮组件</a>\r\n      </h1>\r\n      <z-btn>提交</z-btn>\r\n      <z-btn kind="success">成功</z-btn>\r\n      <z-btn kind="warning">提交</z-btn>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="select-component">\r\n        <a href="#select-component">下拉框组件</a>\r\n      </h1>\r\n      <z-menu\r\n          :multiple="true"\r\n          :search="true"\r\n          :select-all="true"\r\n          :init-val="initVal">\r\n        <z-menu-ele value="1">{{ testName }}</z-menu-ele>\r\n        <z-menu-ele value="2">测试2</z-menu-ele>\r\n        <z-menu-ele value="3">测试222</z-menu-ele>\r\n        <z-menu-ele value="4">测试3</z-menu-ele>\r\n        <z-menu-ele value="5">测试4</z-menu-ele>\r\n      </z-menu>\r\n\r\n      <z-menu\r\n          :multiple="true"\r\n          :search="true"\r\n          :select-all="true"\r\n          :init-val="[1, 3]"\r\n          :classify="[{\r\n            key: \'recent\',\r\n            text: \'最近\'\r\n          }, {\r\n            key: \'hot\',\r\n            text: \'热门\'\r\n          }]"\r\n          :classify-opt="classifyOpt"></z-menu>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="form-component">\r\n        <a href="#form-component">表单组件</a>\r\n      </h1>\r\n\r\n      <z-form slot="1" ref="formArea">\r\n          <z-row :gap="10">\r\n            <z-col :span="6">test2: </z-col>\r\n            <z-col :span="6">\r\n              <z-menu\r\n                  :init-opt="dropMenuOpt"\r\n                  :init-val="2"\r\n                  :opt-processor="optProcessor"\r\n                  query-name="test3"></z-menu>\r\n            </z-col>\r\n          </z-row>\r\n\r\n          <z-row :gap="10">\r\n            <z-col :span="6">name: </z-col>\r\n            <z-col :span="6">\r\n              <z-input\r\n                  number\r\n                  init-val="test-input"\r\n                  query-name="name">\r\n              </z-input>\r\n            </z-col>\r\n          </z-row>\r\n\r\n          <z-row :gap="10">\r\n            <z-col :offset="6">\r\n              <z-btn ref="submit" @click="submit">提交</z-btn>\r\n            </z-col>\r\n          </z-row>\r\n        </z-form>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="list-component">\r\n        <a href="#list-component">列表组件</a>\r\n      </h1>\r\n      <z-list\r\n          page-type="more"\r\n          page-trigger="click"\r\n          scroller-auto-hide\r\n          auto\r\n          pager\r\n          :page-size="7"\r\n          :item="dropMenuOpt"\r\n          class="z-css-m-t">\r\n        <template slot-scope="props">\r\n          <div>{{ props.item.text }}</div>\r\n        </template>\r\n      </z-list>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="table-component">\r\n        <a href="#table-component">表格组件</a>\r\n      </h1>\r\n      <z-table\r\n          auto\r\n          :thead="[\'test\', \'name\', \'en\']"\r\n          :tbody="dropMenuOpt">\r\n        <template slot="thead" v-for="item in [\'test\', \'name\', \'en\']">\r\n          <z-table-col>{{ item }}</z-table-col>\r\n        </template>\r\n\r\n        <template slot="tbody" slot-scope="props">\r\n          <z-table-col>{{ props.item.text }}</z-table-col>\r\n          <z-table-col>{{ props.item.name }}</z-table-col>\r\n          <z-table-col>{{ props.item.en }}</z-table-col>\r\n        </template>\r\n      </z-table>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="layout-component">\r\n        <a href="#layout-component">布局组件</a>\r\n      </h1>\r\n      <z-row :gap="10">\r\n        <z-col :span="6" :m=4 :xs="12">name: </z-col>\r\n        <z-col :span="4" :m="4" :s="8">\r\n          <z-input\r\n              number\r\n              init-val="test-input"\r\n              query-name="test">\r\n          </z-input>\r\n        </z-col>\r\n        <z-col :span="2" :m="4" :s="4">\r\n          <z-input init-val="test-input" query-name="test"></z-input>\r\n        </z-col>\r\n      </z-row>\r\n      <z-row :gap="10">\r\n        <z-col :grid="{xs: 10, s: 8}" :m="4" :xs="12" :span="6">test1: </z-col>\r\n        <z-col :span="6">\r\n          <z-menu\r\n              @click="clickIcon"\r\n              query-name="test2"\r\n              init-val="2">\r\n            <z-menu-ele value="1">{{ testName }}</z-menu-ele>\r\n            <z-menu-ele value="2">测试2</z-menu-ele>\r\n          </z-menu>\r\n        </z-col>\r\n      </z-row>\r\n\r\n      <z-row :gap="10">\r\n        <z-col :push="6" :span="6">test3: </z-col>\r\n        <z-col :pull="6" :span="6">test3: </z-col>\r\n      </z-row>\r\n      <z-row :gap="10">\r\n        <z-col :span="12" :offset="6">\r\n          <z-btn ref="submit" @click="submit">提交</z-btn>\r\n        </z-col>\r\n      </z-row>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="shift-component">\r\n        <a href="#shift-component">切换组件</a>\r\n      </h1>\r\n\r\n      <z-shift ref="shift" :index="1">\r\n\r\n\r\n      </z-shift>\r\n\r\n      <z-pop ref="pop">sadf</z-pop>\r\n      <z-btn @click="next">next</z-btn>\r\n    </section>\r\n\r\n    <section>\r\n      <h1 class="anchor-title" id="tab-component">\r\n        <a href="#tab-component">选项卡组件</a>\r\n      </h1>\r\n\r\n      <article>\r\n        <h3>可以嵌套自定义组件</h3>\r\n        <z-tab slot="2">\r\n          <z-tab-ele slot="1" value="1" text="tab1">\r\n            <z-btn @click="next">tab1</z-btn>\r\n          </z-tab-ele>\r\n          <z-tab-ele slot="2" value="2" text="tab2">\r\n            <z-btn @click="next">tab2</z-btn>\r\n          </z-tab-ele>\r\n        </z-tab>\r\n      </article>\r\n\r\n      <article>\r\n        <h3>传入初始化数据</h3>\r\n        <z-tab\r\n            slot="3"\r\n            :init-opt="[{\r\n              value: 1,\r\n              text: \'tab-1-1\'\r\n            }, {\r\n              value: 2,\r\n              text: \'tab-1-2\'\r\n            }, {\r\n              value: 3,\r\n              text: \'tab-1-3\'\r\n            }]"></z-tab>\r\n      </article>\r\n    </section>\r\n  </article>\r\n</div>'}});