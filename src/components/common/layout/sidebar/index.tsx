import { SIDEBAR_DATA } from '@src/constants/sidebar/index.constant';
import * as S from './style';
import DgitLogo from '@src/components/common/logo';
import ThemeController from '@src/components/common/layout/sidebar/themeController';
import FlexWider from '@src/components/common/flexWider';
import GoDodamButton from '@src/components/common/layout/sidebar/goDodamButton';
import { useRouterState } from '@tanstack/react-router';
import LogoutButton from '@src/components/common/layout/sidebar/logoutButton';

const Sidebar = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <S.SidebarContainer>
      <DgitLogo width="96px" margin="8px" />
      {SIDEBAR_DATA.map((item) => (
        <S.SidebarItem
          key={item.link}
          to={item.link}
          $selcted={item.link.includes(pathname.split("/")[1]).toString()}
        >
          {item.icon({
            color: item.link.includes(pathname.split("/")[1])
              ? "staticWhite"
              : "labelNormal",
          })}
          {item.text}
        </S.SidebarItem>
      ))}
      <FlexWider />
      <S.SidebarFooter>
        <ThemeController />
        <GoDodamButton />
        <LogoutButton />
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
}

export default Sidebar