import{_ as a,c as t,o,N as n}from"./chunks/framework.wVj9vBva.js";const l="/staging/assets/docker-windows-download.QSsJF_Et.png",r="/staging/assets/docker-windows-install.lSXFL9AN.png",s="/staging/assets/docker-windows-agreement.8G-ymFLP.png",h="/staging/assets/docker-windows-skip-sign-in.sJcCQeqL.png",p="/staging/assets/docker-windows-skip-survey.m193Y35w.png",e="/staging/assets/docker-windows-running.tx2I7D8P.png",c="/staging/assets/docker-windows-hello-world.CCfU0sMM.png",i="/staging/assets/docker-windows-delete-hello-world.odY6cplL.png",d="/staging/assets/docker-linux-hello-world.--doTNc_.png",k="/staging/assets/docker-macos-download._3lNdmVw.png",g="/staging/assets/docker-macos-downloads-dmg.NCV-L5x9.png",u="/staging/assets/docker-macos-install.Kem4IbOa.png",m="/staging/assets/docker-macos-launchpad.gkbnpM74.png",F="/staging/assets/docker-macos-open.CjxJoAA1.png",y="/staging/assets/docker-macos-recommended-settings.gxoef0cX.png",C="/staging/assets/docker-macos-hello-world.cgweMjPa.png",v="/staging/assets/docker-windows-allow-sharing.tQmNr73l.png",I=JSON.parse('{"title":"Tutorial - Install Docker and get started with Developer Tools Docker image","description":"","frontmatter":{"title":"Tutorial - Install Docker and get started with Developer Tools Docker image","order":-9999,"outline":[0,4]},"headers":[],"relativePath":"tutorials/docker/getting-started.md","filePath":"tutorials/docker/getting-started.md","lastUpdated":null}'),b={name:"tutorials/docker/getting-started.md"},w=n('<h1 id="tutorial-install-docker-and-get-started-with-developer-tools-docker-image" tabindex="-1">Tutorial - Install Docker and get started with Developer Tools Docker image <a class="header-anchor" href="#tutorial-install-docker-and-get-started-with-developer-tools-docker-image" aria-label="Permalink to &quot;Tutorial - Install Docker and get started with Developer Tools Docker image&quot;">​</a></h1><p>This tutorial will cover the simplest process of installing Docker and obtaining Developer Tools Docker image.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>No prerequisites</li></ul><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to help you install Docker on your machine and get started with the Developer Tools Docker image provided by Ultra: obtaining and starting it; checking its contents.</p><h2 id="install-docker-on-your-current-operating-system" tabindex="-1">Install Docker on your current operating system <a class="header-anchor" href="#install-docker-on-your-current-operating-system" aria-label="Permalink to &quot;Install Docker on your current operating system&quot;">​</a></h2><p>The first step is to get Docker installed on your machine. Please follow <em>one</em> of the provided installation instructions below, appropriate to your operating system:</p><details class="details custom-block"><summary>Windows</summary><p><strong>Install Docker on Windows</strong></p><ol><li>Navigate to the <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">official Docker Desktop download page</a> and click on the <code>Download for Windows</code> button.</li></ol><p><img src="'+l+'" alt=""></p><ol start="2"><li>Open the downloaded installer. You don&#39;t need to adjust any of the default settings, unless you want to. So can simply click on <code>Ok</code> and continue</li></ol><p><img src="'+r+'" alt=""></p><ol start="3"><li>After a successful installation and, possibly, a restart, you should be able to open the Docker application. When asked for agreement, you can review the agreement and click on <code>Accept</code></li></ol><p><img src="'+s+'" alt=""></p><ol start="4"><li>You don&#39;t need to create an account to use Docker, so can skip the sign in step</li></ol><p><img src="'+h+'" alt=""></p><ol start="5"><li>Welcome Survey is also optional, you can skip it</li></ol><p><img src="'+p+'" alt=""></p><ol start="6"><li>Finally, make sure the <code>Engine running</code> is visible in the bottom left of the window and there is no error shown after reaching this window</li></ol><p><img src="'+e+'" alt=""></p><p><strong>Validating Docker installation</strong></p><p>After installing and opening the Docker, open standard Windows Command Prompt. Enter the <code>docker run hello-world</code> command there and you should get the expected output:</p><p><img src="'+c+'" alt=""></p><p>You likely want to clean up the created container, you will have no use for it and it will just clog the container list. To delete it, simply click on the garbage can icon next to the <code>hello-world</code> container:</p><p><img src="'+i+`" alt=""></p></details><details class="details custom-block"><summary>Linux</summary><p><strong>Install Docker on Linux</strong></p><p>Here we provide you with a list of commands that should get Docker installed and running on Ubuntu Linux version and its variants (e.g. Mint). If the provided commands do not work for you, we strongly suggest following the <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">official Docker documentation</a>.</p><p>You can copy the whole code block section below and paste it into the terminal:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add Docker&#39;s official GPG key:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0755</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/keyrings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://download.docker.com/linux/ubuntu/gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/keyrings/docker.asc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a+r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/keyrings/docker.asc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add the repository to Apt sources:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;deb [arch=$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dpkg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --print-architecture</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/os-release &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$VERSION_CODENAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;) stable&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/docker.list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>After running the previous set of commands, you should be able to install the actual Docker binaries and some of their dependencies. Use the following command to install them:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-buildx-plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose-plugin</span></span></code></pre></div><p><strong>Validating Docker installation</strong></p><p>To make sure Docker was installed correctly, try running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello-world</span></span></code></pre></div><p>If Docker was installed correctly, you should see the following output. Otherwise, please refer to <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">official Docker documentation</a> for installation assistance.</p><p><img src="`+d+'" alt=""></p></details><details class="details custom-block"><summary>macOS</summary><p><strong>Install Docker on macOS</strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We don&#39;t officially support or provide assistance to Mac users at the moment, but the Docker image itself should function the same way regardless of the operating system and it should be possible to use it develop smart contracts and interact with the Ultra Blockchain on Mac.</p></div><ol><li>Navigate to the <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">official Docker Desktop download page</a> and click on the <code>Download for Mac</code> button.</li></ol><p><img src="'+k+'" alt=""></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Docker website may not properly detect the type of processor your Mac has, in case the version you&#39;ve downloaded does not work stating that the <code>You can&#39;t open the application &quot;Docker&quot; because this application is not supported on this Mac</code>, try hovering over the arrow next to the <code>Download for Mac</code> button and select the other option for Mac (e.g. Intel Chip).</p></div><ol start="2"><li>Open the downloaded <code>.dmg</code> package</li></ol><p><img src="'+g+'" alt=""></p><ol start="3"><li>Do the standard drag and drop procedure</li></ol><p><img src="'+u+'" alt=""></p><ol start="4"><li>Now you should be able to simply open the Docker application from the Launchpad</li></ol><p><img src="'+m+'" alt=""></p><ol start="5"><li>You will be likely asked if you want to open Docker. Simply agree to open it</li></ol><p><img src="'+F+'" alt=""></p><ol start="6"><li>After a successful installation you should be able to open the Docker application. When asked for agreement, you can review the agreement and click on <code>Accept</code></li></ol><p><img src="'+s+'" alt=""></p><ol start="7"><li>When asked for configuration settings, you can just leave the recommended ones</li></ol><p><img src="'+y+'" alt=""></p><ol start="8"><li>Finally, make sure the <code>Engine running</code> is visible in the bottom left of the window and there is no error shown after reaching this window</li></ol><p><img src="'+e+'" alt=""></p><p><strong>Validating Docker installation</strong></p><p>After installing and opening the Docker, open the standard Terminal window (search for <code>Terminal</code> in the Launchpad). Enter the <code>docker run hello-world</code> command there and you should get the expected output:</p><p><img src="'+C+'" alt=""></p><p>You likely want to clean up the created container, you will have no use for it and it will just clog the container list. To delete it, simply click on the garbage can icon next to the <code>hello-world</code> container:</p><p><img src="'+i+'" alt=""></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>After installing and opening the docker application, you should be able to follow the same usage instructions as for Linux.</p></div></details><h2 id="obtaining-the-docker-image" tabindex="-1">Obtaining the Docker image <a class="header-anchor" href="#obtaining-the-docker-image" aria-label="Permalink to &quot;Obtaining the Docker image&quot;">​</a></h2><p>After you have installed Docker on your machine, you should be able to pull the Docker image down from quay.io:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><p>You will also want to use this command to update the Docker image you have locally.</p><p>The Docker image we provide is located at <a href="https://quay.io/ultra.io/3rdparty-devtools" target="_blank" rel="noreferrer">our official quay.io repository</a>. If you are interested, you can check there to see if there is a new version of the image available, or use an older version if needed.</p><h2 id="running-the-developer-tools-docker-image" tabindex="-1">Running the Developer Tools Docker image <a class="header-anchor" href="#running-the-developer-tools-docker-image" aria-label="Permalink to &quot;Running the Developer Tools Docker image&quot;">​</a></h2><p>To start the Docker container with the cloned Developer Tools Docker image use <em>one</em> of the following commands appropriate for your operating system:</p><details class="details custom-block"><summary>Windows</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8888</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:8888</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9876</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9876</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %cd%/ultra_workdir:/opt/ultra_workdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><p>You will be asked if you are okay with sharing the working directory with the Docker container. Only the content of the directory specified will be shared, and not any other content of your drive.</p><p><img src="'+v+'" alt=""></p></details><details class="details custom-block"><summary>Linux / macOS</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8888</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:8888</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9876</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9876</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/ultra_workdir:/opt/ultra_workdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div></details><p>After you created the container you realistically won&#39;t need to create it again. Existing container will be accessible under the name of <code>ultra</code>.</p><div class="info custom-block"><p class="custom-block-title">Side note</p><p>If you encounter an error: <code>Error response from daemon: Conflict. The container name &quot;/ultra&quot; is already in use</code>, then it means you already have the container running and don&#39;t need to do anything.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The above command will utilize ports 8888 and 9876. If those ports are occupied the docker will fail to create the container. In case you encounter this issue, make sure you don&#39;t already have a container running with those ports in use. Otherwise, you can adjust the first number in port publishing (e.g. <code>8889:8888</code> instead of <code>8888:8888</code>) or remove the port publishing arguments completely (e.g. <code>-p 8888:8888 -p 9876:9876</code>).</p></div><p>To stop the container without destroying it you can use the following command. Stopping a container closes all running applications.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span></span></code></pre></div><h2 id="accessing-the-image" tabindex="-1">Accessing the image <a class="header-anchor" href="#accessing-the-image" aria-label="Permalink to &quot;Accessing the image&quot;">​</a></h2><p>After you created the container you will be able to attach to it using the following command. It will also start the container if it is currently stopped.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span></code></pre></div><h2 id="what-is-included-in-the-docker-image" tabindex="-1">What is included in the Docker image <a class="header-anchor" href="#what-is-included-in-the-docker-image" aria-label="Permalink to &quot;What is included in the Docker image&quot;">​</a></h2><ul><li><code>cleos</code> - Basic utility for interacting with the Blockchain: reading table data, pushing transactions, generating keys. More details are available <a href="./../../blockchain/general/tools/cleos.html">here</a></li><li><code>keosd</code> - Encrypted local-storage wallet. Used by <code>cleos</code> in case you sign or push transactions. More details are available <a href="./../../blockchain/general/tools/keosd.html">here</a></li><li><code>nodeos</code> - Application that runs a Blockchain node: either a local node with a new chain, or connecting to an existing chain. More details are available <a href="./../../blockchain/general/tools/nodeos.html">here</a></li><li><code>cdt-cpp</code> - Compiler for C++ EOS smart contracts. More details are available <a href="./../../blockchain/general/tools/cdt/">here</a></li><li><code>ultratest</code> - Testing utility for running JavaScript tests. More details are available <a href="./../../products/ultratest/">here</a></li><li>Licenses - You can review the license for Docker image usage and accompanying tools at <code>/opt/license</code> inside the Docker image.</li></ul><h2 id="checking-the-versions-of-the-provided-tools" tabindex="-1">Checking the versions of the provided tools <a class="header-anchor" href="#checking-the-versions-of-the-provided-tools" aria-label="Permalink to &quot;Checking the versions of the provided tools&quot;">​</a></h2><p>You can use the following commands to quickly find out the versions of various tools provided and to ensure they are present and can start without errors:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keosd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nodeos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cdt-cpp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ultratest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p>All commands provided will simply print their respective versions.</p><h2 id="accessing-docker-volume" tabindex="-1">Accessing Docker volume <a class="header-anchor" href="#accessing-docker-volume" aria-label="Permalink to &quot;Accessing Docker volume&quot;">​</a></h2><p>The docker container has a shared directory located somewhere in your operating system:</p><ul><li><p>Windows: <code>C:\\Users\\&lt;Username&gt;\\ultra_workdir</code></p></li><li><p>Linux / macOS : <code>~/ultra_workdir</code></p></li></ul><p>This directory will be linked to <code>/opt/ultra_workdir</code> inside the Docker container.</p><p>You can make sure it is working correctly by running the following command in the terminal that is attached to the Docker container:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/ultra_workdir/hello_world.txt</span></span></code></pre></div><p>After running the command, you should see the <code>hello_world.txt</code> in the directory appropriate for your operating system in the list above.</p><h2 id="deleting-a-docker-container" tabindex="-1">Deleting a Docker container <a class="header-anchor" href="#deleting-a-docker-container" aria-label="Permalink to &quot;Deleting a Docker container&quot;">​</a></h2><p>If you want to update the version of the docker image used, or simply no longer need this Docker container, you can always delete it:</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This command deletes all the content of the Docker container. Only the files in <code>ultra_workdir</code> will be preserved</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /ultra</span></span></code></pre></div><p>You can also use the Docker Desktop application to do so.</p><h2 id="what-s-next" tabindex="-1">What&#39;s Next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next?&quot;">​</a></h2><p>The next tutorial will cover creating and compiling smart contracts using Developer Tools Docker image. You will learn how to set up your development environment, create a simple smart contract, compile it, and deploy it to the Ultra Blockchain. This step-by-step guide will provide you with the essential knowledge and tools needed to effectively develop and manage smart contracts within a Dockerized Ultra Blockchain environment. Refer to the <a href="./how-to-compile-smart-contract.html">Tutorial - Creating and Compiling Smart Contracts with Docker</a> for detailed instructions.</p>',52),f=[w];function B(D,E,_,q,x,T){return o(),t("div",null,f)}const N=a(b,[["render",B]]);export{I as __pageData,N as default};
