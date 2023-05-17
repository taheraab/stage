"use strict";(self.webpackChunk_amboss_design_system=self.webpackChunk_amboss_design_system||[]).push([[9002],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");__webpack_require__("./node_modules/react/index.js");const logo_namespaceObject=JSON.parse('{"Q":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"126px\\" height=\\"20px\\" viewBox=\\"0 0 126 20\\" fill=\\"none\\">\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M15.0188 18.4623H3.94949L4.64903 17.1862H14.3193L15.0188 18.4623ZM10.9532 5.68656L16.5579 15.9101H15.0806L10.9451 8.36638L10.2145 9.69852L13.6197 15.9101H5.34857L10.9532 5.68656ZM18.7182 17.1862L10.945 3.00674L10.2228 4.35409L3.88766 15.9101H2.41045L10.2145 1.6741L9.48412 0.341797L0.25 17.1862H3.18812L1.78905 19.7384H17.1793L15.7801 17.1862H18.7182Z\\" fill=\\"#24A3AA\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M29.3489 12.73H37.6512L33.8667 3.63463C33.8055 3.49052 33.7443 3.32732 33.6833 3.14488C33.6222 2.9626 33.561 2.76961 33.5 2.56608C33.4388 2.76961 33.3777 2.9626 33.3167 3.14488C33.2555 3.32732 33.1943 3.4947 33.1333 3.64735L29.3489 12.73ZM41.75 19.2686H40.7155C40.5931 19.2686 40.4929 19.2368 40.4143 19.1731C40.3357 19.1095 40.2745 19.0269 40.231 18.9251L38.044 13.6968H28.9429L26.769 18.9251C26.7341 19.0186 26.6729 19.0991 26.5857 19.1668C26.4984 19.2348 26.3936 19.2686 26.2714 19.2686H25.25L32.8321 1.26855H34.1679L41.75 19.2686Z\\" fill=\\"currentColor\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M53.3401 14.7908C53.3916 14.6552 53.4452 14.5217 53.5011 14.3901C53.5568 14.2587 53.6189 14.1337 53.6878 14.0148L60.8466 1.51025C60.9152 1.40012 60.9838 1.33216 61.0526 1.30672C61.1212 1.28128 61.2156 1.26855 61.3358 1.26855H62.25V19.2686H61.0912V3.92721C61.0912 3.70677 61.1041 3.47361 61.1298 3.22757L53.9582 15.8085C53.8378 16.0291 53.6663 16.1392 53.4431 16.1392H53.237C53.0224 16.1392 52.8509 16.0291 52.722 15.8085L45.3573 3.21484C45.383 3.46089 45.3959 3.69824 45.3959 3.92721V19.2686H44.25V1.26855H45.1512C45.2713 1.26855 45.368 1.28128 45.441 1.30672C45.5138 1.33216 45.5847 1.40012 45.6534 1.51025L53.0054 14.0276C53.1341 14.2651 53.2456 14.5195 53.3401 14.7908Z\\" fill=\\"currentColor\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M68.0576 10.6438V18.2254H72.6089C74.2071 18.2254 75.4123 17.8842 76.2243 17.2014C77.0363 16.5188 77.4421 15.5584 77.4421 14.3201C77.4421 13.7521 77.3332 13.241 77.1153 12.7873C76.8974 12.3338 76.5832 11.9477 76.173 11.6297C75.7628 11.3117 75.2584 11.068 74.6603 10.8982C74.0619 10.7287 73.3823 10.6438 72.6218 10.6438H68.0576ZM68.0576 9.68976H71.9935C72.831 9.68976 73.5468 9.58381 74.1409 9.37173C74.7349 9.15983 75.2222 8.87997 75.6026 8.53216C75.9827 8.18451 76.2628 7.79017 76.4422 7.34912C76.6218 6.90824 76.7115 6.45448 76.7115 5.98799C76.7115 4.77532 76.3246 3.85725 75.5511 3.23393C74.7775 2.6106 73.5832 2.29894 71.9679 2.29894H68.0576V9.68976ZM66.75 19.2686V1.26855H71.9679C73.002 1.26855 73.8974 1.37032 74.6538 1.57386C75.4101 1.77739 76.0361 2.07633 76.532 2.47067C77.0275 2.86502 77.3974 3.34641 77.641 3.91449C77.8844 4.48274 78.0064 5.12732 78.0064 5.84806C78.0064 6.32308 77.923 6.78103 77.7563 7.22191C77.5896 7.66296 77.3481 8.07002 77.032 8.44311C76.7157 8.81637 76.3289 9.14075 75.8717 9.41626C75.4144 9.69193 74.891 9.90183 74.3013 10.0459C75.7286 10.258 76.8268 10.7287 77.596 11.458C78.3653 12.1875 78.75 13.1498 78.75 14.3456C78.75 15.1088 78.6131 15.7958 78.3397 16.4064C78.066 17.017 77.6687 17.5343 77.1474 17.9583C76.6258 18.3824 75.9849 18.7068 75.2243 18.9315C74.4636 19.1562 73.6003 19.2686 72.6346 19.2686H66.75Z\\" fill=\\"currentColor\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M97.367 10.5144C97.367 9.25342 97.19 8.12004 96.8368 7.11448C96.4828 6.10909 95.9849 5.25692 95.3423 4.55812C94.6998 3.85949 93.9262 3.32468 93.0198 2.954C92.1151 2.58333 91.11 2.39799 90.0062 2.39799C88.9194 2.39799 87.9253 2.58333 87.024 2.954C86.1228 3.32468 85.3468 3.85949 84.6959 4.55812C84.0446 5.25692 83.5401 6.10909 83.1823 7.11448C82.8244 8.12004 82.6455 9.25342 82.6455 10.5144C82.6455 11.7842 82.8244 12.9196 83.1823 13.9208C83.5401 14.9222 84.0446 15.7721 84.6959 16.4708C85.3468 17.1696 86.1228 17.7022 87.024 18.0685C87.9253 18.435 88.9194 18.6181 90.0062 18.6181C91.11 18.6181 92.1151 18.435 93.0198 18.0685C93.9262 17.7022 94.6998 17.1696 95.3423 16.4708C95.9849 15.7721 96.4828 14.9222 96.8368 13.9208C97.19 12.9196 97.367 11.7842 97.367 10.5144ZM98.7381 10.5144C98.7381 11.912 98.527 13.1795 98.104 14.317C97.6819 15.4546 97.0862 16.426 96.3194 17.2313C95.5509 18.0365 94.6326 18.6587 93.5636 19.0974C92.4938 19.5364 91.3083 19.7557 90.0062 19.7557C88.7211 19.7557 87.544 19.5364 86.4743 19.0974C85.4052 18.6587 84.4866 18.0365 83.7191 17.2313C82.9515 16.426 82.3544 15.4546 81.9274 14.317C81.5006 13.1795 81.2871 11.912 81.2871 10.5144C81.2871 9.1256 81.5006 7.86222 81.9274 6.72464C82.3544 5.58706 82.9515 4.61564 83.7191 3.81038C84.4866 3.00513 85.4052 2.38101 86.4743 1.93785C87.544 1.49486 88.7211 1.27319 90.0062 1.27319C91.3083 1.27319 92.4938 1.49267 93.5636 1.93146C94.6326 2.37041 95.5509 2.99453 96.3194 3.80399C97.0862 4.61362 97.6819 5.58706 98.104 6.72464C98.527 7.86222 98.7381 9.1256 98.7381 10.5144Z\\" fill=\\"currentColor\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M110.613 3.67618C110.535 3.82115 110.423 3.89347 110.277 3.89347C110.164 3.89347 110.019 3.81476 109.842 3.657C109.665 3.49942 109.424 3.32468 109.122 3.13295C108.819 2.94122 108.44 2.76446 107.986 2.6025C107.532 2.44071 106.972 2.35965 106.306 2.35965C105.639 2.35965 105.053 2.45349 104.547 2.64085C104.041 2.82837 103.617 3.08401 103.275 3.40776C102.933 3.73168 102.673 4.10655 102.496 4.53256C102.319 4.95873 102.231 5.40609 102.231 5.87465C102.231 6.48818 102.362 6.99524 102.626 7.39568C102.889 7.79629 103.237 8.13703 103.668 8.41823C104.1 8.69943 104.59 8.93589 105.139 9.12762C105.687 9.31935 106.25 9.50906 106.829 9.69641C107.408 9.88393 107.971 10.0907 108.519 10.3163C109.068 10.5422 109.558 10.8256 109.99 11.1663C110.421 11.5072 110.77 11.9268 111.032 12.4253C111.296 12.9238 111.428 13.5437 111.428 14.2851C111.428 15.0436 111.296 15.7572 111.033 16.426C110.77 17.0951 110.388 17.6767 109.889 18.1708C109.388 18.665 108.776 19.0549 108.052 19.3403C107.327 19.6256 106.5 19.7685 105.568 19.7685C104.36 19.7685 103.321 19.5576 102.45 19.1358C101.579 18.714 100.816 18.1368 100.16 17.4038L100.523 16.8414C100.627 16.7135 100.747 16.6497 100.885 16.6497C100.963 16.6497 101.062 16.7008 101.183 16.8031C101.304 16.9054 101.45 17.0312 101.623 17.1802C101.796 17.3293 102.004 17.4913 102.245 17.6659C102.487 17.8406 102.768 18.0027 103.087 18.1516C103.407 18.3008 103.774 18.4264 104.188 18.5286C104.603 18.6309 105.073 18.682 105.6 18.682C106.326 18.682 106.974 18.5734 107.543 18.3561C108.113 18.1388 108.595 17.8428 108.988 17.4678C109.381 17.0929 109.681 16.6477 109.889 16.1321C110.095 15.6167 110.199 15.0648 110.199 14.4768C110.199 13.8377 110.067 13.3116 109.804 12.8983C109.541 12.485 109.192 12.1399 108.761 11.8629C108.33 11.5861 107.839 11.3538 107.29 11.1663C106.742 10.979 106.179 10.7956 105.6 10.6167C105.021 10.4378 104.458 10.2376 103.91 10.016C103.361 9.79446 102.871 9.51108 102.439 9.16597C102.008 8.82086 101.66 8.39065 101.397 7.875C101.133 7.35953 101.002 6.71404 101.002 5.93856C101.002 5.33361 101.118 4.74985 101.352 4.18745C101.585 3.62505 101.925 3.12874 102.375 2.69837C102.824 2.26816 103.379 1.92305 104.039 1.66304C104.7 1.4032 105.453 1.27319 106.3 1.27319C107.25 1.27319 108.102 1.42237 108.858 1.72056C109.614 2.01891 110.302 2.47468 110.924 3.08821L110.613 3.67618Z\\" fill=\\"currentColor\\"></path>\\n  <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M124.39 3.67618C124.312 3.82115 124.2 3.89347 124.054 3.89347C123.94 3.89347 123.796 3.81476 123.619 3.657C123.441 3.49942 123.201 3.32468 122.898 3.13295C122.596 2.94122 122.217 2.76446 121.763 2.6025C121.309 2.44071 120.748 2.35965 120.082 2.35965C119.416 2.35965 118.83 2.45349 118.323 2.64085C117.818 2.82837 117.393 3.08401 117.052 3.40776C116.71 3.73168 116.45 4.10655 116.273 4.53256C116.095 4.95873 116.007 5.40609 116.007 5.87465C116.007 6.48818 116.139 6.99524 116.402 7.39568C116.666 7.79629 117.013 8.13703 117.445 8.41823C117.877 8.69943 118.367 8.93589 118.915 9.12762C119.464 9.31935 120.027 9.50906 120.606 9.69641C121.185 9.88393 121.748 10.0907 122.296 10.3163C122.844 10.5422 123.334 10.8256 123.767 11.1663C124.198 11.5072 124.546 11.9268 124.809 12.4253C125.073 12.9238 125.204 13.5437 125.204 14.2851C125.204 15.0436 125.073 15.7572 124.81 16.426C124.547 17.0951 124.165 17.6767 123.666 18.1708C123.165 18.665 122.552 19.0549 121.828 19.3403C121.104 19.6256 120.276 19.7685 119.345 19.7685C118.137 19.7685 117.098 19.5576 116.227 19.1358C115.356 18.714 114.592 18.1368 113.937 17.4038L114.3 16.8414C114.403 16.7135 114.523 16.6497 114.662 16.6497C114.74 16.6497 114.839 16.7008 114.96 16.8031C115.081 16.9054 115.227 17.0312 115.4 17.1802C115.573 17.3293 115.78 17.4913 116.022 17.6659C116.264 17.8406 116.544 18.0027 116.864 18.1516C117.183 18.3008 117.55 18.4264 117.965 18.5286C118.38 18.6309 118.85 18.682 119.377 18.682C120.102 18.682 120.75 18.5734 121.32 18.3561C121.89 18.1388 122.372 17.8428 122.764 17.4678C123.157 17.0929 123.458 16.6477 123.665 16.1321C123.872 15.6167 123.975 15.0648 123.975 14.4768C123.975 13.8377 123.844 13.3116 123.58 12.8983C123.317 12.485 122.969 12.1399 122.538 11.8629C122.106 11.5861 121.615 11.3538 121.067 11.1663C120.519 10.979 119.956 10.7956 119.377 10.6167C118.798 10.4378 118.235 10.2376 117.686 10.016C117.138 9.79446 116.648 9.51108 116.216 9.16597C115.784 8.82086 115.437 8.39065 115.173 7.875C114.91 7.35953 114.778 6.71404 114.778 5.93856C114.778 5.33361 114.894 4.74985 115.128 4.18745C115.361 3.62505 115.702 3.12874 116.151 2.69837C116.6 2.26816 117.155 1.92305 117.816 1.66304C118.477 1.4032 119.23 1.27319 120.077 1.27319C121.026 1.27319 121.879 1.42237 122.635 1.72056C123.391 2.01891 124.079 2.47468 124.7 3.08821L124.39 3.67618Z\\" fill=\\"currentColor\\"></path>  \\n</svg>"}');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledLogoElement=(0,emotion_styled_base_browser_esm.Z)("a",{target:"ekqzljw0"})((_ref=>{let{theme}=_ref;return{color:theme.values.color.logo.base}}),"");function Logo(_ref2){let{href,ariaLabel="Main",role="navigation","data-testid":dataTestId}=_ref2;return(0,jsx_runtime.jsx)(StyledLogoElement,{href,"aria-label":ariaLabel,role,dangerouslySetInnerHTML:{__html:logo_namespaceObject.Q},"data-testid":dataTestId})}Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:{value:"Main"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}},role:{defaultValue:{value:"navigation"},description:"",name:"role",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Logo/Logo.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Logo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Logo/Logo.tsx"),_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Next Composite/Logo/Logo",parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.SUBTHEMED]},component:_Logo__WEBPACK_IMPORTED_MODULE_4__.T,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Next Composite/Logo/Logo",component:_Logo__WEBPACK_IMPORTED_MODULE_4__.T,parameters:{badges:[_storybook_constants_ts__WEBPACK_IMPORTED_MODULE_5__.QV.SUBTHEMED]}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"logo",children:"Logo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{of:_Logo__WEBPACK_IMPORTED_MODULE_4__.T}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"basic-logo",children:"Basic Logo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{id:"next-composite-logo--basic-logo"})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);