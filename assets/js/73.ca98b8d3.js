(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{436:function(n,e,t){"use strict";t.r(e);var l=t(45),u=Object(l.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"null与undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null与undefined"}},[n._v("#")]),n._v(" null与undefined")]),n._v(" "),t("p",[n._v("null:（如果变量是引用类型（例如对象这种）声明了，但是没有赋值，初始化的时候可以赋值成null）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("let config = null; //或者定义成 let config = {}; 都行\n\nconfig = {name: 'starsky'};\n")])])]),t("p",[n._v("undefined:(如果变量是基本类型（例如字符串、数值）声明了，但是没有赋值，初始化的时候可以赋值成undefined)")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("let web = undefined; //或者定义成let web = ''; 都行\n\nweb = 'www.baidu.com';\n\nfunction show(name) {\n\tconsole.log(name); //如果name没有传参的时候，那么值也会是undefined;\n}\nconsole.log(show()); //函数没有返回值，那么结果也是undefined\n\nfunction star(num) {\n\tif(num == undefined) {\n\t\tnum = 5;\n\t}\n\t//上面语句可以简写成 num = num || 5; 因为undefined在逻辑表达式中是不成立的，是false\n\tfor(let i = 0; i < num; i++) {\n\t\tdocument.write(\"*\");\n\t}\n}\nstar();\n")])])])])}),[],!1,null,null,null);e.default=u.exports}}]);