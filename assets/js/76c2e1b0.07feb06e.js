"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[599],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(t),f=r,u=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return t?a.createElement(u,i(i({ref:n},l),{},{components:t})):a.createElement(u,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<c;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4874:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var a=t(7462),r=t(3366),c=(t(7294),t(3905)),i=["components"],o={sidebar_position:6},s="\u8f6c\u8d26",d={unversionedId:"server/client/transfer",id:"server/client/transfer",isDocsHomePage:!1,title:"\u8f6c\u8d26",description:"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b",source:"@site/docs/server/client/06.transfer.mdx",sourceDirName:"server/client",slug:"/server/client/transfer",permalink:"/mixin-js-sdk-docs/docs/server/client/transfer",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/06.transfer.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"serverSidebar",previous:{title:"\u8d44\u4ea7",permalink:"/mixin-js-sdk-docs/docs/server/client/asset"},next:{title:"\u63d0\u73b0\u4e0e\u5730\u5740",permalink:"/mixin-js-sdk-docs/docs/server/client/address"}},l=[{value:"1. \u8f6c\u8d26\u7ed9\u6307\u5b9a mixin \u7528\u6237",id:"1-\u8f6c\u8d26\u7ed9\u6307\u5b9a-mixin-\u7528\u6237",children:[]},{value:"2. \u6839\u636e <code>trace_id</code> \u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5",id:"2-\u6839\u636e-trace_id-\u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5",children:[]}],p={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u8f6c\u8d26"},"\u8f6c\u8d26"),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c",(0,c.kt)("a",{parentName:"p",href:"https://developers.mixinbots.com/courses/1e276ee9-18fb-42e3-915a-54b049679084/89329795-c5a2-4aa5-ab32-c52cf6649911"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b")))),(0,c.kt)("h3",{id:"1-\u8f6c\u8d26\u7ed9\u6307\u5b9a-mixin-\u7528\u6237"},"1. \u8f6c\u8d26\u7ed9\u6307\u5b9a mixin \u7528\u6237"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"client.transfer({\n  asset_id: '965e5c6e-434c-3fa9-b780-c50f43cd955c',\n  opponent_id: 'e8e8cd79-cd40-4796-8c54-3a13cfe50115',\n  amount: '1',\n  trace_id: client.newUUID(),\n  memo: '\u8f6c\u8d26\u6d4b\u8bd5',\n});\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("ol",{parentName:"div"},(0,c.kt)("li",{parentName:"ol"},"opponent_id \u5c31\u662f\u6536\u6b3e\u4eba\u7684 user_id."),(0,c.kt)("li",{parentName:"ol"},"amount \u4e3a\u8f6c\u8d26\u6570\u91cf\uff0c\u6700\u5c0f\u7cbe\u5ea6\u652f\u6301\u5c0f\u6570\u70b9\u540e 8 \u4f4d\u3002"),(0,c.kt)("li",{parentName:"ol"},"trace_id \u662f\u4e00\u4e2a uuid"),(0,c.kt)("li",{parentName:"ol"},"memo \u4e3a\u8f6c\u8d26\u5907\u6ce8\uff0c\u6ce8\u610f\u4e0d\u8981\u8d85\u8fc7 200 \u5b57\u7b26\u3002")))),(0,c.kt)("p",null,"\u8fd4\u56de\u503c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "transfer",\n  "snapshot_id": "55a7e4b0-cd67-449f-a6ca-8451b17a3a44",\n  "opponent_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "-1",\n  "opening_balance": "1429370.8175271",\n  "closing_balance": "1429369.8175271",\n  "trace_id": "5a0eb95f-40da-4aaf-ad9c-b2513926a31d",\n  "memo": "\u8f6c\u8d26\u6d4b\u8bd5",\n  "created_at": "2022-08-11T04:16:14.152053Z",\n  "counter_user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115"\n}\n')),(0,c.kt)("h3",{id:"2-\u6839\u636e-trace_id-\u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5"},"2. \u6839\u636e ",(0,c.kt)("inlineCode",{parentName:"h3"},"trace_id")," \u83b7\u53d6\u8f6c\u8d26\u8be6\u60c5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"client.readTransfer('5a0eb95f-40da-4aaf-ad9c-b2513926a31d');\n")),(0,c.kt)("p",null,"\u8fd4\u56de\u503c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "transfer",\n  "snapshot_id": "55a7e4b0-cd67-449f-a6ca-8451b17a3a44",\n  "opponent_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "-1",\n  "opening_balance": "1429370.8175271",\n  "closing_balance": "1429369.8175271",\n  "trace_id": "5a0eb95f-40da-4aaf-ad9c-b2513926a31d",\n  "memo": "\u8f6c\u8d26\u6d4b\u8bd5",\n  "created_at": "2022-08-11T04:16:14.152053Z",\n  "transaction_hash": "3e93520ff5fe57bf523fbc126f803b9fce91ab172dde491fb2c1d8c89b1b282b",\n  "snapshot_hash": "e28a375f83b621ed15d8518dd05bc4a4f13268fd093121d19fa4c9c1421b243d",\n  "snapshot_at": "2022-08-11T04:16:15.3433313Z",\n  "counter_user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115"\n}\n')))}m.isMDXComponent=!0}}]);