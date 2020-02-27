(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{502:function(t,e,n){"use strict";n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return f}));for(var r=n(101),l=n(9),o=n(155),a=n(37),c=Object(r.c)(),i=[],s=0;s<33;s++)i.push({text:"test-"+s,name:"name-"+s,size:"size-"+s,en:"en-"+s,value:s});var z=Object(a.e)("VUE2DO"),b=Object(a.e)(i),p=(Object(r.b)(l.appContent.get),Object(r.b)(l.compStage.get)),u=(Object(r.b)(l.deviceSize.get),Object(r.b)(l.typeUI.get)),g=Object(r.b)(l.typeTheme.get),d=function(t){var e=t.currentTarget;p.scrollTop=e.offsetTop},h=function(t,e){return t.path+"#"+e},f=function(){function t(){var t=document.querySelector(".z-css-device-size"),e="";t&&(e=getComputedStyle(t,":after").getPropertyValue("content"),c.dispatch(l.deviceSize,e))}window.addEventListener("resize",Object(o.a)(t,100)),t()},m={store:c,methods:{_initComp:function(){},anchorLink:function(t){return this.$route.path+"#"+t},goAnchor:function(t){var e=t.currentTarget;this.compStage.scrollTop=e.offsetTop}},computed:{varPrefix:function(){return z},testOpt:function(){return i},appContent:function(){return this.$store.getters[l.appContent.get]},compStage:function(){return this.$store.getters[l.compStage.get]},typeUI:function(){return this.$store.getters[l.typeUI.get]},typeTheme:function(){return this.$store.getters[l.typeTheme.get]},deviceSize:function(){return this.$store.getters[l.deviceSize]}},mounted:function(){var t=this;function e(){var e=document.querySelector(".z-css-device-size"),n="";e&&(n=getComputedStyle(e,":after").getPropertyValue("content"),t.$store.dispatch(l.deviceSize,n))}this._initComp(),window.addEventListener("resize",Object(o.a)(e,100)),e()}};e.b=m},545:function(t,e,n){},546:function(t,e){t.exports='<div class="component-page">\r\n  <article class="example-article">\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :to="anchorLink(\'basic\')">\r\n        <span @click="goAnchor">基本用法</span>\r\n      </router-link>\r\n\r\n      <p class="section-description">默认是点击数字的分页形式</p>\r\n\r\n      <z-page :data="{\r\n        length: 24,\r\n        size: 5,\r\n        total: 5,\r\n        current: 2\r\n      }"></z-page>\r\n\r\n      <z-code v-pre>&ltz-page :data="{\r\n  length: 24,\r\n  size: 5,\r\n  total: 5,\r\n  current: 2\r\n}">&lt/z-page&gt</z-code>\r\n    </section>\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :to="anchorLink(\'more\')">\r\n        <span @click="goAnchor">加载更多的分页形式</span>\r\n      </router-link>\r\n\r\n      <z-page auto :data="pageData" type="more"></z-page>\r\n\r\n      <z-code v-pre>&ltz-page auto :data="pageData" type="more"&gt&lt/z-page&gt</z-code>\r\n    </section>\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :to="anchorLink(\'auto\')">\r\n        <span @click="goAnchor">自动计算分页数据</span>\r\n      </router-link>\r\n\r\n      <z-page auto :data="{\r\n        length: 24,\r\n        size: 5\r\n      }"></z-page>\r\n\r\n      <z-code v-pre>&ltz-page auto :data="{\r\n  length: 24,\r\n  size: 5\r\n}"&gt&lt/z-page&gt</z-code>\r\n    </section>\r\n\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :list="false"\r\n          :to="anchorLink(\'props\')">\r\n        <span @click="goAnchor">props 数据类型</span>\r\n      </router-link>\r\n\r\n      <z-table\r\n          border="row"\r\n          auto\r\n          :pageSize="10">\r\n        <template slot="thead" v-for="item in [\'名字\', \'类型\', \'可选值\', \'说明\']">\r\n          <z-table-col>{{ item }}</z-table-col>\r\n        </template>\r\n\r\n        <z-table-row slot="1">\r\n          <z-table-col>auto</z-table-col>\r\n          <z-table-col>Boolean</z-table-col>\r\n          <z-table-col>(*false | true)</z-table-col>\r\n          <z-table-col>分页的显示状态</z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="2">\r\n          <z-table-col>display</z-table-col>\r\n          <z-table-col>Boolean</z-table-col>\r\n          <z-table-col>(*false | true)</z-table-col>\r\n          <z-table-col>分页的显示状态</z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="3">\r\n          <z-table-col>data</z-table-col>\r\n          <z-table-col>Object</z-table-col>\r\n          <z-table-col>——</z-table-col>\r\n          <z-table-col>\r\n            <p>分页数据</p>\r\n            <ul>\r\n              <li>length：一共有几条数据</li>\r\n              <li>total：一共有多少页</li>\r\n              <li>size：每页几条数据</li>\r\n              <li>current：当前的页码</li>\r\n            </ul>\r\n          </z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="4">\r\n          <z-table-col>onePageDisplay</z-table-col>\r\n          <z-table-col>布尔值</z-table-col>\r\n          <z-table-col>(*false | true)</z-table-col>\r\n          <z-table-col>分页总页数为 1 时是否显示</z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="5">\r\n          <z-table-col>size</z-table-col>\r\n          <z-table-col>Boolean</z-table-col>\r\n          <z-table-col>（s | *m | l）</z-table-col>\r\n          <z-table-col>分页外观尺寸大小</z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="6">\r\n          <z-table-col>type</z-table-col>\r\n          <z-table-col>Boolean</z-table-col>\r\n          <z-table-col>（more | *num）</z-table-col>\r\n          <z-table-col>\r\n            <p>分页类型</p>\r\n            <ul>\r\n              <li>more：加载更多</li>\r\n              <li>num：数字标注（默认）</li>\r\n            </ul>\r\n          </z-table-col>\r\n        </z-table-row>\r\n        <z-table-row slot="7">\r\n          <z-table-col>loadMoreText</z-table-col>\r\n          <z-table-col>String</z-table-col>\r\n          <z-table-col>——</z-table-col>\r\n          <z-table-col>\r\n            加载更多的提示文字\r\n          </z-table-col>\r\n        </z-table-row>\r\n      </z-table>\r\n    </section>\r\n\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :list="false"\r\n          :to="anchorLink(\'events\')">\r\n        <span @click="goAnchor">events 事件</span>\r\n      </router-link>\r\n\r\n      <z-table\r\n          border="row"\r\n          auto\r\n          :pageSize="10">\r\n        <template slot="thead" v-for="item in [\'名字\', \'返回值类型\', \'说明\']">\r\n          <z-table-col>{{ item }}</z-table-col>\r\n        </template>\r\n\r\n        <z-table-row slot="1">\r\n          <z-table-col>switch</z-table-col>\r\n          <z-table-col>Number</z-table-col>\r\n          <z-table-col>切换页码触发的事件</z-table-col>\r\n        </z-table-row>\r\n      </z-table>\r\n    </section>\r\n\r\n    <section>\r\n      <router-link\r\n          class="anchor-title"\r\n          tag="h1"\r\n          :list="false"\r\n          :to="anchorLink(\'slots\')">\r\n        <span @click="goAnchor">slots 内容分发</span>\r\n      </router-link>\r\n\r\n      <z-table\r\n          border="row"\r\n          auto\r\n          :pageSize="10">\r\n        <template slot="thead" v-for="item in [\'名字\', \'返回值类型\', \'说明\']">\r\n          <z-table-col>{{ item }}</z-table-col>\r\n        </template>\r\n\r\n        <z-table-row slot="1">\r\n          <z-table-col>loadMore</z-table-col>\r\n          <z-table-col>分页类型为加载更多时的，在按钮处的内容分发</z-table-col>\r\n        </z-table-row>\r\n      </z-table>\r\n    </section>\r\n  </article>\r\n</div>'},591:function(t,e,n){"use strict";n.r(e),n(545);var r=n(546),l=n.n(r),o=n(502);e.default={name:"PageCompPage",template:l.a,mixins:[o.b],data:function(){return{pageData:{length:24,size:5}}}}}}]);