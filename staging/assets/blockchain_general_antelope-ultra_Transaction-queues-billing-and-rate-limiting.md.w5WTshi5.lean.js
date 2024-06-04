import{_ as o,D as l,c as r,I as i,w as a,N as c,k as e,a as t,o as d}from"./chunks/framework.2dXRcwP5.js";const B=JSON.parse('{"title":"Transaction Queues, Rate-limit, and Billing","description":"","frontmatter":{"title":"Transaction Queues, Rate-limit, and Billing","outline":[0,4],"order":-94},"headers":[],"relativePath":"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md","filePath":"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md","lastUpdated":null}'),u={name:"blockchain/general/antelope-ultra/Transaction-queues-billing-and-rate-limiting.md"},b=c("",18),h=e("h2",{id:"failed-transactions-and-subjective-billing",tabindex:"-1"},[t("Failed Transactions and Subjective Billing "),e("a",{class:"header-anchor",href:"#failed-transactions-and-subjective-billing","aria-label":'Permalink to "Failed Transactions and Subjective Billing"'},"​")],-1),g=e("p",null,"After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.",-1),p=e("h2",{id:"failed-transactions-and-subjective-billing-1",tabindex:"-1"},[t("Failed Transactions and Subjective Billing "),e("a",{class:"header-anchor",href:"#failed-transactions-and-subjective-billing-1","aria-label":'Permalink to "Failed Transactions and Subjective Billing"'},"​")],-1),m=e("p",null,"After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.",-1),f=e("h2",{id:"current-status",tabindex:"-1"},[t("Current Status "),e("a",{class:"header-anchor",href:"#current-status","aria-label":'Permalink to "Current Status"'},"​")],-1),v=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,"While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.")],-1),k=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,"While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.")],-1),w=e("p",null,"It remains an option for future activation. Chain usage will also be collected and leveraged by BPs for greylisting/blacklisting any account with malicious behavior via a decentralized and automatic mechanism in the future.",-1);function _(T,j,y,q,P,S){const n=l("Staging"),s=l("Experimental");return d(),r("div",null,[b,i(n,null,{default:a(()=>[h,g]),_:1}),i(s,null,{default:a(()=>[p,m]),_:1}),f,i(n,null,{default:a(()=>[v]),_:1}),i(s,null,{default:a(()=>[k]),_:1}),w])}const x=o(u,[["render",_]]);export{B as __pageData,x as default};
