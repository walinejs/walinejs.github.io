import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as i,a as c,b as e,e as t,f as n,w as s}from"./app-4a36fbfe.js";const d="/assets/label-admin-4948bdec.jpg",_="/assets/label-profile-ded91961.jpg",u={},h=e("p",null,"Waline 支持你为登录用户，根据其互动情况设置等级标签和自定义标签。",-1),f=e("h2",{id:"等级标签",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#等级标签","aria-hidden":"true"},"#"),t(" 等级标签")],-1),m=e("code",null,"LEVELS",-1),p=e("h2",{id:"专属标签",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#专属标签","aria-hidden":"true"},"#"),t(" 专属标签")],-1),E=e("p",null,"你可以通过管理端为每位登录用户设定专属标签。",-1),b=e("figure",null,[e("img",{src:d,alt:"管理员设置标签",tabindex:"0"}),e("figcaption",null,"管理员设置标签")],-1),g=e("p",null,"作为登录用户，也可以自己在个人资料页中修改自己的专属标签。",-1),x=e("figure",null,[e("img",{src:_,alt:"用户设置标签",tabindex:"0"}),e("figcaption",null,"用户设置标签")],-1);function A(B,v){const o=l("RouterLink");return r(),i("div",null,[h,c(" more "),f,e("p",null,[t("你需要在服务端配置 "),m,t(" 变量开启这个功能，详见 "),n(o,{to:"/reference/server/env.html#%E6%98%BE%E7%A4%BA"},{default:s(()=>[t("服务端环境变量配置")]),_:1}),t("。")]),e("p",null,[t("你可以通过 locales 选项自定义这些等级标签，详见 "),n(o,{to:"/guide/features/i18n.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80"},{default:s(()=>[t("多语言")]),_:1})]),p,E,b,g,x])}const L=a(u,[["render",A],["__file","label.html.vue"]]);export{L as default};