import{_ as s,c as i,o as a,N as t}from"./chunks/framework.RWhliK3J.js";const u=JSON.parse('{"title":"MSIG Proposals","description":"","frontmatter":{"title":"MSIG Proposals","outline":[0,4],"order":-96},"headers":[],"relativePath":"blockchain/block-producers/maintenance/multisignature-proposals.md","filePath":"blockchain/block-producers/maintenance/multisignature-proposals.md","lastUpdated":null}'),e={name:"blockchain/block-producers/maintenance/multisignature-proposals.md"},o=t('<h1 id="msig-proposals" tabindex="-1">MSIG Proposals <a class="header-anchor" href="#msig-proposals" aria-label="Permalink to &quot;MSIG Proposals&quot;">​</a></h1><p>Making proposals on-chain requires both Ultra and Block Producers to approve a proposal. A proposal is a series of actions and/or changes that are meant to be executed at the time of approval. Once Ultra and Block Producers approve of these changes then the code gets executed.</p><h3 id="important-steps-before-resignation-to-eosio-msigs" tabindex="-1">Important steps before resignation to eosio.msigs <a class="header-anchor" href="#important-steps-before-resignation-to-eosio-msigs" aria-label="Permalink to &quot;Important steps before resignation to eosio.msigs&quot;">​</a></h3><p>We need to do <strong>setpriv</strong> on the <strong>eosio.msig</strong> contract to allow it to be handled by other Block Producers. The following line will solve the issue, and allow other Block Producers to control the <strong>eosio.prods</strong> account properly.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos push action eosio setpriv </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[&quot;eosio.msig&quot;, 1]&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p eosio@active</span></span></code></pre></div><h2 id="creating-a-proposal" tabindex="-1">Creating a Proposal <a class="header-anchor" href="#creating-a-proposal" aria-label="Permalink to &quot;Creating a Proposal&quot;">​</a></h2><p>Proposals use the multisig option inside of the built-in cleos interface. It can be done through the following action.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig propose </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proposal_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requested_permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trx_permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposal_exp_in_hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li><p><strong>Proposal_Name</strong></p><ul><li><p>The name of the proposal.</p></li><li><p>Needs to be less than or equal to 12 characters.</p></li><li><p>Needs to follow standard EOS name rules.</p></li></ul></li><li><p><strong>Requested_Permissions</strong></p><ul><li>A JSON String or filename defining requested permissions.</li></ul></li><li><p><strong>Trx_Permission</strong></p><ul><li>A JSON string or filename defining transaction permissions.</li></ul></li><li><p><strong>Contract</strong></p><ul><li>The contract in which the deferred transaction should go to.</li></ul></li><li><p><strong>Action</strong></p><ul><li>The action for the deferred transaction.</li></ul></li><li><p><strong>Data</strong></p><ul><li>A JSON string or filename defining the action to propose.</li></ul></li><li><p><strong>Proposer</strong></p><ul><li>An account proposing the transaction.</li></ul></li><li><p><strong>Proposal_Expiration</strong></p><ul><li><p>The time in hours until this transaction becomes expired.</p></li><li><p>Optional</p></li></ul></li></ul><p><strong>Example:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig propose proposalname </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[{&quot;actor&quot;: &quot;producacnt11&quot;, &quot;permission&quot;: &quot;active&quot;}, {&quot;actor&quot;: &quot;producacnt12&quot;, &quot;permission&quot;: &quot;active&quot;}, {&quot;actor&quot;: &quot;producacnt13&quot;, &quot;permission&quot;: &quot;active&quot;}, {&quot;actor&quot;: &quot;ultra&quot;, &quot;permission&quot;: &quot;active&quot;}]&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[{&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eosio setacctram </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;account&quot;:&quot;producacnt11&quot;, &quot;ram_bytes&quot;:&quot;5000&quot;}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p ultra</span></span></code></pre></div><p>An alternative to the above proposal is <strong>propose_trx</strong> which is a more flexible version of the above code.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig propose_trx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requested_perms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> or</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="reviewing-a-proposal" tabindex="-1">Reviewing a Proposal <a class="header-anchor" href="#reviewing-a-proposal" aria-label="Permalink to &quot;Reviewing a Proposal&quot;">​</a></h2><p>You can always review the current proposal by reviewing who originally published it and then seeing what permissions are required under</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig review </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proposer_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposal_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Example:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig review ultra setacctrm</span></span></code></pre></div><h2 id="approving-a-proposal" tabindex="-1">Approving a Proposal <a class="header-anchor" href="#approving-a-proposal" aria-label="Permalink to &quot;Approving a Proposal&quot;">​</a></h2><p>Proposals must be approved by both Ultra and a handful of producers on the chain. This can be done with the following action. Note that Ultra is required for EVERY proposal. Otherwise, it will not be approved.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig approve </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proposer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposal_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposal_hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="canceling-a-proposal" tabindex="-1">Canceling a Proposal <a class="header-anchor" href="#canceling-a-proposal" aria-label="Permalink to &quot;Canceling a Proposal&quot;">​</a></h2><p>Proposals can only be canceled by the original owner or Ultra. Ultra reserves special veto rights over proposals.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig cancel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proposer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proposal_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Example:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig cancel ultra setacctram</span></span></code></pre></div><h2 id="invalidate" tabindex="-1">Invalidate <a class="header-anchor" href="#invalidate" aria-label="Permalink to &quot;Invalidate&quot;">​</a></h2><p>When a proposal is changed then it is often appropriate to invalidate all signatures on the contract. This can be done through the invalidate action.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig invalidate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">invalidator_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><strong>Example:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cleos multisig cancel ultra setacctram</span></span></code></pre></div>',31),p=[o];function l(n,r,h,c,k,d){return a(),i("div",null,p)}const E=s(e,[["render",l]]);export{u as __pageData,E as default};
