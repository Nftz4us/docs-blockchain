import{_ as a,c as s,o as i,N as e}from"./chunks/framework.HE4KbJuF.js";const g=JSON.parse('{"title":"Create a Contract","description":"","frontmatter":{"title":"Create a Contract","order":-99998,"oultine":[0,4]},"headers":[],"relativePath":"blockchain/general/tools/cdt/create-a-contract.md","filePath":"blockchain/general/tools/cdt/create-a-contract.md","lastUpdated":null}'),t={name:"blockchain/general/tools/cdt/create-a-contract.md"},n=e('<h1 id="create-a-contract" tabindex="-1">Create a Contract <a class="header-anchor" href="#create-a-contract" aria-label="Permalink to &quot;Create a Contract&quot;">​</a></h1><p>Let&#39;s start with a simple smart contract that produces the traditional <code>Hello World</code>.</p><p>This tutorial introduces the following key concepts:</p><ul><li>EOSIO Contract Development Toolkit: The toolchain and libraries used to build smart contracts</li><li>Webassembly (WASM): The virtual machine used to execute a portable binary-code format, hosted in nodeos</li><li>Application Binary Interfaces (ABI): The interface that defines how data is marshalled to and from the webassembly virtual machine</li><li>Smart Contracts: The code that defines actions and transactions which may be executed on a blockchain</li></ul><p>This tutorial shows how to:</p><ul><li>Create a simple smart contract with a hi action</li><li>Compile and deploy the smart contract to an EOSIO blockchain</li><li>Use the command line to call the hi action of the smart contract</li></ul><h2 id="before-you-begin" tabindex="-1">Before you Begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you Begin&quot;">​</a></h2><p>This tutorial requires the following:</p><ul><li>Knowledge of the C++ programming language</li><li>A code editor or IDE</li><li>A fully configured local development environment</li></ul><p>Once you complete the tutorial, you should have created a Hello World smart contract and deployed the smart contract on a blockchain.</p><h2 id="procedure-to-create-hello-cpp" tabindex="-1">Procedure to create hello.cpp <a class="header-anchor" href="#procedure-to-create-hello-cpp" aria-label="Permalink to &quot;Procedure to create hello.cpp&quot;">​</a></h2><p>Follow this procedure to create the Hello World smart contract. Normally you create two files - the header or <code>.hpp</code> file which contains the declarations for the smart contract class and the <code>.cpp</code> file, which contains the implementation of the smart contract actions. In this simple example, you only use a <code>.cpp</code> file.</p><h3 id="_1-create-a-new-directory-called-hello-to-store-your-smart-contract-file" tabindex="-1">1. Create a new directory called hello to store your smart contract file <a class="header-anchor" href="#_1-create-a-new-directory-called-hello-to-store-your-smart-contract-file" aria-label="Permalink to &quot;1. Create a new directory called hello to store your smart contract file&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span></code></pre></div><p>Go to the new directory</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span></code></pre></div><h3 id="_2-create-a-new-file-hello-cpp-and-open-it-in-your-preferred-text-editor" tabindex="-1">2. Create a new file, <code>hello.cpp</code>, and open it in your preferred text editor <a class="header-anchor" href="#_2-create-a-new-file-hello-cpp-and-open-it-in-your-preferred-text-editor" aria-label="Permalink to &quot;2. Create a new file, `hello.cpp`, and open it in your preferred text editor&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.cpp</span></span></code></pre></div><h3 id="_3-write-the-smart-contract" tabindex="-1">3. Write the smart contract <a class="header-anchor" href="#_3-write-the-smart-contract" aria-label="Permalink to &quot;3. Write the smart contract&quot;">​</a></h3><p>Follow these four steps and add this code to the <code>hello.cpp</code> file.</p><h4 id="step-1-import-the-eosio-base-library-with-the-include-directive" tabindex="-1">Step 1. Import the eosio base library with the include directive. <a class="header-anchor" href="#step-1-import-the-eosio-base-library-with-the-include-directive" aria-label="Permalink to &quot;Step 1. Import the eosio base library with the include directive.&quot;">​</a></h4><p>Add the line:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/eosio.hpp&gt;</span></span></code></pre></div><h4 id="step-2-the-eosio-hpp-contains-classes-required-to-write-a-smart-contract-including-eosio-contract-create-a-standard-c-11-class-and-inherit-from-the-eosio-contract-class-use-the-eosio-contract-attribute-to-inform-the-eosio-cdt-compiler-this-is-a-smart-contract" tabindex="-1">Step 2. The <code>eosio.hpp</code> contains classes required to write a smart contract, including <code>eosio::contract</code>. Create a standard C++11 class and inherit from the <code>eosio::contract</code> class. Use the <code>[[eosio::contract]]</code> attribute to inform the <code>EOSIO.CDT</code> compiler this is a smart contract. <a class="header-anchor" href="#step-2-the-eosio-hpp-contains-classes-required-to-write-a-smart-contract-including-eosio-contract-create-a-standard-c-11-class-and-inherit-from-the-eosio-contract-class-use-the-eosio-contract-attribute-to-inform-the-eosio-cdt-compiler-this-is-a-smart-contract" aria-label="Permalink to &quot;Step 2. The `eosio.hpp` contains classes required to write a smart contract, including `eosio::contract`. Create a standard C++11 class and inherit from the `eosio::contract` class. Use the `[[eosio::contract]]` attribute to inform the `EOSIO.CDT` compiler this is a smart contract.&quot;">​</a></h4><p>Add the line:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p>The <code>EOSIO.CDT</code> compiler automatically generates the main dispatcher and the <code>ABI file</code>. The dispatcher routes action calls to the correct smart contract action. The compiler will create one when using the <code>eosio::contract</code> attribute. Advanced programmers can customize this behavior by defining their own dispatcher.</p><h4 id="step-3-add-a-public-access-specifier-and-a-using-declaration-to-introduce-base-class-members-from-eosio-contract-you-can-now-use-the-default-base-class-constructor" tabindex="-1">Step 3. Add a public access specifier and a using-declaration to introduce base class members from <code>eosio::contract</code>. You can now use the default base class constructor. <a class="header-anchor" href="#step-3-add-a-public-access-specifier-and-a-using-declaration-to-introduce-base-class-members-from-eosio-contract-you-can-now-use-the-default-base-class-constructor" aria-label="Permalink to &quot;Step 3. Add a public access specifier and a using-declaration to introduce base class members from `eosio::contract`. You can now use the default base class constructor.&quot;">​</a></h4><p>Add these lines:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract;</span></span></code></pre></div><h4 id="step-4-add-a-hi-public-action-this-action-accepts-an-eosio-name-parameter-and-prints-hello-concatenated-with-the-eosio-name-parameter" tabindex="-1">Step 4. Add a <code>hi</code> public action. This action accepts an <code>eosio::name</code> parameter, and prints <strong>Hello</strong> concatenated with the <code>eosio::name</code> parameter. <a class="header-anchor" href="#step-4-add-a-hi-public-action-this-action-accepts-an-eosio-name-parameter-and-prints-hello-concatenated-with-the-eosio-name-parameter" aria-label="Permalink to &quot;Step 4. Add a `hi` public action. This action accepts an `eosio::name` parameter, and prints **Hello** concatenated with the `eosio::name` parameter.&quot;">​</a></h4><p>Add these line:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span></code></pre></div><p>The <code>[[eosio::action]]</code> attribute lets the compiler know this is an action.</p><p>The <code>hello.cpp</code> file should now look like this:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;eosio/eosio.hpp&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::contract;</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      [[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">]]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eosio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>',36),o=[n];function l(h,r,c,p,d,k){return i(),s("div",null,o)}const m=a(t,[["render",l]]);export{g as __pageData,m as default};
