(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{380:function(r,n,e){"use strict";e.r(n);var t=e(45),l=Object(t.a)({},(function(){var r=this.$createElement,n=this._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h3",{attrs:{id:"清空数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清空数组"}},[this._v("#")]),this._v(" 清空数组")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[this._v("//清空原数组(直接从内存中彻底清除)\nlet arr = [1,2,3,4,5];\nwhile(arr.pop()) {}\nconsole.log(arr) // []\n\n//清空原数组(直接从内存中彻底清除)\nlet arr = [1,2,3,4,5];\narr.splice(0, arr.length)\nconsole.log(arr) // []\n\n//原数组不会清空，新数组会清空（因为新给newArr开辟了一块内存空间，清空只是赋值给newArr一个空数组）\nlet arr = [1,2,3,4,5];\nlet newArr = arr;\nnewArr = [];\nconsole.log(newArr) // []\nconsole.log(arr) // [1,2,3,4,5];\n\n//原数和新数组会清空\nlet arr = [1,2,3,4,5];\nlet newArr = arr;\nnewArr.length = 0;\nconsole.log(newArr) // []\nconsole.log(arr) // [];")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);