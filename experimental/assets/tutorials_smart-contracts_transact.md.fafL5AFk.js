import{_ as t}from"./chunks/command-palette-deploy-select-endpoint.aBiH4XMX.js";import{_ as e,c as a,o,N as r}from"./chunks/framework.HE4KbJuF.js";const n="/experimental/assets/command-palette-create-tx.o9e1p2xl.png",i="/experimental/assets/command-palette-create-tx-password.DQEJOB85.png",s="/experimental/assets/command-palette-create-tx-account-name.HbQ0AaMF.png",c="/experimental/assets/command-palette-create-tx-select-action.yne5SQfs.png",l="/experimental/assets/command-palette-create-tx-signing-acc.Y6RItF2w.png",p="/experimental/assets/vscode-ext-contract-action-interaction.SZJBwH0s.png",h="/experimental/assets/vscode-ext-contract-action-interaction-output.2gTGdBUs.png",C=JSON.parse('{"title":"Tutorial - Interact with Smart Contracts using the Ultra Smart Contract Toolkit Extension","description":"","frontmatter":{"title":"Tutorial - Interact with Smart Contracts using the Ultra Smart Contract Toolkit Extension","outline":[0,5],"order":-95},"headers":[],"relativePath":"tutorials/smart-contracts/transact.md","filePath":"tutorials/smart-contracts/transact.md","lastUpdated":null}'),m={name:"tutorials/smart-contracts/transact.md"},u=r('<h1 id="tutorial-interact-with-smart-contracts-using-the-ultra-smart-contract-toolkit-extension" tabindex="-1">Tutorial - Interact with Smart Contracts using the Ultra Smart Contract Toolkit Extension <a class="header-anchor" href="#tutorial-interact-with-smart-contracts-using-the-ultra-smart-contract-toolkit-extension" aria-label="Permalink to &quot;Tutorial - Interact with Smart Contracts using the Ultra Smart Contract Toolkit Extension&quot;">​</a></h1><p>Once you have deployed your contract, you are ready for interacting with your contract.</p><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to demonstrate how to interact with deployed smart contracts using the Ultra Smart Contract Toolkit Extension.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>You must have deployed your smart contract. Refer to <a href="./deploy.html">Tutorial - Deploy Smart Contracts using the Ultra Smart Contract Toolkit Extension</a>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The tutorial is up-to-date with version 1.4.2 of the VSCode extension</p></div><h2 id="interacting-with-smart-contract" tabindex="-1">Interacting with Smart Contract <a class="header-anchor" href="#interacting-with-smart-contract" aria-label="Permalink to &quot;Interacting with Smart Contract&quot;">​</a></h2><p>To interact with your deployed smart contract, follow these steps:</p><ol><li><p>Use the Command Palette (F1), type <code>Ultra: Create Transaction</code>. <img src="'+n+'" alt=""></p></li><li><p>Select the endpoint where your smart contract is deployed. <img src="'+t+'" alt=""></p></li><li><p>Enter the password for the local wallet that you created in the previous tutorial. <img src="'+i+'" alt=""></p></li><li><p>Enter the name of the account which the contract was deployed under. <img src="'+s+'" alt=""></p></li><li><p>You will now see a list of available actions for your smart contract. Select the one that you want to interact with. <img src="'+c+'" alt=""></p></li><li><p>Enter the signer account. The signer should be the account you have access to. For the sake of this tutorial, we will use the same account where we deployed the smart contract. <img src="'+l+'" alt=""></p></li><li><p>You will now see a transaction form. Fill out your transaction data, and execute it by clicking on the <code>Sign &amp; Send</code> button. <img src="'+p+'" alt=""></p></li><li><p>If successful, you will see the transaction response in the output window. <img src="'+h+'" alt=""></p></li></ol><p>You can use the transaction id and search for the transaction on the <a href="https://explorer.testnet.ultra.io/" target="_blank" rel="noreferrer">Ultra Testnet Block Explorer</a>.</p>',11),d=[u];function _(g,w,x,f,y,S){return o(),a("div",null,d)}const b=e(m,[["render",_]]);export{C as __pageData,b as default};
