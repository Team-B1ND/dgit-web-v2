import { PropsWithChildren } from "react";
import * as S from './style';
import Sidebar from "@src/components/common/layout/sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.LayoutContainer>
      <Sidebar />
      {children}
    </S.LayoutContainer>
  )
}

export default Layout