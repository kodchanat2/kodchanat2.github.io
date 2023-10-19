import{_ as N}from"./nuxt-link.daa2ede5.js";import $ from"./Icon.23322189.js";import{H as F,q as C,I as O,r as y,s as U,f as V,o as i,c as p,a as e,F as B,h as I,b as a,w as v,d as E,t as f,k as j,j as T,i as g,g as r,J,K as k,T as S,l as L,u as P,L as R,M as A,N as z,O as D,P as K}from"./entry.d87f38d2.js";import{u as W,_ as X}from"./composables.44071bbb.js";import"./config.a52dcfda.js";const M=F("route",{state:()=>({route:"home"}),actions:{setRoute(u){this.route=u}}}),G={class:"flex flex-col md:flex-row gap-2 relative justify-center items-center pr-2"},Q=["id"],Y={__name:"Highlight",setup(u){const n=M(),{locale:t}=C(),{route:o}=O(n),s=y(null),l=[{name:"home",to:"/"},{name:"skill",to:"/#skill"},{name:"project",to:"/#project"},{name:"contact",to:"/#contact"}],c=async()=>{await J();const m=document.querySelector(`#nav-${o.value}`);s.value.style.transform=`translateX(${m.offsetLeft-4}px)`,s.value.style.width=`${m.offsetWidth}px`};return U([o,()=>t.value],c),V(()=>c()),(m,_)=>{const d=$,h=N;return i(),p("div",G,[e("div",{ref_key:"hf",ref:s,class:"absolute hidden md:block rounded-lg bg-primary w-16 h-9 left-1 transition-all ease-in-out duration-200"},null,512),(i(),p(B,null,I(l,(b,x)=>e("div",{key:b.name,id:`nav-${b.name}`,class:g(["w-full p-2 text-center relative text-lg font-normal transition delay-50",r(o)==b.name?"text-accent md:text-background font-semibold":"hidden md:block"])},[a(h,{to:b.to,class:"uppercase whitespace-nowrap"},{default:v(()=>[E(f(m.$t(b.name+"_title"))+" ",1),b.page?(i(),j(d,{key:0,name:"ep:right"})):T("",!0)]),_:2},1032,["to"])],10,Q)),64))])}}},Z={class:"relative grid justify-items-center gap-4 p-4 px-0"},ee={class:"flex items-center"},te={class:"text-center items-center grid grid-cols-2 gap-2"},oe=e("span",{class:"sr-only"},"theme setting",-1),ne={class:"absolute z-0 h-full w-full text-sm font-semibold text-primary flex items-center justify-center"},se={key:0,class:"pr-4"},ae={key:1,class:"pl-4"},re={class:"flex items-center"},le={class:"text-center items-center grid grid-cols-2 gap-2"},ie=e("span",{class:"sr-only"},"language setting",-1),ce={key:0},ue={key:1},de=e("span",{class:"absolute z-0 h-full w-full text-xs text-background/80 flex items-center justify-center tracking-tighter"}," EN ・ TH ",-1),H={__name:"Preference",props:{menu:{type:Boolean,default:!1}},setup(u){const{locale:n,setLocale:t}=C(),o=W(),s=k("language",()=>n.value!=="en"),l=()=>{s.value=!s.value,t(s.value?"th":"en")},c=k("theme",()=>!0),m=()=>{c.value=!c.value,o.preference=c.value?"light":"dark"};return V(()=>{c.value=o.preference==="light"||o.preference==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches}),(_,d)=>{const h=$;return i(),p("div",Z,[e("div",ee,[e("div",te,[e("p",{class:g(["text-right",u.menu?"text-lg":"text-sm font-bold "])},f(_.$t("theme"))+": ",3),e("div",{onClick:d[0]||(d[0]=b=>m()),class:"relative inline-flex h-8 w-20 bg-background shrink-0 cursor-pointer rounded-full border-2 border-primary transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[oe,e("span",{"aria-hidden":"true",class:g([r(c)?"translate-x-12":"translate-x-0","z-[1] pointer-events-none mt-0.5 ml-0.5 flex justify-center items-center h-6 w-6 transform rounded-full bg-primary text-background ring-0 transition duration-200 ease-in-out"])},[a(S,{name:"fade"},{default:v(()=>[r(c)?(i(),j(h,{key:0,name:"ic:round-dark-mode",class:"mx-auto"})):(i(),j(h,{key:1,name:"material-symbols:light-mode",class:"mx-auto"}))]),_:1})],2),e("span",ne,[a(S,{name:"fade"},{default:v(()=>[r(c)?(i(),p("span",se,f(_.$t("theme_light")),1)):(i(),p("span",ae,f(_.$t("theme_dark")),1))]),_:1})])])])]),e("div",re,[e("div",le,[e("p",{class:g(["text-right",u.menu?"text-lg":"text-sm font-bold "])},f(_.$t("language"))+": ",3),e("div",{onClick:d[1]||(d[1]=b=>l()),class:"relative inline-flex h-8 w-20 bg-accent/60 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[ie,e("span",{"aria-hidden":"true",class:g([r(s)?"translate-x-9":"translate-x-0","z-[1] pointer-events-none flex items-center justify-center text-sm font-bold h-7 w-10 transform rounded-full bg-primary text-background shadow-lg ring-0 transition duration-200 ease-in-out"])},[a(S,{name:"fade"},{default:v(()=>[r(s)?(i(),p("span",ce,"TH")):(i(),p("span",ue,"EN"))]),_:1})],2),de])])])])}}},me={key:0,class:"absolute right-0 z-10 -mt-1 w-60 transform px-0"},pe={class:"overflow-hidden rounded-lg rounded-tr-none bg-background shadow-line shadow-text/25"},fe={__name:"NavbarSetting",setup(u){const n=k("hover",()=>!1),t=o=>n.value=o;return(o,s)=>{const l=$,c=H;return i(),p("div",{class:"relative",onMouseover:s[0]||(s[0]=m=>t(!0)),onMouseleave:s[1]||(s[1]=m=>t(!1))},[e("div",{class:g(["group inline-flex items-center rounded-t-full cursor-pointer p-2 transition-colors focus:outline-none",r(n)?"bg-background":""])},[a(l,{name:"ic:baseline-settings","aria-hidden":"true",class:g(["w-8 h-8 transition-transform duration-500",r(n)?"scale-110 rotate-90":"scale-100 rotate-0"])},null,8,["class"])],2),a(S,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"-translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"-translate-y-1 opacity-0"},{default:v(()=>[r(n)?(i(),p("div",me,[e("div",pe,[a(c)])])):T("",!0)]),_:1})],32)}}},ge={class:"relative"},_e={class:"bg-secondary rounded-full p-1 transition-colors"},he={__name:"Menu",setup(u){const n=M(),t=k("show",()=>!1),o=k("closing",()=>!1);let s=null;const l=()=>{if(!t.value)return document.body.style.overflow="hidden",t.value=!0;clearTimeout(s),o.value=!0,s=setTimeout(()=>{document.body.style.overflow="auto",o.value=!1,t.value=!1},500)},c=[{name:"home",to:"/"},{name:"skill",to:"/#skill"},{name:"project",to:"/#project"},{name:"contact",to:"/#contact"}];return(m,_)=>{const d=$,h=N,b=H;return i(),p("div",ge,[e("div",{class:g(["group flex justify-between items-center z-30 relative cursor-pointer focus:outline-none",(r(t),"")]),onClick:l},[L(m.$slots,"default"),e("div",_e,[a(d,{name:r(t)?"mdi:close-thick":"ic:baseline-settings","aria-hidden":"true",class:g(["w-8 h-8 transition-transform duration-500 delay-100",r(t)&&!r(o)?"scale-110 rotate-90":"scale-100 rotate-0"])},null,8,["name","class"])])],2),r(t)?(i(),p("div",{key:0,class:g(["fixed top-0 left-0 w-screen h-screen-large bg-background/70 menu-mask",r(o)?"reverse":""]),onClick:l},null,2)):T("",!0),e("div",{class:g(["fixed top-0 left-0 z-20 w-screen overflow-hidden",[!r(t)&&"hidden"]])},[e("div",{class:g(["absolute right-0 top-0 bg-secondary rounded-full w-full aspect-square transition-transform expand-menu-animate",[r(o)&&"reverse"]])},null,2),e("div",{class:g(["overflow-hidden mt-navbar relative py-4 fade-down-enter-active fade-down-animate",[r(o)&&"fade-down-leave-active fade-down-leave-to"]])},[(i(),p(B,null,I(c,(x,q)=>e("div",{key:x.name,class:"w-full p-3 text-center text-xl font-semibold"},[a(h,{to:x.to,class:g(["uppercase",r(n).route==x.name&&"text-primary"]),onClick:l},{default:v(()=>[E(f(m.$t(x.name+"_title"))+" ",1),x.page?(i(),j(d,{key:0,name:"ep:right"})):T("",!0)]),_:2},1032,["to","class"])])),64)),a(b,{class:"mt-4",menu:!0})],2)],2)])}}},be={class:"w-full h-navbar flex justify-center items-center relative z-30"},ve=e("div",{id:"nav-bg",class:"absolute w-full h-full top-0 left-0 opacity-0 bg-background/70 backdrop-blur"},null,-1),xe={class:"w-full max-w-screen-lg flex justify-between items-center ml-4 relative"},ye={class:"hidden md:flex justify-between items-center"},$e={class:"md:hidden mr-1"},we={__name:"Navbar",setup(u){const{$gsap:n}=P();return V(()=>{n.to(["#nav-title",".nav-highlight","#nav-bg"],{scrollTrigger:{trigger:"#hero-title",start:"-100% top",end:"bottom top",scrub:!0,snap:{snapTo:"labels",duration:.5,delay:.2,ease:"power4.out"}},x:0,opacity:1})}),(t,o)=>{const s=N,l=Y,c=fe,m=he;return i(),p("nav",be,[ve,e("div",xe,[a(s,{id:"nav-title",to:"/",class:"text-2xl font-bold z-30 hover:text-accent translate-x-full opacity-0"},{default:v(()=>[E(f(t.$t("title_short")),1)]),_:1}),e("div",ye,[a(l,{class:"nav-highlight opacity-0 -translate-x-4"}),a(c)]),e("div",$e,[a(m,null,{default:v(()=>[a(l,{class:"nav-highlight opacity-0 -translate-x-4 pointer-events-none"})]),_:1})])])])}}},ke={class:"relative w-full"},Se=["id","value","placeholder"],je=["for"],Te={__name:"Input",props:{label:{type:String,required:!0},id:{type:String,required:!0},modelValue:{type:String}},emits:["update:modelValue"],setup(u){return(n,t)=>(i(),p("div",ke,[e("input",R({type:"text",id:u.id},n.$attrs,{value:u.modelValue,onInput:t[0]||(t[0]=o=>n.$emit("update:modelValue",o.target.value)),class:"block rounded-lg p-3 pb-2 pt-4 w-full text-text bg-background/90 border-0 border-x-0 border-b-2 border-text/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:transition-colors placeholder:text-transparent focus:placeholder:text-text/30",placeholder:n.$attrs.placeholder||" "}),null,16,Se),e("label",{for:u.id,class:"absolute pointer-events-none text-text/50 duration-300 transform -translate-y-4 scale-75 top-3 z-[1] origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"},f(u.label),9,je)]))}},Ne={class:"relative w-full"},Ve=["id","value"],ze=["for"],Ce={__name:"Textarea",props:{label:{type:String,required:!0},id:{type:String,required:!0},modelValue:{type:String}},emits:["update:modelValue"],setup(u){return(n,t)=>(i(),p("div",Ne,[e("textarea",R({id:u.id},n.$attrs,{value:u.modelValue,onInput:t[0]||(t[0]=o=>n.$emit("update:modelValue",o.target.value)),class:"block rounded-lg p-3 pb-2 pt-4 w-full text-text bg-background/90 border-0 border-x-0 border-b-2 border-text/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer",placeholder:" "}),null,16,Ve),e("label",{for:u.id,class:"absolute pointer-events-none text-text/50 duration-300 transform -translate-y-4 scale-75 top-3 z-[1] origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"},f(u.label),9,ze)]))}},Be=["onSubmit"],Ie={class:"text-sm text-center mb-2 font-light text-text/70"},Ee=["disabled"],Me={class:"px-4 pb-8 rounded-3xl bg-background/90 text-text flex flex-col justify-center items-center shadow-line shadow-text/25 text-center"},qe={class:"text-lg mb-1 font-medium"},Le={class:"text-sm font-light"},Pe={__name:"Contact",setup(u){const n=y(""),t=y(""),o=y(""),s=y(!1),l=y(!1),c=A().public,{t:m}=C();async function _(){if(s.value||!n.value||!t.value)return;s.value=!0;const d={message:n.value,from:t.value.trim(),contact:o.value.trim()};try{await $fetch(c.hooks,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:d})}),l.value=!0}catch{alert(m("message_sent_failed"))}finally{s.value=!1}}return(d,h)=>{const b=Te,x=Ce,q=$;return i(),p("form",{class:"w-full relative flex flex-col text-black gap-2",onSubmit:D(_,["prevent"])},[e("p",Ie,f(d.$t("contact_description")),1),a(b,{modelValue:r(t),"onUpdate:modelValue":h[0]||(h[0]=w=>z(t)?t.value=w:null),pattern:".*\\S+.*",label:d.$t("from")+"*",id:"from",required:""},null,8,["modelValue","label"]),a(x,{modelValue:r(n),"onUpdate:modelValue":h[1]||(h[1]=w=>z(n)?n.value=w:null),label:d.$t("message")+"*",id:"message",class:"h-32 resize-none",required:""},null,8,["modelValue","label"]),a(b,{modelValue:r(o),"onUpdate:modelValue":h[2]||(h[2]=w=>z(o)?o.value=w:null),label:d.$t("contact_back"),id:"contact",placeholder:d.$t("contact_back_eg")},null,8,["modelValue","label","placeholder"]),e("button",{type:"submit",disabled:r(s),class:"w-full mt-1 p-3 bg-primary text-background text-lg font-medium rounded-lg transition hover:bg-primary/80 disabled:bg-text/20"},f(r(s)?d.$t("sending_message"):d.$t("send_message")),9,Ee),e("div",{class:g(["absolute w-full h-full top-0 left-0 justify-center items-center backdrop-blur-sm scale-105 z-[1] transition duration-500 flex",[!r(l)&&"translate-y-2 opacity-0 pointer-events-none"]])},[e("div",Me,[a(q,{name:"mdi:email-fast-outline",size:"8rem",class:g(["text-accent transition delay-300 duration-1000",[!r(l)&&"opacity-0 -translate-x-10"]])},null,8,["class"]),e("p",qe,f(d.$t("message_sent")),1),e("p",Le,f(d.$t("message_sent_description")),1)])],2)],40,Be)}}},Re={class:"w-screen bg-gradient-to-t from-secondary/50 via-secondary to-secondary pt-8 mt-16",id:"contact"},He={class:"w-full max-w-sm mx-auto px-4 flex flex-col justify-center items-center"},Fe={class:"my-4 text-3xl px-4 font-semibold uppercase"},Oe={class:"w-full flex items-center gap-2 my-4 font-medium before:contents:[''] before:w-full before:border-b-2 before:border-text after:contents:[''] after:w-full after:border-b-2 after:border-text"},Ue={class:"w-full flex justify-evenly items-center"},Je={class:"w-full mt-8"},Ae={class:"group-hover:-translate-y-1 transition"},De={class:"w-full text-center my-4"},Ke={class:"text-text/75 font-light"},We={__name:"Footer",setup(u){const n=[{icon:"fa6-brands:github",href:"https://github.com/kodchanat2",alt:"github"},{icon:"fa6-brands:linkedin",href:"https://www.linkedin.com/in/kodchanat2",alt:"linkedin"},{icon:"fa6-solid:square-phone",href:"tel:+66822740014",alt:"phone call"},{icon:"ic:round-email",href:"mailto:kodchanat2@gmail.com",alt:"email"}];return(t,o)=>{const s=Pe,l=$,c=N,m=X;return i(),p("div",Re,[e("div",He,[e("h2",Fe,f(t.$t("contact_title")),1),a(s),e("div",Oe,f(t.$t("or")),1),e("div",Ue,[(i(),p(B,null,I(n,_=>a(m,{key:_.alt,text:_.alt},{default:v(()=>[a(c,{href:_.href,target:"_blank"},{default:v(()=>[a(l,{name:_.icon,class:"w-8 h-8 text-text/80 hover:text-text hover:scale-110 transition"},null,8,["name"])]),_:2},1032,["href"])]),_:2},1032,["text"])),64))]),e("div",Je,[a(c,{class:"w-fit mx-auto flex flex-col items-center gap-2 cursor-pointer p-4 group",to:(t._.provides[K]||t.$route).path},{default:v(()=>[a(l,{name:"uiw:up",size:"2rem",class:"group-hover:scale-110 group-hover:-translate-y-2 transition"}),e("p",Ae,f(t.$t("scroll_top")),1)]),_:1},8,["to"])]),e("div",De,[e("p",Ke,f(t.$t("copyright")),1)])])])}}},et={__name:"default",setup(u){const n=M(),{$gsap:t}=P();V(()=>{t.set("#about-text",{opacity:0,y:50}),t.to("#about-text",{scrollTrigger:{trigger:"#about-text",start:"bottom bottom",end:"top center",scrub:!0},opacity:1,y:0}),setTimeout(()=>{s()},100)});function o(l){n.setRoute(l)}function s(){t.to("#about-text",{scrollTrigger:{trigger:"#about-text",start:"bottom bottom",end:"top center",onEnterBack:()=>{o("home")},onEnter:()=>{o("home")}}}),t.to("#skill",{scrollTrigger:{trigger:"#skill",start:"top center",end:"bottom center",onEnterBack:()=>{o("skill")},onEnter:()=>{o("skill")}}}),t.to("#project",{scrollTrigger:{trigger:"#project",start:"top center",end:"bottom center",onEnterBack:()=>{o("project")},onEnter:()=>{o("project")}}}),t.to("#contact",{scrollTrigger:{trigger:"#contact",start:"top center",end:"bottom center",onEnterBack:()=>{o("contact")},onEnter:()=>{o("contact")}}})}return(l,c)=>{const m=we,_=We;return i(),p("div",null,[a(m,{class:"sticky top-0"}),L(l.$slots,"default"),a(_)])}}};export{et as default};
