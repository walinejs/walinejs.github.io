import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as d,e as r}from"./app.e37a6b4b.js";const a={},n=r(`<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h3 id="comment-list" tabindex="-1"><a class="header-anchor" href="#comment-list" aria-hidden="true">#</a> Comment List</h3><p>Get comment list for article</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment</td></tr><tr><td>page</td><td>number</td><td>Comment page</td></tr><tr><td>pageSize</td><td>number</td><td>Comment list page size</td></tr><tr><td>sortBy</td><td>string</td><td>Which sort type for comment list, default descending sort by create time, also you can ascending sort by create_time, or descending sort by comment like.</td></tr></tbody></table><h3 id="comment-count" tabindex="-1"><a class="header-anchor" href="#comment-count" aria-hidden="true">#</a> Comment Count</h3><p>Get comment count for article</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=count
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>Article id for comment, return site comment count if it empty</td></tr></tbody></table><h3 id="recent-comment" tabindex="-1"><a class="header-anchor" href="#recent-comment" aria-hidden="true">#</a> Recent Comment</h3><p>Get recent comment</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=recent
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>count</td><td>number</td><td>comment count return</td></tr></tbody></table><h3 id="submit-comment" tabindex="-1"><a class="header-anchor" href="#submit-comment" aria-hidden="true">#</a> Submit comment</h3><div class="language-http ext-http"><pre class="language-http"><code>POST /comment
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>comment</td><td>string</td><td>comment content</td></tr><tr><td>link</td><td>string</td><td>commentator site</td></tr><tr><td>mail</td><td>string</td><td>commentator email</td></tr><tr><td>nick</td><td>string</td><td>commentator nick</td></tr><tr><td>pid</td><td>string</td><td>comment id which one replied</td></tr><tr><td>rid</td><td>string</td><td>root comment id which one ownerd</td></tr><tr><td>ua</td><td>string</td><td>commentator&#39;s user agent</td></tr><tr><td>url</td><td>string</td><td>Article id for comment</td></tr><tr><td>at</td><td>string</td><td>comment nick name which one replied</td></tr></tbody></table><h2 id="reading-statistics" tabindex="-1"><a class="header-anchor" href="#reading-statistics" aria-hidden="true">#</a> Reading statistics</h2><h3 id="get-reading-statistics" tabindex="-1"><a class="header-anchor" href="#get-reading-statistics" aria-hidden="true">#</a> Get reading statistics</h3><p>Get the number of readings corresponding to an article or multiple articles.</p><div class="language-http ext-http"><pre class="language-http"><code>GET /article
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment\uFF0Cmultiple ids should be spliced with commas.</td></tr></tbody></table><h3 id="update-reading-statistics" tabindex="-1"><a class="header-anchor" href="#update-reading-statistics" aria-hidden="true">#</a> Update reading statistics</h3><p>Update the reading count of an article.</p><div class="language-http ext-http"><pre class="language-http"><code>POST /article
</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment</td></tr></tbody></table>`,31),i=[n];function o(c,s){return e(),d("div",null,i)}const p=t(a,[["render",o],["__file","api.html.vue"]]);export{p as default};