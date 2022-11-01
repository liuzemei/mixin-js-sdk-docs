"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[282],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},s="\u6d88\u606f\u670d\u52a1",c={unversionedId:"server/blaze",id:"server/blaze",isDocsHomePage:!1,title:"\u6d88\u606f\u670d\u52a1",description:"\u7b80\u4ecb",source:"@site/docs/server/blaze.mdx",sourceDirName:"server",slug:"/server/blaze",permalink:"/mixin-js-sdk-docs/docs/server/blaze",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/blaze.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"serverSidebar",previous:{title:"MVM",permalink:"/mixin-js-sdk-docs/docs/server/client/mvm"},next:{title:"\u4f7f\u7528 Token \u8bbf\u95ee\u7528\u6237\u4fe1\u606f",permalink:"/mixin-js-sdk-docs/docs/server/userWithToken"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"1. \u521b\u5efa <code>websocket</code> \u8fde\u63a5",id:"1-\u521b\u5efa-websocket-\u8fde\u63a5",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6d88\u606f\u670d\u52a1"},"\u6d88\u606f\u670d\u52a1"),(0,i.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Blaze Client")," \u4f7f ",(0,i.kt)("inlineCode",{parentName:"li"},"bot")," \u5177\u6709\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"Websocket")," \u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"Mixin Messenger")," \u7684\u6d88\u606f\u670d\u52a1\u8fde\u63a5\uff0c \u4f7f\u4e4b\u53ef\u4ee5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"Mixin Messenger")," \u4e0a\u7684\u7528\u6237\u8fdb\u884c\u5b9e\u65f6\u7684\u6d88\u606f\u4ea4\u4e92\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u540c\u65f6\u4e5f\u4f1a\u63a5\u6536 ",(0,i.kt)("inlineCode",{parentName:"li"},"ack"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"conversation"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"transfer")," \u7684\u6d88\u606f\uff0c\u8fd9\u4e9b\u6d88\u606f\u5c06\u5728\u540e\u6587\u4e2d\u9010\u6b65\u63d0\u5230\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Blaze Client")," \u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"li"},"Client")," \u7c7b\uff0c\u56e0\u6b64\u4e5f\u5177\u6709\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"Client")," \u7c7b\u7684\u6240\u6709\u529f\u80fd\u3002")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u666e\u901a\u7528\u6237\u7ed9\u673a\u5668\u4eba\u53d1\u7684\u6d88\u606f\uff0c\u8d85\u8fc7\u4e00\u4e2a\u5468\u6ca1\u6709\u63a5\u6536\u7684\u6d88\u606f\uff0c\u5219\u4f1a\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"Mixin Messenger")," \u670d\u52a1\u7aef\u4e22\u5f03\u3002"))),(0,i.kt)("h3",{id:"1-\u521b\u5efa-websocket-\u8fde\u63a5"},"1. \u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"h3"},"websocket")," \u8fde\u63a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { BlazeClient } = require('mixin-node-sdk');\n\nlet client = new BlazeClient(\n  {\n    client_id: '',\n    session_id: '',\n    pin_token: '',\n    private_key: '',\n    pin: '',\n  },\n  { parse: true }\n);\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"keystore")),(0,i.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u9009\uff0c\u4ecb\u7ecd\u5982\u4e0b")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"parse"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5c06 data \u89e3\u6790\u4e3a\u660e\u6587")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"syncAck"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728\u63a5\u6536\u5230\u7528\u6237\u7684\u6d88\u606f\uff0c\u5904\u7406\u5b8c\u540e\u81ea\u52a8 ack")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TIPS:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"data \u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"base64")," \u7f16\u7801\uff0c\u5982\u679c\u9700\u8981\u89e3\u6790\u4e3a\u660e\u6587\uff0c\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"parse")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u662f\u9700\u8981\u624b\u52a8\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ack")," \u65b9\u6cd5\uff0c\u5c06\u6d88\u606f\u6807\u8bb0\u4e3a\u5df2\u8bfb\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"syncAck")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5219\u4f1a\u5728\u63a5\u6536\u5230\u7528\u6237\u7684\u6d88\u606f\uff0c\u5904\u7406\u5b8c\u540e\u81ea\u52a8 ack. ",(0,i.kt)("a",{parentName:"li",href:"/docs/server/client/message#16-%E5%8F%91%E9%80%81-ack-%E6%B6%88%E6%81%AF"},"\u5177\u4f53\u65b9\u6cd5\u53c2\u89c1")))))}m.isMDXComponent=!0}}]);