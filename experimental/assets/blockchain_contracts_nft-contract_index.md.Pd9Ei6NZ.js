import{_ as e,c as t,o as a,M as r}from"./chunks/framework.3xTpxyva.js";const b=JSON.parse('{"title":"NFT Contract Overview","description":"","frontmatter":{"title":"NFT Contract Overview","order":-99},"headers":[],"relativePath":"blockchain/contracts/nft-contract/index.md","filePath":"blockchain/contracts/nft-contract/index.md","lastUpdated":null}'),n={name:"blockchain/contracts/nft-contract/index.md"},o=r('<h1 id="nft-overview" tabindex="-1">NFT Overview <a class="header-anchor" href="#nft-overview" aria-label="Permalink to &quot;NFT Overview&quot;">​</a></h1><p>The abbreviation ‘NFT’ stands for Non-Fungible Token which means that NFT is a unit of data stored on a blockchain that can be sold or traded like other tokens. Unlike other tokens all NFTs are unique and one NFT cannot be replaced with another. That is why NFTs are often called <code>Uniqs</code>. In this document the NFTs can also be referred to as tokens.</p><p>The Ultra&#39;s <code>eosio.nft.ft</code> smart contract defines a set of data structures (multi index tables, singletons) and a set of blockchain actions to manipulate the data structures. Both the data structures and the actions implement the supported set of NFT Use cases.</p><h2 id="info" tabindex="-1">Info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;Info&quot;">​</a></h2><p>NFT use cases describe what different users can do with NFTs. The text in <strong>bold</strong> represents actions, the text in <em>italic</em> represents blockchain accounts and the <code>highlighted</code> text represents the related data structures or data structure elements. Please refer to the action description or data structure overview to obtain more information.</p><h2 id="token-factory-creation" tabindex="-1">Token Factory Creation <a class="header-anchor" href="#token-factory-creation" aria-label="Permalink to &quot;Token Factory Creation&quot;">​</a></h2><p><strong>PLEASE NOTE:</strong> <em>Recall and Lockup feature will be disabled by default which means when creating new token factory, action will fail if you put any value for recall window or lockup time. This note will be removed when these features are enabled again.</em></p><p>The <em>Asset Creator</em> and the <em>Asset Manager</em> can <strong>create.b</strong> a token factory.</p><p>To issue a token, a token factory should be created first. For this version of <code>eosio.nft.ft</code> only <em>Ultra</em> can be the <em>Asset Creator</em> and the <em>Asset Manager</em>. A token factory is a set of blockchain data which provides settings for the NFTs issued with the factory. During the creation process it is required to set up several token parameters which control the NFTs parameters and the lifecycle - the NFTs off-chain metadata, minimum prices, reselling timeframes etc. All these data is stored in the <code>factory.b</code> table.</p><ul><li><a href="./nft-actions/create.b.html">create.b - create token factory</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li></ul><h2 id="issuing" tabindex="-1">Issuing <a class="header-anchor" href="#issuing" aria-label="Permalink to &quot;Issuing&quot;">​</a></h2><p>The <em>Asset Manager</em> can <strong>issue.b</strong> a token either to the <em>Asset Manager</em> or to another <em>Account</em>.</p><p>The NFT issuance requires setting several parameters like the receiving <em>Account</em> and the amount of tokens. The issued NFTs receive a global unique ID and a token factory recorded serial (ordinal) number. The issued token is recorded into the <em>Account</em>&#39;s <code>token.b</code> table. The <strong>issue.b</strong> action reads and updates the data in the <code>factory.b</code> table.</p><ul><li><a href="./nft-actions/issue.b.html">issue.b - issue tokens with token factory</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li></ul><h2 id="transferring" tabindex="-1">Transferring <a class="header-anchor" href="#transferring" aria-label="Permalink to &quot;Transferring&quot;">​</a></h2><p>The token <em>Owner</em> can <strong>transfer</strong> tokens to another <em>Account</em>.</p><p>An NFT <em>Owner</em> can <strong>transfer</strong> their tokens to another <em>Account</em>. If the <em>Account</em> is listed on the <code>conditionless_receivers</code> array of the token factory, no transfer checks are done. Otherwise the action is checked against the trading window and lock time limitations. The tables affected are <code>token.b</code> scoped to the sender and receiver accounts. The <code>factory.b</code> is read to obtain limitations.</p><ul><li><a href="./nft-actions/transfer.html">transfer - hand tokens over to another user</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li></ul><h2 id="selling" tabindex="-1">Selling <a class="header-anchor" href="#selling" aria-label="Permalink to &quot;Selling&quot;">​</a></h2><p>The token <em>Owner</em> can <strong>resell</strong> tokens.</p><p>An NFT <em>Owner</em> can <strong>resell</strong> their tokens on the resale marketplace specifying the desirable price. A resale promoter fee can be specified, the resale promoter will receive a fraction of the received funds. This action is a subject to the trading window, minimal resale price and the lockup checks. The token ownership is verified using the <code>token.b</code> table. The resale marketplace table is <code>resale.a</code>.</p><ul><li><a href="./nft-actions/resell.html">resell - place tokens for sale on resell marketplace</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li><li><a href="./nft-tables.html#resale-a">resale.b</a></li></ul><h2 id="buying" tabindex="-1">Buying <a class="header-anchor" href="#buying" aria-label="Permalink to &quot;Buying&quot;">​</a></h2><p>An <em>Account</em> can <strong>buy</strong> a token ownership.</p><p>A blockchain <em>Account</em> can <strong>buy</strong> a token from the resale marketplace. This action is a subject to the trading window checks. The global and the token factory specific resale shares as well as the resale promoter are dealt with when the paid funds are transferred from the buer to the seller. The token is deduced from the <em>Seller</em>&#39;s <code>token.b</code> and added to the <em>Buyer</em>&#39;s <code>token.b</code>. The <code>factory.b</code> and <code>resale.a</code> are read to obtain the tradeable window, promoter and the shares info.</p><ul><li><a href="./nft-actions/buy.html">buy - purchase token on resale marketplace</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li><li><a href="./nft-tables.html#resale-a">resale.a</a></li></ul><h2 id="cancelling-resell" tabindex="-1">Cancelling resell <a class="header-anchor" href="#cancelling-resell" aria-label="Permalink to &quot;Cancelling resell&quot;">​</a></h2><p>The token <em>Owner</em> can <strong>cancelresell</strong> tokens.</p><p>This action is only removes the token from the resale marketplace. The resale marketplace table is <code>resale.a</code>.</p><ul><li><a href="./nft-actions/cancelresell.html">cancelresell - cancel token resell</a></li><li><a href="./nft-tables.html#resale-a">resale.a</a></li></ul><h2 id="burning" tabindex="-1">Burning <a class="header-anchor" href="#burning" aria-label="Permalink to &quot;Burning&quot;">​</a></h2><p>The token <em>Owner</em> can <strong>burn</strong> tokens.</p><p>An NFT <em>Owner</em> can execute the <strong>burn</strong> action which removes the token from the resale marketplace (<code>resale.a</code>), removes the token from the <em>Owner</em> account (<code>token.b</code>) and updates the token factory <code>existing_tokens_no</code> field (<code>factory.b</code>).</p><ul><li><a href="./nft-actions/burn.html">burn - erase tokens from owners and uniq factories</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li><li><a href="./nft-tables.html#resale-a">resale.a</a></li></ul><h2 id="nft-service-use-cases" tabindex="-1">NFT Service Use Cases <a class="header-anchor" href="#nft-service-use-cases" aria-label="Permalink to &quot;NFT Service Use Cases&quot;">​</a></h2><h2 id="recalling" tabindex="-1">Recalling <a class="header-anchor" href="#recalling" aria-label="Permalink to &quot;Recalling&quot;">​</a></h2><p>The <em>Asset Manager</em> can <strong>recall</strong> tokens from an <em>Account</em> in case of fraudulent action or erroneous issue.</p><p>During the recall time window the <em>Asset Manager</em> can recall tokens from an <em>Account</em> in case of fraudulent action or erroneous issue or other cases that require tokens ownership be returned to the <em>Asset Manager</em>. If the token being recalled has entered the resell marketplace, the reselling of such token is canceled. The <strong>recall</strong> action affects <code>factory.b</code>, <code>resale.a</code> and <code>token.b</code> tables.</p><ul><li><a href="./nft-actions/recall.html">recall - cancel resell, return tokens to factory manager</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li><li><a href="./nft-tables.html#token-b">token.b</a></li><li><a href="./nft-tables.html#resale-a">resale.a</a></li></ul><h2 id="authorizing-another-minter" tabindex="-1">Authorizing Another Minter <a class="header-anchor" href="#authorizing-another-minter" aria-label="Permalink to &quot;Authorizing Another Minter&quot;">​</a></h2><p>The <em>Asset Manager</em> or an <em>Authorized Minter</em> can authorize another <em>Minter</em> to issue tokens with a token factory with the <strong>authminter</strong> action.</p><p>Initially the <em>Asset Manager</em> can delegate their ability to issue NFTs to some other account <em>Authorized Minter</em> limited to issue up to the quantity of tokens. An <em>Authorized Minter</em> can re-delegate a part of their quantity to another <em>Authorized Minter</em>. The <code>factory.a</code> table is read and <code>authmintr.a</code> table is modified during this action.</p><ul><li><a href="./nft-actions/authmint.b.html">authmint.b - authorize an account to be able to mint tokens</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li><li><a href="./nft-tables.html#authmintrs-a">authmintr.a</a></li></ul><h2 id="controlling-token-factory-lifecycle" tabindex="-1">Controlling Token Factory Lifecycle <a class="header-anchor" href="#controlling-token-factory-lifecycle" aria-label="Permalink to &quot;Controlling Token Factory Lifecycle&quot;">​</a></h2><p>The <em>Asset Manager</em> can stop issuing with or decommission a token factory.</p><p>The <strong>setstatus</strong> action lets the <em>Asset Manager</em> to control the lifecycle of the token factory. Only the <code>factory.b</code> table is involved.</p><ul><li><a href="./nft-actions/setstatus.html">setstatus - set token factory state</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li></ul><h2 id="updating-the-token-factory-metadata" tabindex="-1">Updating the Token Factory Metadata <a class="header-anchor" href="#updating-the-token-factory-metadata" aria-label="Permalink to &quot;Updating the Token Factory Metadata&quot;">​</a></h2><p>The <em>Asset Manager</em> can update the token factory metadata.</p><p>The <strong>setmeta.b</strong> action lets the <em>Asset Manager</em> to set the token factory metadata updating the <code>factory.b</code> table.</p><ul><li><a href="./nft-actions/setmeta.b.md.html">setmeta.b - set token factory metadata uri and hash</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li></ul><h2 id="setting-the-conditionless-receivers" tabindex="-1">Setting the conditionless receivers <a class="header-anchor" href="#setting-the-conditionless-receivers" aria-label="Permalink to &quot;Setting the conditionless receivers&quot;">​</a></h2><p>The <em>Asset Manager</em> can set the token factory conditionless receivers.</p><p>The <strong>setconrecv</strong> action allows the <em>Asset Manager</em> to set the token factory conditional receivers - the accounts that can receive NFTs without checking for mintable window, lockup and other limitations. The action updates the <code>factory.b</code> table.</p><ul><li><a href="./nft-actions/setconrecv.html">setconrecv - set conditionless receivers</a></li><li><a href="./nft-tables.html#factory-b">factory.b</a></li></ul><h2 id="adding-factory-purchase-options" tabindex="-1">Adding factory purchase options <a class="header-anchor" href="#adding-factory-purchase-options" aria-label="Permalink to &quot;Adding factory purchase options&quot;">​</a></h2><p>The <em>Asset Manager</em> can add the factory first-hand purchase requirements</p><p>The <strong>setprchsreq.a</strong>/<strong>setprchsreq.b</strong> action allows the <em>Asset Manager</em> to set a purchase requirement for the factory which can then be used by any user to purchase a token from the factory directly using <strong>purchase.a</strong> action.</p><p><strong>setprchsreq.a</strong> action is deprecated, we recommend using <strong>setprchsreq.b</strong> action.</p><p>Multiple purchase requirements can be specified for a single factory. In addition to a simple fungible token price (UOS or USD) asset manager can specify the price for an individual purchase option using uniqs from other factories. Those uniqs can be either burnt or transferred to a specified account or simply verify their presence.</p><ul><li><a href="./nft-actions/setprchsreq.a.html">setprchsreq.a - set purchase requirement</a></li><li><a href="./nft-actions/setprchsreq.b.html">setprchsreq.b - set purchase requirement</a></li><li><a href="./nft-actions/delprchsreq.a.html">delprchsreq.a - delete purchase requirement</a></li><li><a href="./nft-actions/purchase.a.html">purchase.a - purchase a token</a></li><li><a href="./nft-tables.html#fctrprchs-a">fctrprchs.a - table of factory purchase options</a></li></ul>',61),s=[o];function i(c,l,h,d,f,m){return a(),t("div",null,s)}const p=e(n,[["render",i]]);export{b as __pageData,p as default};
