"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png"}]},l=void 0,o={permalink:"/blog/2022/08/22/unique-arr",editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/blog/2022-08-22-unique-arr.md",source:"@site/blog/2022-08-22-unique-arr.md",title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",description:"\u8fd9\u91cc\u4e00\u5171\u603b\u7ed3\u4e86  \u65b9\u6cd5\uff1a",date:"2022-08-22T00:00:00.000Z",formattedDate:"August 22, 2022",tags:[],readingTime:3.73,hasTruncateMarker:!0,authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}],frontMatter:{title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}]},prevItem:{title:"Javascript \u51e0\u79cd\u6a21\u5757\u5316\u6807\u51c6",permalink:"/blog/2022/08/27/module-standard"},nextItem:{title:"Promises/A+ \u89c4\u8303",permalink:"/blog/js-promise"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u91cc\u4e00\u5171\u603b\u7ed3\u4e86  \u65b9\u6cd5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Set")),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49,",(0,a.kt)("inlineCode",{parentName:"li"},"splice()"),"\u53bb\u6389\u91cd\u590d\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"indexOf"),"\u53bb\u91cd"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"includes()")),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528\u5faa\u73af\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"hasOwnProperty()")),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"filter")),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Map")," \u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93 ",(0,a.kt)("a",{parentName:"li",href:"https://www.lodashjs.com/docs/lodash.uniqWith"},(0,a.kt)("inlineCode",{parentName:"a"},"Lodash"))," \u3001",(0,a.kt)("a",{parentName:"li",href:"https://ramda.cn/docs/#uniq"},(0,a.kt)("inlineCode",{parentName:"a"},"Ramda")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u6d4b\u8bd5\u7528\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [\n  1, 1, 21, 21,0,\n  'true', 'false',true, false, 'false', true, \n  undefined,  null, null, NaN, 'NaN', NaN, 'NaN', false, undefined,\n  0, 'a', 'a', 'true', \n  {'name': 'jim', 'age': 20},\n  {'age': 20, 'name': 'jim'},\n  {'name': 'kart', 'age': 21},\n  {'name': 'kart', 'age': 21},\n  {}, {}\n];\n")))}m.isMDXComponent=!0}}]);