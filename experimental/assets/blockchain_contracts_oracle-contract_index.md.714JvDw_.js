import{_ as e,c as a,o as t,N as o}from"./chunks/framework.wHDMMYC3.js";const p=JSON.parse('{"title":"Oracle Contract Overview","description":"","frontmatter":{"title":"Oracle Contract Overview","order":-99},"headers":[],"relativePath":"blockchain/contracts/oracle-contract/index.md","filePath":"blockchain/contracts/oracle-contract/index.md","lastUpdated":null}'),r={name:"blockchain/contracts/oracle-contract/index.md"},i=o('<h1 id="oracle-contract" tabindex="-1">Oracle Contract <a class="header-anchor" href="#oracle-contract" aria-label="Permalink to &quot;Oracle Contract&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><code>eosio.oracle</code> contract is responsible for processing conversion rates from USD to UOS, calculating moving averages for this conversion and storing it inside on-chain tables.</p><p>Oracle infrastructure is owned and managed by Ultra but anyone else can freely access the conversion rates stored in the tables to utilize in your own business logic.</p><h2 id="contract-features" tabindex="-1">Contract features <a class="header-anchor" href="#contract-features" aria-label="Permalink to &quot;Contract features&quot;">​</a></h2><ul><li>Supports multiple exchanges to process rates from</li><li>Exchanges weighted based on the 24 hours trading volume</li><li>Outlier detection removes likely anomalies from the conversion rates</li><li>Supports variety of moving averages with windows ranging from couple seconds up to a couple of days</li><li>Each conversion rate and moving average has an associated timestamp for validation purposes</li></ul><h2 id="tutorials" tabindex="-1">Tutorials <a class="header-anchor" href="#tutorials" aria-label="Permalink to &quot;Tutorials&quot;">​</a></h2><ul><li><a href="./how-does-oracle-contract-calculate-uos-conversion-rate.html">UOS conversion rate is calculation</a><ul><li>Read this guide to better understand how the USD to UOS conversion rate is calculated</li></ul></li><li><a href="./../../../tutorials/oracle/how-to-get-uos-conversion-rate.html">Reading UOS conversion rate</a><ul><li>This tutorial covers how to access and read conversion rates and averages from the Oracle contract</li></ul></li><li><a href="./../../../tutorials/oracle/how-to-validate-and-refresh-moving-average.html">Validating moving averages</a><ul><li>This page covers the validation and seconds level moving average refresh operation</li></ul></li><li><a href="./oracle-tables.html">Oracle contract tables</a><ul><li>If you already went through the tutorial to access conversion rates from the Oracle contract then you can also refer to this page for deeper understanding of the contract table structure</li></ul></li></ul><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><p>Oracle contract is used or can be used in following scenarios</p><ul><li>Any contract logic that requires converting USD to UOS</li><li>Any contract logic that requires the trend or average data for UOS price</li><li>BP payouts for blocks produced</li><li>NFT first-hand and second-hand pricing calculation that is done through USD and converted to UOS</li><li>NFT RAM payment conversion from bytes to USD to UOS</li><li>Ultra Pro Wallet creation price conversion from USD to UOS</li></ul>',11),n=[i];function l(c,s,d,h,u,v){return t(),a("div",null,n)}const g=e(r,[["render",l]]);export{p as __pageData,g as default};
