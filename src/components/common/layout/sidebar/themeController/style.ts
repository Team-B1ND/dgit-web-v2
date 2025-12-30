import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ThemeController = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 12px;
  ${DodamShape.Medium}
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  color: ${({ theme }) => theme.labelNormal};
`;
