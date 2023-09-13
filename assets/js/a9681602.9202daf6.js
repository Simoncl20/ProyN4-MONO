"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"docs/app/contratos/esupuesto_departamentos(m",id:"docs/app/contratos/esupuesto_departamentos(m",title:"esupuesto_departamentos(m",description:"esupuesto_departamentos(m)",source:"@site/docs/docs/app/contratos/esupuesto_departamentos(m.md",sourceDirName:"docs/app/contratos",slug:"/docs/app/contratos/esupuesto_departamentos(m",permalink:"/ProyN4-MONO/docs/app/contratos/esupuesto_departamentos(m",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"deptos_menor_gasto(m",permalink:"/ProyN4-MONO/docs/app/contratos/deptos_menor_gasto(m"},next:{title:"esupuesto_sectores(m",permalink:"/ProyN4-MONO/docs/app/contratos/esupuesto_sectores(m"}},p={},l=[{value:"<code>esupuesto_departamentos(m)</code>",id:"esupuesto_departamentosm",level:2},{value:"Description:",id:"description",level:4},{value:"Important info:",id:"important-info",level:4},{value:"Usage :",id:"usage-",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"esupuesto_departamentosm"},(0,a.kt)("inlineCode",{parentName:"h2"},"esupuesto_departamentos(m)")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This code snippet calculates the budget for each department based on a given matrix and a list of sectors. It returns a dictionary where the keys are the department names and the values are the total budget for each department."),(0,a.kt)("h4",{id:"important-info"},"Important info:"),(0,a.kt)("p",null,"This code snippet assumes that the input matrix is a dictionary where the keys are department names and the values are dictionaries representing the budget for each sector."),(0,a.kt)("h4",{id:"usage-"},"Usage :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This code snippet is used to calculate the budget for each department."),(0,a.kt)("li",{parentName:"ul"},"This code snippet is used to aggregate the budget for each sector in a department."),(0,a.kt)("li",{parentName:"ul"},"This code snippet is used to store the budget information in a dictionary.")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an empty dictionary ",(0,a.kt)("inlineCode",{parentName:"li"},"presupuesto_dpto")," to store the budget for each department."),(0,a.kt)("li",{parentName:"ol"},"Iterate over each department in the ",(0,a.kt)("inlineCode",{parentName:"li"},"departamentos")," list."),(0,a.kt)("li",{parentName:"ol"},"Get the budget data for the current department from the input matrix using the department as the key."),(0,a.kt)("li",{parentName:"ol"},"Get the department name from the ",(0,a.kt)("inlineCode",{parentName:"li"},"departamentos")," dictionary using the department as the key."),(0,a.kt)("li",{parentName:"ol"},"Initialize a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"acumulado")," to store the total budget for the department."),(0,a.kt)("li",{parentName:"ol"},"Iterate over each sector in the ",(0,a.kt)("inlineCode",{parentName:"li"},"sectores")," list."),(0,a.kt)("li",{parentName:"ol"},"Get the budget value for the current sector from the department's budget data."),(0,a.kt)("li",{parentName:"ol"},"Add the budget value to the ",(0,a.kt)("inlineCode",{parentName:"li"},"acumulado")," variable."),(0,a.kt)("li",{parentName:"ol"},"Add an entry to the ",(0,a.kt)("inlineCode",{parentName:"li"},"presupuesto_dpto")," dictionary where the key is the department name and the value is the ",(0,a.kt)("inlineCode",{parentName:"li"},"acumulado")," variable."),(0,a.kt)("li",{parentName:"ol"},"Return the ",(0,a.kt)("inlineCode",{parentName:"li"},"presupuesto_dpto")," dictionary containing the budget for each department.")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This function does not have any dependencies.")))}c.isMDXComponent=!0}}]);