import{_ as i,c as r,C as e,I as a,E as s,a as o,V as p,J as c,o as d}from"./chunks/framework.965d1348.js";const h="/images/vscode-eosio-token-contract-build.png",J=JSON.parse('{"title":"Building Smart Contracts","description":"","frontmatter":{"title":"Building Smart Contracts","deploy":["staging","mainnet"],"order":-9990,"outline":[0,4],"prev":false},"headers":[],"relativePath":"guides/Docker/building-smart-contracts.md","lastUpdated":null}'),u={name:"guides/Docker/building-smart-contracts.md"},m=p("",16),y={id:"eosio-cppeosio-cppcdt-cpp-binary",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#eosio-cppeosio-cppcdt-cpp-binary","aria-label":'Permalink to "<Mainnet>eosio-cpp</Mainnet><Staging>eosio-cpp</Staging><Experimental>cdt-cpp</Experimental> binary"'},"​",-1),_=e("p",null,"There is a single binary which is included with our docker image.",-1),g=e("h3",{id:"what-is-it",tabindex:"-1"},[o("What is it? "),e("a",{class:"header-anchor",href:"#what-is-it","aria-label":'Permalink to "What is it?"'},"​")],-1),F=e("ul",null,[e("li",null,"A clang-based WASM compiler and ABI generator tool"),e("li",null,"Must be ran anywhere inside of the docker image")],-1),D=e("h3",{id:"usage",tabindex:"-1"},[o("Usage "),e("a",{class:"header-anchor",href:"#usage","aria-label":'Permalink to "Usage"'},"​")],-1),f=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"eosio-cpp -help")])])])],-1),b=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"eosio-cpp -help")])])])],-1),A=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"cdt-cpp -help")])])])],-1),k=e("h2",{id:"compiling-a-smart-contract",tabindex:"-1"},[o("Compiling a Smart Contract "),e("a",{class:"header-anchor",href:"#compiling-a-smart-contract","aria-label":'Permalink to "Compiling a Smart Contract"'},"​")],-1),w=e("code",null,"hello.cpp",-1),v=e("code",null,"eosio-cpp",-1),x=e("code",null,"eosio-cpp",-1),S=e("code",null,"cdt-cpp",-1),B=e("p",null,[o("Run the following command "),e("strong",null,"inside the docker image"),o(".")],-1),E=e("div",{class:"language-cpp"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"cpp"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"eosio"),e("span",{style:{color:"#89DDFF"}},"-"),e("span",{style:{color:"#A6ACCD"}},"cpp hello"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"cpp")])])])],-1),T=e("div",{class:"language-cpp"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"cpp"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"eosio"),e("span",{style:{color:"#89DDFF"}},"-"),e("span",{style:{color:"#A6ACCD"}},"cpp hello"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"cpp")])])])],-1),q=e("div",{class:"language-cpp"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"cpp"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"cdt"),e("span",{style:{color:"#89DDFF"}},"-"),e("span",{style:{color:"#A6ACCD"}},"cpp hello"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"cpp")])])])],-1),P=p("",5),R=e("code",null,"eosio-cpp",-1),U=e("code",null,"eosio-cpp",-1),M=e("code",null,"cdt-cpp",-1),I=p("",34);function N(W,V,$,L,O,K){const l=c("Mainnet"),n=c("Staging"),t=c("Experimental");return d(),r("div",null,[m,e("h2",y,[a(l,null,{default:s(()=>[o("eosio-cpp")]),_:1}),a(n,null,{default:s(()=>[o("eosio-cpp")]),_:1}),a(t,null,{default:s(()=>[o("cdt-cpp")]),_:1}),o(" binary "),C]),_,g,F,D,a(l,null,{default:s(()=>[f]),_:1}),a(n,null,{default:s(()=>[b]),_:1}),a(t,null,{default:s(()=>[A]),_:1}),k,e("p",null,[o("Using the above "),w,o(" file we can utilize "),a(l,null,{default:s(()=>[v]),_:1}),a(n,null,{default:s(()=>[x]),_:1}),a(t,null,{default:s(()=>[S]),_:1}),o(" to compile it.")]),B,a(l,null,{default:s(()=>[E]),_:1}),a(n,null,{default:s(()=>[T]),_:1}),a(t,null,{default:s(()=>[q]),_:1}),P,e("p",null,[o("When building smart contracts, developers may have more than one file. While "),a(l,null,{default:s(()=>[R]),_:1}),a(n,null,{default:s(()=>[U]),_:1}),a(t,null,{default:s(()=>[M]),_:1}),o(" provides the basics, it is recommended to use CMake for anything more complex than single file.")]),I])}const z=i(u,[["render",N]]);export{J as __pageData,z as default};
