import { Image, View } from 'react-native';

import Logo from '../../assets/images/logo.png';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.contentBox}></View>
    </View>
  );
}
