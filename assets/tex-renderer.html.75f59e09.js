import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,a as l,b as n,e as a,f as t,d as p,r as u}from"./app.ce144736.js";const k={},i=n("p",null,"This cookbook guides you on how to add your own Tex renderer.",-1),r=n("p",null,[n("code",null,"@waline/client"),a(" provides the "),n("code",null,"texRenderer"),a(" function. The client will pass whether in display mode and the original "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"TeX")]),n("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])]),a(" string as parameters. You should return a string.")],-1),g=n("h2",{id:"a-example-using-katex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-example-using-katex","aria-hidden":"true"},"#"),a(" A Example Using KaTeX")],-1),m={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},d=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Waline highlighter case<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/katex@v0.16/dist/katex.min.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;&quot;https://unpkg.com/@waline/client@v2/dist/waline.mjs&quot;&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">import</span> katex <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/katex@0.16/dist/katex.mjs&#39;</span><span class="token punctuation">;</span>

      <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">texRenderer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">blockMode<span class="token punctuation">,</span> tex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          katex<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>tex<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">displayMode</span><span class="token operator">:</span> blockMode<span class="token punctuation">,</span>
            <span class="token literal-property property">throwOnError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="a-case-using-mathjax" tabindex="-1"><a class="header-anchor" href="#a-case-using-mathjax" aria-hidden="true">#</a> A case using MathJax</h2>`,2),h={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Waline highlighter case<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/mathjax@v3/es5/tex-svg.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;&quot;https://unpkg.com/@waline/client@v2/dist/waline.mjs&quot;&#39;</span><span class="token punctuation">;</span>

      <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">texRenderer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">blockMode<span class="token punctuation">,</span> tex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          window<span class="token punctuation">.</span>MathJax<span class="token punctuation">.</span>startup<span class="token punctuation">.</span>adaptor<span class="token punctuation">.</span><span class="token function">outerHTML</span><span class="token punctuation">(</span>
            window<span class="token punctuation">.</span>MathJax<span class="token punctuation">.</span><span class="token function">tex2svg</span><span class="token punctuation">(</span>tex<span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">display</span><span class="token operator">:</span> blockMode<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function q(y,x){const s=u("ExternalLinkIcon");return e(),c("div",null,[i,l(" more "),r,g,n("p",null,[a("For KaTeX options, see "),n("a",m,[a("KaTeX API"),t(s)]),a(".")]),d,n("p",null,[a("For MathJax options, see "),n("a",h,[a("MathJax API"),t(s)]),a(".")]),v])}const _=o(k,[["render",q],["__file","tex-renderer.html.vue"]]);export{_ as default};
