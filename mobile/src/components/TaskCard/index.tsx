import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import Check from '../../assets/svg/check.svg';
import Trash from '../../assets/svg/trash.svg';
import Uncheck from '../../assets/svg/uncheck.svg';
import { TaskDTO } from '../../dtos/TaskDTO';
import { styles } from './styles';

type Props = {
  onMarkTaskAsFinished: () => void;
  onRemoveTask: () => void;
};

export function TaskCard({ taskDescription, finishedTask, onMarkTaskAsFinished, onRemoveTask }: Props & TaskDTO) {
  return (
    <View style={finishedTask ? { ...styles.taskCardBox, ...styles.finishedTaskCardBox } : { ...styles.taskCardBox }}>
      <TouchableOpacity onPress={onMarkTaskAsFinished}>{finishedTask ? <Check /> : <Uncheck />}</TouchableOpacity>

      <Text style={finishedTask ? { ...styles.taskDescription, ...styles.finishedTaskDescription } : { ...styles.taskDescription }}>
        {taskDescription}
      </Text>

      <TouchableOpacity onPress={onRemoveTask}>
        <Trash height={40} width={40} />
      </TouchableOpacity>
    </View>
  );
}
