import{_ as t}from"./chunks/toolkit-tx-success-modal.6KSftreE.js";import{_ as a,c as e,o,N as n}from"./chunks/framework.HE4KbJuF.js";const i="/experimental/assets/toolkit-factory-actions-tab-setmeta.sIu8RU5a.png",r="/experimental/assets/toolkit-setmeta-b-tx-form.oYTH2kHW.png",c="/experimental/assets/toolkit-setmeta-b-tx-confirmation.KyO_mS09.png",s="/experimental/assets/ultra-wallet-sign-setmeta-b-tx._TgrHbg0.png",l="/experimental/assets/toolkit-factory-actions-tab-setdflttkn._Me9Te_f.png",d="/experimental/assets/toolkit-setdflttkn-tx-form.jmNdsZii.png",u="/experimental/assets/toolkit-setdflttkn-tx-confirmation.4tEz_nj_.png",h="/experimental/assets/ultra-wallet-sign-setdflttkn-tx.tS-d0Y2e.png",p="/experimental/assets/toolkit-uniq-actions-tab-settknmeta.fDq79e6A.png",f="/experimental/assets/toolkit-settknmeta-tx-form.2tvQ-3vD.png",m="/experimental/assets/toolkit-settknmeta-tx-confirmation.l7t3v32h.png",g="/experimental/assets/ultra-wallet-sign-settknmeta-tx.WHDc3E6x.png",k="/experimental/assets/toolkit-factory-actions-tab-lckfactory.mAyGzzGg.png",q="/experimental/assets/toolkit-lckfactory-tx-form.vrYJLgDN.png",y="/experimental/assets/toolkit-lckfactory-tx-confirmation.rYwbTqjp.png",b="/experimental/assets/ultra-wallet-sign-lckfactory-tx.OPh29X4W.png",R=JSON.parse('{"title":"How to update metadata using the Ultra Toolkit","description":"","frontmatter":{"title":"How to update metadata using the Ultra Toolkit","order":6,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/creating-uniq-factories/how-to-update-uniq-metadata-using-toolkit.md","filePath":"tutorials/uniq-factories/creating-uniq-factories/how-to-update-uniq-metadata-using-toolkit.md","lastUpdated":null}'),w={name:"tutorials/uniq-factories/creating-uniq-factories/how-to-update-uniq-metadata-using-toolkit.md"},_=n('<h1 id="how-to-update-metadata-using-the-ultra-toolkit" tabindex="-1">How to update metadata using the Ultra Toolkit <a class="header-anchor" href="#how-to-update-metadata-using-the-ultra-toolkit" aria-label="Permalink to &quot;How to update metadata using the Ultra Toolkit&quot;">​</a></h1><p>An important aspect of the Ultra NFT standard is the ability to update metadata. Game publishers may want to modify a uniq&#39;s traits based on in-game events.</p><p>For this guide, we will use the uniq factory and uniq token created in the previous steps, utilizing the Ultra Testnet network.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>You must have already created and uploaded the metadata files. Refer to <a href="./how-to-create-uniq-metadata.html">How to create Uniq Metadata</a> for more information.</li><li>You must have already created a uniq factory. Refer to <a href="./how-to-create-uniq-factory-using-toolkit.html">How to create a Uniq Factory using the Ultra Toolkit</a> for more information.</li><li>Your account must have sufficient UOS tokens for transactions and fees. Refer to <a href="./../../fundamentals/tutorial-obtain-token-and-purchase-ram.html#obtaining-uos-tokens-using-the-faucet">Tutorial - Using the Faucet and Buying RAM on Ultra Testnet</a> for more information.</li><li>Ensure your account is the uniq factory manager for the uniq factory whose metadata you intend to update, as only the uniq factory manager is authorized to perform metadata related updates.</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this guide is to help you understand how you can update the metadata using Ultra Toolkit. This guide is divided into three sections:</p><ol><li><strong>Updating Uniq Factory Metadata</strong>: Will walk you through the process of updating metadata for a uniq factory.</li><li><strong>Updating Default Uniq Metadata</strong>: Will walk you through the process of updating metadata for the default uniq.</li><li><strong>Updating Uniq Metadata</strong>: Will walk you through the process of updating metadata for a specific uniq.</li></ol><h2 id="updating-uniq-factory-metadata" tabindex="-1">Updating Uniq Factory Metadata <a class="header-anchor" href="#updating-uniq-factory-metadata" aria-label="Permalink to &quot;Updating Uniq Factory Metadata&quot;">​</a></h2><p>If a content creator re-uploads a new uniq factory metadata, they can use the <code>setmeta.b</code> action to update the metadata for the uniq factory. To do so, follow these steps:</p><ol><li>Login to ultra toolkit using your account.</li><li>Navigate to the factory management page by clicking on the <code>Uniq Actions</code> from the sidebar, and then clicking on <code>Factory</code>.</li><li>On the factory page, search for <code>setmeta</code> action in the search box, and click on the <code>Set factory metadata (eosio.nft.ft::setmeta.b)</code> action to open up the transaction modal.</li></ol><p><img src="'+i+'" alt=""></p><h3 id="configure-setmeta-b-action" tabindex="-1">Configure <code>setmeta.b</code> Action <a class="header-anchor" href="#configure-setmeta-b-action" aria-label="Permalink to &quot;Configure `setmeta.b` Action&quot;">​</a></h3><p>We will use the <code>setmeta.b</code> action to update the metadata for a uniq factory. For more information on the action, refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setmeta.b.html">setmeta.b action documentation</a>.</p><p>Once you have opened the transaction modal, fill the required fields for the <code>setmeta.b</code> action:</p><ol><li><strong>Token factory ID</strong>: Required, the ID of the uniq factory for which you want to update the metadata.</li><li><strong>Memo</strong>: Required, enter a text memo for your transaction. For example, <code>updating uniq factory metadata</code>.</li><li><strong>Metadata URI</strong>: Required, URI of the new/updated factory metadata JSON file.</li><li><strong>Metadata hash</strong>: Required, SHA256 hash of the new/updated metadata JSON file.</li></ol><p><img src="'+r+'" alt=""></p><p>Once you have inputted all the values, click on the <code>Send 1 Action</code> button and it will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</p><p><img src="'+c+'" alt=""></p><p>Confirm and sign the transaction using the Ultra Wallet extension.</p><p><img src="'+s+'" alt=""></p><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.</p><p><img src="'+t+'" alt=""></p><p>You have now successfully updated the metadata for a uniq factory.</p><h2 id="updating-default-uniq-metadata" tabindex="-1">Updating Default Uniq Metadata <a class="header-anchor" href="#updating-default-uniq-metadata" aria-label="Permalink to &quot;Updating Default Uniq Metadata&quot;">​</a></h2><p>Default uniq metadata is used as a fallback mechanism whenever there&#39;s no metadata available for a uniq. To update the default uniq metadata, follow these steps:</p><ol><li>Login to ultra toolkit using your account.</li><li>Navigate to the factory management page by clicking on the <code>Uniq Actions</code> from the sidebar, and then clicking on <code>Factory</code>.</li><li>On the factory page, search for <code>setdflttkn</code> action in the search box, and click on the <code>Set default token metadata (eosio.nft.ft::setdflttkn)</code> action to open up the transaction modal.</li></ol><p><img src="'+l+'" alt=""></p><h3 id="configure-setdflttkn-action" tabindex="-1">Configure <code>setdflttkn</code> Action <a class="header-anchor" href="#configure-setdflttkn-action" aria-label="Permalink to &quot;Configure `setdflttkn` Action&quot;">​</a></h3><p>We will use the <code>setdflttkn</code> action to update the metadata for a uniq factory. For more information on the action, refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/setdflttkn.html">setdflttkn action documentation</a>.</p><p>Once you have opened the transaction modal, fill the required fields for the <code>setdflttkn</code> action:</p><ol><li><strong>Token factory ID</strong>: Required, the ID of the uniq factory for which you want to update the default uniq metadata.</li><li><strong>Memo</strong>: Required, enter a text memo for your transaction. For example, <code>updating default uniq metadata</code>.</li><li><strong>Metadata URI</strong>: Required, URI of the new/updated default uniq metadata JSON file.</li><li><strong>Metadata hash</strong>: Optional, SHA256 hash of the new/updated default uniq metadata JSON file.</li></ol><p><img src="'+d+'" alt=""></p><p>Once you have inputted all the values, click on the <code>Send 1 Action</code> button and it will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</p><p><img src="'+u+'" alt=""></p><p>Confirm and sign the transaction using the Ultra Wallet extension.</p><p><img src="'+h+'" alt=""></p><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.</p><p><img src="'+t+'" alt=""></p><p>You have now successfully updated the default uniq metadata.</p><h2 id="updating-uniq-metadata" tabindex="-1">Updating Uniq Metadata <a class="header-anchor" href="#updating-uniq-metadata" aria-label="Permalink to &quot;Updating Uniq Metadata&quot;">​</a></h2><p>To update the uniq metadata, follow these steps:</p><ol><li>Login to ultra toolkit using your account.</li><li>Navigate to the uniq manager page by clicking on the <code>Uniq Actions</code> from the sidebar, and then clicking on <code>Uniq</code>.</li><li>On the uniq page, search for <code>settknmeta</code> action in the search box, and click on the <code>Set token metadata (eosio.nft.ft::settknmeta)</code> action to open up the transaction modal.</li></ol><p><img src="'+p+'" alt=""></p><h3 id="configure-settknmeta-action" tabindex="-1">Configure <code>settknmeta</code> Action <a class="header-anchor" href="#configure-settknmeta-action" aria-label="Permalink to &quot;Configure `settknmeta` Action&quot;">​</a></h3><p>We will use the <code>settknmeta</code> action to update the metadata for a uniq. For more information on the action, refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/settknmeta.html">settknmeta action documentation</a>.</p><p>Once you have opened the transaction modal, fill the required fields for the <code>settknmeta</code> action:</p><ol><li><strong>Token ID</strong>: Required, the ID of the uniq for which you want to update the metadata.</li><li><strong>Owner</strong>: Required, the account that owns this uniq.</li><li><strong>Memo</strong>: Required, enter a text memo for your transaction. For example, <code>updating default uniq metadata</code>.</li><li><strong>Metadata URI</strong>: Optional, URI of the new/updated uniq metadata JSON file.</li><li><strong>Metadata hash</strong>: Optional, SHA256 hash of the new/updated uniq metadata JSON file.</li></ol><p><img src="'+f+'" alt=""></p><p>Once you have inputted all the values, click on the <code>Send 1 Action</code> button and it will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</p><p><img src="'+m+'" alt=""></p><p>Confirm and sign the transaction using the Ultra Wallet extension.</p><p><img src="'+g+'" alt=""></p><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.</p><p><img src="'+t+'" alt=""></p><p>You have now successfully updated the metadata for a uniq.</p><h2 id="disabling-metadata-changes" tabindex="-1">Disabling Metadata Changes <a class="header-anchor" href="#disabling-metadata-changes" aria-label="Permalink to &quot;Disabling Metadata Changes&quot;">​</a></h2><p>For certain use cases, it might make sense to make the uniq factory immutable. For such cases, we can use the <code>lckfactory</code> action to enable a manager to disable any metadata updates. This can be particularly useful for an NFT art gallery, as it assures users that their artwork will never change.</p><p><strong>Before we proceed, it is important to note that this change is irreversible</strong>.</p><p>To disable metadata updates for a uniq factory, follow these steps:</p><ol><li>Login to ultra toolkit using your account.</li><li>Navigate to the factory management page by clicking on the <code>Uniq Actions</code> from the sidebar, and then clicking on <code>Factory</code>.</li><li>On the factory page, search for <code>lckfactory</code> action in the search box, and click on the <code>Lock factory (eosio.nft.ft::lckfactory)</code> action to open up the transaction modal.</li></ol><p><img src="'+k+'" alt=""></p><h3 id="configure-lckfactory-action" tabindex="-1">Configure <code>lckfactory</code> Action <a class="header-anchor" href="#configure-lckfactory-action" aria-label="Permalink to &quot;Configure `lckfactory` Action&quot;">​</a></h3><p>We will use the <code>lckfactory</code> action to update the metadata for a uniq factory. For more information on the action, refer to <a href="./../../../blockchain/contracts/nft-contract/nft-actions/lckfactory.html">lckfactory action documentation</a>.</p><p>Once you have opened the transaction modal, fill the required fields for the <code>lckfactory</code> action:</p><ol><li><strong>Token factory ID</strong>: Required, the ID of the uniq factory for which you want to disable metadata updates.</li></ol><p><img src="'+q+'" alt=""></p><p>Click on the <code>Send 1 Action</code> button and it will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</p><p><img src="'+y+'" alt=""></p><p>Confirm and sign the transaction using the Ultra Wallet extension.</p><p><img src="'+b+'" alt=""></p><p>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.</p><p><img src="'+t+'" alt=""></p><p>You have now successfully disabled metadata updates for a uniq factory.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>TODO</p>',76),x=[_];function U(v,T,O,A,S,C){return o(),e("div",null,x)}const N=a(w,[["render",U]]);export{R as __pageData,N as default};
