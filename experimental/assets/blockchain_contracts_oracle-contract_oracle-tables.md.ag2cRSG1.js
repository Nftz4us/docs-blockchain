import{_ as e,c as t,o as a,N as o}from"./chunks/framework.wHDMMYC3.js";const g=JSON.parse('{"title":"Oracle Tables","description":"","frontmatter":{"title":"Oracle Tables","order":0},"headers":[],"relativePath":"blockchain/contracts/oracle-contract/oracle-tables.md","filePath":"blockchain/contracts/oracle-contract/oracle-tables.md","lastUpdated":null}'),d={name:"blockchain/contracts/oracle-contract/oracle-tables.md"},r=o('<h1 id="oracle-tables" tabindex="-1">Oracle Tables <a class="header-anchor" href="#oracle-tables" aria-label="Permalink to &quot;Oracle Tables&quot;">​</a></h1><h2 id="feeddata" tabindex="-1">feeddata <a class="header-anchor" href="#feeddata" aria-label="Permalink to &quot;feeddata&quot;">​</a></h2><ul><li>Table: <code>feeddata</code></li><li>Code: <code>eosio.oracle</code></li><li>Scope: <code>eosio.oracle</code></li><li>Key: <code>source</code></li></ul><p>The table contains conversion rate cache and weight for individual exchanges.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>source</td><td>name</td><td>Name of the registered exchange</td></tr><tr><td>rates</td><td>std::vector&lt;uint64_t&gt;</td><td>Cached rates pushed by this exchange. Value stored is <code>amount</code> from the conversion rate <code>asset</code> type</td></tr><tr><td>weight</td><td>uint64_t</td><td>Weight of the exchange for the purpose of calculating weighted average between exchanges. It is equal to the last 24 hours trading volume for this exchange</td></tr><tr><td>source_type</td><td>uint8_t</td><td>Unused</td></tr></tbody></table><p>Most relevant actions: <strong>regexchange, unregexchg</strong></p><h2 id="oraclestate" tabindex="-1">oraclestate <a class="header-anchor" href="#oraclestate" aria-label="Permalink to &quot;oraclestate&quot;">​</a></h2><ul><li>Table: <code>oraclestate</code></li><li>Code: <code>eosio.oracle</code></li><li>Scope: <code>eosio.oracle</code></li></ul><p>This singleton contains common values used by oracle during it&#39;s operation.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>conversion_rate_symbol</td><td>symbol</td><td>Symbol used for conversion rates <code>asset</code> type pushed by exchanges. Default value is <code>8,DUOS</code></td></tr><tr><td>trading_volume_symbol</td><td>symbol</td><td>Symbol used for validation of the 24 hours trading volume asset. Default value is <code>8,USD</code></td></tr><tr><td>latest_timestamp</td><td>uint64_t</td><td>Stores the most recent timestamp extracted from the rates pushed by the exchanges</td></tr><tr><td>interval</td><td>uint8_t</td><td>Interval enforced between rates pushed to the oracle. Forced to be 1 during initialization</td></tr><tr><td>cache_window</td><td>uint8_t</td><td>Time window for exchanges/source to push the rates. Forced to be 60 during initialization</td></tr><tr><td>registered_sources</td><td>uint32_t</td><td>Total number of exchange/sources registered</td></tr><tr><td>ultra_comprehensive_rate_weight</td><td>uint32_t</td><td>Unusued</td></tr></tbody></table><p>Most relevant actions: <strong>init</strong></p><h2 id="feedcompl" tabindex="-1">feedcompl <a class="header-anchor" href="#feedcompl" aria-label="Permalink to &quot;feedcompl&quot;">​</a></h2><p>This table is deprecated and is not currently in use.</p><h2 id="finalaverage" tabindex="-1">finalaverage <a class="header-anchor" href="#finalaverage" aria-label="Permalink to &quot;finalaverage&quot;">​</a></h2><ul><li>Table: <code>finalaverage</code></li><li>Code: <code>eosio.oracle</code></li><li>Scope: <code>time symbol_code</code></li><li>Key: <code>param</code></li></ul><p>The table contains moving averages for specified time units and windows.</p><p>Possible scopes for <code>finalaverage table</code></p><ul><li><code>SECONDS</code> (or <code>.1docnmjch2p3</code>)</li><li><code>MINUTES</code> (or <code>.1doep2pdt4oh</code>)</li><li><code>HOURS</code> (or <code>.....oumepboc</code>)</li><li><code>DAYS</code> (or <code>......2nf5.o4</code>)</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>average</td><td>rate</td><td>Calculated moving average with a timestamp corresponding to the latest update</td></tr><tr><td>is_valid_deprecated</td><td>bool</td><td>Unused</td></tr><tr><td>param</td><td>uint64_t</td><td>Stores the window size and EMA alpha coefficient. See <a href="./oracle-actions/addma.html">addma</a> for details</td></tr><tr><td>moving_window_counter</td><td>uint8_t</td><td>Incremental counter which is used to track how many values were accumulated by the moving average</td></tr><tr><td>unit</td><td>uint8_t</td><td>Unused. Forced to be 1</td></tr></tbody></table><p>Most relevant actions: <strong>pushrate</strong></p><h2 id="finalrates" tabindex="-1">finalrates <a class="header-anchor" href="#finalrates" aria-label="Permalink to &quot;finalrates&quot;">​</a></h2><ul><li>Table: <code>finalrates</code></li><li>Code: <code>eosio.oracle</code></li><li>Scope: <code>0 (seconds) / 1 (minutes) / 2 (hours) / 3 (days)</code></li></ul><p>The table contains intermediate values and calculated moving averages to be used for updating <code>finalaverage</code> table entries.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>index</td><td>uint64_t</td><td>Index pointing to the latest value in the <code>rates</code> vector that was updated</td></tr><tr><td>rates</td><td>std::vector&lt;urate&gt;</td><td>Cached rates calculated based on rates pushed by exchanges or calculated from <code>rolling_moving_average</code> of the previous scope of <code>finalrates</code>. Value stored is a pair of the timestamp of calculated conversion rate and associated price stored as unsigned integer</td></tr><tr><td>rolling_moving_average</td><td>moving_average_impl</td><td>Refer to <code>finalaverage</code> table to see the structure of this type. This moving average is used to populate the <code>rates</code> vector of <code>finalrates</code> with scope one higher than the current one</td></tr></tbody></table><p>Most relevant actions: <strong>pushrate</strong></p><h2 id="lastknwnrate" tabindex="-1">lastknwnrate <a class="header-anchor" href="#lastknwnrate" aria-label="Permalink to &quot;lastknwnrate&quot;">​</a></h2><ul><li>Table: <code>lastknwnrate</code></li><li>Code: <code>eosio.oracle</code></li><li>Scope: <code>eosio.oracle</code></li></ul><p>Stores the latest conversion rate pushed from any exchange.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>source</td><td>eosio::name</td><td>Name of the exchange that was the last to push the new rate</td></tr><tr><td>latest_rate</td><td>rate</td><td>Pair of <code>asset</code> storing the conversion rate of USD to UOS and a <code>uint64_t</code> UTC timestamp when this last rate was pushed</td></tr></tbody></table>',29),c=[r];function i(l,s,n,h,u,p){return a(),t("div",null,c)}const m=e(d,[["render",i]]);export{g as __pageData,m as default};
