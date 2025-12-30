import { DodamTheme, DodamTypography, TypographyStyles } from "@b1nd/dds-web";
import styled from "styled-components";

interface CustomTextProps {
  text: string;
  color: keyof DodamTheme;
  typo?: keyof TypographyStyles;
  weight?: "Bold" | "Medium" | "Regular";
}
const CustomText = ({ text, color, typo = "Body1", weight = "Medium" }: CustomTextProps) => {
  return (
    <Container $color={color} $typo={typo} $weight={weight}>{text}</Container>
  )
}

export default CustomText

const Container = styled.div<{
  $color: keyof DodamTheme;
  $typo: keyof TypographyStyles;
  $weight: "Bold" | "Medium" | "Regular";
}>`
  color: ${({ theme, $color }) => theme[$color]};
  ${({ $typo, $weight }) => DodamTypography[$typo][$weight]}
`;