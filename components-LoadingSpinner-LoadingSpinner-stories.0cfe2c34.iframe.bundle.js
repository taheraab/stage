/*! For license information please see components-LoadingSpinner-LoadingSpinner-stories.0cfe2c34.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[4583],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./src/components/LoadingSpinner/LoadingSpinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicLoadingSpinner:()=>BasicLoadingSpinner,CustomLoadingSpinner:()=>CustomLoadingSpinner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoadingSpinner_stories});var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"));const ScreenReaderText=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ezjk5ml0"})({name:"vohvw6",styles:"width:1px;height:1px;position:absolute;left:-10000px;top:auto;overflow:hidden"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const animation=(0,emotion_react_browser_esm.F4)({to:{strokeDashoffset:136}}),StyledContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e2mymjb2"})({name:"sw0n2m",styles:"display:flex;justify-content:space-around"}),StyledSvg=(0,emotion_styled_base_browser_esm.Z)("svg",{target:"e2mymjb1"})({name:"1ties1b",styles:"transform-origin:50% 65%"}),StyledPolygon=(0,emotion_styled_base_browser_esm.Z)("polygon",{target:"e2mymjb0"})((_ref=>{let{theme}=_ref;return{stroke:theme.variables.color.green.regular,strokeDasharray:17,animation:`2s linear 0s infinite ${animation}`}}),"");function LoadingSpinner(_ref2){let{size=80,screenReaderText,"data-e2e-test-id":dataE2eTestId}=_ref2;return(0,jsx_runtime.jsxs)(StyledContainer,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":"LoadingSpinner",children:[(0,jsx_runtime.jsx)(StyledSvg,{id:"triangle",width:size,height:size,viewBox:"-3 -4 39 39","aria-hidden":"true",children:(0,jsx_runtime.jsx)(StyledPolygon,{fill:"transparent",strokeWidth:"1",points:"16,0 32,32 0,32"})}),(0,jsx_runtime.jsx)(ScreenReaderText,{children:screenReaderText})]})}LoadingSpinner.displayName="LoadingSpinner";try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{size:{defaultValue:{value:"80"},description:"Width and Height in px",name:"size",required:!1,type:{name:"number"}},screenReaderText:{defaultValue:null,description:"hidden label for screen readers",name:"screenReaderText",required:!0,type:{name:"string"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LoadingSpinner/LoadingSpinner.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"src/components/LoadingSpinner/LoadingSpinner.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}const LoadingSpinner_stories={title:"Next Composite/LoadingSpinner",component:LoadingSpinner},BasicLoadingSpinner={args:{screenReaderText:"Loading"}},CustomLoadingSpinner={args:{...BasicLoadingSpinner.args,size:50}};BasicLoadingSpinner.parameters={...BasicLoadingSpinner.parameters,docs:{...BasicLoadingSpinner.parameters?.docs,source:{originalSource:'{\n  args: {\n    screenReaderText: "Loading"\n  }\n}',...BasicLoadingSpinner.parameters?.docs?.source}}},CustomLoadingSpinner.parameters={...CustomLoadingSpinner.parameters,docs:{...CustomLoadingSpinner.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...BasicLoadingSpinner.args,\n    size: 50\n  }\n}",...CustomLoadingSpinner.parameters?.docs?.source}}};const __namedExportsOrder=["BasicLoadingSpinner","CustomLoadingSpinner"]},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js")}}]);