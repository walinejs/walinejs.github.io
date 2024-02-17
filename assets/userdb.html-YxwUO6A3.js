import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,b as n,e as s,f as c,w as i,d as l}from"./app--NZXsjJc.js";const r={},u=n("p",null,"Although Waline provides a comment service based on user system storage, this user system is Waline's own. Many third-party websites have their own user systems, so some niche users want to integrate their own user systems into Waline.",-1),k=l(`<div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Application <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserModel</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">model</span><span class="token punctuation">(</span><span class="token parameter">tableName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tableName <span class="token operator">!==</span> <span class="token string">&#39;Users&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Through the above configuration, we have isolated the reading of the Waline user table. Next, we need to do field mapping for the input and output parameters. The input parameters map the fields back to the table fields in the third-party system, and the output parameters map the table fields in the third-party system back to Waline fields.</p><p>If you are more familiar with TypeScript, you can refer to the type definition below.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">strNum</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">UserFields</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;objectId&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;display_name&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;email&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;password&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;type&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;label&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;url&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;avatar&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;github&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;twitter&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;facebook&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;google&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;weibo&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;qq&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;2fa&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;createdAt&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;updatedAt&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">UserData</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>UserFields<span class="token punctuation">,</span> strNum<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">UsersWhere</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>UserFields<span class="token punctuation">,</span> strNum <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token string">&#39;IN&#39;</span><span class="token punctuation">,</span> strNum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">UsersOptions</span> <span class="token punctuation">{</span>
  field<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  desc<span class="token operator">?</span><span class="token operator">:</span> UserFields<span class="token punctuation">;</span>
  limit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  offset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UsersModel</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">select</span><span class="token operator">:</span> <span class="token punctuation">(</span>where<span class="token operator">:</span> UsersWhere<span class="token punctuation">,</span> options<span class="token operator">:</span> UsersOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> UserData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>UserData<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> UserData<span class="token punctuation">;</span>
  <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>UserData<span class="token operator">&gt;</span><span class="token punctuation">,</span> where<span class="token operator">:</span> UsersWhere<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> UserData<span class="token punctuation">;</span>
  <span class="token function-variable function">delete</span><span class="token operator">:</span> <span class="token punctuation">(</span>where<span class="token operator">:</span> UsersWhere<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function-variable function">count</span><span class="token operator">:</span> <span class="token punctuation">(</span>where<span class="token operator">:</span> UsersWhere<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">model</span><span class="token punctuation">(</span>modelName<span class="token punctuation">)</span><span class="token operator">:</span> UsersModel <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modelName <span class="token operator">!==</span> <span class="token string">&#39;Users&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above can only ensure that there is no problem with the query of the database, but limited by the different encryption methods of the password, the encryption method inside Waline cannot be consistent with the encryption method used in the third-party website. For this situation, you need to customize the method of password encryption and verification.</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Application <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserModel</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token function">encryptPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">{</span>
       <span class="token function">hashPassword</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token parameter">password<span class="token punctuation">,</span> storeHash</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Based on the above two expansion capabilities, we can realize that Waline can use the user system of the third-party website.</p>`,7);function d(m,v){const a=t("RouteLink");return p(),o("div",null,[u,n("p",null,[s("We can use "),c(a,{to:"/en/cookbook/customize/database.html"},{default:i(()=>[s("custom database service")]),_:1}),s(" to realize this function, the essence is to do the mapping of the underlying table.")]),k])}const y=e(r,[["render",d],["__file","userdb.html.vue"]]),g=JSON.parse(`{"path":"/en/cookbook/customize/userdb.html","title":"Custom User System","lang":"en-US","frontmatter":{"title":"Custom User System","icon":"users","description":"Although Waline provides a comment service based on user system storage, this user system is Waline's own. Many third-party websites have their own user systems, so some niche u...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/cookbook/customize/userdb.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/cookbook/customize/userdb.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Custom User System"}],["meta",{"property":"og:description","content":"Although Waline provides a comment service based on user system storage, this user system is Waline's own. Many third-party websites have their own user systems, so some niche u..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T05:33:42.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T05:33:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Custom User System\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-17T05:33:42.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1681636169000,"updatedTime":1686980022000,"contributors":[{"name":"Austin Lee","email":"i@imnerd.org","commits":1},{"name":"lizheming","email":"i@imnerd.org","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"en/cookbook/customize/userdb.md","localizedDate":"April 16, 2023","autoDesc":true}`);export{y as comp,g as data};