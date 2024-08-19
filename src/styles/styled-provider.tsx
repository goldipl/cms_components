import { theme } from "antd";
import { ThemeProvider } from "styled-components";

interface Props {}

export const StyledProvider = ({ children }: Props) => {
  const { token } = theme.useToken();
  return <ThemeProvider theme={{ token }}>{children}</ThemeProvider>;
};
