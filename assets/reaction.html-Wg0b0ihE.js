import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as r,b as t,d as s,e,a as p,w as h}from"./app-BsgkWtVr.js";const d={};function c(k,i){const n=l("RouteLink");return o(),r("div",null,[i[11]||(i[11]=t(`<p>Waline allows users to express reactions for article content.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2><p>To quickly enable reactions, you can set the <code>reaction</code> option to <code>true</code> to display a default list of reactions:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#waline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  reaction</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// start the reaction</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Waline will display the default list of reactions above the comment box.</p><h2 id="customize-reactions" tabindex="-1"><a class="header-anchor" href="#customize-reactions"><span>Customize Reactions</span></a></h2><p>If you need to customize these reaction emoticons, you can pass in an array containing the link of the reaction emoticon image, representing reactions you want the user to choose with:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#waline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  reaction</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),s("p",null,[i[1]||(i[1]=e("Meanwhile, you can customize the title of the reaction through ")),i[2]||(i[2]=s("code",null,"reactionTitle",-1)),i[3]||(i[3]=e(" in ")),i[4]||(i[4]=s("code",null,"locale",-1)),i[5]||(i[5]=e(", and you can also customize the name of the reaction expression through ")),i[6]||(i[6]=s("code",null,"reaction0",-1)),i[7]||(i[7]=e(" to ")),i[8]||(i[8]=s("code",null,"reaction8",-1)),i[9]||(i[9]=e(", see ")),p(n,{to:"/en/guide/features/i18n.html"},{default:h(()=>i[0]||(i[0]=[e("Multilingual Settings")])),_:1}),i[10]||(i[10]=e(" ."))]),i[12]||(i[12]=t('<h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span>Precautions</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Number Limitation</p><p>Waline supports up to 9 reactions, and you can add less than 9 reactions without any problems.</p></div><div class="hint-container warning"><p class="hint-container-title">Counting Rules</p><p>Counting of reactions is based on location.</p><p>If you need to reorder and adjust the reactions, check <a href="https://github.com/walinejs/waline/issues/1451#issuecomment-1264555264" target="_blank" rel="noopener noreferrer">#1451</a> for more details.</p></div>',3))])}const m=a(d,[["render",c],["__file","reaction.html.vue"]]),y=JSON.parse('{"path":"/en/guide/features/reaction.html","title":"Article Reactions","lang":"en-US","frontmatter":{"title":"Article Reactions","icon":"reaction","order":4,"description":"Waline allows users to express reactions for article content. Getting Started To quickly enable reactions, you can set the reaction option to true to display a default list of r...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/reaction.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/reaction.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Article Reactions"}],["meta",{"property":"og:description","content":"Waline allows users to express reactions for article content. Getting Started To quickly enable reactions, you can set the reaction option to true to display a default list of r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Article Reactions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[]},{"level":2,"title":"Customize Reactions","slug":"customize-reactions","link":"#customize-reactions","children":[]},{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]}],"git":{"createdTime":1664265113000,"updatedTime":1717584295000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"en/guide/features/reaction.md","localizedDate":"September 27, 2022","autoDesc":true}');export{m as comp,y as data};
