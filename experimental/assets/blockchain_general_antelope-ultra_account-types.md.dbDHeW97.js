import{_ as a,c as e,o as t,N as o}from"./chunks/framework.DlKUEHLQ.js";const f=JSON.parse('{"title":"Account Types","description":"","frontmatter":{"title":"Account Types","outline":[0,4],"order":-98},"headers":[],"relativePath":"blockchain/general/antelope-ultra/account-types.md","filePath":"blockchain/general/antelope-ultra/account-types.md","lastUpdated":null}'),r={name:"blockchain/general/antelope-ultra/account-types.md"},c=o('<h1 id="account-types" tabindex="-1">Account Types <a class="header-anchor" href="#account-types" aria-label="Permalink to &quot;Account Types&quot;">​</a></h1><p>Accounts have a resource cost as RAM is a limited resource on the network. To generate a new account, the RAM must be paid for. In some cases Ultra might cover the costs for account creation and sponsoring RAM for development purposes, in all other cases the user or developer will have to purchase RAM from the on-chain market.</p><p>In traditional EOS blockchain accounts, the OWNER permission may change the ACTIVE permission’s keys, and the ACTIVE permission may also change its own keys. In Ultra, the ACTIVE permission may not change its own keys. This applies to both Ultra Pro Wallets and to Ultra Accounts.</p><h2 id="ultra-account" tabindex="-1">Ultra Account <a class="header-anchor" href="#ultra-account" aria-label="Permalink to &quot;Ultra Account&quot;">​</a></h2><p>Accounts created using Ultra client are referred to as Ultra Accounts. Formerly referred to as <code>Easy Blockchain Account</code> (or EBA). This type of account is managed by Ultra Backend and provides users with account recovery options in case they lose access to their account.</p><p>The name in this case is auto-generated on chain with format of <code>aa1aa2aa3aa4</code> where the positional numerals 1, 2, 3 and 4 remain in the same place for all accounts, but the letters <code>a</code> will be incremented for each new account starting from <code>a</code> and ending at <code>z</code> after which the next <code>a</code> will be incremented to a <code>b</code> and so on (e.g. <code>aa1aa2aa3aa4</code>, <code>aa1aa2aa3ab4</code>, <code>aa1aa2aa3ac4</code>, ... <code>aa1aa2aa3az4</code>, <code>aa1aa2aa3ba4</code>).</p><h2 id="ultra-pro-wallet" tabindex="-1">Ultra Pro Wallet <a class="header-anchor" href="#ultra-pro-wallet" aria-label="Permalink to &quot;Ultra Pro Wallet&quot;">​</a></h2><p>Ultra Pro Wallets (formerly referred to as non-EBA) are equivalent to traditional EOS blockchain accounts, in that they are fully managed by the end user. These accounts are used internally by Ultra, and are recommended for developers to deploy their smart contracts to.</p><p>The name in this case is auto-generated on chain with format of <code>1aa2aa3aa4aa</code> where the positional numerals 1, 2, 3 and 4 remain in the same place for all accounts, but the letters <code>a</code> will be incremented for each new account starting from <code>a</code> and ending at <code>z</code> after which the next <code>a</code> will be incremented to a <code>b</code> and so on (e.g. <code>1aa2aa3aa4aa</code>, <code>1aa2aa3aa4ab</code>, <code>1aa2aa3aa4ac</code>, ... <code>1aa2aa3aa4az</code>, <code>1aa2aa3aa4ba</code>).</p><h2 id="ultra-premium-wallet" tabindex="-1">Ultra Premium Wallet <a class="header-anchor" href="#ultra-premium-wallet" aria-label="Permalink to &quot;Ultra Premium Wallet&quot;">​</a></h2><p>Ownership of the account and private keys is the same as for Ultra Pro Wallet. In this case Ultra will be responsible for personally creating an account for you. The limitation on the name is that it is a single purpose name like <code>devname123</code> or <code>productname</code>. Request for this type of account should be directed to <a href="developers@ultra.io">developers@ultra.io</a></p><h2 id="ultra-corporate-wallet" tabindex="-1">Ultra Corporate Wallet <a class="header-anchor" href="#ultra-corporate-wallet" aria-label="Permalink to &quot;Ultra Corporate Wallet&quot;">​</a></h2><p>Ownership of the account and private keys mirrors that of Ultra Pro Wallet. Ultra is responsible for creating these accounts. Names follow the pattern <code>partner.contract</code>, <code>partner.data</code>, <code>partner.account</code>, or <code>contract.partner</code>, etc. Requests for this type of account should be directed to <a href="developers@ultra.io">developers@ultra.io</a>.</p><h2 id="okay-how-do-i-make-an-account" tabindex="-1">Okay, how do I make an account? <a class="header-anchor" href="#okay-how-do-i-make-an-account" aria-label="Permalink to &quot;Okay, how do I make an account?&quot;">​</a></h2><p>We currently allow <strong>Ultra Accounts</strong> to be created through the official ultra.io client which can be found at <a href="https://ultra.io" target="_blank" rel="noreferrer">https://ultra.io</a>.</p><p>To create <strong>Ultra Pro Wallet</strong>, refer to either <a href="./../../../tutorials/fundamentals/tutorial-generate-key-and-create-testnet-account.html">Testnet tutorial</a> or <a href="./../../../tutorials/guides/how-to-create-ultra-pro-wallet.html">Mainnet guide</a>.</p><p>Using our docker image you can create local accounts for testing.</p><ul><li><a href="./../../../blockchain/general/tools/cleos.html#creating-an-account">Read more in the cleos section</a></li></ul>',18),n=[c];function l(s,i,d,h,u,p){return t(),e("div",null,n)}const b=a(r,[["render",l]]);export{f as __pageData,b as default};
