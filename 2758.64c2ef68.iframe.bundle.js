"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[2758],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_Inline_Inline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Inline/Inline.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("button",{shouldForwardProp:prop=>(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__.Z)(prop),target:"e1vkw3t43"})((_ref=>{let{theme,fullWidth,size,squareCorners,variant}=_ref;return{"&[type='button']":{appearance:"none",MozAppearance:"none",WebkitAppearance:"none"},display:"inline-block",border:0,margin:0,color:theme.values.color.text.button[variant].base,backgroundColor:theme.values.color.background.button[variant].base,textTransform:"none",textDecoration:"none",borderRadius:theme.variables.size.borderRadius.button.m,fontFamily:theme.variables.fontFamily.lato,fontSize:theme.variables.size.font.button.m,lineHeight:theme.variables.size.lineHeight.button.m,fontWeight:theme.variables.weight.bold,cursor:"pointer","&:hover":{backgroundColor:theme.values.color.background.button[variant].hover,color:theme.values.color.text.button[variant].hover},"&:active":{backgroundColor:theme.values.color.background.button[variant].active,color:theme.values.color.text.button[variant].active},"&:disabled":{backgroundColor:theme.values.color.background.button[variant].disabled,color:theme.values.color.text.button[variant].disabled},..."s"===size&&{padding:`${theme.variables.size.spacing.xs} ${theme.variables.size.spacing.m}`},..."m"===size&&{padding:`${theme.variables.size.spacing.s} ${theme.variables.size.spacing.l}`},..."l"===size&&{padding:`${theme.variables.size.spacing.m} ${theme.variables.size.spacing.xl}`},..."secondary"===variant&&{border:"1px solid",borderColor:theme.values.color.border.button.secondary.base,":hover":{borderColor:theme.values.color.border.button.secondary.hover},":active":{borderColor:theme.values.color.border.button.secondary.active},":disabled":{borderColor:theme.values.color.border.button.secondary.disabled},..."s"===size&&{padding:`${parseInt(theme.variables.size.spacing.xs,10)-1}px ${parseInt(theme.variables.size.spacing.m,10)-1}px`},..."m"===size&&{padding:`${parseInt(theme.variables.size.spacing.s,10)-1}px ${parseInt(theme.variables.size.spacing.l,10)-1}px`},..."l"===size&&{padding:`${parseInt(theme.variables.size.spacing.m,10)-1}px ${parseInt(theme.variables.size.spacing.xl,10)-1}px`}},..."tertiary"===variant&&{fontSize:theme.variables.size.font.header.xxs,lineHeight:theme.variables.size.lineHeight.header.xxs,letterSpacing:.5,textTransform:"uppercase",..."s"===size&&{padding:theme.variables.size.spacing.xs},..."m"===size&&{padding:theme.variables.size.spacing.s},..."l"===size&&{padding:theme.variables.size.spacing.m}},...fullWidth&&{width:"100%"},...squareCorners&&"boolean"==typeof squareCorners?{borderRadius:0}:squareCorners&&"boolean"!=typeof squareCorners&&{...squareCorners.reduce(((prev,actual)=>({...prev,[`border${actual}Radius`]:0})),{})},"&[disabled], &:disabled":{pointerEvents:"none"}}}),""),StyledInner=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1vkw3t42"})((_ref2=>{let{loading}=_ref2;return loading&&{color:"transparent"}}),""),StyledLoaderWrap=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1vkw3t41"})((()=>({position:"relative",width:"100%",height:"100%",top:0,left:"0",display:"flex",justifyContent:"center"})),""),rotation=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),StyledLoader=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1vkw3t40"})((()=>({position:"absolute",animation:`${rotation} 1s infinite linear`})),""),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((_ref3,ref)=>{let{"data-e2e-test-id":dataE2eTestId,ariaAttributes,as,children,disabled=!1,fullWidth=!1,leftIcon,loading=!1,onBlur,onClick,onFocus,privateProps={squareCorners:!1},rightIcon,size="m",type="button",variant="primary",...rest}=_ref3;const{squareCorners,alignItems,rightIconVariant}=privateProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledButton,{ref,"data-e2e-test-id":dataE2eTestId,as,disabled:disabled||loading,type:as&&"button"!==as?void 0:type,fullWidth,squareCorners,variant,size,onClick:function handleClick(e){disabled&&e.preventDefault(),onClick&&onClick(e)},onFocus,onBlur,...ariaAttributes,...rest,children:[loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledLoaderWrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledLoader,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.J,{size:"s",name:"loader",variant,"data-testid":"loader"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledInner,{loading:loading?1:0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Inline_Inline__WEBPACK_IMPORTED_MODULE_6__.g,{vAlignItems:"center",alignItems:alignItems||"center",space:"xxs",noWrap:!0,children:[leftIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.J,{size:"s",name:leftIcon,"data-testid":leftIcon,"data-e2e-test-id":leftIcon}),children,rightIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.J,{size:"s",name:rightIcon,variant:rightIconVariant,"data-testid":rightIcon,"data-e2e-test-id":rightIcon})]})})]})}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},type:{defaultValue:{value:"button"},description:'Type is ignored if "a" is provided to "as" property. Note that you can explicetly pass null.',name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"When loading is true, disabled is set to true as well.",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"alert-circle"'},{value:'"alert-triangle"'},{value:'"align-left"'},{value:'"apple"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"article"'},{value:'"auditor"'},{value:'"award"'},{value:'"bar-chart-2"'},{value:'"bell"'},{value:'"bell-curve"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"box"'},{value:'"bubble"'},{value:'"bubble-check"'},{value:'"bubble-image"'},{value:'"bubble-pill"'},{value:'"bubble-text"'},{value:'"bulb"'},{value:'"calculator"'},{value:'"charts"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"checkmark-circle-filled"'},{value:'"chevron-down"'},{value:'"chevrons-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-up"'},{value:'"circle"'},{value:'"clipboard"'},{value:'"coffee"'},{value:'"collapse"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"download"'},{value:'"edit-3"'},{value:'"edit-3-filled"'},{value:'"edit-square"'},{value:'"education"'},{value:'"expand"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"face-happy"'},{value:'"face-neutral"'},{value:'"face-sad"'},{value:'"file-text"'},{value:'"filled-dot"'},{value:'"film"'},{value:'"flag"'},{value:'"flag-filled"'},{value:'"flask"'},{value:'"flowchart"'},{value:'"folder"'},{value:'"folder-check-filled"'},{value:'"folder-plus"'},{value:'"gift"'},{value:'"google"'},{value:'"hammer-filled"'},{value:'"hash"'},{value:'"headphones"'},{value:'"help-circle"'},{value:'"home"'},{value:'"illustration"'},{value:'"image"'},{value:'"image-broken"'},{value:'"info"'},{value:'"institution"'},{value:'"key"'},{value:'"layers"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"mail"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"med-imaging"'},{value:'"meditricks"'},{value:'"menu"'},{value:'"message-circle"'},{value:'"minus"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"percent"'},{value:'"pill"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-circle-filled"'},{value:'"quiz"'},{value:'"reset"'},{value:'"rotate-cw"'},{value:'"search"'},{value:'"search-list"'},{value:'"settings"'},{value:'"share"'},{value:'"shopping-bag"'},{value:'"show-all"'},{value:'"sliders"'},{value:'"smartzoom"'},{value:'"sort"'},{value:'"sort-ascending"'},{value:'"sort-descending"'},{value:'"sort-neutral"'},{value:'"star"'},{value:'"stethoscope"'},{value:'"tag"'},{value:'"text-zoom-reset"'},{value:'"thumbs-up"'},{value:'"timer-off"'},{value:'"timer-on"'},{value:'"trash-2"'},{value:'"twitter"'},{value:'"user"'},{value:'"users"'},{value:'"watch"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'},{value:'"x-circle-filled"'}]}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"alert-circle"'},{value:'"alert-triangle"'},{value:'"align-left"'},{value:'"apple"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"article"'},{value:'"auditor"'},{value:'"award"'},{value:'"bar-chart-2"'},{value:'"bell"'},{value:'"bell-curve"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"box"'},{value:'"bubble"'},{value:'"bubble-check"'},{value:'"bubble-image"'},{value:'"bubble-pill"'},{value:'"bubble-text"'},{value:'"bulb"'},{value:'"calculator"'},{value:'"charts"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"checkmark-circle-filled"'},{value:'"chevron-down"'},{value:'"chevrons-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chevrons-up"'},{value:'"circle"'},{value:'"clipboard"'},{value:'"coffee"'},{value:'"collapse"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-left"'},{value:'"corner-down-right"'},{value:'"download"'},{value:'"edit-3"'},{value:'"edit-3-filled"'},{value:'"edit-square"'},{value:'"education"'},{value:'"expand"'},{value:'"external-link"'},{value:'"eye"'},{value:'"eye-off"'},{value:'"facebook"'},{value:'"face-happy"'},{value:'"face-neutral"'},{value:'"face-sad"'},{value:'"file-text"'},{value:'"filled-dot"'},{value:'"film"'},{value:'"flag"'},{value:'"flag-filled"'},{value:'"flask"'},{value:'"flowchart"'},{value:'"folder"'},{value:'"folder-check-filled"'},{value:'"folder-plus"'},{value:'"gift"'},{value:'"google"'},{value:'"hammer-filled"'},{value:'"hash"'},{value:'"headphones"'},{value:'"help-circle"'},{value:'"home"'},{value:'"illustration"'},{value:'"image"'},{value:'"image-broken"'},{value:'"info"'},{value:'"institution"'},{value:'"key"'},{value:'"layers"'},{value:'"list"'},{value:'"loader"'},{value:'"lock"'},{value:'"mail"'},{value:'"maximize"'},{value:'"maximize-2"'},{value:'"med-imaging"'},{value:'"meditricks"'},{value:'"menu"'},{value:'"message-circle"'},{value:'"minus"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"percent"'},{value:'"pill"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-circle-filled"'},{value:'"quiz"'},{value:'"reset"'},{value:'"rotate-cw"'},{value:'"search"'},{value:'"search-list"'},{value:'"settings"'},{value:'"share"'},{value:'"shopping-bag"'},{value:'"show-all"'},{value:'"sliders"'},{value:'"smartzoom"'},{value:'"sort"'},{value:'"sort-ascending"'},{value:'"sort-descending"'},{value:'"sort-neutral"'},{value:'"star"'},{value:'"stethoscope"'},{value:'"tag"'},{value:'"text-zoom-reset"'},{value:'"thumbs-up"'},{value:'"timer-off"'},{value:'"timer-on"'},{value:'"trash-2"'},{value:'"twitter"'},{value:'"user"'},{value:'"users"'},{value:'"watch"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'},{value:'"x-circle-filled"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},privateProps:{defaultValue:{value:"{ squareCorners: false }"},description:"",name:"privateProps",required:!1,type:{name:"ButtonPrivateProps"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},ariaAttributes:{defaultValue:null,description:"Additional aria attributes. [see documentation](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/02549c083e9d62b604091d770c4568d47282cdd0/types/react/index.d.ts#L1461)",name:"ariaAttributes",required:!1,type:{name:"AriaAttributes"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Inline/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Inline});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/flattenChildren.ts"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/mediaQueries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={alignItems:"left",space:"xs",noWrap:!1,vAlignItems:"top","data-e2e-test-id":void 0},makeNegative=obj=>Object.entries(obj).map((_ref=>{let[key,value]=_ref;return[key,`-${value}`]})).reduce(((acc,_ref2)=>{let[key,value]=_ref2;return acc[key]=value,acc}),{}),InlineContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o1"})((_ref3=>{let{alignItems,vAlignItems,space,vSpace,theme,noWrap}=_ref3;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({alignItems:[vAlignItems,{top:"flex-start",bottom:"flex-end",center:"center",spaceBetween:"space-between"}],justifyContent:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}],marginLeft:[space,makeNegative(theme.variables.size.spacing)],marginTop:[vSpace,makeNegative(theme.variables.size.spacing)]}),display:"flex",flexDirection:"row",flexWrap:noWrap?"nowrap":"wrap"}}),""),InlineItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o0"})((_ref4=>{let{theme,space,vSpace}=_ref4;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({marginTop:[vSpace,theme.variables.size.spacing],marginLeft:[space,theme.variables.size.spacing]}),"&:empty":{marginTop:0,marginLeft:0}}}),"");function Inline(_ref5){let{children,alignItems,vAlignItems,space,vSpace=space,noWrap,"data-e2e-test-id":dataE2eTestId}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineContainer,{"data-e2e-test-id":dataE2eTestId,alignItems,vAlignItems,space,vSpace,noWrap,children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map((0,_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__.I)(children),(child=>child&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineItem,{space,vSpace,children:child})))})}Inline.displayName="Inline",Inline.defaultProps=defaultProps;try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{space:{defaultValue:{value:"xs"},description:"Represents the spacing between the Inline's children.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"space",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},vSpace:{defaultValue:null,description:"Represents the vertical spacing between the Inline's children. It overrides the inherited vertical spacing from `space` if set.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"vSpace",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alignItems:{defaultValue:{value:"left"},description:"Represents elements' horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] or one alignItems for all screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},vAlignItems:{defaultValue:{value:"top"},description:"Represents elements' vertical alignment\nspecify [small screen vAlignItems, medium screen vAlignItems, large screen vAlignItems] or one vAlignItems for all screen sizes",name:"vAlignItems",required:!1,type:{name:'"center" | "spaceBetween" | "top" | "bottom" | MQ<"center" | "spaceBetween" | "top" | "bottom">'}},noWrap:{defaultValue:{value:"false"},description:"Set to true to disable wrapping property",name:"noWrap",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inline/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"src/components/Inline/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/flattenChildren.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>flattenChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-is/index.js");const flattenChildren=function(children){let depth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,keys=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(node)?acc.push(...flattenChildren(node.props.children,depth+1,keys.concat(String(node.key||nodeIndex)))):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)?acc.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])}}]);