import styles from "./page.module.css";
import TaskList from '@/components/TaskList';

export default async function Home() {
    // Amended this to be able to deploy to Vercel
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // Fallback for local development
    const response = await fetch(`${apiUrl}/api/tasks`, {
        cache: 'no-store'
    });
    const tasks = await response.json();

    return (
        <div className={styles.main}>
            <TaskList tasks={tasks} />
        </div>
    );
}
