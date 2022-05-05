import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as s,a as e,b as c,w as l,F as i,d as t}from"./app.e8231fd5.js";const d={},m=e("p",null,"Waline V2 client exports a Vue Component.",-1),p=t("All properties are reactive, you can find all supported properties in "),u=t("Reference \u2192 Component Properties"),h=t("."),_=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),t(" Demo")],-1),f=e("div",{class:"language-vue ext-vue"},[e("pre",{class:"language-vue"},[e("code",null,`<template>
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
`)])],-1),v=e("p",null,[t("Since we use reactive "),e("code",null,"path"),t(", when the route changes, Waline will automatically refresh and display the comments of the corresponding route, and at the same time, when you click the toggle button, Waline will switch the theme mode.")],-1);function g(k,w){const o=a("RouterLink");return r(),s(i,null,[m,e("p",null,[p,c(o,{to:"/en/reference/component.html"},{default:l(()=>[u]),_:1}),h]),_,f,v],64)}var b=n(d,[["render",g],["__file","component.html.vue"]]);export{b as default};
