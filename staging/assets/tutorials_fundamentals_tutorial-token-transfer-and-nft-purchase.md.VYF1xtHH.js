import{_ as t,c as e,o as a,N as n}from"./chunks/framework.wVj9vBva.js";const r="/staging/assets/token-transfer-action-builder.41fxz4DB.png",o="/staging/assets/token-transfer-eosio.token.gH2SyxQl.png",i="/staging/assets/token-transfer-attributes.63SiGASl.png",s="/staging/assets/token-transfer-confirm.fjzVhZld.png",c="/staging/assets/token-transfer-ultra-wallet-confirm.WUpiUWRz.png",l="/staging/assets/token-transfer-txn-completed.03yTRrs1.png",h="/staging/assets/token-transfer-explorer.hd_x7n_9.png",p="/staging/assets/purchase-factory-explorer._30JQe1O.png",u="/staging/assets/purchase-action-builder._L_dEqVs.png",d="/staging/assets/purchase-attribute-I.zQshkUTr.png",f="/staging/assets/purchase-attribute-II.jtEPpdqA.png",g="/staging/assets/purchase-confirm.2Y2xve-y.png",m="/staging/assets/purchase-confirm-ultra-wallet.JzKgvTGU.png",q="/staging/assets/purchase-ultra-wallet-confirm.64p1AEhT.png",y="/staging/assets/purchase-user-uniq-explorer.DyCGe8Hq.png",k="/staging/assets/purchase-user-uniq-explorer-show-uniqs.kBfZqrHD.png",D=JSON.parse('{"title":"Tutorial - Token transfer and Uniq purchase transactions","description":"","frontmatter":{"title":"Tutorial - Token transfer and Uniq purchase transactions","order":-99995,"outline":[0,5]},"headers":[],"relativePath":"tutorials/fundamentals/tutorial-token-transfer-and-nft-purchase.md","filePath":"tutorials/fundamentals/tutorial-token-transfer-and-nft-purchase.md","lastUpdated":null}'),b={name:"tutorials/fundamentals/tutorial-token-transfer-and-nft-purchase.md"},w=n('<h1 id="tutorial-token-transfer-and-uniq-purchase-transactions" tabindex="-1">Tutorial - Token transfer and Uniq purchase transactions <a class="header-anchor" href="#tutorial-token-transfer-and-uniq-purchase-transactions" aria-label="Permalink to &quot;Tutorial - Token transfer and Uniq purchase transactions&quot;">​</a></h1><p>This tutorial will demonstrate how to use the Ultra tool kit for sending asset (transfer) and purchasing Uniq interact with Ultra the blockchain.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before starting this tutorial, you will need:</p><ul><li>A developer account on the Ultra Testnet and to be logged into the Ultra Tool Kit. If you don&#39;t have it, please follow our previous tutorial: <a href="./tutorial-login-to-toolkit.html">Tutorial - Log in to the Ultra Tool Kit</a>.</li><li>Your account must have sufficient UOS tokens for transactions and fees. If you don&#39;t have tokens, see <a href="./tutorial-obtain-token-and-purchase-ram.html">how to use Faucet</a>.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to show you how to:</p><ol><li>Transfer UOS tokens between accounts using the <code>eosio.token::transfer</code> action.</li><li>Purchase digital assets (Uniqs) using the <code>eosio.nft.ft::purchase.a</code> action within the Ultra ecosystem.</li></ol><h2 id="transferring-tokens" tabindex="-1">Transferring Tokens <a class="header-anchor" href="#transferring-tokens" aria-label="Permalink to &quot;Transferring Tokens&quot;">​</a></h2><p>To transfer tokens using the Ultra tool kit, follow these steps closely:</p><h3 id="step-1-access-the-transaction-builder" tabindex="-1">Step 1: Access the Transaction Builder <a class="header-anchor" href="#step-1-access-the-transaction-builder" aria-label="Permalink to &quot;Step 1: Access the Transaction Builder&quot;">​</a></h3><p>Open the Ultra tool kit and log in with your developer account. Click on the &#39;Transaction Builder&#39; tab to begin creating a new transaction.</p><p><img src="'+r+'" alt=""></p><h3 id="step-2-select-the-eosio-token-contract" tabindex="-1">Step 2: Select the eosio.token Contract <a class="header-anchor" href="#step-2-select-the-eosio-token-contract" aria-label="Permalink to &quot;Step 2: Select the eosio.token Contract&quot;">​</a></h3><p>Find the <code>eosio.token</code> contract from the list of available contracts in Add Contracts section. Once you add the contract, search for <code>eosio.token::transfer</code> action to initiate a token transfer.</p><p><img src="'+o+'" alt=""></p><h3 id="step-3-fill-in-the-transfer-details" tabindex="-1">Step 3: Fill in the Transfer Details <a class="header-anchor" href="#step-3-fill-in-the-transfer-details" aria-label="Permalink to &quot;Step 3: Fill in the Transfer Details&quot;">​</a></h3><p>In the token transfer fields, enter the details of the transaction:</p><ul><li><strong>From</strong>: <code>1aa2aa3aa4in</code> (your account)</li><li><strong>To</strong>: <code>1aa2aa3aa4io</code> (recipient&#39;s account)</li><li><strong>Quantity</strong>: <code>0.00000001 UOS</code> (amount to be transferred)</li><li><strong>Memo</strong>: <code>Test transaction</code> (a note about the transaction)</li></ul><p>Ensure all details are correct to avoid any errors in the transaction.</p><p>Finally press the <code>Send 1 Action</code> button.</p><p><img src="'+i+'" alt=""></p><h3 id="step-4-preview-and-confirm-the-transaction" tabindex="-1">Step 4: Preview and Confirm the Transaction <a class="header-anchor" href="#step-4-preview-and-confirm-the-transaction" aria-label="Permalink to &quot;Step 4: Preview and Confirm the Transaction&quot;">​</a></h3><p>Review all the transaction details on the preview screen. Make sure that everything is accurate before you proceed.</p><p><img src="'+s+'" alt=""></p><h3 id="step-5-confirm-and-sign-with-ultra-wallet" tabindex="-1">Step 5: Confirm and Sign with Ultra Wallet <a class="header-anchor" href="#step-5-confirm-and-sign-with-ultra-wallet" aria-label="Permalink to &quot;Step 5: Confirm and Sign with Ultra Wallet&quot;">​</a></h3><p>Confirm and sign the transaction using the Ultra Wallet extension. This step is crucial as it authorizes the blockchain to execute the transfer under your account.</p><p><img src="'+c+'" alt=""></p><h3 id="step-6-transaction-completion" tabindex="-1">Step 6: Transaction Completion <a class="header-anchor" href="#step-6-transaction-completion" aria-label="Permalink to &quot;Step 6: Transaction Completion&quot;">​</a></h3><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.</p><p><img src="'+l+'" alt=""></p><h3 id="step-7-verify-the-transaction" tabindex="-1">Step 7: Verify the Transaction <a class="header-anchor" href="#step-7-verify-the-transaction" aria-label="Permalink to &quot;Step 7: Verify the Transaction&quot;">​</a></h3><p>To ensure the transaction was successfully processed, visit the Ultra Testnet Explorer at <code>https://explorer.testnet.ultra.io/</code>. Search for your account (e.g. <code>1aa2aa3aa4in</code>) to view the transaction details and confirm that the transfer went through as intended.</p><p><img src="'+h+'" alt=""></p><h2 id="purchasing-digital-assets-uniqs" tabindex="-1">Purchasing Digital Assets (Uniqs) <a class="header-anchor" href="#purchasing-digital-assets-uniqs" aria-label="Permalink to &quot;Purchasing Digital Assets (Uniqs)&quot;">​</a></h2><p>To purchase a Uniq from the Uniq Factory using the Ultra tool kit, follow these steps carefully:</p><h3 id="step-1-verify-factory-details" tabindex="-1">Step 1: Verify Factory Details <a class="header-anchor" href="#step-1-verify-factory-details" aria-label="Permalink to &quot;Step 1: Verify Factory Details&quot;">​</a></h3><p>Begin by checking the Factory Explorer in the Uniq Explorer. Confirm the on-chain data for the Uniq Factory you are interested in, which in this case is Factory ID 4243, owned by account <code>1aa2aa3aa4io</code>.</p><p><img src="'+p+'" alt=""></p><h3 id="step-2-initiate-purchase-action" tabindex="-1">Step 2: Initiate Purchase Action <a class="header-anchor" href="#step-2-initiate-purchase-action" aria-label="Permalink to &quot;Step 2: Initiate Purchase Action&quot;">​</a></h3><p>Navigate to the <code>Factory</code> page under the <code>Uniq Actions</code> section of the tool kit and then start typing <code>purchase</code> into the search bar. Then select the <code>Purchase Uniqs directly</code> action.</p><p><img src="'+u+'" alt=""></p><h3 id="step-3-enter-purchase-details" tabindex="-1">Step 3: Enter Purchase Details <a class="header-anchor" href="#step-3-enter-purchase-details" aria-label="Permalink to &quot;Step 3: Enter Purchase Details&quot;">​</a></h3><p>On the purchase action screen, fill out the attributes necessary for the transaction:</p><ul><li><strong>Factory ID</strong>: <code>4243</code> (ID of the Uniq Factory)</li><li><strong>Maximum Price</strong>: <code>1.00000000 UOS</code> (maximum amount you are willing to pay)</li><li><strong>Buyer</strong>: <code>1aa2aa3aa4in</code> (your account)</li><li><strong>Receiver</strong>: <code>1aa2aa3aa4in</code> (your account, receiving the Uniq)</li></ul><p><img src="'+d+'" alt=""></p><p>Scroll down to complete any additional required attributes for the purchase.</p><p><img src="'+f+'" alt=""></p><p>After filling the indicated fields press the <code>Send 1 Action</code> button.</p><h3 id="step-4-review-and-confirm-transaction" tabindex="-1">Step 4: Review and Confirm Transaction <a class="header-anchor" href="#step-4-review-and-confirm-transaction" aria-label="Permalink to &quot;Step 4: Review and Confirm Transaction&quot;">​</a></h3><p>Carefully review all the transaction details on the confirmation screen to ensure they are correct before proceeding.</p><p><img src="'+g+'" alt=""></p><h3 id="step-5-confirm-and-sign-with-ultra-wallet-1" tabindex="-1">Step 5: Confirm and Sign with Ultra Wallet <a class="header-anchor" href="#step-5-confirm-and-sign-with-ultra-wallet-1" aria-label="Permalink to &quot;Step 5: Confirm and Sign with Ultra Wallet&quot;">​</a></h3><p>Confirm and sign the transaction using the Ultra Wallet extension. This step is essential to authorize the transaction on the blockchain.</p><p><img src="'+m+'" alt=""></p><h3 id="step-6-transaction-completion-1" tabindex="-1">Step 6: Transaction Completion <a class="header-anchor" href="#step-6-transaction-completion-1" aria-label="Permalink to &quot;Step 6: Transaction Completion&quot;">​</a></h3><p>Once the transaction is signed, a confirmation screen will display indicating that the purchase was successfully completed.</p><p><img src="'+q+'" alt=""></p><h3 id="step-7-verify-ownership-of-new-uniq" tabindex="-1">Step 7: Verify Ownership of New Uniq <a class="header-anchor" href="#step-7-verify-ownership-of-new-uniq" aria-label="Permalink to &quot;Step 7: Verify Ownership of New Uniq&quot;">​</a></h3><h4 id="step-7a-access-your-user-inventory-page" tabindex="-1">Step 7a: Access Your User Inventory Page <a class="header-anchor" href="#step-7a-access-your-user-inventory-page" aria-label="Permalink to &quot;Step 7a: Access Your User Inventory Page&quot;">​</a></h4><p>To confirm the purchase of your new Uniq, navigate to the Ultra tool kit page (<a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">https://toolkit.ultra.io/user</a>). Once there, enter your account name (e.g. <code>1aa2aa3aa4in</code>) in the <code>Start the search by entering a username</code> field. Make sure to set your endpoint to the test network at the top right corner, which for this example is <a href="https://ultratest.api.eosnation.io" target="_blank" rel="noreferrer">https://ultratest.api.eosnation.io</a>.</p><p><img src="'+y+'" alt=""></p><h4 id="step-7b-verify-the-newly-purchased-uniq" tabindex="-1">Step 7b: Verify the Newly Purchased Uniq <a class="header-anchor" href="#step-7b-verify-the-newly-purchased-uniq" aria-label="Permalink to &quot;Step 7b: Verify the Newly Purchased Uniq&quot;">​</a></h4><p>After entering your account name and setting the correct network endpoint, scroll down to view your Uniqs. Here, you should see the newly purchased Uniq from Uniq Factory 4243.</p><p><img src="'+k+'" alt=""></p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>TBA</p>',67),_=[w];function T(S,U,x,P,v,A){return a(),e("div",null,_)}const F=t(b,[["render",T]]);export{D as __pageData,F as default};
