import { DodamTheme } from "@b1nd/dds-web";
import styled from "styled-components";

interface TextColorInjectorProps {
  text: string;
  color: keyof DodamTheme
}
const TextColorInjector = ({ text, color }: TextColorInjectorProps) => {
  return (
    <Container $color={color}>{text}</Container>
  )
}

export default TextColorInjector

const Container = styled.div<{
  $color: keyof DodamTheme
}>`
  color: ${({ theme, $color }) => theme[$color]};
`