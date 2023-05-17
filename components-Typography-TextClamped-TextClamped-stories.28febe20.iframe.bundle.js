"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[3296],{"./.storybook/helpers/mqArg.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MA:()=>mqArg,mi:()=>mqArgType});const createLabel=value=>`[${value.join(", ")}]`,mqArgType=runtype=>{const allValues=runtype.alternatives.map((_ref=>{let{value}=_ref;return value})),permutations=((arr,len)=>{const base=arr.length,counter=Array(len).fill(1===base?arr[0]:0);if(1===base)return[counter];const combos=[],increment=i=>{counter[i]===base-1?(counter[i]=0,increment(i-1)):counter[i]+=1};for(let i=base**len;i--;){const combo=[];for(let j=0;j<counter.length;j+=1)combo.push(arr[counter[j]]);combos.push(combo),increment(counter.length-1)}return combos})(allValues,3).filter((arr=>!arr.every((val=>val===arr[0]))));return{options:[...allValues,...permutations.map((p=>createLabel(p)))],mapping:[...allValues,...permutations].reduce(((acc,v)=>"string"==typeof v?(acc[v]=v,acc):(acc[createLabel(v)]=v,acc)),{}),control:{type:"select"}}},mqArg=value=>createLabel(value)},"./src/components/Typography/TextClamped/TextClamped.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _TextClamped__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/TextClamped/TextClamped.tsx"),_storybook_helpers_mqArg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/helpers/mqArg.ts"),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/types/index.ts"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/TextClamped",component:_TextClamped__WEBPACK_IMPORTED_MODULE_2__.I,parameters:{badges:[_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.QV.SUBTHEMED]},argTypes:{children:{table:{disable:!0}},hyphens:(0,_storybook_helpers_mqArg__WEBPACK_IMPORTED_MODULE_4__.mi)(_types__WEBPACK_IMPORTED_MODULE_5__.wp)},args:{as:"p",size:"m",weight:"normal",transform:"none",variant:"secondary",align:"left",hyphens:"none"}},BaseTextClampedTemplate=_ref=>{let{lines,text,...textProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:800},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextClamped__WEBPACK_IMPORTED_MODULE_2__.I,{lines,...textProps,children:text})})};BaseTextClampedTemplate.displayName="BaseTextClampedTemplate";const Default=BaseTextClampedTemplate.bind({});Default.args={text:"Renin-angiotensin-aldosterone system (RAAS) inhibitors are a group of drugs that act by inhibiting the renin-angiotensin-aldosterone system (RAAS) and include angiotensin-converting enzyme inhibitors (ACE inhibitors), angiotensin-receptor blockers (ARBs), and direct renin inhibitors.",lines:1,size:"m"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  lines,\n  text,\n  ...textProps\n}) => <div style={{\n  width: 800\n}}>\n    <TextClamped lines={lines} {...textProps}>\n      {text}\n    </TextClamped>\n  </div>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Typography/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/mediaQueries.ts");const defaultProps={size:"m",weight:"normal",transform:"none",as:"p",variant:"secondary",align:"left",hyphens:"none","data-e2e-test-id":void 0},Text=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("p",{shouldForwardProp:prop=>(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__.Z)(prop)&&"transform"!==prop,target:"efktmsx0"})((_ref=>{let{theme,align,weight,size,transform,hyphens,variant}=_ref;return{fontFamily:theme.variables.fontFamily.lato,margin:0,textTransform:transform,textAlign:align,"font-weight":String(theme.variables.weight[weight]),color:theme.values.color.text[variant],fontSize:theme.variables.size.font.text[size],lineHeight:theme.variables.size.lineHeight.text[size],...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__.mq)({hyphens:[hyphens,{none:"none",auto:"auto",manual:"manual"}]})}}),"");Text.defaultProps=defaultProps;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:'ElementType<any> & ("p" | "span")'}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"black"'},{value:'"inherit"'}]}},transform:{defaultValue:{value:"none"},description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"info"'},{value:'"error"'},{value:'"warning"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hyphens:{defaultValue:{value:"none"},description:"",name:"hyphens",required:!1,type:{name:'"auto" | "none" | "manual" | MQ<"auto" | "none" | "manual">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/TextClamped/TextClamped.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TextClamped});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Typography/Text/Text.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"e7ey0cg0"})((_ref=>{let{lines,theme,size}=_ref;return{display:"-webkit-box","-webkit-box-orient":"vertical",overflow:"hidden",WebkitLineClamp:lines,maxHeight:lines*parseInt(theme.variables.size.lineHeight.text[size],10)}}),"");function TextClamped(props){const{lines,children,"data-e2e-test-id":dataE2eTestId,...textProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x,{"data-e2e-test-id":dataE2eTestId,...textProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{lines,size:textProps.size,children})})}TextClamped.displayName="TextClamped",TextClamped.defaultProps={lines:1,size:"m"};try{TextClamped.displayName="TextClamped",TextClamped.__docgenInfo={description:"",displayName:"TextClamped",props:{size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"black"'},{value:'"inherit"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"info"'},{value:'"error"'},{value:'"warning"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hyphens:{defaultValue:null,description:"",name:"hyphens",required:!1,type:{name:'"auto" | "none" | "manual" | MQ<"auto" | "none" | "manual">'}},"data-e2e-test-id":{defaultValue:null,description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},lines:{defaultValue:{value:"1"},description:"The maximum number of lines. Default is 1.",name:"lines",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/TextClamped/TextClamped.tsx#TextClamped"]={docgenInfo:TextClamped.__docgenInfo,name:"TextClamped",path:"src/components/Typography/TextClamped/TextClamped.tsx#TextClamped"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HB:()=>SpaceSizesRuntype,_O:()=>HorizontalAlignmentRuntype,g6:()=>TextAlignmentRuntype,hP:()=>VerticalAlignmentRuntype,wp:()=>HyphensRuntype});var runtypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/runtypes/lib/index.js");(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"));const TextAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("left"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("right"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center")),HorizontalAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("left"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("right"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("spaceBetween")),VerticalAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("top"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("bottom"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("spaceBetween")),SpaceSizesRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("zero"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xxs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xl"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xxl")),BaseVariationsRuntype=((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(1),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(2),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(3),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(4),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(5),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(6),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(7),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(8),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(9),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(10),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(11),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(12),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("narrow"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("fill")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("start"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("end")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("first"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("last"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("unset")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("primary"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("secondary"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("tertiary"))),HyphensRuntype=((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype,(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype,(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("inherit")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("success"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("none"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("manual")));(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"))}}]);