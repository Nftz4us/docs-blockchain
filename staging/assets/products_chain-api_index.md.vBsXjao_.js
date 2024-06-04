import{_ as e,c as t,o as a,N as r}from"./chunks/framework.1tZ7tdwO.js";const f=JSON.parse('{"title":"API","description":"","frontmatter":{"title":"API","order":-99999},"headers":[],"relativePath":"products/chain-api/index.md","filePath":"products/chain-api/index.md","lastUpdated":null}'),o={name:"products/chain-api/index.md"},s=r('<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><p>Ultra&#39;s blockchain REST API uses HTTP methods to communicate with network.</p><p>Endpoints are available for retrieving data, submitting transactions, and executing smart contracts.</p><p><em>It is recommended to use a package such as <a href="https://www.npmjs.com/package/@ultraos/ultra-api-lib" target="_blank" rel="noreferrer">@ultraos/ultra-api-lib</a> for handling transactions or more complex API calls.</em></p><h2 id="producer-endpoints" tabindex="-1">Producer Endpoints <a class="header-anchor" href="#producer-endpoints" aria-label="Permalink to &quot;Producer Endpoints&quot;">​</a></h2><p>These endpoints all support <code>/v1</code> API calls.</p><p><strong>Main Network (Production)</strong></p><p>Chain ID:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097</span></span></code></pre></div><ul><li><a href="http://ultra.api.eosnation.io" target="_blank" rel="noreferrer">http://ultra.api.eosnation.io</a></li><li><a href="https://ultra.eosrio.io" target="_blank" rel="noreferrer">https://ultra.eosrio.io</a></li><li><a href="https://api.ultra.cryptolions.io/" target="_blank" rel="noreferrer">https://api.ultra.cryptolions.io/</a></li><li><a href="https://ultra-api.eoseoul.io/" target="_blank" rel="noreferrer">https://ultra-api.eoseoul.io/</a></li><li><a href="https://ultra.eosusa.io" target="_blank" rel="noreferrer">https://ultra.eosusa.io</a></li><li><a href="https://api.ultra.eossweden.org" target="_blank" rel="noreferrer">https://api.ultra.eossweden.org</a></li></ul><p><strong>Test Network (Staging)</strong></p><p>Chain ID:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9</span></span></code></pre></div><ul><li><a href="https://ultratest-api.eoseoul.io/" target="_blank" rel="noreferrer">https://ultratest-api.eoseoul.io/</a></li><li><a href="http://ultratest.api.eosnation.io" target="_blank" rel="noreferrer">http://ultratest.api.eosnation.io</a></li><li><a href="https://testnet.ultra.eosrio.io" target="_blank" rel="noreferrer">https://testnet.ultra.eosrio.io</a></li><li><a href="https://test.ultra.eosusa.io" target="_blank" rel="noreferrer">https://test.ultra.eosusa.io</a></li><li><a href="https://api.ultra-testnet.cryptolions.io" target="_blank" rel="noreferrer">https://api.ultra-testnet.cryptolions.io</a></li><li><a href="https://api.testnet.ultra.eossweden.org" target="_blank" rel="noreferrer">https://api.testnet.ultra.eossweden.org</a></li></ul><p><strong>Example</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>http://ultra.api.eosnation.io/v1/chain/get_info</span></span></code></pre></div><h2 id="hyperion-endpoints" tabindex="-1">Hyperion Endpoints <a class="header-anchor" href="#hyperion-endpoints" aria-label="Permalink to &quot;Hyperion Endpoints&quot;">​</a></h2><p>These allow for a <code>/v2</code> API call, useful for <code>get-transaction</code> API endpoint</p><p><strong>Main Network (Production)</strong></p><ul><li><a href="https://ultra.eosusa.io" target="_blank" rel="noreferrer">https://ultra.eosusa.io</a></li><li><a href="https://api.ultra.eossweden.org" target="_blank" rel="noreferrer">https://api.ultra.eossweden.org</a></li></ul><p><strong>Test Network (Staging)</strong></p><ul><li><a href="https://api.testnet.ultra.eossweden.org" target="_blank" rel="noreferrer">https://api.testnet.ultra.eossweden.org</a></li><li><a href="https://test.ultra.eosusa.io" target="_blank" rel="noreferrer">https://test.ultra.eosusa.io</a></li></ul>',22),i=[s];function n(l,p,h,c,u,d){return a(),t("div",null,i)}const b=e(o,[["render",n]]);export{f as __pageData,b as default};
