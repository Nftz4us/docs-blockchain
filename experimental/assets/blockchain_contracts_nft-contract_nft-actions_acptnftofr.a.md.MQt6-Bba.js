import{_ as a,c as s,o as t,N as i}from"./chunks/framework.HE4KbJuF.js";const f=JSON.parse('{"title":"acptnftofr.a","description":"","frontmatter":{"title":"acptnftofr.a","order":38},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/acptnftofr.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/acptnftofr.a.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/acptnftofr.a.md"},n=i(`<h1 id="acptnftofr-a" tabindex="-1">acptnftofr.a <a class="header-anchor" href="#acptnftofr-a" aria-label="Permalink to &quot;acptnftofr.a&quot;">​</a></h1><p>Accept the offer made on Uniq.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Note that <code>acptnftofr.a</code> is used to accept the offer made by <code>mknftofr.a</code> only.</p><p>When the action is executed, the offer should not be expired and the Uniq should be valid (i.e., should have not been burned).</p><p>The offered price will be checked again to confirm that it should be no less than <code>minimum_resell_price</code> of the factory.</p><p>The Uniq will be transferred to the buyer, or the receiver if specified when the offer was made.</p><p>The amount of offered price will be split in the same manner as 2nd hand resale, and part of it will be transferred to the owner.</p><p>The promoter share, which was specified when <code>mknftofr.a</code> action was called, was transferred to the promoter specified as <code>promoter_id</code> argument, or to the default promoter if it is set in <code>saleshrlmcfg</code> table.</p><p>Shares will be calculated and distributed based on the <a href="./../../../general/antelope-ultra/2nd-hand-sale.html">2nd Hand Sale Policy</a>.</p><p>The offer will be removed from <code>nftoffer.a</code> table.</p><p>The Uniq ID will be removed from <code>buyoffer.a</code> table and if both <code>nft_ids</code> and <code>factory_ids</code> fields becomes empty, the buyer&#39;s record itself will be removed.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>name</td><td>String</td><td>Account who owns the Uniq</td></tr><tr><td>nft_id</td><td>uint64_t</td><td>Number</td><td>ID of Uniq will be accepted</td></tr><tr><td>offer_id</td><td>uint64_t</td><td>Number</td><td>ID of the offer made on Uniq</td></tr><tr><td>promoter_id</td><td>optional&lt;name&gt;</td><td>String/Null</td><td>Promoter account</td></tr><tr><td>memo</td><td>string</td><td>String</td><td>Memo</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acptnftofr.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;owner&quot;: &quot;alice&quot;, &quot;nft_id&quot;: 1, &quot;offer_id&quot;: 2, &quot;memo&quot;: &quot;accept the offer&quot;}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;acptnftofr.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                owner: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                nft_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                offer_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;accept the offer&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,18),h=[n];function l(o,r,p,d,c,k){return t(),s("div",null,h)}const g=a(e,[["render",l]]);export{f as __pageData,g as default};
