import{_ as s,c as i,o as a,N as n}from"./chunks/framework.wHDMMYC3.js";const g=JSON.parse('{"title":"Substreams application example","description":"","frontmatter":{"title":"Substreams application example","order":2,"outline":[0,4]},"headers":[],"relativePath":"tutorials/substreams/substreams-app-example.md","filePath":"tutorials/substreams/substreams-app-example.md","lastUpdated":null}'),t={name:"tutorials/substreams/substreams-app-example.md"},e=n(`<h1 id="substreams-sink-application-example" tabindex="-1">Substreams Sink Application Example <a class="header-anchor" href="#substreams-sink-application-example" aria-label="Permalink to &quot;Substreams Sink Application Example&quot;">​</a></h1><p>Any application that is being used to consume <code>Substreams data</code> will be referred to as <code>Substreams Sink</code>.</p><p>If you follow the deployment of <code>substreams charts</code> from <a href="./getting-started.html">Getting Started</a>, you should now have a working <code>Substreams</code> cluster locally.</p><p>However, this local cluster will only help you to extract block data from <code>producer</code> pod or a blockchain if you connect to a public endpoint instead.</p><p>To fully make use of these block data you will need something called <code>Substreams Packages</code> which will be used like a filter to extract exactly the data you need. For example:</p><ul><li>Get transaction data from a block</li><li>Find action data based on action name and account</li><li>Find transaction by hash</li><li>etc.</li></ul><p>A <code>Substreams Package</code> is a ready-to-consume binary file, which contains all the necessary dependencies (manifest, modules, protobufs...). You can read more about <a href="https://substreams.streamingfast.io/documentation/consume/packages" target="_blank" rel="noreferrer">Substreams Packages</a> and how to develop your own <a href="https://substreams.streamingfast.io/documentation/develop/manifest-modules" target="_blank" rel="noreferrer">Manifest and Modules</a> to create a new <code>Substreams package</code>. Alternatively, you can go to <a href="https://github.com/pinax-network/substreams" target="_blank" rel="noreferrer">Pinax Substreams package</a> for <code>Ultra</code> compatible <code>Substreams</code> package.</p><p>Finally, with these filtered data, you can use it by storing it in a database, displaying it in an explorer, etc.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Here is an example that demonstrates how you can make use of <code>Substreams</code> package and extract <code>eosio.token</code> <code>transfer</code> action from <code>Substreams</code> cluster.</p><p>The example will be a <code>Node.js</code> application written in <code>Typescript</code> with <code>yarn</code> as package manager, so make sure you have these installed before starting.</p><ul><li><a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">Install Node.js for Windows/macOS with Installer</a></li><li><a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noreferrer">Install Node.js for Windows/macOS/Linux with Package Manager</a></li><li>Install <code>yarn</code> (you can skip if you prefer <code>npm</code>)</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span></code></pre></div><p>This application will make use of 2 packages:</p><ul><li><a href="https://github.com/substreams-js/substreams-js" target="_blank" rel="noreferrer">substreams-js</a></li><li><a href="https://github.com/substreams-js/substreams-node" target="_blank" rel="noreferrer">substreams-node</a></li></ul><h2 id="setup-project" tabindex="-1">Setup project <a class="header-anchor" href="#setup-project" aria-label="Permalink to &quot;Setup project&quot;">​</a></h2><p>Setting up a <code>Typescript</code> project</p><p>Create a new directory and navigate to it</p><p>Initialize project</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>Install <code>Typescript</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript</span></span></code></pre></div><p>Initialize <code>Typescript</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span></span></code></pre></div><p>A new <code>tsconfig.json</code> will be created. For the sake of the tutorial, please use your text editor and update the project as below.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es2020&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;esnext&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;outDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rootDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;moduleResolution&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;baseUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;esModuleInterop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;skipLibCheck&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;forceConsistentCasingInFileNames&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Add these configurations to <code>package.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc &amp;&amp; node dist/index.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p>Install <code>substreams</code> dependency</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @substreams/node</span></span></code></pre></div><h2 id="adding-example-script" tabindex="-1">Adding example script <a class="header-anchor" href="#adding-example-script" aria-label="Permalink to &quot;Adding example script&quot;">​</a></h2><p>Make a new directory name <code>src</code> and add a new file called <code>index.ts</code>.</p><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createGrpcTransport } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@connectrpc/connect-node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createRegistry,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createRequest,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fetchSubstream,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isEmptyMessage,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  streamBlocks,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  unpackMapOutput,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@substreams/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PACKAGE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://github.com/pinax-network/substreams/releases/download/eosio.token-v0.13.2/eosio-token-v0.13.2.spkg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OUTPUT_MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;map_transfers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manifest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchSubstream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PACKAGE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRegistry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(manifest);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transport</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createGrpcTransport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseUrl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:9000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  httpVersion: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  interceptors: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jsonOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    typeRegistry: registry,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> request</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  substreamPackage: manifest,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  outputModule: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OUTPUT_MODULE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  productionMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  startBlockNum: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  stopBlockNum: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> streamBlocks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transport, request)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> unpackMapOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response, registry);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEmptyMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ typeRegistry: registry }));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Some important configurations:</p><ul><li><code>PACKAGE</code> - This is the released package from <a href="https://github.com/pinax-network/substreams/releases" target="_blank" rel="noreferrer">Pinax Nework Substreams Package Release</a>. We used <code>eosio.token</code> package since it&#39;s compatible with Ultra&#39;s chain.</li><li><code>OUTPUT_MODULE</code> - This is a data filter name. In this example, we will use <code>map_transfers</code> which is a filter for any transaction that contains <code>transfer</code> action from <code>eosio.token</code> contract.</li><li><code>baseURL</code> - this is the service endpoint of <code>substreams-tier1</code> component. The request will be sent to this component and the result will be sent back.</li><li><code>startBlockNum</code> - The block number where the search will start.</li><li><code>stopBlockNum</code> - The block number where the search will end. If you use <code>+100</code>, it will stop after 100 blocks.</li></ul><p>This script will search all transactions from the start block to the end block, then it will output any transaction that contains <code>tranfer</code> action from <code>eosio.token</code> contract.</p><h2 id="run-the-app" tabindex="-1">Run the app <a class="header-anchor" href="#run-the-app" aria-label="Permalink to &quot;Run the app&quot;">​</a></h2><p>Make sure you follow the <a href="./getting-started.html">Getting Started</a> and start a local cluster.</p><p>Once all the pods are ready, you need to forward the <code>substreams-tier1</code> service port for testing.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port-forward</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service/substreams-tier1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9000</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Forwarding from 127.0.0.1:9000 -&gt; 9000</span></span>
<span class="line"><span>Forwarding from [::1]:9000 -&gt; 9000</span></span></code></pre></div><p><strong>Note</strong>: Make sure to keep this console tab open to maintain the connection.</p><p>Finally, you run the application with</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>With the default configurations, you should see this result in your console.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  items:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      trxId:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;23ed3a9e921dbad087861d9968b575a1102594d7411e04700043d40f08d550ad&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      actionOrdinal:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      contract:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eosio.token&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      action:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;transfer&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      symcode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      from:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eosio&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      to:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ultra.eosio&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      quantity:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1000000000.00000000 UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      precision:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      amount:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;100000000000000000&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      value:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000000000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  items:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      trxId:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2239bc9796c6776d1953ad8e6ff444e5d81c261121627e03517abcc462323beb&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      actionOrdinal:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      contract:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eosio.token&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      action:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;transfer&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      symcode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      from:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ultra.eosio&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      to:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ultra&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      quantity:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;100000000.00000000 UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      precision:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      amount:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;10000000000000000&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      value:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100000000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      trxId:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;8418539abfa1f147e214221f412b4cd78b26efa0fba1e6cdee2e9951911ee7f6&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      actionOrdinal:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      contract:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eosio.token&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      action:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;transfer&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      symcode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      from:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ultra.eosio&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      to:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eosio&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      quantity:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;100000000.00000000 UOS&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      precision:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      amount:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;10000000000000000&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      value:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100000000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,46),l=[e];function p(h,k,r,o,d,c){return a(),i("div",null,l)}const F=s(t,[["render",p]]);export{g as __pageData,F as default};
