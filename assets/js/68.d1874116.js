(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{432:function(t,n,i){"use strict";i.r(n);var d=i(45),o=Object(d.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h3",{attrs:{id:"循环遍历dom节点-对dom进行操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#循环遍历dom节点-对dom进行操作"}},[this._v("#")]),this._v(" 循环遍历dom节点，对dom进行操作")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[this._v("方法一：\n\n\t<div>houdunren.com</div>\n\t<div>hdcms.com</div>\n\t\n\tconst div = document.querySelectorAll('div');\n\tArray.from(div).map((item) => {\n\t\tconsole.log(item) // <div>houdunren.com</div>  <div>hdcms.com</div>\n\t})\n\t\n方法二：\n\n\t<div>houdunren.com</div>\n\t<div>hdcms.com</div>\n\t\n\tconst div = document.querySelectorAll('div');\n\tArray.prototype.map.call(div, (item) => {\n\t\tconsole.log(item) // <div>houdunren.com</div>  <div>hdcms.com</div>\n\t})\n\t\n方法三：(推荐)\n\n\t<div>houdunren.com</div>\n\t<div>hdcms.com</div>\n\t\n\tconst div = document.querySelectorAll('div');\n\t\n\t[...div].map((item) => {\n\t\titem.addEventListener('click', function() {\n\t\t\tthis.classList.toggle('hide')\n\t\t})\n\t})\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);