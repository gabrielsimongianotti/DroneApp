import * as React from "react"
import Svg, { Path, Circle, SvgProps } from "react-native-svg"
import { StyleSheet } from 'react-native';

export const Gyroscope = (props: SvgProps) => (
  <Svg
  style={styles.container}
  width="295" 
  height="275"
  viewBox="0 0 955 875" 
  fill="none"
  {...props}
>
  <Path
      d="M481.36 58v746.672M907.021 430.917H55.699"
      stroke="#353538"
      strokeWidth={2}
    />
    <Circle
      cx={481.36}
      cy={430.917}
      r={265.552}
      stroke="#353538"
      strokeWidth={2}
      strokeDasharray="20 20"
    />
    <Circle
      cx={481.36}
      cy={430.917}
      r={348.818}
      stroke="#353538"
      strokeWidth={2}
      strokeDasharray="20 20"
    />
    <Path
      d="M940.506 444.917v-28.563h19.246v4.979h-13.207v6.806h12.217v4.979h-12.217v6.82h13.263v4.979h-19.302ZM29.428 430.636c0 3.114-.59 5.764-1.771 7.949-1.172 2.185-2.771 3.854-4.798 5.007-2.018 1.144-4.286 1.715-6.806 1.715-2.538 0-4.816-.576-6.834-1.729-2.017-1.153-3.612-2.822-4.784-5.007-1.171-2.185-1.757-4.83-1.757-7.935 0-3.115.586-5.765 1.757-7.95 1.172-2.185 2.767-3.849 4.784-4.993 2.018-1.153 4.296-1.729 6.834-1.729 2.52 0 4.788.576 6.806 1.729 2.027 1.144 3.626 2.808 4.797 4.993 1.181 2.185 1.772 4.835 1.772 7.95Zm-6.123 0c0-2.018-.302-3.72-.906-5.105-.595-1.385-1.437-2.436-2.525-3.152-1.087-.716-2.361-1.074-3.821-1.074s-2.734.358-3.821 1.074c-1.088.716-1.934 1.767-2.539 3.152-.595 1.385-.892 3.087-.892 5.105 0 2.017.297 3.719.892 5.104.605 1.385 1.45 2.436 2.539 3.152 1.087.716 2.361 1.074 3.82 1.074 1.46 0 2.735-.358 3.822-1.074 1.088-.716 1.93-1.767 2.525-3.152.604-1.385.906-3.087.906-5.104ZM490.956 6.07v28.562h-5.216l-12.426-17.977h-.21v17.977h-6.039V6.07h5.3l12.329 17.963h.251V6.07h6.011ZM484.56 835.218c-.111-1.125-.59-1.999-1.436-2.622-.846-.623-1.995-.934-3.445-.934-.986 0-1.818.139-2.497.418-.678.27-1.199.646-1.562 1.13a2.72 2.72 0 0 0-.53 1.645c-.018.512.089.958.321 1.339.242.381.572.711.99.99.419.27.902.507 1.451.712.548.195 1.134.362 1.757.502l2.566.613c1.246.279 2.39.651 3.431 1.116 1.041.465 1.943 1.037 2.706 1.716a7.124 7.124 0 0 1 1.771 2.398c.428.921.646 1.976.655 3.166-.009 1.748-.455 3.264-1.338 4.547-.874 1.274-2.139 2.264-3.794 2.97-1.646.698-3.631 1.046-5.955 1.046-2.306 0-4.314-.353-6.025-1.06-1.701-.706-3.031-1.752-3.989-3.137-.948-1.395-1.445-3.12-1.492-5.175h5.844c.065.958.339 1.758.822 2.399.493.632 1.149 1.111 1.967 1.437.827.316 1.762.474 2.803.474 1.023 0 1.911-.149 2.664-.446.762-.298 1.353-.712 1.771-1.242.419-.53.628-1.139.628-1.827 0-.641-.191-1.181-.572-1.618-.372-.437-.92-.808-1.646-1.115-.716-.307-1.594-.586-2.636-.837l-3.11-.781c-2.408-.586-4.309-1.502-5.704-2.748-1.394-1.245-2.087-2.924-2.078-5.034-.009-1.73.451-3.24 1.381-4.533.939-1.292 2.227-2.301 3.863-3.026 1.636-.726 3.496-1.088 5.579-1.088 2.12 0 3.97.362 5.55 1.088 1.59.725 2.827 1.734 3.71 3.026.883 1.293 1.339 2.789 1.367 4.491h-5.788Z"
      fill="#E6E9F2"
      fillOpacity={0.95}
    />
  </Svg>
)

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 35,
  },
});
