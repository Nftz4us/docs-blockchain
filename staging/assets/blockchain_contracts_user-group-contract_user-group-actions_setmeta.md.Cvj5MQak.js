import{_ as a,c as s,o as t,N as i}from"./chunks/framework.1tZ7tdwO.js";const E=JSON.parse('{"title":"setmeta","description":"","frontmatter":{"title":"setmeta","order":2},"headers":[],"relativePath":"blockchain/contracts/user-group-contract/user-group-actions/setmeta.md","filePath":"blockchain/contracts/user-group-contract/user-group-actions/setmeta.md","lastUpdated":null}'),e={name:"blockchain/contracts/user-group-contract/user-group-actions/setmeta.md"},n=i(`<h2 id="setmeta-a" tabindex="-1"><code>setmeta.a</code> <a class="header-anchor" href="#setmeta-a" aria-label="Permalink to &quot;\`setmeta.a\`&quot;">​</a></h2><p>The <code>setmeta.a</code> action is the first version of the setmeta action for the Ultra blockchain. It allows users to set or update the <code>meta_uri</code> and <code>meta_hash</code> for an existing group in the <code>groups.a</code> table.</p><h3 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h3><ul><li>Only the creator of the group can update the group meta.</li><li>The creator pays for the RAM usage for the update.</li></ul><h3 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h3><table><thead><tr><th>Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Remarks</th></tr></thead><tbody><tr><td><code>creator</code></td><td><code>name</code></td><td><code>String</code></td><td>The account that originally created the group.</td></tr><tr><td><code>group_id</code></td><td><code>uint64_t</code></td><td><code>Number/String</code></td><td>The ID of the group to be modified.</td></tr><tr><td><code>meta_uri</code></td><td><code>optional&lt;string&gt;</code></td><td><code>String/Null</code></td><td>URI pointing to the group&#39;s off-chain metadata.</td></tr><tr><td><code>meta_hash</code></td><td><code>optional&lt;checksum256&gt;</code></td><td><code>String/Null</code></td><td>Hash of the group&#39;s metadata.</td></tr><tr><td><code>memo</code></td><td><code>string</code></td><td><code>String</code></td><td>A memo string.</td></tr></tbody></table><p><strong>Note</strong>:</p><ul><li>The <code>meta_uri</code> and <code>meta_hash</code> can be null or an empty string, except that the combination of a null/empty <code>meta_uri</code> and a non-null/non-empty <code>meta_hash</code> is not allowed.</li><li>The same pair of <code>meta_uri</code> and <code>meta_hash</code> cannot be set again if they already exist for the group.</li></ul><h3 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h3><p>To set or update the metadata of a group, use the following <code>cleos</code> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setmeta.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;creator&quot;: &quot;alice&quot;, &quot;group_id&quot;: 1, &quot;meta_uri&quot;: &quot;https://ultra/group/meta/germany&quot;, &quot;meta_hash&quot;: &quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;, &quot;memo&quot;: &quot;set group meta&quot;}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice@active</span></span></code></pre></div><h3 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h3><p>You can also use the following eosjs code to interact with this action:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eosio.group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setmeta.a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;actor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;group_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ultra/group/meta/germany&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;meta_hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;memo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set group meta&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,14),o=[n];function h(l,p,d,r,c,k){return t(),s("div",null,o)}const g=a(e,[["render",h]]);export{E as __pageData,g as default};
