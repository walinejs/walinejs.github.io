import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as r,b as e,e as n,f as t,d as i}from"./app-ARX5FZPj.js";const c={},d=e("h2",{id:"support-range-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#support-range-changes","aria-hidden":"true"},"#"),n(" Support Range Changes")],-1),p=e("li",null,[e("p",null,"Node.js:"),e("p",null,"V3 only supports the latest LTS Node version."),e("p",null,"The current LTS versions are Node.js 18 and Node.js 20, which means we have removed support for Node.14 and Node 16.")],-1),f=e("p",null,"Browser:",-1),h={href:"https://vitejs.dev/guide/build.html#browser-compatibility",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"Chrome >=87"),e("li",null,"Firefox >=78"),e("li",null,"Safari >=14"),e("li",null,"Edge >=88")],-1),g=i(`<h2 id="feature-removal" tabindex="-1"><a class="header-anchor" href="#feature-removal" aria-hidden="true">#</a> Feature Removal</h2><ul><li>Now, when getting path binded to a counter element, <code>id</code> is no longer read. you should use <code>data-path</code>.</li><li>Legacy packages have been removed.</li></ul><h2 id="css-variables-update" tabindex="-1"><a class="header-anchor" href="#css-variables-update" aria-hidden="true">#</a> CSS Variables Update</h2><p><code>bgcolor</code> in CSS variables are changed to <code>bg-color</code>:</p><div class="language-diff" data-ext="diff"><pre class="language-diff"><code><span class="token coord">---waline-bgcolor: #fff;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-bg-color: #fff;
</span></span><span class="token coord">---waline-bgcolor-light: #f8f8f8;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-bg-color-light: #f8f8f8;
</span></span><span class="token coord">---waline-bgcolor-hover: #f0f0f0;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-bg-color-hover: #f0f0f0;
</span></span><span class="token coord">---waline-disable-bgcolor: #f8f8f8;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-disable-bg-color: #f8f8f8;
</span></span><span class="token coord">---waline-code-bgcolor: #282c34;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-code-bg-color: #282c34;
</span></span><span class="token coord">---waline-info-bgcolor: #f8f8f8;</span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">--waline-info-bg-color: #f8f8f8;
</span></span></code></pre></div>`,5);function b(k,_){const s=o("ExternalLinkIcon");return l(),r("div",null,[d,e("ul",null,[p,e("li",null,[f,e("p",null,[n("V3 only supports modern browsers, aligning with Vite's "),e("a",h,[n("Default Browser Support Range"),t(s)])]),u])]),g])}const w=a(c,[["render",b],["__file","v3.html.vue"]]);export{w as default};