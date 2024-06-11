import{_ as s,c as a,o as i,N as t}from"./chunks/framework.HE4KbJuF.js";const E=JSON.parse('{"title":"Smart Contracts","description":"","frontmatter":{"title":"Smart Contracts","outline":[0,5],"order":-98,"prev":false},"headers":[],"relativePath":"blockchain/general/antelope-ultra/smart-contracts.md","filePath":"blockchain/general/antelope-ultra/smart-contracts.md","lastUpdated":null}'),n={name:"blockchain/general/antelope-ultra/smart-contracts.md"},e=t(`<h1 id="smart-contracts" tabindex="-1">Smart Contracts <a class="header-anchor" href="#smart-contracts" aria-label="Permalink to &quot;Smart Contracts&quot;">​</a></h1><p>Smart contracts are pieces of code that are applied on-chain and have functions that can be called to run code.</p><p>Think of it like a REST endpoint that requires a POST request to run under specific parameters.</p><h2 id="language" tabindex="-1">Language <a class="header-anchor" href="#language" aria-label="Permalink to &quot;Language&quot;">​</a></h2><p>Smart contracts on Ultra are written in C++ and compiled down into Web Assembly.</p><p>It&#39;s not as intimidating as you think; here&#39;s an example <code>hello-world.cpp</code> contract.</p><details class="details custom-block"><summary>hello-world.cpp</summary><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/eosio.hpp&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/print.hpp&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mycontract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CONTRACT hello : public </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ACTION </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name user) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hi there, &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user.value, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="building-a-contract" tabindex="-1">Building a contract <a class="header-anchor" href="#building-a-contract" aria-label="Permalink to &quot;Building a contract&quot;">​</a></h2><p>There are 3 options to build a contract at the moment:</p><ul><li>Via <a href="./../../../tutorials/docker/getting-started.html">cdt-cpp</a> with docker</li><li>Via <a href="./../../../products/contract-builder/">contract-builder</a> tool</li><li>Via <a href="./../../../tutorials/smart-contracts/compile.html">vscode extension</a></li></ul><p>Vscode extension is the easiest one to start with. However, if your project has non-trivial build steps (i.e uses scripts for code generation) it&#39;s better to use the docker option.</p>`,11),l=[e];function p(h,r,o,c,k,d){return i(),a("div",null,l)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};
