/*! For license information please see 648.7a03ce68.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[648],{"./src/components/Form/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Stack/Stack.tsx")),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Form/FormErrorMessages/FormErrorMessages.tsx"),_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/FormLabelText/FormLabelText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledFormField=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1vxz97h0"})((_ref=>{let{theme,disabled}=_ref;return disabled&&`\n    opacity: ${theme.variables.opacity.form.disabled}\n`}),"");function FormField(_ref2){let{label="",labelHint="",hint="",errorMessages=[],disabled=!1,children,"data-e2e-test-id":dataE2eTestId}=_ref2;const validErrorMessages=errorMessages.filter((message=>message));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledFormField,{"data-e2e-test-id":dataE2eTestId,disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__.K,{space:"xxs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__.K,{space:"xs",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__.F,{labelHint,children:label}),children]})}),hint&&!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__.x,{size:"xs",children:hint}),!!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__.Q,{messages:validErrorMessages})]})})}FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:{value:""},description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:{value:"[]"},description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:{value:""},description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/Form/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/PasswordInput/PasswordInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>PasswordInput});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/FormField/FormField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const handleBorderColor=(theme,hasError)=>hasError?theme.values.color.border.input.error:theme.values.color.border.input.default,handleIconBorderColor=(theme,hasError)=>hasError?theme.values.color.border.input.error:"transparent",handleIconLeftBorderColor=(theme,hasError)=>hasError?theme.values.color.border.input.error:theme.values.color.border.input.default,StyledContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1gat1hh2"})((()=>({width:"100%",display:"flex",alignItems:"center",flexDirection:"row",position:"relative",zIndex:1})),""),StyledIconBtn=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("button",{target:"e1gat1hh1"})((_ref=>{let{theme,hasError}=_ref;return{"&[type='button']":{appearance:"none",MozAppearance:"none",WebkitAppearance:"none"},position:"absolute",top:0,right:0,zIndex:2,border:"1px solid",borderColor:handleIconBorderColor(theme,hasError),borderLeftColor:handleIconLeftBorderColor(theme,hasError),padding:theme.variables.size.spacing.s,borderRadius:theme.variables.size.borderRadius.input.s,borderBottomLeftRadius:"0",borderTopLeftRadius:"0",color:theme.values.color.text.button.tertiary.base,backgroundColor:"inherit",cursor:"pointer","&:hover":{backgroundColor:theme.values.color.background.button.tertiary.hover,color:theme.values.color.text.button.tertiary.hover,borderColor:theme.values.color.border.button.secondary.hover},"&:active":{backgroundColor:theme.values.color.background.button.tertiary.active,color:theme.values.color.text.button.tertiary.active,borderColor:theme.values.color.border.button.secondary.active},"&:disabled":{backgroundColor:theme.values.color.background.button.tertiary.disabled,color:theme.values.color.text.button.tertiary.disabled,borderColor:theme.values.color.border.button.secondary.disabled,pointerEvents:"none"},"& svg":{pointerEvents:"none"}}}),""),StyledPasswordInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("input",{target:"e1gat1hh0"})((_ref2=>{let{theme,hasError}=_ref2;return{fontFamily:theme.variables.fontFamily.lato,fontSize:theme.variables.size.font.text.m,lineHeight:theme.variables.size.lineHeight.text.m,borderRadius:theme.variables.size.borderRadius.input.s,borderWidth:"1px",borderStyle:"solid",width:"100%",padding:theme.variables.size.spacing.xs,paddingRight:theme.variables.size.spacing.xxl,boxSizing:"border-box",color:theme.values.color.text.secondary,borderColor:handleBorderColor(theme,hasError),backgroundColor:theme.values.color.background.input.default,"&.error":{borderColor:theme.values.color.border.input.error},"&.has-icon":{paddingRight:theme.variables.size.spacing.xs+theme.variables.size.font.icon.m},"&::placeholder":{color:theme.values.color.text.placeholder,opacity:1},"&:-ms-input-placeholder":{color:theme.values.color.text.placeholder},"&::-ms-input-placeholder":{color:theme.values.color.text.placeholder}}}),""),PasswordInputRaw=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((_ref3,ref)=>{let{name,value,placeholder,hasError=!1,disabled,onChange,onClick,onBlur,onFocus,onIconClick,areaLabel,tabIndex,autoComplete,iconAriaLabel}=_ref3;const[inputType,setInputType]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("password"),currentType="password"===inputType?"text":"password",eyeIcon="password"===inputType?"eye-off":"eye";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledPasswordInput,{type:inputType,value,placeholder,name,disabled,onClick,onChange,onBlur,onFocus,"aria-label":areaLabel,ref,tabIndex,autoComplete,hasError}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledIconBtn,{onClick:e=>{disabled&&e.preventDefault(),onIconClick&&onIconClick(e),setInputType(currentType)},hasError,disabled,"aria-label":iconAriaLabel,type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{name:eyeIcon,size:"s",variant:"tertiary"})})]})}));function PasswordInput(_ref4){let{name,value,placeholder="••••••••",hasError=!1,onChange,onClick,onBlur,onFocus,onIconClick,type,tabIndex,areaLabel,autoComplete="on",iconAriaLabel,...rest}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__.W,{...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordInputRaw,{name,value,type,placeholder,hasError,disabled:rest.disabled,onChange,onBlur,onFocus,onClick,onIconClick,tabIndex,areaLabel,autoComplete,iconAriaLabel})})}PasswordInput.displayName="PasswordInput";try{PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",displayName:"PasswordInput",props:{iconAriaLabel:{defaultValue:null,description:"",name:"iconAriaLabel",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:{value:"••••••••"},description:"",name:"placeholder",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"Set to true to toggle error state",name:"hasError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to true to disabled input",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},areaLabel:{defaultValue:null,description:"",name:"areaLabel",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},autoComplete:{defaultValue:{value:"on"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:null,description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/PasswordInput/PasswordInput.tsx#PasswordInput"]={docgenInfo:PasswordInput.__docgenInfo,name:"PasswordInput",path:"src/components/Form/PasswordInput/PasswordInput.tsx#PasswordInput"})}catch(__react_docgen_typescript_loader_error){}try{PasswordInputRaw.displayName="PasswordInputRaw",PasswordInputRaw.__docgenInfo={description:"",displayName:"PasswordInputRaw",props:{iconAriaLabel:{defaultValue:null,description:"",name:"iconAriaLabel",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"Set to true to toggle error state",name:"hasError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to true to disabled input",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},areaLabel:{defaultValue:null,description:"",name:"areaLabel",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:null,description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/PasswordInput/PasswordInput.tsx#PasswordInputRaw"]={docgenInfo:PasswordInputRaw.__docgenInfo,name:"PasswordInputRaw",path:"src/components/Form/PasswordInput/PasswordInput.tsx#PasswordInputRaw"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Inline/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Inline});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/flattenChildren.ts"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/mediaQueries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={alignItems:"left",space:"xs",noWrap:!1,vAlignItems:"top","data-e2e-test-id":void 0},makeNegative=obj=>Object.entries(obj).map((_ref=>{let[key,value]=_ref;return[key,`-${value}`]})).reduce(((acc,_ref2)=>{let[key,value]=_ref2;return acc[key]=value,acc}),{}),InlineContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o1"})((_ref3=>{let{alignItems,vAlignItems,space,vSpace,theme,noWrap}=_ref3;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({alignItems:[vAlignItems,{top:"flex-start",bottom:"flex-end",center:"center",spaceBetween:"space-between"}],justifyContent:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}],marginLeft:[space,makeNegative(theme.variables.size.spacing)],marginTop:[vSpace,makeNegative(theme.variables.size.spacing)]}),display:"flex",flexDirection:"row",flexWrap:noWrap?"nowrap":"wrap"}}),""),InlineItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o0"})((_ref4=>{let{theme,space,vSpace}=_ref4;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({marginTop:[vSpace,theme.variables.size.spacing],marginLeft:[space,theme.variables.size.spacing]}),"&:empty":{marginTop:0,marginLeft:0}}}),"");function Inline(_ref5){let{children,alignItems,vAlignItems,space,vSpace=space,noWrap,"data-e2e-test-id":dataE2eTestId}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineContainer,{"data-e2e-test-id":dataE2eTestId,alignItems,vAlignItems,space,vSpace,noWrap,children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map((0,_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__.I)(children),(child=>child&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineItem,{space,vSpace,children:child})))})}Inline.displayName="Inline",Inline.defaultProps=defaultProps;try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{space:{defaultValue:{value:"xs"},description:"Represents the spacing between the Inline's children.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"space",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},vSpace:{defaultValue:null,description:"Represents the vertical spacing between the Inline's children. It overrides the inherited vertical spacing from `space` if set.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"vSpace",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alignItems:{defaultValue:{value:"left"},description:"Represents elements' horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] or one alignItems for all screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},vAlignItems:{defaultValue:{value:"top"},description:"Represents elements' vertical alignment\nspecify [small screen vAlignItems, medium screen vAlignItems, large screen vAlignItems] or one vAlignItems for all screen sizes",name:"vAlignItems",required:!1,type:{name:'"center" | "spaceBetween" | "bottom" | "top" | MQ<"center" | "spaceBetween" | "bottom" | "top">'}},noWrap:{defaultValue:{value:"false"},description:"Set to true to disable wrapping property",name:"noWrap",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inline/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"src/components/Inline/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/flattenChildren.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>flattenChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-is/index.js");const flattenChildren=function(children){let depth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,keys=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(node)?acc.push(...flattenChildren(node.props.children,depth+1,keys.concat(String(node.key||nodeIndex)))):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)?acc.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}exports.isFragment=function(a){return y(a)===d}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);