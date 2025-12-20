import styled from "styled-components";

const NowDevelopingWarn = () => {
  return (
    <NowDevelopingWarnContainer>
      현재 개발중인 기능입니다.
    </NowDevelopingWarnContainer>
  )
}

export default NowDevelopingWarn

const NowDevelopingWarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  color: ${({ theme }) => theme.labelAssistive};
`;