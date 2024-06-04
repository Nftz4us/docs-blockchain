import{_ as e,c as a,o as t,N as o}from"./chunks/framework.f7A1_Hg1.js";const m=JSON.parse('{"title":"Factory Purchase Options","description":"","frontmatter":{"title":"Factory Purchase Options","order":1},"headers":[],"relativePath":"tutorials/uniq-factories/factory-management/factory-purchase-options.md","filePath":"tutorials/uniq-factories/factory-management/factory-purchase-options.md","lastUpdated":null}'),i={name:"tutorials/uniq-factories/factory-management/factory-purchase-options.md"},r=o('<h1 id="factory-purchase-options" tabindex="-1">Factory Purchase Options <a class="header-anchor" href="#factory-purchase-options" aria-label="Permalink to &quot;Factory Purchase Options&quot;">​</a></h1><h2 id="overview-of-factory-purchase-options-feature" tabindex="-1">Overview of factory purchase options feature <a class="header-anchor" href="#overview-of-factory-purchase-options-feature" aria-label="Permalink to &quot;Overview of factory purchase options feature&quot;">​</a></h2><p>First-hand factory purchase options allow users to receive Uniqs from the factory directly without requiring you to manually issue Uniqs to the users. Various configuration options can be set when creating the purchase option for your factory, and in addition to that each factory can have multiple purchase options available. The usage of the actions to create and utilize purchase options is provided below.</p><ul><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.a.html">setprchsreq.a - set purchase requirement</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.html">setprchsreq.b - set purchase requirement</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/purchase.a.html">purchase.a - purchase a token</a></li></ul><p>The first-hand purchase options provide following benefits to you</p><ul><li>No need for factory manager input to issue a token to the user</li><li>Flexible pricing and conditions: can utilize other factories as a condition and can interact with <a href="./../../../blockchain/contracts/user-group-contract/">user groups contract</a></li><li>Configurable accessibility time window which does not require you to manually disable ability to purchase Uniqs</li></ul><h2 id="purchase-option-use-cases" tabindex="-1">Purchase option use cases <a class="header-anchor" href="#purchase-option-use-cases" aria-label="Permalink to &quot;Purchase option use cases&quot;">​</a></h2><p>There are various use cases that are covered by the first-hand purchase feature. The list below covers the most common ones that are supported:</p><ul><li>Specifying fixed UOS or USD price to purchase from factory <ul><li>To have both prices available simultaneously, you can simply create two purchase options</li></ul></li><li>Restricting the number of Uniqs that can be bought from the specific purchase option <ul><li>To globally limit the number that can be purchased (minted in this case) you have to specify it during the token factory creation</li></ul></li><li>Splitting the purchase revenue between multiple recipients <ul><li>Note that protocol fee still applies and the split only occurs for UOS or USD amounts</li></ul></li><li>Limiting the availability window when Uniqs can be purchased <ul><li>You can set a campaign to open at a later date and have a fixed date when it will end (or no end date at all)</li></ul></li><li>Specifying the price using Uniqs from other factories <ul><li>Allows user to exchange or swap Uniqs</li></ul></li><li>Verify eligibility using Uniqs from other factories or user groups <ul><li>Those are read-only operations, so user does not lose Uniqs or membership of the user group</li></ul></li><li>Migrating Uniqs of the factory to a new one which has desired alternative values set <ul><li>Since some of the values inside the factory cannot be changed after creation that can be an alternative solution to effectively provide the option to users to migrate to a new factory with alternative values</li></ul></li></ul><h3 id="first-hand-purchase-directly-from-uniq-factory" tabindex="-1">First-hand purchase directly from Uniq factory <a class="header-anchor" href="#first-hand-purchase-directly-from-uniq-factory" aria-label="Permalink to &quot;First-hand purchase directly from Uniq factory&quot;">​</a></h3><p>All use cases above are accessible using the <code>setprchsreq.a</code>/<code>setprchsreq.b</code> action and examples are provided in the following page: <a href="./factory-purchase-options-examples.html">factory purchase option examples</a></p><h3 id="swap-uniqs" tabindex="-1">Swap Uniqs <a class="header-anchor" href="#swap-uniqs" aria-label="Permalink to &quot;Swap Uniqs&quot;">​</a></h3><p>In certain situations you may need a more granular condition set which is not provided by the first-hand purchase feature. Since the range of possible conditions you may desire is vast we only limited the feature to the most common ones. For any more advanced usage you should consider utilizing a smart contract instead.</p><p>Refer to <a href="./exchange-a-uniq-using-smart-contract.html">this page</a> for more in-depth explanation of the smart contract usage</p>',14),s=[r];function n(c,l,h,u,p,f){return t(),a("div",null,s)}const y=e(i,[["render",n]]);export{m as __pageData,y as default};
