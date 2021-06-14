(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7476],{2722:(e,i,o)=>{"use strict";o.r(i),o.d(i,{data:()=>n});const n={key:"v-b032db80",path:"/en/migration/client.html",title:"Waline client v1 migration guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"New Features",slug:"new-features",children:[]},{level:2,title:"Size reduction",slug:"size-reduction",children:[]},{level:2,title:"Options Change",slug:"options-change",children:[]},{level:2,title:"Options Rename",slug:"options-rename",children:[]},{level:2,title:"Behavior change",slug:"behavior-change",children:[{level:3,title:"Responsive",slug:"responsive",children:[]},{level:3,title:"Initialization",slug:"initialization",children:[]}]},{level:2,title:"Widget Change",slug:"widget-change",children:[]}],filePathRelative:"en/migration/client.md",git:{updatedTime:162366975e4,contributors:[]}}},6822:(e,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>d});var n=o(8917);const t=(0,n.uE)('<h1 id="waline-client-v1-migration-guide"><a class="header-anchor" href="#waline-client-v1-migration-guide">#</a> Waline client v1 migration guide</h1><p>V1 has several changes, the BREAKING CHANGEs are detailed in <a href="#initialization">Initialization</a> and <a href="#widget-change">Widget Change</a>.</p><h2 id="new-features"><a class="header-anchor" href="#new-features">#</a> New Features</h2><ul><li>Emoji preset support: You can now directly fill in the Emoji preset link to complete the Emoji configuration</li><li>Multiple Emoji tabs: Emoji can now contain multiple tabs to add different types of Emoji</li><li>Picture upload optimization: We added a picture upload button to remind visitors that they can upload pictures</li><li>Drag and drop support: You can now directly drag and drop text or images into the comment box to complete text input or image addition.</li><li>Responsive and SPA: Now Waline will return a responsive instance and supports SPA applications, see <a href="#Responsive">Responsive</a></li></ul><h2 id="size-reduction"><a class="header-anchor" href="#size-reduction">#</a> Size reduction</h2><p>The v1 version is a complete rewrite with Vue and TypeScript, so the size is reduced from 78.4kb to 53.3kb (gzip).</p><h2 id="options-change"><a class="header-anchor" href="#options-change">#</a> Options Change</h2><p>The following options are marked as <code>obsolete</code>, and will be removed in v2.</p><ul><li><p><code>placeholder</code> → please use <code>locale.placeholder</code> option</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>This change is to allow the default placeholder to adapt to multiple languages</p></div></li><li><p><code>emojiCDN</code>, <code>emojiMaps</code> → Please use the new <code>emoji</code> option</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>We have brought support for multiple Emoji tabs and Emoji presets. Emoji config should be easier for most users.</p></div></li><li><p><code>anonymous</code> → please use the new <code>login</code> option</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Since Waline brings login support, we will change:</p><ul><li><code>anonymous: undefined</code>: anonymous comment and login are both possible</li><li><code>anonymous: true</code>: disable login</li><li><code>anonymous: false</code>: Cannot comment anonymously, that is, you can comment only after logging in</li></ul><p>to:</p><ul><li><code>login:&#39;enable&#39;</code>: enable login</li><li><code>login:&#39;disable&#39;</code>: disable login</li><li><code>login:&#39;force&#39;</code>: Force login</li></ul><p>This option should be more intuitive.</p></div></li></ul><h2 id="options-rename"><a class="header-anchor" href="#options-rename">#</a> Options Rename</h2><p>The original option has problems like unclear meaning and inconsistent naming. The following are the renamed options, and their behavior remains the same as before. These are also marked as <code>obsolete</code>, and will be removed in v2.</p><ul><li><p><code>langmode</code> → renamed to <code>locale</code></p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>This change improves the English meaning of options.</p></div></li><li><p><code>requiredFields</code> → renamed to <code>requiredMeta</code></p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>This change is to align with the <code>meta</code> option.</p></div></li></ul><h2 id="behavior-change"><a class="header-anchor" href="#behavior-change">#</a> Behavior change</h2><h3 id="responsive"><a class="header-anchor" href="#responsive">#</a> Responsive</h3><p>Now Waline will be fully responsive. Calling Waline will return a <code>WalineInstance</code>. You can update the options of Waline by calling the <code>update()</code> method on <code>WalineInstance</code>, or use <code>destroy()</code> method on <code>WalineInstance</code> to destroy the instance.</p>',15),a=(0,n.Uk)("This change will enable Waline to support SPA applications, please see "),l=(0,n.Uk)("SPA Support"),s=(0,n.Uk)(" for details."),c=(0,n.uE)('<h3 id="initialization"><a class="header-anchor" href="#initialization">#</a> Initialization</h3><p>Since the Waline function now returns a Waline instance, we strengthened the detection when Waline was initialized. If Waline cannot mount correctly. We will return a <code>WalineErrorInstance</code> instance. There is only one <code>errMsg</code> property on the instance to indicate the cause of the initialization error.</p><div class="custom-container warning"><p class="custom-container-title">BREAKING CHANGE</p><p>If you just want Waline to update the number of comments and pageviews in the page, and do not need Waline <strong>mount on the current page</strong>, please DONOT set <strong><code>el</code> option</strong> explicitly.</p></div><h2 id="widget-change"><a class="header-anchor" href="#widget-change">#</a> Widget Change</h2><div class="custom-container warning"><p class="custom-container-title">BREAKING CHANGE</p><p>The <code>RecentComments</code> will now return <code>Promise&lt;{ comment: CommentData[], destroy: () =&gt; void }&gt;</code> instead of <code>Promise&lt;CommentData[]&gt;</code>.</p></div>',5),d={render:function(e,i){const o=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[t,(0,n.Wm)("p",null,[a,(0,n.Wm)(o,{to:"/en/guide/client/spa.html"},{default:(0,n.w5)((()=>[l])),_:1}),s]),c],64)}}}}]);