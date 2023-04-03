import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  viewName: string;
  quantity: number;
  color?: 'PRIMARY' | 'SECONDARY';
};

export function ViewNumberTasks({ viewName, quantity, color = 'PRIMARY' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.viewName, color: color === 'PRIMARY' ? '#4EA8DE' : '#8284FA' }}>{viewName}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
}
