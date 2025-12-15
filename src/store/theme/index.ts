import { THEME_KEY } from "@src/constants/theme/theme.constant";
import { ETheme } from "@src/enum/Theme/theme.enum";
import { getTheme } from "@src/utils/Theme/getTheme";
import { create } from "zustand";

interface State {
  theme: ETheme;
  toggleThemeMode: () => void;
}

export const useThemeStore = create<State>((set) => {
  const savedTheme = getTheme();

  return {
    theme: savedTheme,
    toggleThemeMode: () => {
      set((state) => {
        const newMode = state.theme === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
        localStorage.setItem(THEME_KEY, newMode);
        return { theme: newMode };
      });
    },
  }
});
