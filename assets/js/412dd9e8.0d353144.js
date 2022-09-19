"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[729],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,u=m["".concat(d,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(u,c(c({ref:t},s),{},{components:n})):a.createElement(u,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],o={sidebar_position:5},d="\u8f6c\u8d26",l={unversionedId:"server/client/transfer",id:"server/client/transfer",isDocsHomePage:!1,title:"\u8f6c\u8d26",description:"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b",source:"@site/docs/server/client/05.transfer.mdx",sourceDirName:"server/client",slug:"/server/client/transfer",permalink:"/mixin-js-sdk-docs/docs/server/client/transfer",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/05.transfer.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"serverSidebar",previous:{title:"\u6d88\u606f",permalink:"/mixin-js-sdk-docs/docs/server/client/message"},next:{title:"\u8d44\u4ea7",permalink:"/mixin-js-sdk-docs/docs/server/client/asset"}},s=[{value:"1. \u8f6c\u8d26\u7ed9\u6307\u5b9a mixin \u7528\u6237",id:"1-\u8f6c\u8d26\u7ed9\u6307\u5b9a-mixin-\u7528\u6237",children:[]},{value:"2. \u6839\u636e <code>trace_id</code> \u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5",id:"2-\u6839\u636e-trace_id-\u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8f6c\u8d26"},"\u8f6c\u8d26"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://developers.mixinbots.com/courses/1e276ee9-18fb-42e3-915a-54b049679084/89329795-c5a2-4aa5-ab32-c52cf6649911"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b")))),(0,i.kt)("h3",{id:"1-\u8f6c\u8d26\u7ed9\u6307\u5b9a-mixin-\u7528\u6237"},"1. \u8f6c\u8d26\u7ed9\u6307\u5b9a mixin \u7528\u6237"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.transfer({\n  asset_id: '965e5c6e-434c-3fa9-b780-c50f43cd955c',\n  opponent_id: 'e8e8cd79-cd40-4796-8c54-3a13cfe50115',\n  amount: '1',\n  trace_id: client.newUUID(),\n  memo: '\u8f6c\u8d26\u6d4b\u8bd5',\n});\n")),(0,i.kt)("p",null,"\u8f6c\u8d26\u53c2\u6570\u4ecb\u7ecd"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"asset_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u4ea7 ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"opponent_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6536\u6b3e\u4eba\u7684 user_id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},'\u8f6c\u8d26\u91d1\u989d\uff0c\u4f8b\u5982 "0.01"\uff0c\u652f\u6301\u5c0f\u6570\u70b9\u540e\u6700\u591a 8 \u4f4d')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"trace_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\uff0c\u4e3b\u8981\u7528\u4e8e\u9632\u6b62\u91cd\u590d\u652f\u4ed8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"memo"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\uff0c\u8f6c\u8d26\u5907\u6ce8\uff0c\u6700\u591a 200 \u5b57\u7b26")))),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "transfer",\n  "snapshot_id": "55a7e4b0-cd67-449f-a6ca-8451b17a3a44",\n  "opponent_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "-1",\n  "opening_balance": "1429370.8175271",\n  "closing_balance": "1429369.8175271",\n  "trace_id": "5a0eb95f-40da-4aaf-ad9c-b2513926a31d",\n  "memo": "\u8f6c\u8d26\u6d4b\u8bd5",\n  "created_at": "2022-08-11T04:16:14.152053Z",\n  "counter_user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115"\n}\n')),(0,i.kt)("h3",{id:"2-\u6839\u636e-trace_id-\u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5"},"2. \u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"h3"},"trace_id")," \u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.readTransfer('5a0eb95f-40da-4aaf-ad9c-b2513926a31d');\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "transfer",\n  "snapshot_id": "55a7e4b0-cd67-449f-a6ca-8451b17a3a44",\n  "opponent_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "-1",\n  "opening_balance": "1429370.8175271",\n  "closing_balance": "1429369.8175271",\n  "trace_id": "5a0eb95f-40da-4aaf-ad9c-b2513926a31d",\n  "memo": "\u8f6c\u8d26\u6d4b\u8bd5",\n  "created_at": "2022-08-11T04:16:14.152053Z",\n  "transaction_hash": "3e93520ff5fe57bf523fbc126f803b9fce91ab172dde491fb2c1d8c89b1b282b",\n  "snapshot_hash": "e28a375f83b621ed15d8518dd05bc4a4f13268fd093121d19fa4c9c1421b243d",\n  "snapshot_at": "2022-08-11T04:16:15.3433313Z",\n  "counter_user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115"\n}\n')))}m.isMDXComponent=!0}}]);