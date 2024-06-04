import{_ as e,c as a,o as i,N as t}from"./chunks/framework.JweEx2cs.js";const g=JSON.parse('{"title":"Docker Image Usage","description":"","frontmatter":{"title":"Docker Image Usage","order":-9997,"outline":[0,4]},"headers":[],"relativePath":"tutorials/docker/docker-image-usage.md","filePath":"tutorials/docker/docker-image-usage.md","lastUpdated":null}'),s={name:"tutorials/docker/docker-image-usage.md"},o=t('<h1 id="docker-image-usage" tabindex="-1">Docker Image Usage <a class="header-anchor" href="#docker-image-usage" aria-label="Permalink to &quot;Docker Image Usage&quot;">​</a></h1><p>Pull the docker image down from quay.io</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>We currently support Docker for a majority of our development needs as it allows most end-users to easily spin up our tools in almost any environment.</p><h3 id="running-the-image" tabindex="-1">Running the Image <a class="header-anchor" href="#running-the-image" aria-label="Permalink to &quot;Running the Image&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8888</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:8888</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9876</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9876</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/ultra/ultra_workdir:/opt/ultra_workdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ultra</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><ul><li>-d <ul><li>Run container in background and print container ID</li></ul></li><li>-i <ul><li>Keep STDIN open even if not attached</li></ul></li><li>-t <ul><li>Allocate a pseudo-TTY</li></ul></li><li>-p [ HostPort:ContainerPort ] <ul><li>A port range to expose for the Container</li><li>Port 8888 used as an HTTP port by <code>nodeos</code></li><li>Port 9876 is used as P2P connection port by <code>nodeos</code></li></ul></li><li>-v [ HostPath:GuestPath ] <ul><li>Attaches a directory from your host machine to the docker container</li></ul></li></ul><h3 id="getting-in-the-image" tabindex="-1">Getting in the Image <a class="header-anchor" href="#getting-in-the-image" aria-label="Permalink to &quot;Getting in the Image&quot;">​</a></h3><p>If the above container name is kept as <code>ultra</code> then the following can be used to access the Docker Container.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker start ultra &amp;&amp; docker attach ultra</span></span></code></pre></div><h3 id="persisting-container-between-runs" tabindex="-1">Persisting container between runs <a class="header-anchor" href="#persisting-container-between-runs" aria-label="Permalink to &quot;Persisting container between runs&quot;">​</a></h3><p>If you stick to commands specified under the <code>Docker</code> section of guides you should have your Docker container persist between runs. Commands such as <code>docker start</code> and <code>docker attach</code> will not destroy your existing container. Running the <code>docker run</code> command again with the same <code>ultra</code> container name will also not overwrite your container but instead will fail</p><p>Commands that may potentially remove your container (and erase the data inside it are): <code>docker rm</code>, <code>docker prune</code>. Please be sure to avoid them if you are concerned with your data being removed.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When container is removed all changes you&#39;ve done inside it will be erased. Because of that please ensure that your <code>ultra_workdir</code> is mounted to the container and move any files you want to keep to this <code>ultra_workdir</code>.</p></div><h2 id="available-binaries" tabindex="-1">Available Binaries <a class="header-anchor" href="#available-binaries" aria-label="Permalink to &quot;Available Binaries&quot;">​</a></h2><p>Binaries available inside of the Docker Image</p><ul><li>cleos</li><li>nodeos</li><li>keosd</li><li>ultratest</li></ul><p><em>All &quot;eosio&quot; based binaries can be found in <code>/usr/opt/eosio/&lt;SOME_VERSION&gt;/bin</code></em></p>',19),n=[o];function r(l,d,c,h,p,u){return i(),a("div",null,n)}const m=e(s,[["render",r]]);export{g as __pageData,m as default};
