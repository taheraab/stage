/*! For license information please see components-Collapsible-Collapsible-stories.3d767ab1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[9215],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./.storybook/helpers/createStory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>createStory});const createStory=(args,story)=>(void 0!==args&&(story.args=args),story.parameters={controls:{include:args?Object.keys(args):[]}},story)},"./.storybook/helpers/skipArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>skipArgs});const skipArgs=argsToSkip=>argsToSkip.reduce(((acc,arg)=>({...acc,[arg]:{table:{disable:!0}}})),{})},"./src/components/Collapsible/Collapsible.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExpandedOnDefault:()=>ExpandedOnDefault,HeaderWithIcon:()=>HeaderWithIcon,LongText:()=>LongText,MultipleCollapsible:()=>MultipleCollapsible,SingleCollapsible:()=>SingleCollapsible,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./.storybook/helpers/createStory.ts"),_storybook_helpers_skipArgs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/helpers/skipArgs.ts"),_Collapsible__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Collapsible/Collapsible.tsx"),_Box_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Box/Box.tsx"),_Card_Card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Card/Card.tsx"),_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Card/CardBox.tsx"),_Divider_Divider__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Divider/Divider.tsx"),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Typography/Text/Text.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Inline_Inline__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Inline/Inline.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Collapsible",component:_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,parameters:{badges:[_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.QV.SUBTHEMED]},argTypes:{...(0,_storybook_helpers_skipArgs__WEBPACK_IMPORTED_MODULE_4__.c)(["children","onClick"]),header:{type:"string"},isExpanded:!1}},BaseCollapsibletTemplate=_ref=>{let{header,content}=_ref;const[isExpanded,setIsExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:150,width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_5__.Z,{squareCorners:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__.S,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>{setIsExpanded(!isExpanded)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content})})]})})})})};BaseCollapsibletTemplate.displayName="BaseCollapsibletTemplate";const LongTextCollapsibleTemplate=_ref2=>{let{header,content}=_ref2;const[isExpanded,setIsExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:150,width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_5__.Z,{squareCorners:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__.S,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>{setIsExpanded(!isExpanded)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content})})]})})})})};LongTextCollapsibleTemplate.displayName="LongTextCollapsibleTemplate";const ExpandedCollapsibleTemplate=_ref3=>{let{header,content}=_ref3;const[isExpanded,setIsExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:150,width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_5__.Z,{squareCorners:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__.S,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>{setIsExpanded(!isExpanded)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content})})]})})})})};ExpandedCollapsibleTemplate.displayName="ExpandedCollapsibleTemplate";const CollapsibleWithIconTemplate=_ref4=>{let{header,content}=_ref4;const[isExpanded,setIsExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:150,width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_5__.Z,{squareCorners:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__.S,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>{setIsExpanded(!isExpanded)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Inline_Inline__WEBPACK_IMPORTED_MODULE_9__.g,{noWrap:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.J,{name:"article",variant:"tertiary",inline:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content})})]})})})})};CollapsibleWithIconTemplate.displayName="CollapsibleWithIconTemplate";const MultipleCollapsibleTemplate=_ref5=>{let{header,header2,header3,content,content2,content3}=_ref5;const[isExpanded,setIsExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),toggleExpanded=id=>{const nextValue=!isExpanded[id];setIsExpanded((current=>({...current,[id]:nextValue})))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:200,width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_5__.Z,{squareCorners:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Card_CardBox__WEBPACK_IMPORTED_MODULE_6__.S,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded:isExpanded[1],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>toggleExpanded(1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider_Divider__WEBPACK_IMPORTED_MODULE_11__.i,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded:isExpanded[2],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>toggleExpanded(2),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header2})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content2})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider_Divider__WEBPACK_IMPORTED_MODULE_11__.i,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.zF,{isExpanded:isExpanded[3],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Collapsible__WEBPACK_IMPORTED_MODULE_2__.cV,{space:"xs",lSpace:"l",rSpace:"l",onClick:()=>toggleExpanded(3),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:header3})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_8__.x,{space:["m","l"],vSpace:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_7__.x,{children:content3})})]})]})})})};MultipleCollapsibleTemplate.displayName="MultipleCollapsibleTemplate";const SingleCollapsible=BaseCollapsibletTemplate.bind({});SingleCollapsible.args={header:"Example header 1",content:"...text content of single collapsible..."};const LongText=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_12__.D)({header:"Long text example header",content:"I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world. I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world. I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world. "},LongTextCollapsibleTemplate.bind({})),ExpandedOnDefault=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_12__.D)({isExpanded:!0,header:"Expanded header",content:"I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world."},ExpandedCollapsibleTemplate.bind({})),HeaderWithIcon=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_12__.D)({header:"Header with icon",content:"I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world."},CollapsibleWithIconTemplate.bind({})),MultipleCollapsible=(0,_storybook_helpers_createStory__WEBPACK_IMPORTED_MODULE_12__.D)({header:"Example header 1",header2:"Example header 2",header3:"Example header 3",content:"I think there's an artist hidden in every single one of us. I sincerely wish for you every possible joy life could bring. In painting, you have unlimited power. You have the ability to move mountains. It just happens - whether or not you worried about it or tried to plan it. Put your feelings into it, your heart, it's your world.",content2:"...text content of second collapsible...",content3:"...text content of third collapsible..."},MultipleCollapsibleTemplate.bind({}));SingleCollapsible.parameters={...SingleCollapsible.parameters,docs:{...SingleCollapsible.parameters?.docs,source:{originalSource:'({\n  header,\n  content\n}) => {\n  const [isExpanded, setIsExpanded] = useState(false);\n  return <div style={{\n    height: 150,\n    width: 800\n  }}>\n      <Card squareCorners>\n        <CardBox>\n          <Collapsible isExpanded={isExpanded}>\n            <CollapsibleHeader space="xs" lSpace="l" rSpace="l" onClick={() => {\n            setIsExpanded(!isExpanded);\n          }}>\n              <Text>{header}</Text>\n            </CollapsibleHeader>\n            <Box space={["m", "l"]} vSpace="s">\n              <Text>{content}</Text>\n            </Box>\n          </Collapsible>\n        </CardBox>\n      </Card>\n    </div>;\n}',...SingleCollapsible.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:"createStory({\n  ...longTextExample\n}, LongTextCollapsibleTemplate.bind({}))",...LongText.parameters?.docs?.source}}},ExpandedOnDefault.parameters={...ExpandedOnDefault.parameters,docs:{...ExpandedOnDefault.parameters?.docs,source:{originalSource:"createStory({\n  isExpanded: true,\n  ...singleExpandedExample\n}, ExpandedCollapsibleTemplate.bind({}))",...ExpandedOnDefault.parameters?.docs?.source}}},HeaderWithIcon.parameters={...HeaderWithIcon.parameters,docs:{...HeaderWithIcon.parameters?.docs,source:{originalSource:"createStory({\n  ...headerWithIconExample\n}, CollapsibleWithIconTemplate.bind({}))",...HeaderWithIcon.parameters?.docs?.source}}},MultipleCollapsible.parameters={...MultipleCollapsible.parameters,docs:{...MultipleCollapsible.parameters?.docs,source:{originalSource:"createStory({\n  ...multipleExample\n}, MultipleCollapsibleTemplate.bind({}))",...MultipleCollapsible.parameters?.docs?.source}}};const __namedExportsOrder=["SingleCollapsible","LongText","ExpandedOnDefault","HeaderWithIcon","MultipleCollapsible"]},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),Stack=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Stack/Stack.tsx")),Inline=__webpack_require__("./src/components/Inline/Inline.tsx"),Header=__webpack_require__("./src/components/Typography/Header/Header.tsx"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),Divider=__webpack_require__("./src/components/Divider/Divider.tsx"),Box=__webpack_require__("./src/components/Box/Box.tsx"),DropdownMenu=__webpack_require__("./src/components/DropdownMenu/DropdownMenu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledHeaderWrap=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ehgetke0"})({padding:"6px 0"},"");function CardHeader(_ref){let{title,subtitle,button,dropdown,"data-e2e-test-id":dataE2eTestId}=_ref;return(0,jsx_runtime.jsxs)("div",{"data-e2e-test-id":dataE2eTestId,children:[(0,jsx_runtime.jsx)(Box.x,{space:["m","l","l"],vSpace:"s",rSpace:"s",children:(0,jsx_runtime.jsxs)(Inline.g,{alignItems:"spaceBetween",vAlignItems:"top",noWrap:!0,children:[(0,jsx_runtime.jsxs)(Stack.K,{space:"xs",children:[title&&(0,jsx_runtime.jsx)(StyledHeaderWrap,{children:(0,jsx_runtime.jsx)(Header.H5,{children:title})}),subtitle&&(0,jsx_runtime.jsx)(Text.x,{size:"xs",as:"span",variant:"tertiary",children:subtitle})]}),button&&(0,jsx_runtime.jsx)("div",{children:button}),dropdown&&(0,jsx_runtime.jsx)(DropdownMenu.h,{...dropdown,size:"s",iconName:"more-horizontal"})]})}),(0,jsx_runtime.jsx)(Divider.i,{})]})}CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"@deprecated *",name:"subtitle",required:!1,type:{name:"string"}},dropdown:{defaultValue:null,description:"",name:"dropdown",required:!1,type:{name:'Omit<DropdownMenuProps, "size" | "iconName">'}},button:{defaultValue:null,description:"@deprecated *",name:"button",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/CardHeader/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/Card/CardHeader/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}var informDeprecation=__webpack_require__("./src/shared/informDeprecation.ts");const StyledContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"eieabd00"})((_ref=>{let{theme,overflow,squareCorners}=_ref;return{...squareCorners?{borderRadius:0}:{borderRadius:theme.variables.size.borderRadius.card.m,"& > *:last-child":{borderBottomLeftRadius:theme.variables.size.borderRadius.card.m,borderBottomRightRadius:theme.variables.size.borderRadius.card.m},"& > *:first-child":{borderTopLeftRadius:theme.variables.size.borderRadius.card.m,borderTopRightRadius:theme.variables.size.borderRadius.card.m}},boxShadow:theme.variables.shadow.card.a,backgroundColor:theme.values.color.background.layer_2,overflow}}),"");function Card(_ref2){let{title,subtitle,button,dropdown,children,overflow="hidden",squareCorners=!1,"data-e2e-test-id":dataE2eTestId}=_ref2;return(0,informDeprecation.M)(subtitle,subtitle,"Card","Subtitle is now a depricated prop, please discuss a workaround with any of UX designers"),(0,informDeprecation.M)(button,button,"Card","Button is deprecated, please use dropdown property instead"),(0,jsx_runtime.jsxs)(StyledContainer,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":"Card",overflow,squareCorners,children:[(button||dropdown||subtitle||title)&&(0,jsx_runtime.jsx)(CardHeader,{title,subtitle,button,dropdown}),children]})}Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"Specify title displayed in Header",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"@deprecated Subtitle is now deprecated",name:"subtitle",required:!1,type:{name:"string"}},button:{defaultValue:null,description:"@deprecated button property is deprecated now. Please use dropdown prop.",name:"button",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},dropdown:{defaultValue:null,description:"",name:"dropdown",required:!1,type:{name:'Omit<DropdownMenuProps, "size" | "iconName">'}},overflow:{defaultValue:{value:"hidden"},description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'}]}},squareCorners:{defaultValue:{value:"false"},description:"",name:"squareCorners",required:!1,type:{name:"boolean"}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/CardBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>CardBox});__webpack_require__("./node_modules/react/index.js");var _Box_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardBox(_ref){let{children,"data-e2e-test-id":dataE2eTestId}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box__WEBPACK_IMPORTED_MODULE_2__.x,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":"CardBox",space:["m","l","l"],vSpace:"m",children})}CardBox.displayName="CardBox";try{CardBox.displayName="CardBox",CardBox.__docgenInfo={description:"",displayName:"CardBox",props:{"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/CardBox.tsx#CardBox"]={docgenInfo:CardBox.__docgenInfo,name:"CardBox",path:"src/components/Card/CardBox.tsx#CardBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/flattenChildren.ts"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/mediaQueries.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={space:"xs","data-e2e-test-id":void 0,"data-ds-id":"Stack"},StackContainer=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"earxui51"})((_ref=>{let{alignItems}=_ref;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({alignItems:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}]}),display:"flex",flexDirection:"column"}}),""),StackItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"earxui50"})((_ref2=>{let{theme,space}=_ref2;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_3__.mq)({marginTop:[space,theme.variables.size.spacing]}),"&:first-of-type":{marginTop:0},"&:empty":{marginTop:0}}}),"");function Stack(_ref3){let{children,space,alignItems,"data-e2e-test-id":dataE2eTestId,"data-ds-id":dataDsId}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackContainer,{"data-e2e-test-id":dataE2eTestId,"data-ds-id":dataDsId,alignItems,children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map((0,_shared_flattenChildren__WEBPACK_IMPORTED_MODULE_4__.I)(children),(child=>child&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackItem,{space,children:child})))})}Stack.displayName="Stack",Stack.defaultProps=defaultProps;try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{space:{defaultValue:{value:"xs"},description:"Represents the vertical between the Stack's children\nspecify [small screen space, medium screen space, large screen space] or one space for all screen sizes",name:"space",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alignItems:{defaultValue:null,description:"Represents elements' horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] or one alignItems for all screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:{value:"Stack"},description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stack/Stack.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Stack/Stack.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/mediaQueries.ts");const defaultProps={size:"m",weight:"normal",transform:"none",as:"p",variant:"secondary",align:"left",hyphens:"none","data-e2e-test-id":void 0,"data-ds-id":"Text"},Text=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("p",{shouldForwardProp:prop=>(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__.Z)(prop)&&"transform"!==prop,target:"efktmsx0"})((_ref=>{let{theme,align,weight,size,transform,hyphens,variant}=_ref;return{fontFamily:theme.variables.fontFamily.lato,margin:0,textTransform:transform,textAlign:align,"font-weight":String(theme.variables.weight[weight]),color:theme.values.color.text[variant],fontSize:theme.variables.size.font.text[size],lineHeight:theme.variables.size.lineHeight.text[size],...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__.mq)({hyphens:[hyphens,{none:"none",auto:"auto",manual:"manual"}]})}}),"");Text.defaultProps=defaultProps;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:'ElementType<any> & ("p" | "span")'}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"bold"'},{value:'"normal"'},{value:'"black"'}]}},transform:{defaultValue:{value:"none"},description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"info"'},{value:'"error"'},{value:'"warning"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hyphens:{defaultValue:{value:"none"},description:"",name:"hyphens",required:!1,type:{name:'"none" | "auto" | "manual" | MQ<"none" | "auto" | "manual">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:{value:"Text"},description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/informDeprecation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>informDeprecation});const informDeprecation=function(property,value,location){let details=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";void 0!==property&&property===value&&console.error(`value ${JSON.stringify(value)} is depricated in ${location} \n ${details}`)}},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js")}}]);