import{_ as a,c as t,o as e,N as i}from"./chunks/framework.F4ceOzBN.js";const q=JSON.parse('{"title":"Uniq Variants","description":"","frontmatter":{"title":"Uniq Variants","order":-99999},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/index.md","filePath":"tutorials/uniq-factories/uniq-variants/index.md","lastUpdated":null}'),n={name:"tutorials/uniq-factories/uniq-variants/index.md"},o=i('<h1 id="uniq-variants" tabindex="-1">Uniq Variants <a class="header-anchor" href="#uniq-variants" aria-label="Permalink to &quot;Uniq Variants&quot;">​</a></h1><p>This section aims to inform our users of how Uniq&#39;s and their individual variants currently work. It will help familiarize end users with our terminology, and how our Uniq data is structured.</p><h2 id="terminology" tabindex="-1">Terminology <a class="header-anchor" href="#terminology" aria-label="Permalink to &quot;Terminology&quot;">​</a></h2><p>These are generalized terms to help identify how the developers at Ultra speak about the NFTs that are minted.</p><ul><li><p>Uniq</p><ul><li>NFT</li><li>A uniq is a single token that is generated by a Uniq Factory.</li><li>A uniq can have its own unique <strong>uri</strong> which points to metadata.</li></ul></li><li><p>Uniq Factory</p><ul><li>A uniq factory is a system that mints tokens based on specific metadata.</li><li>Each factory on-chain has the following: <ul><li>factory_uri</li><li>factory_hash</li><li>default_token_uri</li><li>default_token_hash</li></ul></li><li>The values above are used to determine where metdata is located, and the hash is made from the contents of the metadata file.</li></ul></li><li><p>Metadata</p><ul><li>Is a type of dataset that is stored off-chain and usually has different hashes to verify the authenticity of the data.</li><li>Inside you can usually find links to images, descriptions, and traits for a given token, or factory.</li></ul></li><li><p>Hash</p><ul><li>A set of bytes that are strung together to generate a unique string based on those bytes of data.</li><li>In Ultra&#39;s case we use the SHA-256 algorithm for its wide availability across all platforms</li></ul></li><li><p>Uniq Default Token</p><ul><li>Uniq&#39;s utilize a default token to apply a template to any token that does not have unique data.</li><li>The metadata from this file is automatically applied.</li></ul></li></ul><h3 id="recap" tabindex="-1">Recap <a class="header-anchor" href="#recap" aria-label="Permalink to &quot;Recap&quot;">​</a></h3><p>This is the short version of the above.</p><ul><li>Uniq Factories create Uniq&#39;s that contain references to their uniq factory, or individual metadata.</li><li>Metadata can be obtained by visiting the various URLs inside of a factory, or an individual token.</li><li>All uniqs can have their own metadata, or utilize a single default template for all uniqs.</li><li>The authenticity of data is verified by the SHA256 algorithm by hashing the contents of files, and the files inside of the files.</li></ul><h2 id="uniq-factory-metadata" tabindex="-1">Uniq Factory Metadata <a class="header-anchor" href="#uniq-factory-metadata" aria-label="Permalink to &quot;Uniq Factory Metadata&quot;">​</a></h2><p>Each Uniq Factory is required to utilize our schema&#39;s to help standardize the system across our entire platform.</p><p>In the link provided below, you can learn more about how this uniq factory metadata is built, and what to expect when building your own uniq factory.</p><blockquote><p><a href="./factory-metadata.html">Factory Metadata</a></p></blockquote><h2 id="uniq-default-token-metadata" tabindex="-1">Uniq Default Token Metadata <a class="header-anchor" href="#uniq-default-token-metadata" aria-label="Permalink to &quot;Uniq Default Token Metadata&quot;">​</a></h2><p>Depending on the factory strategy it may either supply a <code>default_token_uri</code> or individually link to a <code>uri</code> inside of the uniq itself. The uniq can be <em>revealed</em> at runtime by appending the <code>uri</code> that is necessary for a unqi to have its own metadata.</p><p>Factory managers may choose to lock a uniq&#39;s data after it is minted depending on how they would like to distribute their uniqs.</p><p>In the link provided below, you can learn more about the default token and its given format.</p><blockquote><p><a href="./uniq-default-metadata.html">Uniq Default Metadata</a></p></blockquote><h2 id="uniqs" tabindex="-1">Uniqs <a class="header-anchor" href="#uniqs" aria-label="Permalink to &quot;Uniqs&quot;">​</a></h2><p>Uniqs have their own schema that is shared with the default token, but there are a few differences in how it functions. In the link provided below you can learn more about what actions to call, and individual changes that can be applied to a uniq.</p><blockquote><p><a href="./uniq-metadata.html">Uniq Metadata</a></p></blockquote><h2 id="relevant-actions" tabindex="-1">Relevant Actions <a class="header-anchor" href="#relevant-actions" aria-label="Permalink to &quot;Relevant Actions&quot;">​</a></h2><p>Below you can find some relevant blockchain actions for the <code>eosio.nft.ft</code> account for managing uniqs, uniq factories, and their status.</p><ul><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/setmeta.b.html">Set Factory Meta</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/setdflttkn.html">Set Default Uniq Meta</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/settknmeta.html">Set Uniq Meta</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/lckfactory.html">Lock Factory</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/create.b.html">Create Uniq Factory</a></li><li><a href="./../../../blockchain/contracts/nft-contract/nft-actions/issue.b.html">Issue Uniq</a></li></ul>',23),l=[o];function r(s,c,h,d,u,f){return e(),t("div",null,l)}const p=a(n,[["render",r]]);export{q as __pageData,p as default};
