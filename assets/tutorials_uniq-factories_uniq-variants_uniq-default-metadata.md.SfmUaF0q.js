import{_ as a,c as i,o as s,N as t}from"./chunks/framework.F4ceOzBN.js";const E=JSON.parse('{"title":"Uniq Default Metadata","description":"","frontmatter":{"title":"Uniq Default Metadata","order":-99994},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/uniq-default-metadata.md","filePath":"tutorials/uniq-factories/uniq-variants/uniq-default-metadata.md","lastUpdated":null}'),e={name:"tutorials/uniq-factories/uniq-variants/uniq-default-metadata.md"},n=t(`<h1 id="uniq-default-metadata" tabindex="-1">Uniq default metadata <a class="header-anchor" href="#uniq-default-metadata" aria-label="Permalink to &quot;Uniq default metadata&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Uniq default metadata is utilized whenever any token is reference that does not have a dedicated metadata URI. This can happen either intentionally if the tokens minted from the factory are identical (so there is no need for anything except default metadata) or accidentally in case due to some issue the tokens are minted without a dedicated metadata URI. In any case the default metadata functions identically to individual Uniq metadata with only exceptions that it is utilized when there is no override and the URI for this metadata is placed in the dedicated field of the factory on-chain data <code>default_token_uri</code>.</p><h2 id="supported-dynamic-values" tabindex="-1">Supported dynamic values <a class="header-anchor" href="#supported-dynamic-values" aria-label="Permalink to &quot;Supported dynamic values&quot;">​</a></h2><p>Default token URI supports special <code>dynamic</code> values that can be used to modify the URI based on different context values which are different between different tokens/factories. If none of those values are specified the the URI is considered to be <code>static</code> (meaning that it is not context dependant). Followind <code>dynamic</code> values are supported:</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>factory_id</td><td>ID of the token factory from which the token was minted</td></tr><tr><td>id</td><td>ID of the token</td></tr><tr><td>hash</td><td>Hash of the token</td></tr><tr><td>serial_number</td><td>Serial number of the token</td></tr></tbody></table><p>To specify a <code>dynamic</code> values within a URI you must enclose it in <code>{}</code> like so: <code>https://example.io/{token_id}.json</code> which should evaluate to <code>https://example.io/42.json</code> for the token with serial number of 42 whenever Ultra or any other integrator will be reading this default token metadata.</p><h2 id="metadata-fields" tabindex="-1">Metadata fields <a class="header-anchor" href="#metadata-fields" aria-label="Permalink to &quot;Metadata fields&quot;">​</a></h2><p>Identical to <a href="./uniq-metadata.html#metadata-fields">Uniq metadata fields</a></p><h2 id="minimalistic-example" tabindex="-1">Minimalistic example <a class="header-anchor" href="#minimalistic-example" aria-label="Permalink to &quot;Minimalistic example&quot;">​</a></h2><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;specVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Uniq default variant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;defaultLocale&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en-US&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;media&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;contentType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;integrity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SHA256&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;uris&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.io/default/76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;square&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;contentType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;integrity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SHA256&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;uris&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.io/default/f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="json-schema" tabindex="-1">JSON schema <a class="header-anchor" href="#json-schema" aria-label="Permalink to &quot;JSON schema&quot;">​</a></h2><p>Identical to <a href="./uniq-metadata.html#json-schema">Uniq metadata schema</a></p>`,13),h=[n];function l(d,p,o,k,r,u){return s(),i("div",null,h)}const f=a(e,[["render",l]]);export{E as __pageData,f as default};
