import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {size = 20, color = 'white'} = props;
  return (
    <Svg
      height={size}
      width={size}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4 16h16"
      />
    </Svg>
  );
}

export default SvgComponent;
