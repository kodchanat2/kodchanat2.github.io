import{_ as j}from"./nuxt-link.b9132ae3.js";import $ from"./Icon.a14b6f90.js";import{E as x,G as C,H as F,o as i,c as u,a as e,s as p,t as m,n as s,b as a,w as g,x as z,T as k,v as N,F as T,q as I,d as M,_ as q,I as B,r as w,J as E,K as S,L as H,P as R,y as U}from"./entry.749f7bb7.js";import{_ as J}from"./Tooltip.1a7aaee5.js";import"./config.ed9291fd.js";const O=()=>x("color-mode").value,D={class:"relative grid justify-items-center gap-4 p-4 px-0"},G={class:"flex items-center"},K={class:"text-center items-center grid grid-cols-2 gap-2"},A=e("span",{class:"sr-only"},"theme setting",-1),Q={class:"absolute z-0 h-full w-full text-xs font-bold flex items-center justify-center"},W={key:0,class:"pr-4"},X={key:1,class:"pl-4"},Y={class:"flex items-center"},Z={class:"text-center items-center grid grid-cols-2 gap-2"},ee=e("span",{class:"sr-only"},"language setting",-1),te={key:0},ne={key:1},oe=e("span",{class:"absolute z-0 h-full w-full text-xs text-background flex items-center justify-center"},"EN | TH",-1),L={__name:"Preference",props:{menu:{type:Boolean,default:!1}},setup(r){const{locale:n,setLocale:t}=C(),l=O(),o=x("language",()=>n.value!=="en"),_=()=>{o.value=!o.value,t(o.value?"th":"en")},d=x("theme",()=>!0),v=()=>{d.value=!d.value,l.preference=d.value?"light":"dark"};return F(()=>{d.value=l.preference==="light"||l.preference==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches}),(f,c)=>{const h=$;return i(),u("div",D,[e("div",G,[e("div",K,[e("p",{class:p(["text-right",r.menu?"text-lg":"text-sm font-bold "])},m(f.$t("theme"))+": ",3),e("div",{onClick:c[0]||(c[0]=b=>v()),class:"relative inline-flex h-6 w-14 bg-background shrink-0 cursor-pointer rounded-full border-2 border-text transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[A,e("span",{"aria-hidden":"true",class:p([s(d)?"translate-x-8":"translate-x-0","z-[1] pointer-events-none flex justify-center items-center h-5 w-5 transform rounded-full bg-text text-background ring-0 transition duration-200 ease-in-out"])},[a(k,{name:"fade"},{default:g(()=>[s(d)?(i(),z(h,{key:0,name:"ic:round-dark-mode",class:"mx-auto"})):(i(),z(h,{key:1,name:"material-symbols:light-mode",class:"mx-auto"}))]),_:1})],2),e("span",Q,[a(k,{name:"fade"},{default:g(()=>[s(d)?(i(),u("span",W,m(f.$t("theme_light")),1)):(i(),u("span",X,m(f.$t("theme_dark")),1))]),_:1})])])])]),e("div",Y,[e("div",Z,[e("p",{class:p(["text-right",r.menu?"text-lg":"text-sm font-bold "])},m(f.$t("language"))+": ",3),e("div",{onClick:c[1]||(c[1]=b=>_()),class:"relative inline-flex h-8 w-14 bg-accent shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[ee,e("span",{"aria-hidden":"true",class:p([s(o)?"translate-x-6":"translate-x-0","z-[1] pointer-events-none flex items-center justify-center text-sm font-bold h-7 w-7 transform rounded-full bg-secondary text-text shadow-lg ring-0 transition duration-200 ease-in-out"])},[a(k,{name:"fade"},{default:g(()=>[s(o)?(i(),u("span",te,"TH")):(i(),u("span",ne,"EN"))]),_:1})],2),oe])])])])}}},se={key:0,class:"absolute right-0 z-10 -mt-1 w-48 transform px-0"},ae={class:"overflow-hidden rounded-lg rounded-tr-none bg-background shadow-line shadow-text/25"},le={__name:"NavbarSetting",setup(r){const n=x("hover",()=>!1),t=l=>n.value=l;return(l,o)=>{const _=$,d=L;return i(),u("div",{class:"relative",onMouseover:o[0]||(o[0]=v=>t(!0)),onMouseleave:o[1]||(o[1]=v=>t(!1))},[e("div",{class:p(["group inline-flex items-center rounded-t-full cursor-pointer p-2 transition-colors focus:outline-none",s(n)?"bg-background":""])},[a(_,{name:"ic:baseline-settings","aria-hidden":"true",class:p(["w-8 h-8 transition-transform duration-500",s(n)?"scale-110 rotate-90":"scale-100 rotate-0"])},null,8,["class"])],2),a(k,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"-translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"-translate-y-1 opacity-0"},{default:g(()=>[s(n)?(i(),u("div",se,[e("div",ae,[a(d)])])):N("",!0)]),_:1})],32)}}},re={class:"relative"},ie={__name:"Menu",setup(r){const n=x("show",()=>!1),t=x("closing",()=>!1);let l=null;const o=()=>{if(!n.value)return document.body.style.overflow="hidden",n.value=!0;clearTimeout(l),t.value=!0,l=setTimeout(()=>{document.body.style.overflow="auto",t.value=!1,n.value=!1},500)},_=[{name:"home",to:"/"},{name:"skill",to:"/#skill"},{name:"project",to:"/#project"},{name:"contact",to:"/#contact"}];return(d,v)=>{const f=$,c=j,h=L;return i(),u("div",re,[e("div",{class:p(["group bg-secondary z-30 relative inline-flex items-center rounded-full cursor-pointer p-1 transition-colors focus:outline-none",(s(n),"")]),onClick:o},[a(f,{name:s(n)?"mdi:close-thick":"ic:baseline-settings","aria-hidden":"true",class:p(["w-8 h-8 transition-transform duration-500 delay-100",s(n)&&!s(t)?"scale-110 rotate-90":"scale-100 rotate-0"])},null,8,["name","class"])],2),s(n)?(i(),u("div",{key:0,class:p(["fixed top-0 left-0 w-screen h-screen-large bg-background/70 menu-mask",s(t)?"reverse":""]),onClick:o},null,2)):N("",!0),e("div",{class:p(["fixed top-0 left-0 z-20 w-screen overflow-hidden",[!s(n)&&"hidden"]])},[e("div",{class:p(["absolute right-0 top-0 bg-secondary rounded-full w-full aspect-square transition-transform expand-menu-animate",[s(t)&&"reverse"]])},null,2),e("div",{class:p(["overflow-hidden mt-navbar relative py-4 fade-down-enter-active fade-down-animate",[s(t)&&"fade-down-leave-active fade-down-leave-to"]])},[(i(),u(T,null,I(_,(b,V)=>e("div",{key:b.name,class:"w-full p-3 text-center text-xl font-medium"},[a(c,{to:b.to,onClick:o},{default:g(()=>[M(m(d.$t(b.name+"_title"))+" ",1),b.page?(i(),z(f,{key:0,name:"ep:right"})):N("",!0)]),_:2},1032,["to"])])),64)),a(h,{class:"mt-4",menu:!0})],2)],2)])}}},ce={},ue={class:"w-full h-navbar bg-background/70 backdrop-blur flex justify-center items-center relative z-30"},de={class:"w-full max-w-screen-lg flex justify-between items-center ml-4"},me={class:"hidden md:flex justify-between items-center"},fe={class:"md:hidden mr-1"};function pe(r,n){const t=j,l=le,o=ie;return i(),u("nav",ue,[e("div",de,[a(t,{to:"/",class:"text-2xl font-bold z-30"},{default:g(()=>[M(m(r.$t("title_short")),1)]),_:1}),e("div",me,[a(l)]),e("div",fe,[a(o)])])])}const _e=q(ce,[["render",pe]]),he={class:"relative w-full"},ge=["id","value"],ve=["for"],be={__name:"Textarea",props:{label:{type:String,required:!0},id:{type:String,required:!0},modelValue:{type:String}},emits:["update:modelValue"],setup(r){return(n,t)=>(i(),u("div",he,[e("textarea",B({id:r.id},n.$attrs,{value:r.modelValue,onInput:t[0]||(t[0]=l=>n.$emit("update:modelValue",l.target.value)),class:"block rounded-lg p-3 pb-2 pt-4 w-full text-text bg-background/90 border-0 border-x-0 border-b-2 border-text/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer",placeholder:" "}),null,16,ge),e("label",{for:r.id,class:"absolute pointer-events-none text-text/50 duration-300 transform -translate-y-4 scale-75 top-3 z-[1] origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"},m(r.label),9,ve)]))}},xe={class:"relative w-full"},ye=["id","value","placeholder"],we=["for"],$e={__name:"Input",props:{label:{type:String,required:!0},id:{type:String,required:!0},modelValue:{type:String}},emits:["update:modelValue"],setup(r){return(n,t)=>(i(),u("div",xe,[e("input",B({type:"text",id:r.id},n.$attrs,{value:r.modelValue,onInput:t[0]||(t[0]=l=>n.$emit("update:modelValue",l.target.value)),class:"block rounded-lg p-3 pb-2 pt-4 w-full text-text bg-background/90 border-0 border-x-0 border-b-2 border-text/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:transition-colors placeholder:text-transparent focus:placeholder:text-text/30",placeholder:n.$attrs.placeholder||" "}),null,16,ye),e("label",{for:r.id,class:"absolute pointer-events-none text-text/50 duration-300 transform -translate-y-4 scale-75 top-3 z-[1] origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"},m(r.label),9,we)]))}},ke=["onSubmit"],Ve=["disabled"],Se={class:"px-4 pb-8 rounded-3xl bg-background/90 flex flex-col justify-center items-center shadow-line shadow-text/25 text-center"},ze={class:"text-lg mb-1 font-medium"},Ne={class:"text-sm font-light"},je={__name:"Contact",setup(r){const n=w(""),t=w(""),l=w(""),o=w(!1),_=w(!1),d=E().public,{t:v}=C();async function f(){if(o.value||!n.value||!t.value)return;o.value=!0;const c={message:n.value,from:t.value.trim(),contact:l.value.trim()};try{await $fetch(d.hooks,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:c})}),_.value=!0}catch{alert(v("message_sent_failed"))}finally{o.value=!1}}return(c,h)=>{const b=be,V=$e,P=$;return i(),u("form",{class:"w-full relative flex flex-col text-black gap-2",onSubmit:H(f,["prevent"])},[a(b,{modelValue:s(n),"onUpdate:modelValue":h[0]||(h[0]=y=>S(n)?n.value=y:null),label:c.$t("message")+"*",id:"message",class:"h-32 resize-none",required:""},null,8,["modelValue","label"]),a(V,{modelValue:s(t),"onUpdate:modelValue":h[1]||(h[1]=y=>S(t)?t.value=y:null),pattern:".*\\S+.*",label:c.$t("from")+"*",id:"from",required:""},null,8,["modelValue","label"]),a(V,{modelValue:s(l),"onUpdate:modelValue":h[2]||(h[2]=y=>S(l)?l.value=y:null),label:c.$t("contact_back"),id:"contact",placeholder:c.$t("contact_back_eg")},null,8,["modelValue","label","placeholder"]),e("button",{type:"submit",disabled:s(o),class:"w-full mt-1 p-3 bg-primary text-background text-lg font-medium rounded-lg transition hover:bg-primary/80"},m(s(o)?c.$t("sending_message"):c.$t("send_message")),9,Ve),e("div",{class:p(["absolute w-full h-full top-0 left-0 justify-center items-center backdrop-blur-sm scale-105 z-[1] transition duration-500 flex",[!s(_)&&"translate-y-2 opacity-0 pointer-events-none"]])},[e("div",Se,[a(P,{name:"mdi:email-fast-outline",size:"8rem",class:p(["text-accent transition delay-300 duration-1000",[!s(_)&&"opacity-0 -translate-x-10"]])},null,8,["class"]),e("p",ze,m(c.$t("message_sent")),1),e("p",Ne,m(c.$t("message_sent_description")),1)])],2)],40,ke)}}},Ce={class:"w-screen bg-secondary pt-8 mt-16",id:"contact"},Te={class:"w-full max-w-sm mx-auto px-4 flex flex-col justify-center items-center"},Ie={class:"my-4 text-3xl px-4 font-semibold uppercase"},Me={class:"w-full flex items-center gap-2 my-4 font-medium before:contents:[''] before:w-full before:border-b-2 before:border-text after:contents:[''] after:w-full after:border-b-2 after:border-text"},qe={class:"w-full flex justify-evenly items-center"},Be={class:"w-full mt-8"},Le={class:"group-hover:-translate-y-1 transition"},Pe={class:"w-full text-center my-4"},Fe={class:"text-text/75 font-light"},Ee={__name:"Footer",setup(r){const n=[{icon:"fa6-brands:github",href:"https://github.com/kodchanat2",alt:"github"},{icon:"fa6-brands:linkedin",href:"https://www.linkedin.com/in/kodchanat2",alt:"linkedin"},{icon:"fa6-solid:square-phone",href:"tel:+66822740014",alt:"phone call"},{icon:"ic:round-email",href:"mailto:kodchanat2@gmail.com",alt:"email"}];return(t,l)=>{const o=je,_=$,d=j,v=J;return i(),u("div",Ce,[e("div",Te,[e("h2",Ie,m(t.$t("contact_title")),1),a(o),e("div",Me,m(t.$t("or")),1),e("div",qe,[(i(),u(T,null,I(n,f=>a(v,{key:f.alt,text:f.alt},{default:g(()=>[a(d,{href:f.href,target:"_blank"},{default:g(()=>[a(_,{name:f.icon,class:"w-8 h-8 text-text/80 hover:text-text hover:scale-110 transition"},null,8,["name"])]),_:2},1032,["href"])]),_:2},1032,["text"])),64))]),e("div",Be,[a(d,{class:"w-fit mx-auto flex flex-col items-center gap-2 cursor-pointer p-4 group",to:(t._.provides[R]||t.$route).path},{default:g(()=>[a(_,{name:"uiw:up",size:"2rem",class:"group-hover:scale-110 group-hover:-translate-y-2 transition"}),e("p",Le,m(t.$t("scroll_top")),1)]),_:1},8,["to"])]),e("div",Pe,[e("p",Fe,m(t.$t("copyright")),1)])])])}}},He={};function Re(r,n){const t=_e,l=Ee;return i(),u("div",null,[a(t,{class:"sticky top-0"}),U(r.$slots,"default"),a(l)])}const Ke=q(He,[["render",Re]]);export{Ke as default};
