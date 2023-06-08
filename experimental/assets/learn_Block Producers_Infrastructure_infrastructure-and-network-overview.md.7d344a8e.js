import{_ as e,c as o,o as r,V as a}from"./chunks/framework.f1490fb9.js";const t="/experimental/images/network-infrastructure.png",n="/experimental/images/nodeos-infrastructure.png",i="/experimental/images/vpn-network.png",k=JSON.parse('{"title":"Infrastructure and Network","description":"","frontmatter":{"title":"Infrastructure and Network","deploy":["staging","mainnet"],"outline":[0,4],"order":-94},"headers":[],"relativePath":"learn/Block Producers/Infrastructure/infrastructure-and-network-overview.md","lastUpdated":1686235215000}'),s={name:"learn/Block Producers/Infrastructure/infrastructure-and-network-overview.md"},c=a('<h1 id="infrastructure-and-network-overview" tabindex="-1">Infrastructure and Network Overview <a class="header-anchor" href="#infrastructure-and-network-overview" aria-label="Permalink to &quot;Infrastructure and Network Overview&quot;">​</a></h1><h2 id="network-schema" tabindex="-1">Network Schema <a class="header-anchor" href="#network-schema" aria-label="Permalink to &quot;Network Schema&quot;">​</a></h2><p>The diagrams below show how a network should be set up based on the architectural guidelines.</p><h3 id="connection-types-legend" tabindex="-1">Connection Types Legend <a class="header-anchor" href="#connection-types-legend" aria-label="Permalink to &quot;Connection Types Legend&quot;">​</a></h3><p>These are the connection types used in the following diagrams.</p><p><img src="'+t+'" alt=""></p><h3 id="overall-network-topology" tabindex="-1">Overall Network Topology <a class="header-anchor" href="#overall-network-topology" aria-label="Permalink to &quot;Overall Network Topology&quot;">​</a></h3><p>The following overall network topology hides some details to give a focus on the big picture.</p><p><img src="'+n+'" alt=""></p><h3 id="a-single-cluster-of-producing-infrastructure-from-a-block-producer" tabindex="-1">A single cluster of producing infrastructure from a block producer <a class="header-anchor" href="#a-single-cluster-of-producing-infrastructure-from-a-block-producer" aria-label="Permalink to &quot;A single cluster of producing infrastructure from a block producer&quot;">​</a></h3><p>Here is a more detailed view of a single cluster, which has its API machines connected to a load balancer via an HTTP connection and its producing machines connected via a Wireguard/VPN connection.</p><p><img src="'+i+'" alt=""></p><h3 id="a-link-to-the-miro-board-with-more-details" tabindex="-1">A link to the miro board with more details <a class="header-anchor" href="#a-link-to-the-miro-board-with-more-details" aria-label="Permalink to &quot;A link to the miro board with more details&quot;">​</a></h3><p><a href="https://miro.com/app/board/o9J_koVWOmk=/" target="_blank" rel="noreferrer">https://miro.com/app/board/o9J_koVWOmk=/</a></p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>A cluster in the diagram above corresponds to the infrastructure that each partner Block Producer is expected to set up on their side. This document aims to walk you through the steps required to achieve this. A Block Producer can use the <a href="./minimum-recommended-infrastructure.html">Minimum recommended infrastructure</a> as a guide for what kind of hardware Ultra currently requires. As the Mainnet grows and scales, this configuration is likely to change over time and require an infrastructure upgrade.</p><h3 id="connection-type" tabindex="-1">Connection type <a class="header-anchor" href="#connection-type" aria-label="Permalink to &quot;Connection type&quot;">​</a></h3><p>Some connections are <strong>block-only</strong> to prevent unnecessary transaction propagation and reduce the chance of send duplicate transactions. e.g. connections between the API nodeos.</p><h3 id="api-nodeos-configuration" tabindex="-1">API nodeos configuration <a class="header-anchor" href="#api-nodeos-configuration" aria-label="Permalink to &quot;API nodeos configuration&quot;">​</a></h3><p>API nodeos doesn&#39;t accept p2p transactions, that is <strong>p2p-accept-transactions = false</strong>, to prevent a transaction is sent from a producing nodeos to its own API nodeos.</p><h2 id="guide-for-adding-more-bps-into-the-schema" tabindex="-1">Guide for adding more BPs into the schema <a class="header-anchor" href="#guide-for-adding-more-bps-into-the-schema" aria-label="Permalink to &quot;Guide for adding more BPs into the schema&quot;">​</a></h2><h3 id="peer-numbers" tabindex="-1">Peer numbers <a class="header-anchor" href="#peer-numbers" aria-label="Permalink to &quot;Peer numbers&quot;">​</a></h3><p>The maximum peer limits for any producing nodeos is 10 for performance reasons. Normally, it connects to 5 other nodeos in the following priority.</p><ol><li><p>Previous and next producer nodeos in the production schedule</p></li><li><p>Connect to other 3 producer nodeos from the rest producers, based on lower latency first rule.</p></li></ol><h3 id="hop-numbers" tabindex="-1">Hop numbers <a class="header-anchor" href="#hop-numbers" aria-label="Permalink to &quot;Hop numbers&quot;">​</a></h3><p>Basically, one hop means from one nodeos to another nodeos. The network schema should minimize the hops between the producing nodeos. Ideally, all producing nodeos should connect to each other directly, so a block can be sent to other Block Producers with the smallest delay. However, since there&#39;s the recommended maximum 10 peers limit, it’s impossible to do that. Instead, the network schema should try to limit the hops between the producing nodeos to the smallest number of hops possible. With 5 Block Producers, we can connect each producing nodeos directly, i.e one hop. With 8 Block Producers, we can limit it to 2 hops between the producing nodeos.</p><h2 id="adding-more-api-nodeos" tabindex="-1">Adding more API nodeos <a class="header-anchor" href="#adding-more-api-nodeos" aria-label="Permalink to &quot;Adding more API nodeos&quot;">​</a></h2><p>Conditions on adding more API nodeos</p><ul><li><p>There is a high number of HTTP requests that transactions can’t get a response in time, e.g. 2 seconds</p></li><li><p>There is a high number of public peers that would break the maximum peer limit.</p></li></ul><h2 id="load-balancer" tabindex="-1">Load Balancer <a class="header-anchor" href="#load-balancer" aria-label="Permalink to &quot;Load Balancer&quot;">​</a></h2><p>It’s recommended to use HAProxy for both HTTP and TPC load balancer.</p>',31),d=[c];function l(h,u,p,m,f,g){return r(),o("div",null,d)}const w=e(s,[["render",l]]);export{k as __pageData,w as default};
