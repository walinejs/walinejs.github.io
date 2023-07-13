import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c,a as p,b as e,e as n,f as t,w as r,d as u}from"./app-945c9678.js";const d={},h=e("p",null,"Waline has built-in multi-language support, and you can also customize Waline's locale config.",-1),g=u(`<h2 id="set-language" tabindex="-1"><a class="header-anchor" href="#set-language" aria-hidden="true">#</a> Set Language</h2><p>You can set the language used by Waline through the <code>lang</code> option. The supported languages are:</p><ul><li>zh</li><li>zh-CN</li><li>zh-TW</li><li>en</li><li>en-US</li><li>jp</li><li>jp-JP</li><li>pt-BR</li><li>ru</li><li>ru-RU</li></ul><p>E.g.:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),_={class:"hint-container tip"},m=e("p",{class:"hint-container-title"},"Tips",-1),k={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"customize",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize","aria-hidden":"true"},"#"),n(" Customize")],-1),x=e("p",null,[n("You can customize the language through the "),e("code",null,"locale"),n(" option, or set some fields to overwrite the existing UI text.")],-1);function z(b,v){const s=a("ExternalLinkIcon"),o=a("RouterLink");return i(),c("div",null,[h,p(" more "),g,e("div",_,[m,e("p",null,[n("If you want to help Waline add more language support, we welcome you to send a PR to "),e("a",k,[n("client/config/i18n"),t(s)]),n(".")])]),f,x,e("p",null,[n("For details, see "),t(o,{to:"/en/cookbook/customize/locale.html"},{default:r(()=>[n("Cookbook → Customize Locale")]),_:1})])])}const C=l(d,[["render",z],["__file","i18n.html.vue"]]);export{C as default};
