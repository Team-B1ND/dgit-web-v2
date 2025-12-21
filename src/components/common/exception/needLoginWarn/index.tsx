import { DodamFilledButton } from "@b1nd/dds-web";
import { loginWithDauth } from "@src/libs/login/login";
import { useRouterState } from "@tanstack/react-router";
import styled from "styled-components"

const NeedLoginWarn = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  return (
    <NeedLoginWarnContainer>
      로그인이 필요합니다!
      <DodamFilledButton text="로그인하러 가기" size="Medium" width={240} textTheme="staticWhite" onClick={() => loginWithDauth(pathname)} />
    </NeedLoginWarnContainer>
  )
}

export default NeedLoginWarn


const NeedLoginWarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  color: ${({ theme }) => theme.labelAssistive};
  gap: 12px;
`;