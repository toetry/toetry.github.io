"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i=void 0,l={unversionedId:"\u5f00\u53d1\u6587\u6863/plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e",id:"\u5f00\u53d1\u6587\u6863/plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e",title:"\u8bf7\u6c42\u8bf4\u660e",description:"\u57fa\u7840\u4f20\u8f93",source:"@site/docs/\u5f00\u53d1\u6587\u6863/2. plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e.md",sourceDirName:"\u5f00\u53d1\u6587\u6863/2. plugins-docs/API",slug:"/\u5f00\u53d1\u6587\u6863/plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e",permalink:"/docs/\u5f00\u53d1\u6587\u6863/plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e",draft:!1,editUrl:"https://github.com/toetry/toetry.github.io/tree/Docs/docs/\u5f00\u53d1\u6587\u6863/2. plugins-docs/API/\u8bf7\u6c42\u8bf4\u660e.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2.4 API",permalink:"/docs/category/24-api"},next:{title:"\u8d26\u53f7\u76f8\u5173",permalink:"/docs/\u5f00\u53d1\u6587\u6863/plugins-docs/API/\u8d26\u53f7\u76f8\u5173"}},c={},p=[{value:"\u57fa\u7840\u4f20\u8f93",id:"\u57fa\u7840\u4f20\u8f93",level:3},{value:"\u8bf7\u6c42\u8bf4\u660e",id:"\u8bf7\u6c42\u8bf4\u660e",level:3}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u57fa\u7840\u4f20\u8f93"},"\u57fa\u7840\u4f20\u8f93"),(0,o.kt)("p",null,"\u8bf7\u6c42\u4e00\u4e2a API \u65f6, \u5305\u542b\u4e86: API \u7ec8\u7ed3\u70b9, \u4ee5\u53ca API \u6240\u9700\u53c2\u6570."),(0,o.kt)("h3",{id:"\u8bf7\u6c42\u8bf4\u660e"},"\u8bf7\u6c42\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},'# coding:utf-8\n\nfrom libs.event.qqevent import onkeyword\n\n@onkeyword(keywordList=["ping"])\nasync def foo(n):\n    result = await n.callAPI(url="API", param1="value", param2="value")\n    # result API\u7684\u54cd\u5e94\n    # url    API\u7ec8\u7ed3\u70b9\n    # param1 \u53c2\u65701\n    # param2 \u53c2\u65702\n')),(0,o.kt)("p",null,"API \u7684\u54cd\u5e94\u662f\u4e00\u4e2a JSON \u6570\u636e, \u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "\u72b6\u6001, \u8868\u793a API \u662f\u5426\u8c03\u7528\u6210\u529f, \u5982\u679c\u6210\u529f, \u5219\u662f OK, \u5176\u4ed6\u7684\u5728\u4e0b\u9762\u4f1a\u8bf4\u660e",\n    "retcode": 0,\n    "msg": "\u9519\u8bef\u6d88\u606f, \u4ec5\u5728 API \u8c03\u7528\u5931\u8d25\u65f6\u6709\u8be5\u5b57\u6bb5",\n    "wording": "\u5bf9\u9519\u8bef\u7684\u8be6\u7ec6\u89e3\u91ca(\u4e2d\u6587), \u4ec5\u5728 API \u8c03\u7528\u5931\u8d25\u65f6\u6709\u8be5\u5b57\u6bb5",\n    "data": {\n        "\u54cd\u5e94\u6570\u636e\u540d": "\u6570\u636e\u503c",\n        "\u54cd\u5e94\u6570\u636e\u540d2": "\u6570\u636e\u503c",\n    },\n    "echo": "\'\u56de\u58f0\', \u5982\u679c\u8bf7\u6c42\u65f6\u6307\u5b9a\u4e86 echo, \u90a3\u4e48\u54cd\u5e94\u4e5f\u4f1a\u5305\u542b echo"\n}\n')),(0,o.kt)("p",null,"\u5176\u4e2d, ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5:\n| \u503c      | \u8bf4\u660e                                                |\n|--------|---------------------------------------------------|\n| ok     | api \u8c03\u7528\u6210\u529f                                          |\n| async  | api \u8c03\u7528\u5df2\u7ecf\u63d0\u4ea4\u5f02\u6b65\u5904\u7406, \u6b64\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"retcode")," \u4e3a 1, \u5177\u4f53 api \u8c03\u7528\u662f\u5426\u6210\u529f\u65e0\u6cd5\u5f97\u77e5 |\n| failed | api \u8c03\u7528\u5931\u8d25                                          |"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"retcode")," \u5b57\u6bb5:\n| \u503c  | \u8bf4\u660e                                |\n|----|-----------------------------------|\n| 0  | \u8c03\u7528\u6210\u529f                              |\n| 1  | \u5df2\u63d0\u4ea4 async \u5904\u7406                      |\n| \u5176\u4ed6 | \u64cd\u4f5c\u5931\u8d25, \u5177\u4f53\u539f\u56e0\u53ef\u4ee5\u770b\u54cd\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"wording")," \u5b57\u6bb5 |"))}d.isMDXComponent=!0}}]);