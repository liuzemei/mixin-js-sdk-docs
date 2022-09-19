"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[811],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},710:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],o={sidebar_position:2},c="\u7528\u6237",l={unversionedId:"server/client/user",id:"server/client/user",isDocsHomePage:!1,title:"\u7528\u6237",description:"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b",source:"@site/docs/server/client/02.user.mdx",sourceDirName:"server/client",slug:"/server/client/user",permalink:"/mixin-js-sdk-docs/docs/server/client/user",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/02.user.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"serverSidebar",previous:{title:"\u5b9e\u4f8b\u521d\u59cb\u5316",permalink:"/mixin-js-sdk-docs/docs/server/client/prev"},next:{title:"\u4f1a\u8bdd",permalink:"/mixin-js-sdk-docs/docs/server/client/conversation"}},d=[{value:"1. \u7528\u6237\u6388\u6743\u767b\u9646",id:"1-\u7528\u6237\u6388\u6743\u767b\u9646",children:[]},{value:"2. \u83b7\u53d6\u7528\u6237\u4fe1\u606f",id:"2-\u83b7\u53d6\u7528\u6237\u4fe1\u606f",children:[]},{value:"3. \u83b7\u53d6\u591a\u4e2a\u7528\u6237\u4fe1\u606f",id:"3-\u83b7\u53d6\u591a\u4e2a\u7528\u6237\u4fe1\u606f",children:[]},{value:"4. \u6839\u636e <code>user_id</code> \u6216 <code>identity_number</code> \u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f",id:"4-\u6839\u636e-user_id-\u6216-identity_number-\u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f",children:[]},{value:"5. \u6839\u636e <code>identity_number</code> \u6216 <code>phone</code> \u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f",id:"5-\u6839\u636e-identity_number-\u6216-phone-\u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7528\u6237"},"\u7528\u6237"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixinbots.com/courses/1e276ee9-18fb-42e3-915a-54b049679084/89329795-c5a2-4aa5-ab32-c52cf6649910"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b")))),(0,r.kt)("h3",{id:"1-\u7528\u6237\u6388\u6743\u767b\u9646"},"1. \u7528\u6237\u6388\u6743\u767b\u9646"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.authorizeToken(code);\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "user authorization token",\n  "scope": "list of permissions that the user has given, e.g. \'PROFILE:READ ASSETS:READ\'"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u7684 code \u83b7\u53d6\uff0c\u9700\u8981\u5ba2\u6237\u7aef\u5b8c\u6210\u6388\u6743\u64cd\u4f5c\u3002 ",(0,r.kt)("a",{parentName:"li",href:"/docs/web/user#2-%E8%8E%B7%E5%8F%96%E6%8E%88%E6%9D%83%E7%9A%84-code"},"\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b\u5ba2\u6237\u7aef\u7aef\u4ee3\u7801")," \u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," \u7684\u65f6\u5019\uff0c\u643a\u5e26\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),"\uff0c\u5c31\u53ea\u9700\u8981\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," \u53c2\u6570\u5373\u53ef\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\uff0c\u5219\u9700\u8981\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"access_token")," \u53ef\u4ee5\u8bbf\u95ee\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," \u7684\u63a5\u53e3\u3002",(0,r.kt)("a",{parentName:"li",href:"/docs/server/userWithToken"},"\u5177\u4f53\u5185\u5bb9\u8bf7\u67e5\u770b\u8fd9\u91cc"))))),(0,r.kt)("h3",{id:"2-\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},"2. \u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.userMe();\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "user",\n  "user_id": "d419d2b0-5c20-4dd7-9a5c-177375c249b8",\n  "identity_number": "7000104117",\n  "phone": "d419d2b0-5c20-4dd7-9a5c-177375c249b8",\n  "full_name": "node-sdk-test123",\n  "biography": "https://mixin.one/authhttps://mixin.one/authhttps://mixin.one/auth",\n  "avatar_url": "",\n  "relationship": "ME",\n  "mute_until": "0001-01-01T00:00:00Z",\n  "created_at": "2021-08-25T07:18:48.207247252Z",\n  "is_verified": false,\n  "is_scam": false,\n  "app": {\n    "type": "app",\n    "app_id": "d419d2b0-5c20-4dd7-9a5c-177375c249b8",\n    "app_number": "7000104117",\n    "redirect_uri": "https://mixin.one/auth",\n    "home_uri": "https://mixin.one",\n    "name": "node-sdk-test",\n    "icon_url": "",\n    "description": "https://mixin.one/authhttps://mixin.one/authhttps://mixin.one/auth",\n    "capabilities": ["CONTACT", "GROUP"],\n    "resource_patterns": ["https://mixin.one/"],\n    "category": "OTHER",\n    "creator_id": "105f6e8b-d249-4b4d-9beb-e03cefaebc37",\n    "updated_at": "2021-08-27T01:47:18.941742117Z",\n    "app_secret": "",\n    "capabilites": ["CONTACT", "GROUP"]\n  },\n  "session_id": "7412bbcd-218d-43f6-a9a7-46e10ff0021a",\n  "pin_token": "",\n  "pin_token_base64": "",\n  "code_id": "4a4049bb-2733-4751-bbff-46f90a51f204",\n  "code_url": "https://mixin.one/codes/4a4049bb-2733-4751-bbff-46f90a51f204",\n  "device_status": "",\n  "has_pin": true,\n  "has_emergency_contact": false,\n  "receive_message_source": "EVERYBODY",\n  "accept_conversation_source": "EVERYBODY",\n  "accept_search_source": "EVERYBODY",\n  "fiat_currency": "USD",\n  "transfer_notification_threshold": 0,\n  "transfer_confirmation_threshold": 100\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u673a\u5668\u4eba\u8c03\u7528\uff0c\u5219\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u5b57\u6bb5\u3002\u5426\u5219\u6ca1\u6709"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u673a\u5668\u4eba\u8c03\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"phone")," \u5b57\u6bb5\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id")," \u4e00\u6837")))),(0,r.kt)("h3",{id:"3-\u83b7\u53d6\u591a\u4e2a\u7528\u6237\u4fe1\u606f"},"3. \u83b7\u53d6\u591a\u4e2a\u7528\u6237\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.readUsers(['e8e8cd79-cd40-4796-8c54-3a13cfe50115']);\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "user",\n    "user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n    "identity_number": "30265",\n    "phone": "",\n    "full_name": "\u5218\u6cfd\u7f8e",\n    "biography": "\u6b22\u8fce\u4ea4\u6d41 Mixin \u673a\u5668\u4eba\u5f00\u53d1\u95ee\u9898\u3002",\n    "avatar_url": "https://mixin-images.zeromesh.net/OsaSpGZMBV4PmQ2Om-UnDZ-878Bk37heqprakp_Sll6MWM-ciLdUQrvEDIeSF4z3t0sgfXt8Hw4zmDkiR2irag0=s256",\n    "relationship": "STRANGER",\n    "mute_until": "2020-08-27T10:11:57.481232553Z",\n    "created_at": "2017-11-27T05:10:36.311323157Z",\n    "is_verified": false,\n    "is_scam": false\n  }\n]\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6ce8\u610f\u8fd9\u91cc\u53ea\u80fd\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," \u6765\u67e5\u8be2\u3002"))),(0,r.kt)("h3",{id:"4-\u6839\u636e-user_id-\u6216-identity_number-\u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f"},"4. \u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"h3"},"user_id")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"h3"},"identity_number")," \u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.readUser('30265');\nclient.readUser('e8e8cd79-cd40-4796-8c54-3a13cfe50115');\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "user",\n  "user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "identity_number": "30265",\n  "phone": "",\n  "full_name": "\u5218\u6cfd\u7f8e",\n  "biography": "\u6b22\u8fce\u4ea4\u6d41 Mixin \u673a\u5668\u4eba\u5f00\u53d1\u95ee\u9898\u3002",\n  "avatar_url": "https://mixin-images.zeromesh.net/OsaSpGZMBV4PmQ2Om-UnDZ-878Bk37heqprakp_Sll6MWM-ciLdUQrvEDIeSF4z3t0sgfXt8Hw4zmDkiR2irag0=s256",\n  "relationship": "STRANGER",\n  "mute_until": "2020-08-27T10:11:57.481232553Z",\n  "created_at": "2017-11-27T05:10:36.311323157Z",\n  "is_verified": false,\n  "is_scam": false\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"identity_number")," \u67e5\u8be2\u7684\u65f6\u5019\uff0c\u6709\u8bbf\u95ee\u9891\u7387\u9650\u5236\u3002",(0,r.kt)("strong",{parentName:"li"},"\u9891\u7e41\u8bf7\u6c42"),"\u4f1a\u88ab\u670d\u52a1\u5668\u62d2\u7edd\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id")," \u67e5\u8be2\u6ca1\u6709\u9891\u7387\u9650\u5236\u3002")))),(0,r.kt)("h3",{id:"5-\u6839\u636e-identity_number-\u6216-phone-\u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f"},"5. \u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"h3"},"identity_number")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"h3"},"phone")," \u83b7\u53d6\u5355\u4e2a\u7528\u6237\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"client.searchUser('30265');\nclient.searchUser('+8617718523520');\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "user",\n  "user_id": "e8e8cd79-cd40-4796-8c54-3a13cfe50115",\n  "identity_number": "30265",\n  "phone": "",\n  "full_name": "\u5218\u6cfd\u7f8e",\n  "biography": "\u6b22\u8fce\u4ea4\u6d41 Mixin \u673a\u5668\u4eba\u5f00\u53d1\u95ee\u9898\u3002",\n  "avatar_url": "https://mixin-images.zeromesh.net/OsaSpGZMBV4PmQ2Om-UnDZ-878Bk37heqprakp_Sll6MWM-ciLdUQrvEDIeSF4z3t0sgfXt8Hw4zmDkiR2irag0=s256",\n  "relationship": "STRANGER",\n  "mute_until": "2020-08-27T10:11:57.481232553Z",\n  "created_at": "2017-11-27T05:10:36.311323157Z",\n  "is_verified": false,\n  "is_scam": false\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6b64\u63a5\u53e3\u6709\u8bbf\u95ee\u9891\u7387\u9650\u5236\u3002",(0,r.kt)("strong",{parentName:"p"},"\u9891\u7e41\u8bf7\u6c42"),"\u4f1a\u88ab\u670d\u52a1\u5668\u62d2\u7edd\u3002"))))}m.isMDXComponent=!0}}]);