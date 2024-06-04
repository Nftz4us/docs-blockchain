import{_ as e,c as i,o,N as t}from"./chunks/framework.JweEx2cs.js";const f=JSON.parse('{"title":"File Repositories","description":"","frontmatter":{"title":"File Repositories","order":5},"headers":[],"relativePath":"game-developers/game-dev-center/4. file-repositories.md","filePath":"game-developers/game-dev-center/4. file-repositories.md","lastUpdated":null}'),a={name:"game-developers/game-dev-center/4. file-repositories.md"},s=t('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>Files repositories will contain your game files for any product you wish to ship to users. You can create different types of file repositories in which you can upload different types of files from your game. such as Core game files, DLC files, Language pack files, etc. Every time a file repository is created, a unique Repository ID is automatically assigned to it. Repository IDs are used for filebeam to identify where to send the files you&#39;re uploading.</p><p>Every time you create a repository, Ultra will automatically assign it a repository ID, which looks like this: WINCOREG91a7f553-5dd7-4078-813d-b5064629d527. In addition, whenever you upload files to a repository, Ultra will create a new version of that repository while keeping the old one.</p><p>Ultra’s versioned repositories are what will enable you to:</p><ol><li>Easily apply updates to your customer&#39;s files.</li><li>Roll back to a previous version if there are issues with your latest build</li><li>Operate multiple builds simultaneously through branching. For example, operate a Beta branch and a Master Branch of the same product simultaneously.</li></ol><h2 id="creating-files-repositories" tabindex="-1">Creating Files Repositories <a class="header-anchor" href="#creating-files-repositories" aria-label="Permalink to &quot;Creating Files Repositories&quot;">​</a></h2><ol><li>Go to the GDC and access your game,</li><li>In the left menu, go in File Management → File Repository section</li><li>Click on <strong>“CREATE NEW WINDOWS FILES REPOSITORY”</strong></li></ol><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/426f0c53-9c76-4fa2-9025-b79acf2c2b4e" alt="Untitled"></p><ol start="4"><li>After clicking on “CREATE NEW WINDOWS FILES REPOSITORY”, a window will show up, where a drop down menu will allow you to choose what type of repository you want to create: <img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/ad2adf2c-41dd-4ef8-a02f-21933490b7ac" alt="image"><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/e6529d5d-a3aa-4b2e-bebf-abc63365f123" alt="image"></li><li>Select <strong>Game: Game Core Game Files</strong></li><li>Fill in the field to give this repository an internal repository name.</li><li>Press <strong>Create Files Repository</strong></li><li>Repeat this but this time let’s make 1 DLC repositories and 2 language packs repositories. When you are done, it should look similar to this:</li></ol><p><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/6f381b09-63d0-4316-841a-a2260d69eaca" alt="image"></p><blockquote><p>A list of repositories of a game. Notice at this point there are 0 versions everywhere because we have not uploaded anything in them.</p></blockquote><h3 id="pro-tips" tabindex="-1">Pro Tips: <a class="header-anchor" href="#pro-tips" aria-label="Permalink to &quot;Pro Tips:&quot;">​</a></h3><p>Ultra’s distribution technology has been built to support cross platform publishing. Future updates will include MacOS and Linux support. In the meantime you can already use cross platform repositories. Cross platform repositories can be used to store platform-independent files such as mp3, PNGs, etc. They are convenient for Language packs or DLCs you’d upload only one time and are usable on all platforms. For the sake of simplicity, in this tutorial we will assume your game only works on windows and will only create windows repositories as a result.</p><p>You need at least one Core Game Files repository to assemble and publish a game build.</p><p>Internal repository names are for internal use only, they will never be visible to the public. We recommend you to choose distinct names to help you later remember what kind of files it contains. Examples:</p><ul><li>Standard files</li><li>Standard with mods</li><li>Censored files</li><li>Chinese version</li><li>Compiling server 2 output</li><li>Light build</li><li>Paris office</li><li>...</li></ul><p>We are now ready to upload your game files!</p>',17),r=[s];function l(n,p,c,d,u,h){return o(),i("div",null,r)}const y=e(a,[["render",l]]);export{f as __pageData,y as default};
