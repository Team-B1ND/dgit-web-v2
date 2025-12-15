import * as S from './style';
import { ETheme } from '@b1nd/dds-web';
import DarkModeIcon from "@src/assets/themeIcon/darkmode.svg?react"
import WhiteModeIcon from "@src/assets/themeIcon/whitemode.svg?react";
import { useThemeStore } from '@src/store/theme';

const ThemeController = () => {
  const { theme, toggleThemeMode } = useThemeStore();
  return (
    <S.ThemeController onClick={toggleThemeMode}>
      {theme === ETheme.DARK 
        ? <DarkModeIcon color='#FFF'/> 
        : <WhiteModeIcon />}
    </S.ThemeController>
  )
}

export default ThemeController