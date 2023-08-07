"use strict";(self.webpackChunkdoctest=self.webpackChunkdoctest||[]).push([[820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,d=c["".concat(i,".").concat(u)]||c[u]||g[u]||l;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",title:"Java\u8a18\u61b6\u9ad4\u904b\u4f5c",sidebar_position:3,description:"\u4ecb\u7d39Java\u4f7f\u7528\u7269\u4ef6\u6642\u7684\u8a18\u61b6\u9ad4\u6a21\u578b",id:"java-memory-model",last_update:{date:"2023/4/28",author:"Vincent"}},o=void 0,p={unversionedId:"java/java-memory-model",id:"java/java-memory-model",title:"Java\u8a18\u61b6\u9ad4\u904b\u4f5c",description:"\u4ecb\u7d39Java\u4f7f\u7528\u7269\u4ef6\u6642\u7684\u8a18\u61b6\u9ad4\u6a21\u578b",source:"@site/docs/java/8-Memory.md",sourceDirName:"java",slug:"/java/java-memory-model",permalink:"/en/docs/java/java-memory-model",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1682611200,formattedLastUpdatedAt:"Apr 27, 2023",sidebarPosition:3,frontMatter:{"typora-root-url":"../../static","typora-copy-images-to":"../../static/images",title:"Java\u8a18\u61b6\u9ad4\u904b\u4f5c",sidebar_position:3,description:"\u4ecb\u7d39Java\u4f7f\u7528\u7269\u4ef6\u6642\u7684\u8a18\u61b6\u9ad4\u6a21\u578b",id:"java-memory-model",last_update:{date:"2023/4/28",author:"Vincent"}},sidebar:"tutorialSidebar",previous:{title:"Java \u57fa\u672c\u578b\u5225",permalink:"/en/docs/java/java-doc-basicType"},next:{title:"\u4ec0\u9ebc\u662fOverflow",permalink:"/en/docs/java/java-overflow"}},i={},s=[{value:"\u8a18\u61b6\u9ad4\u5340\u584a",id:"\u8a18\u61b6\u9ad4\u5340\u584a",level:2},{value:"\u57fa\u672c\u578b\u614b\u8ddf\u7269\u4ef6\u578b\u614b\u8b8a\u6578",id:"\u57fa\u672c\u578b\u614b\u8ddf\u7269\u4ef6\u578b\u614b\u8b8a\u6578",level:2},{value:"String",id:"string",level:2}],m={toc:s},c="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Java\u8a18\u61b6\u9ad4\u904b\u4f5c\uff0c\u6211\u5011\u5206\u6210\u5e7e\u500b\u90e8\u5206\u4f86\u8aaa\u660e"),(0,r.kt)("h2",{id:"\u8a18\u61b6\u9ad4\u5340\u584a"},"\u8a18\u61b6\u9ad4\u5340\u584a"),(0,r.kt)("p",null,"\u8a18\u61b6\u9ad4\u5340\u584a\u5927\u81f4\u5206\u6210"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stack\u5340\uff0c\u70ba\u7a0b\u5f0f\u57f7\u884c\u65b9\u6cd5\u6642\uff0c\u5b58\u653e\u5340\u57df\u8b8a\u6578\u7684\u8a18\u61b6\u9ad4\u5340\u584a\u3002"),(0,r.kt)("li",{parentName:"ol"},"Heap\u5340\uff0c\u4e3b\u8981\u7528\u4f86\u5b58\u653e\u7269\u4ef6\u3002")),(0,r.kt)("p",null,"\u7576\u7136\u9084\u6709\u4e00\u4e9b\u5176\u5b83\u7684\uff0c\u50cf\u662fMetaspace\uff0c\u7528\u4f86\u5b58\u653eclass\u76f8\u95dc\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u578b\u614b\u8ddf\u7269\u4ef6\u578b\u614b\u8b8a\u6578"},"\u57fa\u672c\u578b\u614b\u8ddf\u7269\u4ef6\u578b\u614b\u8b8a\u6578"),(0,r.kt)("p",null,"\u6709\u4e00\u500b\u7c21\u55ae\u7684\u898f\u5247\uff0c\u5340\u57df\u8b8a\u6578\u6703\u653e\u5728stack\u5340\uff0c\u7269\u4ef6\u7522\u751f\u5f8c\u6703\u653e\u5728Heap\u5340\u3002\u4ec0\u9ebc\u662f\u5340\u57df\u8b8a\u6578\u5462\uff0c\u7c21\u55ae\u4f86\u8aaa\u662f\u65b9\u6cd5\u5167\u5ba3\u544a\u7684\u8b8a\u6578\u3002\u4f8b\u5982\u4e0b\u65b9\u7684a\u3001emp\u8b8a\u6578\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Employee.java\npublic class Employee{ \n    int empno;\u3000\u3000\u3000\u3000\n    char name;\n}\n\nTestEmployee.java\npublic static void main(String[] args){\n    int a = 1;\n    Employee emp = new Employee();\n    emp.empno = 1;\n    emp.name = 'V';  \n}\n")),(0,r.kt)("p",null,"\u8a18\u61b6\u9ad4\u4f7f\u7528\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"object",src:a(5609).Z,width:"1124",height:"460"})),(0,r.kt)("p",null,"\u5f9e\u9019\u88cf\u53ef\u4ee5\u770b\u5230"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"int a = 1\uff0ca\u70ba\u5340\u57df\u8b8a\u6578\uff0c\u5b58\u653e\u5728stack\u5340\u4e2d\uff0c\u5927\u5c0f\u70ba4 byte\uff0c\u5b58\u653e\u7684\u503c\u70ba\u6578\u503c1\u3002"),(0,r.kt)("li",{parentName:"ol"},"new Employee()\u5f8c\uff0c\u6703\u5728Heap\u7522\u751f\u7269\u4ef6\uff0c\u7522\u751f\u6642\u6703\u6709\u76f8\u5c0d\u61c9\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740",(0,r.kt)("strong",{parentName:"li"},"\u958b\u7aef"),"\uff0c\u53ef\u4ee5\u60f3\u50cf\u6210\u662f\u9580\u724c\u865f\u78bc\uff0c\u5229\u7528\u9019\u500b\u4f4d\u5740\u53ef\u4ee5\u627e\u5230\u8a72\u7269\u4ef6\uff0c\u4ee5\u9019\u500b\u4f8b\u5b50\u4f86\u8aaa\u5047\u8a2d\u662f\u57280800\u7684\u4f4d\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"emp\u8b8a\u6578\uff0c\u4e5f\u662f\u5340\u57df\u8b8a\u6578\uff0c\u88cf\u9762\u5b58\u653e\u7684\u5176\u5be6\u662f\u5728Heap\u5340\u4e2dEmployee\u7269\u4ef6\u7684",(0,r.kt)("strong",{parentName:"li"},"\u8a18\u61b6\u9ad4\u4f4d\u7f6e"),"\uff0c\u5b98\u65b9\u7a31\u9019\u7a2e\u53eb",(0,r.kt)("strong",{parentName:"li"},"reference"),"\u3002emp\u8b8a\u6578\u8ddf\u4e4b\u524d\u7684a\u8b8a\u6578\u6700\u5927\u7684\u4e0d\u540c\u5728\u65bcemp\u8b8a\u6578\u662f\u7269\u4ef6(\u985e\u5225)\u7684\u578b\u614b\uff0c\u800c\u8b8a\u6578a\u662f\u4e00\u500b\u57fa\u672c\u578b\u614b\u3002\u53ea\u8981\u662f\u8b8a\u6578\u662f\u7269\u4ef6\u578b\u614b\u5c31\u6703\u662f\u8a72\u7269\u4ef6\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u672c\u578b\u614b\u7684\u8b8a\u6578\u662f\u5c07\u503c\u76f4\u63a5\u5b58\u5728\u5728\u8b8a\u6578\u5167(a=1)\uff0c\u800c\u7269\u4ef6\u578b\u5f0f\u7684\u8b8a\u6578(emp)\u5247\u5b58\u653e\u7684\u662f\u300c",(0,r.kt)("strong",{parentName:"li"},"\u90a3\u88cf"),"\u300d\u53ef\u4ee5\u627e\u5230\u8a72\u7269\u4ef6\uff0c\u9019\u500b\u300c",(0,r.kt)("strong",{parentName:"li"},"\u90a3\u88cf"),"\u300d\u5c31\u662f\u7269\u4ef6\u5728Heap\u5340\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002")),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("p",null,"String\u5b8c\u6574\u985e\u5225\u540d\u7a31\u662fjava.lang.String\uff0c\u662fJava\u4e2d\u7528\u4f86\u8655\u7406\u6587\u5b57\u7684\uff0c\u76f8\u8f03char\u53ea\u80fd\u5b58\u55ae\u4e00\u500b\u5b57\uff0cString\u53ef\u4ee5\u5132\u653e\u591a\u500b\u5b57\u3002\u6587\u5b57\u7522\u751f\u6642\u53ef\u4ee5\u6709\u5169\u7a2e\u5beb\u6cd5\uff0c\u5148\u4ecb\u7d39\u6700\u5e38\u7528\u7684\u96d9\u5f15\u865f\u7522\u751f\u6587\u5b57\u8a9e\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String message = "Hello"; \n')),(0,r.kt)("p",null,"\u7b2c\u4e00\u7a2e\u6700\u5e38\u7528\u7684\u65b9\u5f0f\u662f\u4f7f\u7528\u96d9\u5f15\u865f\uff0c\u9019\u7a2e\u578b\u5f0f\u662f\u5229\u7528Java \u5167\u90e8\u7684String Pool\u4f86\u5e6b\u4f60\u7522\u751f\u9019\u500bString\u7684\u7269\u4ef6\u3002\u8a18\u61b6\u9ad4\u904b\u4f5c\u50cf\u9019\u6a23\u5b50"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"string-pool",src:a(8062).Z,width:"1124",height:"460"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"String Pool\u6703\u5148\u6aa2\u67e5Pool\u5167\u662f\u5426\u6709\u6307\u5b9a\u7684Hello\u6587\u5b57\u7269\u4ef6\uff0c\u5982\u679c\u6c92\u6709\uff0c\u5247\u6703\u7522\u751f\u4e00\u500b\u3002\u4ee5\u9019\u500b\u4f8b\u5b50\u6211\u5011\u5047\u8a2d\u7522\u751f\u7684\u4f4d\u5740\u57281000\u3002"),(0,r.kt)("li",{parentName:"ol"},"String Pool\u4e5f\u662f\u5728heap\u5340\uff0c\u7136\u800cJava 6\u4ee5\u524d\u4e26\u4e0d\u5728Heap\u5340\uff0c7\u4e4b\u5f8c\u624d\u6539\u5230Heap\u5340\u3002"),(0,r.kt)("li",{parentName:"ol"},"message\u8b8a\u6578\u662fString\u578b\u614b\uff0c\u5b58\u653e\u7684\u5c31\u6703\u662f\u8a72\u6587\u5b57\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\uff0c\u4e5f\u5c31\u662f1000")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String message = "Hello"; \nString message1 = "Hello"; \nSystem.out.println(message == message1);//true\n')),(0,r.kt)("p",null,"\u5982\u679c\u7a0b\u5f0f\u4e2d\u518d\u4f7f\u7528\u4e86\u4e00\u6b21Hello"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"string-pool2",src:a(5184).Z,width:"1130",height:"460"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u7b2c\u4e8c\u6b21\u4f7f\u7528"Hello"\u6642\uff0cpool\u5167\u5df2\u7d93\u6709Hello\u7684\u6587\u5b57\u4e86\uff0c\u5c31\u4e0d\u6703\u518d\u7522\u751f\u7b2c\u4e8c\u500b\u3002'),(0,r.kt)("li",{parentName:"ol"},"message1\uff0c\u6b64\u6642\u62ff\u5230\u7684\u4f4d\u5740\u4e5f\u6703\u662f1000"),(0,r.kt)("li",{parentName:"ol"},"System.out.println(message == message1); \u7d50\u679c\u6703\u662ftrue\uff0c\u56e0\u70ba\u5169\u500b\u8b8a\u6578\u4e2d\u7684\u503c\u90fd\u662f1000\u3002")),(0,r.kt)("p",null,'String\u4e5f\u53ef\u4ee5\u4f7f\u7528new\u7684\u65b9\u5f0f\u4f86\u7522\u751f\u6587\u5b57\uff0c\u9019\u6642\u5019\u7684"Vincent"\u5c31\u4e0d\u53d7pool\u7ba1\u7406\u4e86\uff0c\u56e0\u70ba\u662f\u7528new\u7684\u65b9\u5f0f\uff0c\u6703\u8ddf\u6211\u5011\u4e00\u822cnew\u7269\u4ef6\u4e00\u6a23\u88ab\u653e\u5728heap\u5340\uff0c\u5982\u4e0b\u5716\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String name = new String("Vincent");\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"string-new",src:a(2943).Z,width:"530",height:"460"})),(0,r.kt)("p",null,"\u6211\u5011\u518d\u56de\u5230\u524d\u9762\u7684Employee\uff0c\u628aname\u7684\u5c6c\u6027\u6539\u6210\u7528String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Employee.java\npublic class Employee{ \n    int empno;\u3000\u3000\u3000\u3000\n    String name;\n}\n\nTestEmployee.java\npublic static void main(String[] args){\n    Employee emp = new Employee();\n    emp.empno = 1;\n    emp.name = "Hello";  \n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"emp-name",src:a(5161).Z,width:"1412",height:"478"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"emp\u4e2d\u653e\u7684\u662fEmployee\u7269\u4ef6\u5728heap\u5340\u7684\u4f4d\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"Employee\u7684name\u662f\u4e00\u500bString\u985e\u5225\u578b\u614b\u7684\u5c6c\u6027\uff0c\u5c6c\u6027\u4e5f\u6703\u662f\u5b58\u653e\u8a72\u7269\u4ef6(String)\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\uff0c\u4e5f\u5c31\u662fpool\u5167\u76841000\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f9e\u9019\u88cf\u53ef\u4ee5\u77e5\u9053\uff0cJava\u7576\u4e2d\u53ea\u8981\u4f60\u662f\u4f7f\u7528\u985e\u5225\u578b\u614b\u7684\u8b8a\u6578\uff0c\u4e0d\u8ad6\u662f\u4e00\u822c",(0,r.kt)("strong",{parentName:"li"},"\u5340\u57df\u8b8a\u6578"),"\u6216\u8005",(0,r.kt)("strong",{parentName:"li"},"\u5c6c\u6027"),"\uff0c\u5b58\u653e\u7684\u90fd\u662f\u53bb\u300c",(0,r.kt)("strong",{parentName:"li"},"\u90a3\u88cf"),"\u300d\u627e\u5230\u8a72\u7269\u4ef6\uff0c\u4e5f\u5c31\u662f\u7269\u4ef6\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002")))}g.isMDXComponent=!0},5161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/emp-name-38eb674ff978322d5a89d5618fa464d2.png"},5609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object-b966ae0e0f7ebfe2f8dc651ed6537587.png"},2943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/string-new-798fe132fef6e3fb11bf28d8280ea044.png"},8062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stringpool-540c74d1a97ee0aebb95c9f42d1ca1a8.png"},5184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stringpool2-66d1f2f88f0a44ab1dc2174157a0a98b.png"}}]);