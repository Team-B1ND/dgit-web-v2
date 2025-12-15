import { SIDEBAR_DATA } from '@src/constants/sidebar/index.constant';
import * as S from './style';
import { useState } from 'react';
import DgitLogo from '@src/components/common/logo';
import ThemeController from '@src/components/common/layout/sidebar/themeController';
import FlexWider from '@src/components/common/flexWider';

const Sidebar = () => {
  const [selcted, setSelected] = useState(SIDEBAR_DATA[0].text);

  return (
    <S.SidebarContainer>
      <DgitLogo width='96px' margin='8px'/>
      {SIDEBAR_DATA.map(item => (
        <S.SidebarItem 
          key={item.link}
          to={item.link} 
          $selcted={(item.text === selcted).toString()}
          onClick={() => setSelected(item.text)}
        >
          {item.icon({ color: item.text === selcted ? "staticWhite" : "labelNormal"})}
          {item.text}
        </S.SidebarItem>
      ))}
      <FlexWider/>
      <ThemeController/>
    </S.SidebarContainer>
  )
}

export default Sidebar