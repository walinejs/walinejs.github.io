(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3825],{5142:(t,e,r)=>{"use strict";r.r(e),r.d(e,{data:()=>d});const d={key:"v-1b1feb10",path:"/en/reference/api.html",title:"API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Comment",slug:"comment",children:[{level:3,title:"Comment List",slug:"comment-list",children:[]},{level:3,title:"Comment Count",slug:"comment-count",children:[]},{level:3,title:"Recent Comment",slug:"recent-comment",children:[]},{level:3,title:"Submit comment",slug:"submit-comment",children:[]}]},{level:2,title:"Reading statistics",slug:"reading-statistics",children:[{level:3,title:"Get reading statistics",slug:"get-reading-statistics",children:[]},{level:3,title:"Update reading statistics",slug:"update-reading-statistics",children:[]}]}],filePathRelative:"en/reference/api.md",git:{updatedTime:1622525364e3,contributors:[]}}},9522:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});const d=(0,r(8917).uE)('<h1 id="api"><a class="header-anchor" href="#api">#</a> API</h1><h2 id="comment"><a class="header-anchor" href="#comment">#</a> Comment</h2><h3 id="comment-list"><a class="header-anchor" href="#comment-list">#</a> Comment List</h3><p>Get comment list for article</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment</td></tr><tr><td>page</td><td>number</td><td>Comment page</td></tr><tr><td>pageSize</td><td>number</td><td>Comment list page size</td></tr></tbody></table><h3 id="comment-count"><a class="header-anchor" href="#comment-count">#</a> Comment Count</h3><p>Get comment count for article</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=count\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment</td></tr></tbody></table><h3 id="recent-comment"><a class="header-anchor" href="#recent-comment">#</a> Recent Comment</h3><p>Get recent comment</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=recent\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>count</td><td>number</td><td>comment count return</td></tr></tbody></table><h3 id="submit-comment"><a class="header-anchor" href="#submit-comment">#</a> Submit comment</h3><div class="language-http ext-http"><pre class="language-http"><code>POST /comment\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>comment</td><td>string</td><td>comment content</td></tr><tr><td>link</td><td>string</td><td>commentator site</td></tr><tr><td>mail</td><td>string</td><td>commentator email</td></tr><tr><td>nick</td><td>string</td><td>commentator nick</td></tr><tr><td>pid</td><td>string</td><td>comment id which one replied</td></tr><tr><td>rid</td><td>string</td><td>root comment id which one ownerd</td></tr><tr><td>ua</td><td>string</td><td>commentator&#39;s user agent</td></tr><tr><td>url</td><td>string</td><td>Article id for comment</td></tr><tr><td>at</td><td>string</td><td>comment nick name which one replied</td></tr></tbody></table><h2 id="reading-statistics"><a class="header-anchor" href="#reading-statistics">#</a> Reading statistics</h2><h3 id="get-reading-statistics"><a class="header-anchor" href="#get-reading-statistics">#</a> Get reading statistics</h3><p>Get the number of readings corresponding to an article or multiple articles.</p><div class="language-http ext-http"><pre class="language-http"><code>GET /article\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment，multiple ids should be spliced with commas.</td></tr></tbody></table><h3 id="update-reading-statistics"><a class="header-anchor" href="#update-reading-statistics">#</a> Update reading statistics</h3><p>Update the reading count of an article.</p><div class="language-http ext-http"><pre class="language-http"><code>POST /article\n</code></pre></div><p><strong>Parameters</strong>:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>Article id for comment</td></tr></tbody></table>',32),a={render:function(t,e){return d}}}}]);