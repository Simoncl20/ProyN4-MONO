"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"docs/app/contratos/tener_valores_departamento(d",id:"docs/app/contratos/tener_valores_departamento(d",title:"tener_valores_departamento(d",description:"tenervaloresdepartamento(d",source:"@site/docs/docs/app/contratos/tener_valores_departamento(d.md",sourceDirName:"docs/app/contratos",slug:"/docs/app/contratos/tener_valores_departamento(d",permalink:"/ProyN4-MONO/docs/app/contratos/tener_valores_departamento(d",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"t_key(v",permalink:"/ProyN4-MONO/docs/app/contratos/t_key(v"},next:{title:"Welcome to your Documentation",permalink:"/ProyN4-MONO/"}},s={},c=[{value:"<code>tener_valores_departamento(d</code>",id:"tener_valores_departamentod",level:2},{value:"Description:",id:"description",level:4},{value:"Important info:",id:"important-info",level:4},{value:"Usage :",id:"usage-",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tener_valores_departamentod"},(0,a.kt)("inlineCode",{parentName:"h2"},"tener_valores_departamento(d")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This code snippet is a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"obtener_valores_departamento")," that takes in three parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"data_contratos"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"departamento"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"nombres_sectores"),". It retrieves the sum of contract values for each sector in a given department and returns a list of the values corresponding to the sectors specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"nombres_sectores"),"."),(0,a.kt)("h4",{id:"important-info"},"Important info:"),(0,a.kt)("p",null,"This function is important for obtaining the total contract values for specific sectors in a particular department. It allows for analysis and comparison of sector performance within a department."),(0,a.kt)("h4",{id:"usage-"},"Usage :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This function is used for retrieving the contract values for different sectors in a specific department."),(0,a.kt)("li",{parentName:"ul"},"This function is used for aggregating and summarizing contract data for analysis."),(0,a.kt)("li",{parentName:"ul"},"This function is used for generating reports and visualizations based on sector contract values.")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Filter the ",(0,a.kt)("inlineCode",{parentName:"li"},"data_contratos")," DataFrame to only include rows where the ",(0,a.kt)("inlineCode",{parentName:"li"},"Departamento")," column matches the specified ",(0,a.kt)("inlineCode",{parentName:"li"},"departamento"),"."),(0,a.kt)("li",{parentName:"ol"},"Group the filtered DataFrame by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Sector")," column."),(0,a.kt)("li",{parentName:"ol"},"Calculate the sum of the ",(0,a.kt)("inlineCode",{parentName:"li"},"ValordelContrato")," column for each sector group."),(0,a.kt)("li",{parentName:"ol"},"Convert the resulting series of sector contract sums to a dictionary."),(0,a.kt)("li",{parentName:"ol"},"Initialize an empty dictionary ",(0,a.kt)("inlineCode",{parentName:"li"},"dict_sectores"),"."),(0,a.kt)("li",{parentName:"ol"},"Iterate over each sector name in ",(0,a.kt)("inlineCode",{parentName:"li"},"nombres_sectores"),"."),(0,a.kt)("li",{parentName:"ol"},"Retrieve the contract value for each sector from the dictionary using ",(0,a.kt)("inlineCode",{parentName:"li"},"data.get(nombre, 0)"),". If the sector is not found in the dictionary, default to 0."),(0,a.kt)("li",{parentName:"ol"},"Store the sector contract values in the ",(0,a.kt)("inlineCode",{parentName:"li"},"dict_sectores")," dictionary."),(0,a.kt)("li",{parentName:"ol"},"Convert the values of ",(0,a.kt)("inlineCode",{parentName:"li"},"dict_sectores")," to a list and assign it to ",(0,a.kt)("inlineCode",{parentName:"li"},"retorno"),"."),(0,a.kt)("li",{parentName:"ol"},"Return the ",(0,a.kt)("inlineCode",{parentName:"li"},"retorno")," list.")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pd"),": This function requires the ",(0,a.kt)("inlineCode",{parentName:"li"},"pandas")," library to work with DataFrames. It is used for data manipulation and analysis.")))}m.isMDXComponent=!0}}]);