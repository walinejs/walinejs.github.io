import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as p,b as a,d as e,e as s,a as h,w as o}from"./app-BsgkWtVr.js";const d={};function k(c,i){const n=l("RouteLink");return r(),p("div",null,[i[11]||(i[11]=a(`<p>Waline 允许用户表达对文章内容的反应。</p><h2 id="快速启用" tabindex="-1"><a class="header-anchor" href="#快速启用"><span>快速启用</span></a></h2><p>想要快速启用反应，你可以在初始化时设置 <code>reaction</code> 选项为 <code>true</code> 来显示默认的反应列表:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#waline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  reaction</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 开启反应</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Waline 会在评论框的上方，显示默认的反应列表。</p><h2 id="自定义反应" tabindex="-1"><a class="header-anchor" href="#自定义反应"><span>自定义反应</span></a></h2><p>如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#waline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  reaction</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),e("p",null,[i[1]||(i[1]=s("同时，你可以通过 ")),i[2]||(i[2]=e("code",null,"locale",-1)),i[3]||(i[3]=s(" 中的 ")),i[4]||(i[4]=e("code",null,"reactionTitle",-1)),i[5]||(i[5]=s(" 来自定义反应的标题，也可以通过 ")),i[6]||(i[6]=e("code",null,"reaction0",-1)),i[7]||(i[7]=s(" 到 ")),i[8]||(i[8]=e("code",null,"reaction8",-1)),i[9]||(i[9]=s(" 来自定义反应表情的名称，详见 ")),h(n,{to:"/guide/features/i18n.html"},{default:o(()=>i[0]||(i[0]=[s("多语言设置")])),_:1}),i[10]||(i[10]=s("。"))]),i[12]||(i[12]=a('<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><div class="hint-container tip"><p class="hint-container-title">数量限制</p><p>Waline 最多支持 9 个反应，添加的反应数量可以小于 9 个，这不会产生任何问题。</p></div><div class="hint-container warning"><p class="hint-container-title">计数规则</p><p>反应的计数是基于位置的。</p><p>如果你需要对反应重新进行排序与调整，可参见 <a href="https://github.com/walinejs/waline/issues/1451#issuecomment-1264555264" target="_blank" rel="noopener noreferrer">#1451</a>。</p></div>',3))])}const u=t(d,[["render",k],["__file","reaction.html.vue"]]),B=JSON.parse('{"path":"/guide/features/reaction.html","title":"文章反应","lang":"zh-CN","frontmatter":{"title":"文章反应","icon":"reaction","order":4,"description":"Waline 允许用户表达对文章内容的反应。 快速启用 想要快速启用反应，你可以在初始化时设置 reaction 选项为 true 来显示默认的反应列表: Waline 会在评论框的上方，显示默认的反应列表。 自定义反应 如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应: 同时，你可以通过 locale 中...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/reaction.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/reaction.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"文章反应"}],["meta",{"property":"og:description","content":"Waline 允许用户表达对文章内容的反应。 快速启用 想要快速启用反应，你可以在初始化时设置 reaction 选项为 true 来显示默认的反应列表: Waline 会在评论框的上方，显示默认的反应列表。 自定义反应 如果你需要自定义这些反应表情，你可以转入一个包含反应表情图片地址数组，表达你想要用户选择的反应: 同时，你可以通过 locale 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文章反应\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"快速启用","slug":"快速启用","link":"#快速启用","children":[]},{"level":2,"title":"自定义反应","slug":"自定义反应","link":"#自定义反应","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1664265113000,"updatedTime":1717584295000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"guide/features/reaction.md","localizedDate":"2022年9月27日","autoDesc":true}');export{u as comp,B as data};
