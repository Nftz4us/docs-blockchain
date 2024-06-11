import{_ as e,c as o,o as t,N as a}from"./chunks/framework.HE4KbJuF.js";const m=JSON.parse('{"title":"Consensus","description":"","frontmatter":{"title":"Consensus","outline":[0,4],"order":-94},"headers":[],"relativePath":"blockchain/general/antelope-ultra/consensus.md","filePath":"blockchain/general/antelope-ultra/consensus.md","lastUpdated":null}'),s={name:"blockchain/general/antelope-ultra/consensus.md"},n=a('<h1 id="consensus" tabindex="-1">Consensus <a class="header-anchor" href="#consensus" aria-label="Permalink to &quot;Consensus&quot;">​</a></h1><p>A blockchain is a decentralized peer-to-peer state machine. It has no centralized authority. While this creates a system that is devoid of corruption from a single source, it still creates a major problem.</p><p>How are any decisions made that determine the future of the network?</p><p>How do you ensure that the network stays decentralized?</p><p>In a centralized organization like a company, decisions are taken at the executive level. This isn’t possible in a blockchain because a blockchain has no such functionality. Necessary decisions must be made using “consensus mechanisms”.</p><h2 id="common-consensus-mechanisms" tabindex="-1">Common Consensus Mechanisms <a class="header-anchor" href="#common-consensus-mechanisms" aria-label="Permalink to &quot;Common Consensus Mechanisms&quot;">​</a></h2><p>Some of the most common consensus models used in blockchains are Proof of Work and Proof of Stake.</p><h3 id="proof-of-work-pow" tabindex="-1">Proof of Work (PoW) <a class="header-anchor" href="#proof-of-work-pow" aria-label="Permalink to &quot;Proof of Work (PoW)&quot;">​</a></h3><p>In Proof of Work, miner nodes compete to find a nonce added to the header of a block which causes the block to have some desired property (typically a certain number of zeros in the most significant bits of the cryptographic hash of the block header). By making it computationally expensive to find such nonces that make the blocks valid, it becomes difficult for attackers to create an alternative fork of the blockchain that would be accepted by the rest of the network as the best chain. The main disadvantage of Proof of Work is that the security of the network depends on spending a lot of resources on computing power to find the nonces.</p><h3 id="proof-of-stake-pos" tabindex="-1">Proof of Stake (PoS) <a class="header-anchor" href="#proof-of-stake-pos" aria-label="Permalink to &quot;Proof of Stake (PoS)&quot;">​</a></h3><p>In Proof-of-Stake, nodes that own the largest stake or percentage of some asset have equivalent decision power. In other words, voting power is proportional to the stake held. One interesting variant is Delegated Proof-of-Stake (DPoS) in which a large number of participants or stakeholders elect a smaller number of delegates, which in turn make decisions for them.</p><h3 id="proof-of-authority-poa" tabindex="-1">Proof of Authority (PoA) <a class="header-anchor" href="#proof-of-authority-poa" aria-label="Permalink to &quot;Proof of Authority (PoA)&quot;">​</a></h3><p><strong>Proof of Authority is what Ultra is currently based on.</strong></p><p>Proof of Authority (PoA) is a reputation-based consensus algorithm that introduces a practical and efficient solution for blockchain networks (especially the private ones). The term was proposed in 2017 by Ethereum co-founder and former CTO Gavin Wood.</p><p>The PoA consensus algorithm leverages the value of identities, which means that block validators are not staking coins but their own reputation instead. Therefore, PoA blockchains are secured by the validating nodes that are arbitrarily selected as trustworthy entities.</p><p>The Proof of Authority model relies on a limited number of block validators and this is what makes it a highly scalable system. Blocks and transactions are verified by pre-approved participants, who act as moderators of the system.</p>',16),r=[n];function i(c,h,l,d,f,p){return t(),o("div",null,r)}const k=e(s,[["render",i]]);export{m as __pageData,k as default};
