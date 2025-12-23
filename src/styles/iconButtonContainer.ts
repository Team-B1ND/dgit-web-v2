import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const IconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.labelNormal};
  background-color: ${({ theme }) => theme.backgroundNeutral};
  ${DodamShape.Medium}
  cursor: pointer;
`;