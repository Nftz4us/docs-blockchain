import{_ as e,c as t,o as a,N as i,ak as o}from"./chunks/framework.RWhliK3J.js";const f=JSON.parse('{"title":"Transaction Queue and Rate Limiting","description":"","frontmatter":{"title":"Transaction Queue and Rate Limiting","outline":[0,4],"order":-93},"headers":[],"relativePath":"blockchain/general/antelope-ultra/rate-limiting.md","filePath":"blockchain/general/antelope-ultra/rate-limiting.md","lastUpdated":null}'),n={name:"blockchain/general/antelope-ultra/rate-limiting.md"},s=i('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>The Ultra Blockchain employs two main concepts to enhance performance and security: <strong>Resource Allocation</strong> and <strong>Rate Limiting</strong>. This document aims to explain these concepts and how users can effectively interact with the Ultra Blockchain.</p><h1 id="resource-allocation" tabindex="-1">Resource Allocation <a class="header-anchor" href="#resource-allocation" aria-label="Permalink to &quot;Resource Allocation&quot;">​</a></h1><p>When a user stakes UOS (Ultra Blockchain&#39;s native currency), they&#39;re eligible to use a portion of our CPU resources. The ratio of resource allocation is determined by the stake amount of an account relative to the total amount staked in the system. This is, however, not a strict ratio due to the resource allocation mechanism.</p><h1 id="positive-and-negative-accounts" tabindex="-1">Positive and Negative Accounts <a class="header-anchor" href="#positive-and-negative-accounts" aria-label="Permalink to &quot;Positive and Negative Accounts&quot;">​</a></h1><p>Accounts that use less CPU than is available to them are considered &quot;positive accounts&quot;, while those that exceed their CPU allocation are &quot;negative accounts&quot;. In the protocol level, there are two transaction queues, the positive queue for positive accounts and the negative queue for negative accounts.</p><p>To ensure fair resource usage, Ultra Blockchain reserves 20% of all CPU resources for negative accounts. This results in a 80-20% processing time ratio where block producers process transactions from the positive queue for 320ms and from the negative queue for 80ms, if the block producing time is 400ms.</p><h1 id="queue-processing" tabindex="-1">Queue Processing <a class="header-anchor" href="#queue-processing" aria-label="Permalink to &quot;Queue Processing&quot;">​</a></h1><p>The normal processing order adheres to the 80-20% ratio. However, if there aren&#39;t enough transactions in the positive queue, the block producer can pick transactions from the negative queue and vice versa. This dynamic reallocation ensures efficient use of resources.</p><h1 id="rate-limiting" tabindex="-1">Rate Limiting <a class="header-anchor" href="#rate-limiting" aria-label="Permalink to &quot;Rate Limiting&quot;">​</a></h1><p>Rate limiting is the second core concept, providing safeguards for the network. Transactions from positive accounts are added to the positive queue, while those from negative accounts go into the negative queue. Furthermore, negative accounts are categorized based on whether they fall above or below the rate limit threshold.</p><h1 id="rate-limit-classification-for-negative-accounts" tabindex="-1">Rate Limit Classification for Negative Accounts <a class="header-anchor" href="#rate-limit-classification-for-negative-accounts" aria-label="Permalink to &quot;Rate Limit Classification for Negative Accounts&quot;">​</a></h1><p>Negative accounts are categorized based on whether they fall below or above a configurable rate limit threshold (currently set at 50ms). If an account&#39;s properties fulfill the following inequality:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>used cpu &gt;= available cpu + rate_limit_threshold</span></span></code></pre></div><p>then it is considered &quot;above the rate limit threshold&quot; (or briefly, &quot;above the threshold&quot;). Conversely, if the inequality is not satisfied, the account is &quot;below the rate limit threshold&quot;.</p><p>Transactions from accounts below the threshold face no restrictions. However, if an account is categorized as above the threshold, it is subject to both &quot;incoming rate limiting&quot; and &quot;execution rate limiting&quot;.</p><h1 id="incoming-rate-limiting" tabindex="-1">Incoming Rate Limiting <a class="header-anchor" href="#incoming-rate-limiting" aria-label="Permalink to &quot;Incoming Rate Limiting&quot;">​</a></h1><p>This applies before a transaction from an &quot;above the threshold&quot; account is added to the negative queue. The system checks if the incoming rate limiting timestamp is less than the current timestamp. If true, the transaction is <strong>added</strong> to the queue and the incoming rate limiting timestamp is updated to:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>now + abs(used CPU - available CPU) * 100</span></span></code></pre></div><p>If not, the transaction is <strong>rejected</strong> with an incoming rate limiting exception.</p><h1 id="execution-rate-limiting" tabindex="-1">Execution Rate Limiting <a class="header-anchor" href="#execution-rate-limiting" aria-label="Permalink to &quot;Execution Rate Limiting&quot;">​</a></h1><p>This mechanism activates just before a transaction from an &quot;above the threshold&quot; account is executed. The system checks if the execution rate limiting timestamp is less than the current time. If true, the transaction is <strong>executed</strong>, and the execution rate limiting timestamp is updated to</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>now + abs(used CPU - available CPU) * 100</span></span></code></pre></div><p>If not, the transaction is <strong>rejected</strong> before execution with an execution rate limiting exception.</p><p><img src="'+o+'" alt="Transaction processing chart"><em>Transaction processing chart</em></p><h1 id="switching-queues" tabindex="-1">Switching Queues <a class="header-anchor" href="#switching-queues" aria-label="Permalink to &quot;Switching Queues&quot;">​</a></h1><p>In case an account becomes negative while its transaction is in the positive queue, the transaction is moved to the negative queue, applying the rules specified for the negative queue.</p><p>With these mechanisms, Ultra Blockchain ensures efficient resource allocation and transaction processing while preventing resource abuse. Always remember to monitor your CPU usage and stake enough UOS to maintain a positive account status.</p>',28),r=[s];function c(l,u,h,d,p,m){return a(),t("div",null,r)}const v=e(n,[["render",c]]);export{f as __pageData,v as default};
