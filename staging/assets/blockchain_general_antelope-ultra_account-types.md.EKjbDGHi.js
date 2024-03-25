import{_ as e,c as a,o as t,M as o}from"./chunks/framework.aL_TnrV0.js";const y=JSON.parse('{"title":"Account Types","description":"","frontmatter":{"title":"Account Types","outline":[0,4],"order":-98},"headers":[],"relativePath":"blockchain/general/antelope-ultra/account-types.md","filePath":"blockchain/general/antelope-ultra/account-types.md","lastUpdated":null}'),n={name:"blockchain/general/antelope-ultra/account-types.md"},c=o('<h1 id="account-types" tabindex="-1">Account Types <a class="header-anchor" href="#account-types" aria-label="Permalink to &quot;Account Types&quot;">​</a></h1><p>Accounts have a resource cost as RAM is a limited resource on the network. To generate a new account, the RAM must be paid for. In some cases Ultra might cover the costs for account creation and sponsoring RAM for development purposes, in all other cases the user or developer will have to purchase RAM from the on-chain market.</p><p>Ultra has deployed a platform-specific feature called the <code>Easy Blockchain Account</code>, more commonly referred to internally as EBA. We have yet to release public information about how these work.</p><p>In traditional EOSIO accounts, the OWNER permission may change the ACTIVE permission’s keys, and the ACTIVE permission may also change its own keys. In Ultra, the ACTIVE permission may not change its own keys. This applies to both non-EBA accounts and to EBA accounts.</p><p>Non-EBA accounts are equivalent to traditional EOSIO blockchain accounts, in that they are fully managed by the end user. These accounts are used internally by Ultra, and are recommended for developers to deploy their smart contracts to.</p><h2 id="okay-how-do-i-make-an-account" tabindex="-1">Okay, how do I make an account? <a class="header-anchor" href="#okay-how-do-i-make-an-account" aria-label="Permalink to &quot;Okay, how do I make an account?&quot;">​</a></h2><p>We currently allow <strong>EBA accounts</strong> to be created through the official ultra.io client which can be found at <a href="https://ultra.io" target="_blank" rel="noreferrer">https://ultra.io</a>.</p><p>Using our docker image you can create local accounts for testing.</p><ul><li><a href="./../../../blockchain/general/tools/cleos.html#creating-an-account">Read more in the cleos section</a></li></ul>',9),r=[c];function s(l,i,h,u,p,d){return t(),a("div",null,r)}const f=e(n,[["render",s]]);export{y as __pageData,f as default};
