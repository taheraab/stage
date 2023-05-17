/*! For license information please see components-Form-Input-Input-stories.546121c9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[2699],{"./.storybook/helpers/createStory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>createStory});const createStory=(args,story)=>(void 0!==args&&(story.args=args),story.parameters={controls:{include:args?Object.keys(args):[]}},story)},"./src/components/Form/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdvancedGrouping:()=>AdvancedGrouping,BasicInput:()=>BasicInput,Disabled:()=>Disabled,Grouping:()=>Grouping,NumberInput:()=>NumberInput,PasswordInput:()=>PasswordInput,WithErrorState:()=>WithErrorState,WithHint:()=>WithHint,WithIcon:()=>WithIcon,WithLabelHint:()=>WithLabelHint,WithLongLabel:()=>WithLongLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Form/Input/Input.tsx"),_FormFieldGroup_FormFieldGroup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/FormFieldGroup/FormFieldGroup.tsx"),_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/helpers/createStory.ts"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Input",component:_Input__WEBPACK_IMPORTED_MODULE_2__.I,parameters:{badges:[_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.QV.UNSTABLE]},args:{name:"name",value:"value",placeholder:"placeholder",hasError:!1,disabled:!1,type:"text",labelHint:"Label hint",hint:"Hint text"},argTypes:{errorMessages:{defaultValue:[]}}},BaseInputTemplate=_ref=>{let{label,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label,...rest})})};BaseInputTemplate.displayName="BaseInputTemplate";const GroupingTemplate=_ref2=>{let{...rest}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_FormFieldGroup_FormFieldGroup__WEBPACK_IMPORTED_MODULE_4__.L,{...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label:"input1",name:"one",value:"input1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label:"input2",name:"one",value:"input2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label:"input3",name:"one",value:"input3"})]})})};GroupingTemplate.displayName="GroupingTemplate";const AdvancedGroupingTemplate=_ref3=>{let{...rest}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_FormFieldGroup_FormFieldGroup__WEBPACK_IMPORTED_MODULE_4__.L,{...rest,label:"Input group",labelHint:"OPTIONAL",errorMessages:["error one","second error"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label:"input1",name:"one",value:"input1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{label:"input2",name:"one",value:"input2"})]})})};AdvancedGroupingTemplate.displayName="AdvancedGroupingTemplate";const BasicInput=BaseInputTemplate.bind({});BasicInput.args={label:"example label"};const PasswordInput=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"password input label",type:"password"},BaseInputTemplate.bind({})),NumberInput=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"number input label",type:"number",value:"199"},BaseInputTemplate.bind({})),WithPlaceholder=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"example label",placeholder:"example placeholder",value:void 0},BaseInputTemplate.bind({})),WithHint=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"example label",hint:"Hint never appears if error present"},BaseInputTemplate.bind({})),WithLabelHint=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"example label",labelHint:"example label hint"},BaseInputTemplate.bind({})),WithLongLabel=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"very very very very very very very very very very very very very very very long label"},BaseInputTemplate.bind({})),Disabled=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"example label",disabled:!0},BaseInputTemplate.bind({})),WithErrorState=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({label:"example label",hasError:!0,errorMessages:["error one","second error"]},BaseInputTemplate.bind({})),Grouping=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)(void 0,GroupingTemplate.bind({})),AdvancedGrouping=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)(void 0,AdvancedGroupingTemplate.bind({})),WithIcon=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_5__.D)({icon:"bulb"},BaseInputTemplate.bind({}));BasicInput.parameters={...BasicInput.parameters,docs:{...BasicInput.parameters?.docs,source:{originalSource:"({\n  label,\n  ...rest\n}) => <div style={{\n  width: 300\n}}>\n    <Input label={label} {...(rest as InputProps)} />\n  </div>",...BasicInput.parameters?.docs?.source}}},PasswordInput.parameters={...PasswordInput.parameters,docs:{...PasswordInput.parameters?.docs,source:{originalSource:'createStory({\n  label: "password input label",\n  type: "password"\n}, BaseInputTemplate.bind({}))',...PasswordInput.parameters?.docs?.source}}},NumberInput.parameters={...NumberInput.parameters,docs:{...NumberInput.parameters?.docs,source:{originalSource:'createStory({\n  label: "number input label",\n  type: "number",\n  value: "199"\n}, BaseInputTemplate.bind({}))',...NumberInput.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:'createStory({\n  label: "example label",\n  placeholder: "example placeholder",\n  value: undefined\n}, BaseInputTemplate.bind({}))',...WithPlaceholder.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:'createStory({\n  label: "example label",\n  hint: "Hint never appears if error present"\n}, BaseInputTemplate.bind({}))',...WithHint.parameters?.docs?.source}}},WithLabelHint.parameters={...WithLabelHint.parameters,docs:{...WithLabelHint.parameters?.docs,source:{originalSource:'createStory({\n  label: "example label",\n  labelHint: "example label hint"\n}, BaseInputTemplate.bind({}))',...WithLabelHint.parameters?.docs?.source}}},WithLongLabel.parameters={...WithLongLabel.parameters,docs:{...WithLongLabel.parameters?.docs,source:{originalSource:'createStory({\n  label: "very very very very very very very very very very very very very very very long label"\n}, BaseInputTemplate.bind({}))',...WithLongLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'createStory({\n  label: "example label",\n  disabled: true\n}, BaseInputTemplate.bind({}))',...Disabled.parameters?.docs?.source}}},WithErrorState.parameters={...WithErrorState.parameters,docs:{...WithErrorState.parameters?.docs,source:{originalSource:'createStory({\n  label: "example label",\n  hasError: true,\n  errorMessages: ["error one", "second error"]\n}, BaseInputTemplate.bind({}))',...WithErrorState.parameters?.docs?.source}}},Grouping.parameters={...Grouping.parameters,docs:{...Grouping.parameters?.docs,source:{originalSource:"createStory(undefined, GroupingTemplate.bind({}))",...Grouping.parameters?.docs?.source}}},AdvancedGrouping.parameters={...AdvancedGrouping.parameters,docs:{...AdvancedGrouping.parameters?.docs,source:{originalSource:"createStory(undefined, AdvancedGroupingTemplate.bind({}))",...AdvancedGrouping.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'createStory({\n  icon: "bulb"\n}, BaseInputTemplate.bind({}))',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["BasicInput","PasswordInput","NumberInput","WithPlaceholder","WithHint","WithLabelHint","WithLongLabel","Disabled","WithErrorState","Grouping","AdvancedGrouping","WithIcon"]},"./src/components/Form/FormFieldGroup/FormFieldGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>FormFieldGroup});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Stack/Stack.tsx")),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Form/FormErrorMessages/FormErrorMessages.tsx"),_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Form/FormLabelText/FormLabelText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledDiv=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"eiobxjh0"})((_ref=>{let{theme,disabled}=_ref;return{opacity:disabled?theme.variables.opacity.form.disabled:""}}),"");function FormFieldGroup(_ref2){let{children,label="",labelHint="",errorMessages=[],hint="",disabled=!1,"data-e2e-test-id":dataE2eTestId}=_ref2;const validErrorMessages=errorMessages.filter((message=>message));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledDiv,{disabled,"data-e2e-test-id":dataE2eTestId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__.K,{space:"m",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormLabelText_FormLabelText__WEBPACK_IMPORTED_MODULE_4__.F,{labelHint,children:label}),children,hint&&!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_5__.x,{size:"xs",children:hint}),!!validErrorMessages.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormErrorMessages_FormErrorMessages__WEBPACK_IMPORTED_MODULE_6__.Q,{messages:validErrorMessages})]})})}FormFieldGroup.displayName="FormFieldGroup";try{FormFieldGroup.displayName="FormFieldGroup",FormFieldGroup.__docgenInfo={description:"",displayName:"FormFieldGroup",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},labelHint:{defaultValue:{value:""},description:"",name:"labelHint",required:!1,type:{name:"string"}},errorMessages:{defaultValue:{value:"[]"},description:"",name:"errorMessages",required:!1,type:{name:"string[]"}},hint:{defaultValue:{value:""},description:"",name:"hint",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/FormFieldGroup/FormFieldGroup.tsx#FormFieldGroup"]={docgenInfo:FormFieldGroup.__docgenInfo,name:"FormFieldGroup",path:"src/components/Form/FormFieldGroup/FormFieldGroup.tsx#FormFieldGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Inline/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Inline});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/flattenChildren.ts"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/mediaQueries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={alignItems:"left",space:"xs",noWrap:!1,vAlignItems:"top","data-e2e-test-id":void 0},makeNegative=obj=>Object.entries(obj).map((_ref=>{let[key,value]=_ref;return[key,`-${value}`]})).reduce(((acc,_ref2)=>{let[key,value]=_ref2;return acc[key]=value,acc}),{}),InlineContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o1"})((_ref3=>{let{alignItems,vAlignItems,space,vSpace,theme,noWrap}=_ref3;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({alignItems:[vAlignItems,{top:"flex-start",bottom:"flex-end",center:"center",spaceBetween:"space-between"}],justifyContent:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}],marginLeft:[space,makeNegative(theme.variables.size.spacing)],marginTop:[vSpace,makeNegative(theme.variables.size.spacing)]}),display:"flex",flexDirection:"row",flexWrap:noWrap?"nowrap":"wrap"}}),""),InlineItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1tnky2o0"})((_ref4=>{let{theme,space,vSpace}=_ref4;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({marginTop:[vSpace,theme.variables.size.spacing],marginLeft:[space,theme.variables.size.spacing]}),"&:empty":{marginTop:0,marginLeft:0}}}),"");function Inline(_ref5){let{children,alignItems,vAlignItems,space,vSpace=space,noWrap,"data-e2e-test-id":dataE2eTestId}=_ref5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineContainer,{"data-e2e-test-id":dataE2eTestId,alignItems,vAlignItems,space,vSpace,noWrap,children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map((0,_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__.I)(children),(child=>child&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineItem,{space,vSpace,children:child})))})}Inline.displayName="Inline",Inline.defaultProps=defaultProps;try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{space:{defaultValue:{value:"xs"},description:"Represents the spacing between the Inline's children.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"space",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},vSpace:{defaultValue:null,description:"Represents the vertical spacing between the Inline's children. It overrides the inherited vertical spacing from `space` if set.\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"vSpace",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alignItems:{defaultValue:{value:"left"},description:"Represents elements' horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] or one alignItems for all screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},vAlignItems:{defaultValue:{value:"top"},description:"Represents elements' vertical alignment\nspecify [small screen vAlignItems, medium screen vAlignItems, large screen vAlignItems] or one vAlignItems for all screen sizes",name:"vAlignItems",required:!1,type:{name:'"center" | "spaceBetween" | "top" | "bottom" | MQ<"center" | "spaceBetween" | "top" | "bottom">'}},noWrap:{defaultValue:{value:"false"},description:"Set to true to disable wrapping property",name:"noWrap",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inline/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"src/components/Inline/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/flattenChildren.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>flattenChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-is/index.js");const flattenChildren=function(children){let depth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,keys=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(node)?acc.push(...flattenChildren(node.props.children,depth+1,keys.concat(String(node.key||nodeIndex)))):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)?acc.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}exports.isFragment=function(a){return y(a)===d}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);