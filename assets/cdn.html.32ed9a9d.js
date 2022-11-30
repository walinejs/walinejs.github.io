import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as o,b as a,e as n,f as c,d as l,r as i}from"./app.ce144736.js";const u={},r=a("p",null,"This cookbook is about importing Waline via CDN.",-1),k={href:"https://unpkg.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>To make Waline SSR friendly, we split Waline&#39;s styles in V2 version. This means, you need to import Waline&#39;s CSS style file, and import Waline script file and call Waline.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><p>Normally, you may want Waline to render a list of comments, you can import Waline as follows:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- style file --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- script file --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client@v2/dist/waline.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="pageviews-and-comments" tabindex="-1"><a class="header-anchor" href="#pageviews-and-comments" aria-hidden="true">#</a> Pageviews and comments</h2><p>Sometimes, you may want to display the number of page views and comments of the article on the home page or article list, but do not need to load the comment component, then you can import a Gzip &lt; 1KB script file in the following ways:</p><p>Pageviews:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> pageviewCount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client@v2/dist/pageview.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">pageviewCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Comments count:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> commentCount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client@v2/dist/comment.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">commentCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h2><div class="custom-container info"><p class="custom-container-title">Specifies version</p><p>You may have noticed that in the above cases, we have explicitly declared the <code>@v2</code> version after <code>@aline/client</code>. Your website is not working properly.</p></div>`,12);function d(g,h){const s=i("ExternalLinkIcon");return e(),p("div",null,[r,o(" more "),a("p",null,[n("For China Mainland users, we recommend using "),a("a",k,[n("unpkg"),c(s)]),n(". For foreign users, we recommend using jsDelivr.")]),m])}const w=t(u,[["render",d],["__file","cdn.html.vue"]]);export{w as default};
