import{_ as s,c as i,o as a,M as t}from"./chunks/framework.3xTpxyva.js";const y=JSON.parse('{"title":"buyram","description":"","frontmatter":{"title":"buyram"},"headers":[],"relativePath":"blockchain/contracts/system-contract/system-actions/buyram.md","filePath":"blockchain/contracts/system-contract/system-actions/buyram.md","lastUpdated":null}'),n={name:"blockchain/contracts/system-contract/system-actions/buyram.md"},e=t(`<h1 id="buyram-buy-ram-with-uos" tabindex="-1">buyram - buy RAM with UOS <a class="header-anchor" href="#buyram-buy-ram-with-uos" aria-label="Permalink to &quot;buyram - buy RAM with UOS&quot;">​</a></h1><p>Increases the receiver&#39;s ram quota based upon current price and quantity of tokens provided. An inline transfer from receiver to system contract of tokens will be executed.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>payer</td><td>eosio::name</td><td>The source account name. Authentication required</td></tr><tr><td>receiver</td><td>eosio::name</td><td>The destination account name</td></tr><tr><td>quant</td><td>eosio::asset</td><td>The amount of UOS to spend</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> buyram</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[&quot;bob&quot;, &quot;alice&quot;, &quot;5.00000000 UOS&quot;]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bob</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">await api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  actions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      account</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eosio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;buyram&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      authorization</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{ actor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        payer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        receiver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        quant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;5.00000000 UOS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,7),h=[e];function l(p,k,r,o,d,c){return a(),i("div",null,h)}const u=s(n,[["render",l]]);export{y as __pageData,u as default};
