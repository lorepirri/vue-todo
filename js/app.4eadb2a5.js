(function(t){function e(e){for(var n,r,s=e[0],c=e[1],u=e[2],a=0,f=[];a<s.length;a++)r=s[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return d.push.apply(d,u||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(d.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},d=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-todo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[-1!=this.editingTodoId?o("div",{staticClass:"overlay"}):t._e(),o("md-field",[o("md-input",{attrs:{placeholder:"Add a todo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}})],1),o("ul",{staticClass:"todos"},t._l(t.todos,(function(e){return o("li",{key:e.id},[0==e.editing?o("div",[o("div",{staticClass:"md-layout md-gutter"},[o("div",{staticClass:"md-layout-item md-size-10"},[o("md-checkbox",{attrs:{type:"checkbox"},on:{click:function(o){return t.checkAsDoneTodo(e)}},model:{value:e.completed,callback:function(o){t.$set(e,"completed",o)},expression:"todo.completed"}})],1),o("div",{staticClass:"md-layout-item md-layout md-alignment-center-left"},[o("span",{class:{checkedTodo:e.completed},on:{dblclick:function(o){return t.editTodo(e)}}},[t._v(t._s(e.label))])]),o("div",{staticClass:"md-layout-item md-size-25"},[o("md-button",{staticClass:"md-raised",on:{click:function(o){return t.removeTodo(e)}}},[t._v("Delete")])],1),o("div",{staticClass:"md-layout-item md-small-hide"})])]):t._e(),1==e.editing?o("div",[o("md-field",{staticClass:"updateTodo"},[o("md-input",{directives:[{name:"todo-focus",rawName:"v-todo-focus",value:!0,expression:"true"}],ref:"editingTodo",refInFor:!0,staticClass:"updateTodo",attrs:{placeholder:"Enter a new label",value:"todo.label"},on:{blur:function(e){return t.stopEditingTodo()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.stopEditingTodo()},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.updateTodo(e)}]},model:{value:t.editingTodo,callback:function(e){t.editingTodo=e},expression:"editingTodo"}})],1)],1):t._e()])})),0)],1)},d=[],r=(o("8e6e"),o("ac6a"),o("456d"),o("6762"),o("2fdb"),o("bd86"));function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(o,!0).forEach((function(e){Object(r["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={data:function(){return{todos:[],currentTodo:"",editingTodoId:-1,editingTodo:""}},methods:{addTodo:function(){""!=this.currentTodo.trim()&&(this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,editing:!1}),this.currentTodo="")},removeTodo:function(t){if(-1==this.editingTodoId){var e=this.todos.indexOf(t);this.todos.splice(e,1)}},updateTodo:function(t){if(""!=this.editingTodo.trim()&&this.editingTodoId==t.id){var e=this.todos.indexOf(t);this.todos[e].label=this.editingTodo,this.stopEditingTodo()}},editTodo:function(t){if(-1==this.editingTodoId){var e=this.todos.indexOf(t);this.todos[e].editing=!0,this.editingTodoId=e,this.editingTodo=this.todos[e].label}},checkAsDoneTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1);var o=c({},t,{completed:!t.completed});t.completed?this.todos.unshift(o):this.todos.push(o)},onClick:function(t){this.$refs.editingTodo&&!this.$refs.editingTodo.includes(t.target)&&this.stopEditingTodo()},stopEditingTodo:function(){-1!=this.editingTodoId&&(this.todos[this.editingTodoId].editing=!1,this.editingTodoId=-1)},onKeydown:function(t){"Escape"==t.key&&this.stopEditingTodo()}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}},l=u,a=(o("034f"),o("2877")),f=Object(a["a"])(l,i,d,!1,null,null,null),p=f.exports,h=o("9c30");o("51de"),o("e094");n["default"].use(h["MdButton"]),n["default"].use(h["MdField"]),n["default"].use(h["MdCheckbox"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.4eadb2a5.js.map