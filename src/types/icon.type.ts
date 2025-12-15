import { DodamTheme } from "@b1nd/dds-web";
import { Interpolation } from "styled-components";

type IconProps = {
  color?: keyof DodamTheme | string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
  size?: number;
}

export type IconType = ({
  size,
  color,
  $svgStyle,
  $pathStyle,
}: IconProps) => JSX.Element;