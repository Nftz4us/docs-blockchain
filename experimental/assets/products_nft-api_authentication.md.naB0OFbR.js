import{_ as i,c as a,o as t,N as e}from"./chunks/framework.wHDMMYC3.js";const g=JSON.parse('{"title":"Authentication","description":"","frontmatter":{"title":"Authentication","deploy":["staging","mainnet"],"order":2},"headers":[],"relativePath":"products/nft-api/authentication.md","filePath":"products/nft-api/authentication.md","lastUpdated":null}'),n={name:"products/nft-api/authentication.md"},s=e(`<h1 id="api-authentication-documentation" tabindex="-1">API Authentication Documentation <a class="header-anchor" href="#api-authentication-documentation" aria-label="Permalink to &quot;API Authentication Documentation&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Welcome to the API Authentication Documentation for the Ultra API . This document provides guidelines and instructions for managing authentication when interacting with our API.</p><h2 id="how-to-register" tabindex="-1">How to register <a class="header-anchor" href="#how-to-register" aria-label="Permalink to &quot;How to register&quot;">​</a></h2><p>To access our API endpoints, third-party clients must first obtain appropriate credentials depending on their application type.</p><p>Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.</p><h3 id="frontend-application-registration" tabindex="-1">Frontend Application Registration <a class="header-anchor" href="#frontend-application-registration" aria-label="Permalink to &quot;Frontend Application Registration&quot;">​</a></h3><p>For frontend applications, you need to obtain a registration token and a unique X-Client-ID. These credentials are essential for authenticating requests and identifying clients accessing our API. To request the registration token and X-Client-ID, please contact our support team at <a href="mailto:developers@ultra.io" target="_blank" rel="noreferrer">developers@ultra.io</a>. They will guide you through the registration process and provide you with the necessary credentials to integrate with our API securely.</p><h3 id="backend-application-registration" tabindex="-1">Backend Application Registration <a class="header-anchor" href="#backend-application-registration" aria-label="Permalink to &quot;Backend Application Registration&quot;">​</a></h3><p>For backend applications, you&#39;ll need a client ID and a client secret. To set up authentication for your backend application, you must implement a client credentials flow. This integration enables your backend application to authenticate users through another backend securely. Please contact our support team at <a href="mailto:developers@ultra.io" target="_blank" rel="noreferrer">developers@ultra.io</a>. They will guide you through the registration process and provide you with the necessary credentials to integrate with our API securely.</p><h2 id="authentication-flow" tabindex="-1">Authentication Flow <a class="header-anchor" href="#authentication-flow" aria-label="Permalink to &quot;Authentication Flow&quot;">​</a></h2><p>The authentication flow for Ultra API depends on the type of application.</p><h3 id="frontend-application-authentication-flow" tabindex="-1">Frontend Application Authentication Flow <a class="header-anchor" href="#frontend-application-authentication-flow" aria-label="Permalink to &quot;Frontend Application Authentication Flow&quot;">​</a></h3><p>When making requests to API endpoints from a frontend application, follow these steps:</p><ul><li><p>Obtain Registration Token: Upon registration, users receive a unique registration token and X-Client-ID associated with their account.</p></li><li><p>Authentication Header: Include the registration token as the authentication bearer in the request header when making API requests. Use the Authorization: Bearer {registration_token} header.</p></li><li><p>Client Identification: Along with the registration token, clients must include their X-Client-ID parameter in the request header to identify themselves to the API.</p></li></ul><h3 id="backend-application-authentication-flow" tabindex="-1">Backend Application Authentication Flow <a class="header-anchor" href="#backend-application-authentication-flow" aria-label="Permalink to &quot;Backend Application Authentication Flow&quot;">​</a></h3><p>For backend applications, follow these steps:</p><ul><li><p>Obtain Client Credentials: Upon registration, obtain a client ID and client secret for your backend application.</p></li><li><p>Configure Backend Application: Configure your backend application for authentication. This typically involves setting up appropriate middleware or libraries to handle authentication using the client ID and client secret.</p></li><li><p>Implement Client Credentials Flow : Implement the authentication flow in your backend application according to the OAuth 2.0 and OpenID Connect specifications. Ensure that your backend application follows best practices for securely handling authentication tokens and user sessions.</p></li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="endpoints" tabindex="-1">Endpoints : <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints :&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sandbox:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://staging.api.ultra.io/graphql</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Production:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://api.ultra.io/graphql</span></span></code></pre></div><h3 id="login-example-frontend-application-curl" tabindex="-1">Login Example Frontend Application (cURL) <a class="header-anchor" href="#login-example-frontend-application-curl" aria-label="Permalink to &quot;Login Example Frontend Application (cURL)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Frontend Application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Authorization: Bearer {registration_token}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;X-Client-ID: YourClientID&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://api.example.com/your-endpoint</span></span></code></pre></div><h3 id="login-example-backend-application-curl" tabindex="-1">Login Example Backend Application (cURL) <a class="header-anchor" href="#login-example-backend-application-curl" aria-label="Permalink to &quot;Login Example Backend Application (cURL)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Backend Application</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;client_id:YourClientID&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;client_secret: YourClientSecret&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;grant_type: client_credentials&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;scope: YourScope&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://api.example.com/your-endpoint</span></span></code></pre></div><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><ul><li><strong>Invalid Credentials</strong>: When logging in with incorrect registration_token or X-Client-ID, the API responds with 401 Unauthorized.</li><li><strong>Unauthorized Access</strong>: When accessing protected endpoints without a valid token, the API responds with 401 Unauthorized.</li></ul><h2 id="appendix" tabindex="-1">Appendix <a class="header-anchor" href="#appendix" aria-label="Permalink to &quot;Appendix&quot;">​</a></h2><p>References</p><ul><li>OpenID Connect Specifications: <a href="https://openid.net/" target="_blank" rel="noreferrer">OpenID</a></li><li>OpenID Certified Relying Party Libraries : <a href="https://openid.net/developers/certified-openid-connect-implementations/" target="_blank" rel="noreferrer">OpenID Libraries</a></li></ul>`,30),o=[s];function l(r,p,h,c,d,u){return t(),a("div",null,o)}const F=i(n,[["render",l]]);export{g as __pageData,F as default};
