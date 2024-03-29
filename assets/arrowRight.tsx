import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export  function ArrowRight({sendWebSocketMessage}: { sendWebSocketMessage: (message: string) => void }) {
  const [active, setActive] = useState(false)
  return (
    <TouchableHighlight 
    onPressOut={()=>setActive(false)} 
    onPressIn={()=>setActive(true)}
    underlayColor={active?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0)"}    
    style={styles.container}
    onPress={() => {
      console.log("web:turnRight")
      sendWebSocketMessage("web:turnRight")
    }}>
     {active? 
      <Svg width="40" height="205" viewBox="0 0 88 205" fill="none" >
        <Path d="M41.181 195.732L8.88936 163.441C6.0853 160.637 5.9005 155.951 8.4445 152.459C18.6281 138.481 24.6375 121.263 24.6375 102.64C24.6375 84.0171 18.6329 66.7996 8.44694 52.8214C5.90201 49.329 6.08643 44.6421 8.8909 41.8377L41.1819 9.54667C44.192 6.53654 48.9548 6.68277 51.5298 9.77361C72.4993 34.9437 85.116 67.3152 85.116 102.64C85.116 137.964 72.4994 170.331 51.5298 195.505C48.9547 198.596 44.1914 198.743 41.181 195.732Z" fill="#1B4AF5" opacity={0.15} stroke="#1B4AF5" strokeWidth={5} strokeOpacity={100} />
        <Path d="M56.1613 102.475C54.1477 104.519 52.2379 106.466 50.3097 108.4C48.7415 109.98 47.1246 111.512 45.593 113.117C43.1096 115.716 44.2445 120.006 47.6798 121.061C49.431 121.598 51.0175 121.226 52.4026 120.03C52.543 119.908 52.6772 119.774 52.8114 119.639C58.1932 114.258 63.575 108.876 68.9568 103.488C69.6829 102.762 69.6829 102.384 68.969 101.67C63.5567 96.2574 58.1505 90.839 52.726 85.4328C51.3897 84.1026 49.7666 83.6572 47.9483 84.1697C46.13 84.6823 44.9767 85.9149 44.5496 87.7515C44.1408 89.5027 44.635 91.0465 45.8981 92.3156C49.1809 95.6106 52.4758 98.8934 55.7708 102.176C55.8929 102.298 56.0454 102.384 56.1613 102.469L56.1613 102.475Z" fill="#1B4AF5"/>
      </Svg>
     : 
      <Svg width="40" height="205" viewBox="0 0 88 205" fill="none" >
        <Path d="M6.14675 54.4497C2.98593 50.11 3.04934 44.0265 6.84568 40.2302L39.1345 7.9414C43.1003 3.97564 49.5798 4.02647 53.1701 8.33511C74.5043 33.9378 87.3355 66.8715 87.3355 102.803C87.3355 138.736 74.5088 171.66 53.1703 197.265C49.5798 201.574 43.1003 201.625 39.1345 197.659L6.84567 165.37C3.04934 161.574 2.98593 155.49 6.14693 151.151C16.0275 137.586 21.8631 120.881 21.8631 102.803C21.8631 84.7258 16.0274 68.0159 6.14675 54.4497Z" fill="#353538"/>
        <Path d="M55.598 102.73C53.5844 104.774 51.6746 106.721 49.7464 108.655C48.1783 110.235 46.5613 111.767 45.0297 113.372C42.5463 115.971 43.6812 120.261 47.1165 121.316C48.8678 121.853 50.4542 121.481 51.8393 120.285C51.9797 120.163 52.1139 120.029 52.2482 119.894C57.6299 114.513 63.0117 109.131 68.3935 103.743C69.1196 103.017 69.1196 102.639 68.4057 101.925C62.9934 96.5124 57.5872 91.094 52.1627 85.6878C50.8264 84.3576 49.2034 83.9121 47.385 84.4247C45.5667 84.9372 44.4134 86.1698 43.9863 88.0064C43.5775 89.7577 44.0718 91.3014 45.3348 92.5706C48.6176 95.8656 51.9126 99.1483 55.2075 102.431C55.3296 102.553 55.4821 102.639 55.598 102.724V102.73Z" fill="#1B1B1D"/>
      </Svg>
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 40,
    top: 35,
    left: 100,
    position: "absolute",
    justifyContent: 'center',
  },
});