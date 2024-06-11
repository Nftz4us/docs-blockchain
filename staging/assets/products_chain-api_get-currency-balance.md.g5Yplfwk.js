import{_ as s,D as e,c as t,I as i,N as n,o}from"./chunks/framework.wVj9vBva.js";const E=JSON.parse('{"title":"/get_currency_balance","description":"","frontmatter":{"title":"/get_currency_balance"},"headers":[],"relativePath":"products/chain-api/get-currency-balance.md","filePath":"products/chain-api/get-currency-balance.md","lastUpdated":null}'),l={name:"products/chain-api/get-currency-balance.md"},c=n(`<h1 id="post-v1-chain-get-currency-balance" tabindex="-1">POST - /v1/chain/get_currency_balance <a class="header-anchor" href="#post-v1-chain-get-currency-balance" aria-label="Permalink to &quot;POST - /v1/chain/get_currency_balance&quot;">​</a></h1><p>Returns the current currency balance for a given token contract, account, and a token symbol.</p><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eosio.token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ultra.nft.ft&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;symbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UOS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -X POST -d &#39;{ &quot;code&quot;: &quot;eosio.token&quot;, &quot;account&quot;: &quot;ultra.nft.ft&quot;, &quot;symbol&quot;: &quot;UOS&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_currency_balance</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;475.34122996 UOS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,9);function r(p,h,u,d,k,y){const a=e("DemoApi");return o(),t("div",null,[c,i(a,{type:"POST",query:"/v1/chain/get_currency_balance",body:[{key:"code",value:"eosio.token"},{key:"account",value:"ultra.nft.ft"},{key:"symbol",value:"UOS"}]},null,8,["body"])])}const b=s(l,[["render",r]]);export{E as __pageData,b as default};
