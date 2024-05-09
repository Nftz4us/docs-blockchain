import{_ as s,c as a,o as i,N as t}from"./chunks/framework.UwpMnNk-.js";const f=JSON.parse('{"title":"stofrcfg.a","description":"","frontmatter":{"title":"stofrcfg.a","order":36},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/stofrcfg.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/stofrcfg.a.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/stofrcfg.a.md"},e=t(`<h1 id="stofrcfg-a" tabindex="-1">stofrcfg.a <a class="header-anchor" href="#stofrcfg-a" aria-label="Permalink to &quot;stofrcfg.a&quot;">​</a></h1><p>Set global Uniq offer configuration</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Set global configurations for all Uniq offers that will be made on either a Uniq or a Uniq factory.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Only <code>ultra.nft.ft</code> account can set Uniq offer configurations.</p><p>The action stores the configurations to <code>offercfg.a</code> singleton table with the specified arguments.</p><p>All fields are optional, the action will only update the specified arguments and leave the rest the same as existing entry or as the default value if there’s no existing entry.</p><p>The action even accepts the same values as the ones currently stored in <code>offercfg.a</code>.</p><p><code>eosio.nft.ft</code> pays RAM usage.</p><p><code>min_price</code> must be positive, and only supports UOS and USD.</p><p>Both <code>min_duration</code> and <code>max_duration</code> must be positive, with <code>max_duration</code> must be greater than <code>min_duration</code>.</p><p><code>max_active_offer_per_user</code> must also be positive.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>min_price</td><td>optional&lt;asset&gt;</td><td>String/Null</td><td>Minimum offer price</td></tr><tr><td>min_duration</td><td>optional&lt;uint32_t&gt;</td><td>Number/String/Null</td><td>Minimum offer duration</td></tr><tr><td>max_duration</td><td>optional&lt;uint32_t&gt;</td><td>Number/String/Null</td><td>Maximum offer duration</td></tr><tr><td>max_active_offer_per_user</td><td>optional&lt;uint32_t&gt;</td><td>Number/String/Null</td><td>Maximum number of offers, which includes both Uniq and factory offers</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stofrcfg.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;min_price&quot;: &quot;1.00000000 UOS&quot;, &quot;min_duration&quot;: 86400, &quot;max_duration&quot;: 15552000, &quot;max_active_offer_per_user&quot;: 20}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;stofrcfg.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                min_price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.00000000 UOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                min_duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                max_duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15552000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                max_active_offer_per_user: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,19),l=[e];function h(r,o,p,c,d,k){return i(),a("div",null,l)}const g=s(n,[["render",h]]);export{f as __pageData,g as default};
