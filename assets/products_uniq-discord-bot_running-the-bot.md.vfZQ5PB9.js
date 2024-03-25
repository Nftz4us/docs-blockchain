import{_ as s,c as e,o as t,M as i}from"./chunks/framework.TnGZ2tJw.js";const g=JSON.parse('{"title":"Running the Bot","description":"","frontmatter":{"title":"Running the Bot","outline":[0,4],"order":5},"headers":[],"relativePath":"products/uniq-discord-bot/running-the-bot.md","filePath":"products/uniq-discord-bot/running-the-bot.md","lastUpdated":null}'),a={name:"products/uniq-discord-bot/running-the-bot.md"},n=i('<h1 id="running-the-bot" tabindex="-1">Running the Bot <a class="header-anchor" href="#running-the-bot" aria-label="Permalink to &quot;Running the Bot&quot;">​</a></h1><p>Depending on your environment and usecase you will want to use one of the following commands to start the bot.</p><h2 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-label="Permalink to &quot;Production&quot;">​</a></h2><p>Builds both Client &amp; Server, then Starts the Bot.</p><p>HTML files are automatically built to <code>packages/server/dist/html</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ws</span></span></code></pre></div><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Use this if you are making changes.</p><p>Ultra Wallet requires an HTTP(s) server to work with it.</p><p>This starts a Vite Server with local https, and the server without feeding the built pages through the endpoint.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages/server</span></span></code></pre></div><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>These are general purpose docker instructions based off this repository.</p><p>Start by adding your <code>.env</code> file to <code>packages/server/.env</code></p><p>Run the following to start the bot.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uniqbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span></span></code></pre></div>',17),o=[n];function h(p,r,l,d,c,k){return t(),e("div",null,o)}const F=s(a,[["render",h]]);export{g as __pageData,F as default};
