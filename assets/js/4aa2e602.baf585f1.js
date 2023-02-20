"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[950],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},l="\u4f7f\u7528 Token \u8bbf\u95ee\u7528\u6237\u4fe1\u606f",c={unversionedId:"server/userWithToken",id:"server/userWithToken",isDocsHomePage:!1,title:"\u4f7f\u7528 Token \u8bbf\u95ee\u7528\u6237\u4fe1\u606f",description:"1. \u5728\u901a\u8fc7 code \u6210\u529f\u83b7\u53d6\u5230 accesstoken \u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 accesstoken \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002",source:"@site/docs/server/userWithToken.mdx",sourceDirName:"server",slug:"/server/userWithToken",permalink:"/mixin-js-sdk-docs/docs/server/userWithToken",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/userWithToken.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"serverSidebar",previous:{title:"\u6d88\u606f\u670d\u52a1",permalink:"/mixin-js-sdk-docs/docs/server/blaze"},next:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/mixin-js-sdk-docs/docs/server/updateLog"}},p=[{value:"1. \u76f4\u63a5\u901a\u8fc7 token \u6784\u5efa\u4e00\u4e2a <code>client</code>",id:"1-\u76f4\u63a5\u901a\u8fc7-token-\u6784\u5efa\u4e00\u4e2a-client",children:[]},{value:"2. \u901a\u8fc7 <code>SDK</code> \u5bfc\u5165\u5355\u72ec\u7684\u65b9\u6cd5\u6765\u4f7f\u7528",id:"2-\u901a\u8fc7-sdk-\u5bfc\u5165\u5355\u72ec\u7684\u65b9\u6cd5\u6765\u4f7f\u7528",children:[{value:"1. \u83b7\u53d6\u7528\u6237\u57fa\u672c\u4fe1\u606f",id:"1-\u83b7\u53d6\u7528\u6237\u57fa\u672c\u4fe1\u606f",children:[]},{value:"2. \u83b7\u53d6\u7528\u6237\u8d44\u4ea7\u4fe1\u606f",id:"2-\u83b7\u53d6\u7528\u6237\u8d44\u4ea7\u4fe1\u606f",children:[]},{value:"3. \u83b7\u53d6\u7528\u6237\u8f6c\u8d26\u5217\u8868",id:"3-\u83b7\u53d6\u7528\u6237\u8f6c\u8d26\u5217\u8868",children:[]},{value:"4. \u83b7\u53d6\u7528\u6237\u7684\u8054\u7cfb\u4eba\u4fe1\u606f",id:"4-\u83b7\u53d6\u7528\u6237\u7684\u8054\u7cfb\u4eba\u4fe1\u606f",children:[]},{value:"5. \u83b7\u53d6\u7528\u6237\u7684\u9ed1\u540d\u5355\u7528\u6237\u4fe1\u606f",id:"5-\u83b7\u53d6\u7528\u6237\u7684\u9ed1\u540d\u5355\u7528\u6237\u4fe1\u606f",children:[]},{value:"6. \u83b7\u53d6\u7528\u6237\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740",id:"6-\u83b7\u53d6\u7528\u6237\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528-token-\u8bbf\u95ee\u7528\u6237\u4fe1\u606f"},"\u4f7f\u7528 Token \u8bbf\u95ee\u7528\u6237\u4fe1\u606f"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u5728\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," \u6210\u529f\u83b7\u53d6\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"access_token")," \u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"access_token")," \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e5f\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u5982\u7528\u6237\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"\u8d44\u4ea7\u5217\u8868/\u8f6c\u8d26\u5217\u8868/nft")," \u7b49\u7b49\uff0c\u90fd\u9700\u8981\u7528\u6237\u4e3b\u52a8\u7684\u6388\u6743\u624d\u53ef\u4ee5\u83b7\u53d6\u5230\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6388\u6743\u4fe1\u606f\u8be6\u60c5\uff0c",(0,o.kt)("a",{parentName:"li",href:"/docs/web/auth"},"\u8bf7\u53c2\u89c1\u8fd9\u91cc"))))),(0,o.kt)("h2",{id:"1-\u76f4\u63a5\u901a\u8fc7-token-\u6784\u5efa\u4e00\u4e2a-client"},"1. \u76f4\u63a5\u901a\u8fc7 token \u6784\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"h2"},"client")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const client = new Client(null, 'Please replace here with user token');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"\u4e4b\u540e\u518d\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"/docs/server/client/prev"},"\u4e0a\u4e00\u7ae0")," \u6765\u8c03\u7528"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u7684\u65b9\u6cd5\u548c\u53c2\u6570\u90fd\u662f\u4e00\u6837\u7684"),(0,o.kt)("li",{parentName:"ol"},"\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"client.userMe()")," ",(0,o.kt)("inlineCode",{parentName:"li"},"client.readAssets()")," ",(0,o.kt)("inlineCode",{parentName:"li"},"client.readSnapshots()")," \u7b49\u7b49"))),(0,o.kt)("h2",{id:"2-\u901a\u8fc7-sdk-\u5bfc\u5165\u5355\u72ec\u7684\u65b9\u6cd5\u6765\u4f7f\u7528"},"2. \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"h2"},"SDK")," \u5bfc\u5165\u5355\u72ec\u7684\u65b9\u6cd5\u6765\u4f7f\u7528"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u90fd ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," \u5b9e\u4f8b\uff0c\u662f\u6709\u4e00\u5b9a\u5f00\u9500\u7684\uff0c\u66f4\u591a\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u662f\u4e3a\u4e86\u5355\u72ec\u7684\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u67d0\u4e2a\u65b9\u6cd5"),"\u6765\u83b7\u53d6\u4e00\u4e9b\u5173\u4e8e\u7528\u6237\u7684\u4fe1\u606f\u3002\u6240\u4ee5\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK")," \u5185\u90e8\u76f4\u63a5\u5bfc\u51fa\u4e86\u4e00\u4e9b\u5355\u72ec\u7684\u65b9\u6cd5\uff0c\u6765\u65b9\u4fbf\u8c03\u7528\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u4e00\u6837\u7684\u5730\u65b9\u5728\u4e8e\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"token"))),(0,o.kt)("h3",{id:"1-\u83b7\u53d6\u7528\u6237\u57fa\u672c\u4fe1\u606f"},"1. \u83b7\u53d6\u7528\u6237\u57fa\u672c\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { userMe } = require('mixin-node-sdk');\nuserMe('Please replace here with user token');\n")),(0,o.kt)("h3",{id:"2-\u83b7\u53d6\u7528\u6237\u8d44\u4ea7\u4fe1\u606f"},"2. \u83b7\u53d6\u7528\u6237\u8d44\u4ea7\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { readAssets, readAsset } = require('mixin-node-sdk');\nreadAssets('Please replace here with user token');\nreadAsset('Please replace here with user token', 'assetId replace here');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u6388\u6743\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/web/auth"},"\u8be6\u60c5\u8bf7\u53c2\u89c1\u8fd9\u91cc"))),(0,o.kt)("h3",{id:"3-\u83b7\u53d6\u7528\u6237\u8f6c\u8d26\u5217\u8868"},"3. \u83b7\u53d6\u7528\u6237\u8f6c\u8d26\u5217\u8868"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { readSnapshots, readSnapshot } = require('mixin-node-sdk');\nreadSnapshots('Please replace here with user token');\nreadSnapshot('Please replace here with user token', 'snapshotId replace here');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u8f6c\u8d26"),"\u6388\u6743\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/web/auth"},"\u8be6\u60c5\u8bf7\u53c2\u89c1\u8fd9\u91cc"))),(0,o.kt)("h3",{id:"4-\u83b7\u53d6\u7528\u6237\u7684\u8054\u7cfb\u4eba\u4fe1\u606f"},"4. \u83b7\u53d6\u7528\u6237\u7684\u8054\u7cfb\u4eba\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { readFriends } = require('mixin-node-sdk');\nreadFriends('Please replace here with user token');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u8054\u7cfb\u4eba"),"\u6388\u6743\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/web/auth"},"\u8be6\u60c5\u8bf7\u53c2\u89c1\u8fd9\u91cc"))),(0,o.kt)("h3",{id:"5-\u83b7\u53d6\u7528\u6237\u7684\u9ed1\u540d\u5355\u7528\u6237\u4fe1\u606f"},"5. \u83b7\u53d6\u7528\u6237\u7684\u9ed1\u540d\u5355\u7528\u6237\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { readBlockUsers } = require('mixin-node-sdk');\nreadBlockUsers('Please replace here with user token');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u8054\u7cfb\u4eba"),"\u6388\u6743\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/web/auth"},"\u8be6\u60c5\u8bf7\u53c2\u89c1\u8fd9\u91cc"))),(0,o.kt)("h3",{id:"6-\u83b7\u53d6\u7528\u6237\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740"},"6. \u83b7\u53d6\u7528\u6237\u67d0\u4e2a\u8d44\u4ea7\u7684\u6240\u6709\u63d0\u73b0\u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { readAddresses } = require('mixin-node-sdk');\nreadAddresses('Please replace here with user token', 'assetId replace here');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u4ea7"),"\u6388\u6743\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/web/auth"},"\u8be6\u60c5\u8bf7\u53c2\u89c1\u8fd9\u91cc"))))}u.isMDXComponent=!0}}]);