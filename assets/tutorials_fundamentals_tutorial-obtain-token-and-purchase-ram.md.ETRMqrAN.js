import{_ as e,c as t,o as a,N as o}from"./chunks/framework.eKw9w8LU.js";const n="/assets/faucet-initial-uos-balance.Srz0jw2j.png",i="/assets/faucet-token-faucet-tab.ot-WaWXa.png",r="/assets/faucet-issue-tokens.nDhe7tIu.png",s="/assets/faucet-token-issued.r3_fytMV.png",c="/assets/faucet-verify-account-balance.UxYhpafa.png",l="/assets/faucet-new-balance.Ppua2Hqk.png",h="/assets/buyram-initial-ram-balance.0VxLAC6t.png",u="/assets/buyram-action-builder.CeiLE2Lc.png",p="/assets/buyram-attributes.xLQ-UjPT.png",d="/assets/buyram-confirm.IzlTL0DZ.png",f="/assets/buyram-ultra-wallet-confirm.oY64FGyl.png",m="/assets/buyram-transaction-was-completed.7ya9BKg_.png",g="/assets/buyram-verify-transaction-in-explorer.N6fEMvMB.png",b="/assets/buyram-new-ram-balance.OjAh6udb.png",O=JSON.parse('{"title":"Tutorial - Using the Faucet and Buying RAM on Ultra Testnet","description":"","frontmatter":{"title":"Tutorial - Using the Faucet and Buying RAM on Ultra Testnet","order":-99996,"outline":[0,5]},"headers":[],"relativePath":"tutorials/fundamentals/tutorial-obtain-token-and-purchase-ram.md","filePath":"tutorials/fundamentals/tutorial-obtain-token-and-purchase-ram.md","lastUpdated":null}'),k={name:"tutorials/fundamentals/tutorial-obtain-token-and-purchase-ram.md"},y=o('<h1 id="tutorial-using-the-faucet-and-buying-ram-on-ultra-testnet" tabindex="-1">Tutorial - Using the Faucet and Buying RAM on Ultra Testnet <a class="header-anchor" href="#tutorial-using-the-faucet-and-buying-ram-on-ultra-testnet" aria-label="Permalink to &quot;Tutorial - Using the Faucet and Buying RAM on Ultra Testnet&quot;">​</a></h1><p>This tutorial will guide you through the process of obtaining UOS tokens using the faucet and purchasing RAM on the Ultra blockchain testnet. These actions are crucial for participating in blockchain activities, such as deploying contracts or storing unique digital assets (Uniqs).</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before starting this tutorial, ensure you have the following:</p><ul><li>A developer account on the Ultra Testnet and to be logged into the Ultra Tool Kit. If you don&#39;t have it, please follow our previous tutorial: <a href="./tutorial-login-to-toolkit.html">Tutorial - Log in to the Ultra Tool Kit</a>.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is two-fold:</p><ol><li><strong>To add UOS tokens to your testnet account using the faucet</strong>: The faucet is a tool that distributes free UOS tokens on the testnet, allowing you to perform transactions and interact with the blockchain without real financial cost.</li><li><strong>To purchase RAM for your account using <code>eosio::buyram</code></strong>: RAM in the EOS ecosystem is needed to store data on the blockchain. For example, if you want to store or manage digital assets like Uniqs, you need sufficient RAM. This tutorial will show you how to increase your RAM quota based on current prices and the amount of UOS you are willing to spend.</li></ol><p>By the end of this tutorial, you should be able to comfortably manage your resources on the Ultra blockchain, paving the way for more complex interactions such as deploying smart contracts or trading digital assets.</p><h2 id="obtaining-uos-tokens-using-the-faucet" tabindex="-1">Obtaining UOS Tokens Using the Faucet <a class="header-anchor" href="#obtaining-uos-tokens-using-the-faucet" aria-label="Permalink to &quot;Obtaining UOS Tokens Using the Faucet&quot;">​</a></h2><p>This section will guide you through the process of obtaining UOS tokens on the Ultra testnet. This is crucial for performing transactions and interacting with various blockchain functionalities.</p><h3 id="step-1-check-initial-balance" tabindex="-1">Step 1: Check Initial Balance <a class="header-anchor" href="#step-1-check-initial-balance" aria-label="Permalink to &quot;Step 1: Check Initial Balance&quot;">​</a></h3><p>Before obtaining additional UOS tokens, first check your current balance to verify the amount of UOS you have available. Visit the Ultra Blockchain Explorer at <a href="https://explorer.testnet.ultra.io" target="_blank" rel="noreferrer">https://explorer.testnet.ultra.io</a> and search for your account (e.g. <code>1aa2aa3aa4in</code>). In this example, the initial balance (e.g. 8.99999999 UOS) will be displayed. However, if you are accessing your account for the first time, the balance may be different, most likely 0 UOS.</p><p><img src="'+n+'" alt=""></p><h3 id="step-2-open-uos-token-faucet-page" tabindex="-1">Step 2: Open UOS Token Faucet Page <a class="header-anchor" href="#step-2-open-uos-token-faucet-page" aria-label="Permalink to &quot;Step 2: Open UOS Token Faucet Page&quot;">​</a></h3><ol><li>Open the faucet page at <a href="https://faucet.testnet.app.ultra.io" target="_blank" rel="noreferrer">https://faucet.testnet.app.ultra.io</a>.</li><li>Select the <code>Token Faucet</code> tab on the page, as shown in the picture.</li></ol><p><img src="'+i+'" alt=""></p><h3 id="step-3-request-uos-tokens-from-the-faucet" tabindex="-1">Step 3: Request UOS Tokens from the Faucet <a class="header-anchor" href="#step-3-request-uos-tokens-from-the-faucet" aria-label="Permalink to &quot;Step 3: Request UOS Tokens from the Faucet&quot;">​</a></h3><ol><li>In the <code>To account</code> field, enter your account name (<code>1aa2aa3aa4in</code>).</li><li>Click the <code>Issue</code> button to request the tokens. This interface may also show your initial balance as a reference, confirming the account to which the tokens will be issued.</li></ol><p><img src="'+r+'" alt=""></p><h3 id="step-4-confirm-token-issuance" tabindex="-1">Step 4: Confirm Token Issuance <a class="header-anchor" href="#step-4-confirm-token-issuance" aria-label="Permalink to &quot;Step 4: Confirm Token Issuance&quot;">​</a></h3><p>After requesting the tokens:</p><ol><li>You will be directed to a confirmation screen showing that 10 UOS tokens have been issued to your account.</li><li>Your new balance, combining previous funds with the newly issued tokens, should now read, for example, 18.99999999 UOS.</li></ol><p><img src="'+s+'" alt=""></p><h3 id="step-5-verify-the-transaction" tabindex="-1">Step 5: Verify the Transaction <a class="header-anchor" href="#step-5-verify-the-transaction" aria-label="Permalink to &quot;Step 5: Verify the Transaction&quot;">​</a></h3><p>To ensure that the tokens were correctly added to your account:</p><ol><li>Click on the <code>See in explorer</code> link provided on the confirmation page, or revisit the Ultra Blockchain Explorer.</li><li>Search for your account again to view the updated balance and confirm the transaction details, showing an increment of 10 UOS.</li></ol><p><img src="'+c+'" alt=""></p><h3 id="step-6-check-account-balance" tabindex="-1">Step 6: Check Account Balance <a class="header-anchor" href="#step-6-check-account-balance" aria-label="Permalink to &quot;Step 6: Check Account Balance&quot;">​</a></h3><p>Finally, revisit the Ultra Blockchain Explorer to check your new account balance (e.g. 18.99999999 UOS).</p><p><img src="'+l+'" alt=""></p><p>By following these steps, you have successfully added UOS tokens to your account using the faucet, enabling you to engage in further blockchain activities on the Ultra testnet.</p><h2 id="buying-ram-on-the-ultra-testnet" tabindex="-1">Buying RAM on the Ultra Testnet <a class="header-anchor" href="#buying-ram-on-the-ultra-testnet" aria-label="Permalink to &quot;Buying RAM on the Ultra Testnet&quot;">​</a></h2><p>This section explains how to use your UOS tokens to purchase RAM on the Ultra blockchain, which is necessary for storing objects and managing resources for your account.</p><h3 id="step-1-check-initial-ram-balance" tabindex="-1">Step 1: Check Initial RAM Balance <a class="header-anchor" href="#step-1-check-initial-ram-balance" aria-label="Permalink to &quot;Step 1: Check Initial RAM Balance&quot;">​</a></h3><p>Start by checking the initial RAM balance of your account to understand how much RAM you currently have. Navigate to the Ultra Blockchain Explorer at <a href="https://explorer.testnet.ultra.io" target="_blank" rel="noreferrer">https://explorer.testnet.ultra.io</a> and enter your account name (e.g. <code>1aa2aa3aa4in</code>) to view your RAM usage (e.g. 86 KB).</p><p><img src="'+h+'" alt=""></p><h3 id="step-2-initiate-ram-purchase" tabindex="-1">Step 2: Initiate RAM Purchase <a class="header-anchor" href="#step-2-initiate-ram-purchase" aria-label="Permalink to &quot;Step 2: Initiate RAM Purchase&quot;">​</a></h3><ol><li>Open the Ultra Tool Kit and select <code>Transaction Builder</code> from the left-hand menu.</li><li>Choose the <code>buyram</code> action under the <code>eosio</code> contracts to start the purchase process.</li></ol><p><img src="'+u+'" alt=""></p><h3 id="step-3-configure-buyram-action" tabindex="-1">Step 3: Configure Buyram Action <a class="header-anchor" href="#step-3-configure-buyram-action" aria-label="Permalink to &quot;Step 3: Configure Buyram Action&quot;">​</a></h3><p>Fill in the required fields for the <code>buyram</code> action:</p><ul><li><strong>Payer</strong>: <code>1aa2aa3aa4in</code> (your account, who will pay for the RAM)</li><li><strong>Receiver</strong>: <code>1aa2aa3aa4in</code> (your account, who will receive the RAM)</li><li><strong>Quantity</strong>: <code>10.00000000 UOS</code> (the amount of UOS you want to spend on RAM)</li><li><strong>Authorizer</strong>: <code>1aa2aa3aa4in</code> (your account, authorizing the transaction)</li></ul><p><img src="'+p+'" alt=""></p><h3 id="step-4-confirm-the-transaction" tabindex="-1">Step 4: Confirm the Transaction <a class="header-anchor" href="#step-4-confirm-the-transaction" aria-label="Permalink to &quot;Step 4: Confirm the Transaction&quot;">​</a></h3><p>Review the transaction details on the next screen. Ensure that all the information is correct before proceeding to confirm the transaction within the tool kit.</p><p><img src="'+d+'" alt=""></p><h3 id="step-5-confirm-transaction-in-ultra-wallet" tabindex="-1">Step 5: Confirm Transaction in Ultra Wallet <a class="header-anchor" href="#step-5-confirm-transaction-in-ultra-wallet" aria-label="Permalink to &quot;Step 5: Confirm Transaction in Ultra Wallet&quot;">​</a></h3><p>Next, confirm and authorize the transaction using the Ultra Wallet. This step is crucial as it secures the transaction on the blockchain.</p><p><img src="'+f+'" alt=""></p><h3 id="step-6-transaction-completion" tabindex="-1">Step 6: Transaction Completion <a class="header-anchor" href="#step-6-transaction-completion" aria-label="Permalink to &quot;Step 6: Transaction Completion&quot;">​</a></h3><p>Once the transaction is executed, a confirmation message stating <code>Transaction was completed successfully...</code> will appear. You can then verify the transaction details by clicking on <code>View in Explorer</code>.</p><p><img src="'+m+'" alt=""></p><h3 id="step-7-verify-the-transaction-in-explorer" tabindex="-1">Step 7: Verify the Transaction in Explorer <a class="header-anchor" href="#step-7-verify-the-transaction-in-explorer" aria-label="Permalink to &quot;Step 7: Verify the Transaction in Explorer&quot;">​</a></h3><p>Check the blockchain explorer to confirm that 10 UOS was indeed spent from your account to purchase RAM. This verification ensures that the transaction was processed correctly.</p><p><img src="'+g+'" alt=""></p><h3 id="step-8-check-new-ram-balance" tabindex="-1">Step 8: Check New RAM Balance <a class="header-anchor" href="#step-8-check-new-ram-balance" aria-label="Permalink to &quot;Step 8: Check New RAM Balance&quot;">​</a></h3><p>Finally, revisit the Ultra Blockchain Explorer to check your new RAM balance (e.g. 952 KB). You should see an increase in RAM, reflecting the purchase.</p><p><img src="'+b+'" alt=""></p><p>By following these steps, you have successfully used UOS tokens to purchase RAM for your account on the Ultra blockchain. This RAM is essential for activities such as deploying smart contracts or managing digital assets.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>The next tutorial will cover the process of building a transaction using the Ultra Tool Kit to send some UOS and to do a Uniq purchase - <a href="./tutorial-token-transfer-and-nft-purchase.html">Tutorial - Token transfer and Uniq purchase transactions</a></p>',62),S=[y];function T(w,U,_,q,x,A){return a(),t("div",null,S)}const R=e(k,[["render",T]]);export{O as __pageData,R as default};
