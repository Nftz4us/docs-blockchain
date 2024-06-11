import{_ as e,c as t,o as a,N as i}from"./chunks/framework.eKw9w8LU.js";const m=JSON.parse('{"title":"Game Uniq Factories","description":"","frontmatter":{"title":"Game Uniq Factories","order":7},"headers":[],"relativePath":"game-developers/game-dev-center/7. game-uniq-factories.md","filePath":"game-developers/game-dev-center/7. game-uniq-factories.md","lastUpdated":null}'),o={name:"game-developers/game-dev-center/7. game-uniq-factories.md"},n=i('<h1 id="game-uniq-factories" tabindex="-1">Game Uniq Factories <a class="header-anchor" href="#game-uniq-factories" aria-label="Permalink to &quot;Game Uniq Factories&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The Uniq factory is the place where you will mint your game as an item (Uniq) in the Ultra ecosystem. You will be able to set all your commercial requirements and uniq rules into the Store Token Factory, like setting a game for internal usage or to organize a restricted close beta (both planned). Every uniq factory and uniq will be represented in our platform through a uniq ID card, which will contain all uniq functionalities and is contextualized all over the platform.</p><p>Additionally, this is where you will set all the rules for your game lifecycle. Once done, everyone who buys from this factory will receive a token bound by these rules. Currently, our uniq factories are only able to create an atomic token.</p><h3 id="uniqs-tokens" tabindex="-1">Uniqs / Tokens <a class="header-anchor" href="#uniqs-tokens" aria-label="Permalink to &quot;Uniqs / Tokens&quot;">​</a></h3><p>A uniq is an immutable unit of your content, it follows the rules set of the emitting uniq factory. This uniq will give access to the content that its linked repository contains. Uniq factories have a real numeric version of your retail game, which provides you more features and more control on your side. Additionally, there are different types of uniq factories such as Game, Demo, DLC, etc…</p><p>The following is the lifecycle statuses of a uniq factory:</p><ul><li>Draft</li><li>Ready to publish</li><li>Published</li><li>Expired (not available yet)</li><li>Unpublished (not available yet)</li><li>Disabled</li></ul><p><strong>Atomic token</strong>: A type of uniq that will give specific content access defined by the selected branch to a player. This is only the first type of token but we are planning to add more in the future to give you more flexibility and open new business opportunities.</p><p><strong>Game package</strong>: A single uniq that gives a user access to a game&#39;s contents (Example: Game with DLC on a single token). Bundles and packs that can be sold together as uniqs this way.</p><h2 id="uniq-factories" tabindex="-1">Uniq Factories <a class="header-anchor" href="#uniq-factories" aria-label="Permalink to &quot;Uniq Factories&quot;">​</a></h2><p>You are currently able to create games, demos, and DLC uniqs that have their own preset rules.</p><ul><li>Games: You can freely configure your game without restriction.</li><li>DLC: You can freely configure your game without restriction.</li><li>DEMO: Not available yet.</li><li>Language pack: Not available yet.</li><li>Dedicated server: Not available yet.</li></ul><p>Reminder: To create a uniq factory you should have published an assembly build first, then linked it to the token factory.</p><h3 id="creating-a-store-token-factory" tabindex="-1">Creating a &quot;Store token factory&quot; <a class="header-anchor" href="#creating-a-store-token-factory" aria-label="Permalink to &quot;Creating a &quot;Store token factory&quot;&quot;">​</a></h3><p>Click on “Create a new token factory”</p><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/3a2a5480-ad1b-4bbe-bbc1-e059ca792a7f" alt="image"></p><ul><li>This name will be visible to end users</li><li>You can start your factory from scratch or you can create a factory from an existing one to copy its settings, which you can then edit.</li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/136a6a6f-e7cb-4450-a04a-e8509169e45a" alt="image"></p><ul><li>If you are starting from scratch then you need to choose the type of uniq you want to use.</li><li>Click on &quot;Create&quot; to start the creation of your uniq.</li><li>Congratulations, at this point your uniq factory is now created (although not published), you can come back to finish it later.</li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/667e3444-fb9e-43ec-850e-aff0c10f93d3" alt="image"></p><h4 id="configure-the-store-token-factory" tabindex="-1">Configure the Store token factory <a class="header-anchor" href="#configure-the-store-token-factory" aria-label="Permalink to &quot;Configure the Store token factory&quot;">​</a></h4><ul><li>If you left your uniq factory in an incomplete state, you can retrieve it from the list and continue setting it up by clicking on &quot;Edit Factory&quot;</li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/113ff0f5-028a-448a-bd00-f13c7698043a" alt="image"></p><ul><li>The starting &quot;Main Information&quot; page holds following details: <ul><li>Token name, which should represent the version of your uniq. For example: Standard Edition, GOTY edition, etc.</li><li>A short description (only one language localization is available).</li><li>A small picture which will be the representation of the content in the platform.</li><li>The image used in the background of your uniq id card.</li><li>The default language contained in this uniq.</li><li>Note: this section is not editable once published.</li></ul></li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/a9812a97-df3a-4d12-bd17-076bf9522b6b" alt="image"></p><ul><li>Within the &quot;Type &amp; Content&quot; section, you will be able to change the type of uniq factory you&#39;re creating, as well as link the game build you want to provide access to. <ul><li>Only the published game builds are displayed here.</li><li>Note: this section is not editable once published.</li></ul></li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/20402ad9-a87f-461b-8a5a-d0fa979968b7" alt="image"></p><ul><li>The &quot;Geofencing&quot; section allows you to set in what regions your uniq factory will be available, based on the user location upon registreting. <ul><li>This allows you to select the entire world, or specific countries/regions that you want your content to be available for users to view, buy and play.</li><li>Selecting countries is fully customizable. Users located within an unavailable area will not be able to view the content in the store (although the game page itself will still be visible).</li><li>Note: this section is not editable once published.</li></ul></li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/736ee785-b77a-4610-bcad-673c1d976f48" alt="image"></p><ul><li>The &quot;Price &amp; Revenue Shares&quot; section offers different options based on the main choice between <strong>paid</strong> and <strong>free</strong> content. <ul><li>If the uniq is set as paid, you will need to set a price in all of the available currencies. <ul><li>In order to exclude a currency, the corresponding countries and regions linked to it must be excluded in the Geofencing section.</li><li>In addition, you need to select the revenue share distribution. Ultra always takes a 15% commission, and it is up to you to distribute the remaining 85%. At the moment, promoters cannot be configured.</li></ul></li><li>If you set the uniq as free there are no other settings on this page.</li></ul></li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/538bc613-634a-4853-a472-bbda459db61e" alt="image"></p><ul><li>Skipping the &quot;Tradability &amp; Transferability&quot; section, we will move on to &quot;<strong>Media</strong>&quot;. In this section, you can put up to 8 pictures to advertise your uniq so your content will be more appealing in the store and across the whole ultra platform.</li></ul><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/fef14f35-4e01-4183-905a-2166661f4dc4" alt="image"></p><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/fb44b91b-bae2-4f84-9031-f7036aee3b16" alt="image"></p><h3 id="the-store-token-factory-and-true-uniq-factories" tabindex="-1">The Store Token Factory and true uniq factories <a class="header-anchor" href="#the-store-token-factory-and-true-uniq-factories" aria-label="Permalink to &quot;The Store Token Factory and true uniq factories&quot;">​</a></h3><p>One of Ultra&#39;s objectives is offering game ownership to users through the use of blockchain technology. We achieve this by tokenizing games, i.e., linking every game or piece of content you want to offer to a uniq that exists on our blockchain and acts as proof of ownership of its corresponding content.</p><p>At the moment, publishing a game with it&#39;s store token factory doesn&#39;t mean that the game is truly tokenized yet. The real uniq factory that will be present in our blockchain needs to be created separately through a process currently managed by Ultra employees. As we continue opening up our ecosystem, we hope to allow third parties to self-manage this.</p><h4 id="tradability-and-resellability" tabindex="-1">Tradability and resellability <a class="header-anchor" href="#tradability-and-resellability" aria-label="Permalink to &quot;Tradability and resellability&quot;">​</a></h4><p>Although what you set up on this section within the GDC doesn&#39;t affect the uniq factory&#39;s real settings, it&#39;s still necessary to establish some of its related concepts.</p><ul><li><strong>Tradable</strong> means your token can be sold by end-users that hold it and will appear in the secondhand market.</li><li><strong>Transferable</strong> means that your token can be transferred from one wallet to another, with no cost to it.</li><li><strong>Non tradable</strong> means that your token cannot be set on sale by end-users, and consequently cannot appear in the secondhand market.</li><li><strong>Non transferable</strong> means that your token cannot be sent freely by users .</li></ul><p>Notes:</p><ul><li>A game can be tradable and not transferable, and the other way around.</li><li>You can set a minimum resale price to prevent your game from being sold under a certain price. This can be set both in USD and UOS.</li><li>You can set the revenue share to be earned from the second hand market. The options are to set a fixed price or a % of the selling price set by the customer. Note: To set a fixed amount you need to choose a minimum resale price</li><li>You can set tradability and transferability windows. If set, they will define when your token can be traded/transferred.</li></ul><h3 id="finishing-up" tabindex="-1">Finishing up <a class="header-anchor" href="#finishing-up" aria-label="Permalink to &quot;Finishing up&quot;">​</a></h3><p>Even if you didn&#39;t finish the uniq factory yet, the &quot;Preview&quot; option should be available at all times. This allows you to view what the factory will look like in Ultra.</p><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/97a63be3-f247-449f-a81a-1eb7e5c1067c" alt="image"></p><p>If you did fill all of the necessary details... Congratulations! Your uniq factory should now ready to be published.</p><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/65b9e979-68b5-4a9a-abca-cc7d25db904c" alt="image"></p>',48),s=[n];function l(r,c,u,h,d,f){return a(),t("div",null,s)}const p=e(o,[["render",l]]);export{m as __pageData,p as default};
