import { PropsWithChildren } from "react";
import { DodamThemeProvider, DodamGlobalStyles } from "@b1nd/dds-web";
import { useThemeStore } from "@src/store/theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeStore();
  return (
    <DodamThemeProvider theme={theme}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};
export default ThemeProvider;
