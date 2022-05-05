import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o,c,a as s,b as l,w as r,F as d,e as n,d as e}from"./app.aeb891c7.js";const p={},u=n(`<h2 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api" aria-hidden="true">#</a> Client API</h2><p>Waline provides three APIs:</p><ul><li><p><code>init</code>: Initialize Waline</p></li><li><p><code>commentCount</code>: Count comments</p></li><li><p><code>pageviewCount</code>: Count pageviews</p></li></ul><p>As well as:</p><ul><li><p><code>RecentComment</code>: Waline recent comments widget</p></li><li><p><code>version: string</code>: Waline client version</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p>The <code>init</code> API accepts a <code>WalineInitOptions</code> options and returns a <code>WalineInstance</code>.</p><p>Type:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const init: (options: WalineInitOptions) =&gt; WalineInstance;
</code></pre></div><p>Return:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineInstance {
  /**
   * Element where Waline is mounted
   *
   * @description when initialized with \`el: null\`, it will be \`null\`
   */
  el: HTMLElement | null;

  /**
   * Update Waline instance
   *
   * @description when not setting \`path\` option, it will be reset to \`window.location.pathname\`
   */
  update: (newOptions?: Partial&lt;Omit&lt;WalineInitOptions, &#39;el&#39;&gt;&gt;) =&gt; void;

  /**
   * Unmount and destroy Waline instance
   */
  destroy: () =&gt; void;
}
</code></pre></div>`,11),h=e("The initialization options accept all options supported by "),m=e("Waline Component"),g=e(", in addition, the following options are added."),v=n(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h3><ul><li>Type: <code>string | HTMLElement | null</code></li><li>Default: <code>&#39;#waline&#39;</code></li></ul><p>The DOM element to be mounted on initialization. It must be a valid <strong>CSS selector string</strong> or HTMLElement Object.</p><p>If you only want the counter below, set this option to <code>null</code>.</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Article comment count counter, when filled in a string, it will be used as a CSS selector.</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Pageview counter. When filled in a string, it will be used as a CSS selector.</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount" aria-hidden="true">#</a> commentCount</h2><p>The <code>commentCount</code> function receives the <code>WalineCommentCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><p>Type:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const commentCount: (options: WalineCommentCountOptions) =&gt; WalineAbort;
</code></pre></div><p>Options:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineCommentCountOptions {
  /**
   * Waline server url
   */
  serverURL: string;

  /**
   * Commment count CSS selector
   *
   * @default &#39;.waline-comment-count&#39;
   */
  selector?: string;

  /**
   * Path to be fetched by default
   *
   * @default window.location.pathname
   */
  path?: string;
}
</code></pre></div><p>Returns:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineAbort = (reason?: any) =&gt; void;
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount" aria-hidden="true">#</a> pageviewCount</h2><p>The <code>pageviewCount</code> function receives the <code>WalinePageviewCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><p>Type:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const pageviewCount: (options: WalinePageviewCountOptions) =&gt; WalineAbort;
</code></pre></div><p>Options:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalinePageviewCountOptions {
  /**
   * Waline server url
   */
  serverURL: string;

  /**
   * Pageview CSS selector
   *
   * @default &#39;.waline-pageview-count&#39;
   */
  selector?: string;

  /**
   * Path to be fetched and updated
   *
   * @default window.location.pathname
   */
  path?: string;

  /**
   * Whether update pageviews when fetching path result
   *
   * @default true
   */
  update?: boolean;
}
</code></pre></div><p>Returns:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineAbort = (reason?: any) =&gt; void;
</code></pre></div><h2 id="widgets" tabindex="-1"><a class="header-anchor" href="#widgets" aria-hidden="true">#</a> Widgets</h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments" aria-hidden="true">#</a> RecentComments</h3><p><code>RecentComments</code> is a widget displaying recent comments.</p><p>Type:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const RecentComments: (
  options: WalineRecentCommentsOptions
) =&gt; Promise&lt;WalineRecentCommentsResult&gt;;
</code></pre></div><p>Options:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineRecentCommentsOptions {
  /**
   * Waline serverURL
   */
  serverURL: string;

  /**
   * fetch number of latest comments
   */
  count: number;

  /**
   * Element to be mounted
   */
  el?: string | HTMLElement;
}
</code></pre></div><p>Returns:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineRecentCommentsResult {
  /**
   * Comment Data
   */
  comments: WalineComment[];

  /**
   * Umount widget
   */
  destroy: () =&gt; void;
}
</code></pre></div>`,35);function f(w,y){const t=a("RouterLink");return o(),c(d,null,[u,s("p",null,[h,l(t,{to:"/en/reference/component.html"},{default:r(()=>[m]),_:1}),g]),v],64)}var b=i(p,[["render",f],["__file","client.html.vue"]]);export{b as default};
