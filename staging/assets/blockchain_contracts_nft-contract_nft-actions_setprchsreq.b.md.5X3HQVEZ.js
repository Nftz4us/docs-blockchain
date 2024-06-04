import{_ as s,c as i,o as t,N as e}from"./chunks/framework.2dXRcwP5.js";const g=JSON.parse('{"title":"setprchsreq.b","description":"","frontmatter":{"title":"setprchsreq.b","order":32},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.md","filePath":"blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.md","lastUpdated":null}'),a={name:"blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.md"},n=e(`<h1 id="setprchsreq-b" tabindex="-1">setprchsreq.b <a class="header-anchor" href="#setprchsreq-b" aria-label="Permalink to &quot;setprchsreq.b&quot;">​</a></h1><p>This action is used to set purchase requirements for a token factory.</p><p>Tokens purchased will be issued to the receiver account using <a href="./issue.b.html">issue.b</a> action. Factory manager pays for minting the token</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Be mindful of the price you set for purchasing uniqs. If the price is too low and there are no restrictions for users to purchase uniqs using this purchase option then it may be abused to purchase many uniqs very cheap and then burn them. Associated cost to mint a token is on token factory manager</p></div><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The factory manager can specify purchase options for users. Note that currently they have to use the same action for both creation and modification of purchase requirements.</p><ul><li><p>If <strong>asset_manager</strong> is an account other than <code>ultra.nft.ft</code>, the cost of a factory creation is paid to <code>eosio.nftram</code> and it will be locked up in the purchase option.</p><ul><li><p>First, the cost in USD is (factory RAM payment size) * (RAM price), where</p><ul><li><p>NFT RAM payment size: <strong>2060 bytes</strong></p><ul><li>estimated for <code>purchase_option_with_uniqs</code> and <code>group_restriction</code> of 64</li></ul></li><li><p>RAM price: <strong>0.15 USD/KB</strong></p></li></ul></li><li><p>The cost is paid in UOS. The action uses <code>1 MINUTE</code> conversion rate in USD/UOS from <code>eosio.oracle</code> contract. Assuming UOS price of 1$ the cost per purchase requirement is:</p><blockquote><p>2060B/1024B * 0.15USD/KB ~ 0.3$ = 0.3 UOS</p></blockquote></li></ul></li></ul><p><code>token_factory_id</code> - token factory managed by a factory manager.</p><p><code>index</code> - purchase requirements index. starts with 0.</p><p><code>price</code> - price per uniq. Should be specified in either <code>UOS</code> or <code>USD</code>. Together with <code>purchase_option_with_uniqs</code> this is what a user provides to mint a uniq. If <code>price</code> is set to 0 then either <code>purchase_limit</code> should be set or <code>purchase_option_with_uniqs</code> should require some token to be burnt or transferred.</p><p><code>purchase_limit</code> - how much users can buy via purchase action. It has to be less than factory limit setting and greater or equal to what was already minted via the action. If value provided is below the number of tokens already purchased from this option the <code>purchase_limit</code> will be set to be equal to the number of purchased tokens from this option</p><p><code>promoter_basis_point</code> is used to specify how much % of a sale a promoter will get.</p><p><code>purchase_option_with_uniqs</code> - optional field used to set purchase options via uniqs. user has to have <code>count</code> tokens from listed uniq factories. They will be burned, transferred or checked as per <code>strategy</code> setting.</p><p><code>sale_shares</code> is used to set royalties.</p><p>If RAM price is greater than <code>maximum_uos_payment</code> transaction reverts.</p><p>If token factory is inactive transaction reverts as well.</p><p><code>group_restriction</code> is an optional parameter that accepts a string representation of group ID restrictions, which is internally converted to a vector of 64-bit integers. This vector is designed to apply logical restrictions based on the group IDs that users belong to. The structure of each 64-bit integer is as follows:</p><ul><li>The lower 60 bits represent the group ID.</li><li>The upper 4 bits are reserved for logical operators.</li></ul><p>Logical Operators The logical operators are defined as bitwise flags in the following manner:</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OR        0X1000&#39;0000&#39;0000&#39;0000   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0: AND, 1: OR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NEGATION  0X2000&#39;0000&#39;0000&#39;0000   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0: No negation, 1: Negation</span></span></code></pre></div><ul><li><code>4th Bit (OR Operator)</code>: If this bit is set, it indicates the OR operator. Otherwise, it defaults to the AND operator.</li><li><code>3rd Bit (NEGATION Operator)</code>: If this bit is set, it indicates that the NEGATION should be applied to the group ID.</li></ul><p>The expression is evaluated from left to right, and parentheses are not used. Logical operators take into account starting from the second group ID in the sequence.</p><p>For example, a <code>group_restriction</code> vector like <code>&lt;OR + NOT + group1, AND + group2&gt;</code> would be evaluated as <code>(NOT group1 AND group2)</code>. This means the condition will pass if the user is not a member of <code>group1</code> AND is a member of <code>group2</code>.</p><p>Longer expression example for a <code>group_restriction</code> vector of <code>&lt;OR + NOT + group1, AND + group2, OR + NOT + group3, OR + group4, AND + NOT + group5&gt;</code>, the logical expression becomes:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(NOT group1 AND group2) OR (NOT group3) OR (group4 AND NOT group5)</span></span></code></pre></div><p>This means the condition will pass if:</p><ul><li>The user is not a member of <code>group1</code> AND is a member of <code>group2</code>, OR</li><li>The user is not a member of <code>group3</code>, OR</li><li>The user is a member of <code>group4</code> AND not a member of <code>group5</code>.</li></ul><p>Formalization of Logical Expression Evaluation</p><p>To formalize the evaluation process, let&#39;s consider the <code>group_restriction</code> vector as <code>G = [g1, g2, g3, ..., gn]</code>, where each <code>gi</code> is a 64-bit integer that encodes both the logical operator and the group ID.</p><p>The corresponding logical expression <code>L</code> can be represented as:</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">L = O1(g1) OP2 O2(g2) OP3 O3(g3) ... OPn On(gn)</span></span></code></pre></div><p>Where:</p><ul><li><code>Oi(gi)</code> checks whether a user belongs to the group <code>gi</code> if there is no NEGATION bit, otherwise, it checks whether a user <strong>does not</strong> belong to the group <code>gi</code>.</li><li><code>OPi</code> is the logical operator (AND/OR) determined by the OR bit in <code>gi</code>, taking effect starting from <code>i=2</code> to <code>n</code>.</li></ul><p>Notes:</p><ul><li><code>Oi(gi)</code> will return either <code>group_i</code> or <code>NOT group_i</code> based on the presence of the NEGATION bit.</li><li><code>OPi</code> will return either <code>AND</code> or <code>OR</code> depending on the presence of the OR bit.</li><li>While the expression <code>L</code> is evaluated from left to right, it also adheres to operator precedence rules: AND operations have higher precedence than OR operations, similar to standard Boolean logic. This means that all AND operations will be executed first, followed by the OR operations.</li></ul><p>By understanding this formalization, you can ensure a clear and standardized way to construct and evaluate the logical expression <code>L</code> based on the <code>group_restriction</code> vector <code>G</code>.</p><p><code>memo</code> - a string of no more than 256 characters. useful for parsing on a backend.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p><strong>Action Interface</strong></p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td><td>ID of the factory to add (or update) purchase option to</td></tr><tr><td>index</td><td>uint64_t</td><td>number</td><td>Index of the purchase option. Multiple purchase options can be added to a single factory</td></tr><tr><td>price</td><td>eosio::asset</td><td>string</td><td>Price of the Uniqs from this purchase option either in UOS or USD. Can also set 0 price</td></tr><tr><td>purchase_limit</td><td>optional&lt;uint32_t&gt;</td><td>number / null</td><td>Maximum number of Uniqs that can be purchased from this purchase option. Must not exceed factory minting limit</td></tr><tr><td>promoter_basis_point</td><td>uint16_t</td><td>number</td><td>UOS share received by the promoter with each purchase done for this option. Specified in basis points</td></tr><tr><td>purchase_option_with_uniqs</td><td>std::optional&lt;provided_user_uniqs&gt;</td><td>Object / null</td><td>Optional feature that allows the purchase option to require user to own uniqs from specific factories or to pay with uniqs from specific factories. Refer to a link below for more details</td></tr><tr><td>sale_shares</td><td>std::vector&lt;sale_share&gt;</td><td>Array</td><td>A vector of [account, share] pairs setting the share each account receives during the purchase</td></tr><tr><td>maximum_uos_payment</td><td>optional&lt;eosio::asset&gt;</td><td>asset / null</td><td>Maximum amount of UOS manager allows to be take for the creation of the purchase option. Since the price is fixed in USD the equivalent UOS payment may fluctuate. Using this option will prevent the manager from paying more then he is willing to</td></tr><tr><td>group_restriction</td><td>string</td><td>string</td><td>String representation specifying logical restrictions based on group membership, which will be converted to a vector of 64-bit integers that follows specific logical operator rules as outlined above. Empty string means no restrictions</td></tr><tr><td>purchase_window_start</td><td>std::optional&lt;time_point_sec&gt;</td><td>string / null</td><td>Start time of purchase window (optional)</td></tr><tr><td>purchase_window_end</td><td>std::optional&lt;time_point_sec&gt;</td><td>string / null</td><td>End time of purchase window (optional)</td></tr><tr><td>memo</td><td>std::string</td><td>string</td><td>A short operation description</td></tr></tbody></table><p><strong>purchase_requirement_with_uniqs option breakdown</strong></p><p>Refer to <a href="./../nft-tables.html#fctrprchs-a">fctrprchs.a</a></p><p><strong>uniqs_count type breakdown</strong></p><p>Refer to <a href="./../nft-tables.html#fctrprchs-a">fctrprchs.a</a></p><h3 id="example-usage-of-the-parameter-group-restriction" tabindex="-1">Example Usage of the parameter <code>&quot;group_restriction&quot;</code> <a class="header-anchor" href="#example-usage-of-the-parameter-group-restriction" aria-label="Permalink to &quot;Example Usage of the parameter \`\`\`&quot;group_restriction&quot;\`\`\`&quot;">​</a></h3><p><code>&quot;group_restriction&quot;</code> consists of group ID strings concatenated by the logical operators specified by special characters as</p><ul><li><strong>OR</strong>: &quot;|&quot; (Vertical Line)</li><li><strong>NEGATION</strong>: &quot;~&quot; (Tilde)</li><li><strong>AND</strong>: &quot;&amp;&quot; (Ampersand)</li></ul><p>The internal logical operators&#39; 64-bit values are defined as</p><ul><li><strong>OR</strong>: 0X1000&#39;0000&#39;0000&#39;0000, or 1152921504606846976 in decimal.</li><li><strong>NEGATION</strong>: 0X2000&#39;0000&#39;0000&#39;0000, or 2305843009213693952 in decimal.</li><li><strong>AND</strong>: 0, This is implicit. It can be ignored since it&#39;s 0.</li><li><strong>NO NEGATION</strong>: 0, This is also implicit. It can also be ignored since it&#39;s 0.</li></ul><p>Let&#39;s say we have two user groups</p><ul><li>Group1_ID = 1</li><li>Group2_ID = 2</li></ul><h4 id="use-cases" tabindex="-1">Use cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use cases&quot;">​</a></h4><ol><li>no group requriement. <ul><li>parameter value <code>&quot;group_restriction&quot;:</code> &quot;&quot;</li></ul></li><li>users belong to Group1 and Group2 can purchase from this option <ul><li>logical expression: Group1 &amp; Group2</li><li>parameter value: <code>&quot;group_restriction&quot;:</code> &quot;1&amp;2&quot;</li><li>internal 64-bit integers&#39; vector representation <ul><li>= [Group1_ID, Group2_ID]</li><li>= [1,2]</li></ul></li></ul></li><li>users belong to either Group1 or Group2 can purchase form this option <ul><li>logical expression: Group1 | Group2</li><li>parameter value <code>&quot;group_restriction&quot;:</code> &quot;1|2&quot;</li><li>internal 64-bit integers&#39; vector representation <ul><li>= [Group1_ID, OR + Group2_ID]</li><li>= [1, 1152921504606846976 + 2]</li><li>= [1, 1152921504606846978]</li></ul></li></ul></li><li>users not belong to Group1 but belong to Group2 can purchase form this option <ul><li>logical expression: ~Group1 &amp; Group2</li><li>parameter value <code>&quot;group_restriction&quot;:</code> &quot;~1&amp;2&quot;</li><li>internal 64-bit integers&#39; vector representation <ul><li>= [NEGATION + Group1_ID, Group2_ID]</li><li>= [2305843009213693952 + 1, 2]</li><li>= [2305843009213693953, 2]</li></ul></li></ul></li><li>users not belong to Group1 or not Group2 can purchase form this option <ul><li>logical expression: ~Group1 | ~Group2</li><li>parameter value <code>&quot;group_restriction&quot;:</code> &quot;~1|~2&quot;</li><li>internal 64-bit integers&#39; vector representation <ul><li>= [NEGATION + Group1_ID, OR + NEGATION + Group2_ID]</li><li>= [2305843009213693952 + 1, 1152921504606846976 + 2305843009213693952 + 2]</li><li>= [2305843009213693953, 3458764513820540930]</li></ul></li></ul></li></ol><h2 id="integrating-first-hand-purchase-into-your-own-solution" tabindex="-1">Integrating first-hand purchase into your own solution <a class="header-anchor" href="#integrating-first-hand-purchase-into-your-own-solution" aria-label="Permalink to &quot;Integrating first-hand purchase into your own solution&quot;">​</a></h2><p>We offer a sample project showcasing the utilization of first-hand purchase functionality. This enables users to exchange their Uniqs and/or UOS for other Uniqs. Feel free to clone, fork, or customize this solution according to your requirements.</p><p>For details refer to <a href="./../../../../tutorials/uniq-factories/factory-management/uniq-first-hand-purchase-example-project.html">this page</a></p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setprchsreq.b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;index&quot;: 1,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;price&quot;: &quot;50.00000000 UOS&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;purchase_limit&quot;: 1,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;purchase_option_with_uniqs&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;transfer_tokens_receiver_account&quot;: null,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;factories&quot;: [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;token_factory_id&quot;: 42,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;count&quot;: 3,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;strategy&quot;: 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;maximum_uos_payment&quot;: &quot;2.00000000 UOS&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;group_restriction&quot;: &quot;~1|~2&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;purchase_window_start&quot;: &quot;2023-09-18T13:21:10.724&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;purchase_window_end&quot;: &quot;2023-11-18T13:21:10.724&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> factory.manager</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setprchsreq.b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;factory.manager&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    purchase_option: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        index: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;50.00000000 UOS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        purchase_limit: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        promoter_basis_point: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        purchase_option_with_uniqs: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            transfer_tokens_receiver_account: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            factories: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                    token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                    count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                    strategy: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        sale_shares: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        maximum_uos_payment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2.00000000 UOS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        group_restriction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~1|~2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        purchase_window_start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-09-18T13:21:10.724&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        purchase_window_end: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-11-18T13:21:10.724&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,60),o=[n];function r(l,p,h,c,d,u){return t(),i("div",null,o)}const E=s(a,[["render",r]]);export{g as __pageData,E as default};
