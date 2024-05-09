import{_ as e,c as t,o as a,N as i}from"./chunks/framework.UwpMnNk-.js";const p=JSON.parse('{"title":"Game Builds","description":"","frontmatter":{"title":"Game Builds","order":6},"headers":[],"relativePath":"game-developers/game-dev-center/6. game-builds.md","filePath":"game-developers/game-dev-center/6. game-builds.md","lastUpdated":null}'),o={name:"game-developers/game-dev-center/6. game-builds.md"},s=i('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>Game builds can be a combination of one or more repositories containing files. In other words, the process to manage the files your users will need is: Create repositories =&gt; Upload files to repositories =&gt; Assemble a build using the repositories</p><p>Ultra lets you create different types of file repositories in which you’ll upload different parts of your game files:</p><ul><li><strong>Core game files:</strong> Contains the game executable and most of the game files.</li><li><strong>Game DLC:</strong> additional content you want to distribute separately such as new maps, skins, music, etc.</li><li><strong>Core demo game files:</strong> Contains all the files necessary to download and play a demo of your game.</li><li><strong>Game language packs:</strong> files related to a specific language such as sounds, movies and textures you believe is unnecessary to send to users who don’t talk the language <strong>(Coming soon).</strong></li><li><strong>Game dedicated server:</strong> Files necessary to run a dedicated server of your game. This allows anyone, even if they don’t own the game, to download and run a dedicated server <strong>(Coming soon).</strong></li></ul><h2 id="assembling-a-game-build" tabindex="-1">Assembling a Game Build <a class="header-anchor" href="#assembling-a-game-build" aria-label="Permalink to &quot;Assembling a Game Build&quot;">​</a></h2><p>In order to assemble any kind of build, you will first need to have created a repository of the corresponding type, and uploaded files to it.</p><p>Before we can assemble a game build version, we first need to create a game build.</p><ol><li>Click on Create new game build</li><li>Select the OS you want your game built on (<strong>Linux and MacOS support planned</strong>)</li><li>Set the Internal Game build name.</li><li>Select a repository and one of its versions.</li></ol><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/41ff1220-eb33-4836-9d03-777f2685134d" alt="image"></p><ol start="7"><li>Specify the executable file to run the game, whether it’s for 32 bits, 64 bits, or both.</li></ol><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/27ec3e43-ad69-4295-81ec-0cb22874c2e5" alt="image"></p><ol start="10"><li>If there are additional sets of files, such as DLCs, you can select which of them should be compatible with the build you&#39;re assemnbling.</li><li>Create the game build.</li></ol><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/17e5de82-fdb5-4c50-93a0-ec74666fc4e1" alt="image"></p><p>Now you should be done with assembling the game build, you can determine whether this build version is a <strong>Master</strong> branch (intended for public release) or <strong>Beta</strong> branch (as mentioned before, this is still not available).</p><p>Congratulations! Your build is now created and ready to be delivered to users.</p><h3 id="important-things-to-know" tabindex="-1">Important things to know <a class="header-anchor" href="#important-things-to-know" aria-label="Permalink to &quot;Important things to know&quot;">​</a></h3><ul><li><p>Whenever you run Filebeam and upload files, the repositories receiving files will have their repository version number incremented. At the same time, whenever you assemble a new version of your game build, its version number will increase. <strong>These increments are not linked</strong>, as illustrated in the following image <img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/68b10868-c627-41c2-923c-fc730196c647" alt="image"></p></li><li><p>On the topic of branches, below is an example of how they might be used. On the left, the build V1 is promoted as master branch of My Game Standard Edition, on the right the build V2 is promoted to the master branch. <strong>Beta branches coming Soon</strong><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/65dc8046-910f-4be6-bd87-f8af2411644c" alt="image"></p></li><li><p>Following the example above, as soon as build V2 is promoted as the master branch, all users who had V1 installed will see an update button on their library and will not be able to launch it until it&#39;s updated. In addition, anyone who installs the game will directly get V2 files from here on.</p></li><li><p>Including a DLC repository in a build doesn’t mean the buyer of the game will receive this DLC. It only means the files contained in the DLC repository version you associated with this build are compatible with it. The buyer will still have to separately buy the DLC to get it, and when they buy it, Ultra’s file distribution system will know what DLC repository version to download for this particular game build version.</p></li><li><p>In the future you’ll be able to “bundle” DLCs tokens with Game tokens, allowing you to sell your game containing DLCs. In the meantime, if you want gamers to get DLCs as part of the game they buy, upload DLC files in your core game files repository.</p></li><li><p>When you include a Language pack version in a build, the buyer of this build will have the ability to download it if they wish. If you want to separately sell a language pack you need to upload the language pack in a DLC repository and sell it as a DLC.</p></li></ul><hr>',18),l=[s];function n(r,d,h,u,c,m){return a(),t("div",null,l)}const b=e(o,[["render",n]]);export{p as __pageData,b as default};
