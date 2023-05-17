"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[2458],{"./src/components/Typography/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js"),_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/mediaQueries.ts");const defaultProps={size:"m",weight:"normal",transform:"none",as:"p",variant:"secondary",align:"left",hyphens:"none","data-e2e-test-id":void 0},Text=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("p",{shouldForwardProp:prop=>(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__.Z)(prop)&&"transform"!==prop,target:"efktmsx0"})((_ref=>{let{theme,align,weight,size,transform,hyphens,variant}=_ref;return{fontFamily:theme.variables.fontFamily.lato,margin:0,textTransform:transform,textAlign:align,"font-weight":String(theme.variables.weight[weight]),color:theme.values.color.text[variant],fontSize:theme.variables.size.font.text[size],lineHeight:theme.variables.size.lineHeight.text[size],...(0,_shared_mediaQueries__WEBPACK_IMPORTED_MODULE_2__.mq)({hyphens:[hyphens,{none:"none",auto:"auto",manual:"manual"}]})}}),"");Text.defaultProps=defaultProps;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:'ElementType<any> & ("p" | "span")'}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"inherit"'},{value:'"normal"'},{value:'"black"'}]}},transform:{defaultValue:{value:"none"},description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"error"'},{value:'"warning"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hyphens:{defaultValue:{value:"none"},description:"",name:"hyphens",required:!1,type:{name:'"auto" | "none" | "manual" | MQ<"auto" | "none" | "manual">'}},"data-e2e-test-id":{defaultValue:{value:"undefined"},description:"",name:"data-e2e-test-id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DropdownMenu/DropdownMenu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownMenu/DropdownMenu.tsx"),_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/DropdownMenu/DropdownMenu",parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.SUBTHEMED]},component:_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.h,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Components/DropdownMenu/DropdownMenu",component:_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.h,parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.SUBTHEMED]}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dropdownmenu",children:"DropdownMenu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A dropdown menu is a compact way of displaying multiple choices. It appears upon interaction with a button. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nIt can be used if you want to show user that there're more actions other than the main CTA to choose from. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nDropdown menu uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<MenuItem/>"})," component which is not exported for public use. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Behaviour:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Interaction with the button opens the menu."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Menu closes when it's not on focus."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Selecting an menu item closes the menu."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Menu is positioned below the button and right aligned by default. If there's not enough space below it is positioned on top of the button."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Keyboard shortcut:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Open menu: enter || space || up || down."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Close menu: escape || enter || space."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Navigate menu items: up || down."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Select menu item: enter || space."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{of:_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.h}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"An array of menu item with its own label and onSelect must be provided."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'overflow="unset'})," is needed if you are using dropdown menu in a card."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--basic"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-label",children:"With label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--with-label"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-different-control-icon",children:"With different control icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--control-icon"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-separator",children:"With separator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--separator"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-menu-item-icon",children:"With menu item icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--menu-icon"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-menu-text-variant-none",children:"With menu text variant none"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--menu-text-variant"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-emphasized-menu-item",children:"With emphasized menu item"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--emphasized"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-disabled-control-button",children:"With disabled control button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--disabled"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-open-and-close-menu-callback",children:"With open and close menu callback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"components-dropdownmenu--open-close-callback"})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);