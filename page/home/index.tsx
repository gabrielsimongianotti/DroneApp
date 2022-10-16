import { StyleSheet, View } from 'react-native';
import { Monitor } from '../../components/monito';
import { ArrowTop } from '../../assets/arrowTop';
import { ArrowLeft } from '../../assets/arrowLeft';
import { ArrowDown } from '../../assets/arrowDown';
import { ArrowRight } from '../../assets/arrowRight';
import { CardCompass } from '../../components/cardCompass';

export  function Home() {
  return (
    <View style={styles.container}>
      <Monitor />
      <View style={styles.page}>
        <View style={styles.joystick}>
          <ArrowTop />
          <ArrowLeft />
          <ArrowRight />
          <ArrowDown />
        </View>
        <CardCompass />
        <View style={styles.joystick}>
          <ArrowTop />
          <ArrowLeft />
          <ArrowRight />
          <ArrowDown />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 70,
    height: 58,
    border: "10",
    borderColor:"red"
  },
  page: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  joystick:{
    width: 140,
    height: 150,
    margin: 40,
  }
});
