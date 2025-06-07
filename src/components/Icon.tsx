import React from "react";
import { SvgProps } from "react-native-svg";

import logo from "../../assets/resources/lina.svg";
import google from "../../assets/resources/google.svg";


const icons: Record<string, React.FC<SvgProps>> = {
  logo,
  google
};

type IconProps = SvgProps & {
  name: keyof typeof icons;
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = icons[name];
  return <SvgIcon {...props} />;
};

export default Icon;
