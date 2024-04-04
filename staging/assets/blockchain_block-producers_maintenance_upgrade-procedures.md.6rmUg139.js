import{_ as e,c as o,o as r,N as t}from"./chunks/framework.I0_e-zsE.js";const g=JSON.parse('{"title":"Upgrade Procedures","description":"","frontmatter":{"title":"Upgrade Procedures","outline":[0,4],"order":-95},"headers":[],"relativePath":"blockchain/block-producers/maintenance/upgrade-procedures.md","filePath":"blockchain/block-producers/maintenance/upgrade-procedures.md","lastUpdated":null}'),a={name:"blockchain/block-producers/maintenance/upgrade-procedures.md"},s=t('<h1 id="upgrade-procedures" tabindex="-1">Upgrade Procedures <a class="header-anchor" href="#upgrade-procedures" aria-label="Permalink to &quot;Upgrade Procedures&quot;">​</a></h1><p>This chapter explains how to upgrade the infrastructure, nodeos software, and the consensus protocol (hard fork).</p><h2 id="infrastructure-upgrade" tabindex="-1">Infrastructure upgrade <a class="header-anchor" href="#infrastructure-upgrade" aria-label="Permalink to &quot;Infrastructure upgrade&quot;">​</a></h2><p>As the UOS Mainnet grows and scales, the minimum infrastructure configuration is likely to change over time and require upgrades.</p><p>If your BP is running the <a href="./../infrastructure/minimum-recommended-infrastructure.html">Minimum Infrastructure</a> specified by Ultra, the first thing that a Block Producer should do is to split their nodes into separate instances. There will then be dedicated instances for each kind of node. Ex.: Create a new instance for seed node, and 2 other instances for the API nodes.</p><p>Creating a powerful instance and keeping the same architecture, running all nodes in the same instance, is also a possibility. IO operations and not processor speed is the most critical component in maintaining a healthy cluster of API nodes as well as producer node. Moving to a bare-metal infrastructure or a hybrid infrastructure model across bare-metal and cloud services should be a good option to improve a Block Producer’s performance.</p><p>Regardless of specific infrastructure strategies, the upgrade process is the same. Here are the steps:</p><ol><li><p>Create a new instance based on the Block Producer needs. Eg: with more RAM, more CPU, or more storage.</p></li><li><p>Set up the instance for the kind of node that is supposed to run (API, Seed, or Producer).</p></li><li><p>Sync it to the network</p></li><li><p>Perform connectivity and performance tests (please refer to the <a href="./../launch-procedures/finishing-up.html">Finishing up</a> section)</p></li><li><p>Switch to the new instance</p></li><li><p>Turn off the old instance</p></li></ol><h2 id="nodeos-upgrade" tabindex="-1">Nodeos upgrade <a class="header-anchor" href="#nodeos-upgrade" aria-label="Permalink to &quot;Nodeos upgrade&quot;">​</a></h2><p>Nodeos software is in constant development, so upgrading it is a regular activity that Block Producers will have to do. It&#39;s very important to stay updated and running the latest nodeos software version to provide the best services for Ultra users.</p><p>If it is a major update that requires a hard fork, please refer to the <strong>Consensus protocol upgrade</strong> section below. The steps for moving to a new version of nodeos software released are:</p><ol><li><p>It is indicated to first build, install, and run it in a local machine to check if everything is working properly.</p></li><li><p>Build it in the node&#39;s instance or transfer the binaries built on step 1.</p></li><li><p>Create a new folder for the binaries. It&#39;s very important to keep the running version of nodeos, to play it back in case of errors switching to the new one.</p></li><li><p>The process of upgrading nodeos is quite simple, just edit the start.sh script and point the nodeos path to the new folder.</p></li></ol><p>A good practice is to first upgrade the seed node because it&#39;s easier and faster to restore in case of any problems and you don&#39;t compromise the producer and your API service. After, you should upgrade the APIs, each at once, and finally, the producer. If the Block Producer has a producer node as a backup, switch to the backup producer, do the upgrade and switch back to the upgraded node. If not, producer nodes can do upgrade during a time window after they finished the last block and wait for the next turn. Block Producers make several blocks at a time, so they mostly wait until all other Block Producers complete their work. It should be enough time to stop and switch to the new version.</p><h2 id="consensus-protocol-upgrade" tabindex="-1">Consensus protocol upgrade <a class="header-anchor" href="#consensus-protocol-upgrade" aria-label="Permalink to &quot;Consensus protocol upgrade&quot;">​</a></h2><p>If a release has major enhancements and a new consensus protocol feature has been introduced which requires changes to the protocol rules and alignment by block producing nodes for the upgrade to be successfully deployed, Ultra will provide detailed instructions on how to proceed to all Block Producers for each case.</p><p>It&#39;s important to remember that before deploying these upgrades to the official network, each protocol upgrade feature should be deployed and verified on the Testnet. This test upgrade process can give Block Producers the practice by carrying out the steps necessary to successfully coordinate the activation of each feature.</p><p>For more information about it, click <a href="https://developers.eos.io/eosio-nodeos/docs/consensus-protocol-upgrade-process" target="_blank" rel="noreferrer">here</a>.</p>',17),n=[s];function i(d,c,p,u,l,h){return r(),o("div",null,n)}const m=e(a,[["render",i]]);export{g as __pageData,m as default};
