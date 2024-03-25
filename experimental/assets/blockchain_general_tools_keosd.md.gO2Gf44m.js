import{_ as e,c as a,o as s,M as i}from"./chunks/framework.3xTpxyva.js";const u=JSON.parse('{"title":"Keosd Usage","description":"","frontmatter":{"title":"Keosd Usage","order":1,"outline":[0,4]},"headers":[],"relativePath":"blockchain/general/tools/keosd.md","filePath":"blockchain/general/tools/keosd.md","lastUpdated":null}'),t={name:"blockchain/general/tools/keosd.md"},o=i('<h1 id="keosd-usage" tabindex="-1">Keosd Usage <a class="header-anchor" href="#keosd-usage" aria-label="Permalink to &quot;Keosd Usage&quot;">​</a></h1><p>Keosd is a program that runs in the background to help store priate keys, and sign transactions. It&#39;s a secure and encrypted key storage program.</p><h2 id="who-is-it-for" tabindex="-1">Who is it for? <a class="header-anchor" href="#who-is-it-for" aria-label="Permalink to &quot;Who is it for?&quot;">​</a></h2><ul><li>Developers</li><li>Advanced Users</li></ul><h2 id="obtaining-keosd" tabindex="-1">Obtaining Keosd <a class="header-anchor" href="#obtaining-keosd" aria-label="Permalink to &quot;Obtaining Keosd&quot;">​</a></h2><p>We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Keosd is already included inside of the Docker image.</p><p>Individual binaries are not currently available for download.</p><p><a href="./../../../tutorials/docker/docker-image-usage.html">Docker Image Usage</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Inside the Docker Container the following can be executed for general usage.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keosd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><p>Keosd can be ran by itself without even specifying <code>help</code>. It by default creates all wallet files in the <code>~/eosio-wallet</code> directory.</p><p>It is highly suggested to use <code>cleos</code> in tandem with <code>keosd</code>, or let <code>cleos</code> run <code>keosd</code> by itself. Using any <code>cleos wallet</code> functions will automatically perform all <code>keosd</code> actions.</p><h3 id="wallet-infinite-unlock" tabindex="-1">Wallet Infinite Unlock <a class="header-anchor" href="#wallet-infinite-unlock" aria-label="Permalink to &quot;Wallet Infinite Unlock&quot;">​</a></h3><p>If you find a need for a wallet that almost never locks itself you will need to stop the keosd service first.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pkill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keosd</span></span></code></pre></div><p>keosd can be ran by itself with a specific timeout for the unlock, and the command below will also run it in the background.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keosd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --http-server-address=localhost:8899</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --http-max-response-time-ms=30000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unlock-timeout=999999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div>',19),l=[o];function n(d,r,h,c,p,k){return s(),a("div",null,l)}const b=e(t,[["render",n]]);export{u as __pageData,b as default};
