"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[9306],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ProgressBar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ProgressBar});__webpack_require__("./node_modules/react/index.js");var _SegmentedProgressBar_SegmentedProgressBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SegmentedProgressBar/SegmentedProgressBar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={"data-e2e-test-id":void 0,weight:"fat",squareCorners:!1};function ProgressBar(_ref){let{maxValue,progress,weight,squareCorners,"data-e2e-test-id":dataE2eTestId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SegmentedProgressBar_SegmentedProgressBar__WEBPACK_IMPORTED_MODULE_2__.t,{maxValue,values:{success:progress},weight,squareCorners,"data-e2e-test-id":dataE2eTestId,privateProps:{monochrome:!0}})}ProgressBar.displayName="ProgressBar",ProgressBar.defaultProps=defaultProps;try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{maxValue:{defaultValue:null,description:"The value for 100% progress. Consumer does not need to do percentage calculation.",name:"maxValue",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"The value already progressed. If progress >= maxValue the bar is filled completely",name:"progress",required:!0,type:{name:"number"}},squareCorners:{defaultValue:{value:"false"},description:"",name:"squareCorners",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"fat"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"thin"'},{value:'"fat"'}]}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SegmentedProgressBar/SegmentedProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>SegmentedProgressBar});var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");__webpack_require__("./node_modules/react/index.js");const variants=["success","warning","alert"],getPercentagesForVariants=(maxValue,values)=>{const result=variants.map((variant=>{const percentage=100*values[variant]/maxValue;return percentage>0?{percentage,style:variant}:null})),usedPercentage=result.reduce(((currentValue,item)=>currentValue+(item?item.percentage:0)),0);return usedPercentage<100&&result.push({percentage:100-usedPercentage,style:"inProgress"}),result.filter(Boolean)},sanitizeInputValues=(maxValue,values)=>{const totalFilledValue=(values=>variants.reduce(((currentValue,variant)=>values[variant]&&values[variant]>0?currentValue+values[variant]:currentValue),0))(values),sanitizedMaxValue=maxValue>totalFilledValue?maxValue:totalFilledValue,sanitizedValues={};return variants.forEach((variant=>{sanitizedValues[variant]=values[variant]&&values[variant]>0?values[variant]:0})),{sanitizedMaxValue,sanitizedValues}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={"data-e2e-test-id":void 0,weight:"fat",squareCorners:!1,privateProps:{monochrome:!1}},getBackgroundColor=(theme,style,monochrome)=>{switch(style){case"success":return monochrome?theme.values.color.segementedProgressBar.monochrome:theme.values.color.segementedProgressBar.success;case"warning":return monochrome?theme.values.color.segementedProgressBar.monochrome:theme.values.color.segementedProgressBar.warning;case"alert":return monochrome?theme.values.color.segementedProgressBar.monochrome:theme.values.color.segementedProgressBar.alert;default:return theme.values.color.segementedProgressBar.inProgress}},StyledSegmentedProgressBar=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e101pf3g1"})((_ref=>{let{theme,squareCorners,weight}=_ref;return{width:"100%",display:"flex",flexDirection:"row",borderRadius:squareCorners?0:theme.variables.size.borderRadius.progressBar,overflow:"hidden",height:"thin"===weight?theme.variables.size.spacing.xxs:theme.variables.size.spacing.xs}}),""),StyledSegment=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e101pf3g0"})((_ref2=>{let{theme,styleVariant,percentage,monochrome}=_ref2;return{height:"100%",backgroundColor:getBackgroundColor(theme,styleVariant,monochrome),width:`${percentage}%`}}),"");function SegmentedProgressBar(_ref3){let{maxValue,values,weight,squareCorners,privateProps:{monochrome},"data-e2e-test-id":dataE2eTestId}=_ref3;const{sanitizedMaxValue,sanitizedValues}=sanitizeInputValues(maxValue,values),percentages=getPercentagesForVariants(sanitizedMaxValue,sanitizedValues);return(0,jsx_runtime.jsx)(StyledSegmentedProgressBar,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":"SegmentedProgressBar",squareCorners,weight,children:percentages.map((_ref4=>{let{percentage,style}=_ref4;return(0,jsx_runtime.jsx)(StyledSegment,{"data-e2e-test-id":style,styleVariant:style,monochrome,percentage},style)}))})}SegmentedProgressBar.displayName="SegmentedProgressBar",SegmentedProgressBar.defaultProps=defaultProps;try{SegmentedProgressBar.displayName="SegmentedProgressBar",SegmentedProgressBar.__docgenInfo={description:"",displayName:"SegmentedProgressBar",props:{maxValue:{defaultValue:null,description:"The value for 100% progress. Consumer does not need to do percentage calculation.\nJust pass this number and some values. The progress bar does all percentag calculations",name:"maxValue",required:!0,type:{name:"number"}},values:{defaultValue:null,description:"The values already progressed. Possible ValuesVariants are used to display progress in a different color.\nVariants are:\nsuccess => green;\nwarning => yellow;\nalert => red",name:"values",required:!0,type:{name:"Partial<Record<ValuesVariant, number>>"}},squareCorners:{defaultValue:{value:"false"},description:"",name:"squareCorners",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"fat"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"thin"'},{value:'"fat"'}]}},privateProps:{defaultValue:{value:"{\n    monochrome: false,\n  }"},description:"",name:"privateProps",required:!1,type:{name:"SegmentedProgressBarPrivateProps"}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedProgressBar/SegmentedProgressBar.tsx#SegmentedProgressBar"]={docgenInfo:SegmentedProgressBar.__docgenInfo,name:"SegmentedProgressBar",path:"src/components/SegmentedProgressBar/SegmentedProgressBar.tsx#SegmentedProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressBar/ProgressBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ProgressBar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/ProgressBar/ProgressBar",component:_ProgressBar__WEBPACK_IMPORTED_MODULE_4__.k,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Components/ProgressBar/ProgressBar",component:_ProgressBar__WEBPACK_IMPORTED_MODULE_4__.k}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"progressbar",children:"ProgressBar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A simple progress bar that can be used to display any kind of progress.\nIf the progress value is bigger than maxValue, it is handled gracefully and the maxValue is set to the progress values. Negative progress value is set to 0."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{of:_ProgressBar__WEBPACK_IMPORTED_MODULE_4__.k}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"example-for-basic-usage",children:"Example for basic usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-progressbar--basic-progress-bar"})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);