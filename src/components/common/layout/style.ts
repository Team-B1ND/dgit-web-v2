import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  padding: 56px 24px;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  color: ${({ theme }) => theme.labelNormal};
`