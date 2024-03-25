import{_ as a,c as e,o,M as s}from"./chunks/framework.3xTpxyva.js";const t="/experimental/assets/explorer-balance.edD4tRvF.png",n="/experimental/assets/explorer-costs.Csw0hTA1.png",r="/experimental/assets/explorer-permissions.WzHHj4gl.png",l="/experimental/assets/explorer-permissions-advanced.34bqyxyW.png",c="/experimental/assets/explorer-abi.NI6N_8Gv.png",i="/experimental/assets/explorer-tables.BilU85M0.png",w=JSON.parse('{"title":"How to read the Block Explorer","description":"","frontmatter":{"title":"How to read the Block Explorer","order":-99996,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/fundamentals/how-to-read-the-block-explorer.md","filePath":"tutorials/fundamentals/how-to-read-the-block-explorer.md","lastUpdated":null}'),p={name:"tutorials/fundamentals/how-to-read-the-block-explorer.md"},d=s(`<h1 id="how-to-read-the-block-explorer" tabindex="-1">How to read the Block Explorer <a class="header-anchor" href="#how-to-read-the-block-explorer" aria-label="Permalink to &quot;How to read the Block Explorer&quot;">​</a></h1><p>A block explorer is a web tool that allows users to view information about cryptocurrency transactions and blockchain data. It provides details such as transaction history, wallet balances, and block information, enhancing transparency and accountability.</p><h2 id="our-explorers" tabindex="-1">Our Explorers <a class="header-anchor" href="#our-explorers" aria-label="Permalink to &quot;Our Explorers&quot;">​</a></h2><ul><li><a href="https://explorer.mainnet.ultra.io/" target="_blank" rel="noreferrer">Main Network</a></li><li><a href="https://explorer.testnet.ultra.io/" target="_blank" rel="noreferrer">Test Network (You probably want this one)</a></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>In most cases the search bar at the top takes any of the following:</p><ul><li>Account Name</li><li>Transaction ID</li><li>Block Number</li></ul><h3 id="example-queries" tabindex="-1">Example Queries <a class="header-anchor" href="#example-queries" aria-label="Permalink to &quot;Example Queries&quot;">​</a></h3><details class="details custom-block"><summary>Examples</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>account:eosio.token </span></span>
<span class="line"><span></span></span>
<span class="line"><span>receiver:eosio.token (data.from:eoscanadacom OR data.to:eoscanadacom)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(auth:eoscanadacom OR receiver:eoscanadacom)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>account:eosio.token action:transfer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(ram.consumed:eoscanadacom OR ram.released:eoscanadacom)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receiver:eosio.token </span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.table:global</span></span></code></pre></div><p>Examples pulled from <a href="https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/" target="_blank" rel="noreferrer">dFuse Docs</a></p></details><h2 id="account-page" tabindex="-1">Account Page <a class="header-anchor" href="#account-page" aria-label="Permalink to &quot;Account Page&quot;">​</a></h2><h3 id="account-balance" tabindex="-1">Account Balance <a class="header-anchor" href="#account-balance" aria-label="Permalink to &quot;Account Balance&quot;">​</a></h3><p>Account balance is available at the top.</p><p><img src="`+t+'" alt=""></p><h3 id="ram-power" tabindex="-1">RAM &amp; Power <a class="header-anchor" href="#ram-power" aria-label="Permalink to &quot;RAM &amp; Power&quot;">​</a></h3><p>Both of these are available on the account page as well.</p><p><code>∞</code> means the account has no limitations. Otherwise, most accounts have a limitation.</p><p>Storing data on-chain costs <code>RAM</code>.</p><p>Executing transactions utilizes <code>POWER</code>.</p><p><img src="'+n+'" alt=""></p><h3 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h3><p>You can see who owns an account, or what key has control over an account under the <code>permissions</code> section.</p><p>The +1/1 shows how many signatures are necessary to act on behalf of a <code>permission</code>. Permission being <code>active</code> or <code>owner</code> in the example below.</p><p><img src="'+r+'" alt=""></p><p>In the example below the <code>tech</code> <code>permission</code> requires two users to a transaction to act on behalf of the <code>ultra@tech</code> account.</p><p><img src="'+l+'" alt=""></p><h3 id="contracts" tabindex="-1">Contracts <a class="header-anchor" href="#contracts" aria-label="Permalink to &quot;Contracts&quot;">​</a></h3><p>When you are on an account page such as <code>eosio.token</code> you can see that it has a contract deployed because it has the <code>tables</code> and <code>ABI</code> tabs.</p><p><img src="'+c+'" alt=""></p><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h3><p>Tables can be browsed for additional information if you&#39;re aware of how the table is structured. In the case of <code>eosio.nft.ft</code> I can view the <code>factory.b</code> table to see available Uniqs. Tables available can be gathered from the <code>abi</code> tab.</p><p>It&#39;s highly recommended to use <code>curl</code> requests against <a href="./how-to-make-a-rest-request.html">REST API Endpoints</a> when reading data, or write a small script in one of your favorite programming languages.</p><p><img src="'+i+'" alt=""></p>',32),h=[d];function u(m,b,f,x,g,k){return o(),e("div",null,h)}const q=a(p,[["render",u]]);export{w as __pageData,q as default};
