"use strict";(self.webpackChunktidy_ui_docs=self.webpackChunktidy_ui_docs||[]).push([[245],{1674:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(6540),a=r(276),l=r(5722),o=r(4794),i=r(2823),c=r(2532);const s=(0,r(2568).keyframes)(["from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}"]),d=a.styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  &:hover {
    transform: scale(1.02);
  }
`,u=a.styled.div`
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  overflow: hidden;
  ${e=>e.isActive?a.css`
          display: none;
          transform: translateX(100%);
        `:a.css`
          display: flex;
          transform: translateX(0);
        `}
`,m=a.styled.div`
  width: fit-content;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  overflow: hidden;

  ${e=>e.isActive?a.css`
          display: flex;
          transform: translateX(0);
        `:a.css`
          display: none;
          transform: translateX(100%);
        `}
`,p=a.styled.div`
  transition: all 0.7s ease-in-out;
  flex: 1;
  display: flex;
`,y=a.styled.div`
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  transition: transform 0.5s ease;
  display: flex;

  ${d}:hover & {
    transform: scale(1.1);
  }
`,f=a.styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`,h=a.styled.div`
  animation: ${s} 0.5s ease-out forwards;
`;var g=e=>{var t;const{featureModularDesignImage:r,featureCustomizableImage:l,featureDeveloperCentricImage:s,featureLayoutsImage:g,featureProductionReadyImage:v,featureSupportImage:E}=(0,o.useStaticQuery)("4158899519"),[x,b]=n.useState(!1);return n.createElement(d,null,n.createElement(u,{isActive:x},n.createElement(p,{onMouseEnter:()=>{b(!x)}},n.createElement(y,null,(()=>{switch(e.id){case"features-modular":return n.createElement(c.G,{image:(0,c.c)(r),alt:"features-modular.png"});case"features-customizable":return n.createElement(c.G,{image:(0,c.c)(l),alt:"features-customizable.png"});case"features-developer-centric":return n.createElement(c.G,{image:(0,c.c)(s),alt:"features-developer-centric.png"});case"features-layouts":return n.createElement(c.G,{image:(0,c.c)(g),alt:"features-layouts.png"});case"features-production-ready":return n.createElement(c.G,{image:(0,c.c)(v),alt:"feature-production-ready.png"});case"features-support":return n.createElement(c.G,{image:(0,c.c)(E),alt:"features-support.png"})}})()))),n.createElement(m,{isActive:x,onMouseLeave:e=>{e.stopPropagation(),b(!1)}},n.createElement(f,null,n.createElement(h,null,n.createElement(i.Ul,null,null===(t=e.content)||void 0===t?void 0:t.map((e=>n.createElement(i.Li,{key:e},n.createElement(a.Text.H6,null,e)))))))))};var v=()=>{const{features:e}=(0,o.useStaticQuery)("2878678735");return n.createElement(a.Grid,{gap:16},e.nodes.map((e=>n.createElement(a.GridItem,{key:e.frontmatter.id,xl:8,lg:8,md:8,sm:12,xs:12},n.createElement(a.Paper,{height:"420px",overflow:"hidden"},n.createElement(a.Text.H5,{ctr:!0,bld:!0,margin:"0 0 2rem 0"},e.frontmatter.title," ",n.createElement(i.In,{icon:e.frontmatter.icon})),n.createElement(g,{id:e.frontmatter.id,content:e.frontmatter.content}))))))};const E=()=>n.createElement(a.Alert,{isFilled:!0,status:"danger",margin:"0 0 1rem 0"},n.createElement(i.Cy.p1,null)),x=()=>n.createElement(a.FlexItem,{flx:"1"},n.createElement(i.Cy.S9,null)),b=e=>{let{children:t}=e;return n.createElement(a.FlexItem,{flx:"1"},t)},w=e=>n.createElement(a.Border,{variant:"dashed"},n.createElement(a.FlexBox,{gap:"1rem",fld:"row-reverse",ali:"stretch"},n.createElement(i.Cy.w,{code:e.$code,ErrorWrapper:E,CodeWrapper:x,PreviewWrapper:b})));var k=r(6784),T=r(6188),C=r(8592),I=r(5692);const D=a.styled.span`
  ${e=>{let{theme:{palette:t}}=e;return a.css`
    background: linear-gradient(to right, ${t.major[600]}, ${t.minor[600]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}}
`;var _=()=>n.createElement(D,null,n.createElement(I.cU,{words:["elegant","beautiful","simple","scalable","accessible","modular"],loop:0,typeSpeed:90,deleteSpeed:60,delaySpeed:1500}));const S=(0,a.styled)(a.Code)`
  font-weight: bold;
  color: ${e=>{let{theme:{isDark:t}}=e;return t?(0,a.hsla)(a.color.green[300]):(0,a.hsla)(a.color.green[700])}};
`;var B=()=>{const{theme:e}=(0,C.D)();return n.createElement(a.FlexBox,{fld:"column",gap:"2rem",ali:"center"},n.createElement(a.FlexItem,null,n.createElement(a.Text.H2,{bld:!0,ctr:!0,color:e.isDark?(0,a.hsla)(a.color.gray[300]):(0,a.hsla)(a.color.gray[700])},"Create ",n.createElement(_,null)," React apps with Tidy UI")),n.createElement(a.FlexItem,null,n.createElement(a.Text.H6,{ctr:!0,color:(0,a.hsla)(a.color.slate[500])},n.createElement("blockquote",null,"Tidy UI is a lightweight and modular React component library that empowers developers to build polished, scalable interfaces with ease. It provides a curated set of essential building blocks designed for speed, consistency, and maintainability."))),n.createElement(a.FlexItem,null,n.createElement(a.Stack,{gap:"1rem",align:"center"},n.createElement(o.Link,{to:"/getting-started"},n.createElement(a.Button,{variant:"primary",girth:"xxl",tone:"success",padding:"0.125rem 3rem"},"Get started")),n.createElement(o.Link,{to:"https://www.npmjs.com/package/@tidy-ui/all",target:"_blank"},n.createElement(S,{canCopy:!1},n.createElement(k.g,{icon:T.MNM,color:(0,a.hsla)(a.color.orange[500])})," npm i @tidy-ui/all")))))};var F=()=>n.createElement(l.YW,{title:"/Home"},n.createElement(a.FlexBox,{as:"section",fld:"column",padding:"4rem 0",gap:"4rem"},n.createElement(a.FlexItem,null,n.createElement(B,null)),n.createElement(a.FlexItem,null,n.createElement(w,{$code:'<Card>\n  <CardHeader isDivided>\n    <FlexBox gap="1rem" ali="center">\n      <Avatar name="Balu Praveen Datty" />\n      <FlexBox fld="column">\n        <Text.H6>Balu Praveen Datty</Text.H6>\n        <Text.Body1 color={hsla(color.slate[500])}>@badatt</Text.Body1>\n      </FlexBox>\n    </FlexBox>\n  </CardHeader>\n  <CardBody>\n    <FlexBox fld="column" gap="1rem">\n      <Text.Body1>\n        I\'m a passionate developer and the creator of Tidy UI, a component library built with care and\n        attention to detail. I\'d love for you to give it a try and share your feedback! If you come across any\n        bugs, please don\'t hesitate to{\' \'}\n        <Anchor\n          girth="sm"\n          href="https://github.com/badatt/tidy-ui/issues"\n          target="_blank"\n          rel="noopener noreferrer"\n          tone="minor"\n        >\n        open an issue\n        </Anchor>\n        , I truly appreciate it. Curious to learn more about my work or chat about the project? Feel free to\n        reach out. Id be happy to connect!\n      </Text.Body1>\n      <img\n        src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/storybook-logo.png"\n        alt="Tidy UI"\n      />\n    </FlexBox>\n  </CardBody>\n  <CardFooter isDivided>\n    <Stack>\n      <Anchor href="https://github.com/badatt" target="_blank" rel="noopener noreferrer">\n        GitHub\n      </Anchor>\n      <Anchor href="https://www.linkedin.com/in/balu-praveen-datty/" target="_blank" rel="noopener noreferrer">\n        LinkedIn\n      </Anchor>\n    </Stack>\n  </CardFooter>\n</Card>\n'})),n.createElement(a.FlexItem,null,n.createElement(v,null)),n.createElement(a.FlexItem,null,n.createElement(a.DividerEnhanced,null,n.createElement(a.Text.Caption,{disabled:!0},"Less code. More clarity. Tidy UI."))),n.createElement(a.FlexItem,null,n.createElement(l.wi,null))))},5692:function(e,t,r){var n=r(4848),a=r(6540),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};function o(e,t){var r,n;switch(t.type){case"TYPE":return l(l({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length+1)});case"DELAY":return l(l({},e),{speed:t.payload});case"DELETE":return l(l({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case"COUNT":return l(l({},e),{count:e.count+1});default:return e}}var i=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,n=e.loop,l=void 0===n?1:n,i=e.typeSpeed,c=void 0===i?80:i,s=e.deleteSpeed,d=void 0===s?50:s,u=e.delaySpeed,m=void 0===u?1500:u,p=e.onLoopDone,y=e.onType,f=e.onDelete,h=e.onDelay,g=a.useReducer(o,{speed:c,text:"",count:0}),v=g[0],E=v.speed,x=v.text,b=v.count,w=g[1],k=a.useRef(0),T=a.useRef(!1),C=a.useRef(!1),I=a.useRef(!1),D=a.useRef(!1),_=a.useCallback((function(){var e=b%r.length,t=r[e];C.current?(w({type:"DELETE",payload:t,speed:d}),""===x&&(C.current=!1,w({type:"COUNT"}))):(w({type:"TYPE",payload:t,speed:c}),I.current=!0,x===t&&(w({type:"DELAY",payload:m}),I.current=!1,D.current=!0,setTimeout((function(){D.current=!1,C.current=!0}),m),l>0&&(k.current+=1,k.current/r.length===l&&(D.current=!1,T.current=!0)))),I.current&&y&&y(k.current),C.current&&f&&f(),D.current&&h&&h()}),[b,m,d,l,c,r,x,y,f,h]);return a.useEffect((function(){var e=setTimeout(_,E);return T.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[_,E]),a.useEffect((function(){p&&T.current&&p()}),[p]),[x,{isType:I.current,isDelay:D.current,isDelete:C.current,isDone:T.current}]};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var c=a.memo((function(e){var t=e.cursorBlinking,r=void 0===t||t,a=e.cursorStyle,o=void 0===a?"|":a,i=e.cursorColor,c=void 0===i?"inherit":i;return n.jsx("span",l({style:{color:c},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(r?"styles-module_blinking__9VXRT":"")},{children:o}))}));t.cU=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,a=e.loop,l=void 0===a?1:a,o=e.typeSpeed,s=void 0===o?80:o,d=e.deleteSpeed,u=void 0===d?50:d,m=e.delaySpeed,p=void 0===m?1500:m,y=e.cursor,f=void 0!==y&&y,h=e.cursorStyle,g=void 0===h?"|":h,v=e.cursorColor,E=void 0===v?"inherit":v,x=e.cursorBlinking,b=void 0===x||x,w=e.onLoopDone,k=e.onType,T=e.onDelay,C=e.onDelete,I=i({words:r,loop:l,typeSpeed:s,deleteSpeed:u,delaySpeed:p,onLoopDone:w,onType:k,onDelay:T,onDelete:C})[0];return n.jsxs(n.Fragment,{children:[n.jsx("span",{children:I}),f&&n.jsx(c,{cursorStyle:g,cursorColor:E,cursorBlinking:b})]})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b1b17939a7f8d890442b.js.map