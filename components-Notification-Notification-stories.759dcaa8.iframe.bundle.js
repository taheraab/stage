/*! For license information please see components-Notification-Notification-stories.759dcaa8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[8856,1747],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./.storybook/helpers/createStory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>createStory});const createStory=(args,story)=>(void 0!==args&&(story.args=args),story.parameters={controls:{include:args?Object.keys(args):[]}},story)},"./.storybook/helpers/skipArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>skipArgs});const skipArgs=argsToSkip=>argsToSkip.reduce(((acc,arg)=>({...acc,[arg]:{table:{disable:!0}}})),{})},"./src/components/Notification/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,LongText:()=>LongText,LongTextWithCallToAction:()=>LongTextWithCallToAction,Success:()=>Success,WithCallToAction:()=>WithCallToAction,WithDismissButton:()=>WithDismissButton,WithExpandableContent:()=>WithExpandableContent,WithoutIcon:()=>WithoutIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});__webpack_require__("./node_modules/react/index.js");var Notification=__webpack_require__("./src/components/Notification/Notification.tsx"),constants=__webpack_require__("./.storybook/constants.ts"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),Box=__webpack_require__("./src/components/Box/Box.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ExpandedContent(){return(0,jsx_runtime.jsx)(Box.x,{space:"zero",vSpace:"xs",children:(0,jsx_runtime.jsx)(Text.x,{children:"Lorem ipsum dolor sit amet"})})}ExpandedContent.displayName="ExpandedContent";var SubThemeProvider=__webpack_require__("./src/components/SubThemeProvider/SubThemeProvider.tsx"),skipArgs=__webpack_require__("./.storybook/helpers/skipArgs.ts"),createStory=__webpack_require__("./.storybook/helpers/createStory.ts");const Notification_stories={title:"Components/Notification",component:Notification.P,parameters:{badges:[constants.QV.SUBTHEMED]},argTypes:(0,skipArgs.c)(["children"]),args:{text:"Lorem ipsum dolor sit amet"}},BaseBannerTemplate=_ref=>{let{theme,icon,text,...rest}=_ref;return(0,jsx_runtime.jsx)("div",{style:{width:600},children:(0,jsx_runtime.jsx)(SubThemeProvider.u,{name:theme,children:(0,jsx_runtime.jsx)(Notification.P,{...rest,icon,text})})})};BaseBannerTemplate.displayName="BaseBannerTemplate";const Success=(0,createStory.D)({theme:"success",icon:"check"},BaseBannerTemplate.bind({})),Error=(0,createStory.D)({theme:"error",icon:"alert-circle"},BaseBannerTemplate.bind({})),Info=(0,createStory.D)({theme:"info",icon:"bulb"},BaseBannerTemplate.bind({})),WithoutIcon=(0,createStory.D)({theme:"success"},BaseBannerTemplate.bind({})),WithDismissButton=(0,createStory.D)({theme:"success",icon:"check",isDismissable:!0},BaseBannerTemplate.bind({})),WithCallToAction=(0,createStory.D)({theme:"success",icon:"check",isDismissable:!0,callToActionLabel:"Call to action"},BaseBannerTemplate.bind({})),WithExpandableContent=(0,createStory.D)({theme:"success",icon:"check",expandable:!0,expandButtonLabel:"Show details",shrinkButtonLabel:"Hide details",children:(0,jsx_runtime.jsx)(ExpandedContent,{})},BaseBannerTemplate.bind({})),LongText=(0,createStory.D)({theme:"success",icon:"check",isDismissable:!0,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, mi sit amet varius molestie, odio tortor vulputate mi, ut laoreet lectus ligula vitae purus."},BaseBannerTemplate.bind({})),LongTextWithCallToAction=(0,createStory.D)({theme:"success",icon:"check",isDismissable:!0,callToActionLabel:"Call to action",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, mi sit amet varius molestie, odio tortor vulputate mi, ut laoreet lectus ligula vitae purus."},BaseBannerTemplate.bind({}));Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check"\n}, BaseBannerTemplate.bind({}))',...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'createStory({\n  theme: "error",\n  icon: "alert-circle"\n}, BaseBannerTemplate.bind({}))',...Error.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'createStory({\n  theme: "info",\n  icon: "bulb"\n}, BaseBannerTemplate.bind({}))',...Info.parameters?.docs?.source}}},WithoutIcon.parameters={...WithoutIcon.parameters,docs:{...WithoutIcon.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success"\n}, BaseBannerTemplate.bind({}))',...WithoutIcon.parameters?.docs?.source}}},WithDismissButton.parameters={...WithDismissButton.parameters,docs:{...WithDismissButton.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check",\n  isDismissable: true\n}, BaseBannerTemplate.bind({}))',...WithDismissButton.parameters?.docs?.source}}},WithCallToAction.parameters={...WithCallToAction.parameters,docs:{...WithCallToAction.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check",\n  isDismissable: true,\n  callToActionLabel: "Call to action"\n}, BaseBannerTemplate.bind({}))',...WithCallToAction.parameters?.docs?.source}}},WithExpandableContent.parameters={...WithExpandableContent.parameters,docs:{...WithExpandableContent.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check",\n  expandable: true,\n  expandButtonLabel: "Show details",\n  shrinkButtonLabel: "Hide details",\n  children: <ExpandedContent />\n}, BaseBannerTemplate.bind({}))',...WithExpandableContent.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check",\n  isDismissable: true,\n  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, mi sit amet varius molestie, odio tortor vulputate mi, ut laoreet lectus ligula vitae purus."\n}, BaseBannerTemplate.bind({}))',...LongText.parameters?.docs?.source}}},LongTextWithCallToAction.parameters={...LongTextWithCallToAction.parameters,docs:{...LongTextWithCallToAction.parameters?.docs,source:{originalSource:'createStory({\n  theme: "success",\n  icon: "check",\n  isDismissable: true,\n  callToActionLabel: "Call to action",\n  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, mi sit amet varius molestie, odio tortor vulputate mi, ut laoreet lectus ligula vitae purus."\n}, BaseBannerTemplate.bind({}))',...LongTextWithCallToAction.parameters?.docs?.source}}};const __namedExportsOrder=["Success","Error","Info","WithoutIcon","WithDismissButton","WithCallToAction","WithExpandableContent","LongText","LongTextWithCallToAction"]},"./src/components/SubThemeProvider/SubThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>SubThemeProvider});__webpack_require__("./node_modules/react/index.js");var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function isObject(item){return item&&"object"==typeof item&&!Array.isArray(item)}function mergeDeep(target){for(var _len=arguments.length,sources=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)sources[_key-1]=arguments[_key];if(!sources.length)return target;const source=sources.shift();if(isObject(target)&&isObject(source))for(const key in source)isObject(source[key])?(target[key]||Object.assign(target,{[key]:{}}),mergeDeep(target[key],source[key])):Object.assign(target,{[key]:source[key]});return mergeDeep(target,...sources)}const subThemeCreator=(parentTheme,name)=>mergeDeep({},parentTheme,{values:{...parentTheme.values.subThemes[name]}});function SubThemeProvider(_ref){let{name,children,"data-e2e-test-id":dataE2eTestId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,{theme:parentTheme=>subThemeCreator(parentTheme,name),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-e2e-test-id":dataE2eTestId,children})})}SubThemeProvider.displayName="SubThemeProvider";try{SubThemeProvider.displayName="SubThemeProvider",SubThemeProvider.__docgenInfo={description:"",displayName:"SubThemeProvider",props:{"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"unset"'},{value:'"dimmed"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SubThemeProvider/SubThemeProvider.tsx#SubThemeProvider"]={docgenInfo:SubThemeProvider.__docgenInfo,name:"SubThemeProvider",path:"src/components/SubThemeProvider/SubThemeProvider.tsx#SubThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}exports.isFragment=function(a){return y(a)===d}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);