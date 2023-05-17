(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({62:"components-Collapsible-Collapsible-stories-mdx",186:"components-Box-Box-stories",252:"Overview-stories-mdx",262:"components-Stack-Stack-stories-mdx",666:"components-Typography-Header-Header-stories",704:"components-SegmentedProgressBar-SegmentedProgressBar-stories",767:"components-SearchResult-SearchResult-stories-mdx",783:"components-Patterns-Modal-Modal-stories-mdx",870:"components-Icon-Icon-stories",1054:"components-Card-Card-stories-mdx",1065:"components-Badge-Badge-stories",1128:"components-Button-Button-mdx",1148:"components-Typography-Text-Text-stories-mdx",1187:"Testing-stories-mdx",1269:"components-Column-Columns-stories-mdx",1349:"components-Form-Textarea-Textarea-stories-mdx",1423:"components-Container-Container-stories-mdx",1537:"Icons-stories-mdx",1576:"components-Stack-Stack-stories",1747:"components-Button-Button-stories",1781:"Storybook-stories-mdx",1785:"CodebaseOverview-stories-mdx",1813:"components-Form-Textarea-Textarea-stories",1917:"Dashboard-stories",2058:"Welcome-stories-mdx",2458:"components-DropdownMenu-DropdownMenu-stories-mdx",2677:"GettingStarted-stories-mdx",2699:"components-Form-Input-Input-stories",2714:"components-Icon-Icon-stories-mdx",3030:"update-guides-0-x-x--1-x-x-stories-mdx",3033:"components-Form-ToggleButton-ToggleButton-stories-mdx",3106:"components-Link-Link-stories",3141:"components-Form-PasswordInput-PasswordInput-stories-mdx",3296:"components-Typography-TextClamped-TextClamped-stories",3301:"components-MediaViewerBar-MediaViewerBar-stories",3520:"components-PictogramButton-PictogramButton-stories-mdx",3583:"components-Typography-StyledText-StyledText-stories-mdx",3815:"Patterns-stories-mdx",4017:"components-SubThemeProvider-SubThemeProvider-stories",4062:"components-Form-Radio-Radio-stories-mdx",4084:"components-Callout-Callout-stories-mdx",4093:"components-Form-Input-Input-stories-mdx",4218:"components-SubThemeProvider-SubThemeProvider-stories-mdx",4266:"Troubleshooting-stories-mdx",4526:"components-ShadowWebComponent-ShadowWebComponent-stories-mdx",4643:"components-Form-Select-Select-stories",4932:"components-Form-Toggle-Toggle-stories",4934:"components-SearchResult-SearchResult-stories",4953:"components-Divider-Divider-stories",4962:"components-Typography-StyledText-StyledText-stories",5317:"components-Container-Container-stories",5597:"components-DropdownMenu-DropdownMenu-stories",5802:"components-Divider-Divider-stories-mdx",5853:"components-Form-RadioButton-RadioButton-stories",5885:"components-Form-Checkbox-Checkbox-stories-mdx",5914:"components-Form-Radio-Radio-stories",6147:"components-MediaItem-MediaItem-stories-mdx",6183:"Forms-stories",6300:"components-Notification-Notification-stories-mdx",6483:"components-Box-Box-stories-mdx",6548:"components-Typography-TextClamped-TextClamped-stories-mdx",6586:"components-Form-FormFieldGroup-FormFieldGroup-stories-mdx",6674:"Contribute-stories-mdx",6827:"components-Callout-Callout-stories",6843:"components-Form-PasswordInput-PasswordInput-stories",6999:"Sizes-stories-mdx",7052:"components-DataTable-DataTable-stories",7128:"components-ProgressBar-ProgressBar-stories",7301:"components-DataTable-DataTable-mdx",7457:"components-Form-ToggleButton-ToggleButton-stories",7477:"components-SegmentedProgressBar-SegmentedProgressBar-stories-mdx",7481:"Theming-stories-mdx",7518:"components-Card-Card-stories",7564:"components-Column-Columns-stories",7697:"components-Badge-Badge-stories-mdx",7725:"components-MediaItem-MediaItem-stories",7732:"components-Inline-Inline-stories-mdx",7779:"components-Patterns-ButtonGroup-ButtonGroup-stories-mdx",7866:"components-PictogramButton-PictogramButton-stories",8016:"components-Typography-Text-Text-stories",8022:"FAQ-stories-mdx",8047:"components-Form-FormFieldGroup-FormFieldGroup-stories",8423:"components-Typography-Header-Header-stories-mdx",8620:"components-Tabs-Tabs-stories",8630:"Release-stories-mdx",8669:"components-Form-Toggle-Toggle-stories-mdx",8790:"components-Form-Checkbox-Checkbox-stories",8846:"components-MediaViewerBar-MediaViewerBar-stories-mdx",8856:"components-Notification-Notification-stories",9002:"components-Logo-Logo-stories-mdx",9021:"components-Tabs-Tabs-stories-mdx",9065:"Debugging-stories-mdx",9215:"components-Collapsible-Collapsible-stories",9306:"components-ProgressBar-ProgressBar-stories-mdx",9336:"components-Form-RadioButton-RadioButton-stories-mdx",9359:"components-Form-Select-Select-stories-mdx",9411:"Colors-stories-mdx",9532:"components-Inline-Inline-stories",9566:"components-RoundButton-RoundButton-stories",9649:"components-RoundButton-RoundButton-stories-mdx",9690:"NextComposites-stories-mdx",9691:"components-Link-Link-stories-mdx",9981:"components-Logo-Logo-stories"}[chunkId]||chunkId)+"."+{62:"45534161",186:"86bf1090",252:"a3e15aa1",262:"49d8b6df",522:"ca9ef3a4",589:"cdcfb814",648:"7a03ce68",666:"bf93df00",704:"349cd146",705:"a704ac28",767:"b77ee456",783:"93a7246c",870:"423b1598",960:"6e3a79d3",1031:"3b994b06",1054:"a50449ca",1065:"f7e40436",1128:"408ad2ef",1148:"1eaa6933",1187:"6844edd3",1269:"909938bf",1349:"e42e8296",1423:"3cb99344",1490:"6985d11a",1537:"39e92144",1576:"5782683c",1747:"f06b60c1",1781:"9dbe8fad",1785:"55b123ce",1809:"653c07db",1813:"2227e17a",1917:"90f9c7c0",2058:"94fea9ca",2146:"ec3d6aca",2318:"5fbe6b56",2333:"0103cf89",2345:"ae2b71b0",2377:"d50110f5",2458:"31bf807e",2517:"81b75a61",2677:"0b707898",2699:"8f0ac0a3",2714:"41c17470",2758:"88e1d257",3030:"973ea8e7",3033:"2a8613fd",3106:"366cfb5c",3141:"d78643c1",3170:"277c9b77",3296:"28febe20",3301:"cdf3ef2d",3482:"aa777c0e",3520:"aa1b1c02",3536:"157ad4a4",3583:"f03101a8",3815:"270a0eca",4017:"75890a95",4062:"0f792e41",4084:"e6dfba78",4093:"3ad0753a",4218:"2c415871",4266:"ae8098d0",4446:"0c239f93",4463:"93fbdafd",4526:"68ff82cb",4643:"535fdbd1",4695:"9106e9d2",4784:"ea4ddb98",4932:"54fa9547",4934:"195fbd01",4953:"ee09576e",4962:"d70418c7",5317:"e9f7100b",5396:"51a38b16",5400:"3a85fae5",5458:"2e2ead78",5529:"4f5831f2",5597:"98dc77b1",5661:"50ffc16a",5802:"10e54b9a",5853:"e00c9573",5885:"5535a5d0",5914:"2efec135",6120:"53058456",6147:"e5450c17",6183:"5584b34c",6300:"0c651130",6483:"184f1300",6548:"b8cd8573",6586:"430099fe",6612:"1d589fe1",6674:"e2fb86ba",6827:"4b323719",6843:"aa947c1a",6904:"d81ec119",6999:"cc16b00e",7052:"2d1ee419",7058:"23d38006",7128:"42a274c6",7301:"ca9508e2",7457:"6b1c44d6",7477:"6d0b3011",7481:"19cac6eb",7518:"ecb1ea90",7538:"6ebbd629",7564:"b4330ab5",7697:"4202e3ba",7725:"23fc1042",7732:"6d6c5fd1",7759:"86578bed",7779:"0128ba32",7843:"e8a30a69",7866:"4d62305f",8016:"4cb86aa5",8022:"756b438b",8047:"734f3cd1",8307:"a6402604",8423:"f88d3248",8620:"7d076589",8630:"6f708ca0",8650:"eda58aa1",8669:"a40a6832",8790:"ec2811a2",8846:"764f5de6",8856:"759dcaa8",8923:"28735b31",9002:"71ae26d0",9021:"ee498d84",9065:"f6c4f4c1",9115:"18964844",9215:"2d27643e",9306:"f2a910eb",9336:"5d9e8fff",9359:"571ff832",9411:"88e7618c",9506:"e1fe505f",9532:"452db490",9537:"ca6f46ae",9566:"e7513808",9649:"c5e30df4",9690:"dd6fd9db",9691:"6680c981",9981:"78f1fa40"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@amboss/design-system:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@amboss/design-system:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();