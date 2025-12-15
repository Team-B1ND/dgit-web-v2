import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  min-width: 200px;
  height: 100%;
  gap: 8px;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
`;