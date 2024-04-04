import{_ as e,c as a,o as t,N as i}from"./chunks/framework.DlKUEHLQ.js";const g=JSON.parse('{"title":"Filebeam","description":"","frontmatter":{"title":"Filebeam","order":5},"headers":[],"relativePath":"game-developers/game-dev-center/5. file-beam.md","filePath":"game-developers/game-dev-center/5. file-beam.md","lastUpdated":null}'),s={name:"game-developers/game-dev-center/5. file-beam.md"},o=i(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>FileBeam is a Python application that lets you upload your games files in appropriate repositories.</p><p>New repository versions are only created when one or more new files you uploaded in them have changed. In other words if your language pack or if your DLC files haven’t changed, no new repository versions will be created.</p><h2 id="quick-setup" tabindex="-1">Quick setup <a class="header-anchor" href="#quick-setup" aria-label="Permalink to &quot;Quick setup&quot;">​</a></h2><h3 id="setting-up-the-ssn-upload" tabindex="-1">Setting up the SSN upload <a class="header-anchor" href="#setting-up-the-ssn-upload" aria-label="Permalink to &quot;Setting up the SSN upload&quot;">​</a></h3><ol><li>Copy the repository ID that you want to use by clicking on the copy icon.</li><li>Create a .json (name isn’t relevant) file with the following structure:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;repositoryName&quot;: &quot;WINCOREGf7c6c76f-d9c7-4056-8563-xxxxxxxxxxxxx&quot;,</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;C:/UltraGames/YourGame/&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><ol start="3"><li>Replace the repositoryName with the repository ID you copied earlier and the source path with the path to the folder containing the content you wish to upload.</li></ol><p>Pro tips:</p><blockquote><p>Pay attention to these details, otherwise, the upload will fail.</p><ul><li>Make sure to have an executable file.</li><li>Use only forward slashes in the file path.</li><li>Include a slash at the end of the file path, before the quotation marks.</li><li>Include a comma at the end of each line if the next line also has text.</li><li>If you’re uploading to several repositories at once, include a comma after the closing curly bracket of each repository, except after the last repository.</li></ul></blockquote><h3 id="running-filebeam" tabindex="-1">Running filebeam <a class="header-anchor" href="#running-filebeam" aria-label="Permalink to &quot;Running filebeam&quot;">​</a></h3><p>To do this, you need to use an account that is either the company owner or has Admin permissions within the company. Other accounts will see an error message when trying to execute the filebeam script.</p><ol><li>On the CMD tool of your choice, run this command to go to the folder containing the upload script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd %localappdata%\\Ultra_{env}\\sdk-direct6\\DIRECT6\\deploy\\</span></span></code></pre></div><ol start="2"><li>Then run this command to start the upload:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>..\\..\\setup\\python38\\python.exe filebeam.py --email=your_account@email.com --repositories_config=C:\\Ultra_Games\\Repo\\repo_config.json</span></span></code></pre></div><ol start="3"><li>Enter your password, which won&#39;t be visible. <img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/a42efda0-3584-440a-ad05-ac560d9b3ab3" alt="image"><ul><li>If your game&#39;s executables haven&#39;t been signed and protected with Ultra&#39;s DRM, you will be prompted to define if the repository should be flagged as protected or unprotected. <ul><li>If your game is F2P and doesn&#39;t require any DRM protection, you can mark it as unprotected.</li><li>If your game is paid and it hasn&#39;t been signed, please contact <a href="mailto:developers@ultra.io" target="_blank" rel="noreferrer">developers@ultra.io</a> for assistance.</li></ul></li></ul></li><li>Wait for the upload to complete, then refresh the page in the GDC. A new version of the repository should be added, and you can verify that IDs are identical. <img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/8af2be15-bd14-4350-a2c4-8a77ad59a39c" alt="image"><img src="https://github.com/Tomas-Cucit/docs-blockchain/assets/140004349/51fce4ad-abdd-4f5e-8bf8-352c11a718d5" alt="asdasd"></li></ol><p>Congratulations, your first file has been uploaded on Ultra!</p><h2 id="detailed-configuration" tabindex="-1">Detailed configuration <a class="header-anchor" href="#detailed-configuration" aria-label="Permalink to &quot;Detailed configuration&quot;">​</a></h2><h3 id="creating-the-repositories-config-json-file" tabindex="-1">Creating the repositories_config.json file <a class="header-anchor" href="#creating-the-repositories-config-json-file" aria-label="Permalink to &quot;Creating the repositories_config.json file&quot;">​</a></h3><p>The repositories_config.json (name can be changed) file is used to list all the repositories to deploy with their sources and their filters.</p><ul><li>repositoryName: the repository name to deploy. This field is <strong>required</strong></li><li>source: the path to the content of the repository to deploy. This field is <strong>required</strong></li><li>exclude: folders and files to exclude during deployment. This field is <strong>optional</strong></li><li>include: folders and files to include during deployment. This field is <strong>optional</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;repositoryName&quot;: &quot;WINCOREGbc2d6283-f9f5-4be8-840a-7ea46c156760&quot;,</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;C:/tools/DIRECT6/samples/source/&quot;,</span></span>
<span class="line"><span>        &quot;exclude&quot;: &quot;subfolder/*;!subfolder/test.txt&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;repositoryName&quot;: &quot;WINDLC2d6ca298-dd0d-48f9-bfc7-6ee54c6d6003&quot;,</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;C:/tools/DIRECT6/samples/source_dcl1/&quot;,</span></span>
<span class="line"><span>        &quot;include&quot;: &quot;subfolder*;!*.txt&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;repositoryName&quot;: &quot;WINDLC61949bbf-b7a6-4a99-a4aa-a3cf81b96aa0&quot;,</span></span>
<span class="line"><span>        &quot;source&quot;: &quot;C:/tools/DIRECT6/samples/source_dcl2/&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="configuring-exclude-and-include-filters" tabindex="-1">Configuring Exclude and Include Filters <a class="header-anchor" href="#configuring-exclude-and-include-filters" aria-label="Permalink to &quot;Configuring Exclude and Include Filters&quot;">​</a></h3><p>This functionality allows you to deploy a specified set of files and folders from a source directory containing a larger set of files or, on the contrary, exclude a set of files.</p><p>Arguments and Information:</p><ul><li>Wildcard character: *</li><li>Wildcard negation character: !</li><li>Files and folders are separated by a semicolon: ;</li><li>Path to files and folders are relative to the specified source path</li><li>In case of a conflict, files in the exclude filter will override those in the in include filter</li></ul><p>The script filebeam.py relies on the Solid State Networks Direct 6 SDK to deploy on the Ultra platform. This SDK does NOT scan through your entire source paths in search of all the files that you have included or excluded in your filter list, therefore they will not display an error when files or folders are missing. The missing files or folders will be ignored so deployment continues uninterrupted by incorrect filters.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p><strong>Exclude Folder Sample</strong></p><p>This filter will exclude the languages directory, but include every other file and folder</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>exclude=languages/*</span></span></code></pre></div><h4 id="exclude-all-files-in-folder-except-for-one-specified-file" tabindex="-1">Exclude All Files in Folder Except for One Specified File <a class="header-anchor" href="#exclude-all-files-in-folder-except-for-one-specified-file" aria-label="Permalink to &quot;Exclude All Files in Folder Except for One Specified File&quot;">​</a></h4><p>This filter will exclude all files in the languages directory except for en-us.json.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>exclude=languages/*;!languages/en-us.json</span></span></code></pre></div><h4 id="include-only-files-with-a-specific-extension" tabindex="-1">Include only files with a specific extension <a class="header-anchor" href="#include-only-files-with-a-specific-extension" aria-label="Permalink to &quot;Include only files with a specific extension&quot;">​</a></h4><p>This filter will include ONLY files that end with the .jpg extension, regardless of which folder they are found in Include Specified Folders and a Specifed Filename Format</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>include=*.jpg</span></span></code></pre></div><h4 id="include-specified-folders-and-a-specifed-filename-format" tabindex="-1">Include Specified Folders and a Specifed Filename Format <a class="header-anchor" href="#include-specified-folders-and-a-specifed-filename-format" aria-label="Permalink to &quot;Include Specified Folders and a Specifed Filename Format&quot;">​</a></h4><p>This filter will include ONLY the named folders, and files whose name begin with &quot;file&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>include=&quot;dedicated server/*;dlc/*;file*&quot;</span></span></code></pre></div><h4 id="include-specified-folder-but-exclude-a-specified-subdirectory-of-that-folder" tabindex="-1">Include Specified Folder but Exclude a Specified Subdirectory of that Folder <a class="header-anchor" href="#include-specified-folder-but-exclude-a-specified-subdirectory-of-that-folder" aria-label="Permalink to &quot;Include Specified Folder but Exclude a Specified Subdirectory of that Folder&quot;">​</a></h4><p>This filter will include the named folder, its files and subdirectories except for the the &quot;gotham&quot; subdirectory</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>include=dlc/* --exclude=dlc/gotham/*</span></span></code></pre></div><p>Another method for accomplishing the same filter using wildcard negation:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>include=dlc/*;!dlc/gotham/*</span></span></code></pre></div><h3 id="checking-filter-output" tabindex="-1">Checking Filter Output <a class="header-anchor" href="#checking-filter-output" aria-label="Permalink to &quot;Checking Filter Output&quot;">​</a></h3><p>To check the contents of the files in your release and whether your filters worked the way you expected them to, open the metafile associated with your release. A copy of the last metafile created is stored under %HOMEPATH%\\AppData\\Local\\Ultra\\sdkdirect6\\metafiles\\repositoryName. In this example the repositoryName=llama-game o we will get the meatfile.json under %HOMEPATH%\\AppData\\Local\\Ultra\\sdk-direct6\\metafiles\\llama-game</p><h3 id="executing-filebeam" tabindex="-1">Executing Filebeam <a class="header-anchor" href="#executing-filebeam" aria-label="Permalink to &quot;Executing Filebeam&quot;">​</a></h3><table><thead><tr><th>Parameter</th><th>Type/Usage</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td>email</td><td>string</td><td style="text-align:center;">email of the ultra user</td></tr><tr><td>repositories_config</td><td>path</td><td style="text-align:center;">Path to the repositories configuration file</td></tr><tr><td>--cicd</td><td>boolean</td><td style="text-align:center;">If added, automatically set to true. The script will get the password of the ultra user directly in the file ultra_auth.json. Convenient for CICD pipeline. Cannot be used if your otp device is active</td></tr><tr><td>--drm</td><td>boolean</td><td style="text-align:center;">If added, automatically set to true. Then the script will get the password of the ultra user directly in the file ultra_auth.json. Convenient for CICD pipeline. Cannot be used if your otp device is active</td></tr></tbody></table>`,50),l=[o];function n(r,d,c,p,u,h){return t(),a("div",null,l)}const m=e(s,[["render",n]]);export{g as __pageData,m as default};
