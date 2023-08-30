import React, {  useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Svg, { Path } from "react-native-svg"

export  function ArrowTop({sendWebSocketMessage}: { sendWebSocketMessage: (message: string) => void }) {
  const [active, setActive] = useState(false)
  return (
    <TouchableHighlight
    style={styles.container}
    onHideUnderlay={()=>setActive(false)} 
    onShowUnderlay={()=>setActive(true)} 
    underlayColor={active?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0)"}
    onPress={() => {
      console.log("web:toFront")
      sendWebSocketMessage("web:toFront")
    }}>
    { active ?  
      <Svg width="205" height="40" viewBox="0 0 205 89" fill="none">
        <Path d="M54.1989 82.1649C49.8592 85.3257 43.7757 85.2623 39.9794 81.466L7.69052 49.1771C3.72478 45.2114 3.77558 38.7318 8.0841 35.1414C33.6906 13.8029 66.6193 0.976192 102.546 0.976195C138.472 0.976198 171.41 13.8072 197.014 35.1412C201.323 38.7315 201.373 45.2115 197.407 49.1772L165.115 81.4654C161.318 85.2619 155.233 85.3244 150.893 82.1627C137.328 72.2799 120.619 66.4485 102.546 66.4485C84.474 66.4485 67.7649 72.2842 54.1989 82.1649Z" fill="#1B4AF5" opacity={0.15} stroke="#1B4AF5" strokeWidth={5} strokeOpacity={100} />
        <Path d="M102.382 32.2359C104.426 34.2495 106.372 36.1594 108.306 38.0876C109.887 39.6557 111.418 41.2727 113.023 42.8042C115.622 45.2877 119.912 44.1528 120.968 40.7174C121.505 38.9662 121.132 37.3798 119.936 35.9947C119.814 35.8543 119.68 35.7201 119.546 35.5858C114.164 30.204 108.782 24.8223 103.394 19.4405C102.668 18.7144 102.29 18.7143 101.576 19.4282C96.1639 24.8405 90.7454 30.2467 85.3392 35.6712C84.0091 37.0075 83.5636 38.6306 84.0762 40.449C84.5887 42.2673 85.8213 43.4205 87.6579 43.8477C89.4092 44.2565 90.9529 43.7622 92.2221 42.4992C95.5171 39.2164 98.7998 35.9214 102.083 32.6264C102.205 32.5044 102.29 32.3519 102.375 32.2359L102.382 32.2359Z" fill="#1B4AF5"/>
      </Svg>
    :
      <Svg width="205" height="40" viewBox="0 0 205 89" fill="none">
        <Path d="M54.1989 82.1649C49.8592 85.3257 43.7757 85.2623 39.9794 81.466L7.69052 49.1771C3.72478 45.2114 3.77558 38.7318 8.0841 35.1414C33.6906 13.8029 66.6193 0.976192 102.546 0.976195C138.472 0.976198 171.41 13.8072 197.014 35.1412C201.323 38.7315 201.373 45.2115 197.407 49.1772L165.115 81.4654C161.318 85.2619 155.233 85.3244 150.893 82.1627C137.328 72.2799 120.619 66.4485 102.546 66.4485C84.474 66.4485 67.7649 72.2842 54.1989 82.1649Z" fill="#353538"/>
        <Path d="M102.382 32.2359C104.426 34.2495 106.372 36.1594 108.306 38.0876C109.887 39.6557 111.418 41.2727 113.023 42.8042C115.622 45.2877 119.912 44.1528 120.968 40.7174C121.505 38.9662 121.132 37.3798 119.936 35.9947C119.814 35.8543 119.68 35.7201 119.546 35.5858C114.164 30.204 108.782 24.8223 103.394 19.4405C102.668 18.7144 102.29 18.7143 101.576 19.4282C96.1639 24.8405 90.7454 30.2467 85.3392 35.6712C84.0091 37.0075 83.5636 38.6306 84.0762 40.449C84.5887 42.2673 85.8213 43.4205 87.6579 43.8477C89.4092 44.2565 90.9529 43.7622 92.2221 42.4992C95.5171 39.2164 98.7998 35.9214 102.083 32.6264C102.205 32.5044 102.29 32.3519 102.375 32.2359L102.382 32.2359Z" fill="#1B1B1D"/>
      </Svg>
    }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 4,
    width: 133,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
});