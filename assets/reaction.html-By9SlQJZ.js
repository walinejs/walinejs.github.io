import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as i,b as e,e as n,d as c,w as l,a}from"./app-8cbFISj1.js";const r={},u=a(`<p>Waline 允许用户表达对文章内容的反应。</p><h2 id="快速启用" tabindex="-1"><a class="header-anchor" href="#快速启用"><span>快速启用</span></a></h2><p>想要快速启用反应，你可以在初始化时设置 <code>reaction</code> 选项为 <code>true</code> 来显示默认的反应列表:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启反应</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Waline 会在评论框的上方，显示默认的反应列表。</p><h2 id="自定义反应" tabindex="-1"><a class="header-anchor" href="#自定义反应"><span>自定义反应</span></a></h2><p>如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8),d=e("code",null,"locale",-1),m=e("code",null,"reactionTitle",-1),h=e("code",null,"reaction0",-1),g=e("code",null,"reaction8",-1),k=a('<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><div class="hint-container tip"><p class="hint-container-title">数量限制</p><p>Waline 最多支持 9 个反应，添加的反应数量可以小于 9 个，这不会产生任何问题。</p></div><div class="hint-container warning"><p class="hint-container-title">计数规则</p><p>反应的计数是基于位置的。</p><p>如果你需要对反应重新进行排序与调整，可参见 <a href="https://github.com/walinejs/waline/issues/1451#issuecomment-1264555264" target="_blank" rel="noopener noreferrer">#1451</a>。</p></div>',3);function _(f,w){const t=o("RouteLink");return p(),i("div",null,[u,e("p",null,[n("同时，你可以通过 "),d,n(" 中的 "),m,n(" 来自定义反应的标题，也可以通过 "),h,n(" 到 "),g,n(" 来自定义反应表情的名称，详见 "),c(t,{to:"/guide/features/i18n.html"},{default:l(()=>[n("多语言设置")]),_:1}),n("。")]),k])}const b=s(r,[["render",_],["__file","reaction.html.vue"]]),j=JSON.parse('{"path":"/guide/features/reaction.html","title":"文章反应","lang":"zh-CN","frontmatter":{"title":"文章反应","icon":"reaction","redirectFrom":"/guide/client/reaction.html","description":"Waline 允许用户表达对文章内容的反应。 快速启用 想要快速启用反应，你可以在初始化时设置 reaction 选项为 true 来显示默认的反应列表: Waline 会在评论框的上方，显示默认的反应列表。 自定义反应 如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应: 同时，你可以通过 locale 中...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/reaction.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/reaction.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"文章反应"}],["meta",{"property":"og:description","content":"Waline 允许用户表达对文章内容的反应。 快速启用 想要快速启用反应，你可以在初始化时设置 reaction 选项为 true 来显示默认的反应列表: Waline 会在评论框的上方，显示默认的反应列表。 自定义反应 如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应: 同时，你可以通过 locale 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-11-30T16:18:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T16:18:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文章反应\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-30T16:18:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"快速启用","slug":"快速启用","link":"#快速启用","children":[]},{"level":2,"title":"自定义反应","slug":"自定义反应","link":"#自定义反应","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1664265113000,"updatedTime":1669825130000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"guide/features/reaction.md","localizedDate":"2022年9月27日","autoDesc":true}');export{b as comp,j as data};