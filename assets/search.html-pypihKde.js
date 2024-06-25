import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as o,d as n,e,a as l,w as r,b as h}from"./app-DeRfSd9r.js";const c={},d=h(`<p><code>@waline/client</code> allows users to add emoji search services and customize this functionality.</p><p>By default, <code>@waline/client</code> provides meme search service via <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">Giphy</a>. This will allow you to search images and add them to the comment.</p><h2 id="disable" tabindex="-1"><a class="header-anchor" href="#disable"><span>Disable</span></a></h2><p>If you don&#39;t need the default images search service, you can disable it by setting the <code>search</code> option to <code>false</code>.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#waline&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  search</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize"><span>Customize</span></a></h2><p>You can customize the image search service through the search option.</p><p>For each operation, you should return an array containing the image information as the search result, and each item should be an object with the following properties:</p><ul><li><code>src</code>: the link address of the image</li><li><code>title</code>: image title and alt text (optional)</li><li><code>preview</code>: Thumbnail of the image to use in the result list (optional)</li></ul><p>The option accepts three functions, each of which should return a Promise, and the result is the array of search results above.</p><ul><li><code>search</code>: search operation, the search term will be passed as the first parameter of the function</li><li><code>default</code>: list of images to display by default (optional)</li><li><code>more</code>: The function that starts when the image is scrolled to the bottom, where the search term and the current number are passed in as the first two parameters (optional)</li></ul>`,11);function p(m,u){const i=a("RouteLink");return s(),o("div",null,[d,n("p",null,[e("For tutorials on custom search, see "),l(i,{to:"/en/cookbook/customize/search.html"},{default:r(()=>[e("Cookbook → Custom Emoji Search")]),_:1}),e(".")])])}const f=t(c,[["render",p],["__file","search.html.vue"]]),y=JSON.parse('{"path":"/en/guide/features/search.html","title":"Emoticons Search","lang":"en-US","frontmatter":{"title":"Emoticons Search","icon":"search","order":3,"description":"@waline/client allows users to add emoji search services and customize this functionality. By default, @waline/client provides meme search service via Giphy. This will allow you...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/search.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/search.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Emoticons Search"}],["meta",{"property":"og:description","content":"@waline/client allows users to add emoji search services and customize this functionality. By default, @waline/client provides meme search service via Giphy. This will allow you..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Emoticons Search\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Disable","slug":"disable","link":"#disable","children":[]},{"level":2,"title":"Customize","slug":"customize","link":"#customize","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1717584295000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"en/guide/features/search.md","localizedDate":"November 30, 2022","autoDesc":true}');export{f as comp,y as data};