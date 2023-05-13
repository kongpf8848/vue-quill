import{d as g,l as Q,o as c,c as d,N as w,F as y,z as n,a4 as k,a5 as V,E as S,t as F,h as A,w as H,D as B,G as u,B as U,O as D,Q as L,_ as E,R as O,a6 as b,I as T,J as h,M as m,a7 as N,a8 as Y,a9 as x,aa as X,ab as j,ac as J,ad as q,ae as M,af as R,ag as G,u as W,p as K,k as P,ah as Z,ai as z,aj as _}from"./chunks/framework.ddd7a9a9.js";import{t as C}from"./chunks/theme.114abb03.js";const $={class:"inline-flex items-center cursor-pointer w-full"},ee=["name","value","checked"],te={class:"ml-2"},v=g({__name:"VOptions",props:{selected:{type:String},name:{type:String,required:!0,default:"option"},options:{type:Array,default:[{value:"1",label:"Option 1"}]}},emits:["update:selected"],setup(e,{emit:t}){const a=e,s=Q({get:()=>a.selected,set:i=>t("update:selected",i)});return(i,f)=>(c(!0),d(y,null,w(e.options,(o,p)=>(c(),d("div",{key:p},[n("label",$,[k(n("input",S({type:"radio",class:"form-radio bg-gray-200"},i.$attrs,{name:e.name,value:o.value,checked:o.value===s.value,"onUpdate:modelValue":f[0]||(f[0]=r=>s.value=r)}),null,16,ee),[[V,s.value]]),n("span",te,F(o.label),1)])]))),128))}}),ae={ops:[{insert:"VueQuill Rich Text Editor"},{attributes:{align:"center",header:1},insert:`
`},{attributes:{align:"center"},insert:`
`},{attributes:{underline:!0,bold:!0,color:"#6b24b2",background:"#ffffff",link:"https://vueup.github.io/vue-quill/"},insert:"VueQuill"},{attributes:{color:"#6b24b2",background:"#ffffff"},insert:" "},{attributes:{color:"#2c3e50",background:"#ffffff"},insert:"is a "},{attributes:{color:"#008a00",background:"#ffffff"},insert:"Vue Component"},{attributes:{color:"#2c3e50",background:"#ffffff"},insert:" for building rich text editors, this package is a thin "},{attributes:{align:"center",header:3},insert:`
`},{attributes:{color:"#2c3e50",background:"#ffffff"},insert:"wrapper around "},{attributes:{color:"#ff9900",background:"#ebd6ff",italic:!0},insert:"Quill"},{attributes:{color:"#ff9900",background:"#ffffff",italic:!0},insert:" "},{attributes:{color:"#2c3e50",background:"#ffffff"},insert:"to make it easier to use in a Vue 3 application."},{attributes:{align:"center",header:3},insert:`
`},{attributes:{align:"center"},insert:`
`},{attributes:{height:"232.5",width:"465",align:"center"},insert:{video:"https://player.vimeo.com/video/253905163"}},{attributes:{align:"center"},insert:`
`},{insert:"💚 "},{attributes:{bold:!0},insert:"Built With Vue 3:"},{insert:" More powerful and performant framework than ever before."},{attributes:{align:"center",list:"ordered"},insert:`
`},{insert:"🧙‍♂️ "},{attributes:{bold:!0},insert:"Fully Typescript:"},{insert:" VueQuill source code is written entirely in TypeScript."},{attributes:{align:"center",list:"ordered"},insert:`
`},{insert:"🛠️ "},{attributes:{bold:!0},insert:"Easy To Use:"},{insert:" Straightforward implementation through a simple API."},{attributes:{align:"center",list:"ordered"},insert:`
`},{attributes:{align:"center"},insert:`
`},{insert:"Useful Links"},{attributes:{align:"center",header:2},insert:`
`},{attributes:{align:"center"},insert:`
`},{attributes:{link:"https://vueup.github.io/vue-quill/guide/"},insert:"Getting Started"},{insert:" | "},{attributes:{link:"https://vueup.github.io/vue-quill/#demo"},insert:"See Live Demo"},{attributes:{align:"center",header:4},insert:`
`},{attributes:{align:"center"},insert:`
`},{attributes:{color:"#444444"},insert:"Supported by"},{insert:" "},{attributes:{link:"https://github.com/vueup/"},insert:"vueup"},{attributes:{align:"center",header:3},insert:`
`},{insert:{image:"data:image/png;base64,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"}},{attributes:{align:"center"},insert:`
`}]},se={class:"flex flex-col md:flex-row md:gap-3"},ne={class:"flex flex-col md:w-28 mx-4 sm:mx-0"},oe=n("div",{class:"text-sm text-gray-400 font-bold mb-2"},"THEME",-1),ie={class:"flex md:flex-col gap-2 mb-4"},re=n("div",{class:"text-sm text-gray-400 font-bold mb-2"},"TOOLBAR",-1),le={class:"flex md:flex-col gap-2 mb-4"},ue={class:"initial flex-1 flex flex-col"},ce=g({__name:"DemoEditor",setup(e){const t=A(),a=A(ae),s=A("snow"),i=A("essential");return H([s,i],()=>{t.value.reinit()}),(f,o)=>{const p=B("QuillEditor");return c(),d("div",se,[n("div",ne,[oe,n("div",ie,[u(v,{name:"theme",selected:s.value,"onUpdate:selected":o[0]||(o[0]=r=>s.value=r),options:[{value:"snow",label:"Snow"},{value:"bubble",label:"Bubble"},{value:"",label:"None"}]},null,8,["selected"])]),re,n("div",le,[u(v,{name:"toolbar",selected:i.value,"onUpdate:selected":o[1]||(o[1]=r=>i.value=r),options:[{value:"essential",label:"Essential"},{value:"minimal",label:"Minimal"},{value:"full",label:"Full"},{value:"",label:"None"}]},null,8,["selected"])])]),n("div",ue,[u(p,{ref_key:"myEditor",ref:t,class:"h-64 sm:h-96",content:a.value,"onUpdate:content":o[2]||(o[2]=r=>a.value=r),theme:s.value,toolbar:i.value},null,8,["content","theme","toolbar"])])])}}});const de=e=>(D("data-v-3b2152ff"),e=e(),L(),e),Ae={class:"VPHomeDemo"},ge={class:"wrapper"},fe={class:"container"},pe={class:"block py-4"},be=de(()=>n("header",{class:"text-center pb-5"},[n("h2",{id:"demo",class:"font-semibold border-none mb-2"},"Interactive Demo"),n("p",{class:"mx-auto max-w-lg my-2"}," What you see is what you get. Try out our interactive demo and discover all the features packed into VueQuill. ")],-1)),me=g({__name:"HomeDemo",setup(e){return(t,a)=>{const s=B("ClientOnly");return c(),d("div",Ae,[n("div",ge,[n("div",fe,[n("div",pe,[be,u(s,null,{default:U(()=>[u(ce)]),_:1})])])])])}}});const Ce=E(me,[["__scopeId","data-v-3b2152ff"]]);const ve={},Be={class:"loading"},Ee=O("<span data-v-11efe75d>L</span><span data-v-11efe75d>o</span><span data-v-11efe75d>a</span><span data-v-11efe75d>d</span><span data-v-11efe75d>i</span><span data-v-11efe75d>n</span><span data-v-11efe75d>g</span><span data-v-11efe75d>.</span><span data-v-11efe75d>.</span><span data-v-11efe75d>.</span>",10),he=[Ee];function Ie(e,t){return c(),d("div",Be,he)}const Qe=E(ve,[["render",Ie],["__scopeId","data-v-11efe75d"]]);const we=T({loader:()=>h(()=>import("./chunks/vue-quill.esm-bundler.a77a5ea7.js"),["assets/chunks/vue-quill.esm-bundler.a77a5ea7.js","assets/chunks/framework.ddd7a9a9.js"]).then(e=>e.QuillEditor),loadingComponent:Qe}),ye={...C,Layout(){return b(C.Layout,null,{"home-features-after":()=>b(Ce)})},enhanceApp({app:e,router:t,siteData:a}){e.component("QuillEditor",we)}};function I(e){if(e.extends){const t=I(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const l=I(ye),ke=g({name:"VitePressApp",setup(){const{site:e}=W();return K(()=>{P(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Z(),z(),_(),l.setup&&l.setup(),()=>b(l.Layout)}});async function Ve(){const e=Fe(),t=Se();t.provide(Y,e);const a=x(e.route);return t.provide(X,a),t.component("Content",j),t.component("ClientOnly",J),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),l.enhanceApp&&await l.enhanceApp({app:t,router:e,siteData:q}),{app:t,router:e,data:a}}function Se(){return M(ke)}function Fe(){let e=m,t;return R(a=>{let s=G(a);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),m&&(e=!1),h(()=>import(s),[])},l.NotFound)}m&&Ve().then(({app:e,router:t,data:a})=>{t.go().then(()=>{N(t.route,a.site),e.mount("#app")})});export{Ve as createApp};
