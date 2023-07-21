import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const AdjustmentIcon = () => {
  return (
    <View>
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          id="adjusment"
          d="M0 15.5556V17.7778H6.66667V15.5556H0ZM0 2.22222V4.44444H11.1111V2.22222H0ZM11.1111 20V17.7778H20V15.5556H11.1111V13.3333H8.88889V20H11.1111ZM4.44444 6.66667V8.88889H0V11.1111H4.44444V13.3333H6.66667V6.66667H4.44444ZM20 11.1111V8.88889H8.88889V11.1111H20ZM13.3333 6.66667H15.5556V4.44444H20V2.22222H15.5556V0H13.3333V6.66667Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default AdjustmentIcon;
