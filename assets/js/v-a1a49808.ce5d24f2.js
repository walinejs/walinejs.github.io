"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5943],{3356:(t,d,e)=>{e.r(d),e.d(d,{data:()=>a});const a={key:"v-a1a49808",path:"/reference/api.html",title:"API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"评论接口",slug:"评论接口",children:[{level:3,title:"评论列表",slug:"评论列表",children:[]},{level:3,title:"评论数",slug:"评论数",children:[]},{level:3,title:"最近评论",slug:"最近评论",children:[]},{level:3,title:"发布评论",slug:"发布评论",children:[]}]},{level:2,title:"阅读统计接口",slug:"阅读统计接口",children:[{level:3,title:"获取阅读统计数",slug:"获取阅读统计数",children:[]},{level:3,title:"更新阅读统计数",slug:"更新阅读统计数",children:[]}]}],filePathRelative:"reference/api.md",git:{updatedTime:1642990713e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},4399:(t,d,e)=>{e.r(d),e.d(d,{default:()=>h});const a=(0,e(8917).uE)('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="评论接口" tabindex="-1"><a class="header-anchor" href="#评论接口" aria-hidden="true">#</a> 评论接口</h2><h3 id="评论列表" tabindex="-1"><a class="header-anchor" href="#评论列表" aria-hidden="true">#</a> 评论列表</h3><p>获取某篇文章对应的评论列表</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>获取对应文章标识的评论列表</td></tr><tr><td>page</td><td>number</td><td>评论列表的页数</td></tr><tr><td>pageSize</td><td>number</td><td>每页评论列表的条数</td></tr></tbody></table><h3 id="评论数" tabindex="-1"><a class="header-anchor" href="#评论数" aria-hidden="true">#</a> 评论数</h3><p>获取某篇文章对应的评论总数</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=count\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>获取对应文章标识的评论列表</td></tr></tbody></table><h3 id="最近评论" tabindex="-1"><a class="header-anchor" href="#最近评论" aria-hidden="true">#</a> 最近评论</h3><p>获取当前网站的最近评论</p><div class="language-http ext-http"><pre class="language-http"><code>GET /comment?type=recent\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>count</td><td>number</td><td>返回最新评论的条数</td></tr></tbody></table><h3 id="发布评论" tabindex="-1"><a class="header-anchor" href="#发布评论" aria-hidden="true">#</a> 发布评论</h3><p>发布一条评论</p><div class="language-http ext-http"><pre class="language-http"><code>POST /comment\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>comment</td><td>string</td><td>评论内容</td></tr><tr><td>link</td><td>string</td><td>用户输入的网站</td></tr><tr><td>mail</td><td>string</td><td>用户输入的邮箱</td></tr><tr><td>nick</td><td>string</td><td>用户输入的昵称</td></tr><tr><td>pid</td><td>string</td><td>该条评论回复的评论 objectId</td></tr><tr><td>rid</td><td>string</td><td>该条评论的根评论 objectId</td></tr><tr><td>ua</td><td>string</td><td>用户的 user agent</td></tr><tr><td>url</td><td>string</td><td>评论的文章标识</td></tr><tr><td>at</td><td>string</td><td>该条评论回复的评论的作者昵称</td></tr></tbody></table><h2 id="阅读统计接口" tabindex="-1"><a class="header-anchor" href="#阅读统计接口" aria-hidden="true">#</a> 阅读统计接口</h2><h3 id="获取阅读统计数" tabindex="-1"><a class="header-anchor" href="#获取阅读统计数" aria-hidden="true">#</a> 获取阅读统计数</h3><p>获取某篇文章或者多篇文章对应的阅读数</p><div class="language-http ext-http"><pre class="language-http"><code>GET /article\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>对应文章标识，多个标识使用逗号拼接</td></tr></tbody></table><h3 id="更新阅读统计数" tabindex="-1"><a class="header-anchor" href="#更新阅读统计数" aria-hidden="true">#</a> 更新阅读统计数</h3><p>更新某篇文章的阅读数</p><div class="language-http ext-http"><pre class="language-http"><code>POST /article\n</code></pre></div><p><strong>参数</strong>:</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>对应文章标识</td></tr></tbody></table>',33),r={},h=(0,e(6959).Z)(r,[["render",function(t,d){return a}]])}}]);