webpackJsonp([1],{"1LS6":function(t,n,e){"use strict";function r(t){e("cUgB")}var a=e("NrgF"),o=e("kKa8"),s=e("VU/8"),i=r,u=s(a.a,o.a,!1,i,null,null);n.a=u.exports},"9DDJ":function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var a=e("7+uW"),o=e("NYxO");a.a.use(o.a),n.a=new o.a.Store({state:{runnersLength:24,runners:[]},getters:{tbl:function(t){return null}},mutations:{SOCKET_RUNNER:function(t,n){var e=t.runners.findIndex(function(t){return t.bibNo==n.bibNo});if(e>=0)for(var a in n)t.runners[e][a]=n[a];else n.tStamp=(new Date).getTime(),t.runners=[].concat(r(t.runners),[n]).sort(function(t,n){return t.tStamp==n.tStamp?0:t.tStamp>n.tStamp?-1:1}).slice(0,t.runnersLength)},foo:function(t){console.log(db)}}})},HE9M:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o={render:r,staticRenderFns:a};n.a=o},NrgF:function(t,n,e){"use strict";var r=e("NYxO"),a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};n.a={name:"mainPage",data:function(){return{}},methods:{aRunnerStyle:function(){var t=200/this.runnersLength;return console.log(t),{height:t+"vh","line-height":t+"vh"}},sex:function(t){return t.raceCat.slice(-1).toUpperCase()},bibNo:function(t){return t.raceCat.slice(0,2)+"-"+("0000"+t.bibNo).slice(-4)}},computed:a({},Object(r.b)(["runners","runnersLength"]))}},OzJ6:function(t,n,e){"use strict";var r=e("7+uW"),a=e("/ocq"),o=e("1LS6");r.a.use(a.a),n.a=new a.a({mode:"history",base:"/",routes:[{path:"/",name:"mainPage",component:o.a},{path:"*",redirect:"/"}]})},WGjY:function(t,n){},bicQ:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mtWM"),a=e.n(r),o=e("7+uW"),s=e("creg"),i=e("OzJ6"),u=e("9DDJ"),c=e("hMcO"),f=e.n(c);e("qDZ3"),e("gjwf"),o.a.use(f.a,"http://localhost:3000",u.a),o.a.prototype.$http=a.a,new o.a({el:"#app",router:i.a,store:u.a,template:"<App/>",components:{App:s.a}})},cUgB:function(t,n){},creg:function(t,n,e){"use strict";function r(t){e("WGjY")}var a=e("wCqm"),o=e("HE9M"),s=e("VU/8"),i=r,u=s(a.a,o.a,!1,i,null,null);n.a=u.exports},gjwf:function(t,n){},kKa8:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mainPage"}},t._l(t.runners,function(n,r){return e("div",{staticClass:"aRunner",style:t.aRunnerStyle(),attrs:{index:r}},[e("span",[t._v(t._s(t.sex(n))+t._s(t.bibNo(n))+" :")]),t._v(" "),e("span",[t._v(" "+t._s(n.name))])])}))},a=[],o={render:r,staticRenderFns:a};n.a=o},qDZ3:function(t,n){},wCqm:function(t,n,e){"use strict";var r=e("NYxO"),a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};n.a={name:"app",data:function(){return{}},methods:{toggleNav:function(){this.isLeftNavOpen?this.$store.commit("closeLeftNav"):this.$store.commit("openLeftNav"),console.log("toggleing "+this.isLeftNavOpen)}},computed:a({foo:function(){return"bar"}},Object(r.b)({isLeftNavOpen:function(t){return t.isLeftNavOpen}})),components:{}}}},["bicQ"]);
//# sourceMappingURL=main.js.map?e470ad4f35ac886691c8