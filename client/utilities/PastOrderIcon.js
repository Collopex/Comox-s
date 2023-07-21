import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const PastOrderIcon = () => {
  return (
    <View>
      <Svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.3135 23.1563L23.8021 18.7L22.4458 17.3438L19.3135 20.4115L18.0542 19.1521L16.6979 20.5406L19.3135 23.1563ZM4.75 8.625H20.25V6.04167H4.75V8.625ZM20.25 26.7083C18.4632 26.7083 16.9403 26.0789 15.6814 24.8199C14.4216 23.5601 13.7917 22.0368 13.7917 20.25C13.7917 18.4632 14.4216 16.9399 15.6814 15.6801C16.9403 14.4211 18.4632 13.7917 20.25 13.7917C22.0368 13.7917 23.5601 14.4211 24.8199 15.6801C26.0789 16.9399 26.7083 18.4632 26.7083 20.25C26.7083 22.0368 26.0789 23.5601 24.8199 24.8199C23.5601 26.0789 22.0368 26.7083 20.25 26.7083ZM0.875 25.4167V0.875H24.125V12.0802C23.5222 11.7788 22.8928 11.5579 22.2366 11.4176C21.5796 11.2781 20.9174 11.2083 20.25 11.2083H4.75V13.7917H13.9208C13.5549 14.1576 13.2156 14.5559 12.903 14.9865C12.5913 15.417 12.317 15.8799 12.0802 16.375H4.75V18.9583H11.3052C11.2622 19.1736 11.235 19.3837 11.2238 19.5887C11.2135 19.7928 11.2083 20.0132 11.2083 20.25C11.2083 21.1542 11.3323 22.0209 11.5803 22.8501C11.8275 23.6785 12.1986 24.4694 12.6938 25.2229L12.5 25.4167L10.5625 23.4792L8.625 25.4167L6.6875 23.4792L4.75 25.4167L2.8125 23.4792L0.875 25.4167Z"
          fill="#EF233C"
        />
      </Svg>
    </View>
  );
};

export default PastOrderIcon;
