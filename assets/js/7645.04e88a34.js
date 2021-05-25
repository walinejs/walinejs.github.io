(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7645],{8971:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(8917),n=a(8319),r=a(2117),i=a(3047),s=a(4900),o=a(5386);const u=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,i.yj)(),a=(0,s.WF)(),{item:n}=(0,r.BK)(e),u=(0,l.Fl)((()=>(0,o.ak)(n.value.link))),c=(0,l.Fl)((()=>(0,o.B2)(n.value.link)||(0,o.R5)(n.value.link))),d=(0,l.Fl)((()=>{if(!c.value)return n.value.target?n.value.target:u.value?"_blank":void 0})),v=(0,l.Fl)((()=>"_blank"===d.value)),p=(0,l.Fl)((()=>!u.value&&!c.value&&!v.value)),m=(0,l.Fl)((()=>{if(!c.value)return n.value.rel?n.value.rel:v.value?"noopener noreferrer":void 0})),k=(0,l.Fl)((()=>n.value.ariaLabel||n.value.text)),g=(0,l.Fl)((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link}));return{isActiveInSubpath:(0,l.Fl)((()=>!(!p.value||!g.value)&&t.path.startsWith(n.value.link))),isBlankTarget:v,isRouterLink:p,linkRel:m,linkTarget:d,linkAriaLabel:k}}});u.render=function(e,t,a,r,i,s){const o=(0,l.up)("RouterLink"),u=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(o,(0,l.dG)({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,l.wg)(),(0,l.j4)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(u,{key:0})):(0,l.ry)("",!0),(0,l.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const c=u},3536:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var l=a(8917),n=a(8319);const r={ref:"navbar",class:"navbar"},i={ref:"siteBrand"};var s=a(2117),o=a(4900),u=a(4623),c=a(9934);const d=(0,l.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,l.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),v=(0,l.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});v.render=function(e,t,a,n,r,i){return(0,l.wg)(),(0,l.j4)("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[d])};const p=v,m=(0,l.aZ)({name:"Navbar",components:{NavbarLinks:c.Z,ToggleSidebarButton:p},emits:["toggle-sidebar"],setup(){const e=(0,o.I)(),t=(0,o.I5)(),a=(0,u.X6)(),n=(0,s.iH)(null),r=(0,s.iH)(null),i=(0,l.Fl)((()=>a.value.home||e.value)),c=(0,l.Fl)((()=>a.value.logo)),d=(0,l.Fl)((()=>t.value.title)),v=(0,s.iH)(0),p=(0,l.Fl)((()=>v.value?{maxWidth:v.value+"px"}:{}));return(0,l.bv)((()=>{const e=k(n.value,"paddingLeft")+k(n.value,"paddingRight"),t=()=>{var t;window.innerWidth<719?v.value=0:v.value=n.value.offsetWidth-e-((null==(t=r.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1)})),{navbar:n,siteBrand:r,siteBrandLink:i,siteBrandLogo:c,siteBrandTitle:d,linksWrapperStyle:p,withBase:o.pJ}}});function k(e,t){var a,l,n;const r=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],i=Number.parseInt(r,10);return Number.isNaN(i)?0:i}m.render=function(e,t,a,s,o,u){const c=(0,l.up)("ToggleSidebarButton"),d=(0,l.up)("RouterLink"),v=(0,l.up)("NavbarLinks"),p=(0,l.up)("NavbarSearch");return(0,l.wg)(),(0,l.j4)("header",r,[(0,l.Wm)(c,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,l.Wm)("span",i,[(0,l.Wm)(d,{to:e.siteBrandLink},{default:(0,l.w5)((()=>[e.siteBrandLogo?((0,l.wg)(),(0,l.j4)("img",{key:0,class:"logo",src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,8,["src","alt"])):(0,l.ry)("",!0),e.siteBrandTitle?((0,l.wg)(),(0,l.j4)("span",{key:1,class:["site-name",{"can-hide":e.siteBrandLogo}]},(0,n.zw)(e.siteBrandTitle),3)):(0,l.ry)("",!0)])),_:1},8,["to"])],512),(0,l.Wm)("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[(0,l.WI)(e.$slots,"before"),(0,l.Wm)(v,{class:"can-hide"}),(0,l.WI)(e.$slots,"after"),(0,l.Wm)(p)],4)],512)};const g=m},9934:(e,t,a)=>{"use strict";a.d(t,{Z:()=>F});var l=a(8917);const n={key:0,class:"navbar-links"};var r=a(3047),i=a(4900),s=a(5386),o=a(4623),u=a(6654),c=a(8319),d=a(2661);const v={class:"title"},p=(0,l.Wm)("span",{class:"arrow down"},null,-1),m={class:"title"},k={class:"nav-dropdown"},g={class:"dropdown-subtitle"},b={key:1},h={class:"dropdown-subitem-wrapper"};var w=a(2117),L=a(8971);const f=(0,l.aZ)({name:"DropdownLink",components:{NavLink:L.Z},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,w.BK)(e),a=(0,l.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,w.iH)(!1),i=(0,r.yj)();return(0,l.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});f.render=function(e,t,a,n,r,i){const s=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,l.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l.Wm)("span",v,(0,c.zw)(e.item.text),1),p],8,["aria-label"]),(0,l.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[(0,l.Wm)("span",m,(0,c.zw)(e.item.text),1),(0,l.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,l.wy)((0,l.Wm)("ul",k,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.j4)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[(0,l.Wm)("h4",g,[t.link?((0,l.wg)(),(0,l.j4)(s,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.j4)("span",b,(0,c.zw)(t.text),1))]),(0,l.Wm)("ul",h,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.j4)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(s,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(s,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[d.F8,e.open]])],2)};const y=f,W=e=>(0,s.HD)(e)?(0,o.sC)(e):e.children?{...e,children:e.children.map(W)}:e,j=(0,l.aZ)({name:"NavbarLinks",components:{NavLink:L.Z,DropdownLink:y},setup(){const e=(()=>{const e=(0,o.X6)();return(0,l.Fl)((()=>(e.value.navbar||[]).map(W)))})(),t=(()=>{const e=(0,r.tv)(),t=(0,i.I)(),a=(0,i.I5)(),n=(0,o.X6)();return(0,l.Fl)((()=>{var l,r;const i=Object.keys(a.value.locales);if(i.length<2)return[];const s=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(l=n.value.selectLanguageText)?l:"unkown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:i.map((l=>{var r,i,u,c,d,v;const p=null!=(i=null==(r=a.value.locales)?void 0:r[l])?i:{},m=null!=(c=null==(u=n.value.locales)?void 0:u[l])?c:{},k=`${p.lang}`,g=null!=(d=m.selectLanguageName)?d:k;let b;if(k===a.value.lang)b=o;else{const a=s.replace(t.value,l);b=e.getRoutes().some((e=>e.path===a))?a:null!=(v=m.home)?v:l}return{text:g,link:b}}))}]}))})(),a=(()=>{const e=(0,o.X6)(),t=(0,l.Fl)((()=>e.value.repo)),a=(0,l.Fl)((()=>t.value?(0,u.c9)(t.value):null)),n=(0,l.Fl)((()=>"GitHub"===a.value?`https://github.com/${t.value}`:t.value)),r=(0,l.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,l.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})();return{navbarLinks:(0,l.Fl)((()=>[...e.value,...t.value,...a.value]))}}});j.render=function(e,t,a,r,i,s){const o=(0,l.up)("DropdownLink"),u=(0,l.up)("NavLink");return e.navbarLinks.length?((0,l.wg)(),(0,l.j4)("nav",n,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.navbarLinks,(e=>((0,l.wg)(),(0,l.j4)("div",{key:e.link,class:"navbar-links-item"},[e.children?((0,l.wg)(),(0,l.j4)(o,{key:0,item:e},null,8,["item"])):((0,l.wg)(),(0,l.j4)(u,{key:1,item:e},null,8,["item"]))])))),128))])):(0,l.ry)("",!0)};const F=j},226:(e,t,a)=>{"use strict";a.d(t,{Z:()=>P});var l=a(8917);const n={class:"page"},r={class:"theme-default-content"};var i=a(8319);const s={class:"page-meta"},o={key:0,class:"meta-item edit-link"},u={key:1,class:"meta-item last-updated"},c={class:"meta-item-label"},d={class:"meta-item-info"},v={key:2,class:"meta-item contributors"},p={class:"meta-item-label"},m={class:"meta-item-info"},k=(0,l.Uk)(", ");var g=a(4900),b=a(4623),h=a(6654),w=a(8971);const L=(0,l.aZ)({name:"PageMeta",components:{NavLink:w.Z},setup:()=>({themeLocale:(0,b.X6)(),editNavLink:(()=>{const e=(0,b.X6)(),t=(0,g.Vi)(),a=(0,g.I2)();return(0,l.Fl)((()=>{var l,n;if(null!=(n=null!=(l=a.value.editLink)?l:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:i=r,docsBranch:s="main",docsDir:o="",editLinkText:u}=e.value;if(!i)return null;const c=(0,h.Fg)({docsRepo:i,docsBranch:s,docsDir:o,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))})(),lastUpdated:(()=>{const e=(0,g.I5)(),t=(0,b.X6)(),a=(0,g.Vi)(),n=(0,g.I2)();return(0,l.Fl)((()=>{var l,r,i,s;return(null==(r=null!=(l=n.value.lastUpdated)?l:t.value.lastUpdated)||r)&&(null==(i=a.value.git)?void 0:i.updatedTime)?new Date(null==(s=a.value.git)?void 0:s.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,b.X6)(),t=(0,g.Vi)(),a=(0,g.I2)();return(0,l.Fl)((()=>{var l,n,r,i;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(i=null==(r=t.value.git)?void 0:r.contributors)?null:i}))})()})});L.render=function(e,t,a,n,r,g){const b=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("footer",s,[e.editNavLink?((0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)(b,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,l.ry)("",!0),e.lastUpdated?((0,l.wg)(),(0,l.j4)("div",u,[(0,l.Wm)("span",c,(0,i.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,l.Wm)("span",d,(0,i.zw)(e.lastUpdated),1)])):(0,l.ry)("",!0),e.contributors&&e.contributors.length?((0,l.wg)(),(0,l.j4)("div",v,[(0,l.Wm)("span",p,(0,i.zw)(e.themeLocale.contributorsText)+": ",1),(0,l.Wm)("span",m,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.contributors,((t,a)=>((0,l.wg)(),(0,l.j4)(l.HY,{key:a},[(0,l.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,i.zw)(t.name),9,["title"]),a!==e.contributors.length-1?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[k],64)):(0,l.ry)("",!0)],64)))),128))])])):(0,l.ry)("",!0)])};const f=L,y={key:0,class:"page-nav"},W={class:"inner"},j={key:0,class:"prev"},F=(0,l.Uk)(" ← "),N={key:1,class:"next"},I=(0,l.Uk)(" → ");var x=a(3047),B=a(5386);const $=e=>!1===e?null:(0,B.HD)(e)?(0,b.sC)(e):!!(0,B.PO)(e)&&e,H=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const l of e)if(l.children){const e=H(l.children,t,a);if(e)return e}return null},Z=(0,l.aZ)({name:"PageNav",components:{NavLink:w.Z},setup(){const e=(0,g.I2)(),t=(0,b.VU)(),a=(0,x.yj)();return{prevNavLink:(0,l.Fl)((()=>{const l=$(e.value.prev);return!1!==l?l:H(t.value,a.path,-1)})),nextNavLink:(0,l.Fl)((()=>{const l=$(e.value.next);return!1!==l?l:H(t.value,a.path,1)}))}}});Z.render=function(e,t,a,n,r,i){const s=(0,l.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,l.wg)(),(0,l.j4)("nav",y,[(0,l.Wm)("p",W,[e.prevNavLink?((0,l.wg)(),(0,l.j4)("span",j,[F,(0,l.Wm)(s,{item:e.prevNavLink},null,8,["item"])])):(0,l.ry)("",!0),e.nextNavLink?((0,l.wg)(),(0,l.j4)("span",N,[(0,l.Wm)(s,{item:e.nextNavLink},null,8,["item"]),I])):(0,l.ry)("",!0)])])):(0,l.ry)("",!0)};const R=Z,T=(0,l.aZ)({name:"Page",components:{PageMeta:f,PageNav:R}});T.render=function(e,t,a,i,s,o){const u=(0,l.up)("Content"),c=(0,l.up)("PageMeta"),d=(0,l.up)("PageNav");return(0,l.wg)(),(0,l.j4)("main",n,[(0,l.WI)(e.$slots,"top"),(0,l.Wm)("div",r,[(0,l.Wm)(u)]),(0,l.Wm)(c),(0,l.Wm)(d),(0,l.WI)(e.$slots,"bottom")])};const P=T},6989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var l=a(8917);const n={class:"sidebar"},r={class:"sidebar-links"};var i=a(4623),s=a(9934),o=a(3047),u=a(8971);const c=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),d=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||c(e.path)===c(t)))(e,t.link)||!!t.children&&t.children.some((t=>d(e,t))),v=(e,t)=>e.link?(0,l.h)(u.Z,{...t,item:e}):(0,l.h)("p",t,e.text),p=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,l.h)("ul",{class:{"sidebar-sub-headers":t>0}},e.children.map((e=>(0,l.h)("li",(0,l.h)(m,{item:e,depth:t+1}))))):null},m=({item:e,depth:t=0})=>{const a=(0,o.yj)(),n=d(a,e);return e.isGroup?[(0,l.h)("section",{class:"sidebar-group"},[v(e,{class:{"sidebar-heading":!0,active:n}}),p(e,t)])]:[v(e,{class:{"sidebar-link":!0,active:n}}),p(e,t)]};m.displayName="SidebarChild",m.props={item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}};const k=(0,l.aZ)({name:"Sidebar",components:{NavbarLinks:s.Z,SidebarChild:m},setup:()=>({sidebarItems:(0,i.VU)()})});k.render=function(e,t,a,i,s,o){const u=(0,l.up)("NavbarLinks"),c=(0,l.up)("SidebarChild");return(0,l.wg)(),(0,l.j4)("aside",n,[(0,l.Wm)(u),(0,l.WI)(e.$slots,"top"),(0,l.Wm)("ul",r,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.sidebarItems,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,l.WI)(e.$slots,"bottom")])};const g=k},6654:(e,t,a)=>{"use strict";a.d(t,{Fg:()=>i,c9:()=>n});var l=a(5386);const n=e=>(0,l.ak)(e)?/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":null:"GitHub",r={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},i=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:i,editLinkPattern:s})=>{const o=n(e);let u;return s?u=s:null!==o&&(u=r[o]),u?u.replace(/:repo/,"GitHub"===o?`https://github.com/${e}`:e).replace(/:branch/,t).replace(/:path/,(0,l.FY)(`${(0,l.U1)(a)}/${i}`)):null}}}]);