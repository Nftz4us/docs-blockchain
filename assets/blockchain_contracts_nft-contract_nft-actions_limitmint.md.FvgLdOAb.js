import{_ as i,c as a,o as t,N as s}from"./chunks/framework.JweEx2cs.js";const E=JSON.parse('{"title":"limitmint","description":"","frontmatter":{"title":"limitmint","order":15},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/limitmint.md","filePath":"blockchain/contracts/nft-contract/nft-actions/limitmint.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/limitmint.md"},e=s(`<h1 id="limitmint" tabindex="-1">limitmint <a class="header-anchor" href="#limitmint" aria-label="Permalink to &quot;limitmint&quot;">​</a></h1><p>Sets/Resets the minting limit per account of a token factory</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><ul><li><p>limitmint action first verifies the parameters passed to it.</p><pre><code>* token_factory_id - the token factory ID

* account_minting_limit - the number of minting limit per account, or 0 to invalidate the setting
</code></pre><p>if not 0 and token factory has a valid max_mintable_tokens (i.e., not null), account_minting_limit should be no more than max_mintable_tokens.</p><pre><code>* memo - the memo string to accompany the transaction, should be no more than 256 bytes

* The action should be called with the token factory manager(asset_manager)’s permission.

* The action stores account_minting_limit parameter value to the token factory’s account_minting_limit field. If account_minting_limit of 0 is specified, the action resets the token factory’s account_minting_limit field to null.

* Each time when issue action is called, if the token factory has a valid account_minting_limit, minted number of tokens is recorded for each of the token receiver&#39;s account in mintstat (mintstat.a) table. If the number of minted tokens has been already reached  account_minting_limit , issue action prevents the receiver from getting any more tokens.
</code></pre></li></ul><h2 id="ram-usage" tabindex="-1">RAM Usage <a class="header-anchor" href="#ram-usage" aria-label="Permalink to &quot;RAM Usage&quot;">​</a></h2><p>Setting account_minting_limit will consume 4 bytes of RAM</p><p>RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.</p><p>If the RAM usage is exceed factory maximum pack size of 1920 bytes, action will fail.</p><p>When update or reset account_minting_limit, there is no restriction on RAM usage.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Name</th><th>C++ Type</th><th>Javascript Type</th></tr></thead><tbody><tr><td>token_factory_id</td><td>unint64_t</td><td>number or string</td></tr><tr><td>account_minting_limit</td><td>uint32_t</td><td>number or string</td></tr><tr><td>memo</td><td>string</td><td>string</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - Cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - Cleos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cleos push action eosio.nft.ft limitmint &#39;{&quot;token_factory_id&quot;: 5, &quot;account_minting_limit&quot;: 100, &quot;memo&quot;: &quot;limitmint time&quot;}&#39; -p factory.manager@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;limitmint&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;factory.manager&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    account_minting_limit: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;limitmint time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="migration-from-v0-to-v1" tabindex="-1">Migration from v0 to v1 <a class="header-anchor" href="#migration-from-v0-to-v1" aria-label="Permalink to &quot;Migration from v0 to v1&quot;">​</a></h2><p>There is no interface change</p><h3 id="behavior-change" tabindex="-1">behavior change <a class="header-anchor" href="#behavior-change" aria-label="Permalink to &quot;behavior change&quot;">​</a></h3><p>has no changes in business logic</p><h3 id="changes-in-tables-to-read-write" tabindex="-1">changes in tables to read/write <a class="header-anchor" href="#changes-in-tables-to-read-write" aria-label="Permalink to &quot;changes in tables to read/write&quot;">​</a></h3><p>it will migrate factory.a to factory.b, before updating minting limit of the factory.b object</p>`,21),l=[e];function o(h,r,c,p,k,d){return t(),a("div",null,l)}const g=i(n,[["render",o]]);export{E as __pageData,g as default};
