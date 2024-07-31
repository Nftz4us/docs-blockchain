import{_ as t}from"./chunks/command-palette-deploy-select-endpoint.sh9KaAcx.js";import{_ as e,c as o,o as a,N as r}from"./chunks/framework.eKw9w8LU.js";const n="/assets/command-palette-create-wallet.WAQ4dN6K.png",l="/assets/command-palette-create-wallet-set-pwd.qQhZXzGZ.png",s="/assets/command-palette-create-wallet-set-pk.CZDs2qjz.png",i="/assets/vscode-ext-added-public-key.BZGr6oaL.png",c="/assets/command-palette-deploy.33wUCIgz.png",d="/assets/command-palette-deploy-select-contract.c9YJkvND.png",p="/assets/command-palette-deploy-unlock-wallet.cakE2R3A.png",u="/assets/command-palette-deploy-account-name.bvDaB_xL.png",m="/assets/vscode-ext-contract-deployment-output._daxIMVe.png",k=JSON.parse('{"title":"Tutorial - Deploy Smart Contracts using the Ultra Smart Contract VS Code Extension","description":"","frontmatter":{"title":"Tutorial - Deploy Smart Contracts using the Ultra Smart Contract VS Code Extension","outline":[0,5],"order":-96},"headers":[],"relativePath":"tutorials/smart-contracts/deploy.md","filePath":"tutorials/smart-contracts/deploy.md","lastUpdated":null}'),h={name:"tutorials/smart-contracts/deploy.md"},y=r('<h1 id="tutorial-deploy-smart-contracts-using-the-ultra-smart-contract-vs-code-extension" tabindex="-1">Tutorial - Deploy Smart Contracts using the Ultra Smart Contract VS Code Extension <a class="header-anchor" href="#tutorial-deploy-smart-contracts-using-the-ultra-smart-contract-vs-code-extension" aria-label="Permalink to &quot;Tutorial - Deploy Smart Contracts using the Ultra Smart Contract VS Code Extension&quot;">​</a></h1><p>Once you have an <code>abi</code> and <code>wasm</code> file for your contract, you are ready for deployment.</p><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to guide you through deploying a smart contract using the Ultra Smart Contract VS Code Extension.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>A compiled smart contract (<code>.wasm</code> and <code>.abi</code> files). Refer to the <a href="./compile.html">Tutorial - Compile Smart Contracts using the Ultra Smart Contract VS Code Extension</a> for more information.</li><li>A public-private key pair for your developer Testnet account. If you haven&#39;t generated a key pair yet, refer to <a href="./../fundamentals/tutorial-generate-key-and-create-testnet-account.html">Tutorial - Generate a key and create a developer Testnet account</a></li><li>Your account must have sufficient UOS tokens for transactions and fees. Refer to <a href="./../fundamentals/tutorial-obtain-token-and-purchase-ram.html#obtaining-uos-tokens-using-the-faucet">Tutorial - Using the Faucet and Buying RAM on Ultra Testnet</a> for more information.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The tutorial is up-to-date with version 1.4.2 of the VS Code extension</p></div><h2 id="add-developer-testnet-account" tabindex="-1">Add Developer Testnet Account <a class="header-anchor" href="#add-developer-testnet-account" aria-label="Permalink to &quot;Add Developer Testnet Account&quot;">​</a></h2><p>Before you can deploy a smart contract, you will need to add your developer Testnet account to the Ultra Smart Contract VS Code Extension. To do so, follow these steps:</p><ol><li>Using the Command Palette (F1), type and select <code>Ultra: Wallet - Create</code>. <img src="'+n+'" alt=""></li><li>Enter a password for your wallet and re-enter the password to confirm it. Please make a note of this as it will be needed later to unlock the wallet. <img src="'+l+'" alt=""></li><li>Enter the private key for your developer Testnet account. <img src="'+s+'" alt=""></li><li>You will see a prompt on the bottom right that says <code>Added Public Key</code>. <img src="'+i+'" alt=""></li></ol><p>You have now added your developer testnet account to the Ultra Smart Contract VS Code Extension.</p><h2 id="deploy-contract" tabindex="-1">Deploy Contract <a class="header-anchor" href="#deploy-contract" aria-label="Permalink to &quot;Deploy Contract&quot;">​</a></h2><ol><li><p>Using the Command Palette (F1), type and select <code>Ultra: Deploy Contract</code>. <img src="'+c+'" alt=""></p></li><li><p>Select the contract you want to deploy. <img src="'+d+'" alt=""></p></li><li><p>Select the <code>Ultra Testnet</code> endpoint. <img src="'+t+'" alt=""></p></li><li><p>Unlock your wallet by entering your wallet password. <img src="'+p+'" alt=""></p></li><li><p>Enter the account you want to deploy this contract to. For the sake of this contract, you should deploy to your own developer Testnet account. <img src="'+u+'" alt=""></p></li><li><p>If successful you will see the smart contract has been deployed in the output window. <img src="'+m+'" alt=""></p></li></ol><h2 id="redeploy-smart-contract" tabindex="-1">Redeploy Smart Contract <a class="header-anchor" href="#redeploy-smart-contract" aria-label="Permalink to &quot;Redeploy Smart Contract&quot;">​</a></h2><p>After you&#39;ve made some changes to your contract, you will need to build it again and redeploy.</p><p>Redeploying the contract is identical to the first time you&#39;ve deployed the contract. Just follow the above instructions and use the same account to deploy to.</p><h2 id="troubleshooting-deployment-errors" tabindex="-1">Troubleshooting Deployment Errors <a class="header-anchor" href="#troubleshooting-deployment-errors" aria-label="Permalink to &quot;Troubleshooting Deployment Errors&quot;">​</a></h2><p>If you run into any issues during the deployment, refer to <a href="./troubleshooting.html">Troubleshooting Deployment</a> for more information.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>The next tutorial will cover interacting with your deployed smart contracts using the VS Code extension. See <a href="./transact.html">Tutorial - Interact with Smart Contracts using the Ultra Smart Contract VS Code Extension</a> for more information.</p>',20),f=[y];function g(_,C,b,S,w,x){return a(),o("div",null,f)}const q=e(h,[["render",g]]);export{k as __pageData,q as default};
