"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[155],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),m=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return i.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},N=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),N=m(t),s=a,u=N["".concat(p,".").concat(s)]||N[s]||k[s]||l;return t?i.createElement(u,r(r({ref:n},d),{},{components:t})):i.createElement(u,r({ref:n},d))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=N;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}N.displayName="MDXCreateElement"},9781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return k}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),r=["components"],o={title:"Promises/A+ \u89c4\u8303",description:"Promises/A+ \u89c4\u8303(\u7ffb\u8bd1)",slug:"js-promise",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png"},{name:"Promises/A+",title:"https://promisesaplus.com/",url:"https://github.com/promises-aplus",image_url:"https://github.com/promises-aplus.png"}]},p=void 0,m={permalink:"/blog/js-promise",editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/blog/2022-08-20-promise-aplus.md",source:"@site/blog/2022-08-20-promise-aplus.md",title:"Promises/A+ \u89c4\u8303",description:"Promises/A+ \u89c4\u8303(\u7ffb\u8bd1)",date:"2022-08-20T00:00:00.000Z",formattedDate:"August 20, 2022",tags:[],readingTime:9.47,truncated:!0,authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"},{name:"Promises/A+",title:"https://promisesaplus.com/",url:"https://github.com/promises-aplus",image_url:"https://github.com/promises-aplus.png",imageURL:"https://github.com/promises-aplus.png"}],frontMatter:{title:"Promises/A+ \u89c4\u8303",description:"Promises/A+ \u89c4\u8303(\u7ffb\u8bd1)",slug:"js-promise",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"},{name:"Promises/A+",title:"https://promisesaplus.com/",url:"https://github.com/promises-aplus",image_url:"https://github.com/promises-aplus.png",imageURL:"https://github.com/promises-aplus.png"}]},prevItem:{title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",permalink:"/blog/2022/08/22/unique-arr"},nextItem:{title:"JavaScript\u77e5\u8bc6\u4e4b \u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d",permalink:"/blog/js-copy"}},d={authorsImageUrls:[void 0,void 0]},k=[{value:"1\u3001\u672f\u8bed",id:"1\u672f\u8bed",level:2},{value:"2\u3001\u8981\u6c42",id:"2\u8981\u6c42",level:2},{value:"Promise \u72b6\u6001",id:"promise-\u72b6\u6001",level:3},{value:"<code>then</code> \u65b9\u6cd5",id:"then-\u65b9\u6cd5",level:3},{value:"<code>Promise</code> \u89e3\u51b3\u7a0b\u5e8f",id:"promise-\u89e3\u51b3\u7a0b\u5e8f",level:3},{value:"3\u3001\u6ce8\u610f\u4e8b\u9879",id:"3\u6ce8\u610f\u4e8b\u9879",level:2}],N={toc:k};function s(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ee5\u4e0b\u7ffb\u8bd1\u81ea\u5b98\u7f51\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://promisesaplus.com/"},"promisesaplus.com/")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u4ee3\u8868\u5f02\u6b65\u64cd\u4f5c\u7684\u6700\u7ec8\u7ed3\u679c\u3002\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u4ea4\u4e92\u7684\u4e3b\u8981\u65b9\u5f0f\u662f\u901a\u8fc7\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u6ce8\u518c\u56de\u8c03\u4ee5\u63a5\u6536 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u7684\u6700\u7ec8\u503c\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5931\u8d25\u7684\u539f\u56e0\u3002"),(0,l.kt)("p",null,"\u8be5\u89c4\u8303\u8be6\u7ec6\u8bf4\u660e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u7684\u884c\u4e3a\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4e92\u64cd\u4f5c\u7684\u57fa\u7840\uff0c\u6240\u6709\u7b26\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promises/A+")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5b9e\u73b0\u90fd\u53ef\u4ee5\u4f9d\u8d56\u8be5\u57fa\u7840\u6765\u63d0\u4f9b\u3002\u56e0\u6b64\uff0c\u89c4\u8303\u5e94\u8be5\u88ab\u8ba4\u4e3a\u662f\u975e\u5e38\u7a33\u5b9a\u7684\u3002\u5c3d\u7ba1 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promises/A+")," \u7ec4\u7ec7\u53ef\u80fd\u5076\u5c14\u4f1a\u901a\u8fc7\u5fae\u5c0f\u7684\u5411\u540e\u517c\u5bb9\u66f4\u6539\u6765\u4fee\u6539\u6b64\u89c4\u8303\u4ee5\u89e3\u51b3\u65b0\u53d1\u73b0\u7684\u6781\u7aef\u60c5\u51b5\uff0c\u4f46\u53ea\u6709\u5728\u4ed4\u7ec6\u8003\u8651\u3001\u8ba8\u8bba\u548c\u6d4b\u8bd5\u540e\uff0c\u6211\u4eec\u624d\u4f1a\u96c6\u6210\u5927\u7684\u6216\u5411\u540e\u4e0d\u517c\u5bb9\u7684\u66f4\u6539\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6838\u5fc3 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promises/A+")," \u89c4\u8303\u4e0d\u6d89\u53ca\u5982\u4f55\u521b\u5efa\u3001\u5c65\u884c\u6216\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u800c\u662f\u9009\u62e9\u4e13\u6ce8\u4e8e\u63d0\u4f9b\u53ef\u4e92\u64cd\u4f5c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"1\u672f\u8bed"},"1\u3001\u672f\u8bed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u662f\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u65b9\u6cd5\u7684",(0,l.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\u6216\u51fd\u6570"),"\uff0c\u5176\u884c\u4e3a\u7b26\u5408\u672c\u89c4\u8303\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"thenable"),"\u662f\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u65b9\u6cd5\u7684\u5bf9\u8c61\u6216\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),"\u662f\u4efb\u4f55\u5408\u6cd5\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"JavaScript")," \u503c\uff08\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"thenable")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exception"),"\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"throw")," \u8bed\u53e5\u629b\u51fa\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u662f\u4e00\u4e2a\u503c\uff0c\u8868\u793a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u88ab\u62d2\u7edd\u7684\u539f\u56e0\u3002")),(0,l.kt)("h2",{id:"2\u8981\u6c42"},"2\u3001\u8981\u6c42"),(0,l.kt)("h3",{id:"promise-\u72b6\u6001"},"Promise \u72b6\u6001"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5fc5\u987b\u5904\u4e8e\u4ee5\u4e0b\u4e09\u79cd\u72b6\u6001\u4e4b\u4e00\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fulfilled"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"rejected"),"\u3002\xb7")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"pending")," \u72b6\u6001\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u53ef\u4ee5\u8f6c\u6362\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," \u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u72b6\u6001\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u4e0d\u5f97\u8f6c\u6362\u5230\u5176\u5b83\u72b6\u6001\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"\uff0c\u5e76\u4e14\u8fd9\u4e2a\u503c\u4e00\u5b9a\u4e0d\u80fd\u6539\u53d8\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," \u72b6\u6001\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u4e0d\u5f97\u8f6c\u6362\u5230\u5176\u5b83\u72b6\u6001\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"reason"),"\uff0c\u5e76\u4e14\u8fd9\u4e2a\u503c\u4e00\u5b9a\u4e0d\u80fd\u6539\u53d8\u3002")))),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u4e0d\u5f97\u8f6c\u6362\u610f\u5473\u7740\u5176\u4e0d\u53ef\u53d8\u7684\u5c5e\u6027\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"==="),"\uff09\uff0c\u4f46\u5e76\u4e0d\u610f\u5473\u7740\u6df1\u5ea6\u4e0d\u53d8\uff08\u6df1\u5ea6\u5d4c\u5957\u7684\u503c\u53ef\u53d8\uff09\u3002"),(0,l.kt)("h3",{id:"then-\u65b9\u6cd5"},(0,l.kt)("inlineCode",{parentName:"h3"},"then")," \u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5fc5\u987b\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u6765\u8bbf\u95ee\u5176\u5f53\u524d\u6216\u6700\u7ec8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"reason"),"\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"promise.then(onFulfilled, onRejected)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onFulfilled")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"onRejected")," \u90fd\u662f\u53ef\u9009\u53c2\u6570\uff0c\u5e76\u4e14\u5982\u679c\u5b83\u4eec\u4e0d\u662f\u51fd\u6570\uff0c\u5219\u5fc5\u987b\u5ffd\u7565\u5b83\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u662f\u4e00\u4e2a\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b83\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u5b8c\u6210\u540e\u8c03\u7528\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u4f5c\u4e3a\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u5b8c\u6210\u4e4b\u524d\u4e0d\u80fd\u8c03\u7528\u5b83"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591a\u6b21\u8c03\u7528\u5b83\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u662f\u4e00\u4e2a\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b83\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u88ab\u62d2\u7edd\u540e\u8c03\u7528\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u662f\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u88ab\u62d2\u7edd\u4e4b\u524d\u4e0d\u80fd\u8c03\u7528\u5b83"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591a\u6b21\u8c03\u7528\u5b83"))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6267\u884c ",(0,l.kt)("a",{parentName:"li",href:"https://es5.github.io/#x10.3"},(0,l.kt)("inlineCode",{parentName:"a"},"execution context"))," \u5806\u6808\uff08\u4ec5\u5305\u542b\u5e73\u53f0\u4ee3\u7801\uff09\u4e4b\u524d\uff0c\u4e0d\u5f97\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected"),"\u3002","[\u6ce8\u610f\u4e8b\u9879\u7b2c\u4e00\u70b9]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u5fc5\u987b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\uff08\u5373\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u503c\uff09\u3002","[\u6ce8\u610f\u4e8b\u9879\u7b2c\u4e8c\u70b9]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u53ef\u80fd\u4f1a\u5728\u540c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u4e0a\u88ab\u591a\u6b21\u8c03\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u88ab\u5b9e\u73b0\uff0c\u6240\u6709\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u56de\u8c03\u5fc5\u987b\u6309\u7167\u5b83\u4eec\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u8c03\u7528\u987a\u5e8f\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u88ab\u62d2\u7edd\u65f6\uff0c\u6240\u6709\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u56de\u8c03\u5fc5\u987b\u6309\u7167\u5b83\u4eec\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u53d1\u8d77\u8c03\u7528\u7684\u987a\u5e8f\u6267\u884c\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"[\u6ce8\u610f\u4e8b\u9879\u7b2c\u4e09\u70b9]",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"promise2 = promise1.then(onFulfilled, onRejected);\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u8fd4\u56de\u4e00\u4e2a\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"x"),"\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"\u89e3\u51b3\u7a0b\u5e8f ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Resolve]](promise2, x)"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u629b\u51fa\u4e00\u4e2a\u610f\u5916 ",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u88ab ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u540c\u6837\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u8f6c\u53d8\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," \u72b6\u6001\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u540c\u6837\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u8f6c\u53d8\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected"),"\u72b6\u6001\u3002")))),(0,l.kt)("h3",{id:"promise-\u89e3\u51b3\u7a0b\u5e8f"},(0,l.kt)("inlineCode",{parentName:"h3"},"Promise")," \u89e3\u51b3\u7a0b\u5e8f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u89e3\u51b3\u7a0b\u5e8f\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u64cd\u4f5c\uff0c\u5b83\u628a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u548c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u4f5c\u4e3a\u8f93\u5165\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, x)"),"\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"thenable")," \uff0c\u5b83\u5c06\u4f1a\u8bd5\u56fe\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u72b6\u6001\uff0c\u524d\u63d0\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u884c\u4e3a\u81f3\u5c11\u6709\u70b9\u50cf\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u3002\u5426\u5219\uff0c\u5b83\u5c06\u4f1a\u7528\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u3002\n\u5bf9\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"thenable")," \u7684\u5904\u7406\u4f7f\u5f97\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u5b9e\u73b0\u65b9\u5f0f\u80fd\u591f\u53bb\u4e92\u76f8\u64cd\u4f5c\u3002\u53ea\u8981\u5b83\u4eec\u516c\u5f00\u4e86\u7b26\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise/A+")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u3002\u5b83\u8fd8\u4f7f\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"promises/A+")," \u5b9e\u73b0\u65b9\u5f0f\u80fd\u591f\u91c7\u7528\u5408\u7406\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u53bb\u201c\u540c\u5316\u201d\u4e0d\u4e00\u81f4\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\n\u4e3a\u4e86\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, x)"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"TypeError")," \u4f5c\u4e3a\u539f\u56e0\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\uff0c\u91c7\u7528\u5b83\u7684\u72b6\u6001\uff1a","[\u6ce8\u610f\u4e8b\u9879\u7b2c\u56db\u70b9]",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u5904\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"pending"),"\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u5fc5\u987b\u4fdd\u6301",(0,l.kt)("inlineCode",{parentName:"li"},"pending"),"\uff0c\u76f4\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")),(0,l.kt)("li",{parentName:"ol"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\uff0c\u4f7f\u7528\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")),(0,l.kt)("li",{parentName:"ol"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff0c\u4ee5\u540c\u6837\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")))),(0,l.kt)("li",{parentName:"ol"},"\u9664\u6b64\u4e4b\u5916\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u662f\u4e00\u4e2a\u5bf9\u8c61\u6216\u51fd\u6570",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"x.then"),"[\u6ce8\u610f\u4e8b\u9879\u7b2c\u4e94\u70b9]"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u68c0\u7d22\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"li"},"x.then")," \u5bfc\u81f4\u629b\u51fa\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\uff0c\u5219\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"this"),"\u3001\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromis"),"e \u548c\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise")," \u8c03\u7528\u5b83\uff0c\u5176\u4e2d\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," \u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u65f6\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Resolve]](promise, y)")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," ",(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise")," \u65f6\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise"),"\uff0c\u6216\u8005\u5bf9\u540c\u4e00\u4e2a\u53c2\u6570\u8fdb\u884c\u4e86\u591a\u6b21\u8c03\u7528\uff0c\u5219\u7b2c\u4e00\u6b21\u8c03\u7528\u4f18\u5148\uff0c\u5e76\u4e14\u4efb\u4f55\u8fdb\u4e00\u6b65\u7684\u8c03\u7528\u90fd\u5c06\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u629b\u51fa\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"li"},"e"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5df2\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise"),"\uff0c\u5219\u5ffd\u7565\u5b83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"reason")," \u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")))))),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u4e0d\u662f\u51fd\u6570\uff0c\u5219\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")))),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u4e0d\u662f\u5bf9\u8c61\u6216\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"promise"))),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u53c2\u4e0e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"thenable")," \u5faa\u73af\u94fe\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"thenable")," \u53bb ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve promise"),"\uff0c\u8fd9\u6837 ",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, thenable)")," \u7684\u9012\u5f52\u6027\u8d28\u6700\u7ec8\u4f1a\u5bfc\u81f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, thenable)")," \u4f1a\u88ab\u518d\u6b21\u8c03\u7528\uff0c\u9075\u5faa\u4e0a\u8ff0\u7b97\u6cd5\u5c06\u4f1a\u5bfc\u81f4\u65e0\u9650\u9012\u5f52\u3002\u6211\u4eec\u9f13\u52b1\u53bb\u5b9e\u73b0\uff08\u4f46\u4e0d\u662f\u5fc5\u9700\u7684\uff09\u68c0\u6d4b\u8fd9\u6837\u7684\u9012\u5f52\uff0c\u5e76\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeError")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"reason")," \u53bb ",(0,l.kt)("inlineCode",{parentName:"p"},"reject Promise"),"\u3002","[\u6ce8\u610f\u4e8b\u9879\u7b2c\u516d\u70b9]"),(0,l.kt)("h2",{id:"3\u6ce8\u610f\u4e8b\u9879"},"3\u3001\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u7684\u201c\u5e73\u53f0\u4ee3\u7801\u201d\u6307\u7684\u662f\u5f15\u64ce\uff0c\u73af\u5883\u548c promise \u5b9e\u73b0\u4ee3\u7801\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e2a\u8981\u6c42\u4fdd\u8bc1\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u5c06\u4f1a\u5f02\u6b65\u6267\u884c\uff0c\u5728\u4e8b\u4ef6\u5faa\u73af\u4e4b\u540e\uff0c\u7528\u4e00\u4e2a\u65b0\u7684\u5806\u6808\u6765\u8c03\u7528\u5b83\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u201c\u5b8f\u4efb\u52a1\u201d\u673a\u5236\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"settimeout"),"\u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"setimmediate")," \uff09\u6216\u201c\u5fae\u4efb\u52a1\u201d\u673a\u5236\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"mutationobserver")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"process.nextick"),"\uff09\u6765\u5b9e\u73b0\u3002\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," \u5b9e\u73b0\u88ab\u89c6\u4e3a\u5e73\u53f0\u4ee3\u7801\uff0c\u56e0\u6b64\u5b83\u672c\u8eab\u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u4efb\u52a1\u8c03\u5ea6\u961f\u5217\u6216\u201c",(0,l.kt)("inlineCode",{parentName:"li"},"trampoline"),"\u201d\uff0c\u5e76\u5728\u5176\u4e2d\u8c03\u7528\u5904\u7406\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728 strict \u6a21\u5f0f\u4e0b\uff0c\u8fd9\uff08\u6307\u7684\u662fthis\uff09\u5728\u5b83\u4eec\u5185\u90e8\u5c06\u4f1a\u662f undefined\uff1b\u5728\u666e\u901a\u6a21\u5f0f\u4e0b\uff0c\u5b83\u5c06\u4f1a\u662f\u5168\u5c40\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b9e\u73b0\u6ee1\u8db3\u6240\u6709\u8981\u6c42\uff0c\u5219\u5b9e\u73b0\u53ef\u80fd\u5141\u8bb8 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise2 == promise1"),"\u3002\u6bcf\u4e2a\u5b9e\u73b0\u90fd\u5e94\u8be5\u8bb0\u5f55\u5b83\u662f\u5426\u80fd\u591f\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise2 == promise1")," \u4ee5\u53ca\u5728\u4ec0\u4e48\u6761\u4ef6\u4e0b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u6709\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," \u6765\u81ea\u5f53\u524d\u7684\u5b9e\u73b0\u65f6\uff0c\u624d\u77e5\u9053\u5b83\u662f\u4e00\u4e2a\u771f\u6b63\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u3002\u672c\u6761\u6b3e\u5141\u8bb8\u4f7f\u7528\u7279\u5b9a\u4e8e\u5b9e\u73b0\u7684\u65b9\u6cd5\u6765\u91c7\u7528\u5df2\u77e5\u4e00\u81f4\u627f\u8bfa\u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6b64\u8fc7\u7a0b\u9996\u5148\u5b58\u50a8\u5bf9 x \u7684\u5f15\u7528\uff0c\u7136\u540e\u6d4b\u8bd5\u8be5\u5f15\u7528\uff0c\u7136\u540e\u8c03\u7528\u8be5\u5f15\u7528\uff0c\u907f\u514d\u591a\u6b21\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"li"},"x.then")," \u5c5e\u6027\u3002\u8fd9\u4e9b\u9884\u9632\u63aa\u65bd\u5bf9\u4e8e\u786e\u4fdd\u8bbf\u95ee\u5668\u5c5e\u6027\u7684\u4e00\u81f4\u6027\u975e\u5e38\u91cd\u8981\uff0c\u8bbf\u95ee\u5668\u5c5e\u6027\u7684\u503c\u53ef\u80fd\u5728\u4e24\u6b21\u68c0\u7d22\u4e4b\u95f4\u53d1\u751f\u66f4\u6539\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u65b9\u5f0f\u4e2d\u4e0d\u5e94\u5f53\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"thenbale")," \u94fe\u4e2d\u7684\u6df1\u5ea6\u8bbe\u7f6e\u4e3b\u89c2\u7684\u9650\u5236\uff0c\u5e76\u4e14\u4e0d\u5e94\u5f53\u5047\u8bbe\u94fe\u7684\u6df1\u5ea6\u8d85\u8fc7\u4e3b\u89c2\u7684\u9650\u5236\u540e\u4f1a\u662f\u65e0\u9650\u7684\u3002\u53ea\u6709\u771f\u6b63\u7684\u5faa\u73af\u624d\u80fd\u5bfc\u81f4",(0,l.kt)("inlineCode",{parentName:"li"},"TypeError"),"\u3002\u5982\u679c\u9047\u5230\u7531\u65e0\u9650\u591a\u4e2a\u4e0d\u540c ",(0,l.kt)("inlineCode",{parentName:"li"},"thenable")," \u7ec4\u6210\u7684\u94fe\uff0c\u90a3\u4e48\u6c38\u8fdc\u9012\u5f52\u662f\u6b63\u786e\u7684\u884c\u4e3a\u3002")))))}s.isMDXComponent=!0}}]);