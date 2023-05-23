"use strict";(self.webpackChunkdoctest=self.webpackChunkdoctest||[]).push([[791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,b=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(b,s(s({ref:t},m),{},{components:a})):n.createElement(b,s({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",sidebar_position:4,description:"Java\u7269\u4ef6\u7684\u771f\u5be6\u5927\u5c0f",id:"java-object-size",last_update:{date:"2023/4/28",author:"Vincent"}},s="Java Object Size",o={unversionedId:"java/java-object-size",id:"java/java-object-size",title:"Java Object Size",description:"Java\u7269\u4ef6\u7684\u771f\u5be6\u5927\u5c0f",source:"@site/docs/java/9-JavaObjectSize.md",sourceDirName:"java",slug:"/java/java-object-size",permalink:"/en/docs/java/java-object-size",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1682611200,formattedLastUpdatedAt:"Apr 27, 2023",sidebarPosition:4,frontMatter:{"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",sidebar_position:4,description:"Java\u7269\u4ef6\u7684\u771f\u5be6\u5927\u5c0f",id:"java-object-size",last_update:{date:"2023/4/28",author:"Vincent"}},sidebar:"tutorialSidebar",previous:{title:"Java\u8a18\u61b6\u9ad4\u904b\u4f5c",permalink:"/en/docs/java/java-memory-model"}},p={},i=[{value:"Reference",id:"reference",level:2},{value:"Compressed oops",id:"compressed-oops",level:2},{value:"jol library",id:"jol-library",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:2}],m={toc:i},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-object-size"},"Java Object Size"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4f86\u4e86\u89e3\u4e00\u4e0b\u7269\u4ef6\u5728Heap\u5340\u4e2d\u4f54\u7684\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u7269\u4ef6\u5728Heap\u5340\u4e2d\u6240\u4f54\u7528\u7684\u5927\u5c0f\uff0c\u5176\u5be6\u662f\u4ed6\u7684\u5c6c\u6027\u5927\u5c0f\u52a0\u7e3d\u518d\u52a0\u4e0a",(0,r.kt)("strong",{parentName:"p"},"object header"),"\u3002\u4ee5Employee\u4f86\u8aaa\uff0c\u6709\u4e8c\u500b\u5c6c\u6027\uff0c\u7e3d\u5171\u52a0\u8d77\u4f86\u662f 6 bytes\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Employee{ \n    int empno;  //\u4f54 4 bytes\u3000\u3000\u3000\u3000\n    char name;  //\u4f54 2 bytes\n}\n")),(0,r.kt)("p",null,"\u90a3Object header\u5462\uff0cObject header\u5305\u542b\u4e862\u500b\u90e8\u5206"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"mark word\uff0c\u662f ",(0,r.kt)("strong",{parentName:"li"},"uintptr_t")," \uff0cjava\u4e2d\u6c92\u6709\u9019\u7a2e\u578b\u614b\uff0c\u4f86\u81eaC\u8a9e\u8a00\uff0c\u9019\u7a2e\u578b\u614b\u662funsigned integer\uff0c\u572832\u4f4d\u5143\u7cfb\u7d71\u4f54\u4e864 bytes\uff0c64\u4f4d\u5143\u4f54\u4e868 bytes (Java\u4e2d\u7684int\u70ba\u4e86\u7c21\u5316\u4f7f\u7528\u4e26\u6c92\u6709\u5728\u4e0d\u540c\u4f4d\u5143\u4f5c\u696d\u7cfb\u7d71\u4e0b\u63a1\u7528\u4e0d\u540c\u5927\u5c0f\uff0c\u4e00\u5f8b\u90fd\u662f4bytes)\u3002mark\u4e2d\u6703\u8a18\u9304\u8a72\u7269\u4ef6\u7684hash code\u503c\u3001lock\u3001gc info\u7b49\u7b49\u8cc7\u6599\u3002"),(0,r.kt)("li",{parentName:"ol"},"klass pointer\uff0c\u5247\u8a18\u9304\u4e86\u8a72\u7269\u4ef6\u7684class\u8cc7\u8a0a\uff0c\u5176\u5be6\u5c31\u662f",(0,r.kt)("strong",{parentName:"li"},"class\u7269\u4ef6"),"\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740(class pointer)\uff0cJDK7\u4e4b\u524d\u662fclass\u7269\u4ef6\u5728Perm Gen space\uff0cJDK 8\u5f8c\u5728Metaspace\u3002\u9810\u8a2d32\u4f4d\u5143\u7cfb\u7d71\u4f54\u4e864 bytes\uff0c64\u4f4d\u5143\u4f54\u4e868 bytes\u3002")),(0,r.kt)("p",null,"\u4ee532\u4f4d\u5143\u70ba\u4f8b\u5b50\uff1aheader\u4e2dmark+klass\u4f54\u4e868 bytes(4+4)\uff0c\u5c6c\u6027\u4f54\u4e866 bytes\uff0c\u517114 bytes\uff0c\u4f46\u8a18\u61b6\u9ad4\u4e2d\u5340\u584a\u4f7f\u7528\u81f3\u5c11\u8981\u662f",(0,r.kt)("strong",{parentName:"p"},"8\u7684\u500d\u6578"),"\uff0c\u9019\u7279\u6027\u53eb",(0,r.kt)("strong",{parentName:"p"},"Object Alignment"),"(\u53ef\u4ee5\u900f\u904e",(0,r.kt)("em",{parentName:"p"},"-XX:ObjectAlignmentInBytes"),"\u8abf\u6574\uff0c\u7bc4\u570d8-256\uff0c\u9810\u8a2d\u503c\u662f8)\uff0c\u6240\u4ee5\u5fc5\u9808\u53d6\u5230",(0,r.kt)("strong",{parentName:"p"},"16bytes"),"\uff0c\u7b49\u65bc\u6709 16 - 14 = 2 bytes\u662f\u6d6a\u8cbb\u6389\uff0c\u7a31\u70bapadding\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"32bit",src:a(4999).Z,width:"294",height:"282"})),(0,r.kt)("p",null,"\u518d\u770b64\u4f4d\u5143\u4f8b\u5b50\uff0c\u52a0\u7e3d\u8d77\u4f86\u8981\u80fd\u88ab8\u6574\u9664\uff0c\u6240\u4ee5\u6703\u662f",(0,r.kt)("strong",{parentName:"p"},"24 bytes"),"\uff0c\u4e5f\u4e00\u6a23\u6703\u67092 bytes \u6d6a\u8cbb(8(mark)+8(klass)+4(empno)+2(name)=22)\uff0c\u7531\u9019\u88cf\u53ef\u4ee5\u770b\u51fa\u7406\u8ad6\u4e0a64\u4f4d\u5143\u7684\u4f5c\u696d\u7cfb\u7d71\u4e0a\u4f7f\u7528\u7269\u4ef6\uff0c\u5373\u4fbf\u88cf\u9762\u5132\u5b58\u7684\u8cc7\u6599\u90fd\u76f8\u540c\uff0c\u9084\u662f\u6703\u4f54\u7528\u6bd4\u8f03\u591a\u7684\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"64bit",src:a(61).Z,width:"296",height:"264"})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Reference\u662f\u7528\u4f86\u5132\u5b58\u8a18\u61b6\u9ad4\u7684\u4f4d\u5740(\u4f8b\u5982emp\u8b8a\u6578)\uff0c\u4e5f\u6709\u53e6\u4e00\u500b\u540d\u8a5e\u53eb\u505aoops(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Ordinary Object Pointers")),"\u7684\u7e2e\u5beb)\uff0c\u4e8b\u5be6\u4e0a\u5c31\u662fC\u8a9e\u8a00\u7684\u6307\u6a19\u3002\u572832\u4f4d\u5143\u7cfb\u7d71\u4f54\u4e864 bytes\uff0c64\u4f4d\u5143\u4f54\u4e868 bytes\u3002\u572832\u4f4d\u5143\u4e0a\uff0c\u4e00\u500breference\u53ea\u80fd\u75284 bytes\u4f86\u5b58\u653e\u4e00\u500b\u8a18\u61b6\u9ad4\u7684\u4f4d\u5740(\u4f8b\u5982emp\u88cf\u9762\u7684800)\uff0c\u6700\u591a\u5c31\u53ea\u80fd\u8a18\u9304\u5230$2^{32}$\uff1d4G\u5de6\u53f3\u7684\u5927\u5c0f(4 bytes = 32 bits)\uff0c\u518d\u52a0\u4e0a\u4f5c\u696d\u7cfb\u7d71\u672c\u8eab\u4e5f\u6703\u7528\u6389\u8a18\u61b6\u9ad4\uff0c\u5be6\u969b\u4e0a\u80fd\u7559\u7d66Heap\u7684\u5c31\u6703\u66f4\u5c11\u300264\u4f4d\u5143\u4f5c\u696d\u7cfb\u7d71\u53ef\u4ee5\u8f15\u9b06\u7a81\u7834\u9019\u500b\u9650\u5236\uff0c\u4f46\u6bcf\u4e00\u500breference\u9700\u8981",(0,r.kt)("strong",{parentName:"p"},"8")," bytes\uff0c\u6709\u4e9b\u60c5\u6cc1\u4e0b\u6703\u6d6a\u8cbb\u6389\u6bd4\u8f03\u591a\u7684\u8a18\u61b6\u9ad4\uff0c\u6240\u4ee5\u6709\u4e86\u4e00\u500b\u8070\u660e\u7684\u6a5f\u5236\u53eb",(0,r.kt)("strong",{parentName:"p"},"Compressed oops"),"\uff0c\u572864\u4f4d\u5143\u4e0a\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"4 bytes"),"\u7684reference\uff0c\u9054\u5230\u53ef\u4ee5\u4f7f\u7528\u8f03\u5927\u7684Heap\u537b\u4e0d\u6703\u6d6a\u8cbb\u904e\u591a\u7684\u8a18\u61b6\u9ad4\u5728reference\u4e0a\u3002"),(0,r.kt)("h2",{id:"compressed-oops"},"Compressed oops"),(0,r.kt)("p",null,"\u9019\u500b\u6a5f\u5236\u5f9eJava 6\u958b\u59cb\uff0c\u591a\u4e86\u4e00\u500bVM\u53c3\u6578\u53eb -XX:+UseCompressedOops\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u572864\u4f4d\u5143\u4e0a\u555f\u75284 bytes\u505aReference"),"\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"Java 7"),"\u5f8c\u53ea\u8981\u4f60\u7684heap size\u5c0f\u65bc",(0,r.kt)("strong",{parentName:"p"},"32G"),"\u9810\u8a2d\u5c31\u6703\u555f\u7528\uff0c\u8981\u95dc\u9589\u5fc5\u9808\u984d\u5916\u4e0b\u6307\u4ee4( ",(0,r.kt)("em",{parentName:"p"},"-XX:",(0,r.kt)("strong",{parentName:"em"},"-"),"UseCompressedOops"),"\uff0c\u6ce8\u610fUseCompressedOops\u524d\u65b9\u7684\u6e1b\u865f\u5c31\u662f\u95dc\u9589\uff0c\uff0b\u5c31\u662f\u958b\u555f)\u3002"),(0,r.kt)("p",null,"\u7269\u4ef6\u5efa\u7acb\u6642\u6d88\u8017\u7684\u8a18\u61b6\u9ad4\u4e00\u5b9a\u662f8\u7684\u500d\u6578(object alignment)\uff0c\u6240\u4ee54 bytes(32 bit)\u8a18\u9304\u8a18\u61b6\u9ad4\u4f4d\u5740\u7684\u8b8a\u6578(\u5982emp)\uff0c\u6700\u5f8c\u76843 bit\u4e00\u5b9a\u662f0\uff0c\u7c21\u55ae\u7528\u6578\u5b578\u300116\u300124\u7576\u4f8b\u5b50\u793a\u7bc4\uff0c\u4ee5bit\u578b\u5f0f\u5c55\u958b\uff1a"),(0,r.kt)("p",null,"  8 = 0000 0000 0000 0000 0000 0000 0000 1",(0,r.kt)("strong",{parentName:"p"},"000"),"\n16 = 0000 0000 0000 0000 0000 0000 0001 0",(0,r.kt)("strong",{parentName:"p"},"000"),"\n24 = 0000 0000 0000 0000 0000 0000 0001 1",(0,r.kt)("strong",{parentName:"p"},"000")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6700\u5f8c3bit\u90fd\u662f0\uff0c\u6240\u4ee532bit\u8a18\u9304\u6642\u50cf\u4e0a\u9762\u9019\u6a23\uff0c\u5176\u5be6\u53ea\u6709\u524d29bit\u6703\u6709\u503c\uff0c\u6700\u5f8c3 bit\u90fd\u662f0\u3002"),(0,r.kt)("p",null,"\u5373\u7136\u6700\u5f8c\u7684\uff13\u500bbit\u90fd\u662f0\uff0c\u4e7e\u8106\u628a\u90193\u500bbit\u62ff\u4f86\u7528\uff0c\u53ef\u4ee5\u8a18\u4e0b\u66f4\u5927\u7684\u7bc4\u570d\u3002\u6240\u4ee5JVM\u5728\u4f7f\u7528Compressed Oops\u6642\uff0c\u6703\u628a\u6700\u5f8c\u76843bit\u62ff\u4f86\u8a18\u9304\u800c\u4e0d\u653e0\uff0c\u7b49\u65bc\u53ef\u8a18\u8f09\u7684bit\u8b8a\u621035\uff0c\u6700\u5f8c3\u500bbit\u662f0\u800c\u96b1\u85cf\u4e0d\u8a18\u9304(\u5c31\u662f\u628a\u771f\u6b63\u7684\u4f4d\u5740\u9664\u4e0a8)\uff0c\u90a3\u8981\u627e\u7269\u4ef6\u9700\u8981\u771f\u6b63\u7684\u8a18\u61b6\u4f4d\u5740\u6642\uff0c\u53ea\u8981\u5229\u7528 << 3\u5c31\u53ef\u4ee5\u9084\u539f\u4e86(\u628a\u8a18\u9304\u7684\u4f4d\u5740\u4e58\u4e0a8)\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u524d32bit"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"th"},"0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"th"},"0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"th"},"0"))))),(0,r.kt)("p",null,"\u4e00\u65e6\u8b8a\u621035bit\uff0c\u80fd\u4f7f\u7528\u7684size\u6703\u5728 $2^{32+3}$ =$2^{35}$\u7d04 32G\u5de6\u53f3\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u6211\u8981\u5b58\u7684Employee\u7684\u4f4d\u5740\u662f8000\uff0c\u5c55\u958bbit\u8b8a\u6210"),(0,r.kt)("p",null,"0000 0000 0000 0000 0001 1111 0100 0",(0,r.kt)("strong",{parentName:"p"},"000")),(0,r.kt)("p",null,"\u5c3e\u5df4\u76843\u500bbit\u662f\uff10\uff0c\u628a\u4ed6\u79fb\u9664\u6703\u8b8a\u6210\u5982\u4e0b\uff0c\u9019\u500b\u6578\u503c\u662f1000\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 8000 >> 3\u4e5f\u53ef\u4ee5\u5f97\u52301000\u3002"),(0,r.kt)("p",null,"0000 0000 0000 0000 0001 1111 0100 0",(0,r.kt)("del",{parentName:"p"},(0,r.kt)("strong",{parentName:"del"},"000"))),(0,r.kt)("p",null,"\u6240\u4ee5\u5be6\u969b\u4e0a\u5132\u5b58\u5728emp\u8b8a\u6578\u4e2d\u7684\u662f1000\uff0c\u800c\u4e0d\u662f8000\uff0c\u5982\u679c\u7528\u5230\u4e86emp.name\u7684\u6642\u5019\uff0c\u7a0b\u5f0f\u4e2d\u6703\u5c071000\u62ff\u51fa\u4f86\uff0c\u5f80\u5de6\u79fb\uff13\u500bbit\u5c31\u6703\u9084\u539f\u771f\u6b63\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u4e86((1000 << 3 = 8000)\u3002"),(0,r.kt)("p",null,"object alignment \u662f8 bytes\u6642\uff0c\u6700\u5f8c\u97623 bit\u662f0\uff0c\u5982\u679cobject alignment \u8a2d\u621016\uff0c\u5247\u8b8a\u6210\u5f8c\u97624 bit\u662f0\uff0c\u7406\u8ad6\u4e0a\u5c31\u53ef\u4ee5\u7528\u5230 $2^{32+4}$\u3000\u9019\u9ebc\u591a\u7684\u8a18\u61b6\u9ad4\uff0c\u4f46\u662fobject alignment\u8d8a\u5927\uff0c\u8868\u793a\u6d6a\u8cbb\u6389\u7684\u7a7a\u9593\u6703\u8d8a\u591a\uff0c\u56e0\u70ba\u7269\u4ef6\u7684\u8a18\u61b6\u9ad4\u5927\u5c0f\u5c31\u5fc5\u9808\u662f16\u7684\u500d\u6578\uff0c\u6240\u4ee5\u4e26\u4e0d\u662f\u8a2d\u8d8a\u5927\u8d8a\u597d\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vincent: JDK7\u5f8c\uff0c\u53ea\u8981\u4f60\u6307\u5b9a\u7684max heap size\u4e0d\u8d85\u904e32G\uff0ccompressed oops\u6703\u81ea\u52d5\u555f\u52d5\u3002\u8d85\u904e32G(\u542b)\u5247\u6703\u81ea\u52d5\u95dc\u9589\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u4f8b\u5982\u6211\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\uff0c\u8a2d\u621031g\uff0c\u4ee5\u4e0b\u6307\u4ee4\u4f7f\u7528jdk17(Zulu jdk 17.0.2)\njava -Xmx31g -Xlog:gc+heap+coops=debug HelloWorld\n")),(0,r.kt)("p",null,"[gc,heap,coops]"," Heap address: 0x0000000280800000, size: 31744 MB, ",(0,r.kt)("strong",{parentName:"p"},"Compressed Oops mode: Non-zero based"),": 0x0000000280000000, ",(0,r.kt)("strong",{parentName:"p"},"Oop shift amount: 3")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230Compressed Oops mode\u662f\u555f\u52d5\u7684\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u6539\u621032G\uff0c\u5247\u4e0d\u6703\u770b\u5230Compressed Oops\u7684\u8a0a\u606f"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wiki.openjdk.org/display/HotSpot/CompressedOops"},"OpenJDK"),"\u6709\u63d0\u5230\u4e00\u65e6\u555f\u7528\u4e86Compressed Oops\u5247\u4ee5\u4e0b\u90e8\u5206\u6703\u4f7f\u75284 bytes\uff0c\u5305\u542b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Object header\u4e2d\u7684 klass\u90e8\u5206\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7269\u4ef6\u4e2d\u7684\u5c6c\u6027\u578b\u614b\u5982\u679c\u662f\u7269\u4ef6\uff0c\u8a72\u5c6c\u6027\u4e5f\u6703\u4f7f\u7528 4 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7269\u4ef6\u578b\u5f0f\u9663\u5217\u4e2d\u8a18\u9304\u7684\u7269\u4ef6\u4f4d\u5740\u3002")),(0,r.kt)("p",null,"\u6574\u7406\u5982\u4e0b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"32\u4f4d\u5143"),(0,r.kt)("th",{parentName:"tr",align:null},"64\u4f4d\u5143"),(0,r.kt)("th",{parentName:"tr",align:null},"-XX:+UseCompressedOops"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reference"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7269\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"klass"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"4")))),(0,r.kt)("h2",{id:"jol-library"},"jol library"),(0,r.kt)("p",null,"\u53ef\u4ee5\u900f\u904ejol library\u9a57\u8a3c\uff0c\u5982\u679c\u4f60\u4f7f\u7528maven\u53ef\u4ee5\u8a2d\u5b9adependency\uff0c\u6216\u8005\u76f4\u63a5\u4e0b\u8f09",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/openjdk/jol/jol-core/0.17/jol-core-0.17.jar"},"jol-core-0.17.jar"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.openjdk.jol</groupId>\n    <artifactId>jol-core</artifactId>\n    <version>0.17</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u6211\u5011\u5148\u4f86\u9a57\u8a3cReference\u5728\u4e0d\u540c\u60c5\u6cc1\u4e0b\u4f54\u7528\u7684\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.openjdk.jol.vm.VM;\npublic class TestMemory{\n    public static void main(String[] args) {\n        System.out.println(VM.current().details());\n    }\n}\n\n\u7d50\u679c\u5982\u4e0b\uff1a\n# VM mode: 64 bits\n# Compressed references (oops): 3-bit shift\n# Compressed class pointers: 3-bit shift\n# WARNING | Compressed references base/shifts are guessed by the experiment!\n# WARNING | Therefore, computed addresses are just guesses, and ARE NOT RELIABLE.\n# WARNING | Make sure to attach Serviceability Agent to get the reliable addresses.\n# Object alignment: 8 bytes\n#                       ref, bool, byte, char, shrt,  int,  flt,  lng,  dbl\n# Field sizes:            4,    1,    1,    2,    2,    4,    4,    8,    8\n# Array element sizes:    4,    1,    1,    2,    2,    4,    4,    8,    8\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709Compressed\u8868\u793aCompressedOops\u662f\u555f\u7528\u7684\u30023 -bit shift\u5c31\u662f\u524d\u9762\u63d0\u7684\uff0c\u6700\u5f8c\u97623\u500bbit\u90fd\u662f0\u88abshift\u6389\uff0c\u56e0\u70baobject alignment\u662f8 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"Object alignment\uff1a\u9019\u88cf\u9810\u8a2d\u662f8\uff0c\u4e5f\u5c31\u662f\u7269\u4ef6\u4f54\u7684\u5927\u5c0f\u81f3\u5c11\u8981\u662f8\u7684\u500d\u6578\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u65b9\u7684\u8868\u4e2dField Sizes\u4e2d\u7684ref\u6b04\u4f4d\u70ba4\uff0cref\u5c31\u662fReference\u8868\u793a\u4f54\u75284 bytes\u3002")),(0,r.kt)("p",null,"\u6e2c\u8a66\u95dc\u9589CompressedOops\uff0c\u90a3\u57f7\u884c\u6642\u8981\u52a0\u4e0a-XX:",(0,r.kt)("strong",{parentName:"p"},"-"),"UseCompressedOops \u53c3\u6578"),(0,r.kt)("p",null,"\u5982 java -XX:",(0,r.kt)("strong",{parentName:"p"},"-"),"UseCompressedOops  -cp jol-core-0.17.jar:. xxxx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"# VM mode: 64 bits\n# Compressed references (oops): disabled\n# Compressed class pointers: disabled\n# Object alignment: 8 bytes\n#                       ref, bool, byte, char, shrt,  int,  flt,  lng,  dbl\n# Field sizes:            8,    1,    1,    2,    2,    4,    4,    8,    8\n# Array element sizes:    8,    1,    1,    2,    2,    4,    4,    8,    8\n\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compressed\u662fdisabled"),(0,r.kt)("li",{parentName:"ol"},"ref\u6b04\u4f4d\u8b8a\u62108\u4e86\uff0c\u5c31\u662f64\u4f4d\u5143\u7684\u9810\u8a2d\u503c\u3002")),(0,r.kt)("p",null,"\u518d\u4f86\u770b\u770b\u7269\u4ef6\u6240\u4f7f\u7528\u7684\u8a18\u61b6\u9ad4\u5927\u5c0f\uff0c\u6e2c\u8a66CompressedOops\u9810\u8a2d\u555f\u7528\u60c5\u6cc1\u3002\u9019\u88cf\u7684Employee\u4e2d\u7684name\u6539\u6210String\uff0c\u65b9\u4fbf\u6e2c\u8a66reference\u578b\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Employee{  \xa0 \xa0\n  int empno; \xa0\n  String name;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.openjdk.jol.info.ClassLayout;\npublic static void main(String[] args) {\n    System.out.println(ClassLayout.parseClass(Employee.class).toPrintable());\n}\n\nEmployee object internals:\nOFF  SZ               TYPE DESCRIPTION               VALUE\n  0   8                    (object header: mark)     N/A\n  8   4                    (object header: class)    N/A\n 12   4                int Employee.empno            N/A\n 16   4   java.lang.String Employee.name             N/A\n 20   4                    (object alignment gap)    \nInstance size: 24 bytes\nSpace losses: 0 bytes internal + 4 bytes external = 4 bytes total\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"mark\u9019\u88cfSZ\u6b04\u4f4d 8 bytes\uff0cSZ\u6b04\u4f4d\u5c31\u662fSize\u7684\u610f\u601d\uff0cOFF\u662fOffset\u7684\u610f\u601d\u5c31\u662fbytes\u504f\u79fb\u91cf\uff0c\u5c31\u662f\u8a72\u5340\u6bb5\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u4e00\u958b\u59cb\u662f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"klass(\u5c31\u662f(object header: class)\u9019\u884c)\uff0c\u4f54\u4e864 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"empno\uff0c\u4f54\u4e864bytes(\u56e0\u70ba\u662fint)"),(0,r.kt)("li",{parentName:"ol"},"name\u4f54\u4e864 bytes(\u56e0\u70ba\u662f\u7269\u4ef6\uff0c\u6240\u4ee5\u662freference)\uff0c\u5916\u52a0padding 4 bytes\u4ee5\u6eff\u8db38\u6574\u9664\uff0c\u7e3d\u517124bytes\u3002")),(0,r.kt)("p",null,"\u5c07CompressedOops\u95dc\u9589\uff0c-XX:",(0,r.kt)("strong",{parentName:"p"},"-"),"UseCompressedOops"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.openjdk.jol.info.ClassLayout;\npublic static void main(String[] args) {\n    System.out.println(ClassLayout.parseClass(Employee.class).toPrintable());\n}\nEmployee object internals:\nOFF  SZ               TYPE DESCRIPTION               VALUE\n  0   8                    (object header: mark)     N/A\n  8   8                    (object header: class)    N/A\n 16   4                int Employee.empno            N/A\n 20   4                    (alignment/padding gap)   \n 24   8   java.lang.String Employee.name             N/A\nInstance size: 32 bytes\nSpace losses: 4 bytes internal + 0 bytes external = 4 bytes total\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"mark\u9084\u662f8 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"klass\u8b8a\u62108 bytes\uff0c\u76f8\u8f03\u9810\u8a2d\u555f\u7528\u60c5\u6cc1\u591a\u4e864 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"empno\uff0c\u4f54\u4e864bytes(\u56e0\u70ba\u662fint)"),(0,r.kt)("li",{parentName:"ol"},"name\u4f54\u4e868 bytes\uff0c\u56e0\u70baCompressed Oops\u95dc\u9589\uff0c\u6703\u4f7f\u752864\u4f4d\u5143\u7684\u9810\u8a2d\u503c 8 bytes\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6700\u5f8c\u9700\u898132bytes\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528Compressed oops\u770b\u8d77\u4f86\u5f88\u4e0d\u932f\uff0c\u7bc0\u7701\u4e86\u8a18\u61b6\u9ad4\uff0c\u6700\u5927\u4f7f\u7528\u7684heap size\u53c8\u53ef\u4ee5\u653e\u5927\u5230",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/jvm-compressed-oops#2beyond-32-gb"},"32G"),"\u5de6\u53f3"),(0,r.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-memory-layout"},"Memory Layout of Objects in Java")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/jvm-compressed-oops#2beyond-32-gb"},"Compressed OOPs in the JVM")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/vm/performance-enhancements-7.html"},"Java HotSpot\u2122 Virtual Machine Performance Enhancements")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shipilev.net/jvm/anatomy-quarks/23-compressed-references/"},"Compressed Reference By Aleksey Shipil\xebv")," (\u5be6\u969b\u4e0aCompressed oops\u9084\u6709\u4e09\u7a2e\u6a21\u5f0f\uff0c32-bit\u3001Zero-Based\u3001non-Zero Based\uff0c\u6709\u8208\u8da3\u7684\u53ef\u4ee5\u53c3\u8003)")))}d.isMDXComponent=!0},4999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32bit-04bc57269bdc1d3acc68063850fd1ec5.png"},61:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/64bit-e6139dad214839c09e761a8901ead5dd.png"}}]);