import { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Logo from '../../assets/images/logo.png';
import Clipboard from '../../assets/svg/clipboard.svg';
import Plus from '../../assets/svg/plus.svg';
import { TaskCard } from '../../components/TaskCard';
import { ViewNumberTasks } from '../../components/ViewNumberTasks';
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

  function handleMarkTaskAsFinished(taskDescription: string) {}

  function handleRemoveTask(taskDescription: string) {}

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

        <View style={styles.taskQuantityViewBox}>
          <ViewNumberTasks
            viewName="Criadas"
            quantity={tasks.filter((item) => item.finishedTask === false && item).length}
            color="PRIMARY"
          />

          <ViewNumberTasks
            viewName="Concluídas"
            quantity={tasks.filter((item) => item.finishedTask === true && item).length}
            color="SECONDARY"
          />
        </View>

        <FlatList
          style={styles.tasksViewBox}
          data={tasks}
          keyExtractor={(item) => item.taskDescription}
          renderItem={({ item }) => (
            <TaskCard
              taskDescription={item.taskDescription}
              finishedTask={item.finishedTask}
              onMarkTaskAsFinished={() => handleMarkTaskAsFinished(item.taskDescription)}
              onRemoveTask={() => handleRemoveTask(item.taskDescription)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListBox}>
              <Clipboard style={{ marginTop: 50 }} />

              <Text style={styles.emptyListStrongText}>Você ainda não tem tarefas cadastradas </Text>
              <Text style={styles.emptyListNormalText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
