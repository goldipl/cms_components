import{j as n}from"./colors-WEoSxDvh.js";import{M as t,L as e}from"./index-B0beqeaL.js";import{A as M,M as u,R as L}from"./menu-D82kFcnG.js";import{m as l,c as C}from"./index-T368b8FA.js";import"./index-uubelm5h.js";import"./assertThisInitialized-Dcw1RBp7.js";import"./index-CXqRzIe3.js";import"./button-Buy3MpR3.js";import"./index-BTEJxXgB.js";import"./wrapNativeSuper-C8r1PjNa.js";const i=o=>n.jsx(M,{...o});i.__docgenInfo={description:"",methods:[],displayName:"Avatar",composes:["AvatarProps"]};const B={component:t},r=l(4,o=>({title:`Menu {${o}}`,key:o,icon:n.jsx(L,{}),label:`Menu item ${o}`})),a=o=>l(4,y=>n.jsx(i,{shape:C(o,"square"),children:y})),s={render:({collapsedState:o})=>n.jsx(e,{MenuComponent:n.jsx(t,{TopComponent:n.jsx(e.MenuIconsLayout,{children:a(!0)}),collapsedState:o}),children:n.jsx(e,{MenuComponent:n.jsx(t,{CenterComponent:n.jsx(u,{items:r}),collapsedState:o}),children:n.jsx(e,{MenuComponent:n.jsx(t,{BottomComponent:n.jsx(e.MenuIconsLayout,{children:a()}),collapsedState:o}),children:n.jsx(e,{MenuComponent:n.jsx(t,{TopComponent:n.jsx(e.MenuIconsLayout,{children:a(!0)}),CenterComponent:n.jsx(u,{items:r}),BottomComponent:n.jsx(e.MenuIconsLayout,{children:a()}),collapsedState:o})})})})}),argTypes:{BottomComponent:{table:{disable:!0}},CenterComponent:{table:{disable:!0}},TopComponent:{table:{disable:!0}}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    collapsedState
  }) => {
    return <Layout MenuComponent={<MenuLayout TopComponent={<Layout.MenuIconsLayout>{avatars(true)}</Layout.MenuIconsLayout>} collapsedState={collapsedState} />}>
        <Layout MenuComponent={<MenuLayout CenterComponent={<Menu items={menuItems} />} collapsedState={collapsedState} />}>
          <Layout MenuComponent={<MenuLayout BottomComponent={<Layout.MenuIconsLayout>{avatars()}</Layout.MenuIconsLayout>} collapsedState={collapsedState} />}>
            <Layout MenuComponent={<MenuLayout TopComponent={<Layout.MenuIconsLayout>
                      {avatars(true)}
                    </Layout.MenuIconsLayout>} CenterComponent={<Menu items={menuItems} />} BottomComponent={<Layout.MenuIconsLayout>{avatars()}</Layout.MenuIconsLayout>} collapsedState={collapsedState} />} />
          </Layout>
        </Layout>
      </Layout>;
  },
  argTypes: {
    BottomComponent: {
      table: {
        disable: true
      }
    },
    CenterComponent: {
      table: {
        disable: true
      }
    },
    TopComponent: {
      table: {
        disable: true
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const A=["DefaultMenu"];export{s as DefaultMenu,A as __namedExportsOrder,B as default};
