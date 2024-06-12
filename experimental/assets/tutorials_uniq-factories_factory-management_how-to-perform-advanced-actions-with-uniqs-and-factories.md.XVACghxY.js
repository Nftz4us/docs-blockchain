import{_ as e,c as t,o,N as a}from"./chunks/framework.HE4KbJuF.js";const i="/experimental/assets/first-hand-purchase-search-setprchsreq.eQvr_uFX.png",r="/experimental/assets/first-hand-purchase-simple-UOS-price.MIct5fuD.png",n="/experimental/assets/first-hand-purchase-simple-UOS-price-result.LI2-pyCU.png",s="/experimental/assets/first-hand-purchase-search-purchase.GT3RpYZy.png",c="/experimental/assets/first-hand-purchase-purchase-simple-UOS-price.QmZbO_va.png",h="/experimental/assets/first-hand-purchase-Uniq-in-inventory.BUZOeigG.png",l="/experimental/assets/first-hand-purchase-price-in-Uniqs.BfMW97WN.png",u="/experimental/assets/first-hand-purchase-price-in-Uniqs-result.sr1mSSTu.png",p="/experimental/assets/first-hand-purchase-required-Uniq-to-burn.MdypqrIz.png",d="/experimental/assets/first-hand-purchase-purchase-with-burn.7xzMMD2o.png",f="/experimental/assets/first-hand-purchase-Uniq-purchased-after-burn.tC2e9xIK.png",m="/experimental/assets/transfer-Uniq-search-transfer.8GqylN93.png",g="/experimental/assets/transfer-Uniq-form.Yk80mXQn.png",y="/experimental/assets/burn-Uniq-search-burn.qEDGobIx.png",w="/experimental/assets/burn-Uniq-form.Oi0tbwZC.png",q="/experimental/assets/authorized-minter-search-authmint.9ysrluwf.png",b="/experimental/assets/authorized-minter-form._OvtMuhv.png",U="/experimental/assets/authorized-minter-search-issue.oIew8vKg.png",v="/experimental/assets/authorized-minter-issue-form.x0BIvrIc.png",k="/experimental/assets/authorized-minter-result.5TDT5x6F.png",M=JSON.parse('{"title":"How to perform advanced actions with Uniqs and Factories","description":"","frontmatter":{"title":"How to perform advanced actions with Uniqs and Factories","order":4,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md","filePath":"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md","lastUpdated":null}'),T={name:"tutorials/uniq-factories/factory-management/how-to-perform-advanced-actions-with-uniqs-and-factories.md"},_=a('<h1 id="how-to-perform-advanced-actions-with-uniqs-and-factories" tabindex="-1">How to perform advanced actions with Uniqs and Factories <a class="header-anchor" href="#how-to-perform-advanced-actions-with-uniqs-and-factories" aria-label="Permalink to &quot;How to perform advanced actions with Uniqs and Factories&quot;">​</a></h1><p>After you have successfully created a factory and potentially minted some tokens, you may now want to check what else can you potentially do.</p><p>This guide will cover advanced actions that apply to Uniqs and Factories using the Ultra Toolkit.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Created a Uniq Factory. Follow the <a href="./../creating-uniq-factories/how-to-create-uniq-metadata.html">Factory creation guide</a> for details.</li><li>Your account must have sufficient UOS tokens for transactions and fees. If you don&#39;t have tokens, see <a href="./../../fundamentals/tutorial-obtain-token-and-purchase-ram.html">how to use Faucet</a> for Testnet or <a href="./../../guides/how-to-buy-uos.html">how to buy UOS</a> for Mainnet.</li><li>A developer account on the Ultra Testnet or Mainnet and to be logged into the Ultra Toolkit. If you don&#39;t have it, please follow our previous tutorial: <a href="./../../fundamentals/tutorial-login-to-toolkit.html">Tutorial - Log in to the Ultra Toolkit</a>.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this guide is to demonstrate the range of actions you can perform with your Uniqs and Factories using Ultra Toolkit. This includes the process of adding or removing a direct purchase from your Factory; transferring and burning Uniqs; adding authorized minters.</p><h2 id="how-to-add-first-hand-purchase-to-your-factory" tabindex="-1">How to add first-hand purchase to your factory <a class="header-anchor" href="#how-to-add-first-hand-purchase-to-your-factory" aria-label="Permalink to &quot;How to add first-hand purchase to your factory&quot;">​</a></h2><p>First-hand purchase is a feature of NFT contract that allows factory managers to add a purchase option so that users can directly mint Uniqs themselves while paying some UOS or USD fee, or by potentially burning or transferring Uniqs. You can also require user to own some specific Uniq in order to use the purchase option.</p><p>You can see the list of potential use cases of this feature on the dedicated <a href="./../factory-management/factory-purchase-options.html">Factory Purchase Options</a> page.</p><p>To create a simple purchase option first navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a> and search for <code>setprchsreq</code>.</p><p><img src="'+i+'" alt=""></p><p>After finding it, select <code>Set first-hand purchase requirement (eosio.nft.ft::setprchsreq.b)</code> action.</p><p>There are multiple fields, here we will provide a short breakdown for each of them. For more details refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.html">action documentation</a>.</p><ul><li><strong>Token factory ID</strong> - The ID of the token factory you manage and want to modify. You must be a manager of that factory</li><li><strong>Purchase option index</strong> - A number that will let you identify the purchase option, in case there are multiple options per factory. It can be any positive number you want, we advise you to start from 0 and increase it by one for any new purchase option you add. Note that if you set the purchase requirement with an existing index then it will overwrite it.</li><li><strong>Purchase price</strong> - Required payment in UOS or USD (will be converted to UOS at the time of purchase) to be able to purchase a Uniq. It can also be set to 0 but only if the <code>Purchase option with Uniqs</code> is set.</li><li><strong>Purchase limit</strong> - Dictates the maximum number of Uniqs that can be bought using this option specifically. The limit is not shared between the options. If you need to have a total cap then you better manage it though the minting limit of the factory. Optional, can leave it empty.</li><li><strong>Promoter basis point</strong> - A share of UOS that a promoter will get at the time of purchase, specified in basis points. Must be at least 200 (which is equal to 2%).</li><li><strong>Purchase option with Uniqs</strong> - Allows you to specify the price for this purchase option using Uniqs from other factories or to require the buyer to own Uniqs from specific factories. This field is covered in more detail in the later example in this guide.</li><li><strong>Sale shares</strong> - Specifies the list of accounts who will get a share of UOS from the purchase done using this purchase option. The <code>Basis points</code> field determines how much the account will get, specified in basis points (1 point = 0.01%). Optional, can leave it empty.</li><li><strong>Maximum UOS payment</strong> - The maximum amount of UOS you are ok to pay to create the purchase option. The payment is only used to cover RAM costs and is predictable. Optional, can leave it empty.</li><li><strong>Group restriction</strong> - Allows you to specify user groups who are able or not able to use this purchase option. Refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.html">action documentation</a> for a deeper explanation on how to use the user group restriction. Optional, can leave it empty.</li><li><strong>Purchase window start</strong> - Makes it so the purchase option is only available starting at some point in time in the format of <code>2021-05-01T00:00:00</code>. Optional, can leave it empty.</li><li><strong>Purchase window end</strong> - Makes it so the purchase option is only available until some point in time in the format of <code>2021-05-01T00:00:00</code>. Optional, can leave it empty.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+r+'" alt=""></p><p>Click on <code>Send 1 Action</code>, review the details, and confirm your transaction.</p><p>You can now navigate to <a href="https://toolkit.ultra.io/uniqFactory" target="_blank" rel="noreferrer">Factory explorer</a>, enter your Factory ID. After scrolling down you will see the newly added purchase option.</p><p><img src="'+n+'" alt=""></p><h2 id="how-to-buy-a-uniq-using-a-first-hand-purchase-option" tabindex="-1">How to buy a Uniq using a first-hand purchase option <a class="header-anchor" href="#how-to-buy-a-uniq-using-a-first-hand-purchase-option" aria-label="Permalink to &quot;How to buy a Uniq using a first-hand purchase option&quot;">​</a></h2><p>To purchase a Uniq directly using the new purchase option navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>.</p><p>Search for <code>purchase</code> and select <code>Purchase Uniqs directly (eosio.nft.ft::purchase.a)</code>.</p><p><img src="'+s+'" alt=""></p><p>Now you need to fill the action form. There are multiple fields that you need to fill and here we will provide a short breakdown for each one of them.</p><ul><li><strong>Token factory ID</strong> - The ID of the factory from which you want to purchase a Uniq.</li><li><strong>Index</strong> - Purchase option index that was specified in <code>setprchsreq.b</code> action.</li><li><strong>Maximum UOS payment</strong> - Maximum amount of UOS that you are willing to use for this purchase. It must be at least equal to the current price of the purchase option converted to UOS (in case it is originally specified in USD). You can put a larger value here but you will not be charged more than the current price at the time the transaction is executed. If the price of the purchase option is already in UOS then you can use the same value here.</li><li><strong>Buyer</strong> - The account that signs a transaction and who will pay the required amount of UOS and, if required, the Uniqs needed for this purchase option.</li><li><strong>Receiver</strong> - The account that will get the Uniq after the purchase is done. It can be the same as the <code>Buyer</code> in most cases.</li><li><strong>Promoter</strong> - The account that will get a share of UOS from this purchase. If you are building a marketplace you would want to specify your account as a promoter to receive a share of UOS from each purchase. If not specified then Ultra will be used as a promoter.</li><li><strong>Provided Uniqs</strong> - The list of Uniqs that you want to check, burn, or transfer. This is required if the purchase option specifies <code>Purchase option with Uniqs</code>. The example on how to fill this field will be provided later in this guide.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p>For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/purchase.a.html">action documentation</a>.</p><p><img src="'+c+'" alt=""></p><p>After you have filled the form, click on <code>Send 1 Action</code>, review the details, and confirm the transaction.</p><p>Now you should be able to navigate to your inventory (either click on the <code>Inventory</code> on the hope page of the Toolkit <a href="https://toolkit.ultra.io/" target="_blank" rel="noreferrer">https://toolkit.ultra.io/</a> or go to <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">https://toolkit.ultra.io/user</a> and enter desired account name manually).</p><p>You should be able to scroll down and see the list of Uniqs the account has. Note that it may take a minute for Ultra API to update and show your Uniq.</p><p><img src="'+h+'" alt=""></p><h2 id="how-to-set-first-hand-purchase-requirement-with-a-price-in-uniqs" tabindex="-1">How to set first-hand purchase requirement with a price in Uniqs <a class="header-anchor" href="#how-to-set-first-hand-purchase-requirement-with-a-price-in-uniqs" aria-label="Permalink to &quot;How to set first-hand purchase requirement with a price in Uniqs&quot;">​</a></h2><p>We will now cover the usage of <code>Purchase option with Uniqs</code> when creating a purchase option. This option allows you to require a payment to be done using Uniqs from other factories or to simply require a user to own a Uniq from a specific factory.</p><p>First, navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, search again for <code>setprchsreq</code>, and select the <code>Set first-hand purchase requirement (eosio.nft.ft::setprchsreq.b)</code> action.</p><p>To specify the price in Uniqs you use the <code>Purchase option with Uniqs</code> field. You can add multiple entries to this field, each field corresponds to a single factory. Here is a breakdown for each of the fields:</p><ul><li><strong>Transfer tokens receiver account</strong> - The account that will receive the Uniqs from the factories that use the strategy of 2 (transfer). This field is mandatory to specify if any of the factories use the strategy of 2 (transfer).</li><li><strong>Required factories</strong> - The list of factories required for this purchase option. Each one of them has the following fields: <ul><li><strong>Token factory ID</strong> - The ID of the factory that is required for this purchase option.</li><li><strong>Count</strong> - How many Uniqs are required from the specified factory. Note that there is no way to specify any properties of the required Uniq, as long as it is from required factory it will work.</li><li><strong>Strategy</strong> - There are 3 ways you can require Uniqs within your purchase option: <ul><li>Check if account owns a Uniq from a specific factory (strategy 0)</li><li>Burn required Uniqs (strategy 1)</li><li>Transfer a Uniq from the owner to the account specified in <code>Transfer tokens receiver account</code> (strategy 2)</li></ul></li></ul></li></ul><p>For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.b.html">action documentation</a>.</p><p>In the following example we will configure a purchase option to burn a single Uniq will to mint another one. This effectively swaps user&#39;s Uniq from one to another. The price will be set to 0 UOS so the only requirement is to have a Uniq from the specified factory.</p><p>This effectively achieves a swap mechanism where you &quot;swap&quot; one Uniq which you have for another one from the same or different factory and, potentially, a different metadata.</p><p>If you want to try and do the same you need to have a second factory or use the same one you already have. Note that if you reuse the same factory which does not have variants then it is effectively a useless operation as you will get a Uniq identical to the one you have burned.</p><p><img src="'+l+'" alt=""></p><p>After filling out the form, click on <code>Send 1 Action</code>, review the details, and confirm the transaction.</p><p>You can now navigate to <a href="https://toolkit.ultra.io/uniqFactory" target="_blank" rel="noreferrer">Factory explorer</a>, enter your Factory ID, and scroll down to see the new purchase option created.</p><p><img src="'+u+'" alt=""></p><h2 id="how-to-buy-a-uniq-using-a-first-hand-purchase-option-with-price-in-uniqs" tabindex="-1">How to buy a Uniq using a first-hand purchase option with price in Uniqs <a class="header-anchor" href="#how-to-buy-a-uniq-using-a-first-hand-purchase-option-with-price-in-uniqs" aria-label="Permalink to &quot;How to buy a Uniq using a first-hand purchase option with price in Uniqs&quot;">​</a></h2><p>The process of purchasing Uniq using the purchase option with Uniqs requirement is similar, but requires you to fill the <code>Provided Uniqs field</code>.</p><p>To do so, first navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, and search again for <code>purchase</code> and select <code>Purchase Uniqs directly (eosio.nft.ft::purchase.a)</code>.</p><p>If the purchase option requires Uniqs from other factories then the account must have those Uniqs in its inventory. If you need to mint this Uniq then either refer to a <a href="./../creating-uniq-factories/how-to-mint-uniq-using-toolkit.html">How to mint a Uniq using the Ultra Toolkit</a> guide or add add a simple first-hand purchase option with UOS price to this factory and purchase it, as was described in this guide.</p><p>Here we minted a Uniq from factory 4030, which was specified in the previous step as a requirement for the purchase option with index 1.</p><p><img src="'+p+'" alt=""></p><p>Once you have the Uniq from the factory you specified in the purchase requirement, you will need to fill the <code>Provided user Uniqs</code> field.</p><ul><li><strong>Uniqs</strong> - The list of Uniqs you provide to satisfy the purchase requirement. Note that the number of Uniqs should match the sum of all counts specified in purchase requirement. Providing more Uniqs will result in error. <ul><li><strong>Uniq ID</strong> - The ID of the Uniq you provide. It must be a Uniq the <code>Buyer</code> account owns.</li><li><strong>Strategy</strong> - Determines what will happen to the Uniq and it must be identical to the one specified in the purchase requirement. This ensures the fact that you agree that this Uniq will be checked, burned, or transferred.</li></ul></li></ul><p>In this example we only need to provide a single Uniq and specify the strategy 1 (burn).</p><p><img src="'+d+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should be able to see your new Uniq in your <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>, as expected.</p><p><img src="'+f+'" alt=""></p><h2 id="how-to-transfer-a-uniq-to-another-account" tabindex="-1">How to transfer a Uniq to another account <a class="header-anchor" href="#how-to-transfer-a-uniq-to-another-account" aria-label="Permalink to &quot;How to transfer a Uniq to another account&quot;">​</a></h2><p>For testing it may be necessary to transfer Uniqs manually and in greater quantities. You can use the toolkit to quickly assemble a transfer transaction and run it. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/transfer.html">action documentation</a>.</p><p>First, navigate to <a href="https://toolkit.ultra.io/uniqManagement" target="_blank" rel="noreferrer">Uniq management actions</a>, search <code>transfer</code>, and select the <code>Transfer token (eosio.nft.ft::transfer)</code> action.</p><p><img src="'+m+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>From</strong> - The account that currently owns the Uniq, you have logged in with, and want to transfer the Uniq from.</li><li><strong>To</strong> - The receiver of the Uniq.</li><li><strong>Token IDs</strong> - A list of Uniqs that will be transferred, you can add multiple and send them all at once. To know the Uniq ID you can use the user <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory page</a>.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+g+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should be able to see the Uniq on the receiver account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><h2 id="how-to-burn-a-uniq-manually" tabindex="-1">How to burn a Uniq manually <a class="header-anchor" href="#how-to-burn-a-uniq-manually" aria-label="Permalink to &quot;How to burn a Uniq manually&quot;">​</a></h2><p>Burn action allows you to delete a token and get a UOS refund based on the portion of UOS that was spent to mint it. This effectively lets you get rid of Uniqs that are no longer needed. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/burn.html">action documentation</a>.</p><p>First, navigate to <a href="https://toolkit.ultra.io/uniqManagement" target="_blank" rel="noreferrer">Uniq management actions</a>, search <code>burn</code>, and select the <code>Burn a token (eosio.nft.ft::burn)</code> action.</p><p><img src="'+y+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>Owner</strong> - The account that owns a Uniq and that you have logged in with.</li><li><strong>Token IDs</strong> - A list of Uniqs that will be burned. You can burn multiple Uniqs at a time.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+w+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should no longer see the Uniq on the owner account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><h2 id="how-to-add-authorized-minters-to-a-factory" tabindex="-1">How to add authorized minters to a factory <a class="header-anchor" href="#how-to-add-authorized-minters-to-a-factory" aria-label="Permalink to &quot;How to add authorized minters to a factory&quot;">​</a></h2><p>Sometimes it may be desired to allow accounts other than the factory manager to mint Uniqs from the factory. For this purpose the authorized minter feature is used. For more details see the <a href="./../../../blockchain/contracts/nft-contract/nft-actions/authmint.b.html">action documentation</a>.</p><p>To do so, first navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, and search again for <code>authmint</code> and select <code>Authorize minter (eosio.nft.ft::authmint.b)</code>.</p><p><img src="'+q+'" alt=""></p><p>You need to fill the following fields:</p><ul><li><strong>Authorizer</strong> - The account that manages the factory or was previously authorized using authorized minter action.</li><li><strong>Authorized minter</strong> - The account that will be authorized to mint Uniqs from the factory or to delegate the minting authorization to other accounts.</li><li><strong>Token factory ID</strong> - The ID of the factory that the authorized minter will be allowed to mint from.</li><li><strong>Quantity</strong> - The maximum number of Uniqs that authorized minter will be allowed to mint. Mandatory to specify even if the factory has no limit on the number of Uniqs that can be minted.</li><li><strong>Maximum UOS payment</strong> - The maximum amount of UOS you are ok to pay to assign the authorized minter. The payment is only used to cover RAM costs and is predictable. Optional, can leave it empty.</li><li><strong>Memo</strong> - Simple text message that can be used for various purposes. Does not affect the result of the transaction. Optional, can leave it empty.</li></ul><p><img src="'+b+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, the <code>Authorized minter</code> account will be allowed to mint the specific number of Uniqs from the factory.</p><p>To actually mint the Uniqs as authorized minter you need to utilize the <code>Authorizer</code> field of <code>issue</code> action. Navigate to <a href="https://toolkit.ultra.io/factoryManagement" target="_blank" rel="noreferrer">Factory management actions</a>, and search for <code>issue</code> and select <code>Issue tokens (eosio.nft.ft::issue.b)</code>.</p><p><img src="'+U+'" alt=""></p><p>Similar to <a href="./../creating-uniq-factories/how-to-mint-uniq-using-toolkit.html">How to mint a Uniq using the Ultra Toolkit</a> guide you need to fill <code>To</code>, <code>Token factory ID</code> and <code>Amount</code>. But now you also need to additionally specify the <code>Authorizer</code>. The <code>Authorizer</code> must be an authorized minter assigned using the authorized minter action.</p><p><img src="'+v+'" alt=""></p><p>After clicking on <code>Send 1 Action</code>, reviewing the details, and confirming the transaction, you should be able to see the Uniq in the receiver account <a href="https://toolkit.ultra.io/user" target="_blank" rel="noreferrer">inventory</a>.</p><p><img src="'+k+'" alt=""></p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>TBA</p>',88),x=[_];function S(I,O,A,F,P,D){return o(),t("div",null,x)}const H=e(T,[["render",S]]);export{M as __pageData,H as default};
