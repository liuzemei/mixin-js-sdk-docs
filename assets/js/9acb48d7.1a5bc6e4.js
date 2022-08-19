"use strict";(self.webpackChunkmixin_js_docs=self.webpackChunkmixin_js_docs||[]).push([[58],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(k,c(c({ref:n},o),{},{components:t})):a.createElement(k,c({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var d=2;d<i;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9519:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),c=["components"],l={sidebar_position:11},s="\u6d88\u606f",d={unversionedId:"server/client/message",id:"server/client/message",isDocsHomePage:!1,title:"\u6d88\u606f",description:"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b",source:"@site/docs/server/client/11.message.mdx",sourceDirName:"server/client",slug:"/server/client/message",permalink:"/mixin-js-sdk-docs/docs/server/client/message",editUrl:"https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/docs/server/client/11.message.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"serverSidebar",previous:{title:"\u4f1a\u8bdd",permalink:"/mixin-js-sdk-docs/docs/server/client/conversation"},next:{title:"\u5708\u5b50",permalink:"/mixin-js-sdk-docs/docs/server/client/circle"}},o=[{value:"\u53d1\u6d88\u606f\u7ed9\u5355\u4e2a\u7528\u6237",id:"\u53d1\u6d88\u606f\u7ed9\u5355\u4e2a\u7528\u6237",children:[{value:"1. \u53d1\u9001\u6587\u5b57\u6d88\u606f",id:"1-\u53d1\u9001\u6587\u5b57\u6d88\u606f",children:[]},{value:"2. \u53d1\u9001\u6587\u7ae0\u6d88\u606f",id:"2-\u53d1\u9001\u6587\u7ae0\u6d88\u606f",children:[]},{value:"3. \u4e0a\u4f20\u6587\u4ef6",id:"3-\u4e0a\u4f20\u6587\u4ef6",children:[]},{value:"4. \u53d1\u9001\u56fe\u7247\u6d88\u606f",id:"4-\u53d1\u9001\u56fe\u7247\u6d88\u606f",children:[]},{value:"5. \u53d1\u9001\u6587\u4ef6\u6d88\u606f",id:"5-\u53d1\u9001\u6587\u4ef6\u6d88\u606f",children:[]},{value:"6. \u53d1\u9001\u8d34\u7eb8\u6d88\u606f",id:"6-\u53d1\u9001\u8d34\u7eb8\u6d88\u606f",children:[]},{value:"7. \u53d1\u9001\u8054\u7cfb\u4eba\u6d88\u606f",id:"7-\u53d1\u9001\u8054\u7cfb\u4eba\u6d88\u606f",children:[]},{value:"8. \u53d1\u9001\u5361\u7247\u6d88\u606f",id:"8-\u53d1\u9001\u5361\u7247\u6d88\u606f",children:[]},{value:"9. \u53d1\u9001\u97f3\u9891\u6d88\u606f",id:"9-\u53d1\u9001\u97f3\u9891\u6d88\u606f",children:[]},{value:"10. \u53d1\u9001\u76f4\u64ad\u6d88\u606f",id:"10-\u53d1\u9001\u76f4\u64ad\u6d88\u606f",children:[]},{value:"11. \u53d1\u9001\u89c6\u9891\u6d88\u606f",id:"11-\u53d1\u9001\u89c6\u9891\u6d88\u606f",children:[]},{value:"12. \u53d1\u9001\u4f4d\u7f6e\u6d88\u606f",id:"12-\u53d1\u9001\u4f4d\u7f6e\u6d88\u606f",children:[]},{value:"13. \u53d1\u9001\u6309\u94ae\u6d88\u606f",id:"13-\u53d1\u9001\u6309\u94ae\u6d88\u606f",children:[]},{value:"14. \u53d1\u9001\u64a4\u56de\u6d88\u606f",id:"14-\u53d1\u9001\u64a4\u56de\u6d88\u606f",children:[]},{value:"15. \u81ea\u884c\u6784\u5efa\u6d88\u606f",id:"15-\u81ea\u884c\u6784\u5efa\u6d88\u606f",children:[]}]},{value:"2. \u53d1\u9001\u591a\u6761\u6d88\u606f",id:"2-\u53d1\u9001\u591a\u6761\u6d88\u606f",children:[]}],p={toc:o};function u(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6d88\u606f"},"\u6d88\u606f"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u7bc7\u6587\u6863\u6709\u89c6\u9891\u6559\u7a0b\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://developers.mixinbots.com/courses/1e276ee9-18fb-42e3-915a-54b049679084/89329795-c5a2-4aa5-ab32-c52cf6649912"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b")))),(0,i.kt)("h2",{id:"\u53d1\u6d88\u606f\u7ed9\u5355\u4e2a\u7528\u6237"},"\u53d1\u6d88\u606f\u7ed9\u5355\u4e2a\u7528\u6237"),(0,i.kt)("h3",{id:"1-\u53d1\u9001\u6587\u5b57\u6d88\u606f"},"1. \u53d1\u9001\u6587\u5b57\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendTextMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', 'hello');\n")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8981\u53d1\u9001\u5bf9\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id")),(0,i.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u53d1\u9001\u7684\u6587\u5b57"))),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "message",\n  "representative_id": "",\n  "quote_message_id": "",\n  "conversation_id": "dd219235-e83a-3b85-a13f-d0f20fa0e833",\n  "user_id": "11efbb75-e7fe-44d7-a14f-698535289310",\n  "session_id": "afad4c37-b90e-43c2-adc2-e6e1bd31ae94",\n  "message_id": "c81e774b-a762-49f8-9114-35900be2c90e",\n  "category": "PLAIN_TEXT",\n  "data": "aGVsbG8=",\n  "data_base64": "aGVsbG8",\n  "status": "",\n  "source": "CREATE_MESSAGE",\n  "silent": false,\n  "expire_in": 0,\n  "created_at": "2022-08-19T03:06:17.363215481Z",\n  "updated_at": "2022-08-19T03:06:17.363215481Z"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6d88\u606f\u7684\u8fd4\u56de\u503c\u5dee\u4e0d\u591a\u5927\u540c\u5c0f\u5f02\uff0c\u4ee5\u4e0b\u5c31\u7701\u7565\u6d88\u606f\u7684\u8fd4\u56de\u503c\u90e8\u5206\uff0c\u53ea\u4ecb\u7ecd\u8c03\u7528\u90e8\u5206\u3002")),(0,i.kt)("h3",{id:"2-\u53d1\u9001\u6587\u7ae0\u6d88\u606f"},"2. \u53d1\u9001\u6587\u7ae0\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendPostMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', '# \u4e00\u7ea7\u6807\u9898\\n## \u4e8c\u7ea7\u6807\u9898\\n \u6b63\u6587..');\n")),(0,i.kt)("h3",{id:"3-\u4e0a\u4f20\u6587\u4ef6"},"3. \u4e0a\u4f20\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst file = fs.readFileSync('./somefile');\nclient.uploadFile(file);\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "view_url": "https://mixin-assets-cn.zeromesh.net/mixin/attachments/1660891914-33073792652464c197de2ce934719a2d1224050d48bee89e41129e3088db50e1",\n  "attachment_id": "fbd7d403-3b39-4f8f-afcf-2b2aac42588f"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u8fd4\u56de\u7684\u4e24\u4e2a\u503c\uff0c\u4e00\u4e2a\u662f\u6587\u4ef6\u7684\u9884\u89c8\u5730\u5740\uff0c\u4e00\u4e2a\u662f\u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u3002\u540e\u8fb9\u6240\u6709\u5173\u4e8e\u6587\u4ef6\u53d1\u9001\u90fd\u4f1a\u7528\u5230\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"attachment_id"))),(0,i.kt)("h3",{id:"4-\u53d1\u9001\u56fe\u7247\u6d88\u606f"},"4. \u53d1\u9001\u56fe\u7247\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendImageMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  attachment_id: '', // \u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n  mime_type: '', // \u56fe\u7247\u7684\u7c7b\u578b\uff0c\u5982\uff1aimage/jpeg\n  width: 300, // \u56fe\u7247\u7684\u5bbd\u5ea6\n  height: 300, // \u56fe\u7247\u7684\u9ad8\u5ea6\n  size: 300, // \u56fe\u7247\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\n  thumbnail: '', // \u53ef\u9009\uff0c\u7f29\u7565\u56fe\u7684 base64\n});\n")),(0,i.kt)("h3",{id:"5-\u53d1\u9001\u6587\u4ef6\u6d88\u606f"},"5. \u53d1\u9001\u6587\u4ef6\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendDataMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  attachment_id: '', // \u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n  mime_type: '', // \u56fe\u7247\u7684\u7c7b\u578b\uff0c\u5982\uff1aimage/jpeg\n  size: 300, // \u56fe\u7247\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\n  name: '', // \u6587\u4ef6\u663e\u793a\u7684\u540d\u5b57\n});\n")),(0,i.kt)("h3",{id:"6-\u53d1\u9001\u8d34\u7eb8\u6d88\u606f"},"6. \u53d1\u9001\u8d34\u7eb8\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendStickerMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  sticker_id: '', // \u8d34\u7eb8\u7684\u552f\u4e00\u6807\u8bc6\n  name: '', // \u53ef\u9009\uff0c\u8d34\u7eb8\u7684\u540d\u5b57\n  album_id: '', // \u53ef\u9009\uff0c\u8d34\u7eb8\u7684\u6240\u5c5e\u76f8\u518c\n});\n")),(0,i.kt)("h3",{id:"7-\u53d1\u9001\u8054\u7cfb\u4eba\u6d88\u606f"},"7. \u53d1\u9001\u8054\u7cfb\u4eba\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendContactMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  user_id: '',\n});\n")),(0,i.kt)("h3",{id:"8-\u53d1\u9001\u5361\u7247\u6d88\u606f"},"8. \u53d1\u9001\u5361\u7247\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendAppCardMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  app_id: '', // \u4e00\u822c\u76f4\u63a5\u4f7f\u7528\u81ea\u5df1\u673a\u5668\u4eba\u7684 client_id\n  icon_url: '', // \u5361\u7247\u7684\u56fe\u6807\u94fe\u63a5\n  title: '', // \u5361\u7247\u7684\u6807\u9898\n  description: '', // \u5361\u7247\u7684\u63cf\u8ff0\n  action: '', // \u5361\u7247\u7684\u8df3\u8f6c\u94fe\u63a5\n  shareable: false, // \u53ef\u9009\uff0c\u662f\u5426\u53ef\u5206\u4eab\n});\n")),(0,i.kt)("h3",{id:"9-\u53d1\u9001\u97f3\u9891\u6d88\u606f"},"9. \u53d1\u9001\u97f3\u9891\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendAudioMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  attachment_id: '', // \u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n  mime_type: '', // \u97f3\u9891\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301\uff1aaudio/ogg\n  size: 300, // \u97f3\u9891\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\n  duration: 300, // \u97f3\u9891\u7684\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\n  wave_form: '', // \u53ef\u9009\uff0c\u97f3\u9891\u8f68\u8ff9 base64\n});\n")),(0,i.kt)("h3",{id:"10-\u53d1\u9001\u76f4\u64ad\u6d88\u606f"},"10. \u53d1\u9001\u76f4\u64ad\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendLiveMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  width: 300, // \u76f4\u64ad\u5361\u7247\u7684\u5bbd\u5ea6\n  height: 300, // \u76f4\u64ad\u5361\u7247\u7684\u9ad8\u5ea6\n  thumb_url: '', // \u76f4\u64ad\u5361\u7247\u7684\u7f29\u7565\u56fe\u94fe\u63a5\n  url: '', // \u76f4\u64ad\u5361\u7247\u7684\u89c6\u9891\u5730\u5740\n  shareable: false, // \u53ef\u9009\uff0c\u662f\u5426\u53ef\u5206\u4eab\n});\n")),(0,i.kt)("h3",{id:"11-\u53d1\u9001\u89c6\u9891\u6d88\u606f"},"11. \u53d1\u9001\u89c6\u9891\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendVideoMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  attachment_id: '', // \u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n  mime_type: '', // \u89c6\u9891\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301\uff1avideo/mp4\n  size: 300, // \u89c6\u9891\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\n  duration: 300, // \u89c6\u9891\u7684\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\n  width: 300, // \u89c6\u9891\u7684\u5bbd\u5ea6\n  height: 300, // \u89c6\u9891\u7684\u9ad8\u5ea6\n  thumbnail: '', // \u53ef\u9009\uff0c\u89c6\u9891\u7684\u7f29\u7565\u56fe base64\n});\n")),(0,i.kt)("h3",{id:"12-\u53d1\u9001\u4f4d\u7f6e\u6d88\u606f"},"12. \u53d1\u9001\u4f4d\u7f6e\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendLocationMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  latitude: '', // \u7eac\u5ea6\n  longitude: '', // \u7ecf\u5ea6\n  address: '', // \u53ef\u9009\n  name: '', // \u53ef\u9009\n});\n")),(0,i.kt)("h3",{id:"13-\u53d1\u9001\u6309\u94ae\u6d88\u606f"},"13. \u53d1\u9001\u6309\u94ae\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendButtonMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  text: '', // \u6d88\u606f\u7684\u6587\u672c\u5185\u5bb9\n  buttons: [\n    {\n      label: '', // \u6309\u94ae\u7684\u6587\u672c\u5185\u5bb9\n      color: '', // 16\u8fdb\u5236\u6309\u94ae\u7684\u989c\u8272\uff0c\u5982\uff1a #FF0000\n      action: '', // \u6309\u94ae\u7684\u8df3\u8f6c\u94fe\u63a5\n    },\n  ],\n});\n")),(0,i.kt)("h3",{id:"14-\u53d1\u9001\u64a4\u56de\u6d88\u606f"},"14. \u53d1\u9001\u64a4\u56de\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendRecallMsg('e8e8cd79-cd40-4796-8c54-3a13cfe50115', {\n  message_id: '', // \u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\n});\n")),(0,i.kt)("h3",{id:"15-\u81ea\u884c\u6784\u5efa\u6d88\u606f"},"15. \u81ea\u884c\u6784\u5efa\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendMessage({\n  conversation_id: '', // \u4f1a\u8bdd\u7684\u552f\u4e00\u6807\u8bc6\n  message_id: '', // \u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\n  category: '', // \u6d88\u606f\u7684\u7c7b\u578b\uff0c\u8be6\u7ec6\u7684\u7c7b\u578b\u8bf7\u67e5\u770b SDK\n  data: '', // base64 \u7684\u6d88\u606f\u5185\u5bb9\n  recipient_id: '', // \u53ef\u9009\uff0c\u6d88\u606f\u7684\u63a5\u6536\u8005\uff0c\u53d1\u7ed9\u7fa4\u804a\u65f6\uff0c\u4e0d\u5e26\u8fd9\u4e2a\u53c2\u6570\u5c31\u4f1a\u53d1\u7ed9\u7fa4\u804a\u7684\u6bcf\u4e00\u4e2a\u4eba\u3002\u5e26\u4e0a\u7684\u8bdd\uff0c\u5c31\u53ea\u4f1a\u53d1\u7ed9\u7fa4\u804a\u7684\u67d0\u4e00\u4e2a\u4eba\n  representative_id: '', // \u53ef\u9009\uff0c\u6d88\u606f\u7684\u53d1\u9001\u8005\uff0c\n  quote_message_id: '', // \u53ef\u9009\uff0c\u88ab\u5f15\u7528\u7684\u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u6d88\u606f\u90fd\u5c01\u88c5\u4e86\u8fd9\u4e2a\u63a5\u53e3\u3002")),(0,i.kt)("h2",{id:"2-\u53d1\u9001\u591a\u6761\u6d88\u606f"},"2. \u53d1\u9001\u591a\u6761\u6d88\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"client.sendMessages([\n  {\n    conversation_id: '', // \u4f1a\u8bdd\u7684\u552f\u4e00\u6807\u8bc6\n    message_id: '', // \u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\n    category: '', // \u6d88\u606f\u7684\u7c7b\u578b\uff0c\u8be6\u7ec6\u7684\u7c7b\u578b\u8bf7\u67e5\u770b SDK\n    data: '', // base64 \u7684\u6d88\u606f\u5185\u5bb9\n    recipient_id: '', // \u53ef\u9009\uff0c\u6d88\u606f\u7684\u63a5\u6536\u8005\uff0c\u53d1\u7ed9\u7fa4\u804a\u65f6\uff0c\u4e0d\u5e26\u8fd9\u4e2a\u53c2\u6570\u5c31\u4f1a\u53d1\u7ed9\u7fa4\u804a\u7684\u6bcf\u4e00\u4e2a\u4eba\u3002\u5e26\u4e0a\u7684\u8bdd\uff0c\u5c31\u53ea\u4f1a\u53d1\u7ed9\u7fa4\u804a\u7684\u67d0\u4e00\u4e2a\u4eba\n    representative_id: '', // \u53ef\u9009\uff0c\u6d88\u606f\u7684\u53d1\u9001\u8005\uff0c\n    quote_message_id: '', // \u53ef\u9009\uff0c\u88ab\u5f15\u7528\u7684\u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6\n  },\n]);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u6700\u5927\u9650\u5236\u4e3a 100 \u6761\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6574\u6761\u6d88\u606f\u6700\u5927\u9650\u5236\u4e3a 1MB \u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8d85\u8fc7\u4e0a\u8ff0\u9650\u5236\uff0c\u4f1a\u53d1\u9001\u5931\u8d25\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u8c03\u7528\u6b64\u63a5\u53e3\u7ed9\u540c\u4e00\u4e2a\u7528\u6237\u53d1\u9001\u591a\u6761\u6d88\u606f\uff0c\u90a3\u4e48\u6d88\u606f\u9001\u8fbe\u987a\u5e8f\u65e0\u6cd5\u4fdd\u8bc1\u3002\u5982\u679c\u9700\u8981\u4fdd\u8bc1\u6d88\u606f\u53d1\u9001\u987a\u5e8f\uff0c\u8bf7\u9010\u6761\u53d1\u9001\u3002"))))}u.isMDXComponent=!0}}]);