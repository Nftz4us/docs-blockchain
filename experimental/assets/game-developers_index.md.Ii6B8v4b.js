import{_ as e,c as t,o as a,N as i}from"./chunks/framework.HE4KbJuF.js";const g=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","outline":[0,5],"order":0,"prev":false,"layout":"doc"},"headers":[],"relativePath":"game-developers/index.md","filePath":"game-developers/index.md","lastUpdated":null}'),o={name:"game-developers/index.md"},r=i('<h1 id="getting-started-with-integrating-ultra" tabindex="-1">Getting Started with Integrating Ultra <a class="header-anchor" href="#getting-started-with-integrating-ultra" aria-label="Permalink to &quot;Getting Started with Integrating Ultra&quot;">​</a></h1><p>First, we must define what type of app you have and what tech stack you are using. With this information, we can help guide you as to what type of integration you&#39;ll need to successfully integrate into Ultra&#39;s ecosystem.</p><h2 id="are-you-web-based" tabindex="-1">Are you web-based? <a class="header-anchor" href="#are-you-web-based" aria-label="Permalink to &quot;Are you web-based?&quot;">​</a></h2><p>If your app is web-based, next you will need to decide whether or not you need verified user identification. This boils down to whether you need to know if the user who has connected to your app is who he says he is, or whether him being able to sign a transaction is enough.</p><p>For any app that is not embedded in the Ultra client directly, it is sufficient to simply allow users to sign transactions. A good example of an app that requires user verification is Ultra Arena, which is deeply integrated into Ultra&#39;s ecosystem.</p><ul><li>If your app is deeply integrated into Ultra&#39;s ecosystem, you must follow our <a href="./web/">Ultra SSO integration guide</a>.</li><li>If your app is a web-based app that a user will connect to via their browser, you should follow our <a href="./../products/ultra-wallet/">Wallet Extension guide</a>.</li></ul><h2 id="are-you-building-with-unity" tabindex="-1">Are you building with Unity? <a class="header-anchor" href="#are-you-building-with-unity" aria-label="Permalink to &quot;Are you building with Unity?&quot;">​</a></h2><p>If you&#39;re building with Unity, we have a set of helpful examples and a plugin which will help you get started. You should check our <a href="./unity/">Ultra Unity integration guide</a> which houses the details for where to get the Unity plugin, and how to use it.</p><h2 id="are-you-building-with-unreal" tabindex="-1">Are you building with Unreal? <a class="header-anchor" href="#are-you-building-with-unreal" aria-label="Permalink to &quot;Are you building with Unreal?&quot;">​</a></h2><p>If you&#39;re building with Unreal, we have a set of helpful examples and a plugin which will help you get started. You should check our <a href="./unreal/">Ultra Unreal Subsystem integration guide</a> which houses the details for where to get the Unreal Subsystem, and how to use it.</p><p>Many developers use Epic&#39;s Online Service for multiplayer so that they can unify their player base across all deployments. We have put <a href="./web/">together a document</a> that specifies exactly how to do that so that your game can connect Ultra&#39;s users to those of other platforms.</p><p>We currently do not have a subsystem that you can use to connect to the Ultra client.</p>',12),n=[r];function s(l,h,u,d,c,p){return a(),t("div",null,n)}const w=e(o,[["render",s]]);export{g as __pageData,w as default};
