import{_ as s,c as a,o as i,N as n}from"./chunks/framework.F4ceOzBN.js";const u=JSON.parse('{"title":"Updating Metadata","description":"","frontmatter":{"title":"Updating Metadata","order":-99992},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/updating-metadata.md","filePath":"tutorials/uniq-factories/uniq-variants/updating-metadata.md","lastUpdated":null}'),t={name:"tutorials/uniq-factories/uniq-variants/updating-metadata.md"},e=n(`<h1 id="updating-uniqs" tabindex="-1">Updating uniqs <a class="header-anchor" href="#updating-uniqs" aria-label="Permalink to &quot;Updating uniqs&quot;">​</a></h1><p>An important aspect of the Ultra NFT standard is metadata updates. Game publishers should be able to change uniq&#39;s traits based on certain events in their games. On the other hand integrators should be able to verify its authenticity. Let&#39;s see how it works with the examples below:</p><h2 id="creating-a-factory-issuing-tokens" tabindex="-1">Creating a factory &amp; Issuing tokens <a class="header-anchor" href="#creating-a-factory-issuing-tokens" aria-label="Permalink to &quot;Creating a factory &amp; Issuing tokens&quot;">​</a></h2><p>Let&#39;s <a href="./../../../blockchain/contracts/nft-contract/nft-actions/create.b.html"><code>create</code></a> a factory first and <a href="./../../../blockchain/contracts/nft-contract/nft-actions/issue.b.html"><code>issue</code></a> a token:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;asset_manager&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;asset_creator&quot;: &quot;ultra&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;minimum_resell_price&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;resale_shares&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;receiver&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;basis_point&quot;: 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;mintable_window_start&quot;: &quot;2021-05-31T00:00:00&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;mintable_window_end&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;trading_window_start&quot;: &quot;2021-05-31T00:00:00&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;trading_window_end&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;recall_window_end&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;max_mintable_tokens&quot;: 10000,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;lockup_time&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;conditionless_receivers&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;stat&quot;: 0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;factory_uri&quot;: &quot;ipfs://my_factory_uri&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;factory_hash&quot;: &quot;475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;authorized_minters&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;account_minting_limit&quot;: 100,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;transfer_window_start&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;transfer_window_end&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;default_token_uri&quot;: &quot;ipfs://my_default_token&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;default_token_hash&quot;: &quot;475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;lock_hash&quot;: null</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Issue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> issue.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;to&quot;: &quot;ultra&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_configs&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;token_factory_id&quot;: 0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;amount&quot;: 1,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;custom_data&quot;: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;authorizer&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_metadata&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_uri&quot;: &quot;ipfs://uniq_uri&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_hash&quot;:&quot;475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft</span></span></code></pre></div><p>After a factory and token is minted we can look up their ids from <code>factory.b</code> and <code>token.b</code> tables respectively. Let&#39;s say they&#39;re both <code>0</code> for the sake of this tutorial.</p><h2 id="updating-factory-metadata" tabindex="-1">Updating factory metadata <a class="header-anchor" href="#updating-factory-metadata" aria-label="Permalink to &quot;Updating factory metadata&quot;">​</a></h2><p>If a content creator reuploads a new factory metadata they have to use <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setmeta.b.html"><code>setmeta.b</code></a> to change the corresponding data:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setmeta.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;updating&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ipfs://new_factory_uri&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;06528450506980cf5ab3a5cfeb870cb3109acd2fe6094c00d4e4ab31ac129b35&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft</span></span></code></pre></div><h2 id="updating-a-default-token" tabindex="-1">Updating a default token <a class="header-anchor" href="#updating-a-default-token" aria-label="Permalink to &quot;Updating a default token&quot;">​</a></h2><p>Default token metadata is used as a fallback mechanism whenever there&#39;s no uri for a token. Here&#39;s how one updates on-chain data for it using <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setdflttkn.html">setdflttkn</a> action:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setdflttkn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;reuploading default token&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;https://s3...&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft</span></span></code></pre></div><h2 id="update-a-uniq" tabindex="-1">Update a uniq <a class="header-anchor" href="#update-a-uniq" aria-label="Permalink to &quot;Update a uniq&quot;">​</a></h2><p>Updating uniq&#39;s is done with <a href="./../../../blockchain/contracts/nft-contract/nft-actions/settknmeta.html"><code>settknmeta</code></a> action:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> settknmeta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ultra&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;update hash 2&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ipfs://uniq_uri&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;cccf7bb05104ee6737d94a7f85b3cf4a9f44f67f2d198572c155721a07395613&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft@active</span></span></code></pre></div><p>It&#39;s important to reiterate that whenever you make any changes to metadata (including images updates) for a token/factory you should also update corresponding data onchain, i.e uris/hashes. Otherwise, integrators won&#39;t be able to pick up the changes.</p><h2 id="locking-changes" tabindex="-1">Locking changes <a class="header-anchor" href="#locking-changes" aria-label="Permalink to &quot;Locking changes&quot;">​</a></h2><p>For certain usecases it might make sense to make a factory immutable. Luckily there&#39;s a <a href="./../../../blockchain/contracts/nft-contract/nft-actions/lckfactory.html"><code>lckfactory</code></a> action which enables a manager to disable any content updates. This might be useful for an nft art gallery as it allows the users to be sure theirupdating_metadata.md artwork will never change.</p><p><strong>THE CHANGE IS IRREVERSIBLE:</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lckfactory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[0]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft@active</span></span></code></pre></div><p>Updating a token hash of factory <code>0</code> afterwards will fail:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> settknmeta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ultra&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;update hash 2&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ipfs://&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;cccf7bb05104ee6737d94a7f85b3cf4a9f44f67f2d198572c155721a07395613&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra.nft.ft@active</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10500149</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Details:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span></span></code></pre></div>`,22),l=[e];function h(p,k,o,F,r,d){return i(),a("div",null,l)}const g=s(t,[["render",h]]);export{u as __pageData,g as default};
