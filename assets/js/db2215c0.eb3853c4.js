"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[363],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,d(d({ref:t},o),{},{components:n})):a.createElement(f,d({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var c=2;c<i;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return o},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),d=["components"],s={sidebar_position:8},l="\u63d0\u73b0\u4e0e\u5730\u5740",c={unversionedId:"server/client/address",id:"server/client/address",isDocsHomePage:!1,title:"\u63d0\u73b0\u4e0e\u5730\u5740",description:"1. \u521b\u5efa\u63d0\u73b0\u5730\u5740",source:"@site/docs/server/client/08.address.mdx",sourceDirName:"server/client",slug:"/server/client/address",permalink:"/mixin-js-sdk-docs/docs/server/client/address",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/08.address.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"serverSidebar",previous:{title:"\u8f6c\u8d26",permalink:"/mixin-js-sdk-docs/docs/server/client/transfer"},next:{title:"PIN",permalink:"/mixin-js-sdk-docs/docs/server/client/PIN"}},o=[{value:"1. \u521b\u5efa\u63d0\u73b0\u5730\u5740",id:"1-\u521b\u5efa\u63d0\u73b0\u5730\u5740",children:[]},{value:"2. \u8bfb\u53d6\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740",id:"2-\u8bfb\u53d6\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740",children:[]},{value:"3. \u6839\u636e <code>address_id</code> \u83b7\u53d6\u63d0\u73b0\u5730\u5740",id:"3-\u6839\u636e-address_id-\u83b7\u53d6\u63d0\u73b0\u5730\u5740",children:[]},{value:"4. \u6839\u636e <code>address_id</code> \u5220\u9664\u63d0\u73b0\u5730\u5740",id:"4-\u6839\u636e-address_id-\u5220\u9664\u63d0\u73b0\u5730\u5740",children:[]},{value:"5. \u53d1\u8d77\u4e00\u7b14\u63d0\u73b0",id:"5-\u53d1\u8d77\u4e00\u7b14\u63d0\u73b0",children:[]}],p={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u63d0\u73b0\u4e0e\u5730\u5740"},"\u63d0\u73b0\u4e0e\u5730\u5740"),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u63d0\u73b0\u5730\u5740"},"1. \u521b\u5efa\u63d0\u73b0\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.createAddress({\n  label: '\u6d4b\u8bd5\u5730\u5740\u6807\u7b7e', // \u5730\u5740\u6807\u7b7e\n  asset_id: 'c6d0c728-2624-429b-8e0d-d9d19b6592fa', // btc \u7684 asset_id\n  destination: '32wqVf3cGPHcJSWKq3R5N4WsiAGp8V9HXq', // btc \u7684\u5730\u5740\n  tag: '', // \u9009\u586b\n});\n// \u8fd4\u56de\u503c\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "address",\n  "address_id": "70676646-64a5-489a-b95b-77cfb64599b2",\n  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n  "destination": "32wqVf3cGPHcJSWKq3R5N4WsiAGp8V9HXq",\n  "tag": "",\n  "label": "\u6d4b\u8bd5\u5730\u5740\u6807\u7b7e",\n  "fee": "0.0001",\n  "reserve": "0",\n  "dust": "0.0001",\n  "updated_at": "2021-10-20T08:39:46.675370353Z"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u63d0\u73b0\u5730\u5740\u5c5e\u4e8e\u654f\u611f\u64cd\u4f5c\uff0c\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"pin")," \u7684\u652f\u6301\uff0c\u5982\u679c\u521d\u59cb\u5316 ",(0,i.kt)("inlineCode",{parentName:"li"},"client")," \u7684\u65f6\u5019\u6ca1\u6709\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"li"},"pin")," \u7684\u8bdd\uff0c\u8fd9\u91cc\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"li"},"pin"),"\u3002")))),(0,i.kt)("h3",{id:"2-\u8bfb\u53d6\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740"},"2. \u8bfb\u53d6\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.readAddresses('c6d0c728-2624-429b-8e0d-d9d19b6592fa');\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "address",\n    "address_id": "70676646-64a5-489a-b95b-77cfb64599b2",\n    "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "destination": "32wqVf3cGPHcJSWKq3R5N4WsiAGp8V9HXq",\n    "tag": "",\n    "label": "\u6d4b\u8bd5\u5730\u5740\u6807\u7b7e",\n    "fee": "0.0001",\n    "reserve": "0",\n    "dust": "0.0001",\n    "updated_at": "2021-10-20T08:38:50.741464577Z"\n  }\n]\n')),(0,i.kt)("h3",{id:"3-\u6839\u636e-address_id-\u83b7\u53d6\u63d0\u73b0\u5730\u5740"},"3. \u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"h3"},"address_id")," \u83b7\u53d6\u63d0\u73b0\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.readAddress('70676646-64a5-489a-b95b-77cfb64599b2');\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "address",\n  "address_id": "70676646-64a5-489a-b95b-77cfb64599b2",\n  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n  "destination": "32wqVf3cGPHcJSWKq3R5N4WsiAGp8V9HXq",\n  "tag": "",\n  "label": "\u6d4b\u8bd5\u5730\u5740\u6807\u7b7e",\n  "fee": "0.0001",\n  "reserve": "0",\n  "dust": "0.0001",\n  "updated_at": "2021-10-20T08:38:50.741464577Z"\n}\n')),(0,i.kt)("h3",{id:"4-\u6839\u636e-address_id-\u5220\u9664\u63d0\u73b0\u5730\u5740"},"4. \u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"h3"},"address_id")," \u5220\u9664\u63d0\u73b0\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.deleteAddress('70676646-64a5-489a-b95b-77cfb64599b2');\n")),(0,i.kt)("p",null,"\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u8bf4\u660e\u5220\u9664\u6210\u529f\u3002"),(0,i.kt)("h3",{id:"5-\u53d1\u8d77\u4e00\u7b14\u63d0\u73b0"},"5. \u53d1\u8d77\u4e00\u7b14\u63d0\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.withdraw({\n  address_id: '70676646-64a5-489a-b95b-77cfb64599b2',\n  amount: '10',\n  trace_id: '526eab99-9e21-40e1-89e9-356af6a21034', // \u968f\u673a\u751f\u6210 uuid \u5c31\u884c\n  memo: '',\n});\n")),(0,i.kt)("p",null,"\u53c2\u6570\u4ecb\u7ecd"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4ecb\u7ecd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"address_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u73b0\u5730\u5740 id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},'\u63d0\u73b0\u91d1\u989d\uff0c\u4f8b\u5982"100000"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fee"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u63d0\u73b0\u624b\u7eed\u8d39, \u5982\u679c\u5c0f\u4e8e\u9ed8\u8ba4\u624b\u7eed\u8d39\u4f1a\u5931\u8d25\uff0c\u4ece GET /addresses/:id \u83b7\u53d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u5bc6\u540e\u7684 PIN")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"trace_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9632\u6b62\u91cd\u590d\u63d0\u73b0")))),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "withdrawal",\n  "snapshot_id": "ab56be4c-5b20-xxxx-a9c3-244f9a433f35",\n  "transaction_hash": "axt...ze",\n  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n  "amount": "-10",\n  "trace_id": "7c67e8e8-b142-488b-80a3-61d4d29c90bf",\n  "created_at": "2018-05-03T10:08:34.859542588Z"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"li"},"eos")," \u8fd9\u79cd\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"memo")," \u652f\u6301\u7684\uff0c\u5c31\u5fc5\u987b\u586b\u5199 memo")))))}m.isMDXComponent=!0}}]);