import styled from "styled-components";

export const LogoContainer = styled.div<{ 
  $width: string;
  $margin: string;
}>`
  display: flex;
  gap: 4px;
  width: ${({ $width }) => $width};
  aspect-ratio: 3.55 / 1;
  margin: ${({ $margin }) => $margin};
`