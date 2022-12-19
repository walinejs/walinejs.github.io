import{ac as n,y as o,z as c,C as l,v as a,L as e,G as p,ae as r,ad as s,O as i}from"./framework-d880fff3.js";const d={},u=a("p",null,[a("code",null,"@waline/client"),e(" provides some CSS variables. You can easily configure the style of waline through these variables:")],-1),h=a("p",null,[e("Meanwhile, "),a("code",null,"@waline/client"),e(" also has built-in dark mode support.")],-1),m=s(`<h2 id="dark-mode-support" tabindex="-1"><a class="header-anchor" href="#dark-mode-support" aria-hidden="true">#</a> Dark mode support</h2><p>You can use the <code>dark</code> option to enable Waline&#39;s dark mode support.</p><p>Usually websites will enable dark mode support in two ways:</p><ul><li>Use the <code>@media</code> selector to automatically switch according to the device color mode status through <code>prefers-color-scheme</code></li><li>Dynamically apply other dark mode color style by modifying the attributes and class of the dom root element (<code>html</code> or <code>body</code>).</li></ul><p>If you enable Waline on the site of the first method, you only need to set <code>dark</code> to <code>&#39;auto&#39;</code>.</p><p>For the second type of site, you need to set dark to the CSS selector that makes the dark mode effective. Here are a few examples:</p><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>vuepress-theme-hop v2</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li></ul></div><h2 id="meta-icons" tabindex="-1"><a class="header-anchor" href="#meta-icons" aria-hidden="true">#</a> Meta Icons</h2><p>If you want to add icons to user comment meta data, you can import <code>waline-meta.css</code> to use it.</p><p>For CDN users, you can import via the following link:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Meta icon (optional) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline-meta.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>For NPM users, you can import via:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@waline/client/dist/waline-meta.css&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="customize-styles" tabindex="-1"><a class="header-anchor" href="#customize-styles" aria-hidden="true">#</a> Customize Styles</h2><h3 id="css-variables" tabindex="-1"><a class="header-anchor" href="#css-variables" aria-hidden="true">#</a> CSS Variables</h3>`,15),k=s(`<p>If it differs from your site style, you can override the corresponding CSS variable yourself.</p><h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow" aria-hidden="true">#</a> Box Shadow</h2><p>If you are using a theme that uses shadows (<code>box-shadow</code>) instead of borders, you can modify the display effect of Waline by modifying <code>--waline-border</code> and <code>--waline-box-shadow</code>, e.g.:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--waline-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px <span class="token function">rgb</span><span class="token punctuation">(</span>134 151 168 / 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px #0f0e0d<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h3><p>If the above CSS variables cannot meet your custom requirements for Waline styles, you can write your own css file.</p>`,6);function f(y,b){const t=i("RouterLink");return o(),c("div",null,[u,h,l(" more "),m,a("p",null,[e("You can find default values for CSS variables used by Waline in normal and darkmode at "),p(t,{to:"/en/reference/client/style.html"},{default:r(()=>[e("Client Reference → CSS Variables")]),_:1}),e(".")]),k])}const w=n(d,[["render",f],["__file","style.html.vue"]]);export{w as default};