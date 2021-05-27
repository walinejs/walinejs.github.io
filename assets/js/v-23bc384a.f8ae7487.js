(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9212],{1308:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-23bc384a",path:"/en/server/basic.html",title:"Server Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Basic Configuration",slug:"basic-configuration",children:[]},{level:2,title:"Code Config",slug:"code-config",children:[{level:3,title:"secureDomains",slug:"securedomains",children:[]},{level:3,title:"forbiddenWords",slug:"forbiddenwords",children:[]},{level:3,title:"disallowIPList",slug:"disallowiplist",children:[]},{level:3,title:"mailSubject",slug:"mailsubject",children:[]},{level:3,title:"mailTemplate",slug:"mailtemplate",children:[]},{level:3,title:"mailSubjectAdmin",slug:"mailsubjectadmin",children:[]},{level:3,title:"mailTemplateAdmin",slug:"mailtemplateadmin",children:[]},{level:3,title:"QQTemplate",slug:"qqtemplate",children:[]},{level:3,title:"TGTempalte",slug:"tgtempalte",children:[]}]},{level:2,title:"Comment Hooks",slug:"comment-hooks",children:[{level:3,title:"preSave(comment)",slug:"presave-comment",children:[]},{level:3,title:"postSave(comment, pComment)",slug:"postsave-comment-pcomment",children:[]},{level:3,title:"preUpdate(comment)",slug:"preupdate-comment",children:[]},{level:3,title:"afterUpdate(comment)",slug:"afterupdate-comment",children:[]},{level:3,title:"preDelete(commentId)",slug:"predelete-commentid",children:[]},{level:3,title:"afterDelete(commentId)",slug:"afterdelete-commentid",children:[]}]}],filePathRelative:"en/server/basic.md",git:{updatedTime:162209788e4,contributors:[]}}},7808:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(8917).uE)('<h1 id="server-configuration"><a class="header-anchor" href="#server-configuration">#</a> Server Configuration</h1><h2 id="basic-configuration"><a class="header-anchor" href="#basic-configuration">#</a> Basic Configuration</h2><p>Most backend config can be cofigured in environment variable, which can be set in <kbd>Settings</kbd> - <kbd>Environment Variables</kbd> for Vercel. Note: all changes works after redeploy.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>LEAN_ID</code></td><td>✅</td><td>LeanCloud Application ID</td></tr><tr><td><code>LEAN_KEY</code></td><td>✅</td><td>LeanCloud Application Key</td></tr><tr><td><code>LEAN_MASTER_KEY</code></td><td>✅</td><td>LeanCloud Application Master Key</td></tr><tr><td><code>LEAN_SERVER</code></td><td>⚠</td><td>LeanCloud server address if you&#39;re leancloud china user</td></tr><tr><td><code>SITE_NAME</code></td><td></td><td>site name</td></tr><tr><td><code>SITE_URL</code></td><td></td><td>site url</td></tr><tr><td><code>SECURE_DOMAINS</code></td><td></td><td>Secure Domains config. Supports multiple domain with Comma separated</td></tr><tr><td><code>DISABLE_USERAGENT</code></td><td></td><td>wether hide the user agent of commentor. Default value is <code>false</code></td></tr><tr><td><code>AKISMET_KEY</code></td><td></td><td>Akismet antispam service key, default is open, set <code>false</code> if you wanna close it.</td></tr><tr><td><code>COMMENT_AUDIT</code></td><td></td><td>Comment audit switcher. We recommend to tip on the placeholder text if it&#39;s true.</td></tr></tbody></table><p>Besides the above environment variables, different features will also its environment variable config, which can be viewed in the corresponding sidebar items.</p><h2 id="code-config"><a class="header-anchor" href="#code-config">#</a> Code Config</h2><p>Except environment variables setting, we also support some config in project file.</p><h3 id="securedomains"><a class="header-anchor" href="#securedomains">#</a> secureDomains</h3><p>Secure domain settings. Requests from other domain will receive 403 status code. It supports String, Regexp, and Array type. Leaving this config means that all domain referrer are allowed.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  secureDomains<span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><ul><li>To make local development easy, <code>localhost</code> and <code>127.0.0.1</code> will be added to the list of secure domain names by default.</li><li>Env variable <code>SECURE_DOMAINS</code> won&#39;t work when this option is set.</li></ul></div><h3 id="forbiddenwords"><a class="header-anchor" href="#forbiddenwords">#</a> forbiddenWords</h3><p>If a comment match forbidden word, it will be marked as spam.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  forbiddenWords<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Trump&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="disallowiplist"><a class="header-anchor" href="#disallowiplist">#</a> disallowIPList</h3><p>If a comment ip match this list, 403 status code is returned.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  disallowIPList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="mailsubject"><a class="header-anchor" href="#mailsubject">#</a> mailSubject</h3><p>Customize the title of the comment reply email, which is equivalent to environment variable <code>MAIL_SUBJECT</code>.</p><h3 id="mailtemplate"><a class="header-anchor" href="#mailtemplate">#</a> mailTemplate</h3><p>Customize the content of the comment reply email, which is equivalent to environment variable <code>MAIL_TEMPLATE</code>.</p><h3 id="mailsubjectadmin"><a class="header-anchor" href="#mailsubjectadmin">#</a> mailSubjectAdmin</h3><p>Customize the title of the new comment notification email, which is equivalent to the environment variable <code>MAIL_SUBJECT_ADMIN</code>.</p><h3 id="mailtemplateadmin"><a class="header-anchor" href="#mailtemplateadmin">#</a> mailTemplateAdmin</h3><p>Customize the content of the new comment notification email, which is equivalent to the environment variable <code>MAIL_TEMPLATE_ADMIN</code>.</p><h3 id="qqtemplate"><a class="header-anchor" href="#qqtemplate">#</a> QQTemplate</h3><p>The QQ comment notification template, which is equivalent to the environment variable <code>QQ_TEMPLATE</code>.</p><h3 id="tgtempalte"><a class="header-anchor" href="#tgtempalte">#</a> TGTempalte</h3><p>Telegram comment notification template, which is equivalent to the environment variable <code>TG_TEMPLATE</code>.</p><h2 id="comment-hooks"><a class="header-anchor" href="#comment-hooks">#</a> Comment Hooks</h2><p>Besides environment variable configuration, Waline also provides some custom hooks to facilitate the processing of custom requirements. It only needs to be configured in the server entry file <code>index.js</code>.</p><h3 id="presave-comment"><a class="header-anchor" href="#presave-comment">#</a> preSave(comment)</h3><p>The hook will be triggered before comments are posted, and comment data will be passed to params. If the method returns content, the interface will return directly without storing the comment data.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> isSapm <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> errmsg<span class="token operator">:</span> <span class="token string">&quot;It&#39;s a spam!&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="postsave-comment-pcomment"><a class="header-anchor" href="#postsave-comment-pcomment">#</a> postSave(comment, pComment)</h3><p>The action performed after the comment is posted.</p><p>When the method is executed, the comment data will be passed as the first param, and if it&#39;s a reply to the comment, the parent comment will be passed as the second param.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      mail<span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>\n      text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replied your comment!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="preupdate-comment"><a class="header-anchor" href="#preupdate-comment">#</a> preUpdate(comment)</h3><p>Action before a comment content is updated in the dashboard. If the method returns content, the interface will return directly without updating the comment data.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t update comment data&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="afterupdate-comment"><a class="header-anchor" href="#afterupdate-comment">#</a> afterUpdate(comment)</h3><p>Action after a comment content is updated in the dashboard. Comment data will be passed in when the method is executed.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been updated!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="predelete-commentid"><a class="header-anchor" href="#predelete-commentid">#</a> preDelete(commentId)</h3><p>Action before a comment is deleted. When the method is executed, the comment Id to be operated will be passed in. If the method returns content, the interface will return directly without updating the comment data.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="afterdelete-commentid"><a class="header-anchor" href="#afterdelete-commentid">#</a> afterDelete(commentId)</h3><p>Action after a comment is deleted, the comment Id will be passed as the only param.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',50),t={render:function(n,s){return e}}}}]);