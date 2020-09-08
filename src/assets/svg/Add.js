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
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default SvgComponent;
