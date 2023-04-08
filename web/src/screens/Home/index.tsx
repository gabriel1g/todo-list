import Logo from '../../assets/images/logo.png';
import Plus from '../../assets/svg/plus.svg';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header_box}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </header>

      <main className={styles.content_box}>
        <form className={styles.form_add_tasks}>
          <input className={styles.tasks_input} placeholder="Adicione uma nova tarefa" type="text" />
          <button>
            Criar
            <img className={styles.plus_icon} src={Plus} />
          </button>
        </form>
      </main>
    </div>
  );
}
