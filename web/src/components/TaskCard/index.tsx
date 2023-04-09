import Check from '../../assets/svg/check.svg';
import Trash from '../../assets/svg/trash.svg';
import Uncheck from '../../assets/svg/uncheck.svg';
import { TaskDTO } from '../../dtos/TaskDTO';
import styles from './styles.module.css';

type Props = {
  onMarkTaskAsFinished: () => void;
  onRemoveTask: () => void;
};

export function TaskCard({ taskDescription, finishedTask, onMarkTaskAsFinished, onRemoveTask }: Props & TaskDTO) {
  return (
    <div className={`${styles.task_card_box} ${finishedTask && styles.finished}`}>
      <button className={styles.finished_task_button} onClick={onMarkTaskAsFinished}>
        <img src={finishedTask ? Check : Uncheck} />
      </button>

      <p className={`${styles.task_description} ${finishedTask && styles.finished}`}>{taskDescription}</p>

      <button className={styles.trash_button} onClick={onRemoveTask}>
        <img src={Trash} />
      </button>
    </div>
  );
}
