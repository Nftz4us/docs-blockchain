import{_ as s,c as i,o as t,N as a}from"./chunks/framework.HE4KbJuF.js";const y=JSON.parse('{"title":"addkeys.a","description":"","frontmatter":{"title":"addkeys.a","order":49},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/addkeys.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/addkeys.a.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/nft-actions/addkeys.a.md"},e=a(`<h1 id="addkeys-a" tabindex="-1">addkeys.a <a class="header-anchor" href="#addkeys-a" aria-label="Permalink to &quot;addkeys.a&quot;">​</a></h1><p>Add key pairs for Uniq factory</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The manager of an Uniq factory should be able to add one or more key pairs at the factory level at any time, which means key pairs at the factory level can change over time. When that happens, all Uniqs minted from that factory should be able to use all key pairs no matter when minted.</p><p>Key <code>name</code> has to be unique.</p><p>Key <code>type</code> is the data type of the value, and it has to be in the supported list from <code>keytypes</code> table.</p><p><code>edit_rights</code> define which permission can edit the value including manager | owner | authorized editor | user group.</p><p><code>editor</code> this is authorized editor mentioned above, and it required to have at least one account here.</p><p><code>default_value</code> has to match the key <code>type</code>, like integer if it&#39;s <code>uint</code> or <code>int</code>. Also, if the type is an array, total element cannot exceed the limit from <a href="./setktypes.html"><code>keytypes</code> action</a>. In case of the <code>string</code> or <code>string[]</code>, total character cannot exceed the limit.</p><p>Factory RAM payment will be calculated based on the usage of <code>key_defs</code> which include some fixed RAM usage and usage which will determined by the key <code>type</code>. And the payment is non-refundable.</p><p>Uniq RAM payment for the new key will be calculated based on how many Uniq are already minted from factory. And this payment will be put into factory on-chain RAM vault, which will be refunded when Uniq is burn.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>The properties of this type are provided below:</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>factory_id</td><td>uint64_t</td><td>Number</td><td>ID of the Uniq factory for which key pairs will be added.</td></tr><tr><td>key_defs</td><td>std::vector&lt;key_def_action&gt;</td><td>Object[]</td><td>The definition of the key including name, type, edit right, editors and default values.</td></tr><tr><td>memo</td><td>string</td><td>String</td><td>Memo</td></tr></tbody></table><h3 id="key-def-action-interface" tabindex="-1"><code>key_def_action</code> interface <a class="header-anchor" href="#key-def-action-interface" aria-label="Permalink to &quot;\`key_def_action\` interface&quot;">​</a></h3><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>String</td><td>The name of the key, needs to be unique.</td></tr><tr><td>type</td><td>string</td><td>String</td><td>The type of the value stored in the key.</td></tr><tr><td>edit_rights</td><td>uint8_t</td><td>Number</td><td>Bitmask, determines who can edit the key including asset manager, owner, authorized editor or user group.</td></tr><tr><td>editors</td><td>std::vector&lt;name&gt;</td><td>String[]</td><td>The editor if authorized editor is set.</td></tr><tr><td>default_value</td><td>std::optional&lt;key_value_store&gt;</td><td>Object</td><td>The default value of the key which needs to match with type.</td></tr></tbody></table><p><code>key_value_store</code> will be an array with first element is type of the value and second is the value. Here is the support list and example:</p><table><thead><tr><th>Value Type</th><th>Key Def Type string</th><th>Example</th></tr></thead><tbody><tr><td>int8</td><td>int8</td><td>[&quot;int8&quot;, 0]</td></tr><tr><td>int16</td><td>int16</td><td>[&quot;int16&quot;, 0]</td></tr><tr><td>int32</td><td>int32</td><td>[&quot;int32&quot;, 0]</td></tr><tr><td>int64</td><td>int64</td><td>[&quot;int64&quot;, 0]</td></tr><tr><td>uint8</td><td>uint8</td><td>[&quot;uint8&quot;, 0]</td></tr><tr><td>uint16</td><td>uint16</td><td>[&quot;uint16&quot;, 0]</td></tr><tr><td>uint32</td><td>uint32</td><td>[&quot;uint32&quot;, 0]</td></tr><tr><td>uint64</td><td>uint64</td><td>[&quot;uint64&quot;, 0]</td></tr><tr><td>float</td><td>float32</td><td>[&quot;float32&quot;, 0.1]</td></tr><tr><td>double</td><td>float64</td><td>[&quot;float64&quot;, 0.1]</td></tr><tr><td>string</td><td>string</td><td>[&quot;string&quot;, &quot;a&quot;]</td></tr></tbody></table><h3 id="edit-rights-bitmask-breakdown" tabindex="-1"><code>edit_rights</code> bitmask breakdown <a class="header-anchor" href="#edit-rights-bitmask-breakdown" aria-label="Permalink to &quot;\`edit_rights\` bitmask breakdown&quot;">​</a></h3><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>0x01</code></td><td>Manager can edit</td></tr><tr><td><code>0x02</code></td><td>Owner can edit</td></tr><tr><td><code>0x04</code></td><td>Authorized editor can edit (used with <code>0x08</code>)</td></tr><tr><td><code>0x08</code></td><td>Editor is a user group</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addkeys.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{ &quot;factory_id&quot;: 10, &quot;key_defs&quot;: [ { &quot;name&quot;: &quot;id1&quot;, &quot;type&quot;: &quot;int8&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;int8&quot;, -8 ] }, { &quot;name&quot;: &quot;id2&quot;, &quot;type&quot;: &quot;int16&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;int16&quot;, 16 ] }, { &quot;name&quot;: &quot;id3&quot;, &quot;type&quot;: &quot;int32&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;int32&quot;, -32 ] }, { &quot;name&quot;: &quot;id4&quot;, &quot;type&quot;: &quot;int64&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;int64&quot;, 64 ] }, { &quot;name&quot;: &quot;id5&quot;, &quot;type&quot;: &quot;uint8&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;uint8&quot;, 8 ] }, { &quot;name&quot;: &quot;id6&quot;, &quot;type&quot;: &quot;uint16&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;uint16&quot;, 16 ] }, { &quot;name&quot;: &quot;id7&quot;, &quot;type&quot;: &quot;uint32&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;uint32&quot;, 32 ] }, { &quot;name&quot;: &quot;id8&quot;, &quot;type&quot;: &quot;uint64&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;uint64&quot;, 64 ] }, { &quot;name&quot;: &quot;id9&quot;, &quot;type&quot;: &quot;float32&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;float32&quot;, -1.32 ] }, { &quot;name&quot;: &quot;id10&quot;, &quot;type&quot;: &quot;float64&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;float64&quot;, 1.64 ] }, { &quot;name&quot;: &quot;id11&quot;, &quot;type&quot;: &quot;string&quot;, &quot;edit_rights&quot;: 8, &quot;editors&quot;: [ &quot;bob&quot; ], &quot;default_value&quot;: [ &quot;string&quot;, &quot;abc&quot; ] } ], &quot;memo&quot;: &quot;add new key pairs&quot; }&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;addkeys.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                key_defs: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uint64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;float32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;float32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;float64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;float64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        edit_rights: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        editors: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        default_value: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;memo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;add new key pairs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,24),h=[e];function l(p,k,d,E,o,r){return t(),i("div",null,h)}const q=s(n,[["render",l]]);export{y as __pageData,q as default};
