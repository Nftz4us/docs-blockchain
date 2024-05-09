import{_ as e,c as r,o as a,N as o,ac as t}from"./chunks/framework.5q2WmqSd.js";const m=JSON.parse('{"title":"Overview","description":"","frontmatter":{"title":"Overview","outline":[0,4],"order":-99},"headers":[],"relativePath":"blockchain/block-producers/infrastructure/block-producing-infrastructure.md","filePath":"blockchain/block-producers/infrastructure/block-producing-infrastructure.md","lastUpdated":null}'),n={name:"blockchain/block-producers/infrastructure/block-producing-infrastructure.md"},s=o('<h1 id="infrastructure-overview" tabindex="-1">Infrastructure Overview <a class="header-anchor" href="#infrastructure-overview" aria-label="Permalink to &quot;Infrastructure Overview&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This section will guide you through the setup of the infrastructure of your Block Producer. Here you should find the most relevant information on how to set up, configure, and run your Block Producer nodes. Pay close attention to the security tips below and make sure to always exchange information with other Block Producers using the private Slack channel that Ultra provides.</p><p><strong>The infrastructure proposal that we expect Block Producers to follow</strong></p><p><img src="'+t+'" alt=""></p><h2 id="layer-1-producing-nodes" tabindex="-1">Layer 1: Producing Nodes <a class="header-anchor" href="#layer-1-producing-nodes" aria-label="Permalink to &quot;Layer 1: Producing Nodes&quot;">​</a></h2><p>These nodes communicate using Wireguard. These nodes should be protected from other Block Producers using API nodes. The Producer Control Switch is a device (normally a PC) that has exclusive access to the Producers. It&#39;s function is to access the Producer&#39;s plugins like net_api_plugin, in order to do operations like stop or pause a producer, switch to the fail-over producer, check the producer status, check the peers status, and other very important actions related to the producer management.</p><h2 id="layer-2-relay-nodes" tabindex="-1">Layer 2: Relay Nodes <a class="header-anchor" href="#layer-2-relay-nodes" aria-label="Permalink to &quot;Layer 2: Relay Nodes&quot;">​</a></h2><p>Full nodes to relay blocks, connected to the producing nodes and to other Block Producers via Wireguard. They should also be protected by API nodes.</p><h2 id="layer-3-api-layer" tabindex="-1">Layer 3: API Layer <a class="header-anchor" href="#layer-3-api-layer" aria-label="Permalink to &quot;Layer 3: API Layer&quot;">​</a></h2><p>API layer where Proxy Servers (web firewalls) filter requests using <a href="https://github.com/EOSIO/patroneos" target="_blank" rel="noreferrer">Patroneos</a>. These add an extra layer of protection against malicious or malformed data, as well as against volumetric attacks.</p><h2 id="layer-4-load-balancer" tabindex="-1">Layer 4: Load Balancer <a class="header-anchor" href="#layer-4-load-balancer" aria-label="Permalink to &quot;Layer 4: Load Balancer&quot;">​</a></h2><p>Through the Load Balancer incoming API calls are routed to Layer 3 web firewalls.</p><p>It is important to note that Antelope software is not good at handling multiple connections. That is why it&#39;s important to use API nodes on layers 1 and 2 to communicate with other Block Producers. You should also consider using a load balancer like a <a href="http://www.haproxy.org/" target="_blank" rel="noreferrer">HaProxy</a> to better handle the connection between your API nodes and other Block Producers.</p>',14),c=[s];function i(l,d,u,h,p,f){return a(),r("div",null,c)}const b=e(n,[["render",i]]);export{m as __pageData,b as default};
