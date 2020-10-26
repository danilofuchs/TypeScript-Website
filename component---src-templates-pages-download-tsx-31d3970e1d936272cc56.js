(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5psB":function(e){e.exports=JSON.parse('{"_generated by":"node packages/typescriptlang-org/scripts/getTypeScriptNPMVersions.js","tags":{"stableMajMin":"4.0","stable":"4.0.3","betaMajMin":"4.1","beta":"4.1.0-beta","rc":"4.0.1-rc","rcMajMin":"4.0"},"isRC":false,"isBeta":true,"releaseNotesURL":"/docs/handbook/release-notes/typescript-4-0.html","betaPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/","rcPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-0-rc/","vs":{"stable":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-403","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-403"},"beta":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-41beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-41beta"},"rc":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-403","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-403"}}}')},W8za:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ERkP"),l=n("yVh0"),r=n("I56Z"),o=n("vAyy"),i=n("5psB"),c=n("Wbzz"),s=function(e){var t=Object(l.a)(),n=(Object(r.a)(t),Object(c.withPrefix)(i.releaseNotesURL)),s=void 0;i.isBeta&&(s=i.betaPostURL),i.isRC&&(s=i.rcPostURL);var p=Object(o.a)(e.lang,e.allSitePage);return a.createElement("div",{className:"main-content-block"},a.createElement("h2",{style:{textAlign:"center"}},e.title),a.createElement("div",{className:"columns"},a.createElement("div",{className:"item raised"},a.createElement("h4",null,"Get Started"),a.createElement("ul",null,a.createElement("li",null,a.createElement(p,{to:"/docs/bootstrap"},"Bootstrap a TS project")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes.html"},"JS to TS")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/typescript-from-scratch.html"},"New to Programming")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes-oop.html"},"OOP to JS")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/typescript-in-5-minutes-func.html"},"Functional to JS")),a.createElement("li",null,a.createElement(p,{to:"/download"},"Installation")))),a.createElement("div",{className:"item raised"},a.createElement("h4",null,"Handbook"),a.createElement("ul",null,a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/basic-types.html"},"Basic Types")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/advanced-types.html"},"Advanced Types")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/interfaces.html"},"Interfaces")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/variable-declarations.html"},"Variable Declarations")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/functions.html"},"Functions")))),a.createElement("div",{className:"item raised"},a.createElement("h4",null,"Tools"),a.createElement("ul",null,a.createElement("li",null,a.createElement(p,{to:"/play/"},"Playground")),a.createElement("li",null,a.createElement(p,{to:"/tsconfig/"},"TSConfig Reference"))),a.createElement("h4",{style:{marginTop:"28px"}},"Release Notes"),a.createElement("ul",null,s?a.createElement("li",null,a.createElement("a",{href:s},"What's upcoming in ",i.tags.betaMajMin,"?")):null,a.createElement("li",null,a.createElement(p,{to:n},"What's new in ",i.tags.stableMajMin)))),a.createElement("div",{className:"item raised"},a.createElement("h4",null,"Tutorials"),a.createElement("ul",null,a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/asp-net-core.html"},"ASP.NET")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/migrating-from-javascript.html"},"Migrating from JS")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/dom-manipulation.html"},"Working with the DOM")),a.createElement("li",null,a.createElement(p,{to:"/docs/handbook/react-&-webpack.html"},"React & Webpack"))))))}},h2Md:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return u}));var a=n("ERkP"),l=n("9Dj+"),r=n("GO2c"),o=n("5psB"),i=n("vAyy"),c=n("W8za"),s=function(e){return document.getElementById("code-example").textContent=e},p=function(e){return document.getElementById("code-run").textContent=e},m=function(e){var t=Object(i.a)(e.pageContext.lang,e.data.allSitePage);return a.createElement(l.a,{title:"How to set up TypeScript",description:"Add TypeScript to your project, or install TypeScript globally",lang:e.pageContext.lang,allSitePage:e.data.allSitePage},a.createElement("div",{className:"raised main-content-block"},a.createElement("h1",null,"Download TypeScript"),a.createElement("p",null,"TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension."),a.createElement("p",null,"If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.")),a.createElement("div",{className:"raised main-content-block"},a.createElement("h2",null,"TypeScript in Your Project"),a.createElement("p",null,"Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently."),a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"via npm"),a.createElement("p",null,"TypeScript is available as a ",a.createElement("a",{href:"https://www.npmjs.com/package/typescript"},"package on the npm registry")," available as ",a.createElement("code",null,'"typescript"'),"."),a.createElement("p",null,"You will need a copy of ",a.createElement("a",{href:"https://nodejs.org/en/"},"Node.js")," as an environment to run the package. Then you use a dependency manager like ",a.createElement("a",{href:"https://www.npmjs.com/"},"npm"),", ",a.createElement("a",{href:"https://yarnpkg.com/"},"yarn")," or ",a.createElement("a",{href:"https://pnpm.js.org/"},"pnpm")," to download TypeScript into your project."),a.createElement("div",null,a.createElement("code",{id:"code-example"},"npm install typescript --save-dev"),a.createElement("br",null),a.createElement("br",null),a.createElement("button",{onClick:function(){return s("npm install typescript --save-dev")}},"npm")," ",a.createElement("button",{onClick:function(){return s("yarn add typescript --dev")}},"yarn")," ",a.createElement("button",{onClick:function(){return s("pnpm add typescript -D")}},"pnpm")),a.createElement("p",null,"All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:"),a.createElement("div",null,a.createElement("code",{id:"code-run"},"npx tsc"),a.createElement("br",null),a.createElement("br",null),a.createElement("button",{onClick:function(){return p("npx tsc")}},"npm")," ",a.createElement("button",{onClick:function(){return p("yarn tsc")}},"yarn")," ",a.createElement("button",{onClick:function(){return p("pnpx tsc")}},"pnpm"))),a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"with Visual Studio"),a.createElement("p",null,"For most project types, you can get TypeScript as a package in Nuget for your MSBuild projects, for example an ASP.NET Core app."),a.createElement("p",null,"When using Nuget, you can ",a.createElement("a",{href:"https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-aspnet-with-typescript"},"install")," TypeScript through Visual Studio using:"),a.createElement("ul",null,a.createElement("li",null,"The Manage NuGet Packages window (which you can get to by right-clicking on a project node)"),a.createElement("li",{style:{marginTop:"20px"}},"The Nuget Package Manager Console (found in Tools > NuGet Package Manager > Package Manager Console) and then running:",a.createElement("br",null),a.createElement("code",{style:{fontSize:"14px"}},"Install-Package Microsoft.TypeScript.MSBuild"))),a.createElement("p",null,"For project types which don't support Nuget. You can use the ",a.createElement("a",{href:o.vs.stable.vs2019_download}," TypeScript Visual Studio extension"),". You can ",a.createElement("a",{href:"https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-using-visual-studio-extensions?view=vs-2019"},"install")," the extension using ",a.createElement("code",null,"Extensions > Manage Extensions")," in Visual Studio.")))),a.createElement("div",{className:"main-content-block",style:{textAlign:"center"}},a.createElement("p",null,"The examples below are for more advanced use cases.")),a.createElement("div",{className:"raised main-content-block"},a.createElement("h2",null,"Globally Installing TypeScript"),a.createElement("p",null,"It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.."),a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"via npm"),a.createElement("p",null,"You can use npm to install TypeScript globally, this means you can use the ",a.createElement("code",null,"tsc")," command anywhere in your terminal."),a.createElement("p",null,"To do this, run ",a.createElement("code",null,"npm install -g typescript"),". This will install the latest version (currently ",o.tags.stableMajMin,")."),a.createElement("p",null,"An alternative is to use ",a.createElement("a",{href:"https://www.npmjs.com/package/npx"},"npx")," when you have to run ",a.createElement("code",null,"tsc")," for one-off occasions.")),a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"via Visual Studio Marketplace"),a.createElement("p",null,"You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio."),a.createElement("p",null,"The latest version is available ",a.createElement("a",{href:o.vs.stable.vs2019_download,title:"Link to the Visual Studio Marketplace for the TypeScript MSBuild extension"},"in the Visual Studio Marketplace"),".")))),a.createElement("div",{className:"raised main-content-block"},a.createElement("h2",null,"Working with TypeScript-compatible transpilers"),a.createElement("p",null,"There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling."),a.createElement("p",null,"Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So, it's likely you'll still need to keep the TypeScript dependency from above around, and you'll want to enable ",a.createElement(t,{to:"/tsconfig#isolatedModules"},a.createElement("code",null,"isolatedModules")),"."),a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"Babel"),a.createElement("p",null,a.createElement("a",{href:"https://babeljs.io/"},"Babel")," is a very popular JavaScript transpiler which supports TypeScript files via the plugin ",a.createElement("a",{href:"https://babeljs.io/docs/en/babel-preset-typescript#docsNav"},"@babel/plugin-transform-typescript"),".")),a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"swc"),a.createElement("p",null,a.createElement("a",{href:"https://swc-project.github.io/docs/installation/"},"swc")," is a fast, transpiler created in Rust which supports many of Babel's features including TypeScript.")),a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"240px"}},a.createElement("h3",null,"Sucrase"),a.createElement("p",null,a.createElement("a",{href:"https://github.com/alangpierce/sucrase#sucrase/"},"Sucrase")," is a Babel fork focused on speed for using in development mode. Sucrase supports TypeScript natively.")))),a.createElement(c.a,{title:"Next Steps",allSitePage:e.data.allSitePage,lang:e.pageContext.lang}))};t.default=function(e){return a.createElement(r.a,{locale:e.pageContext.lang},a.createElement(m,e))};var u="1062920899"}}]);
//# sourceMappingURL=component---src-templates-pages-download-tsx-31d3970e1d936272cc56.js.map