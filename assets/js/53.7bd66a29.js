(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{417:function(n,e,t){"use strict";t.r(e);var s=t(45),a=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h3",{attrs:{id:"变量的提升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量的提升"}},[this._v("#")]),this._v(" 变量的提升")]),this._v(" "),e("p",[this._v("示例：")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[this._v('console.log(abc); //undefined\nvar abc = "123"  //等价于var abc;//变量提升到前面了，变量声明没有赋值所以值为undefined  abc = "123";\n\n//函数的变量提升\n// function hd() {\n//     if(false) {\n//         var web = "baidu.com";\n//     }\n//     console.log(web) //undefined\n// }\nhd()\n//等价于\nfunction hd() {\n    var web;\n    if(false) {\n        web = "baidu.com";\n    }\n    console.log(web) //undefined\n}\n//总结：所以在使用var的时候一定要先声明后使用')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);