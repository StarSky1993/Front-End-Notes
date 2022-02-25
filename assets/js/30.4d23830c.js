(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{392:function(n,e,t){"use strict";t.r(e);var s=t(45),o=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h3",{attrs:{id:"全局污染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局污染"}},[this._v("#")]),this._v(" 全局污染")]),this._v(" "),e("p",[this._v("示例：")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[this._v('function zhangsan() {\n    web = \'houdunren.com\'; //如果函数内部没有进行var或者let声明，直接使用会污染全局\n}\n\n//当我们不知道上面函数里有web的变量赋值过的时候，我们直接声明一个相同名字的变量，那么zhangsan函数内的web会污染到全局声明的web\nlet web = "后盾人";\n\nzhangsan();\nconsole.log(web); //houdunren.com, 所以为了防止这个现象的发生，我们要在函数内部先用var或let声明变量，这样就不会造成全局污染\n//如果还是有人忘记声明，那es5用严格模式解决，顶部的script标签下加"use strict";\n\n//window全局对象污染与重复声明\nvar screenLeft = 88; //使用var在全局声明的变量会自动放到window中，作为window的属性,如果window中之前就有这个属性就会造成污染。\nconsole.log(window.screenLeft)\n\n//如果使用let声明就规避了这个污染\nlet screenLeft = 88;\nconsole.log(window.screenLeft)  //0')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);