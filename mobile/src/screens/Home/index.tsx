import { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';

import Logo from '../../assets/images/logo.png';
import Plus from '../../assets/svg/plus.svg';
import { TasksDTO } from '../../dtos/TasksDTO';
import { styles } from './styles';

export function Home() {
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [tasks, setTasks] = useState<TasksDTO[]>([]);

  function handleAddTask() {
    var existingTask = false;

    tasks.filter((item) => {
      if (item.taskDescription === taskDescription) {
        existingTask = true;
      }
    });

    if (existingTask) {
      return Alert.alert('Problemas ao adicionar tarefa', 'Esta tarefa já existe! Crie uma com um nome diferente.');
    } else {
      setTasks((prevState) => [...prevState, { taskDescription, finishedTask: false }]);
      setTaskDescription('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.contentBox}>
        <View style={styles.form}>
          <TextInput
            style={styles.tasksInput}
            onChangeText={setTaskDescription}
            onSubmitEditing={handleAddTask}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={taskDescription}
          />

          <TouchableOpacity style={styles.addTasksButton} onPress={handleAddTask}>
            <Plus height={18} width={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
