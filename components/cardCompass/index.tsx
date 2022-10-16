import { StyleSheet, Image, View } from 'react-native';
import { Gyroscope } from '../../assets/gyroscope';
import { Compass } from '../../assets/compass';

export function CardCompass() {
  return (
  <View style={styles.compass}>
    <Gyroscope />
    <Compass />
  </View>
  );
}

const styles = StyleSheet.create({
  compass: {
    
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: "15%",
    justifyContent: "center",
    transform: [{ rotate: '-1deg'}],
    width: 300,
    height: 300,
  },
});
