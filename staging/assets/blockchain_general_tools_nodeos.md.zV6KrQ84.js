import{_ as s,c as i,o as a,N as n,an as t}from"./chunks/framework.wVj9vBva.js";const y=JSON.parse('{"title":"Nodeos Usage","description":"","frontmatter":{"title":"Nodeos Usage","order":2,"outline":[0,4]},"headers":[],"relativePath":"blockchain/general/tools/nodeos.md","filePath":"blockchain/general/tools/nodeos.md","lastUpdated":null}'),e={name:"blockchain/general/tools/nodeos.md"},l=n('<h1 id="nodeos-usage" tabindex="-1">Nodeos Usage <a class="header-anchor" href="#nodeos-usage" aria-label="Permalink to &quot;Nodeos Usage&quot;">​</a></h1><p>Nodeos is the core blockchain component used to sync blocks and provide consensus and state management. It&#39;s a tool that allows you to develop smart contracts on the ultra blockchain network.</p><h2 id="who-is-it-for" tabindex="-1">Who is it for? <a class="header-anchor" href="#who-is-it-for" aria-label="Permalink to &quot;Who is it for?&quot;">​</a></h2><ul><li>Smart contract developers</li><li>Producing blocks, and being a Block Producer</li><li>Replicating Staging and Production networks locally</li></ul><h2 id="obtaining-nodeos" tabindex="-1">Obtaining Nodeos <a class="header-anchor" href="#obtaining-nodeos" aria-label="Permalink to &quot;Obtaining Nodeos&quot;">​</a></h2><p>We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Nodeos is already included inside of the Docker image.</p><p>Individual binaries are not currently available for download.</p><p><a href="./../../../tutorials/docker/docker-image-usage.html">Docker Image Usage</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Inside the Docker Container the following can be executed for general usage.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><p><img src="'+t+`" alt=""></p><h3 id="starting-a-chain" tabindex="-1">Starting a Chain <a class="header-anchor" href="#starting-a-chain" aria-label="Permalink to &quot;Starting a Chain&quot;">​</a></h3><p>Starting a chain straight from the binaries can be a daunting task; but just getting the basic startup without any additional <code>smart contract</code> deployment.</p><p>Assume the following file structure:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.ini</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> genesis.json</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blocks/</span></span></code></pre></div><p>A fresh chain can be started by running the following command.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --genesis-json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio/config/genesis.json</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --config-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio/config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --data-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --blocks-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio/data/blocks</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --producer-name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio</span></span></code></pre></div><p>Once the above command is ran, it will use the directories <code>config</code>, <code>blocks</code>, and <code>data</code> to store the various chain data and you should see <code>eosio</code> as the producer who is producing blocks.</p><h3 id="restarting-the-chain" tabindex="-1">Restarting the Chain <a class="header-anchor" href="#restarting-the-chain" aria-label="Permalink to &quot;Restarting the Chain&quot;">​</a></h3><p>If the chain has already started you can simply use the <strong>above command</strong> once again to completely restart the chain. Restarting with the same command will use the same blocks from the previous session.</p><h3 id="wiping-the-chain" tabindex="-1">Wiping the Chain <a class="header-anchor" href="#wiping-the-chain" aria-label="Permalink to &quot;Wiping the Chain&quot;">​</a></h3><p>When stopping the chain, you may wish to restart the chain again with new blocks. Simply run the command below to the wipe the chain. Adjust the command as needed for your folder structure.</p><p><strong>Terminal Commands in Docker Container</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/blocks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/snapshots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/config/protocol_features</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/eosio</span></span></code></pre></div><p><em>After next startup your blocks should start at #1</em></p><h3 id="before-synchronizing-nodeos" tabindex="-1">Before Synchronizing Nodeos <a class="header-anchor" href="#before-synchronizing-nodeos" aria-label="Permalink to &quot;Before Synchronizing Nodeos&quot;">​</a></h3><p>There are a few standard rules you should be aware of...</p><ul><li>You should all be using the same <code>genesis.json</code></li><li>Synchronizing Nodes CAN take a long time... <ul><li>You should probably get a snapshot, and load from snapshot</li><li>You should probably get a blocks.log, and load from blocks.log</li><li>Both of these will speed up synchronization time but are not required</li></ul></li><li>APIs can connect to block producers and other APIs</li><li>Block producers should only connect to other block producers but allow only their own APIs in to expose them to the outside world.</li></ul><p><em>This is a format that almost all block producers today currently use.</em></p><h2 id="configuration-files" tabindex="-1">Configuration Files <a class="header-anchor" href="#configuration-files" aria-label="Permalink to &quot;Configuration Files&quot;">​</a></h2><p><strong>genesis.json</strong></p><p>This file is necessary to set the intitial chain parameters that can be found inside of the <code>eosio</code> <code>global</code> table for a fully launched chain. Its entire purpose is to tell the protocol how it should be producing blocks, and the restrictions for producers.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;initial_timestamp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-09-01T12:00:00.000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;initial_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;initial_configuration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_block_net_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1048576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target_block_net_usage_pct&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_transaction_net_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">524288</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;base_per_transaction_net_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;net_usage_leeway&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;context_free_discount_net_usage_num&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;context_free_discount_net_usage_den&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_block_cpu_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target_block_cpu_usage_pct&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_transaction_cpu_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;min_transaction_cpu_usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;free_cpu_basis_point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;free_net_basis_point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ultra_veto_enabled&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_transaction_lifetime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deferred_trx_expiration_window&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_transaction_delay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3888000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_inline_action_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">524287</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_inline_action_depth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;max_authority_depth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</code> public key is a <strong>PUBLICLY KNOWN KEY. THIS SHOULD NOT BE USED IN PRODUCTION.</strong></p><p>Private Key: <code>5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3</code></p><p><strong>config.ini</strong></p><p>Defines various configurations required by <code>nodeos</code>.</p><p>The standard configuration that Ultra uses in its test environments is the following:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Required Configurations for Ultra</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">agent-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Producer&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enable-stale-production</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pause-on-startup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-max-response-time-ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 30000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max-transaction-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 300000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-validate-host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 4096</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-guard-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 256</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max-clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 50</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Print contract debugging to console</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contracts-console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What other peers should use to connect to you</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ideally leave these addresses as 0.0.0.0, and only change ports.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-server-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:8888</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-listen-endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:9876</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What other peers you want to connect to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is only required if you have another peer to connect to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#p2p-peer-address = 0.0.0.0:9877</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Allow access from browser</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access-control-allow-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Plugins that nodeos should be using</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::net_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::http_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::producer_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::producer_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::chain_api_plugin</span></span></code></pre></div><h3 id="synchronizing-nodeos-as-an-api" tabindex="-1">Synchronizing Nodeos as an API <a class="header-anchor" href="#synchronizing-nodeos-as-an-api" aria-label="Permalink to &quot;Synchronizing Nodeos as an API&quot;">​</a></h3><p>Connecting to an existing API can be done with the following configurations.</p><p><strong>Custom Configuration</strong></p><p>The configuration to use for the API is a bit different than a <code>producer</code> configuration. Here&#39;s an example API configuration.</p><p>Save this under a folder called <code>config/api/config.ini</code></p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 4096</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-guard-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 256</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">agent-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;API&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max-clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 50</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-max-nodes-per-host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your HTTP Endpoint for the API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-server-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:8888</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your p2p Endpoint for Others to Connect To</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-listen-endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:9876</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nodes to Connect To - Adjust This</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-peer-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1.2.3.4:9876</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-peer-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 5.6.7.8:9876</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># All the Plugins Needed for an API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::history_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::chain_api_plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-validate-host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access-control-allow-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = *</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access-control-allow-headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = *</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access-control-allow-credentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span></code></pre></div><p><strong>Starting the API Node</strong></p><p>Depending on the directories, and folders you will want to adjust the following command accordingly.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-replay-opts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --data-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --config-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/config/api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/config/api/config.ini</span></span></code></pre></div><h3 id="synchronizing-nodeos-as-a-producer" tabindex="-1">Synchronizing Nodeos as a Producer <a class="header-anchor" href="#synchronizing-nodeos-as-a-producer" aria-label="Permalink to &quot;Synchronizing Nodeos as a Producer&quot;">​</a></h3><p>The above <code>genesis</code> node or <code>existing nodes</code> need to have ports exposed to the outside world. We assume that a producing node has already exposed their ports.</p><p><strong>Custom Configuration</strong></p><p>The configuration you will want to use for the API is a bit different than a <code>genesis</code> configuration. Here&#39;s an example API configuration.</p><p>Save this under a folder called <code>config/producer/config.ini</code></p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">agent-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Producer&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max-clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 50</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-max-nodes-per-host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 4096</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chain-state-db-guard-size-mb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 256</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># What ports you are exposing to the outside world...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-server-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:8888</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-listen-endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 0.0.0.0:9876</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Who you are peering with</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-peer-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.20.1.1:9876</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">p2p-peer-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.20.2.1:9876</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enable-stale-production</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  = true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pause-on-startup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max-transaction-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 5000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http-max-response-time-ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 30000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is your producer name, you should change this and register it if you are not a genesis node.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">producer-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = someproducer1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ensure you replace SOME_PUBLIC_KEY_HERE &amp; SOME_PRIVATE_KEY_HERE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">signature-provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SOME_PUBLIC_KEY_HERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=KEY:SOME_PRIVATE_KEY_HERE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># All the Plugins Needed for a Producer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::chain_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::net_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::producer_api_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::chain_plugin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = eosio::producer_plugin</span></span></code></pre></div><p><strong>Starting the Producing Node</strong></p><p>Depending on the directories, and folders you will want to adjust the following command accordingly.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-replay-opts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --data-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --config-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/config/producer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/eosio/data/config/producer/config.ini</span></span></code></pre></div><h2 id="closing-remarks" tabindex="-1">Closing Remarks <a class="header-anchor" href="#closing-remarks" aria-label="Permalink to &quot;Closing Remarks&quot;">​</a></h2><p>It&#39;s good to get familiar with working with nodeos and for most development purposes you will only need to start / stop the <code>nodeos</code> process to set / clear contracts. Otherwise, nodeos is a powerful tool used for synchronizing block producers and quickly setting up your very own test network.</p>`,60),p=[l];function h(k,o,r,d,g,c){return a(),i("div",null,p)}const u=s(e,[["render",h]]);export{y as __pageData,u as default};
