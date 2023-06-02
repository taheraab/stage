/*! For license information please see components-Form-Radio-Radio-stories-mdx.a1601688.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[4062],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Form/Radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Form/FormField/FormField.tsx")),_Inline_Inline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Inline/Inline.tsx"),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1fgddiq2"})((_ref=>{let{theme}=_ref;return{userSelect:"none",display:"block",position:"relative",width:theme.variables.size.dimension.radio.m,height:theme.variables.size.dimension.radio.m,boxSizing:"border-box"}}),""),StyledRealInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("input",{target:"e1fgddiq1"})((()=>({opacity:0,cursor:"pointer",position:"absolute",width:0,height:0})),""),StyledFakeInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"e1fgddiq0"})((_ref2=>{let{theme}=_ref2;return{boxSizing:"border-box",width:theme.variables.size.dimension.radio.m,height:theme.variables.size.dimension.radio.m,borderRadius:theme.variables.size.borderRadius.radio.m,border:"2px solid",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",cursor:"pointer",background:theme.values.color.background.radio.default,borderColor:theme.values.color.border.radio.default,"& div":{opacity:0,borderRadius:"50%",width:theme.variables.size.dimension.radioPoint.m,height:theme.variables.size.dimension.radioPoint.m,background:theme.values.color.icon.radio.default},"&:hover, input:checked + &":{borderColor:theme.values.color.border.radio.defaultHover},"input:checked + &":{background:theme.values.color.background.radio.checked,"&:hover":{background:theme.values.color.background.radio.checkedHover},"& div":{opacity:1}},"focus-visible + &":{outlineWidth:"2px",outlineStyle:"solid",outlineColor:"Highlight"},"@media (-webkit-min-device-pixel-ratio:0)":{"focus-visible + &":{outlineColor:"-webkit-focus-ring-color",outlineStyle:"auto"}}}}),"");function Radio(_ref3){let{name,value="",checked,label="",disabled=!1,onChange,onClick,onBlur,onFocus,"data-e2e-test-id":dataE2eTestId,...rest}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__.W,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":"Radio",...rest,disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Inline_Inline__WEBPACK_IMPORTED_MODULE_4__.g,{space:"m",vAlignItems:"top",noWrap:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledRealInput,{type:"radio",name,value,checked,disabled,onChange,onClick,onBlur,onFocus}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledFakeInput,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{})})]}),"string"==typeof label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__.x,{children:label}):label]})})}Radio.displayName="Radio";try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"undefined"},description:"",name:"checked",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"(string | ComponentType<{}>) & string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: FormEvent<HTMLInputElement>) => void"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},errorMessages:{defaultValue:null,description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:null,description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/Form/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Inline/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Inline});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/flattenChildren.ts"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/mediaQueries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={alignItems:"left",space:"xs",noWrap:!1,vAlignItems:"top","data-e2e-test-id":void 0,"data-ds-id":"Inline"},makeNegative=obj=>Object.entries(obj).map((_ref=>{let[key,value]=_ref;return[key,`-${value}`]})).reduce(((acc,_ref2)=>{let[key,value]=_ref2;return acc[key]=value,acc}),{}),InlineContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o1"})((_ref3=>{let{alignItems,vAlignItems,space,vSpace,theme,noWrap}=_ref3;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({alignItems:[vAlignItems,{top:"flex-start",bottom:"flex-end",center:"center",spaceBetween:"space-between"}],justifyContent:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}],marginLeft:[space,makeNegative(theme.variables.size.spacing)],marginTop:[vSpace,makeNegative(theme.variables.size.spacing)]}),display:"flex",flexDirection:"row",flexWrap:noWrap?"nowrap":"wrap"}}),""),InlineItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o0"})((_ref4=>{let{theme,space,vSpace}=_ref4;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({marginTop:[vSpace,theme.variables.size.spacing],marginLeft:[space,theme.variables.size.spacing]}),"&:empty":{marginTop:0,marginLeft:0}}}),"");function Inline(_ref5){let{children,alignItems,vAlignItems,space,vSpace=space,noWrap,"data-e2e-test-id":dataE2eTestId,"data-ds-id":dataDsId}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineContainer,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":dataDsId,alignItems,vAlignItems,space,vSpace,noWrap,children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map((0,_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__.I)(children),(child=>child&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineItem,{space,vSpace,children:child})))})}Inline.displayName="Inline",Inline.defaultProps=defaultProps;try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{space:{defaultValue:{value:"xs"},description:"Represents the spacing between the Inline's children.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"space",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},vSpace:{defaultValue:null,description:"Represents the vertical spacing between the Inline's children. It overrides the inherited vertical spacing from `space` if set.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"vSpace",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alignItems:{defaultValue:{value:"left"},description:"Represents elements' horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] or one alignItems for all screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},vAlignItems:{defaultValue:{value:"top"},description:"Represents elements' vertical alignment\nspecify [small screen vAlignItems, medium screen vAlignItems, large screen vAlignItems] or one vAlignItems for all screen sizes",name:"vAlignItems",required:!1,type:{name:'"center" | "spaceBetween" | "top" | "bottom" | MQ<"center" | "spaceBetween" | "top" | "bottom">'}},noWrap:{defaultValue:{value:"false"},description:"Set to true to disable wrapping property",name:"noWrap",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:{value:"Inline"},description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inline/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"src/components/Inline/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/flattenChildren.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>flattenChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-is/index.js");const flattenChildren=function(children){let depth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,keys=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(node)?acc.push(...flattenChildren(node.props.children,depth+1,keys.concat(String(node.key||nodeIndex)))):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)?acc.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])},"./src/components/Form/Radio/Radio.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Radio__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/Radio/Radio.tsx"),_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Form/Radio/Radio",parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.UNSTABLE]},component:_Radio__WEBPACK_IMPORTED_MODULE_4__.Y,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",blockquote:"blockquote",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Form/Radio/Radio",component:_Radio__WEBPACK_IMPORTED_MODULE_4__.Y,parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.UNSTABLE]}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radio",children:"Radio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Since input component is just a visual, it's expected from a consumer to\ncreate a wrapper in order to align with form framework of choice."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{of:_Radio__WEBPACK_IMPORTED_MODULE_4__.Y}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-radio-usage",children:"Basic Radio usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is very basic usage of Radio."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"form-radio--basic-radio"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-error-and-hint",children:"With error and hint"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Radio accepts an array of error messages, that will be displayed in stack."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note that hint and errors can't be set together. Error messages always have a priority."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"form-radio--error-state"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"form-radio--with-hint"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grouping",children:"Grouping"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All you need to do is to wrap all your radios with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<FormFieldGroup />"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It's usually a good idea to give all the radios the same name."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"form-radio--grouping"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"advanced-grouping",children:"Advanced Grouping"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["More info in the documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<FormFieldGroup />"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"form-radio--advanced-grouping"})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}exports.isFragment=function(a){return y(a)===d}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);