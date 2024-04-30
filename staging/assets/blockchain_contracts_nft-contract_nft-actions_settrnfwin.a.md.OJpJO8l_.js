import{_ as a,c as s,o as t,N as i}from"./chunks/framework.I0_e-zsE.js";const f=JSON.parse('{"title":"settrnfwin.a","description":"","frontmatter":{"title":"settrnfwin.a","order":28},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/settrnfwin.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/settrnfwin.a.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/settrnfwin.a.md"},e=i(`<h1 id="settrnfwin-a-set-transfer-window" tabindex="-1">settrnfwin.a - set transfer window <a class="header-anchor" href="#settrnfwin-a-set-transfer-window" aria-label="Permalink to &quot;settrnfwin.a - set transfer window&quot;">​</a></h1><p>Allows a token manager to update the <code>transfer_window_start</code> and <code>transfer_window_end</code> for an existing token factory.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This action is disabled.</p><p>Refer to <em><a href="./../../../../tutorials/uniq-factories/factory-management/exchange-a-uniq-using-smart-contract.html">exchange a uniq guide</a></em> or <em><a href="./../../../../tutorials/uniq-factories/factory-management/factory-purchase-options.html">swap uniqs using purchase options</a></em> pages for alternative migration solutions to a new factory</p></div><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Required authorization is a token factory manager</p><p>Transferability can only be update from this:</p><ul><li>Uniq is never transferable (<code>transfer_window_start</code> = <code>null</code>, <code>transfer_window_end</code> = <code>1970-01-01T00:00:00</code>)</li></ul><p>to one of these:</p><ul><li>Uniq is always transferable (<code>transfer_window_start</code>=null, <code>transfer_window_end</code>=null)</li><li>There is a start date (<code>transfer_window_start</code>=X, <code>transfer_window_end</code>=null)</li><li>There is an end date (<code>transfer_window_start</code>=null, <code>transfer_window_end</code>=Y)</li><li>There is a full transfer window (<code>transfer_window_start</code>=X, <code>transfer_window_end</code>=Y)</li></ul><p><strong>Parameter validation</strong></p><ul><li><code>token_factory_id</code> is required and a token factory for the provided ID must exist.</li><li>If provided, <code>transfer_window_end</code> should be greater than <code>transfer_window_start</code>.</li></ul><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>Javascript Type</th><th>Example</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td><td>123</td></tr><tr><td>transfer_window_start</td><td>optional&lt;time_point_sec&gt;</td><td>string</td><td>&quot;2023-01-01T00:00:00&quot;</td></tr><tr><td>transfer_window_end</td><td>optional&lt;time_point_sec&gt;</td><td>string</td><td>&quot;2023-01-01T12:00:00&quot;</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> settrnfwin.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[ 123, &quot;2023-01-01T00:00:00&quot;, &quot;2023-01-01T12:00:00&quot; ]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manager.acc</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;settrnfwin.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;manager.acc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                transfer_window_start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-01-01T00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                transfer_window_end: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-01-01T12:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,17),r=[e];function l(o,h,d,p,c,k){return t(),s("div",null,r)}const _=a(n,[["render",l]]);export{f as __pageData,_ as default};
