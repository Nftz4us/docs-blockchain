import{_ as e,c as s,o as a,N as i}from"./chunks/framework.wHDMMYC3.js";const g=JSON.parse('{"title":"Installing the Server","description":"","frontmatter":{"title":"Installing the Server","outline":[0,4],"order":3},"headers":[],"relativePath":"products/uniq-discord-bot/installing-the-server.md","filePath":"products/uniq-discord-bot/installing-the-server.md","lastUpdated":null}'),r={name:"products/uniq-discord-bot/installing-the-server.md"},t=i('<h1 id="installing-the-server" tabindex="-1">Installing the Server <a class="header-anchor" href="#installing-the-server" aria-label="Permalink to &quot;Installing the Server&quot;">​</a></h1><p>This is where the backend data lives. This handles database writing, verifying signatures, and Discord commands.</p><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><p>From the root directory of this monorepo; run any of the following commands.</p><h3 id="dev" tabindex="-1">Dev <a class="header-anchor" href="#dev" aria-label="Permalink to &quot;Dev&quot;">​</a></h3><p>Spins up a localhost server to perform development against for the server-side.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span></code></pre></div><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>Builds the client-side into a single page application, and pushes it to the server folder under packages/server/dist/html.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span></code></pre></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2><p>The main logic lives inside of the <code>src/services</code> folder.</p><p>The bot will not start without starting every service successfully.</p><h3 id="services-blockchain" tabindex="-1">services/blockchain <a class="header-anchor" href="#services-blockchain" aria-label="Permalink to &quot;services/blockchain&quot;">​</a></h3><p>Handles various calls to the ultra main network chain</p><h3 id="services-database" tabindex="-1">services/database <a class="header-anchor" href="#services-database" aria-label="Permalink to &quot;services/database&quot;">​</a></h3><p>Handles writing to a MongoDB collection for an individual user, or a token factory binding to a discord role</p><h3 id="services-discord" tabindex="-1">services/discord <a class="header-anchor" href="#services-discord" aria-label="Permalink to &quot;services/discord&quot;">​</a></h3><p>Handles all slash commands that are integrated with discord</p><h3 id="services-express" tabindex="-1">services/express <a class="header-anchor" href="#services-express" aria-label="Permalink to &quot;services/express&quot;">​</a></h3><p>Handles feeding the compiled HTML static site to users who access the available endpoint that is provided by this bot</p><h3 id="services-messageprovider" tabindex="-1">services/messageProvider <a class="header-anchor" href="#services-messageprovider" aria-label="Permalink to &quot;services/messageProvider&quot;">​</a></h3><p>Generates cached messages which are used to help identify a signature after a signature is signed by a blockchain account</p><h3 id="services-users" tabindex="-1">services/users <a class="header-anchor" href="#services-users" aria-label="Permalink to &quot;services/users&quot;">​</a></h3><p>Handles refreshing user data and inventories and rebinding roles.</p>',25),n=[t];function o(l,d,h,c,p,u){return a(),s("div",null,n)}const k=e(r,[["render",o]]);export{g as __pageData,k as default};
