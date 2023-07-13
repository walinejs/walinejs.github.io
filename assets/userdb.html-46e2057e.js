import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as s,e as n,f as c,w as l,d as i}from"./app-945c9678.js";const r={},u=s("p",null,"Although Waline provides a comment service based on user system storage, this user system is Waline's own. Many third-party websites have their own user systems, so some niche users want to integrate their own user systems into Waline.",-1),k=i(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
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
</code></pre></div><p>Through the above configuration, we have isolated the reading of the Waline user table. Next, we need to do field mapping for the input and output parameters. The input parameters map the fields back to the table fields in the third-party system, and the output parameters map the table fields in the third-party system back to Waline fields.</p><p>If you are more familiar with TypeScript, you can refer to the type definition below.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">strNum</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above can only ensure that there is no problem with the query of the database, but limited by the different encryption methods of the password, the encryption method inside Waline cannot be consistent with the encryption method used in the third-party website. For this situation, you need to customize the method of password encryption and verification.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
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
</code></pre></div><p>Based on the above two expansion capabilities, we can realize that Waline can use the user system of the third-party website.</p>`,7);function d(m,v){const a=e("RouterLink");return p(),o("div",null,[u,s("p",null,[n("We can use "),c(a,{to:"/en/cookbook/customize/database.html"},{default:l(()=>[n("custom database service")]),_:1}),n(" to realize this function, the essence is to do the mapping of the underlying table.")]),k])}const f=t(r,[["render",d],["__file","userdb.html.vue"]]);export{f as default};
