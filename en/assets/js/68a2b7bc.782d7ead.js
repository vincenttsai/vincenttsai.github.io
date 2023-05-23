"use strict";(self.webpackChunkdoctest=self.webpackChunkdoctest||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",id:"java-overflow",title:"\u4ec0\u9ebc\u662fOverflow",sidebar_position:2,description:"\u8a8d\u8b58\u4e00\u4e0bOverflow",last_update:{date:"2023/4/28",author:"Vincent"}},l="Overflow",i={unversionedId:"java/java-overflow",id:"java/java-overflow",title:"\u4ec0\u9ebc\u662fOverflow",description:"\u8a8d\u8b58\u4e00\u4e0bOverflow",source:"@site/docs/java/4-Overflow.md",sourceDirName:"java",slug:"/java/java-overflow",permalink:"/en/docs/java/java-overflow",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1682611200,formattedLastUpdatedAt:"Apr 27, 2023",sidebarPosition:2,frontMatter:{"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",id:"java-overflow",title:"\u4ec0\u9ebc\u662fOverflow",sidebar_position:2,description:"\u8a8d\u8b58\u4e00\u4e0bOverflow",last_update:{date:"2023/4/28",author:"Vincent"}},sidebar:"tutorialSidebar",previous:{title:"IDE",permalink:"/en/docs/java/java-ide"},next:{title:"Java\u8a18\u61b6\u9ad4\u904b\u4f5c",permalink:"/en/docs/java/java-memory-model"}},p={},s=[],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overflow"},"Overflow"),(0,o.kt)("p",null,"overflow\u5c31\u662f\u60f3\u5b58\u7684\u503c\u8d85\u904e\u4e86\u5132\u5b58\u7684\u7bc4\u570d\uff0c\u5c0e\u81f4\u932f\u8aa4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'int a = 2000000000;//\u9019\u88cf\u662f20\u5104(2\u5f8c\u9762\uff19\u500b\uff10\uff09\nint b = 2000000000;\nint overflow = a + b;  //\u6b63\u5e38\u61c9\u8a72\u662f\uff14\uff10\u5104\nSystem.out.println("overflow = " + overflow);\n//\u57f7\u884c\u7d50\u679c\u5982\u4e0b\uff1a\noverflow = -294967296\n')),(0,o.kt)("p",null,"\u7d50\u679c\u662f\u4e00\u500b\u8ca0\u503c\uff0c\u56e0\u70ba\u52a0\u8d77\u4f86\u5176\u5be6\u662f40\u5104\uff0c\u4f46\u5df2\u7d93\u8d85\u904e\u4e86int\u5132\u5b58\u7684\u7bc4\u570d $\\pm$21\u5104\uff0c\u5c0e\u81f4\u52a0\u76f8\u5f8c\u7684\u4f4d\u5143\u6ea2\u51fa\u81f3\u6b63\u8ca0\u865f\u4f4d\u800c\u767c\u751f\u7684\u932f\u8aa4\u3002\u9019\u7a2e\u932f\u8aa4\u5f88\u5371\u96aa\uff0c\u56e0\u70ba\u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u4e26\u4e0d\u6703\u6709\u4efb\u4f55\u932f\u8aa4\u8a0a\u606f\u7684\u63d0\u793a\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u60f3\u50cf\u4e00\u4e0b\u5982\u679c\u4f60\u6709\uff12\uff10\u5104\uff0c\u4f60\u518d\u5b58\u4e86\uff12\uff10\u5104\u53bb\u9280\u884c\uff0c\u4f46\u6ac3\u53f0\u8ddf\u4f60\u8aaa\uff1a\u5148\u751f\uff0c\u4f60\u73fe\u5728\u6b20\u6211\u5011\u9280\u884c2\u5104\u591a\u3002")),(0,o.kt)("p",null,"\u90a3\u5ba3\u544a\u6210overflow\u8b8a\u6578\u70balong\u4e0d\u5c31\u6210\u4e86\u55ce\uff0c\u6211\u5011\u4f86\u8a66\u8a66"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'int a = 2000000000;\nint b = 2000000000;\nlong overflow = a + b;\nSystem.out.println("overflow = " + overflow);\n//\u57f7\u884c\u7d50\u679c\u5982\u4e0b\uff1a\u4f9d\u7136\u662f\u8ca0\u503c\noverflow = -294967296\n')),(0,o.kt)("p",null,"\u4f9d\u7136\u662f\u8ca0\u503c\uff0c\u539f\u56e0\u662fJava\u5728\u904b\u7b97\u6642\uff0c\u6709\u4e00\u500b\u898f\u5247"),(0,o.kt)("p",null,"\u82e5",(0,o.kt)("strong",{parentName:"p"},"\u5169\u76f8\u540c\u578b\u614b\u7684\u8b8a\u6578\u904b\u7b97\u6642"),"(\u4ee5\u9019\u500b\u4f8b\u5b50\u4f86\u8aaa\u5c31\u662fa\u3001b\uff0c\u90fd\u662fint)\uff0c\u5247",(0,o.kt)("strong",{parentName:"p"},"\u904b\u7b97\u7d50\u679c\u4e5f\u6703\u70ba\u540c\u4e00\u578b\u614b"),"(int)\uff0c\u6240\u4ee5\u5169\u500b",(0,o.kt)("strong",{parentName:"p"},"int"),"\u76f8\u52a0\uff0c\u6700\u5f8c\u8a08\u7b97\u7684\u7d50\u679c\u9084\u662fint\uff0c\u7b49\u865f\u53f3\u908a(a+b)\u7b97\u5b8c\u5f8c\u5c31\u53ea\u80fd\u662fint\uff0c\u653e\u4e0d\u4e0b40\u5104\u7684\u503c\uff0c\u6240\u4ee5\u8a08\u7b97\u7684\u7d50\u679c\u5c31\u9084\u662f\u6703\u6709\u932f\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u5728\u8a08\u7b97\u6642\u53ea\u80fd\u4f7f\u7528long\u4f86\u8655\u7406\uff0c\u6bd4\u5982\u628aa\u6539\u6210long\u7684\u578b\u614b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'long a = 2000000000;\nint b = 2000000000;\nlong overflow = a + b;\nSystem.out.println("overflow = " + overflow);\n//\u57f7\u884c\u7d50\u679c\u5982\u4e0b\uff1a\noverflow = 40000000000\n')),(0,o.kt)("p",null,"\u5982\u679c\u628aa\u6539\u6210long\u7684\u578b\u5f0f\uff0c\u9019\u6642\u5019 a + b\uff0c\u8b8a\u6210\u662f",(0,o.kt)("strong",{parentName:"p"},"long")," + ",(0,o.kt)("strong",{parentName:"p"},"int"),"\uff0c\u5169\u908a\u7684\u578b\u614b\u4e0d\u540c\u6642\uff0c\u6703\u4ee5\u5927\u7684\u70ba\u4e3b(\u5927\u5c0f\u9806\u5e8f\u662fdouble float long int\uff0c\u6700\u5c11\u90fd\u5fc5\u9808\u662fint)\uff0ca\u8b8a\u6578\u662flong\uff0c\u5247b\u6703\u81ea\u52d5\u88ab\u63d0\u5347\u70balong\u505a\u904b\u7b97\uff0c\u9019\u6642\u5019\u5c31\u6703\u8b8a\u6210",(0,o.kt)("strong",{parentName:"p"},"long")," + ",(0,o.kt)("strong",{parentName:"p"},"long"),"\uff0c\u7d50\u679c\u5c31\u6703\u662f\u4e00\u500blong\u7684\u503c\uff0c\u5c31\u53ef\u4ee5\u653e\u5f97\u4e0b40\u5104\u4e86\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/specs/jls/se11/html/jls-5.html#jls-5.6.2"},"Java Language Spec 5.6.2")," \u4e2d\u6709\u660e\u78ba\u5b9a\u7fa9\u4e86\u5728\u5169\u500b\u4e0d\u540c\u578b\u614b\u7684\u8b8a\u6578\u8a08\u7b97\u6642\u7684\u904b\u7b97\u898f\u5247\u3002")),(0,o.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"double + int \u6703\u8b8a\u6210 double + double \u6700\u5f8c\u7d50\u679c\u662fdouble"),(0,o.kt)("li",{parentName:"ol"},"float + int \u6703\u8b8a\u6210 float + float \u6700\u5f8c\u7d50\u679c\u662ffloat"),(0,o.kt)("li",{parentName:"ol"},"byte + short\uff0c\u56e0\u70ba\u6700\u5c0f\u8a08\u7b97\u4e00\u5b9a\u8981\u662fint\uff0c\u6240\u4ee5\u6703\u8b8a\u6210int + int\uff0c\u6700\u5f8c\u7d50\u679c\u662fint")))}f.isMDXComponent=!0}}]);