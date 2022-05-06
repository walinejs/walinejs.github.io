import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as s,a as e,b as c,w as l,F as d,d as t}from"./app.35dad44f.js";const i={},u=e("p",null,"Waline V2 \u5BA2\u6237\u7AEF\u5BFC\u51FA\u4E86\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684 Vue \u7EC4\u4EF6\u3002",-1),m=t("\u6240\u6709\u7684\u5C5E\u6027\u90FD\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F60\u53EF\u4EE5\u5728 "),p=t("\u53C2\u8003 \u2192 \u7EC4\u4EF6\u5C5E\u6027"),_=t(" \u627E\u5230\u5168\u90E8\u652F\u6301\u7684\u5C5E\u6027\u3002"),h=e("h2",{id:"\u6848\u4F8B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6848\u4F8B","aria-hidden":"true"},"#"),t(" \u6848\u4F8B")],-1),f=e("div",{class:"language-vue ext-vue"},[e("pre",{class:"language-vue"},[e("code",null,`<template>
  <button @click="toggleDarkmode">\u5207\u6362\u6A21\u5F0F</button>
  <Waline :serverURL="serverURL" :path="path" :darkmode="darkmode" />
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Waline } from '@waline/client/dist/component';

const serverURL = 'https://waline.vercel.app';
const path = computed(() => useRoute().path);

const darkmode = ref(false);

const toggleDarkmode = () => {
  darkmode.value = !darkmode.value;
};
<\/script>
`)])],-1),v=e("p",null,[t("\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528\u4E86\u54CD\u5E94\u5F0F\u7684 "),e("code",null,"path"),t("\uFF0C\u5F53\u8DEF\u7531\u53D8\u52A8\u65F6\uFF0CWaline \u4F1A\u81EA\u52A8\u5237\u65B0\u5E76\u663E\u793A\u76F8\u5E94\u8DEF\u7531\u7684\u8BC4\u8BBA\uFF0C\u540C\u65F6\uFF0C\u5F53\u4F60\u6309\u4E0B\u5207\u6362\u6309\u94AE\u65F6\uFF0CWaline \u4F1A\u5207\u6362\u4E3B\u9898\u6A21\u5F0F\u3002")],-1);function k(g,x){const n=a("RouterLink");return r(),s(d,null,[u,e("p",null,[m,c(n,{to:"/reference/component.html"},{default:l(()=>[p]),_:1}),_]),h,f,v],64)}var V=o(i,[["render",k],["__file","component.html.vue"]]);export{V as default};
