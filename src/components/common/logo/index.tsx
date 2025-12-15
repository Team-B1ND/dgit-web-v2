import Dgit_D from "@src/assets/DGIT_D.svg?react";
import Dgit_GIT from "@src/assets/DGIT_GIT.svg?react";
import * as S from './style';
import { useThemeStore } from "@src/store/theme";
import { ETheme } from "@src/enum/Theme/theme.enum";

type DgitLogoProps = {
  width?: string;
  margin?: string;
}

const DgitLogo = ({ width = "100%", margin = "0px" }: DgitLogoProps) => {
  const { theme } = useThemeStore()
  return (
    <S.LogoContainer $width={width} $margin={margin}>
      <Dgit_D height="100%" />
      <Dgit_GIT 
        height="100%"
        color={theme === ETheme.DARK ? "#F5F5F5" : "#000000"}
      />
    </S.LogoContainer>
  );
}

export default DgitLogo