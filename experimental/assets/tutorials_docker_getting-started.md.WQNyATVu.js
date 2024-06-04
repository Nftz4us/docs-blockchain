import{_ as s,c as i,o as a,N as t}from"./chunks/framework.RWhliK3J.js";const E=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","order":-9999,"outline":[0,4]},"headers":[],"relativePath":"tutorials/docker/getting-started.md","filePath":"tutorials/docker/getting-started.md","lastUpdated":null}'),n={name:"tutorials/docker/getting-started.md"},e=t(`<h1 id="docker-quickstart" tabindex="-1">Docker Quickstart <a class="header-anchor" href="#docker-quickstart" aria-label="Permalink to &quot;Docker Quickstart&quot;">​</a></h1><p>The goal of this document is to get a development environment setup in as little time as possible.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/desktop/windows/install/" target="_blank" rel="noreferrer">Docker for Windows</a></li><li><a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noreferrer">Docker for Linux</a></li><li><a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noreferrer">Docker for Mac</a></li><li><a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git for Windows / Linux</a><ul><li>Ensure that you install Git Bash</li></ul></li></ul><p>Make sure docker engine is up on your system:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p><code>Docker version 20.10.21, build baeda1f</code></p><h2 id="obtaining-the-docker-image" tabindex="-1">Obtaining the Docker Image <a class="header-anchor" href="#obtaining-the-docker-image" aria-label="Permalink to &quot;Obtaining the Docker Image&quot;">​</a></h2><p>Pull the docker image down from quay.io</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><p><em>The above image tag may be out of date. Visit <a href="https://quay.io/ultra.io/3rdparty-devtools" target="_blank" rel="noreferrer">our official quay.io repository</a> to get the latest image tag.</em></p><h2 id="starting-stopping-image" tabindex="-1">Starting / Stopping Image <a class="header-anchor" href="#starting-stopping-image" aria-label="Permalink to &quot;Starting / Stopping Image&quot;">​</a></h2><p>Open your terminal (on Windows use <code>Git Bash</code>) and use the following command to create development tools container</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8888</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:8888</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9876</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9876</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/ultra_workdir:/opt/ultra_workdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The above command will utilize ports 8888 and 9876. If those ports are occupied the docker will fail to create the container. You will have an option to change which ports will be used on your host machine later.</p></div><p>After you created the container you realistically won&#39;t need to create it again. Existing container will be accessible under the name of <code>ultra</code>.</p><p>To stop the container without destroying it you can use the following command</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span></span></code></pre></div><h2 id="accessing-the-image" tabindex="-1">Accessing the Image <a class="header-anchor" href="#accessing-the-image" aria-label="Permalink to &quot;Accessing the Image&quot;">​</a></h2><p>After you created the container you will be able to attach to it using the following command. It will also start the container if it is currently stopped (for Windows keep in mind to use <code>Git Bash</code> still).</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attach</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span></span></code></pre></div><h2 id="accessing-docker-volume" tabindex="-1">Accessing Docker Volume <a class="header-anchor" href="#accessing-docker-volume" aria-label="Permalink to &quot;Accessing Docker Volume&quot;">​</a></h2><p>The docker container has a shared directory located somewhere in your operating system.</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir</code></p></li><li><p>Linux: <code>~/ultra_workdir</code></p></li><li><p>Mac OS: <code>~/ultra_workdir</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir</code></p></li></ul><h2 id="creating-a-smart-contract" tabindex="-1">Creating a Smart Contract <a class="header-anchor" href="#creating-a-smart-contract" aria-label="Permalink to &quot;Creating a Smart Contract&quot;">​</a></h2><p>Create a directory in the <code>ultra_workdir</code> directory called <code>contracts</code> with a file inside called <code>hello.cpp</code>.</p><ul><li>You can do it either on your host machine (Windows/Linux) or inside the docker image using your editor of choice (<code>nano</code> is preinstalled, other editors require manual installation)</li><li>You also have an option to use <a href="./development-environment.html">VSCode Environment</a></li></ul><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/eosio.hpp&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hi, &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="compiling-a-smart-contract" tabindex="-1">Compiling a Smart Contract <a class="header-anchor" href="#compiling-a-smart-contract" aria-label="Permalink to &quot;Compiling a Smart Contract&quot;">​</a></h3><p>Inside of the docker image (using the terminal that is attached to the <code>ultra</code> container) navigate into the <code>contracts</code> directory, and run the following command.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir -p /opt/ultra_workdir/contracts &amp;&amp; cd /opt/ultra_workdir/contracts</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cdt-cpp -abigen -o hello.wasm hello.cpp</span></span></code></pre></div><h2 id="writing-your-first-test" tabindex="-1">Writing your first test <a class="header-anchor" href="#writing-your-first-test" aria-label="Permalink to &quot;Writing your first test&quot;">​</a></h2><h3 id="setup-directory-structure" tabindex="-1">Setup directory Structure <a class="header-anchor" href="#setup-directory-structure" aria-label="Permalink to &quot;Setup directory Structure&quot;">​</a></h3><p>This directory structure should be reflected inside of the docker image.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/opt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  /ultra_workdir</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /contracts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.wasm</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.abi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.cpp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /tests</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.ultra_test.js</span></span></code></pre></div><h3 id="write-tests" tabindex="-1">Write Tests <a class="header-anchor" href="#write-tests" aria-label="Permalink to &quot;Write Tests&quot;">​</a></h3><p>Test files are written in JavaScript and must have <code>ultra_test.js</code> suffix (e.g. <code>hello.ultra_test.js</code>).</p><p>Now try adding the following code snippet to <code>hello.ultra_test.js</code>. You should place the file <code>ultra_workdir/tests</code> directory like the file tree in the section above suggests</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Deploys ultra system contracts to the nodeos instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    requiresSystemContracts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // What account to create, and what contract to deploy on it</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    importContracts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{ account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;smrtcntract1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../contracts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, contract: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Created after importing contracts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    requiredAccounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cleos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rpc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ecc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">keychain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This will never trigger because it is true.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Should always return an object of async tests</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;should execute transaction&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    actions: [{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;smrtcntract1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The smart contract account</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Name of the action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        authorization: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            // actor -&gt; The account performing the action</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            // permission -&gt; Permission required for that account. Usually &#39;active&#39;.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            { actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        // This is an exact match of the data to send to the &#39;action&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        // In the example below the &#39;hello&#39; action will take a name parameter.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;account1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },{ blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="running-tests" tabindex="-1">Running Tests <a class="header-anchor" href="#running-tests" aria-label="Permalink to &quot;Running Tests&quot;">​</a></h3><p>Inside of the docker image run the following commands.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/ultra_workdir</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ultratest</span></span></code></pre></div><p>If you did everything properly you should see the test line stating <code>All Tests Passed</code></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If the test run fails or gets stuck you can kill it using the ^C (Ctrl + C) termination command.</p></div>`,46),l=[e];function h(p,k,r,o,d,c){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{E as __pageData,y as default};
