import{_ as e,c as a,o as t,N as o}from"./chunks/framework.UwpMnNk-.js";const p=JSON.parse('{"title":"FAQ","description":"","frontmatter":{"title":"FAQ","order":-99998},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/faq.md","filePath":"tutorials/uniq-factories/uniq-variants/faq.md","lastUpdated":null}'),n={name:"tutorials/uniq-factories/uniq-variants/faq.md"},i=o('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="whats-the-difference-between-asset-creator-and-asset-manager-roles-inside-token-factory" tabindex="-1">Whats the difference between asset creator and asset manager roles inside token factory? <a class="header-anchor" href="#whats-the-difference-between-asset-creator-and-asset-manager-roles-inside-token-factory" aria-label="Permalink to &quot;Whats the difference between asset creator and asset manager roles inside token factory?&quot;">​</a></h2><p>Asset creator is an entity responsible for the fact of token factory creation. Being an asset creator implies that due to your initiative this token factory is created.</p><p>On the other hand asset manager is the one responsible for any changes done to the factory itself. Asset manager regulates all factory settings and performs minting of tokens. His signature is also required to create a token factory as a sign of cooperation between the creator and manager</p><p>Asset creator and manager can be (and often is) the same entity</p><h2 id="why-can-t-i-provide-a-simple-uri-to-the-image-for-factory-token" tabindex="-1">Why can&#39;t I provide a simple URI to the image for factory/token? <a class="header-anchor" href="#why-can-t-i-provide-a-simple-uri-to-the-image-for-factory-token" aria-label="Permalink to &quot;Why can&#39;t I provide a simple URI to the image for factory/token?&quot;">​</a></h2><p>NFT standard developed by Ultra aims not only to extend the flexibility offered to the developers but also to provide a good user experience. As such in Ultra client for better visual feedback we are displaying different versions of the desired Uniq image that better fits the user interface and requires the developer to provide those different image variations as to not accidentally mess up your work with automated processing</p><p>In addition to that by requiring a metadata to be represented as a JSON with clearly defined standard version and layout we reduce ambiguity for all parties</p><h2 id="why-isn-t-metadata-stored-on-chain" tabindex="-1">Why isn&#39;t metadata stored on-chain? <a class="header-anchor" href="#why-isn-t-metadata-stored-on-chain" aria-label="Permalink to &quot;Why isn&#39;t metadata stored on-chain?&quot;">​</a></h2><p>Depending on the use case the metadata files could be as large as a couple of megabytes. Since the RAM is a limited and expensive resource for the blockchain we want to minimize the impact of NFT standard on it. In addition to that even if metadata was to be stored on-chain that won&#39;t be sufficient for a complete solution as it will still refer to media files stored off-chain</p><h2 id="why-do-i-need-to-know-token-owner-to-find-token-metadata" tabindex="-1">Why do I need to know token owner to find token metadata? <a class="header-anchor" href="#why-do-i-need-to-know-token-owner-to-find-token-metadata" aria-label="Permalink to &quot;Why do I need to know token owner to find token metadata?&quot;">​</a></h2><p>There could be many different use cases for associating a specific token with some other property (token id, token factory id, token owner, serial number, etc). We decided that the most common use case is to view a list of tokens owned by a specific user since any interaction with a specific token always goes through the owner of that token (e.g. to transfer or sell a token you need owner&#39;s approval).</p><p>If there is a need to bypass that requirement (e.g. showing a gallery of all tokens for a specific token factory) then you must rely on alternative solutions either through streaming or by querying the full metadata table and performing data manipulation locally</p><h2 id="why-some-actions-have-b-or-similar-extension-at-the-end-and-others-don-t-why-i-can-or-can-t-use-the-action-without-b-extension-instead" tabindex="-1">Why some actions have .b (or similar) extension at the end and others don&#39;t? Why I can (or can&#39;t) use the action without .b extension instead? <a class="header-anchor" href="#why-some-actions-have-b-or-similar-extension-at-the-end-and-others-don-t-why-i-can-or-can-t-use-the-action-without-b-extension-instead" aria-label="Permalink to &quot;Why some actions have .b (or similar) extension at the end and others don&#39;t? Why I can (or can&#39;t) use the action without .b extension instead?&quot;">​</a></h2><p>Extensions such as <code>.b</code> indicate a next iteration of the specific action. This is done for actions that have a breaking change in the interface or in the data they are referencing (e.g. <code>issue.b</code> action will work with contract tables <code>token.b</code> and <code>factory.b</code> and only after it is activated).</p><p>Some actions that don&#39;t have this extension will redirect you to a new version automatically by converting provided arguments (e.g. <code>issue</code> action will trigger <code>issue.b</code>), but you are still advised to use an appropriate latest available action.</p><p>Some actions may not have a newer iteration available in case no changes are done to the interface or the logic is backwards compatible (e.g. <code>setstatus</code>)</p><h2 id="can-i-hide-metadata-until-i-am-ready-to-reveal-it-how-can-i-use-a-serial-number-of-the-token-as-a-part-of-the-metadata-uri-how-do-i-avoid-micromanaging-uri-hashes-on-chain" tabindex="-1">Can I hide metadata until I am ready to reveal it? How can I use a serial number of the token as a part of the metadata URI? How do I avoid micromanaging URI/hashes on-chain? <a class="header-anchor" href="#can-i-hide-metadata-until-i-am-ready-to-reveal-it-how-can-i-use-a-serial-number-of-the-token-as-a-part-of-the-metadata-uri-how-do-i-avoid-micromanaging-uri-hashes-on-chain" aria-label="Permalink to &quot;Can I hide metadata until I am ready to reveal it? How can I use a serial number of the token as a part of the metadata URI? How do I avoid micromanaging URI/hashes on-chain?&quot;">​</a></h2><p>Refer to pages related to <a href="./organizing-metadata.html">organizing factory metadata</a> and <a href="./Examples/variant-example-use-cases.html">example use cases</a></p><h2 id="why-can-t-i-use-my-own-ram-to-store-nft-data-instead-of-paying-a-fee" tabindex="-1">Why can&#39;t I use my own RAM to store NFT data instead of paying a fee? <a class="header-anchor" href="#why-can-t-i-use-my-own-ram-to-store-nft-data-instead-of-paying-a-fee" aria-label="Permalink to &quot;Why can&#39;t I use my own RAM to store NFT data instead of paying a fee?&quot;">​</a></h2><p>On Ultra blockchain the RAM price fluctuates based on the available supply meaning that for one developer the price to publish token factory and mint tokens will be different compared to another developer and will fluctuate over time.</p><p>To avoid this issue and make the process of creating a Uniq factory predictable in terms of cost we enforce a flat fee specified in USD and does not depend on any blockchain state. But note that the payment for RAM in this case is still done in UOS by using USD/UOS conversion rate.</p><h2 id="why-is-x-storage-solution-not-supported" tabindex="-1">Why is X storage solution not supported? <a class="header-anchor" href="#why-is-x-storage-solution-not-supported" aria-label="Permalink to &quot;Why is X storage solution not supported?&quot;">​</a></h2><p>Right now our Backend expects all external data to be accessible through simple HTTP/HTTPS endpoints. In case your storage solution relies on some other type of the protocol you are temporarily encouraged to use a proxy server that will serve the media through HTTP/HTTPS protocol</p>',24),r=[i];function s(d,h,c,l,f,u){return t(),a("div",null,r)}const y=e(n,[["render",s]]);export{p as __pageData,y as default};
