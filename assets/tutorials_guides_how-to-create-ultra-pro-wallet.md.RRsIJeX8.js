import{_ as r,a as n}from"./chunks/wallet-buy-uos.lHsPXzwE.js";import{_ as i,D as s,c,k as e,a as t,I as o,N as l,o as u}from"./chunks/framework.F4ceOzBN.js";const p="/assets/wallet-create-pro-wallet.DI8jirYq.png",h="/assets/wallet-generate-or-paste-public-key.AFRWCMil.png",d="/assets/wallet-private-key-shown.PUJRQCE-.png",g="/assets/wallet-fill-optional-fields._76f1F-X.png",w="/assets/wallet-approve-transaction.2seKQ_Gv.png",m="/assets/wallet-transaction-successful.ka5A8GB4.png",f="/assets/wallet-check-block-explorer.fXYEgVow.png",N=JSON.parse('{"title":"How to create an Ultra Pro Wallet using Ultra Wallet Extension","description":"","frontmatter":{"title":"How to create an Ultra Pro Wallet using Ultra Wallet Extension","order":-99989,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/guides/how-to-create-ultra-pro-wallet.md","filePath":"tutorials/guides/how-to-create-ultra-pro-wallet.md","lastUpdated":null}'),_={name:"tutorials/guides/how-to-create-ultra-pro-wallet.md"},y=e("h1",{id:"how-to-create-an-ultra-pro-wallet-using-ultra-wallet-extension",tabindex:"-1"},[t("How to create an Ultra Pro Wallet using Ultra Wallet Extension "),e("a",{class:"header-anchor",href:"#how-to-create-an-ultra-pro-wallet-using-ultra-wallet-extension","aria-label":'Permalink to "How to create an Ultra Pro Wallet using Ultra Wallet Extension"'},"​")],-1),b=e("p",null,"This tutorial will cover the simplest process of creating a developer account on Mainnet to be used to interact with the blockchain using the Ultra Wallet extension.",-1),U=e("h2",{id:"prerequisites",tabindex:"-1"},[t("Prerequisites "),e("a",{class:"header-anchor",href:"#prerequisites","aria-label":'Permalink to "Prerequisites"'},"​")],-1),k=e("li",null,[t("Account created using official "),e("a",{href:"https://ultra.io/",target:"_blank",rel:"noreferrer"},"Ultra client"),t(" or you can create it later during the tutorial using the Wallet Extension")],-1),v=e("li",null,[t("Installed the "),e("a",{href:"https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln",target:"_blank",rel:"noreferrer"},"Ultra Wallet Chrome Extension"),t(". Simply click "),e("code",null,"Add to"),t(" on the extension page")],-1),W=l('<h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to create a new developer Ultra Pro Wallet on Mainnet which you can later use to directly interact with the blockchain. It is desireable for developers as it provides a more granular control over your account and allows it to be easily used for other tools and libraries like <code>cleos</code> or <code>Wharfkit</code>.</p><h2 id="open-and-log-in-to-the-ultra-wallet" tabindex="-1">Open and log in to the Ultra Wallet <a class="header-anchor" href="#open-and-log-in-to-the-ultra-wallet" aria-label="Permalink to &quot;Open and log in to the Ultra Wallet&quot;">​</a></h2><p>To be able to create an Ultra Pro Wallet on Mainnet you will need to open your Wallet Extension and make sure you are switched to Mainnet. (You may need to log out from your Testnet account if it is currently logged in by clicking on the circular icon and clicking <code>Log out</code>).</p><p><img src="'+r+'" alt=""></p><p>Now if you already have an Ultra Account (created using the Ultra client) then you can simply use the <code>Sign In</code> option. If you don&#39;t have an account yet and need to create an account then proceed with <code>Sign Up</code> option, after signing up return back to this step and now use the <code>Sign In</code> option.</p><h2 id="create-an-ultra-pro-wallet" tabindex="-1">Create an Ultra Pro Wallet <a class="header-anchor" href="#create-an-ultra-pro-wallet" aria-label="Permalink to &quot;Create an Ultra Pro Wallet&quot;">​</a></h2>',7),P=l('<p>If you don&#39;t have the required amount yet then you can utilize the <code>Buy UOS</code> option of the Ultra Wallet extension.</p><p><img src="'+n+'" alt=""></p><p>When you have enough funds you can proceed with the creation of the Ultra Pro Wallet. For this you need to click on the profile icon and select the <code>Create an Ultra Pro Wallet</code> button.</p><p><img src="'+p+'" alt=""></p><p>This will open a new browser tab where you will have 2 options:</p><ul><li>Generate a new private and public key pair</li><li>Use an existing pair to create an Ultra Pro Wallet</li></ul><p><img src="'+h+'" alt=""></p><p>The simplest option is to generate a new key pair using the <code>Generate</code> button. Pressing it will automatically fill out the <code>Public key</code> field and will show you the associated private key</p><p><img src="'+d+'" alt=""></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is up to you to properly secure your private key and not to lose it. If you lose the original copy of the private key you may eventually lose access to your new Ultra Pro Wallet account completely.</p></div><p>Before finishing the Ultra Pro Wallet creation you need to specify the maximum amount of UOS your are willing to pay to create it. The price fluctuates over time due to USD to UOS conversion fluctuations and may be a bit different then the estimate shown on the page. Pick a value that is a bit over the estimated price or just put a large number there, we will charge only the current equivalent of 2 USD converted to UOS.</p><p><img src="'+g+'" alt=""></p><p>Now you can press the <code>Create Account</code> button to proceed. You will be prompted to approve the transaction with its details listed. Check it and click <code>Confirm</code></p><p><img src="'+w+'" alt=""></p><p>If everything was done correctly you will get a successful transaction screen. You can click on <code>Block Explorer</code> button to view the transaction status.</p><p><img src="'+m+'" alt=""></p><p>Your new Ultra Pro Wallet name will be listed in the actions list. You cannot chose a name directly.</p><p><img src="'+f+'" alt=""></p><h2 id="sign-in-to-the-ultra-wallet-using-ultra-pro-wallet" tabindex="-1">Sign In to the Ultra Wallet using Ultra Pro Wallet <a class="header-anchor" href="#sign-in-to-the-ultra-wallet-using-ultra-pro-wallet" aria-label="Permalink to &quot;Sign In to the Ultra Wallet using Ultra Pro Wallet&quot;">​</a></h2><p>The process of using your new Ultra Pro Wallet through the Ultra Wallet extension is identical to the <a href="./../fundamentals/tutorial-setup-the-wallet.html">Tutorial - Setup Ultra Wallet</a>. The only exception is if you wish to continue using the <code>Mainnet</code> network when logging into the Wallet, as the Ultra Pro Wallet you&#39;ve just made is exclusively for Mainnet.</p>',20);function x(S,T,C,I,q,A){const a=s("OracleConversion");return u(),c("div",null,[y,b,U,e("ul",null,[k,v,e("li",null,[t("Your account must have sufficient UOS tokens for transactions and fees. Current Ultra Pro Wallet creation price is "),o(a,{amount:2,scope:"......2nf5.o4",param:7e4}),t(". This tutorial will briefly cover how to get UOS on Mainnet but if you already have some then you will be able to skip that step")])]),W,e("p",null,[t("To be able to create an Ultra Pro Wallet you will need some UOS available on your Ultra Account. The current Ultra Pro Wallet creation price is 2 USD which is approximately "),o(a,{amount:2,scope:"......2nf5.o4",param:7e4}),t(" so you need to have at least this amount of UOS and, preferably, a bit more to account for UOS price fluctuations.")]),P])}const V=i(_,[["render",x]]);export{N as __pageData,V as default};
