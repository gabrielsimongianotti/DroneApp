import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"
// import { sendMessage } from '../services/webSocket';

export function ArrowDown({sendWebSocketMessage}: { sendWebSocketMessage: (message: string) => void }) {
  const [active, setActive] = useState(false)
  return (
    <TouchableHighlight
      onHideUnderlay={() => setActive(false)}
      onShowUnderlay={() => setActive(true)}
      underlayColor={active ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}
      onPress={() => {
        console.log("web:toBack")
        sendWebSocketMessage("web:toBack")
      }}
      style={styles.container}>
      {active ?
        <Svg width="205" height="40" viewBox="0 0 205 88" fill="none">
          <Path d="M10.0875 51.2173C6.99613 48.6422 6.84967 43.8789 9.86002 40.8686L42.1517 8.57687C44.9558 5.77281 49.6416 5.588 53.1334 8.13201C67.1113 18.3157 84.3289 24.325 102.952 24.325C121.575 24.325 138.793 18.3204 152.771 8.13443C156.263 5.58951 160.95 5.77393 163.755 8.5784L196.046 40.8694C199.056 43.8795 198.91 48.6423 195.819 51.2173C170.649 72.1868 138.277 84.8035 102.952 84.8035C67.6279 84.8035 35.2614 72.1869 10.0875 51.2173Z" fill="#1B4AF5" opacity={0.15} stroke="#1B4AF5" strokeWidth={5} strokeOpacity={100} />
          <Path d="M103.117 55.8488C101.073 53.8352 99.1266 51.9254 97.1923 49.9972C95.6119 48.429 94.0804 46.8121 92.4756 45.2805C89.8762 42.7971 85.5867 43.932 84.5311 47.3673C83.9941 49.1185 84.3663 50.705 85.5623 52.0901C85.6843 52.2305 85.8185 52.3647 85.9528 52.4989C91.3346 57.8807 96.7164 63.2625 102.104 68.6443C102.83 69.3704 103.209 69.3704 103.923 68.6565C109.335 63.2442 114.753 57.838 120.159 52.4135C121.49 51.0772 121.935 49.4541 121.423 47.6358C120.91 45.8175 119.677 44.6642 117.841 44.2371C116.09 43.8283 114.546 44.3225 113.277 45.5856C109.982 48.8684 106.699 52.1633 103.416 55.4583C103.294 55.5804 103.209 55.7329 103.123 55.8488L103.117 55.8488Z" fill="#1B4AF5" />
        </Svg>
        :
        <Svg width="205" height="40" viewBox="0 0 205 88" fill="none">
          <Path d="M150.639 6.27211C154.979 3.11128 161.062 3.17469 164.859 6.97103L197.147 39.2599C201.113 43.2256 201.062 49.7052 196.754 53.2956C171.147 74.6341 138.219 87.4608 102.292 87.4608C66.3656 87.4608 33.4276 74.6298 7.82405 53.2958C3.51515 49.7055 3.46453 43.2255 7.43073 39.2598L39.7232 6.97165C43.5202 3.17513 49.6045 3.11265 53.9444 6.2743C67.5104 16.1572 84.2194 21.9885 102.292 21.9885C120.364 21.9885 137.073 16.1528 150.639 6.27211Z" fill="#353538" />
          <Path d="M102.457 56.2011C100.412 54.1875 98.466 52.2777 96.5317 50.3495C94.9513 48.7813 93.4198 47.1644 91.815 45.6328C89.2156 43.1494 84.9261 44.2843 83.8705 47.7196C83.3335 49.4708 83.7057 51.0573 84.9017 52.4424C85.0237 52.5828 85.1579 52.717 85.2922 52.8512C90.674 58.233 96.0558 63.6148 101.444 68.9966C102.17 69.7227 102.548 69.7227 103.262 69.0088C108.674 63.5965 114.093 58.1903 119.499 52.7658C120.829 51.4295 121.274 49.8064 120.762 47.9881C120.249 46.1698 119.017 45.0165 117.18 44.5894C115.429 44.1806 113.885 44.6748 112.616 45.9379C109.321 49.2207 106.038 52.5157 102.756 55.8106C102.633 55.9327 102.548 56.0852 102.463 56.2011H102.457Z" fill="#1B1B1D" />
        </Svg>
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    left: 25,
    top: 110,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
});