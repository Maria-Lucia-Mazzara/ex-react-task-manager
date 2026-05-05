import { memo } from 'react';
import { Link } from 'react-router-dom';

const TaskRow = memo(({ task }) => {
    const statusClassName = task.status.replace(" ", "").toLowerCase();

    return (
        <tr className="task-tr">
            <td className="task-td">

                <Link to={`/task/${task.id}`}>{task.title}</Link>
            </td>
            <td className={`task-td ${statusClassName}`}>{task.status}</td>
            <td className="task-td">{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;