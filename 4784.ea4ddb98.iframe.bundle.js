"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[4784],{"./src/components/Form/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Stack/Stack.tsx")),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Form/FormErrorMessages/FormErrorMessages.tsx"),_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/FormLabelText/FormLabelText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledFormField=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1vxz97h0"})((_ref=>{let{theme,disabled}=_ref;return disabled&&`\n    opacity: ${theme.variables.opacity.form.disabled}\n`}),"");function FormField(_ref2){let{label="",labelHint="",hint="",errorMessages=[],disabled=!1,children,"data-e2e-test-id":dataE2eTestId}=_ref2;const validErrorMessages=errorMessages.filter((message=>message));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledFormField,{"data-e2e-test-id":dataE2eTestId,disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__.K,{space:"xxs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__.K,{space:"xs",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__.F,{labelHint,children:label}),children]})}),hint&&!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__.x,{size:"xs",children:hint}),!!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__.Q,{messages:validErrorMessages})]})})}FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:{value:""},description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:{value:"[]"},description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:{value:""},description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/Form/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>InputRaw,I:()=>Input});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icon.tsx"),_FormField_FormField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Form/FormField/FormField.tsx"),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1dohmou2"})((()=>({width:"100%",display:"flex",alignItems:"center",flexDirection:"row",position:"relative",zIndex:1})),""),StyledIconContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1dohmou1"})((_ref=>{let{theme}=_ref;return{position:"absolute",right:theme.variables.size.spacing.xs}}),""),handleBorderColor=(theme,isTransparent,hasError)=>isTransparent?"transparent":hasError?theme.values.color.border.input.error:theme.values.color.border.input.default,handleBackgroundColor=(theme,isTransparent)=>isTransparent?"transparent":theme.values.color.background.input.default,handleRightPadding=(theme,icon)=>icon?`calc(${theme.variables.size.spacing.s} + ${theme.variables.size.font.icon.m})`:"",StyledInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("input",{target:"e1dohmou0"})((_ref2=>{let{theme,privateProps,hasError,icon}=_ref2;return{fontFamily:theme.variables.fontFamily.lato,fontSize:theme.variables.size.font.text.m,lineHeight:theme.variables.size.lineHeight.text.m,borderRadius:theme.variables.size.borderRadius.input.s,borderWidth:"1px",borderStyle:"solid",width:"100%",padding:theme.variables.size.spacing.xs,boxSizing:"border-box",color:theme.values.color.text.secondary,borderColor:handleBorderColor(theme,privateProps?.isTransparent,hasError),backgroundColor:handleBackgroundColor(theme,privateProps?.isTransparent),"&.error":{borderColor:theme.values.color.border.input.error},"& svg":{pointerEvents:"none"},"&::placeholder":{color:theme.values.color.text.placeholder,opacity:1},"&:-ms-input-placeholder":{color:theme.values.color.text.placeholder},"&::-ms-input-placeholder":{color:theme.values.color.text.placeholder},paddingRight:handleRightPadding(theme,icon)}}),""),InputRaw=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((_ref3,ref)=>{let{name,value,placeholder,hasError=!1,disabled,onChange,onClick,onBlur,onFocus,type="text",icon,areaLabel,tabIndex,autoComplete="on",privateProps={}}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledInput,{type,value,placeholder,name,disabled,onClick,onChange,onBlur,onFocus,"aria-label":areaLabel,ref,tabIndex,autoComplete,hasError,privateProps,icon}),icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledIconContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x,{as:"span",variant:"tertiary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{name:icon,size:"m"})})})]})}));function Input(_ref4){let{name,value,placeholder,hasError=!1,onChange,onClick,onBlur,onFocus,type="text",icon,tabIndex,areaLabel,autoComplete="on",privateProps={},...rest}=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormField_FormField__WEBPACK_IMPORTED_MODULE_5__.W,{...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InputRaw,{name,value,type,icon,placeholder,hasError,disabled:rest.disabled,onChange,onBlur,onFocus,onClick,tabIndex,areaLabel,autoComplete,privateProps})})}Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"article"'},{value:'"menu"'},{value:'"circle"'},{value:'"image"'},{value:'"key"'},{value:'"info"'},{value:'"search"'},{value:'"alert-circle"'},{value:'"alert-triangle"'},{value:'"align-left"'},{value:'"apple"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"auditor"'},{value:'"award"'},{value:'"bar-chart-2"'},{value:'"bell"'},{value:'"bell-curve"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"box"'},{value:'"bubble"'},{value:'"bubble-check"'},{value:'"bubble-image"'},{value:'"bubble-pill"'},{value:'"bubble-text"'},{value:'"bulb"'},{value:'"calculator"'},{value:'"charts"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"checkmark-circle-filled"'},{value:'"chevron-down"'},{value:'"chevrons-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-up"'},{value:'"clipboard"'},{value:'"coffee"'},{value:'"collapse"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"download"'},{value:'"edit-3"'},{value:'"edit-3-filled"'},{value:'"edit-square"'},{value:'"education"'},{value:'"expand"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"face-happy"'},{value:'"face-neutral"'},{value:'"face-sad"'},{value:'"file-text"'},{value:'"filled-dot"'},{value:'"film"'},{value:'"flag"'},{value:'"flag-filled"'},{value:'"flask"'},{value:'"flowchart"'},{value:'"folder"'},{value:'"folder-check-filled"'},{value:'"folder-plus"'},{value:'"gift"'},{value:'"google"'},{value:'"hammer-filled"'},{value:'"hash"'},{value:'"headphones"'},{value:'"help-circle"'},{value:'"home"'},{value:'"illustration"'},{value:'"image-broken"'},{value:'"institution"'},{value:'"layers"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"mail"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"med-imaging"'},{value:'"meditricks"'},{value:'"message-circle"'},{value:'"minus"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"percent"'},{value:'"pill"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-circle-filled"'},{value:'"quiz"'},{value:'"reset"'},{value:'"rotate-cw"'},{value:'"search-list"'},{value:'"settings"'},{value:'"share"'},{value:'"shopping-bag"'},{value:'"show-all"'},{value:'"sliders"'},{value:'"smartzoom"'},{value:'"sort"'},{value:'"sort-ascending"'},{value:'"sort-descending"'},{value:'"sort-neutral"'},{value:'"star"'},{value:'"stethoscope"'},{value:'"tag"'},{value:'"text-zoom-reset"'},{value:'"thumbs-up"'},{value:'"timer-off"'},{value:'"timer-on"'},{value:'"trash-2"'},{value:'"twitter"'},{value:'"user"'},{value:'"users"'},{value:'"watch"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'},{value:'"x-circle-filled"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"Set to true to toggle error state",name:"hasError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to true to disabled input",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},areaLabel:{defaultValue:null,description:"",name:"areaLabel",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},autoComplete:{defaultValue:{value:"on"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},privateProps:{defaultValue:{value:"{}"},description:"",name:"privateProps",required:!1,type:{name:"{ isTransparent?: boolean; }"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:null,description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Form/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}try{InputRaw.displayName="InputRaw",InputRaw.__docgenInfo={description:"",displayName:"InputRaw",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"article"'},{value:'"menu"'},{value:'"circle"'},{value:'"image"'},{value:'"key"'},{value:'"info"'},{value:'"search"'},{value:'"alert-circle"'},{value:'"alert-triangle"'},{value:'"align-left"'},{value:'"apple"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"auditor"'},{value:'"award"'},{value:'"bar-chart-2"'},{value:'"bell"'},{value:'"bell-curve"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"box"'},{value:'"bubble"'},{value:'"bubble-check"'},{value:'"bubble-image"'},{value:'"bubble-pill"'},{value:'"bubble-text"'},{value:'"bulb"'},{value:'"calculator"'},{value:'"charts"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"checkmark-circle-filled"'},{value:'"chevron-down"'},{value:'"chevrons-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-up"'},{value:'"clipboard"'},{value:'"coffee"'},{value:'"collapse"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"download"'},{value:'"edit-3"'},{value:'"edit-3-filled"'},{value:'"edit-square"'},{value:'"education"'},{value:'"expand"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"face-happy"'},{value:'"face-neutral"'},{value:'"face-sad"'},{value:'"file-text"'},{value:'"filled-dot"'},{value:'"film"'},{value:'"flag"'},{value:'"flag-filled"'},{value:'"flask"'},{value:'"flowchart"'},{value:'"folder"'},{value:'"folder-check-filled"'},{value:'"folder-plus"'},{value:'"gift"'},{value:'"google"'},{value:'"hammer-filled"'},{value:'"hash"'},{value:'"headphones"'},{value:'"help-circle"'},{value:'"home"'},{value:'"illustration"'},{value:'"image-broken"'},{value:'"institution"'},{value:'"layers"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"mail"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"med-imaging"'},{value:'"meditricks"'},{value:'"message-circle"'},{value:'"minus"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"percent"'},{value:'"pill"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-circle-filled"'},{value:'"quiz"'},{value:'"reset"'},{value:'"rotate-cw"'},{value:'"search-list"'},{value:'"settings"'},{value:'"share"'},{value:'"shopping-bag"'},{value:'"show-all"'},{value:'"sliders"'},{value:'"smartzoom"'},{value:'"sort"'},{value:'"sort-ascending"'},{value:'"sort-descending"'},{value:'"sort-neutral"'},{value:'"star"'},{value:'"stethoscope"'},{value:'"tag"'},{value:'"text-zoom-reset"'},{value:'"thumbs-up"'},{value:'"timer-off"'},{value:'"timer-on"'},{value:'"trash-2"'},{value:'"twitter"'},{value:'"user"'},{value:'"users"'},{value:'"watch"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'},{value:'"x-circle-filled"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"Set to true to toggle error state",name:"hasError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to true to disabled input",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},areaLabel:{defaultValue:null,description:"",name:"areaLabel",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},autoComplete:{defaultValue:{value:"on"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},privateProps:{defaultValue:{value:"{}"},description:"",name:"privateProps",required:!1,type:{name:"{ isTransparent?: boolean; }"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:null,description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Input/Input.tsx#InputRaw"]={docgenInfo:InputRaw.__docgenInfo,name:"InputRaw",path:"src/components/Form/Input/Input.tsx#InputRaw"})}catch(__react_docgen_typescript_loader_error){}}}]);