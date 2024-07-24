import{_ as t,c as e,o as r,N as a}from"./chunks/framework.wVj9vBva.js";const f=JSON.parse('{"title":"KYC - Know Your Client","description":"","frontmatter":{"title":"KYC - Know Your Client","order":2},"headers":[],"relativePath":"blockchain/contracts/system-contract/know-your-client.md","filePath":"blockchain/contracts/system-contract/know-your-client.md","lastUpdated":null}'),o={name:"blockchain/contracts/system-contract/know-your-client.md"},i=a('<h1 id="know-your-client" tabindex="-1">Know Your Client <a class="header-anchor" href="#know-your-client" aria-label="Permalink to &quot;Know Your Client&quot;">​</a></h1><p>Ultra requires that developers who wish to deploy smart contracts on Ultra platform perform a Know Your Client procedure.</p><p>The purpose of the KYC requirement is to allow Ultra&#39;s end users to trust the smart contracts that they interact with. For Ultra this ensures that if there is an issue, we can contact the smart contract owner directly.</p><p>The KYB information ensures that there is no developer anonymity, which ensures that if there are bad actors actively taking advantage of either the network or its users, Ultra can step in.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>Ultra will let KYC providers to push their certificate on-chain. When a sensitive action is executed by a user (buying RAM might be one of such actions), the system checks if there is a KYC provider related to the user’s action.</p><h2 id="relevant-actions" tabindex="-1">Relevant actions <a class="header-anchor" href="#relevant-actions" aria-label="Permalink to &quot;Relevant actions&quot;">​</a></h2><p>All the KYC actions require Ultra authentication. They are listed here for general information only.</p><h2 id="registerkyc-register-kyc-information" tabindex="-1">registerkyc - register KYC information <a class="header-anchor" href="#registerkyc-register-kyc-information" aria-label="Permalink to &quot;registerkyc - register KYC information&quot;">​</a></h2><p>Register KYC info from user with required signature and provider signature.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The account that the KYC information is stored for</td></tr><tr><td>provider</td><td>eosio::name</td><td>The KYC provider</td></tr><tr><td>cert_id</td><td>eosio::checksum256</td><td>The KYC provider certificate ID</td></tr><tr><td>req_signature</td><td>eosio::signature</td><td>The account signature</td></tr><tr><td>pro_signature</td><td>eosio::signature</td><td>The KYC provider signature</td></tr></tbody></table><h2 id="relevant-tables" tabindex="-1">Relevant tables <a class="header-anchor" href="#relevant-tables" aria-label="Permalink to &quot;Relevant tables&quot;">​</a></h2><p><a href="./data-structures-overview.html#kyc-account-kyc-information">kyc - account KYC information</a></p>',13),n=[i];function s(c,h,d,l,u,p){return r(),e("div",null,n)}const k=t(o,[["render",s]]);export{f as __pageData,k as default};
