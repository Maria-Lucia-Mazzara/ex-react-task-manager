
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
    const { tasks } = useContext(GlobalContext);

    return (
        <div>
            <h1>Lista delle Task</h1>
            <table className="task-table">
                <thead>
                    <tr>
                        <th className="task-th">Nome</th>
                        <th className="task-th">Status</th>
                        <th className="task-th">Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}