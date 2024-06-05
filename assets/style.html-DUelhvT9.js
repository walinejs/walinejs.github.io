import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as n,d as o,e,a as r,w as h,b as s}from"./app-47lnWMq3.js";const d={},p=s(`<p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p><p>Meanwhile, <code>@waline/client</code> also has built-in dark mode support.</p><h2 id="dark-mode-support" tabindex="-1"><a class="header-anchor" href="#dark-mode-support"><span>Dark mode support</span></a></h2><p>You can use the <code>dark</code> option to enable Waline&#39;s dark mode support.</p><p>Usually websites will enable dark mode support in two ways:</p><ul><li>Use the <code>@media</code> selector to automatically switch according to the device color mode status through <code>prefers-color-scheme</code></li><li>Dynamically apply other dark mode color style by modifying the attributes and class of the dom root element (<code>html</code> or <code>body</code>).</li></ul><p>If you enable Waline on the site of the first method, you only need to set <code>dark</code> to <code>&#39;auto&#39;</code>.</p><p>For the second type of site, you need to set dark to the CSS selector that makes the dark mode effective. Here are a few examples:</p><div class="hint-container tip"><p class="hint-container-title">Examples</p><ul><li><p><strong>vuepress-theme-hop v2</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li></ul></div><h2 id="meta-icons" tabindex="-1"><a class="header-anchor" href="#meta-icons"><span>Meta Icons</span></a></h2><p>If you want to add icons to user comment meta data, you can import <code>waline-meta.css</code> to use it.</p><p>For CDN users, you can import via the following link:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- Meta icon (optional) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">  rel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">  href</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://unpkg.com/@waline/client@v3/dist/waline-meta.css&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For NPM users, you can import via:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@waline/client/meta&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="rtl-support" tabindex="-1"><a class="header-anchor" href="#rtl-support"><span>RTL support</span></a></h2><p><code>@waline/client</code> supports RTL layout, you just need to add <code>dir=&quot;rtl&quot;</code> in <code>&lt;html&gt;</code> tag.</p><h2 id="customize-styles" tabindex="-1"><a class="header-anchor" href="#customize-styles"><span>Customize Styles</span></a></h2><h3 id="css-variables" tabindex="-1"><a class="header-anchor" href="#css-variables"><span>CSS Variables</span></a></h3>`,19),c=s(`<p>If it differs from your site style, you can override the corresponding CSS variable yourself.</p><h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow"><span>Box Shadow</span></a></h2><p>If you are using a theme that uses shadows (<code>box-shadow</code>) instead of borders, you can modify the display effect of Waline by modifying <code>--waline-border</code> and <code>--waline-box-shadow</code>, e.g.:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#56B6C2;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  --waline-border</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  --waline-box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 40</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">134</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 151</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 168</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (prefers-color-scheme: dark) {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  body</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    --waline-box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 40</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> #0f0e0d</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more"><span>More</span></a></h3><p>If the above CSS variables cannot meet your custom requirements for Waline styles, you can write your own css file.</p>`,6);function k(u,m){const i=t("RouteLink");return l(),n("div",null,[p,o("p",null,[e("You can find default values for CSS variables used by Waline in normal and darkmode at "),r(i,{to:"/en/reference/client/style.html"},{default:h(()=>[e("Client Reference → CSS Variables")]),_:1}),e(".")]),c])}const b=a(d,[["render",k],["__file","style.html.vue"]]),v=JSON.parse('{"path":"/en/guide/features/style.html","title":"Style Customize","lang":"en-US","frontmatter":{"title":"Style Customize","icon":"style","order":-2,"description":"@waline/client provides some CSS variables. You can easily configure the style of waline through these variables: Meanwhile, @waline/client also has built-in dark mode support. ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/style.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/style.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Style Customize"}],["meta",{"property":"og:description","content":"@waline/client provides some CSS variables. You can easily configure the style of waline through these variables: Meanwhile, @waline/client also has built-in dark mode support. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Style Customize\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dark mode support","slug":"dark-mode-support","link":"#dark-mode-support","children":[]},{"level":2,"title":"Meta Icons","slug":"meta-icons","link":"#meta-icons","children":[]},{"level":2,"title":"RTL support","slug":"rtl-support","link":"#rtl-support","children":[]},{"level":2,"title":"Customize Styles","slug":"customize-styles","link":"#customize-styles","children":[{"level":3,"title":"CSS Variables","slug":"css-variables","link":"#css-variables","children":[]}]},{"level":2,"title":"Box Shadow","slug":"box-shadow","link":"#box-shadow","children":[{"level":3,"title":"More","slug":"more","link":"#more","children":[]}]}],"git":{"createdTime":1620390214000,"updatedTime":1717584295000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"en/guide/features/style.md","localizedDate":"May 7, 2021","autoDesc":true}');export{b as comp,v as data};
