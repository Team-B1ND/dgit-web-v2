import { DodamShape } from "@b1nd/dds-web";
import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  min-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 16px 12px;
  gap: 8px;
`;

export const SidebarItem = styled(Link)<{ $selcted: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: ${({ theme, $selcted }) => $selcted === "true" ? theme.staticWhite : theme.labelNormal};
  background-color: ${({ theme, $selcted }) => $selcted === "true" ? theme.primaryNormal : ""};
  ${DodamShape.Medium}
`

export const SidebarFooter = styled.div`
  display: flex;
  justify-content: space-between;
`