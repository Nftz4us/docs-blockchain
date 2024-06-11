import{_ as s,c as e,o as a,N as i}from"./chunks/framework.wVj9vBva.js";const u=JSON.parse('{"title":"Signing a Message","description":"","frontmatter":{"title":"Signing a Message","order":8,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/signing_message.md","filePath":"products/ultra-wallet/signing_message.md","lastUpdated":null}'),t={name:"products/ultra-wallet/signing_message.md"},n=i(`<h1 id="signing-a-message" tabindex="-1">Signing a Message <a class="header-anchor" href="#signing-a-message" aria-label="Permalink to &quot;Signing a Message&quot;">​</a></h1><p>In some cases, a web application can also request the user to sign a given message to verify the ownership of a blockchain account. Applications are free to write their messages which will be displayed to users from within the Ultra Wallet&#39;s signature prompt using the method <code>signMessage()</code>. These messages should have one of the next prefixes: <code>0x</code>, <code>UOSx</code>, or <code>message:</code>.</p><p><strong>Message signatures do not involve network fees.</strong></p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ultra.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message:This is a test message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  response.data.signature;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // SIG_K1_KXuKhsxcdDTKuMbo2kveKsggwUfV9p5FuPsirkFcjjQo2sxUvxcc1TEnkoancsWTf6SEHj1jMjB9e6GuRkg6ZrEvV5tHa8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // { status: &quot;error&quot;, message: &quot;Transaction declined&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>If the user declines the message signing or closes the window, the Promise will return an error.</p>`,5),l=[n];function r(h,p,o,g,c,d){return a(),e("div",null,l)}const E=s(t,[["render",r]]);export{u as __pageData,E as default};
