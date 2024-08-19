import{d as Ae,e as ke,c as Ge,j as u}from"./colors-WEoSxDvh.js";import{u as He,r as A,L as g,S as _e}from"./index-B0beqeaL.js";import{c as H}from"./index-T368b8FA.js";import{r as i}from"./index-uubelm5h.js";import{g as Ie,m as Fe,t as Ve}from"./button-Buy3MpR3.js";import"./assertThisInitialized-Dcw1RBp7.js";import"./index-CXqRzIe3.js";const Re=i.createContext({}),Je=e=>{const{componentCls:r}=e;return{[r]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Xe=e=>{const{componentCls:r}=e;return{[r]:{position:"relative",maxWidth:"100%",minHeight:1}}},qe=(e,r)=>{const{prefixCls:o,componentCls:t,gridColumns:n}=e,a={};for(let s=n;s>=0;s--)s===0?(a[`${t}${r}-${s}`]={display:"none"},a[`${t}-push-${s}`]={insetInlineStart:"auto"},a[`${t}-pull-${s}`]={insetInlineEnd:"auto"},a[`${t}${r}-push-${s}`]={insetInlineStart:"auto"},a[`${t}${r}-pull-${s}`]={insetInlineEnd:"auto"},a[`${t}${r}-offset-${s}`]={marginInlineStart:0},a[`${t}${r}-order-${s}`]={order:0}):(a[`${t}${r}-${s}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${s/n*100}%`,maxWidth:`${s/n*100}%`}],a[`${t}${r}-push-${s}`]={insetInlineStart:`${s/n*100}%`},a[`${t}${r}-pull-${s}`]={insetInlineEnd:`${s/n*100}%`},a[`${t}${r}-offset-${s}`]={marginInlineStart:`${s/n*100}%`},a[`${t}${r}-order-${s}`]={order:s});return a[`${t}${r}-flex`]={flex:`var(--${o}${r}-flex)`},a},Z=(e,r)=>qe(e,r),Ke=(e,r,o)=>({[`@media (min-width: ${Ae(r)})`]:Object.assign({},Z(e,o))}),Qe=()=>({}),Ue=()=>({}),Ye=Ie("Grid",Je,Qe),Ze=Ie("Grid",e=>{const r=Fe(e,{gridColumns:24}),o={"-sm":r.screenSMMin,"-md":r.screenMDMin,"-lg":r.screenLGMin,"-xl":r.screenXLMin,"-xxl":r.screenXXLMin};return[Xe(r),Z(r,""),Z(r,"-xs"),Object.keys(o).map(t=>Ke(r,o[t],t)).reduce((t,n)=>Object.assign(Object.assign({},t),n),{})]},Ue);var ze=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};function ne(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const et=["xs","sm","md","lg","xl","xxl"],Y=i.forwardRef((e,r)=>{const{getPrefixCls:o,direction:t}=i.useContext(ke),{gutter:n,wrap:a}=i.useContext(Re),{prefixCls:s,span:f,order:$,offset:b,push:L,pull:P,className:_,children:F,flex:D,style:W}=e,T=ze(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),c=o("col",s),[E,V,k]=Ze(c),G={};let p={};et.forEach(d=>{let l={};const h=e[d];typeof h=="number"?l.span=h:typeof h=="object"&&(l=h||{}),delete T[d],p=Object.assign(Object.assign({},p),{[`${c}-${d}-${l.span}`]:l.span!==void 0,[`${c}-${d}-order-${l.order}`]:l.order||l.order===0,[`${c}-${d}-offset-${l.offset}`]:l.offset||l.offset===0,[`${c}-${d}-push-${l.push}`]:l.push||l.push===0,[`${c}-${d}-pull-${l.pull}`]:l.pull||l.pull===0,[`${c}-rtl`]:t==="rtl"}),l.flex&&(p[`${c}-${d}-flex`]=!0,G[`--${c}-${d}-flex`]=ne(l.flex))});const J=Ge(c,{[`${c}-${f}`]:f!==void 0,[`${c}-order-${$}`]:$,[`${c}-offset-${b}`]:b,[`${c}-push-${L}`]:L,[`${c}-pull-${P}`]:P},_,p,V,k),y={};if(n&&n[0]>0){const d=n[0]/2;y.paddingLeft=d,y.paddingRight=d}return D&&(y.flex=ne(D),a===!1&&!y.minWidth&&(y.minWidth=0)),E(i.createElement("div",Object.assign({},T,{style:Object.assign(Object.assign(Object.assign({},y),W),G),className:J,ref:r}),F))});var tt=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};function se(e,r){const[o,t]=i.useState(typeof e=="string"?e:""),n=()=>{if(typeof e=="string"&&t(e),typeof e=="object")for(let a=0;a<A.length;a++){const s=A[a];if(!r[s])continue;const f=e[s];if(f!==void 0){t(f);return}}};return i.useEffect(()=>{n()},[JSON.stringify(e),r]),o}const rt=i.forwardRef((e,r)=>{const{prefixCls:o,justify:t,align:n,className:a,style:s,children:f,gutter:$=0,wrap:b}=e,L=tt(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:P,direction:_}=i.useContext(ke),[F,D]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[W,T]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),c=se(n,W),E=se(t,W),V=i.useRef($),k=He();i.useEffect(()=>{const N=k.subscribe(K=>{T(K);const m=V.current||0;(!Array.isArray(m)&&typeof m=="object"||Array.isArray(m)&&(typeof m[0]=="object"||typeof m[1]=="object"))&&D(K)});return()=>k.unsubscribe(N)},[]);const G=()=>{const N=[void 0,void 0];return(Array.isArray($)?$:[$,void 0]).forEach((m,re)=>{if(typeof m=="object")for(let Q=0;Q<A.length;Q++){const U=A[Q];if(F[U]&&m[U]!==void 0){N[re]=m[U];break}}else N[re]=m}),N},p=P("row",o),[J,y,d]=Ye(p),l=G(),h=Ge(p,{[`${p}-no-wrap`]:b===!1,[`${p}-${E}`]:E,[`${p}-${c}`]:c,[`${p}-rtl`]:_==="rtl"},a,y,d),I={},X=l[0]!=null&&l[0]>0?l[0]/-2:void 0;X&&(I.marginLeft=X,I.marginRight=X);const[te,q]=l;I.rowGap=q;const Be=i.useMemo(()=>({gutter:[te,q],wrap:b}),[te,q,b]);return J(i.createElement(Re.Provider,{value:Be},i.createElement("div",Object.assign({},L,{className:h,style:Object.assign(Object.assign({},I),s),ref:r}),f)))}),nt=46,ee=({TitleComponent:e,SubtitleComponent:r,children:o,fullHeight:t,backgroundColor:n})=>{const{token:a}=Ve.useToken();return u.jsxs(rt,{style:{padding:nt,backgroundColor:H(n==="base",a.colorBgBase),...t&&{minHeight:"100%"}},children:[!!e&&u.jsx(Y,{xs:24,children:e}),!!r&&u.jsx(Y,{xs:24,children:r}),u.jsx(Y,{xs:24,children:o})]})};ee.__docgenInfo={description:"",methods:[],displayName:"PageContainer"};const z=(e=10)=>Array.from({length:e}).map((r,o)=>u.jsx(_e,{paragraph:!0},o)),ft={component:g,tags:["visual:check"]},st=({MenuComponent:e,TopBarComponent:r,overflowedContent:o,withBgColor:t,fullHeight:n})=>u.jsx(g,{MenuComponent:e,TopBarComponent:r,children:u.jsx(ee,{backgroundColor:H(t,"base"),fullHeight:n,children:z(o?5:1)})}),ot=({overflowedContent:e,withBgColor:r,fullHeight:o,hideMainMenu:t,overflowedPanel:n,expandedPanel:a})=>{const[s,f]=i.useState(!!a);return i.useEffect(()=>{f(!!a)},[a]),u.jsx(g,{MenuComponent:u.jsx(g.MenuLayout,{CenterComponent:"menu-1",collapsedState:H(t,"hide")}),children:u.jsx(g,{MenuComponent:u.jsx(g.MenuLayout,{CenterComponent:"menu-2"}),TopBarComponent:u.jsx(g.TopbarLayout,{}),LeftPanelComponent:u.jsx(g.LeftSidePanel,{show:s,title:"Left Panel",onClose:()=>f(!1),children:z(n?5:1)}),children:u.jsx(ee,{backgroundColor:H(r,"base"),fullHeight:o,children:z(e?5:1)})})})},x={render:st,args:{MenuComponent:u.jsx(g.MenuLayout,{CenterComponent:"menu-1"})},argTypes:{TopBarComponent:{table:{disable:!0}},MenuComponent:{table:{disable:!0}}}},C={...x,args:{...x.args,withBgColor:!0}},S={...C,args:{...C.args,fullHeight:!0}},j={...S,args:{...S.args,overflowedContent:!0}},R={...j,args:{...j.args,TopBarComponent:u.jsx(g.TopbarLayout,{})},argTypes:{}},w={render:ot},O={...w,args:{...w.args,overflowedContent:!0}},v={...O,args:{...O.args,expandedPanel:!0}},M={...v,args:{...v.args,overflowedPanel:!0}},B={...M,args:{...M.args,hideMainMenu:!0}};var oe,ae,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: defaultRender,
  args: {
    MenuComponent: <Layout.MenuLayout CenterComponent={\`menu-1\`} />
  },
  argTypes: {
    TopBarComponent: {
      table: {
        disable: true
      }
    },
    MenuComponent: {
      table: {
        disable: true
      }
    }
  }
}`,...(le=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ce,ie,ue;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    withBgColor: true
  }
}`,...(ue=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,pe,fe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...DefaultWithBg,
  args: {
    ...DefaultWithBg.args,
    fullHeight: true
  }
}`,...(fe=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var me,ge,ye;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...DefaultFullHeight,
  args: {
    ...DefaultFullHeight.args,
    overflowedContent: true
  }
}`,...(ye=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var $e,be,he;R.parameters={...R.parameters,docs:{...($e=R.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...DefaultScrollable,
  args: {
    ...DefaultScrollable.args,
    TopBarComponent: <Layout.TopbarLayout />
  },
  argTypes: {}
}`,...(he=(be=R.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,Ce,Se;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: nestedRender
}`,...(Se=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var je,we,Oe;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  ...Nested,
  args: {
    ...Nested.args,
    overflowedContent: true
  }
}`,...(Oe=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var ve,Me,Ne;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...NestedScrollable,
  args: {
    ...NestedScrollable.args,
    expandedPanel: true
  }
}`,...(Ne=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Le,Pe,De;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...NestedWithLeftPanel,
  args: {
    ...NestedWithLeftPanel.args,
    overflowedPanel: true
  }
}`,...(De=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var We,Te,Ee;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...NestedWithScrollableLeftPanel,
  args: {
    ...NestedWithScrollableLeftPanel.args,
    hideMainMenu: true
  }
}`,...(Ee=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};const mt=["Default","DefaultWithBg","DefaultFullHeight","DefaultScrollable","DefaultWithTopbar","Nested","NestedScrollable","NestedWithLeftPanel","NestedWithScrollableLeftPanel","NestedHiddenMainMenu"];export{x as Default,S as DefaultFullHeight,j as DefaultScrollable,C as DefaultWithBg,R as DefaultWithTopbar,w as Nested,B as NestedHiddenMainMenu,O as NestedScrollable,v as NestedWithLeftPanel,M as NestedWithScrollableLeftPanel,mt as __namedExportsOrder,ft as default};
