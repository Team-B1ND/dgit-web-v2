import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

interface NowDevelopingWarnProps {
  background?: boolean
}
const NowDevelopingWarn = ({
  background = false
}: NowDevelopingWarnProps) => {
  return (
    <NowDevelopingWarnContainer $background={background.toString()}>
      현재 개발중인 기능입니다.
    </NowDevelopingWarnContainer>
  )
}

export default NowDevelopingWarn

const NowDevelopingWarnContainer = styled.div<{
  $background: string
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  color: ${({ theme }) => theme.labelAssistive};
  ${DodamShape.Large};
  background-color: ${({ $background, theme }) => $background === "true" ? theme.backgroundNormal : ""};
`;