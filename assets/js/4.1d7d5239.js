(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(t,e,n){},159:function(t,e,n){},163:function(t,e,n){},187:function(t,e,n){"use strict";var a=n(158);n.n(a).a},188:function(t,e,n){"use strict";var a=n(159);n.n(a).a},192:function(t,e,n){"use strict";var a=n(163);n.n(a).a},207:function(t,e,n){"use strict";var a=n(206);const o=a.a.mounted;a.a.mounted=function(){o&&o.call(a.a,...arguments),s(),c()};const i=a.a.updated;function s(){const t=document.location.hash;if(t.length>1){const e=t.substring(1),n=document.getElementById(e);n&&n.scrollIntoView()}}function c(){for(const t of document.querySelectorAll("div.language-editor")){const e=t.querySelector("code");if(!e)continue;const n=document.createElement("div");n.classList.add("editor-wrap");const a=document.createElement("a");a.classList.add("maximize"),a.addEventListener("click",t=>{l(n)}),a.innerText="🗖",n.appendChild(a);const o=document.createElement("iframe");o.setAttribute("title","Editor"),"complete"==document.readyState?o.setAttribute("src","/editor.html#"+btoa(e.innerText)):(o.setAttribute("src","data:text/html;base64,"),document.addEventListener("readystatechange",t=>{"complete"==document.readyState&&o.setAttribute("src","/editor.html#"+btoa(e.innerText))})),n.appendChild(o),t.parentNode.replaceChild(n,t)}}a.a.updated=function(){i&&i.call(a.a,...arguments),c()};let r=!1;function l(t){(r=!r)?(t.classList.add("maximized"),document.body.style.overflow="hidden",t.querySelector("a.maximize").innerHTML="🗗"):(t.classList.remove("maximized"),document.body.style.overflow="auto",t.scrollIntoView(),t.querySelector("a.maximize").innerHTML="🗖")}var d=a.a,u=(n(187),n(188),n(6)),m=Object(u.a)(d,void 0,void 0,!1,null,"d1fc1622",null);e.a=m.exports},211:function(t,e,n){"use strict";n.r(e);var a={components:{Layout:n(205).a}},o=(n(192),n(6)),i=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"footer",attrs:{slot:"page-bottom"},slot:"page-bottom"},[e("p",[e("span",{staticClass:"item"},[this._v("Apache-2.0 licensed")]),this._v(",\n      "),e("span",{staticClass:"item"},[this._v("Copyright © "+this._s((new Date).getFullYear()))]),this._v(" "),e("span",{staticClass:"item"},[this._v("The AssemblyScript Project")])])])])}),[],!1,null,"8ef39a8a",null);e.default=i.exports}}]);