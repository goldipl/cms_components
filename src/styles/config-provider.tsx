import { PropsWithChildren } from "react";
import { ConfigProvider as AtndConfigProvider } from "antd";
import { PRIMARY_LIGHT } from "@/styles/colors";
import "./styles.css";

export const ConfigProvider = ({ children }: PropsWithChildren) => (
  <AtndConfigProvider
    theme={{
      token: {
        colorInfo: PRIMARY_LIGHT,
        // Seed Token
        // colorPrimary: PRIMARY_LIGHT,
        // borderRadius: 2,
        // Alias Token
        // colorBgContainer: "#f6ffed",
      },
      cssVar: true,
      hashed: false,
      components: {
        Avatar: {
          groupOverlapping: -12,
        },
        Segmented: {
          // trackBg: blue[0],
        },
        Input: {
          // activeBorderColor: PRIMARY_LIGHT,
          // hoverBorderColor: PRIMARY_LIGHT,
        },
        Layout: {
          // lightSiderBg: 'green'
        },
      },
    }}
    menu={{ className: "custom-menu" }}
    card={{ className: "custom-card" }}
  >
    {children}
  </AtndConfigProvider>
);
