import{_ as a,c as e,o as t,N as n}from"./chunks/framework.UwpMnNk-.js";const b=JSON.parse('{"title":"Endpoint Usage","description":"","frontmatter":{"title":"Endpoint Usage","order":-9993,"outline":[0,4]},"headers":[],"relativePath":"tutorials/docker/endpoint-usage.md","filePath":"tutorials/docker/endpoint-usage.md","lastUpdated":null}'),s={name:"tutorials/docker/endpoint-usage.md"},o=n('<h1 id="cleos-endpoint-usage" tabindex="-1">Cleos Endpoint Usage <a class="header-anchor" href="#cleos-endpoint-usage" aria-label="Permalink to &quot;Cleos Endpoint Usage&quot;">​</a></h1><p>In many cases when working with smart contracts, or on-chain actions you will need an endpoint. An endpoint can be described as a URL to push transactions to, get chain information such as tables, or lookup accounts.</p><h2 id="cleos-usage" tabindex="-1">Cleos Usage <a class="header-anchor" href="#cleos-usage" aria-label="Permalink to &quot;Cleos Usage&quot;">​</a></h2><p>Cleos has a section on using <a href="./../../products/chain-api/">external endpoints</a>.</p><p>In short append the <code>-u</code> flag with a url. If you are using local environment then this flag can be skipped. The default value of <code>http://127.0.0.1:8888</code> will be used</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cleos -u &lt;endpoint&gt;</span></span></code></pre></div><h2 id="curl-usage" tabindex="-1">cUrl Usage <a class="header-anchor" href="#curl-usage" aria-label="Permalink to &quot;cUrl Usage&quot;">​</a></h2><p>cUrl can be used normally but suggested to use <code>json_pp</code> to help prettify the output from a cUrl response.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -X POST &lt;endpoint&gt;/v1/chain/get_info</span></span></code></pre></div><h2 id="wget-usage" tabindex="-1">wget Usage <a class="header-anchor" href="#wget-usage" aria-label="Permalink to &quot;wget Usage&quot;">​</a></h2><p>wget can also be used to fetch endpoint information as well.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget -qO- /dev/stdout &lt;endpoint&gt;/v1/chain/get_info | json_pp</span></span></code></pre></div><h2 id="available-endpoints" tabindex="-1">Available Endpoints <a class="header-anchor" href="#available-endpoints" aria-label="Permalink to &quot;Available Endpoints&quot;">​</a></h2><p><a href="./../../products/chain-api/">See this API section</a> for information on block producer endpoints that are publicly available.</p><h2 id="limitations-and-availability" tabindex="-1">Limitations and Availability <a class="header-anchor" href="#limitations-and-availability" aria-label="Permalink to &quot;Limitations and Availability&quot;">​</a></h2><p>Each of these endpoints has their own policies and limitations on data that can be sent to and pull from the endpoint. However, those limitations are not easily understood. These are all public facing endpoints and if an API node is down, simply try another one.</p>',16),i=[o];function l(d,p,c,r,h,u){return t(),e("div",null,i)}const m=a(s,[["render",l]]);export{b as __pageData,m as default};
