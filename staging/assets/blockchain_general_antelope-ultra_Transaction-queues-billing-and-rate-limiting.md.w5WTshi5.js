import{_ as o,D as l,c as r,I as i,w as a,N as c,k as e,a as t,o as d}from"./chunks/framework.2dXRcwP5.js";const B=JSON.parse('{"title":"Transaction Queues, Rate-limit, and Billing","description":"","frontmatter":{"title":"Transaction Queues, Rate-limit, and Billing","outline":[0,4],"order":-94},"headers":[],"relativePath":"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md","filePath":"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md","lastUpdated":null}'),u={name:"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md"},b=c('<h1 id="transaction-queues-rate-limit-and-billing" tabindex="-1">Transaction Queues, Rate-limit, and Billing <a class="header-anchor" href="#transaction-queues-rate-limit-and-billing" aria-label="Permalink to &quot;Transaction Queues, Rate-limit, and Billing&quot;">​</a></h1><h2 id="failed-transactions-in-antelope-blockchains" tabindex="-1">Failed Transactions in Antelope Blockchains <a class="header-anchor" href="#failed-transactions-in-antelope-blockchains" aria-label="Permalink to &quot;Failed Transactions in Antelope Blockchains&quot;">​</a></h2><p>Antelope-based blockchains have historically faced challenges with failed transactions. These failed transactions aren&#39;t billed, but they still consume valuable CPU resources.</p><p>In summary:</p><ol><li>A user pushes a transaction to an API nodeos.</li><li>API nodeos validates this transaction and forwards it via P2P.</li><li>The transaction reaches the block producer nodeos, gets executed, and is included in a block.</li></ol><p>However, many transactions sent to API nodeos and block producer nodeos pass signature validation but fail internal execution checks, like assert failure. This overflow of failed transactions puts strain on block producers and API nodeos, affecting the CPU time usage for regular transactions.</p><h2 id="subjective-billing" tabindex="-1">Subjective Billing <a class="header-anchor" href="#subjective-billing" aria-label="Permalink to &quot;Subjective Billing&quot;">​</a></h2><p>To address this, subjective billing was introduced. It aims to bill failed transactions and reject any accounts that go subjectively negative. Successful transactions replace their temporary subjective billing with objective billing upon blockchain recording. While this approach significantly reduced CPU waste, it can result in inconsistent billing across nodeos. Consequently, transactions might be lost at any point, potentially causing an account to encounter recurring resource errors and subsequent subjective billings. For a deeper dive, refer to <a href="https://eosnetwork.com/blog/api-plus-an-introduction-to-subjective-billing-and-lost-transactions/" title="An Introduction to Subjective Billing and Lost Transactions" target="_blank" rel="noreferrer">&#39;An Introduction to Subjective Billing and Lost Transactions&#39;</a>.</p><h2 id="staking-and-the-ranked-transaction-queue" tabindex="-1">Staking and the Ranked Transaction Queue <a class="header-anchor" href="#staking-and-the-ranked-transaction-queue" aria-label="Permalink to &quot;Staking and the Ranked Transaction Queue&quot;">​</a></h2><p>Antelope-based blockchain users need to stake UOS for CPU and NET resources before transacting. The staking amount required, relative to transaction demands, varies with the total staked number. The &quot;ranked transaction queue&quot; was implemented to allow end users free transactions without staking. However, abundant transactions from high-ranking users might delay those of lower-ranking users. Such high-ranking users aren&#39;t billed for failed transactions and subjective billing doesn&#39;t completely address this issue, especially since it lets users transact without staking.</p><h2 id="two-transaction-queues" tabindex="-1">Two Transaction Queues <a class="header-anchor" href="#two-transaction-queues" aria-label="Permalink to &quot;Two Transaction Queues&quot;">​</a></h2><p>To balance free network usage for end users and to ensure that staked users have access to their resources, two transaction queues have been introduced:</p><ol><li><p><strong>Staked User Queue</strong>: For users with staking (primarily developers). This queue can use up to a set CPU time percentage per block (e.g., 80%).</p></li><li><p><strong>Free User Queue</strong>: For users without staking. This queue can use the remaining CPU time (e.g., 20%). If one queue is vacant, the other can use more CPU time.</p></li></ol><p>To counter spamming from non-staking users, there is a rate limit. Exceeding a set CPU usage threshold results in users getting rate-limited. Higher transaction demands necessitate more staking. See more details in <a href="./rate-limiting.html">&#39;Transaction Queue and Rate Limiting&#39;</a>.</p><h2 id="addressing-failed-transactions" tabindex="-1">Addressing Failed Transactions <a class="header-anchor" href="#addressing-failed-transactions" aria-label="Permalink to &quot;Addressing Failed Transactions&quot;">​</a></h2><p>A &quot;failed transaction billing&quot; system has been added to minimize the impact of failed transactions on both user types.</p><p>In this system, failed transactions are added to blocks. Other nodeos validate and apply the provided block billing. Failed transactions only modify billing, not the blockchain state. If a transaction fails at the API nodeos level, it&#39;s added to a speculative block but isn&#39;t broadcast to the wider network. This is distinct from subjective billing, which bills on all nodes and doesn&#39;t add billed transactions to blocks. Furthermore, subjective billing tracks billing locally per nodeos, while failed transaction billing operates only on the active BP node.</p><p>Failures are treated differently. A transaction with an invalid signature or insufficient authority will always be rejected immediately, instead of included in a block and getting billed. Some failures will also be given a second chance to run, like transactions that hit the block deadline.</p>',18),h=e("h2",{id:"failed-transactions-and-subjective-billing",tabindex:"-1"},[t("Failed Transactions and Subjective Billing "),e("a",{class:"header-anchor",href:"#failed-transactions-and-subjective-billing","aria-label":'Permalink to "Failed Transactions and Subjective Billing"'},"​")],-1),g=e("p",null,"After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.",-1),p=e("h2",{id:"failed-transactions-and-subjective-billing-1",tabindex:"-1"},[t("Failed Transactions and Subjective Billing "),e("a",{class:"header-anchor",href:"#failed-transactions-and-subjective-billing-1","aria-label":'Permalink to "Failed Transactions and Subjective Billing"'},"​")],-1),m=e("p",null,"After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.",-1),f=e("h2",{id:"current-status",tabindex:"-1"},[t("Current Status "),e("a",{class:"header-anchor",href:"#current-status","aria-label":'Permalink to "Current Status"'},"​")],-1),v=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,"While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.")],-1),k=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,"While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.")],-1),w=e("p",null,"It remains an option for future activation. Chain usage will also be collected and leveraged by BPs for greylisting/blacklisting any account with malicious behavior via a decentralized and automatic mechanism in the future.",-1);function _(T,j,y,q,P,S){const n=l("Staging"),s=l("Experimental");return d(),r("div",null,[b,i(n,null,{default:a(()=>[h,g]),_:1}),i(s,null,{default:a(()=>[p,m]),_:1}),f,i(n,null,{default:a(()=>[v]),_:1}),i(s,null,{default:a(()=>[k]),_:1}),w])}const x=o(u,[["render",_]]);export{B as __pageData,x as default};
