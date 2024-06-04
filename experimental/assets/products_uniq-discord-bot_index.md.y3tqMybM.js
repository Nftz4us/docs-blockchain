import{_ as e,c as t,o,N as i,aI as a}from"./chunks/framework.f7A1_Hg1.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"title":"Introduction","outline":[0,4],"order":1},"headers":[],"relativePath":"products/uniq-discord-bot/index.md","filePath":"products/uniq-discord-bot/index.md","lastUpdated":null}'),r={name:"products/uniq-discord-bot/index.md"},s=i('<h1 id="ultra-uniq-discord-bot" tabindex="-1">Ultra Uniq Discord Bot <a class="header-anchor" href="#ultra-uniq-discord-bot" aria-label="Permalink to &quot;Ultra Uniq Discord Bot&quot;">​</a></h1><p><img src="'+a+'" alt=""></p><h2 id="what-is-the-discord-bot" tabindex="-1">What is the Discord Bot? <a class="header-anchor" href="#what-is-the-discord-bot" aria-label="Permalink to &quot;What is the Discord Bot?&quot;">​</a></h2><p>Ultra has created a Discord Bot which allows you to verify your Ultra Mainnet account, and then use Uniqs (NFTs) as keys which open access to gated channels. In short, if you have the right Uniq, you can have access to special content on a Discord server.</p><h2 id="where-do-you-get-the-discord-bot" tabindex="-1">Where do you get the Discord Bot? <a class="header-anchor" href="#where-do-you-get-the-discord-bot" aria-label="Permalink to &quot;Where do you get the Discord Bot?&quot;">​</a></h2><p>Ultra provides both the <a href="https://github.com/ultraio/ultra-discord-uniq-roles-bot" target="_blank" rel="noreferrer">Github repository</a> for the Discord Bot, and the <a href="https://quay.io/repository/ultraio/discord-uniq-roles-bot?tab=tags" target="_blank" rel="noreferrer">Quay.io image</a>.</p><h2 id="summary-of-use" tabindex="-1">Summary of Use <a class="header-anchor" href="#summary-of-use" aria-label="Permalink to &quot;Summary of Use&quot;">​</a></h2><ul><li>An Administrator of the server will assign a factory to a discord role.</li><li>A user uses a command in your Discord Server to bind their Discord Account to the Ultra Blockchain.</li><li>A user will then receive a private message with a prefilled URL that points to a WebServer that this bot is running alongside itself.</li><li>The user will then visit the attached URL.</li><li>The user will either be prompted to connect to the Ultra Wallet extension, or obtain the Ultra Wallet Extension.</li><li>Upon connecting they will be asked to sign a message with their blockchain account.</li><li>A callback URL will be invoked back to this bot with the signed message.</li><li>We now have identified that the user owns the blockchain account and we can store that into a database. <ul><li>Stores the Discord ID</li><li>Stores the Blockchain ID</li><li>Stores the Signature</li></ul></li><li>After the internal logic of the bot will lookup the blockchain id and bind roles to the discord user based on what Uniq&#39;s they own and have in their inventory.</li><li>If a matching token factory is found in the user&#39;s inventory they are given a discord role that matches it.</li><li>Perioidic updates are done to add / remove roles based on users who are stored in the Database.</li></ul>',8),n=[s];function l(h,d,c,u,b,p){return o(),t("div",null,n)}const _=e(r,[["render",l]]);export{f as __pageData,_ as default};
