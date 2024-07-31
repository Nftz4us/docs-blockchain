import{_ as e,c as t,o,N as a,aJ as n,aK as r,aL as i,aM as c}from"./chunks/framework.eKw9w8LU.js";const g=JSON.parse('{"title":"Development Environment Setup","description":"","frontmatter":{"title":"Development Environment Setup","order":-9997,"outline":[0,4]},"headers":[],"relativePath":"tutorials/docker/development-environment.md","filePath":"tutorials/docker/development-environment.md","lastUpdated":null}'),d={name:"tutorials/docker/development-environment.md"},l=a('<h1 id="development-environment-setup" tabindex="-1">Development Environment Setup <a class="header-anchor" href="#development-environment-setup" aria-label="Permalink to &quot;Development Environment Setup&quot;">​</a></h1><p>Most convinent way to interact with a docker container and manage the files inside it is by using VS Code</p><h2 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h2><p>For the local environment you just open <code>~/ultra_workdir</code> if you&#39;re on Linux or <code>C:\\Users\\Username\\ultra_workdir</code> on Windows using VS Code. You can write all the tests and smart contract code locally. Then if you want to build and test use one of the following pathways:</p><ul><li><a href="./../../products/smart-contract-toolkit/">VS Code extension</a></li><li><a href="./docker-contract-development-flow.html">Run build commands in docker</a></li></ul><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><p>Start a docker container using this <a href="./docker-image-usage.html#running-the-image">command</a>. It&#39;ll start a container called <code>ultra</code> which you can connect to using VS Code. By default your <code>ultra-workdir</code> is mounted to the <code>/opt/ultra_workdir</code> directory inside the container so any changes in that directory will persist on your filesystem. Go to the <code>Remote-Explorer</code> and attach to the <code>ultra</code> container.</p><p><img src="'+n+'" alt=""></p><p>Once connected to the container open the terminal</p><p><img src="'+r+'" alt=""></p><p>and open the <code>/opt/ultra_workdir</code> directory inside the container</p><p><img src="'+i+'" alt=""></p><h2 id="vps" tabindex="-1">VPS <a class="header-anchor" href="#vps" aria-label="Permalink to &quot;VPS&quot;">​</a></h2><p>To connect to your virtual machine using ssh go to <code>Remote-Explorer</code> and then select <code>SSH Targets</code>. Make sure the targets are available in your <code>~/.ssh/config</code>.</p><p><img src="'+c+'" alt=""></p>',15),s=[l];function p(m,u,h,_,v,k){return o(),t("div",null,s)}const y=e(d,[["render",p]]);export{g as __pageData,y as default};
