import{_ as s,c as i,o as a,N as t}from"./chunks/framework.wVj9vBva.js";const E=JSON.parse('{"title":"rmuser","description":"","frontmatter":{"title":"rmuser","order":4},"headers":[],"relativePath":"blockchain/contracts/user-group-contract/user-group-actions/rmuser.md","filePath":"blockchain/contracts/user-group-contract/user-group-actions/rmuser.md","lastUpdated":null}'),e={name:"blockchain/contracts/user-group-contract/user-group-actions/rmuser.md"},o=t(`<h2 id="rmuser-a" tabindex="-1"><code>rmuser.a</code> <a class="header-anchor" href="#rmuser-a" aria-label="Permalink to &quot;\`rmuser.a\`&quot;">​</a></h2><p>The <code>rmuser.a</code> action is the first version of the <code>rmuser</code> action in the Ultra blockchain. This action allows the creator of a group to remove one or more users from a specified group. The user account names will be removed from the <code>users.a</code> table and the <code>nr_users</code> field in the <code>groups.a</code> table will be updated accordingly.</p><h3 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h3><ul><li>The creator of the group can remove users from it.</li><li>The <code>nr_users</code> field in <code>groups.a</code> table is decremented by the number of users removed.</li><li>The action will fail if any of the user names are not in the group.</li></ul><h3 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h3><table><thead><tr><th>Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Remarks</th></tr></thead><tbody><tr><td><code>creator</code></td><td><code>name</code></td><td><code>String</code></td><td>The account that originally created the group.</td></tr><tr><td><code>group_id</code></td><td><code>uint64_t</code></td><td><code>Number/String</code></td><td>The ID used to identify the group to remove the user from.</td></tr><tr><td><code>users</code></td><td><code>vector&lt;name&gt;</code></td><td><code>Array of String</code></td><td>The names of the users to be removed from the group.</td></tr><tr><td><code>memo</code></td><td><code>string</code></td><td><code>String</code></td><td>A memo string.</td></tr></tbody></table><p><strong>Note</strong>:</p><ul><li>The <code>creator</code> should be the original creator of the group specified by <code>group_id</code>.</li><li>The <code>users</code> array should not be empty.</li></ul><h3 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h3><p>To remove users from a group, use the following <code>cleos</code> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rmuser.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;creator&quot;: &quot;bob&quot;, &quot;group_id&quot;: 1, &quot;users&quot; : [&quot;carol&quot;, &quot;daniel&quot;], &quot;memo&quot;: &quot;remove two users&quot;}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bob@active</span></span></code></pre></div><h3 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h3><p>You can also use the following eosjs code snippet to remove users from a group:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eosio.group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rmuser.a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;actor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;group_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;users&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;carol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;daniel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;memo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;remove two users&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,14),n=[o];function r(h,l,p,d,c,k){return a(),i("div",null,n)}const g=s(e,[["render",r]]);export{E as __pageData,g as default};
