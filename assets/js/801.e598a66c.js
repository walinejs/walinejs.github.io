"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[801],{6342:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(8917),n=t(1334),i=t(3053),u=t(3047),r=t(4900),s=t(376);const o=["href","rel","target","aria-label"],c=(0,a.aZ)({inheritAttrs:!1}),d=(0,a.aZ)({...c,props:{item:{type:Object,required:!0}},setup:function(e){const l=e,t=(0,u.yj)(),c=(0,r.WF)(),{item:d}=(0,n.BK)(l),v=(0,n.Fl)((()=>(0,s.ak)(d.value.link))),p=(0,n.Fl)((()=>(0,s.B2)(d.value.link)||(0,s.R5)(d.value.link))),h=(0,n.Fl)((()=>{if(!p.value)return d.value.target?d.value.target:v.value?"_blank":void 0})),g=(0,n.Fl)((()=>"_blank"===h.value)),m=(0,n.Fl)((()=>!v.value&&!p.value&&!g.value)),k=(0,n.Fl)((()=>{if(!p.value)return d.value.rel?d.value.rel:g.value?"noopener noreferrer":void 0})),b=(0,n.Fl)((()=>d.value.ariaLabel||d.value.text)),w=(0,n.Fl)((()=>{const e=Object.keys(c.value.locales);return e.length?!e.some((e=>e===d.value.link)):"/"!==d.value.link})),f=(0,n.Fl)((()=>!!w.value&&t.path.startsWith(d.value.link))),U=(0,n.Fl)((()=>!!m.value&&(d.value.activeMatch?new RegExp(d.value.activeMatch).test(t.path):f.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return(0,n.SU)(m)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,n.SU)(U)}],to:(0,n.SU)(d).link,"aria-label":(0,n.SU)(b)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,i.zw)((0,n.SU)(d).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,n.SU)(d).link,rel:(0,n.SU)(k),target:(0,n.SU)(h),"aria-label":(0,n.SU)(b)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,i.zw)((0,n.SU)(d).text)+" ",1),(0,n.SU)(g)?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,o))}}})},7764:(e,l,t)=>{t.d(l,{Z:()=>f});var a=t(8917),n=t(1334),i=t(3053),u=t(4900),r=t(8924),s=t(3192),o=t(996);const c=["title"],d={class:"icon",focusable:"false",viewBox:"0 0 32 32"},v=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],p={class:"icon",focusable:"false",viewBox:"0 0 32 32"},h=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],g=(0,a.aZ)({setup(e){const l=(0,r.X6)(),t=(0,r.vs)(),i=()=>{t.value=!t.value};return(e,u)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,n.SU)(l).toggleDarkMode,onClick:i},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",d,v,512)),[[o.F8,!(0,n.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",p,h,512)),[[o.F8,(0,n.SU)(t)]])],8,c))}}),m=["title"],k=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],b=(0,a.aZ)({emits:["toggle"],setup(e){const l=(0,r.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,n.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},k,8,m))}}),w=["src","alt"],f=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,u.I)(),t=(0,u.I5)(),o=(0,r.X6)(),c=(0,r.vs)(),d=(0,n.iH)(null),v=(0,n.iH)(null),p=(0,n.Fl)((()=>o.value.home||l.value)),h=(0,n.Fl)((()=>c.value&&void 0!==o.value.logoDark?o.value.logoDark:o.value.logo)),m=(0,n.Fl)((()=>t.value.title)),k=(0,n.iH)(0),f=(0,n.Fl)((()=>k.value?{maxWidth:k.value+"px"}:{})),U=(0,n.Fl)((()=>o.value.darkMode));function S(e,l){var t,a,n;const i=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],u=Number.parseInt(i,10);return Number.isNaN(u)?0:u}return(0,a.bv)((()=>{const e=S(d.value,"paddingLeft")+S(d.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?k.value=0:k.value=d.value.offsetWidth-e-((null==(l=v.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("ClientOnly"),r=(0,a.up)("RouterLink"),o=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref:(e,l)=>{l.navbar=e,d.value=e},class:"navbar"},[(0,a.Wm)(b,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref:(e,l)=>{l.siteBrand=e,v.value=e}},[(0,a.Wm)(r,{to:(0,n.SU)(p)},{default:(0,a.w5)((()=>[(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,n.SU)(h)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,n.SU)(u.pJ)((0,n.SU)(h)),alt:(0,n.SU)(m)},null,8,w)):(0,a.kq)("",!0)])),_:1}),(0,n.SU)(m)?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,i.C_)(["site-name",{"can-hide":(0,n.SU)(h)}])},(0,i.zw)((0,n.SU)(m)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,i.j5)((0,n.SU)(f))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(s.Z,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,n.SU)(U)?((0,a.wg)(),(0,a.j4)(g,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(o)],4)],512)}}})},3192:(e,l,t)=>{t.d(l,{Z:()=>D});var a=t(8917),n=t(1334),i=t(4900),u=t(376),r=t(3047),s=t(8924),o=t(6654),c=t(3053),d=t(996);const v=(0,a.aZ)({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(d.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}});var p=t(6342);const h=["aria-label"],g={class:"title"},m=(0,a._)("span",{class:"arrow down"},null,-1),k=["aria-label"],b={class:"title"},w={class:"nav-dropdown"},f={class:"dropdown-subtitle"},U={key:1},S={class:"dropdown-subitem-wrapper"},y=(0,a.aZ)({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,n.BK)(l),i=(0,n.Fl)((()=>t.value.ariaLabel||t.value.text)),u=(0,n.iH)(!1),s=(0,r.yj)();(0,a.YP)((()=>s.path),(()=>{u.value=!1}));const o=e=>{const l=0===e.detail;u.value=!!l&&!u.value},y=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)(["dropdown-wrapper",{open:u.value}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":(0,n.SU)(i),onClick:o},[(0,a._)("span",g,(0,c.zw)((0,n.SU)(t).text),1),m],8,h),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":(0,n.SU)(i),onClick:l[0]||(l[0]=e=>u.value=!u.value)},[(0,a._)("span",b,(0,c.zw)((0,n.SU)(t).text),1),(0,a._)("span",{class:(0,c.C_)(["arrow",u.value?"down":"right"])},null,2)],8,k),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(t).children,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",f,[e.link?((0,a.wg)(),(0,a.j4)(p.Z,{key:0,item:e,onFocusout:l=>y(e,(0,n.SU)(t).children)&&0===e.children.length&&(u.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",U,(0,c.zw)(e.text),1))]),(0,a._)("ul",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(p.Z,{item:l,onFocusout:a=>y(l,e.children)&&y(e,(0,n.SU)(t).children)&&(u.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(p.Z,{key:1,item:e,onFocusout:l=>y(e,(0,n.SU)(t).children)&&(u.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[d.F8,u.value]])])),_:1})],2))}}),F={key:0,class:"navbar-links"},D=(0,a.aZ)({setup(e){const l=e=>(0,u.HD)(e)?(0,s.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,s.X6)();return(0,n.Fl)((()=>(e.value.navbar||[]).map(l)))})(),c=(()=>{const e=(0,r.tv)(),l=(0,i.I)(),t=(0,i.I5)(),a=(0,s.X6)();return(0,n.Fl)((()=>{var n,i;const u=Object.keys(t.value.locales);if(u.length<2)return[];const r=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(i=a.value.selectLanguageAriaLabel)?i:"unkown language",children:u.map((n=>{var i,u,o,c,d,v;const p=null!=(u=null==(i=t.value.locales)?void 0:i[n])?u:{},h=null!=(c=null==(o=a.value.locales)?void 0:o[n])?c:{},g=`${p.lang}`,m=null!=(d=h.selectLanguageName)?d:g;let k;if(g===t.value.lang)k=s;else{const t=r.replace(l.value,n);k=e.getRoutes().some((e=>e.path===t))?t:null!=(v=h.home)?v:n}return{text:m,link:k}}))}]}))})(),d=(()=>{const e=(0,s.X6)(),l=(0,n.Fl)((()=>e.value.repo)),t=(0,n.Fl)((()=>l.value?(0,o.c9)(l.value):null)),a=(0,n.Fl)((()=>l.value&&!(0,u.ak)(l.value)?`https://github.com/${l.value}`:l.value)),i=(0,n.Fl)((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,n.Fl)((()=>a.value&&i.value?[{text:i.value,link:a.value}]:[]))})(),v=(0,n.Fl)((()=>[...t.value,...c.value,...d.value]));return(e,l)=>(0,n.SU)(v).length?((0,a.wg)(),(0,a.iD)("nav",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(v),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(y,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(p.Z,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}})},259:(e,l,t)=>{t.d(l,{Z:()=>I});var a=t(8917),n=t(1334),i=t(3053),u=t(4900),r=t(8924),s=t(6654),o=t(6342);const c={class:"page-meta"},d={key:0,class:"meta-item edit-link"},v={key:1,class:"meta-item last-updated"},p={class:"meta-item-label"},h={class:"meta-item-info"},g={key:2,class:"meta-item contributors"},m={class:"meta-item-label"},k={class:"meta-item-info"},b=["title"],w=(0,a.Uk)(", "),f=(0,a.aZ)({setup(e){const l=(0,r.X6)(),t=(()=>{const e=(0,r.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,n.Fl)((()=>{var a,n,i;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:u,docsRepo:r=u,docsBranch:o="main",docsDir:c="",editLinkText:d}=e.value;if(!r)return null;const v=(0,s.Fg)({docsRepo:r,docsBranch:o,docsDir:c,filePathRelative:l.value.filePathRelative,editLinkPattern:null!=(i=t.value.editLinkPattern)?i:e.value.editLinkPattern});return v?{text:null!=d?d:"Edit this page",link:v}:null}))})(),f=(()=>{const e=(0,u.I5)(),l=(0,r.X6)(),t=(0,u.Vi)(),a=(0,u.I2)();return(0,n.Fl)((()=>{var n,i,u,r;return(null==(i=null!=(n=a.value.lastUpdated)?n:l.value.lastUpdated)||i)&&(null==(u=t.value.git)?void 0:u.updatedTime)?new Date(null==(r=t.value.git)?void 0:r.updatedTime).toLocaleString(e.value.lang):null}))})(),U=(()=>{const e=(0,r.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,n.Fl)((()=>{var a,n,i,u;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(u=null==(i=l.value.git)?void 0:i.contributors)?null:u}))})();return(e,u)=>((0,a.wg)(),(0,a.iD)("footer",c,[(0,n.SU)(t)?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(o.Z,{class:"meta-item-label",item:(0,n.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,n.SU)(f)?((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("span",p,(0,i.zw)((0,n.SU)(l).lastUpdatedText)+": ",1),(0,a._)("span",h,(0,i.zw)((0,n.SU)(f)),1)])):(0,a.kq)("",!0),(0,n.SU)(U)&&(0,n.SU)(U).length?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("span",m,(0,i.zw)((0,n.SU)(l).contributorsText)+": ",1),(0,a._)("span",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(U),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,i.zw)(e.name),9,b),l!==(0,n.SU)(U).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[w],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)]))}});var U=t(376),S=t(3047);const y={key:0,class:"page-nav"},F={class:"inner"},D={key:0,class:"prev"},_=(0,a.Uk)(" ← "),x={key:1,class:"next"},W=(0,a.Uk)(" → "),L=(0,a.aZ)({setup(e){const l=e=>!1===e?null:(0,U.HD)(e)?(0,r.sC)(e):!!(0,U.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},i=(0,u.I2)(),s=(0,r.VU)(),c=(0,S.yj)(),d=(0,n.Fl)((()=>{const e=l(i.value.prev);return!1!==e?e:t(s.value,c.path,-1)})),v=(0,n.Fl)((()=>{const e=l(i.value.next);return!1!==e?e:t(s.value,c.path,1)}));return(e,l)=>(0,n.SU)(d)||(0,n.SU)(v)?((0,a.wg)(),(0,a.iD)("nav",y,[(0,a._)("p",F,[(0,n.SU)(d)?((0,a.wg)(),(0,a.iD)("span",D,[_,(0,a.Wm)(o.Z,{item:(0,n.SU)(d)},null,8,["item"])])):(0,a.kq)("",!0),(0,n.SU)(v)?((0,a.wg)(),(0,a.iD)("span",x,[(0,a.Wm)(o.Z,{item:(0,n.SU)(v)},null,8,["item"]),W])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}}),Z={class:"page"},C={class:"theme-default-content"},I=(0,a.aZ)({setup:e=>(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",Z,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",C,[(0,a.Wm)(t)]),(0,a.Wm)(f),(0,a.Wm)(L),(0,a.WI)(e.$slots,"bottom")])}})},7154:(e,l,t)=>{t.d(l,{Z:()=>m});var a=t(8917),n=t(1334),i=t(8924),u=t(3192),r=t(3047),s=t(6342);const o=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),c=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||o(e.path)===o(l)))(e,l.link)||!!l.children&&l.children.some((l=>c(e,l))),d=(e,l)=>e.link?(0,a.h)(s.Z,{...l,item:e}):(0,a.h)("p",l,e.text),v=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(p,{item:e,depth:l+1}))))):null},p=({item:e,depth:l=0})=>{const t=(0,r.yj)(),a=c(t,e);return[d(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),v(e,l)]};p.displayName="SidebarChild",p.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const h={class:"sidebar"},g={class:"sidebar-links"},m=(0,a.aZ)({setup(e){const l=(0,i.VU)();return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",h,[(0,a.Wm)(u.Z),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(l),(e=>((0,a.wg)(),(0,a.j4)((0,n.SU)(p),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")]))}})},6654:(e,l,t)=>{t.d(l,{Fg:()=>u,c9:()=>n});var a=t(376);const n=e=>!(0,a.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,i={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},u=({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:u,editLinkPattern:r})=>{const s=n(e);let o;return r?o=r:null!==s&&(o=i[s]),o?o.replace(/:repo/,(0,a.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,a.FY)(`${(0,a.U1)(t)}/${u}`)):null}}}]);