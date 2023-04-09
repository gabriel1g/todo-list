import { ChangeEvent, FormEvent, useState } from 'react';

import Swal from 'sweetalert2';

import Logo from '../../assets/images/logo.png';
import Clipboard from '../../assets/svg/clipboard.svg';
import Plus from '../../assets/svg/plus.svg';
import { TaskCard } from '../../components/TaskCard';
import { ViewNumberTasks } from '../../components/ViewNumberTasks';
import { TaskDTO } from '../../dtos/TaskDTO';
import styles from './styles.module.css';

export function Home() {
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  class Form {
    handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
      setTaskDescription(e.target.value);
    }
  }

  function handleAddTask(e: FormEvent) {
    e.preventDefault();

    var existingTask = false;
    tasks.filter((item) => {
      if (item.taskDescription === taskDescription) {
        existingTask = true;
      }
    });

    if (existingTask) {
      Swal.fire({
        title: 'Problemas ao adicionar tarefa',
        text: 'Esta tarefa já existe! Crie uma com um nome diferente',
        icon: 'info',
        timer: 3000,
        timerProgressBar: true,
        background: 'var(--gray-500)',
        color: 'var(--gray-100)',
      });
    } else {
      setTasks((prevState) => [...prevState, { taskDescription, finishedTask: false }]);
      setTaskDescription('');
    }
  }

  function handleMarkTaskAsFinished(taskDescription: string) {}

  function handleRemoveTask(taskDescription: string) {}

  return (
    <div className={styles.container}>
      <header className={styles.header_box}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </header>

      <main className={styles.content_box}>
        <form className={styles.form_add_tasks} onSubmit={handleAddTask}>
          <input
            className={styles.tasks_input}
            onChange={new Form().handleNewTaskChange}
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={taskDescription}
          />
          <button className={styles.add_tasks_button}>
            Criar
            <img className={styles.plus_icon} src={Plus} />
          </button>
        </form>

        <div className={styles.task_quantity_view_box}>
          <ViewNumberTasks
            viewName="Tarefas criadas"
            quantity={tasks.filter((item) => item.finishedTask === false).length}
            color="PRIMARY"
          />
          <ViewNumberTasks
            viewName="Tarefas concluídas"
            quantity={tasks.filter((item) => item.finishedTask === true).length}
            color="SECONDARY"
          />
        </div>

        <div className={styles.tasks_view_box}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.taskDescription}
                taskDescription={task.taskDescription}
                finishedTask={task.finishedTask}
                onMarkTaskAsFinished={() => handleMarkTaskAsFinished(task.taskDescription)}
                onRemoveTask={() => handleRemoveTask(task.taskDescription)}
              />
            ))
          ) : (
            <div className={styles.empty_list_box}>
              <img src={Clipboard} />
              <p className={styles.empty_list_strong_text}>Você ainda não tem tarefas cadastradas</p>
              <p className={styles.empty_list_normal_text}>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
