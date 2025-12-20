import { DodamFilledButton } from "@b1nd/dds-web";
import styled from "styled-components"

const NeedLoginWarn = () => {
  return (
    <NeedLoginWarnContainer>
      로그인이 필요합니다!
      <DodamFilledButton text="로그인하러 가기" size="Medium" width={240} textTheme="staticWhite" />
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