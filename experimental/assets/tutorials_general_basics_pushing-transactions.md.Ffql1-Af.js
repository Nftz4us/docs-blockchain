import{_ as t,c as a,o as n,N as e}from"./chunks/framework.f7A1_Hg1.js";const k=JSON.parse('{"title":"Pushing Transactions","description":"","frontmatter":{"title":"Pushing Transactions","order":-99996,"oultine":[0,4]},"headers":[],"relativePath":"tutorials/general/basics/pushing-transactions.md","filePath":"tutorials/general/basics/pushing-transactions.md","lastUpdated":null}'),s={name:"tutorials/general/basics/pushing-transactions.md"},i=e(`<h1 id="pushing-transactions" tabindex="-1">Pushing Transactions <a class="header-anchor" href="#pushing-transactions" aria-label="Permalink to &quot;Pushing Transactions&quot;">​</a></h1><p>A transaction refers to a set of actions bundled together and submitted to the blockchain as a single atomic operation. It represents a unit of work or a state change that can be executed on the Ultra network. Transactions are fundamental to interacting with smart contracts and updating the blockchain state.</p><h2 id="push-a-transaction-with-cleos" tabindex="-1">Push a transaction with <code>cleos</code> <a class="header-anchor" href="#push-a-transaction-with-cleos" aria-label="Permalink to &quot;Push a transaction with \`cleos\`&quot;">​</a></h2><p>Open your terminal or command prompt.</p><p>The transaction command has the following structure:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transaction</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {&quot;actions&quot;:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;account&quot;:&quot;&lt;contract_account&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;name&quot;:&quot;&lt;action_name&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;authorization&quot;:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              &quot;actor&quot;:&quot;&lt;actor_account&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              &quot;permission&quot;:&quot;&lt;actor_permission&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;data&quot;:&lt;data_as_json_string&gt;}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }&#39;</span></span></code></pre></div><ul><li><code>&lt;contract_account&gt;</code>: The account associated with the contract where the action is defined.</li><li><code>&lt;action_name&gt;</code>: The name of the action you want to invoke.</li><li><code>&lt;actor_account&gt;</code>: The account that authorizes and signs the transaction.</li><li><code>&lt;actor_permission&gt;</code>: The permission level of the actor account (e.g., &quot;active&quot;).</li><li><code>&lt;data_as_json_string&gt;</code>: The parameters or data for the action in JSON format. Ensure that you properly format the data according to the action&#39;s requirements.</li></ul><p>Replace the placeholders <code>&lt;contract_account&gt;</code>, <code>&lt;action_name&gt;</code>, <code>&lt;actor_account&gt;</code>, <code>&lt;actor_permission&gt;</code>, and <code>&lt;data_as_json_string&gt;</code> with the actual values specific to your contract, action, and transaction data.</p><p>If the transaction is successful, you will receive a transaction ID as output. You can use this ID to verify the transaction&#39;s status on a block explorer.</p><h2 id="transaction-format" tabindex="-1">Transaction Format <a class="header-anchor" href="#transaction-format" aria-label="Permalink to &quot;Transaction Format&quot;">​</a></h2><p>On Ultra, transactions are formatted using JSON and consist of the following components:</p><p>Signatures are the cryptographic proof that an authorized account has approved and authorized the transaction. Signatures are generated using the private key corresponding to the account&#39;s public key.</p><p>Transactions can be optionally compressed using the zlib compression algorithm to reduce their size when transmitted over the network.</p><p>Packed Transaction: The packed transaction is the core component of the transaction format. It includes the following sub-components:</p><ul><li><code>expiration</code>: The expiration time of the transaction, represented as a timestamp. The transaction must be included in a block before this time to be considered valid.</li><li><code>ref_block_num</code> and <code>ref_block_prefix</code>: These values refer to the block number and block prefix of a previous block. They are used for generating a unique identifier for the transaction and for ensuring that the transaction cannot be replayed on a different fork of the blockchain.</li><li><code>max_net_usage_words</code> and <code>max_cpu_usage_ms</code>: These values represent the maximum allowed network and CPU usage for the transaction. The transaction&#39;s actions must consume resources within these limits to be accepted by the network.</li><li><code>delay_sec</code>: An optional delay (in seconds) for scheduling the execution of the transaction.</li><li><code>context_free_actions</code>: These are actions that do not require any context from the blockchain state. They can be executed in parallel and do not affect the transaction&#39;s authorization or signing.</li><li><code>actions</code>: The main actions that define the intended operations to be performed on the blockchain. Each action includes the account, action name, authorization, and associated data.</li></ul><p>Once the transaction is signed and ready for broadcasting, it is assigned a unique transaction ID. The ID is generated by hashing the packed transaction using the SHA-256 algorithm.</p><p>The use of JSON and cryptographic signatures ensures the integrity and authenticity of the transactions while facilitating interoperability with different tools and libraries.</p>`,17),o=[i];function c(r,l,h,p,d,u){return n(),a("div",null,o)}const m=t(s,[["render",c]]);export{k as __pageData,m as default};
