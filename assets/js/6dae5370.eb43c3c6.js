"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[154],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return p}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),A=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=A(e.components);return t.createElement(o.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=A(a),p=r,b=m["".concat(o,".").concat(p)]||m[p]||l[p]||c;return a?t.createElement(b,i(i({ref:n},s),{},{components:a})):t.createElement(b,i({ref:n},s))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=m;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var A=2;A<c;A++)i[A]=a[A];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6522:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return A},toc:function(){return s},default:function(){return m}});var t=a(7462),r=a(3366),c=(a(7294),a(3905)),i=["components"],d={sidebar_position:3},o="MVM",A={unversionedId:"server/client/mvm",id:"server/client/mvm",isDocsHomePage:!1,title:"MVM",description:"1. \u66f4\u591a mvm \u5f00\u53d1\u7684\u76f8\u5173\u6587\u6863\u8bf7\u70b9\u51fb",source:"@site/docs/server/client/mvm.mdx",sourceDirName:"server/client",slug:"/server/client/mvm",permalink:"/mixin-js-sdk-docs/docs/server/client/mvm",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/mvm.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"serverSidebar",previous:{title:"\u7528\u6237",permalink:"/mixin-js-sdk-docs/docs/server/client/user"},next:{title:"PIN",permalink:"/mixin-js-sdk-docs/docs/server/client/PIN"}},s=[{value:"1. \u65e0\u9700\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528",id:"1-\u65e0\u9700\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528",children:[{value:"1. Messenger \u7528\u6237\u8c03\u7528",id:"1-messenger-\u7528\u6237\u8c03\u7528",children:[]},{value:"2. \u673a\u5668\u4eba\u7528\u6237\u8c03\u7528",id:"2-\u673a\u5668\u4eba\u7528\u6237\u8c03\u7528",children:[]}]},{value:"2. \u9700\u8981(\u6307\u5b9a)\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528",id:"2-\u9700\u8981\u6307\u5b9a\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528",children:[]}],l={toc:s};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"mvm"},"MVM"),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("ol",{parentName:"div"},(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"https://mvm.dev/zh/reference/intro.html"},"\u66f4\u591a mvm \u5f00\u53d1\u7684\u76f8\u5173\u6587\u6863\u8bf7\u70b9\u51fb")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"https://scan.mvm.dev/"},"mvm \u533a\u5757\u94fe\u6d4f\u89c8\u5668\u8bf7\u70b9\u51fb"))))),(0,c.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"mvm \u76f8\u5173\u8c03\u7528 sdk \u6700\u4f4e\u7248\u672c: ",(0,c.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mixin-node-sdk"},(0,c.kt)("inlineCode",{parentName:"a"},">= 3.1.3"))))),(0,c.kt)("h2",{id:"1-\u65e0\u9700\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528"},"1. \u65e0\u9700\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528"),(0,c.kt)("p",null,"\u6307\u4e0d\u9700\u8981\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528\u3002\u53ea\u662f\u4e3a\u4e86\u4fee\u6539 mvm \u5408\u7ea6\u7684\u72b6\u6001\u800c\u8c03\u7528\u3002"),(0,c.kt)("blockquote",null,(0,c.kt)("ol",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u662f\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"li"},"0.00000001 CNB")," \u6765\u505a\u5408\u7ea6\u8c03\u7528\uff0c\u8c03\u7528\u5b8c\u6bd5\u4e4b\u540e\u4f1a\u5c1d\u8bd5\u9000\u56de\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u4f7f\u7528\u5176\u4ed6\u5e01\u79cd\u548c\u6570\u91cf\u6765\u8c03\u7528\uff0c",(0,c.kt)("a",{parentName:"li",href:"#2-%E9%9C%80%E8%A6%81%E6%8C%87%E5%AE%9A%E8%B5%84%E4%BA%A7%E7%9A%84%E5%90%88%E7%BA%A6%E8%B0%83%E7%94%A8"},"\u8bf7\u53c2\u89c1\u8fd9\u91cc")))),(0,c.kt)("h3",{id:"1-messenger-\u7528\u6237\u8c03\u7528"},"1. Messenger \u7528\u6237\u8c03\u7528"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"client.paymentGeneratorByContract({\n  contracts: [\n    {\n      address: '0x2E8f70631208A2EcFC6FA47Baf3Fde649963baC7',\n      method: 'addAny',\n      types: ['uint256'],\n      values: ['10'],\n    },\n  ],\n});\n")),(0,c.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "payment",\n  "trace_id": "5f4a39ea-69c3-48aa-ab1f-e19bf64738da",\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "0.00000001",\n  "threshold": 5,\n  "receivers": [\n    "d5a3a450-5619-47af-a3b1-aad08e6e10dd",\n    "9d4a18aa-9b0a-40ed-ba57-ce8fbbbc6deb",\n    "2f82a56a-7fae-4bdd-bc4d-aad5005c5041",\n    "f7f33be1-399a-4d29-b50c-44e5f01cbb1b",\n    "23a070df-6b87-4b66-bdd4-f009702770c9",\n    "2385639c-eac1-4a38-a7f6-597b3f0f5b59",\n    "ab357ad7-8828-4173-b3bb-0600c518eab2"\n  ],\n  "memo": "G9Zwhyds4yY7kzOqM34hKkAAAAAAA8AAEuj3BjEgii7PxvpHuvP95kmWO6xwAkd60KqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK",\n  "created_at": "2022-08-19T02:25:07.410174964Z",\n  "status": "pending",\n  "code_id": "bf7a02fa-7ae5-4fe8-be2e-0d42bcfcaccf"\n}\n')),(0,c.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,c.kt)("blockquote",null,(0,c.kt)("ol",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ol"},"\u8ba9 mixin messenger \u7684\u7528\u6237\u6253\u5f00 ",(0,c.kt)("inlineCode",{parentName:"li"},"mixin://codes/bf7a02fa-7ae5-4fe8-be2e-0d42bcfcaccf")," \u94fe\u63a5\uff0c\u5b8c\u6210\u652f\u4ed8\u4e4b\u540e\uff0c\u5408\u7ea6\u5373\u8c03\u7528\u6210\u529f\u3002"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"bf7a02fa-7ae5-4fe8-be2e-0d42bcfcaccf")," \u7684\u6765\u6e90\u662f\u4e0a\u8ff0\u8fd4\u56de\u503c\u4e2d\u7684 ",(0,c.kt)("inlineCode",{parentName:"li"},"code_id")),(0,c.kt)("li",{parentName:"ol"},"\u5408\u7ea6\u8c03\u7528\u9700\u8981\u4ea4\u6613\uff0c\u9ed8\u8ba4\u7684\u5e01\u79cd\u662f CNB\uff0c\u6570\u91cf\u662f\u6700\u5c0f\u5355\u4f4d 0.00000001\uff0c\u6216\u8005\u6307\u5b9a\u4efb\u4f55\u5176\u4ed6\u7684\u8d44\u4ea7\u548c\u6570\u91cf\u90fd\u53ef\u4ee5\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u6240\u6709\u5408\u7ea6\u8c03\u7528\u7ed3\u675f\u4e4b\u540e\uff0c\u4f1a\u5c1d\u8bd5\u9000\u8fd8\u8f6c\u5165\u7684\u8d44\u4ea7\u3002\u4e5f\u5c31\u662f\u8bf4\u5982\u679c\u5408\u7ea6\u672c\u8eab\u6ca1\u6709\u4f7f\u7528\u4e0a\u8ff0\u8c03\u7528\u7684 0.00000001 CNB \u7684\u8bdd\uff0c\u4f1a\u5c1d\u8bd5\u7ed9\u8c03\u7528\u8005\u9000\u8fd8\u8f6c\u5165\u7684\u8d44\u4ea7\u3002"))),(0,c.kt)("h3",{id:"2-\u673a\u5668\u4eba\u7528\u6237\u8c03\u7528"},"2. \u673a\u5668\u4eba\u7528\u6237\u8c03\u7528"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  const txInput = await client.paymentGeneratorByContract({\n    contracts: [\n      {\n        address: '0x2E8f70631208A2EcFC6FA47Baf3Fde649963baC7',\n        method: 'addAny',\n        types: ['uint256'],\n        values: ['10'],\n      },\n    ],\n    payment: {\n      type: 'tx',\n    },\n  });\n  const res = await client.transaction(txInput);\n}\n")),(0,c.kt)("p",null,"txInput \u7684\u503c\u4e3a\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "0.00000001",\n  "trace_id": "3b8d0f7e-e10a-4913-817e-215b8c09a451",\n  "memo": "G9Zwhyds4yY7kzOqM34hKkAAAAAAA8AAEuj3BjEgii7PxvpHuvP95kmWO6xwAkd60KqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK",\n  "opponent_multisig": {\n    "receivers": [\n      "d5a3a450-5619-47af-a3b1-aad08e6e10dd",\n      "9d4a18aa-9b0a-40ed-ba57-ce8fbbbc6deb",\n      "2f82a56a-7fae-4bdd-bc4d-aad5005c5041",\n      "f7f33be1-399a-4d29-b50c-44e5f01cbb1b",\n      "23a070df-6b87-4b66-bdd4-f009702770c9",\n      "2385639c-eac1-4a38-a7f6-597b3f0f5b59",\n      "ab357ad7-8828-4173-b3bb-0600c518eab2"\n    ],\n    "threshold": 5\n  },\n  "pin": "/xxxxxxxxx/xxxxxxxxxxxx/xxxxxxxxxxxxxxxxx"\n}\n')),(0,c.kt)("p",null,"res \u7684\u503c\u4e3a\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "raw",\n  "snapshot_id": "f16a01ab-7b53-43ba-9bf4-6f8c585d87e2",\n  "opponent_key": "",\n  "opponent_receivers": [\n    "d5a3a450-5619-47af-a3b1-aad08e6e10dd",\n    "9d4a18aa-9b0a-40ed-ba57-ce8fbbbc6deb",\n    "2f82a56a-7fae-4bdd-bc4d-aad5005c5041",\n    "f7f33be1-399a-4d29-b50c-44e5f01cbb1b",\n    "23a070df-6b87-4b66-bdd4-f009702770c9",\n    "2385639c-eac1-4a38-a7f6-597b3f0f5b59",\n    "ab357ad7-8828-4173-b3bb-0600c518eab2"\n  ],\n  "opponent_threshold": 5,\n  "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",\n  "amount": "-0.00000001",\n  "opening_balance": "1429369.81742709",\n  "closing_balance": "1429369.81742708",\n  "trace_id": "3c9cfd32-8757-4059-919e-ee9925e7c24e",\n  "memo": "G9Zwhyds4yY7kzOqM34hKkAAAAAAA8AAEuj3BjEgii7PxvpHuvP95kmWO6xwAkd60KqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK",\n  "state": "signed",\n  "created_at": "1970-01-01T00:03:39+00:03",\n  "transaction_hash": "5f06dce2278cfa43f00e11a514aecb12fc88ad498b847944fa2dabd7c8644f83",\n  "snapshot_hash": "",\n  "snapshot_at": "0001-01-01T00:00:00Z"\n}\n')),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u4e0d\u96be\u53d1\u73b0\uff0c\u5176\u5b9e\u5408\u7ea6\u7684\u8c03\u7528\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u7b14\u591a\u7b7e\u4ea4\u6613\uff0c\u51e0\u4e2a\u201c\u8282\u70b9\u201d\u76d1\u542c\u5230\u4e86\u8fd9\u7b14\u7b7e\u540d\u7684\u4ea4\u6613\u4e4b\u540e\uff0c\u4f1a\u6839\u636e memo \u7684\u4fe1\u606f\u89e3\u6790\u51fa\u5408\u7ea6\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u7136\u540e\u8c03\u7528\u5408\u7ea6\u7684\u65b9\u6cd5\u3002")),(0,c.kt)("h2",{id:"2-\u9700\u8981\u6307\u5b9a\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528"},"2. \u9700\u8981(\u6307\u5b9a)\u8d44\u4ea7\u7684\u5408\u7ea6\u8c03\u7528"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Messneger\u7528\u6237\u8c03\u7528")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"\u673a\u5668\u4eba\u7528\u6237\u7684\u8c03\u7528")," \u8bf7\u53c2\u89c1\u4e0a\u4e00\u5c0f\u8282, \u5176\u5b9e\u5c31\u662f\u591a\u4e86\u4e00\u4e2a\u53c2\u6570 ",(0,c.kt)("inlineCode",{parentName:"p"},"payment.type='tx'"),", \u9ed8\u8ba4\u662f ",(0,c.kt)("inlineCode",{parentName:"p"},"payment")),(0,c.kt)("p",null,"\u8fd9\u91cc\u9ed8\u8ba4\u4f7f\u7528\u751f\u6210 ",(0,c.kt)("inlineCode",{parentName:"p"},"code_id")," \u6765\u8ba9 Messenger \u7528\u6237\u8c03\u7528\u5408\u7ea6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const payment = await client.paymentGeneratorByContract({\n  contracts: [\n    {\n      address: '0x2E8f70631208A2EcFC6FA47Baf3Fde649963baC7',\n      method: 'addAny',\n      types: ['uint256'],\n      values: ['10'],\n    },\n  ],\n  payment: {\n    asset: 'c94ac88f-4671-3976-b60a-09064f1811e8',\n    amount: '1',\n    trace: client.newUUID(),\n  },\n});\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "payment",\n  "trace_id": "1dc2b4d3-0d41-4bb5-a524-1b028b9fae8e",\n  "asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",\n  "amount": "1",\n  "threshold": 5,\n  "receivers": [\n    "d5a3a450-5619-47af-a3b1-aad08e6e10dd",\n    "9d4a18aa-9b0a-40ed-ba57-ce8fbbbc6deb",\n    "2f82a56a-7fae-4bdd-bc4d-aad5005c5041",\n    "f7f33be1-399a-4d29-b50c-44e5f01cbb1b",\n    "23a070df-6b87-4b66-bdd4-f009702770c9",\n    "2385639c-eac1-4a38-a7f6-597b3f0f5b59",\n    "ab357ad7-8828-4173-b3bb-0600c518eab2"\n  ],\n  "memo": "G9Zwhyds4yY7kzOqM34hKkAAAAAAA8AAEuj3BjEgii7PxvpHuvP95kmWO6xwAkd60KqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK",\n  "created_at": "2022-08-19T02:53:10.346200826Z",\n  "status": "pending",\n  "code_id": "105b07fa-bc1b-4083-96b8-7d3b35390b50"\n}\n')))}m.isMDXComponent=!0}}]);