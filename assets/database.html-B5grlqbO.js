import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as d,d as r,f as e,a as i,e as n,r as l,o as c}from"./app-BoEQWyJC.js";const h={};function p(b,t){const a=l("RouteLink");return c(),o("div",null,[t[3]||(t[3]=d(`<p>Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.</p><p>You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.</p><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>MongoDB</span></a></h2><p><a href="https://mongodb.com" target="_blank" rel="noopener noreferrer">https://mongodb.com</a> official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has multiple hosts.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_HOST</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;,&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;,&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_PORT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[27017,27017,27017,27017</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_DB</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">waline</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_USER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">admin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">xxxx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_REPLICASET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">atlas-12cebf-shard-0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_AUTHSOURCE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">admin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MONGO_OPT_SSL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><p>Using MySQL to store data is also a good choice. Besides our own MySQL service, we can also use [FreeDB)(https://freedb.tech), which provides 25M of database support for free, or <a href="https://planetscale.com" target="_blank" rel="noopener noreferrer">PlanetScale</a> which only support paid plan now.</p><p>If you want to use MySQL as storage, you need to import <a href="https://github.com/walinejs/waline/blob/main/assets/waline.sql" target="_blank" rel="noopener noreferrer">waline.sql</a> first to create table and table structure, then set these environment variables in project.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>whether use SSL connection</td></tr></tbody></table><h2 id="tidb" tabindex="-1"><a class="header-anchor" href="#tidb"><span>TiDB</span></a></h2><p><a href="https://github.com/pingcap/tidb" target="_blank" rel="noopener noreferrer">TiDB</a> is an open source NewSQL database. <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer">TiDB Cloud</a> is the official online version, which provides 5GB of free quota for everyone to use.</p>`,13)),r("p",null,[t[1]||(t[1]=e("Please refer to ")),i(a,{to:"/en/guide/deploy/tidb.html"},{default:n(()=>t[0]||(t[0]=[e("Create TiDB database")])),_:1}),t[2]||(t[2]=e(" to understand the initialization process."))]),t[4]||(t[4]=d('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>TIDB_DB</code></td><td>✅</td><td></td><td>TiDB database name</td></tr><tr><td><code>TIDB_USER</code></td><td>✅</td><td></td><td>TiDB database user name</td></tr><tr><td><code>TIDB_PASSWORD</code></td><td>✅</td><td></td><td>TiDB database password</td></tr><tr><td><code>TIDB_HOST</code></td><td></td><td>127.0.0.1</td><td>Address of TiDB service</td></tr><tr><td><code>TIDB_PORT</code></td><td></td><td>4000</td><td>Port of TiDB service</td></tr><tr><td><code>TIDB_PREFIX</code></td><td></td><td><code>wl_</code></td><td>Table prefix of TiDB data table</td></tr><tr><td><code>TIDB_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>TiDB data table character set</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite"><span>SQLite</span></a></h2><p>Download <a href="https://github.com/walinejs/waline/blob/main/assets/waline.sqlite" target="_blank" rel="noopener noreferrer">waline.sqlite</a> to your server if you want to use SQLite. Then set these environment variables in project.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filename is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql"><span>PostgreSQL</span></a></h2><p><a href="https://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a> offers a free 512M database,while <a href="https://www.elephantsql.com/" target="_blank" rel="noopener noreferrer">elephantSQL</a> provides 20M PG database support for free. Same as MySQL, you need to import <a href="https://github.com/walinejs/waline/blob/main/assets/waline.pgsql" target="_blank" rel="noopener noreferrer">waline.pgsql</a> to create table and table structure before using PostgreSQL.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>set to <code>true</code> to use SSL connection</td></tr><tr><td><code>POSTGRES_DATABASE</code></td><td></td><td></td><td>alias for <code>PG_DB</code></td></tr><tr><td><code>POSTGRES_USER</code></td><td></td><td></td><td>alias for <code>PG_USER</code></td></tr><tr><td><code>POSTGRES_PASSWORD</code></td><td></td><td></td><td>alias for <code>PG_PASSWORD</code></td></tr><tr><td><code>POSTGRES_HOST</code></td><td></td><td>127.0.0.1</td><td>alias for <code>PG_HOST</code></td></tr><tr><td><code>POSTGRES_PORT</code></td><td></td><td>3211</td><td>alias for <code>PG_PORT</code></td></tr><tr><td><code>POSTGRES_PREFIX</code></td><td></td><td><code>wl_</code></td><td>alias for <code>PG_PREFIX</code></td></tr><tr><td><code>POSTGRES_SSL</code></td><td></td><td><code>false</code></td><td>alias for <code>POSTGRES_SSL</code></td></tr></tbody></table><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>GitHub</span></a></h2><p>Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click <kbd>Generate new token</kbd> to apply it at <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a>. Check the <strong>repo</strong> option in permission to obtain read and write permissions for repositories.</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>GITHUB_TOKEN</code></td><td>✅</td><td></td><td><a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">Personal access tokens</a></td></tr><tr><td><code>GITHUB_REPO</code></td><td>✅</td><td></td><td>repository name, such as <code>walinejs/waline</code></td></tr><tr><td>GITHUB_PATH</td><td></td><td></td><td>The data storage directory, such as <code>data</code> means it is stored in the <code>data</code> directory, root directory by default</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Due to performance, using GitHub is not recommended.</p></div><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom"><span>Custom</span></a></h2><p>Besides above database storage, support for other storage services can also be added.</p><p>If you want to help Waline supporting more storage services, you can fork the project and inherit the <a href="https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js" target="_blank" rel="noopener noreferrer">base class</a> and then implement the <code>select()</code>, <code>add()</code>, <code>update()</code> and <code>delete()</code> methods of the corresponding storage service and submit the PR.</p>',14))])}const m=s(h,[["render",p],["__file","database.html.vue"]]),S=JSON.parse('{"path":"/en/guide/database.html","title":"Multi-database service support","lang":"en-US","frontmatter":{"title":"Multi-database service support","icon":"database","order":2,"description":"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB. You only need to configure environment variables, and Waline wil...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/database.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/database.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Multi-database service support"}],["meta",{"property":"og:description","content":"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB. You only need to configure environment variables, and Waline wil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Multi-database service support\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"MongoDB","slug":"mongodb","link":"#mongodb","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":2,"title":"TiDB","slug":"tidb","link":"#tidb","children":[]},{"level":2,"title":"SQLite","slug":"sqlite","link":"#sqlite","children":[]},{"level":2,"title":"PostgreSQL","slug":"postgresql","link":"#postgresql","children":[]},{"level":2,"title":"GitHub","slug":"github","link":"#github","children":[]},{"level":2,"title":"Custom","slug":"custom","link":"#custom","children":[]}],"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"en/guide/database.md","autoDesc":true}');export{m as comp,S as data};
