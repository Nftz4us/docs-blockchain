import{_ as e,c as r,o,N as a}from"./chunks/framework.RWhliK3J.js";const g=JSON.parse('{"title":"Adding Producers","description":"","frontmatter":{"title":"Adding Producers","outline":[0,4],"order":-92},"headers":[],"relativePath":"blockchain/block-producers/launch-procedures/adding-new-producers.md","filePath":"blockchain/block-producers/launch-procedures/adding-new-producers.md","lastUpdated":null}'),d={name:"blockchain/block-producers/launch-procedures/adding-new-producers.md"},t=a('<h1 id="adding-producers" tabindex="-1">Adding Producers <a class="header-anchor" href="#adding-producers" aria-label="Permalink to &quot;Adding Producers&quot;">​</a></h1><p>Our system contract modifications prevent any form of voting after the chain has been activated. This modification precludes the standard procedure on Antelope for adding additional Block Producers to our network.</p><p>Ultra handpicks the Block Producers and adds them manually through <strong>regprod</strong> and <strong>unregprod</strong> actions. Once these actions are performed, the modifications to the block production schedule are handled automatically.</p><h2 id="how-producers-are-activated" tabindex="-1">How Producers are Activated <a class="header-anchor" href="#how-producers-are-activated" aria-label="Permalink to &quot;How Producers are Activated&quot;">​</a></h2><p>When a producer is registered and they have registered themselves Ultra can add them through an action. Ultra is responsible for creating the production schedule, which is done through the <code>setprods</code> action.</p>',5),c=[t];function n(s,i,h,u,l,p){return o(),r("div",null,c)}const m=e(d,[["render",n]]);export{g as __pageData,m as default};
