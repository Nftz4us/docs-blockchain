import{_ as t}from"./chunks/toolkit-network-selection.GIwkg7O7.js";import{_ as o}from"./chunks/toolkit-login-button.jkvZJaY_.js";import{_ as e}from"./chunks/toolkit-login-account-name.QPPYHSRi.js";import{_ as a,c as l,o as n,N as i}from"./chunks/framework.eKw9w8LU.js";const c="/assets/anchor-wallet-setup-account.BQBPQx7r.png",s="/assets/anchor-wallet-set-pwd._4nEfCyA.png",r="/assets/anchor-wallet-confirm-pwd.vGB4XwIN.png",h="/assets/anchor-wallet-chains-page.1z100W9g.png",p="/assets/anchor-wallet-manage-chains.JaV2n1lR.png",d="/assets/anchor-wallet-manage-add-remove.kzUnZnFX.png",u="/assets/anchor-wallet-uncheck-eos.vNHLZO2_.png",g="/assets/anchor-wallet-add-new-chain.mqlYjTO9.png",m="/assets/anchor-wallet-enable-chain.O85weqfJ.png",w="/assets/anchor-wallet-available-chains.-rInKc_n.png",k="/assets/anchor-wallet-import-account.tPgcXFP5.png",f="/assets/anchor-wallet-import-pvt-key.kXUg_B53.png",_="/assets/anchor-wallet-import-pvt-key-pt2.nX_G4Qfg.png",b="/assets/anchor-wallet-account-imported.MVWP3WMc.png",y="/assets/toolkit-login-options-anchor.2Fv7g6xQ.png",A="/assets/toolkit-login-anchor-prompt.GNtQ5c8K.png",U="/assets/anchor-authorize-login.qJvMRjPw.png",T="/assets/anchor-authorize-login-pwd.iE8UCuZR.png",I=JSON.parse('{"title":"How to log in to the Ultra Tool Kit using Anchor Wallet","description":"","frontmatter":{"title":"How to log in to the Ultra Tool Kit using Anchor Wallet","order":-99999,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/advanced-guides/how-to-login-to-toolkit-using-anchor-wallet.md","filePath":"tutorials/advanced-guides/how-to-login-to-toolkit-using-anchor-wallet.md","lastUpdated":null}'),v={name:"tutorials/advanced-guides/how-to-login-to-toolkit-using-anchor-wallet.md"},q=i('<h1 id="how-to-log-in-to-the-ultra-tool-kit-using-anchor-wallet" tabindex="-1">How to log in to the Ultra Tool Kit using Anchor Wallet <a class="header-anchor" href="#how-to-log-in-to-the-ultra-tool-kit-using-anchor-wallet" aria-label="Permalink to &quot;How to log in to the Ultra Tool Kit using Anchor Wallet&quot;">​</a></h1><p>Ultra Tool Kit is a decentralized application facilitating seamless interaction with the Ultra blockchain and its smart contracts. Designed for developers, it provides essential functionalities such as interacting with Ultra smart contracts, searching for Uniqs, Uniq Factories and Users.</p><p>This tutorial will cover the simplest process of logging in to the Ultra Tool Kit using <a href="https://www.greymass.com/anchor" target="_blank" rel="noreferrer">Anchor Wallet</a>. Anchor is a security and privacy focused open-source digital wallet for all Antelope-based networks.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>You must have created your Ultra Pro Wallet. If you need help creating your Ultra Pro Wallet, please refer to <a href="./../guides/how-to-create-ultra-pro-wallet-using-toolkit.html">How to create an Ultra Pro Wallet using Ultra Wallet Extension</a> tutorial.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to login into the Ultra Tool Kit using Anchor Wallet.</p><h2 id="setting-up-anchor-wallet" tabindex="-1">Setting Up Anchor Wallet <a class="header-anchor" href="#setting-up-anchor-wallet" aria-label="Permalink to &quot;Setting Up Anchor Wallet&quot;">​</a></h2><ol><li><p>Download Anchor (<a href="https://www.greymass.com/anchor#download" target="_blank" rel="noreferrer">https://www.greymass.com/anchor#download</a>) and follow the installation instructions.</p></li><li><p>Once installed, open Anchor Wallet and click on the <code>Setup an Account</code> button. <img src="'+c+'" alt=""></p></li><li><p>Enter a password for the Anchor Wallet, and click on <code>Set Password</code> button. Remember this password as this will be used every time you sign a transaction through Anchor. <img src="'+s+'" alt=""></p></li><li><p>Re-enter the password in the password confirmation screen and click <code>Set Password</code> again. <img src="'+r+'" alt=""></p></li><li><p>You will now see a list of different blockchains. From the list, click on <code>EOS</code>. <img src="'+h+'" alt=""></p></li><li><p>Click on the top left EOS icon and then click on <code>Manage Blockchains</code>. <img src="'+p+'" alt=""></p></li><li><p>On the manage blockchains page, click on <code>Add/Remove</code>. <img src="'+d+'" alt=""></p></li><li><p>You will see a list of available blockchain networks, from the list find <code>EOS</code> and uncheck the checkbox next to it, and then click on the <code>+ Custom Blockchain</code> button on the top right. <img src="'+u+'" alt=""></p></li><li><p>You will be prompted to add a new chain. Use the following details:</p><ul><li><strong>For Mainnet:</strong><ul><li>Chain ID: <code>a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097</code></li><li>Name of Blockchain: <code>Ultra Mainnet</code></li><li>Default Node: <code>https://ultra.api.eosnation.io</code></li><li>Default Token Symbol: <code>UOS</code></li></ul></li></ul><p><img src="'+g+'" alt=""> For the sake of this tutorial, we are using <code>Mainnet</code> network, but you can follow the same steps to add Ultra <code>Testnet</code> network too.</p><ul><li><strong>For Testnet:</strong><ul><li>Chain ID: <code>7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9</code></li><li>Name of Blockchain: <code>Ultra Testnet</code></li><li>Default Node: <code>https://ultratest.api.eosnation.io</code></li><li>Default Token Symbol: <code>UOS</code></li></ul></li></ul><p>Click on the <code>Save</code> button to proceed.</p></li><li><p>You will now see <code>Ultra Mainnet</code> added to the list of available blockchain networks. Check the checkbox next to <code>Ultra Mainnet</code> and click on the <code>Enable 1 blockchains</code> button. <img src="'+m+'" alt=""></p></li><li><p>After enabling <code>Ultra Mainnet</code>, you&#39;ll be redirected to <code>Manage Available Blockchains</code> page. From this page, select <code>Ultra Mainnet</code>. <img src="'+w+'" alt=""></p></li><li><p>You will now see the <code>Setup a Wallet</code> page. Click on the <code>Import an existing Account</code> button, and then click on <code>Import Private Key</code>. <img src="'+k+'" alt=""><img src="'+f+'" alt=""></p><p>Enter the private key associated with your Ultra Pro account, and it will load a list of all associated accounts for that private key. From the list of accounts, select the one that you want to use. This is usually the account with <code>@active</code> in its name.</p><p>Once selected, click on the <code>Import Account(s)</code> button. <img src="'+_+'" alt=""></p></li><li><p>After importing your account, you will see the account home page. On this page you can see your account balance and your account name. <img src="'+b+'" alt=""></p><p>You have now successfully added your Ultra Pro account to Anchor wallet.</p></li></ol><h2 id="accessing-the-tool-kit" tabindex="-1">Accessing the Tool Kit <a class="header-anchor" href="#accessing-the-tool-kit" aria-label="Permalink to &quot;Accessing the Tool Kit&quot;">​</a></h2><p>To access the Ultra Tool Kit, please visit: <a href="https://toolkit.ultra.io" target="_blank" rel="noreferrer">https://toolkit.ultra.io</a></p><h2 id="network-selection" tabindex="-1">Network Selection <a class="header-anchor" href="#network-selection" aria-label="Permalink to &quot;Network Selection&quot;">​</a></h2><p>Once you&#39;re on the Tool Kit homepage, click on the network selection component on the top right of your screen.</p><p><img src="'+t+'" alt=""></p><p>Clicking on the network selection component will open up a list of available networks that you can use the tool kit on. For the sake of this tutorial, we will be using the Ultra Mainnet. From the list of available networks, click on <code>Mainnet</code>.</p><h2 id="login-to-tool-kit" tabindex="-1">Login to Tool Kit <a class="header-anchor" href="#login-to-tool-kit" aria-label="Permalink to &quot;Login to Tool Kit&quot;">​</a></h2><p>Click on the <code>Login To Tool Kit</code> button to open a list of all supported login methods, and then select the <code>Anchor</code> option.</p><p><img src="'+o+'" alt=""></p><p><img src="'+y+'" alt=""></p><p>Once you click on <code>Anchor</code> option, a login modal will be opened. This may automatically launch your Anchor wallet. If not, you can click on the <code>Launch Anchor</code> button to open Anchor wallet on your machine.</p><p><img src="'+A+'" alt=""></p><p>From your Anchor wallet window, you will see a prompt for signing request. Click on the <code>Unlock Wallet + Sign</code> button to continue.</p><p><img src="'+U+'" alt=""></p><p>Enter your Anchor password and click on <code>Authorize</code> button.</p><p><img src="'+T+'" alt=""></p><p>Once authorized, you will be logged in to the tool kit. You can verify this by checking for your account name in the top left corner of your screen.</p><p><img src="'+e+'" alt=""></p><p>You have now successfully logged in to the Ultra Tool Kit using Anchor Wallet.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>After logging in to the tool kit, you can utilize it to sign transactions with your Anchor Wallet. Explore the following tutorials which demonstrate the process with Ultra Wallet. However, you can seamlessly adapt these instructions to sign transactions with your Anchor Wallet.</p><ul><li><a href="./../fundamentals/tutorial-token-transfer-and-nft-purchase.html">Tutorial - Token transfer and Uniq purchase transactions</a></li></ul>',31),P=[q];function W(x,S,K,O,C,M){return n(),l("div",null,P)}const D=a(v,[["render",W]]);export{I as __pageData,D as default};
