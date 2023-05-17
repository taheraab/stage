/*! For license information please see components-DropdownMenu-DropdownMenu-stories.98dc77b1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[5597,1747],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./.storybook/helpers/createStory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>createStory});const createStory=(args,story)=>(void 0!==args&&(story.args=args),story.parameters={controls:{include:args?Object.keys(args):[]}},story)},"./src/components/DropdownMenu/DropdownMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ControlIcon:()=>ControlIcon,ControlSize:()=>ControlSize,Disabled:()=>Disabled,Emphasized:()=>Emphasized,MenuIcon:()=>MenuIcon,MenuTextVariant:()=>MenuTextVariant,OpenCloseCallback:()=>OpenCloseCallback,Separator:()=>Separator,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DropdownMenu/DropdownMenu.tsx"),_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/helpers/createStory.ts"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/DropdownMenu",component:_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.h,args:{size:"m",disabled:!1,iconName:"more-horizontal"},parameters:{badges:[_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.QV.SUBTHEMED]}},BasicTemplate=_ref=>{let{...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:150},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.h,{...rest})})};BasicTemplate.displayName="BasicTemplate";const Basic=BasicTemplate.bind({});Basic.args={menuItems:[{label:"item 1",onSelect:()=>!0},{label:"item 2 with long label",onSelect:()=>!0}]};const WithLabel=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({label:"Menu",menuItems:[{label:"item 1",onSelect:()=>!0},{label:"item 2 with long label",onSelect:()=>!0}],iconName:"menu"},BasicTemplate.bind({})),ControlIcon=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"item 1",onSelect:()=>!0},{label:"item 2 with long label",onSelect:()=>!0}],iconName:"menu"},BasicTemplate.bind({})),ControlSize=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"item 1",onSelect:()=>!0},{label:"item 2 with long label",onSelect:()=>!0}],size:"l"},BasicTemplate.bind({})),Separator=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"item 1",onSelect:()=>!0},"separator",{label:"item 2",onSelect:()=>!0}],size:"l"},BasicTemplate.bind({})),MenuIcon=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"mail",onSelect:()=>!0,icon:"mail"},{label:"share",onSelect:()=>!0,icon:"share"}],size:"l"},BasicTemplate.bind({})),MenuTextVariant=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItemTextVariant:"none",menuItems:[{label:"EN (English)",onSelect:()=>!0},{label:"DE (Deutsch)",onSelect:()=>!0}],size:"l"},BasicTemplate.bind({})),Emphasized=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"mail",onSelect:()=>!0,icon:"mail",emphasized:!0},{label:"share",onSelect:()=>!0,icon:"share"}],size:"l"},BasicTemplate.bind({})),Disabled=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"mail",onSelect:()=>!0}],disabled:!0},BasicTemplate.bind({})),OpenCloseCallbackTemplate=_ref2=>{let{...rest}=_ref2;const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("close");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{height:150},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__.x,{children:["Menu open state: ",text]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.h,{...rest,onMenuOpen:()=>setText("open"),onMenuClose:()=>setText("close")})]})};OpenCloseCallbackTemplate.displayName="OpenCloseCallbackTemplate";const OpenCloseCallback=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_4__.D)({menuItems:[{label:"item 1",onSelect:()=>!0},{label:"item 2 with long label",onSelect:()=>!0}]},OpenCloseCallbackTemplate.bind({}));Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"({\n  ...rest\n}) => <div style={{\n  height: 150\n}}>\n    <DropdownMenu {...rest} />\n  </div>",...Basic.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'createStory({\n  label: "Menu",\n  menuItems: [{\n    label: "item 1",\n    onSelect: () => true\n  }, {\n    label: "item 2 with long label",\n    onSelect: () => true\n  }],\n  iconName: "menu"\n}, BasicTemplate.bind({}))',...WithLabel.parameters?.docs?.source}}},ControlIcon.parameters={...ControlIcon.parameters,docs:{...ControlIcon.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "item 1",\n    onSelect: () => true\n  }, {\n    label: "item 2 with long label",\n    onSelect: () => true\n  }],\n  iconName: "menu"\n}, BasicTemplate.bind({}))',...ControlIcon.parameters?.docs?.source}}},ControlSize.parameters={...ControlSize.parameters,docs:{...ControlSize.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "item 1",\n    onSelect: () => true\n  }, {\n    label: "item 2 with long label",\n    onSelect: () => true\n  }],\n  size: "l"\n}, BasicTemplate.bind({}))',...ControlSize.parameters?.docs?.source}}},Separator.parameters={...Separator.parameters,docs:{...Separator.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "item 1",\n    onSelect: () => true\n  }, "separator", {\n    label: "item 2",\n    onSelect: () => true\n  }],\n  size: "l"\n}, BasicTemplate.bind({}))',...Separator.parameters?.docs?.source}}},MenuIcon.parameters={...MenuIcon.parameters,docs:{...MenuIcon.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "mail",\n    onSelect: () => true,\n    icon: "mail"\n  }, {\n    label: "share",\n    onSelect: () => true,\n    icon: "share"\n  }],\n  size: "l"\n}, BasicTemplate.bind({}))',...MenuIcon.parameters?.docs?.source}}},MenuTextVariant.parameters={...MenuTextVariant.parameters,docs:{...MenuTextVariant.parameters?.docs,source:{originalSource:'createStory({\n  menuItemTextVariant: "none",\n  menuItems: [{\n    label: "EN (English)",\n    onSelect: () => true\n  }, {\n    label: "DE (Deutsch)",\n    onSelect: () => true\n  }],\n  size: "l"\n}, BasicTemplate.bind({}))',...MenuTextVariant.parameters?.docs?.source}}},Emphasized.parameters={...Emphasized.parameters,docs:{...Emphasized.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "mail",\n    onSelect: () => true,\n    icon: "mail",\n    emphasized: true\n  }, {\n    label: "share",\n    onSelect: () => true,\n    icon: "share"\n  }],\n  size: "l"\n}, BasicTemplate.bind({}))',...Emphasized.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "mail",\n    onSelect: () => true\n  }],\n  disabled: true\n}, BasicTemplate.bind({}))',...Disabled.parameters?.docs?.source}}},OpenCloseCallback.parameters={...OpenCloseCallback.parameters,docs:{...OpenCloseCallback.parameters?.docs,source:{originalSource:'createStory({\n  menuItems: [{\n    label: "item 1",\n    onSelect: () => true\n  }, {\n    label: "item 2 with long label",\n    onSelect: () => true\n  }]\n}, OpenCloseCallbackTemplate.bind({}))',...OpenCloseCallback.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithLabel","ControlIcon","ControlSize","Separator","MenuIcon","MenuTextVariant","Emphasized","Disabled","OpenCloseCallback"]},"./src/components/Typography/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/mediaQueries.ts");const defaultProps={size:"m",weight:"normal",transform:"none",as:"p",variant:"secondary",align:"left",hyphens:"none","data-e2e-test-id":void 0},Text=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("p",{shouldForwardProp:prop=>(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__.Z)(prop)&&"transform"!==prop,target:"efktmsx0"})((_ref=>{let{theme,align,weight,size,transform,hyphens,variant}=_ref;return{fontFamily:theme.variables.fontFamily.lato,margin:0,textTransform:transform,textAlign:align,"font-weight":String(theme.variables.weight[weight]),color:theme.values.color.text[variant],fontSize:theme.variables.size.font.text[size],lineHeight:theme.variables.size.lineHeight.text[size],...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__.mq)({hyphens:[hyphens,{none:"none",auto:"auto",manual:"manual"}]})}}),"");Text.defaultProps=defaultProps;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:'ElementType<any> & ("p" | "span")'}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"black"'},{value:'"inherit"'}]}},transform:{defaultValue:{value:"none"},description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"info"'},{value:'"error"'},{value:'"warning"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hyphens:{defaultValue:{value:"none"},description:"",name:"hyphens",required:!1,type:{name:'"auto" | "none" | "manual" | MQ<"auto" | "none" | "manual">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}exports.isFragment=function(a){return y(a)===d}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);