import styles from "./page.module.css";
import TaskList from '@/components/TaskList';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/tasks', {
    cache: 'no-store'
  });
  const tasks = await response.json();
  
  return (
    <div className={styles.main}>
      <TaskList />
    </div>
  );
}
