import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as o}from"./app.1819a339.js";const a={},n=o(`<p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p><p>Meanwhile, <code>@waline/client</code> also has built-in dark mode support.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><div class="language-css ext-css"><pre class="language-css"><code>:root {
  /* Font Size */
  --waline-font-size: 16px;

  /* Regular color */
  --waline-white: #fff;
  --waline-light-grey: #999;
  --waline-dark-grey: #666;

  /* Theme Color */
  --waline-theme-color: #27ae60;
  --waline-active-color: #2ecc71;

  /* Layout Color */
  --waline-color: #444;
  --waline-bgcolor: #fff;
  --waline-bgcolor-light: #f8f8f8;
  --waline-bgcolor-hover: #f0f0f0;
  --waline-border-color: #ddd;
  --waline-disable-bgcolor: #f8f8f8;
  --waline-disable-color: #bbb;
  --waline-code-bgcolor: #282c34;

  /* Special Color */
  --waline-bq-color: #f0f0f0;

  /* Avatar */
  --waline-avatar-size: 3.25rem;
  --waline-m-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);

  /* Badge */
  --waline-badge-color: #3498db;
  --waline-badge-font-size: 0.775em;

  /* Information */
  --waline-info-bgcolor: #f8f8f8;
  --waline-info-color: #999;
  --waline-info-font-size: 0.625em;

  /* Render choise */
  --waline-border: 1px solid var(--waline-border-color);
  --waline-avatar-radius: 50%;
  --waline-box-shadow: none;
}
</code></pre></div><h2 id="dark-mode-support" tabindex="-1"><a class="header-anchor" href="#dark-mode-support" aria-hidden="true">#</a> Dark mode support</h2><p>You can use the <code>dark</code> option to enable Waline&#39;s dark mode support.</p><p>Usually websites will enable dark mode support in two ways:</p><ul><li>Use the <code>@media</code> selector to automatically switch according to the device color mode status through <code>prefers-color-scheme</code></li><li>Dynamically apply othe dark mode color style by modifying the attributes and class of the dom root element (<code>html</code> or <code>body</code>).</li></ul><p>If you enable Waline on the site of the first method, you only need to set <code>dark</code> to <code>&#39;auto&#39;</code>.</p><p>For the second type of site, you need to set dark to the CSS selector that makes the dark mode effective. Here are a few examples:</p><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>vuepress-theme-hop v2</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li></ul></div><h3 id="darkmode-palette" tabindex="-1"><a class="header-anchor" href="#darkmode-palette" aria-hidden="true">#</a> Darkmode Palette</h3><p>When using the <code>dark</code> option to configure the dark mode, waline will use the following colors by default:</p><div class="language-css ext-css"><pre class="language-css"><code>/* \u2193 According to user settings */
darkmode-selector {
  /* Regular color */
  --waline-white: #000;
  --waline-light-grey: #666;
  --waline-dark-grey: #999;

  /* Layout color */
  --waline-color: #888;
  --waline-bgcolor: #1e1e1e;
  --waline-bgcolor-light: #272727;
  --waline-border-color: #333;
  --waline-disable-bgcolor: #444;
  --waline-disable-color: #272727;

  /* Special color */
  --waline-bq-color: #272727;

  /* Other color */
  --waline-info-bgcolor: #272727;
  --waline-info-color: #666;
}
</code></pre></div><p>If the above colors are different from the darkmode palette of your site, you can override them instead of setting the <code>dark</code> option.</p><h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow" aria-hidden="true">#</a> Box Shadow</h2><p>If you are using a theme that uses shadows (<code>box-shadow</code>) instead of borders, you can modify the display effect of Waline by modifying <code>--waline-border</code> and <code>--waline-box-shadow</code>, e.g.:</p><div class="language-css ext-css"><pre class="language-css"><code>:root {
  --waline-border: none;
  --waline-box-shadow: 0 12px 40px rgb(134 151 168 / 25%);
}

@media (prefers-color-scheme: dark) {
  body {
    --waline-box-shadow: 0 12px 40px #0f0e0d;
  }
}
</code></pre></div><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h2><p>If the above CSS variables cannot meet your custom requirements for Waline styles, you can write your own css file.</p>`,20);function r(t,l){return n}var c=e(a,[["render",r],["__file","style.html.vue"]]);export{c as default};
