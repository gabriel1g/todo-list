import styles from './styles.module.css';

type Props = {
  viewName: string;
  quantity: number;
  color?: 'PRIMARY' | 'SECONDARY';
};

export function ViewNumberTasks({ viewName, quantity, color = 'PRIMARY' }: Props) {
  return (
    <div className={styles.container}>
      <strong className={`${styles.view_name} ${color === 'PRIMARY' ? styles.primary : styles.secondary}`}>{viewName}</strong>
      <span className={styles.quantity}>{quantity}</span>
    </div>
  );
}
