"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[4962],{"./src/components/Typography/StyledText/StyledText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Paragraphs:()=>Paragraphs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _StyledText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/StyledText/StyledText.tsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/StyledText",component:_StyledText__WEBPACK_IMPORTED_MODULE_2__.q,parameters:{badges:[_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.QV.SUBTHEMED]}},BaseStyledTextTemplate=_ref=>{let{text1,text2,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{width:800},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_4__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_StyledText__WEBPACK_IMPORTED_MODULE_2__.q,{...rest,children:text1})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_4__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_StyledText__WEBPACK_IMPORTED_MODULE_2__.q,{...rest,children:text2})})]})};BaseStyledTextTemplate.displayName="BaseStyledTextTemplate";const Default=BaseStyledTextTemplate.bind({});Default.args={text1:"<b>Phosphate <i>(H<sub>2</sub>PO<sub>4</sub><sup>-</sup>, HPO<sub>4</sub><sup>2-</sup>)</i></b> reference range:",text2:"3.0–4.5 mg/dL <small>(1.0–1.5 mmol/L)</small>"};const Paragraphs=BaseStyledTextTemplate.bind({});Paragraphs.args={text1:"<p>This is a paragraph</p>",text2:"<p>This is another paragraph</p>"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  text1,\n  text2,\n  ...rest\n}) => <div style={{\n  width: 800\n}}>\n    <Text>\n      <StyledText {...rest}>{text1}</StyledText>\n    </Text>\n    <Text>\n      <StyledText {...rest}>{text2}</StyledText>\n    </Text>\n  </div>",...Default.parameters?.docs?.source}}},Paragraphs.parameters={...Paragraphs.parameters,docs:{...Paragraphs.parameters?.docs,source:{originalSource:"({\n  text1,\n  text2,\n  ...rest\n}) => <div style={{\n  width: 800\n}}>\n    <Text>\n      <StyledText {...rest}>{text1}</StyledText>\n    </Text>\n    <Text>\n      <StyledText {...rest}>{text2}</StyledText>\n    </Text>\n  </div>",...Paragraphs.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Paragraphs"]}}]);