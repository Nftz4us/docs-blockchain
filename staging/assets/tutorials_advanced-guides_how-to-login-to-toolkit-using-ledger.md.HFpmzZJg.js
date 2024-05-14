import{a as o,_ as l}from"./chunks/toolkit-login-button.OwUTqSmN.js";import{_ as n}from"./chunks/toolkit-login-account-name.T4ABDNep.js";import{_ as s,D as c,c as d,k as e,a as t,I as g,N as i,o as u}from"./chunks/framework.UwpMnNk-.js";const h="/staging/assets/ledger-search-eos-app.tR3OIcR4.png",p="/staging/assets/ledger1.nruB2VM_.jpg",f="/staging/assets/ledger2.t35UKnrA.jpg",m="/staging/assets/ledger3.2n7zqWJR.jpg",a="/staging/assets/toolkit-login-options-ledger.FdqHS_8_.png",k="/staging/assets/toolkit-legder-login-show-pub-key.7_PW910t.png",_="/staging/assets/toolkit-ledger-login-index.8b82KyNS.png",w="/staging/assets/toolkit-ledger-account-selection.e0Q2Y5um.png",A=JSON.parse('{"title":"How to log in to the Ultra Toolkit using Ledger","description":"","frontmatter":{"title":"How to log in to the Ultra Toolkit using Ledger","order":-99998,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/advanced-guides/how-to-login-to-toolkit-using-ledger.md","filePath":"tutorials/advanced-guides/how-to-login-to-toolkit-using-ledger.md","lastUpdated":null}'),y={name:"tutorials/advanced-guides/how-to-login-to-toolkit-using-ledger.md"},b=i('<h1 id="how-to-log-in-to-the-ultra-toolkit-using-ledger" tabindex="-1">How to log in to the Ultra Toolkit using Ledger <a class="header-anchor" href="#how-to-log-in-to-the-ultra-toolkit-using-ledger" aria-label="Permalink to &quot;How to log in to the Ultra Toolkit using Ledger&quot;">​</a></h1><p>Ultra Toolkit is a decentralized application facilitating seamless interaction with the Ultra blockchain and its smart contracts. Designed for developers, it provides essential functionalities such as interacting with Ultra smart contracts, searching for Uniqs, Uniq Factories and Users.</p><p>This tutorial will cover the simplest process of logging in into the Ultra Toolkit using a <a href="https://www.ledger.com" target="_blank" rel="noreferrer">Ledger Device</a>. Ledger devices are hardware crypto wallets that store your private keys offline.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2>',4),v=e("li",null,[t("You must have a "),e("a",{href:"https://www.ledger.com",target:"_blank",rel:"noreferrer"},"Ledger Device"),t(". For the sake of this tutorial, we are going to use a Ledger Nano X.")],-1),T=e("li",null,[t("You must have already an account created via official "),e("a",{href:"https://ultra.io/",target:"_blank",rel:"noreferrer"},"Ultra client"),t(" or Ultra Wallet extension. Refer to the "),e("a",{href:"./../guides/how-to-create-ultra-pro-wallet.html"},"How to create an Ultra Pro Wallet using Ultra Wallet Extension"),t(" tutorial to create an account.")],-1),L=i('<h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to login into the Ultra Toolkit using Ledger.</p><h2 id="setting-up-ledger-for-eos" tabindex="-1">Setting Up Ledger for EOS <a class="header-anchor" href="#setting-up-ledger-for-eos" aria-label="Permalink to &quot;Setting Up Ledger for EOS&quot;">​</a></h2><ol><li>Follow instructions provided with your Ledger device and ensure you install the companion <a href="https://www.ledger.com/ledger-live" target="_blank" rel="noreferrer">Ledger Live</a> application.</li><li>Once installed, connect your Ledger and open Ledger Live application. Navigate to <code>My Ledger</code> section from the sidebar and search for <code>EOS</code> application in the <code>App Catalog</code> section. <img src="'+h+'" alt=""></li><li>Install the EOS application by clicking the <code>Install</code> button.</li><li>After you install the EOS application, you will need to go open the EOS application from your Ledger device and then head into settings, and set &quot;Contract data&quot; setting to be allowed. <img src="'+p+'" alt=""><img src="'+f+'" alt=""><img src="'+m+'" alt=""></li></ol><h2 id="getting-public-key-from-ledger" tabindex="-1">Getting Public Key from Ledger <a class="header-anchor" href="#getting-public-key-from-ledger" aria-label="Permalink to &quot;Getting Public Key from Ledger&quot;">​</a></h2><p>Your ledger device comes with multiple public keys. Each public key is assigned an index value starting from <code>0</code>. For the sake of this tutorial, we will use the first public key (i.e; the public key at index <code>0</code>).</p><p>To obtain the public key of your Ledger, go to Ultra Toolkit (<a href="https://toolkit.ultra.io" target="_blank" rel="noreferrer">https://toolkit.ultra.io</a>), and click on the <code>Login To Toolkit</code> button to open a list of all supported login methods, and then select the <code>Ledger</code> option.</p><p><img src="'+o+'" alt=""></p><p><img src="'+a+'" alt=""></p><p>The new prompt will ask you to input your Ledger index. Enter <code>0</code> (or whatever index you want to use), and click <code>Select</code> button. It will load your public key associated with that specific index.</p><p><img src="'+k+'" alt=""></p><p><strong>Copy this public key and save it as you will need it in the next steps.</strong></p><h2 id="creating-ultra-pro-wallet-for-your-ledger" tabindex="-1">Creating Ultra Pro Wallet for your Ledger <a class="header-anchor" href="#creating-ultra-pro-wallet-for-your-ledger" aria-label="Permalink to &quot;Creating Ultra Pro Wallet for your Ledger&quot;">​</a></h2><p>Once you have copied the public key associated with your Ledger device, it is now time to create an Ultra Pro Wallet for that public key. To do so, follow the <a href="./../guides/how-to-create-ultra-pro-wallet.html#create-an-ultra-pro-wallet">How to create an Ultra Pro Wallet using Ultra Wallet Extension</a> guide, and instead of generating a new key pair, use the public key that you have obtained in the previous steps.</p><h2 id="login-to-toolkit" tabindex="-1">Login to Toolkit <a class="header-anchor" href="#login-to-toolkit" aria-label="Permalink to &quot;Login to Toolkit&quot;">​</a></h2><p>Once you have created an Ultra Pro Wallet for your Ledger, return to Ultra Toolkit homepage (<a href="https://toolkit.ultra.io" target="_blank" rel="noreferrer">https://toolkit.ultra.io</a>), and click on the network selection component on the top right of your screen.</p><p><img src="'+l+'" alt=""></p><p>Clicking on the network selection component will open up a list of available networks that you can use the toolkit on. From the list of available networks, click on <code>Mainnet</code>.</p><p>Click on the <code>Login To Toolkit</code> button to open a list of all supported login methods, and then select the <code>Ledger</code> option.</p><p><img src="'+o+'" alt=""></p><p><img src="'+a+'" alt=""></p><p>The new prompt will ask you to input your Ledger index. Enter the index number that you selected earlier and click <code>Select</code> button. It will load your Ultra Pro Wallet account associated with that specific index.</p><p><img src="'+_+'" alt=""></p><p><img src="'+w+'" alt=""></p><p>From the list of accounts, select the one that you want to use. This is usually the account with <code>@active</code> in its name. You will now be logged in to the toolkit. You can verify this by checking for your account name in the top left corner of your screen.</p><p><img src="'+n+'" alt=""></p><p>You have now successfully logged in to the Ultra Toolkit using Ledger.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>After logging in to the toolkit, you can utilize it to sign transactions with your Ledger device. Explore the following tutorials which demonstrate the process with Ultra Wallet. However, you can seamlessly adapt these instructions to sign transactions with your Ledger device.</p><ul><li><a href="./../fundamentals/tutorial-token-transfer-and-nft-purchase.html">Tutorial - Token transfer and Uniq purchase transactions</a></li></ul>',30);function U(x,q,P,S,W,C){const r=c("OracleConversion");return u(),d("div",null,[b,e("ul",null,[v,T,e("li",null,[t("Your account must have sufficient UOS tokens for a new account creation transactions fees. Current Ultra Pro Wallet creation price is "),g(r,{amount:2,scope:"......2nf5.o4",param:7e4}),t(".")])]),L])}const I=s(y,[["render",U]]);export{A as __pageData,I as default};
