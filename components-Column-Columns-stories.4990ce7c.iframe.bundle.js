"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[7564],{"./.storybook/components/StyledBoxes.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fz:()=>TallBox,Nj:()=>WideBox,gK:()=>ShortBox,nm:()=>NarrowBox,xT:()=>ColoredBox});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ColoredBox(_ref){let{index,color,height,width,padding,as="box",children}=_ref;const defaultStyle={height:height||100,background:color||"pink",padding:padding||0},boxStyle="box"===as?{width:width||100}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{...defaultStyle,...boxStyle,textAlign:"center"},children:index||children},index)}function NarrowBox(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColoredBox,{width:20,color:"lavender"})}function WideBox(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColoredBox,{width:200,color:"lavender"})}function ShortBox(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColoredBox,{height:20,color:"lavender"})}function TallBox(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColoredBox,{height:200,color:"lavender"})}ColoredBox.displayName="ColoredBox",NarrowBox.displayName="NarrowBox",WideBox.displayName="WideBox",ShortBox.displayName="ShortBox",TallBox.displayName="TallBox";try{ColoredBox.displayName="ColoredBox",ColoredBox.__docgenInfo={description:"",displayName:"ColoredBox",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},as:{defaultValue:{value:"box"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"box"'},{value:'"column"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StyledBoxes.tsx#ColoredBox"]={docgenInfo:ColoredBox.__docgenInfo,name:"ColoredBox",path:".storybook/components/StyledBoxes.tsx#ColoredBox"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/helpers/createStory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>createStory});const createStory=(args,story)=>(void 0!==args&&(story.args=args),story.parameters={controls:{include:args?Object.keys(args):[]}},story)},"./.storybook/helpers/mqArg.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MA:()=>mqArg,mi:()=>mqArgType});const createLabel=value=>`[${value.join(", ")}]`,mqArgType=runtype=>{const allValues=runtype.alternatives.map((_ref=>{let{value}=_ref;return value})),permutations=((arr,len)=>{const base=arr.length,counter=Array(len).fill(1===base?arr[0]:0);if(1===base)return[counter];const combos=[],increment=i=>{counter[i]===base-1?(counter[i]=0,increment(i-1)):counter[i]+=1};for(let i=base**len;i--;){const combo=[];for(let j=0;j<counter.length;j+=1)combo.push(arr[counter[j]]);combos.push(combo),increment(counter.length-1)}return combos})(allValues,3).filter((arr=>!arr.every((val=>val===arr[0]))));return{options:[...allValues,...permutations.map((p=>createLabel(p)))],mapping:[...allValues,...permutations].reduce(((acc,v)=>"string"==typeof v?(acc[v]=v,acc):(acc[createLabel(v)]=v,acc)),{}),control:{type:"select"}}},mqArg=value=>createLabel(value)},"./.storybook/helpers/skipArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>skipArgs});const skipArgs=argsToSkip=>argsToSkip.reduce(((acc,arg)=>({...acc,[arg]:{table:{disable:!0}}})),{})},"./src/components/Column/Columns.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignColumns:()=>AlignColumns,AlwaysFillSpace:()=>AlwaysFillSpace,ColumnOrder:()=>ColumnOrder,ColumnsPreview:()=>ColumnsPreview,ColumnsWithGap:()=>ColumnsWithGap,NarrowColumns:()=>NarrowColumns,NestedColumns:()=>NestedColumns,ResponsiveColumns:()=>ResponsiveColumns,TwelveGridSystem:()=>TwelveGridSystem,WrapContent:()=>WrapContent,__namedExportsOrder:()=>Columns_stories_namedExportsOrder,default:()=>Columns_stories});__webpack_require__("./node_modules/react/index.js");var createStory=__webpack_require__("./.storybook/helpers/createStory.ts"),skipArgs=__webpack_require__("./.storybook/helpers/skipArgs.ts"),mqArg=__webpack_require__("./.storybook/helpers/mqArg.ts"),types=__webpack_require__("./src/types/index.ts"),Columns=__webpack_require__("./src/components/Column/Columns.tsx"),StyledBoxes=__webpack_require__("./.storybook/components/StyledBoxes.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColoredColumn=_ref=>{let{index,children}=_ref;return(0,jsx_runtime.jsx)(StyledBoxes.xT,{as:"column",index,children})};ColoredColumn.displayName="ColoredColumn";const TallColumn=_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)(StyledBoxes.xT,{as:"column",height:150,children})};TallColumn.displayName="TallColumn";const VeryTallColumn=_ref3=>{let{children}=_ref3;return(0,jsx_runtime.jsx)(StyledBoxes.xT,{as:"column",height:200,children})};VeryTallColumn.displayName="VeryTallColumn";try{ColoredColumn.displayName="ColoredColumn",ColoredColumn.__docgenInfo={description:"",displayName:"ColoredColumn",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StyledColumns.tsx#ColoredColumn"]={docgenInfo:ColoredColumn.__docgenInfo,name:"ColoredColumn",path:".storybook/components/StyledColumns.tsx#ColoredColumn"})}catch(__react_docgen_typescript_loader_error){}try{TallColumn.displayName="TallColumn",TallColumn.__docgenInfo={description:"",displayName:"TallColumn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StyledColumns.tsx#TallColumn"]={docgenInfo:TallColumn.__docgenInfo,name:"TallColumn",path:".storybook/components/StyledColumns.tsx#TallColumn"})}catch(__react_docgen_typescript_loader_error){}try{VeryTallColumn.displayName="VeryTallColumn",VeryTallColumn.__docgenInfo={description:"",displayName:"VeryTallColumn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StyledColumns.tsx#VeryTallColumn"]={docgenInfo:VeryTallColumn.__docgenInfo,name:"VeryTallColumn",path:".storybook/components/StyledColumns.tsx#VeryTallColumn"})}catch(__react_docgen_typescript_loader_error){}const Columns_stories={title:"Layout/Columns",component:Columns.o,args:{gap:"zero",alwaysFillSpace:!1,alignItems:"left",vAlignItems:"top"},argTypes:{...(0,skipArgs.c)(["children","theme","as","data-e2e-test-id"]),gap:(0,mqArg.mi)(types.HB),alignItems:(0,mqArg.mi)(types._O),vAlignItems:(0,mqArg.mi)(types.hP)}},BaseColumnTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:5,children:(0,jsx_runtime.jsx)(ColoredColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:5,children:(0,jsx_runtime.jsx)(TallColumn,{})})]})});BaseColumnTemplate.displayName="BaseColumnTemplate";const TwelveGridTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[Array.from(Array(12).keys()).map((i=>(0,jsx_runtime.jsx)(Columns.s,{size:1,children:(0,jsx_runtime.jsx)(ColoredColumn,{index:i+1})},i))),(0,jsx_runtime.jsx)(Columns.s,{size:12,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size 12"})}),(0,jsx_runtime.jsx)(Columns.s,{size:5,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size 5"})})]})});TwelveGridTemplate.displayName="TwelveGridTemplate";const GapTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{})})]})});GapTemplate.displayName="GapTemplate";const ColumnWrapTemplate=_ref=>{let{gap}=_ref;return(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{gap,children:[(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"column 1. size 6."})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsxs)(ColoredColumn,{children:["column 2. size 6.",(0,jsx_runtime.jsx)("br",{}),"together with column 1 it makes size equal 12, which fits in one row."]})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsxs)(ColoredColumn,{children:["column 3. size 4. ",(0,jsx_runtime.jsx)("br",{}),"in sum with columns 1 and 2. it makes size more than 12, so it wraps."]})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{})})]})})};ColumnWrapTemplate.displayName="ColumnWrapTemplate";const NestedColumnsTemplate=()=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{gap:"xl",children:[(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 6. Not nested."})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsxs)(Columns.o,{gap:"s",children:[(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsxs)(ColoredColumn,{children:[" ","size: 6. Nested in Column of size: 6"," "]})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsxs)(ColoredColumn,{children:[" ","size: 6. Nested in Column of size: 6"," "]})}),(0,jsx_runtime.jsx)(Columns.s,{size:6,children:(0,jsx_runtime.jsxs)(ColoredColumn,{children:["size: 6. Nested in Column of size: 6. They can wrap!"," "]})})]})})]})});NestedColumnsTemplate.displayName="NestedColumnsTemplate";const AlignColumnTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(VeryTallColumn,{})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{})})]})});AlignColumnTemplate.displayName="AlignColumnTemplate";const MediaQueryTemplate=_ref2=>{let{...rest}=_ref2;return(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...rest,gap:["s","m","l"],alignItems:["right","center","left"],vAlignItems:["bottom","center"],children:[(0,jsx_runtime.jsx)(Columns.s,{size:[12,6,4],children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 12 on small, 6 on medium, 4 on large screens"})}),(0,jsx_runtime.jsx)(Columns.s,{size:[12,6,4],children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 12 on small, 6 on medium, 4 on large screens"})})]})})};MediaQueryTemplate.displayName="MediaQueryTemplate";const FillSpaceTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 4"})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 4"})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 4"})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 4"})}),(0,jsx_runtime.jsx)(Columns.s,{size:4,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"size: 4"})})]})});FillSpaceTemplate.displayName="FillSpaceTemplate";const OrderTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:3,order:["last","unset","unset"],children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"1. last order on small, unset on medium, unset on large screens"})}),(0,jsx_runtime.jsx)(Columns.s,{size:3,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"2."})}),(0,jsx_runtime.jsx)(Columns.s,{size:3,order:"first",children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"3. first order"})}),(0,jsx_runtime.jsx)(Columns.s,{size:3,children:(0,jsx_runtime.jsx)(ColoredColumn,{children:"4. "})})]})});OrderTemplate.displayName="OrderTemplate";const NarrowColumnTemplate=props=>(0,jsx_runtime.jsx)("div",{style:{width:800,border:"1px solid gray"},children:(0,jsx_runtime.jsxs)(Columns.o,{...props,children:[(0,jsx_runtime.jsx)(Columns.s,{size:"narrow",children:(0,jsx_runtime.jsx)(TallColumn,{children:"Narrow column"})}),(0,jsx_runtime.jsx)(Columns.s,{size:"fill",children:(0,jsx_runtime.jsx)(TallColumn,{})})]})});NarrowColumnTemplate.displayName="NarrowColumnTemplate";const ColumnsPreview=BaseColumnTemplate.bind({});ColumnsPreview.args={gap:"l"};const TwelveGridSystem=(0,createStory.D)({gap:"s"},TwelveGridTemplate.bind({})),WrapContent=(0,createStory.D)({gap:"s"},ColumnWrapTemplate.bind({})),ColumnsWithGap=(0,createStory.D)({gap:"xl"},GapTemplate.bind({}));WrapContent.argTypes=(0,skipArgs.c)(["alwaysFillSpace","alignItems","vAlignItems"]);const AlignColumns=AlignColumnTemplate.bind({});AlignColumns.args={gap:"l",vAlignItems:"bottom",alignItems:"center"},AlignColumns.argTypes=(0,skipArgs.c)(["alwaysFillSpace"]);const AlwaysFillSpace=FillSpaceTemplate.bind({});AlwaysFillSpace.args={gap:"l",alwaysFillSpace:!0},AlwaysFillSpace.argTypes=(0,skipArgs.c)(["alignItems","vAlignItems"]);const ColumnOrder=OrderTemplate.bind({});ColumnOrder.args={gap:"l"};const ResponsiveColumns=(0,createStory.D)(void 0,MediaQueryTemplate.bind({}));ResponsiveColumns.parameters.controls.hideNoControlsWarning=!0;const NestedColumns=(0,createStory.D)(void 0,NestedColumnsTemplate.bind({}));NestedColumns.parameters.controls.hideNoControlsWarning=!0;const NarrowColumns=(0,createStory.D)({gap:"l"},NarrowColumnTemplate.bind({}));ColumnsPreview.parameters={...ColumnsPreview.parameters,docs:{...ColumnsPreview.parameters?.docs,source:{originalSource:"props => <div style={{\n  width: 800,\n  border: `1px solid gray`\n}}>\n    <Columns {...props}>\n      <Column size={5}>\n        <ColoredColumn />\n      </Column>\n      <Column size={5}>\n        <TallColumn />\n      </Column>\n    </Columns>\n  </div>",...ColumnsPreview.parameters?.docs?.source}}},TwelveGridSystem.parameters={...TwelveGridSystem.parameters,docs:{...TwelveGridSystem.parameters?.docs,source:{originalSource:'createStory({\n  gap: "s"\n}, TwelveGridTemplate.bind({}))',...TwelveGridSystem.parameters?.docs?.source}}},WrapContent.parameters={...WrapContent.parameters,docs:{...WrapContent.parameters?.docs,source:{originalSource:'createStory({\n  gap: "s"\n}, ColumnWrapTemplate.bind({}))',...WrapContent.parameters?.docs?.source}}},ColumnsWithGap.parameters={...ColumnsWithGap.parameters,docs:{...ColumnsWithGap.parameters?.docs,source:{originalSource:'createStory({\n  gap: "xl"\n}, GapTemplate.bind({}))',...ColumnsWithGap.parameters?.docs?.source}}},AlignColumns.parameters={...AlignColumns.parameters,docs:{...AlignColumns.parameters?.docs,source:{originalSource:"props => <div style={{\n  width: 800,\n  border: `1px solid gray`\n}}>\n    <Columns {...props}>\n      <Column size={4}>\n        <VeryTallColumn />\n      </Column>\n      <Column size={4}>\n        <ColoredColumn />\n      </Column>\n    </Columns>\n  </div>",...AlignColumns.parameters?.docs?.source}}},AlwaysFillSpace.parameters={...AlwaysFillSpace.parameters,docs:{...AlwaysFillSpace.parameters?.docs,source:{originalSource:"props => <div style={{\n  width: 800,\n  border: `1px solid gray`\n}}>\n    <Columns {...props}>\n      <Column size={4}>\n        <ColoredColumn>size: 4</ColoredColumn>\n      </Column>\n      <Column size={4}>\n        <ColoredColumn>size: 4</ColoredColumn>\n      </Column>\n      <Column size={4}>\n        <ColoredColumn>size: 4</ColoredColumn>\n      </Column>\n      <Column size={4}>\n        <ColoredColumn>size: 4</ColoredColumn>\n      </Column>\n      <Column size={4}>\n        <ColoredColumn>size: 4</ColoredColumn>\n      </Column>\n    </Columns>\n  </div>",...AlwaysFillSpace.parameters?.docs?.source}}},ColumnOrder.parameters={...ColumnOrder.parameters,docs:{...ColumnOrder.parameters?.docs,source:{originalSource:'props => <div style={{\n  width: 800,\n  border: `1px solid gray`\n}}>\n    <Columns {...props}>\n      <Column size={3} order={["last", "unset", "unset"]}>\n        <ColoredColumn>\n          1. last order on small, unset on medium, unset on large screens\n        </ColoredColumn>\n      </Column>\n      <Column size={3}>\n        <ColoredColumn>2.</ColoredColumn>\n      </Column>\n      <Column size={3} order="first">\n        <ColoredColumn>3. first order</ColoredColumn>\n      </Column>\n      <Column size={3}>\n        <ColoredColumn>4. </ColoredColumn>\n      </Column>\n    </Columns>\n  </div>',...ColumnOrder.parameters?.docs?.source}}},ResponsiveColumns.parameters={...ResponsiveColumns.parameters,docs:{...ResponsiveColumns.parameters?.docs,source:{originalSource:"createStory(undefined, MediaQueryTemplate.bind({}))",...ResponsiveColumns.parameters?.docs?.source}}},NestedColumns.parameters={...NestedColumns.parameters,docs:{...NestedColumns.parameters?.docs,source:{originalSource:"createStory(undefined, NestedColumnsTemplate.bind({}))",...NestedColumns.parameters?.docs?.source}}},NarrowColumns.parameters={...NarrowColumns.parameters,docs:{...NarrowColumns.parameters?.docs,source:{originalSource:'createStory({\n  gap: "l"\n}, NarrowColumnTemplate.bind({}))',...NarrowColumns.parameters?.docs?.source}}};const Columns_stories_namedExportsOrder=["ColumnsPreview","TwelveGridSystem","WrapContent","ColumnsWithGap","AlignColumns","AlwaysFillSpace","ColumnOrder","ResponsiveColumns","NestedColumns","NarrowColumns"]},"./src/components/Column/Columns.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Columns,s:()=>Column});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/mediaQueries.ts");const defaultProps={gap:"zero",alwaysFillSpace:!1,alignItems:"left",vAlignItems:"top","data-e2e-test-id":void 0,"data-ds-id":"Columns"},columnDefaultProps={size:"auto","data-e2e-test-id":void 0,alignSelf:"auto","data-ds-id":"Column"},columnWidthObject=new Array(12).fill("").reduce(((acc,_,index)=>({...acc,[index+1]:100*(index+1)/12+"%"})),{}),makeNegative=obj=>Object.entries(obj).map((_ref=>{let[key,value]=_ref;return[key,`-${value}`]})).reduce(((acc,_ref2)=>{let[key,value]=_ref2;return acc[key]=value,acc}),{}),Column=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1pdebaf1"})((_ref3=>{let{size,order,alignSelf}=_ref3;return{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.mq)({width:[size,{...columnWidthObject,fill:"1px"}],flex:[size,{narrow:"none",auto:"1",fill:void 0}],order:[order,{first:"-1",last:"1",unset:"0"}],flexShrink:[size,{fill:1,auto:void 0,narrow:void 0}],flexGrow:[size,{fill:1,auto:void 0,narrow:void 0}],alignSelf:[alignSelf,{auto:"auto",start:"start",center:"center",end:"end"}]}),boxSizing:"border-box","&:empty":{width:0,flex:"none"}}}),"");Column.defaultProps=columnDefaultProps;const Columns=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1pdebaf0"})((_ref4=>{let{theme,alignItems,vAlignItems,gap}=_ref4;return{width:"auto",display:"flex",justifyItems:"stretch",justifyContent:"stretch",alignItems:"stretch",flexWrap:"wrap",flexDirection:"row",...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.mq)({alignItems:[vAlignItems,{top:"flex-start",bottom:"flex-end",center:"center",spaceBetween:"space-between"}],justifyContent:[alignItems,{left:"flex-start",right:"flex-end",center:"center",spaceBetween:"space-between"}],marginRight:[gap,makeNegative(theme.variables.size.spacing)],marginBottom:[gap,makeNegative(theme.variables.size.spacing)]}),[Column]:{...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_1__.mq)({marginBottom:[gap,theme.variables.size.spacing],paddingRight:[gap,theme.variables.size.spacing]})}}}),(_ref5=>{let{alwaysFillSpace}=_ref5;return alwaysFillSpace&&{[Column]:{"&:last-child":{flexGrow:1,flexShrink:1}}}}),"");Columns.defaultProps=defaultProps;try{Column.displayName="Column",Column.__docgenInfo={description:"",displayName:"Column",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},size:{defaultValue:{value:"auto"},description:"represents the size of the column, can be a single number or an array of 3 numbers with a value ranging from 1 to 12\nspecify [small screen column size, medium screen column size, large screen column size] to apply different values for different screen sizes",name:"size",required:!1,type:{name:'1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 12 | "fill" | "auto" | 9 | 10 | 11 | "narrow" | MQ<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 12 | "fill" | "auto" | 9 | 10 | 11 | "narrow">'}},order:{defaultValue:null,description:"specify the visual positioning of the column. [small screen column order, medium screen column order, large screen column order] to apply different order for different screen sizes",name:"order",required:!1,type:{name:'"unset" | "first" | "last" | MQ<"unset" | "first" | "last">'}},alignSelf:{defaultValue:{value:"auto"},description:"",name:"alignSelf",required:!1,type:{name:'"center" | "end" | "auto" | "start" | MQ<"center" | "end" | "auto" | "start">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:{value:"Columns"},description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Column/Columns.tsx#Column"]={docgenInfo:Column.__docgenInfo,name:"Column",path:"src/components/Column/Columns.tsx#Column"})}catch(__react_docgen_typescript_loader_error){}try{Columns.displayName="Columns",Columns.__docgenInfo={description:"",displayName:"Columns",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},gap:{defaultValue:{value:"zero"},description:"represents the size of both horizontal and vertical gap between children, can be a single string or an array of 3 strings\nspecify [small screen gap size, medium screen gap size, large screen gap size] to apply different gap sizes for different screen sizes",name:"gap",required:!1,type:{name:'"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | MQ<"zero" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl">'}},alwaysFillSpace:{defaultValue:{value:"false"},description:"set to true if you want the last element to fill the space",name:"alwaysFillSpace",required:!1,type:{name:"boolean"}},alignItems:{defaultValue:{value:"left"},description:"specify horizontal alignment\nspecify [small screen alignItems, medium screen alignItems, large screen alignItems] to apply different alignItems for different screen sizes",name:"alignItems",required:!1,type:{name:'"left" | "right" | "center" | "spaceBetween" | MQ<"left" | "right" | "center" | "spaceBetween">'}},vAlignItems:{defaultValue:{value:"top"},description:"specify vertical alignment\nspecify [small screen vAlignItems, medium screen vAlignItems, large screen vAlignItems] to apply different vAlignItems for different screen sizes",name:"vAlignItems",required:!1,type:{name:'"center" | "spaceBetween" | "top" | "bottom" | MQ<"center" | "spaceBetween" | "top" | "bottom">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}},"data-ds-id":{defaultValue:{value:"Columns"},description:"@ignore",name:"data-ds-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Column/Columns.tsx#Columns"]={docgenInfo:Columns.__docgenInfo,name:"Columns",path:"src/components/Column/Columns.tsx#Columns"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/mediaQueries.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,a:()=>mqValue});const _breakpoints_namespaceObject=JSON.parse('[0,{"S3":768},{"S3":1280}]');const mq=function getMq(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref=>{let[cssProperty,[prop,map]]=_ref;if(Array.isArray(prop)){const sm=prop[0],md=prop[1]||prop[0],lg=prop[2]||prop[1]||prop[0],[s,m,l]=keys;res[s][cssProperty]=map[sm],res[m][cssProperty]=map[md],res[l][cssProperty]=map[lg]}else res["@media screen"][cssProperty]=map[prop]})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`]);const mqValue=function getMqValue(breakpointRules){const keys=breakpointRules;return rules=>{const res={};return keys.forEach((key=>{res[key]={}})),res["@media screen"]={},Object.entries(rules).forEach((_ref2=>{let[cssProperty,cssValues]=_ref2;Array.isArray(cssValues)?breakpointRules.forEach(((breakpoint,index)=>{let i=index;for(;!cssValues[i]&&0!==i;)i-=1;res[breakpoint][cssProperty]=cssValues[i]})):res["@media screen"][cssProperty]=cssValues})),res}}([`@media (max-width: ${_breakpoints_namespaceObject[1].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[1].S3}px) and (max-width: ${_breakpoints_namespaceObject[2].S3}px)`,`@media (min-width: ${_breakpoints_namespaceObject[2].S3}px)`])},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HB:()=>SpaceSizesRuntype,_O:()=>HorizontalAlignmentRuntype,g6:()=>TextAlignmentRuntype,hP:()=>VerticalAlignmentRuntype,wp:()=>HyphensRuntype});var runtypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/runtypes/lib/index.js");(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"));const TextAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("left"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("right"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center")),HorizontalAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("left"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("right"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("spaceBetween")),VerticalAlignmentRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("top"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("bottom"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("spaceBetween")),SpaceSizesRuntype=(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("zero"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xxs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xs"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xl"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("xxl")),BaseVariationsRuntype=((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(1),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(2),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(3),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(4),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(5),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(6),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(7),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(8),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(9),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(10),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(11),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)(12),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("narrow"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("fill")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("start"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("center"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("end")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("first"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("last"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("unset")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("primary"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("secondary"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("tertiary"))),HyphensRuntype=((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype,(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype,(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("inherit")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("info"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("success"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("error"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("warning")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)(BaseVariationsRuntype),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("l")),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("auto"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("none"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("manual")));(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Union)((0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("s"),(0,runtypes__WEBPACK_IMPORTED_MODULE_0__.Literal)("m"))}}]);