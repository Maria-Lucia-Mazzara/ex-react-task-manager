import { memo } from 'react';

const TaskRow = memo(({ task }) => {


    const statusClassName = task.status.replace(" ", "").toLowerCase();

    return (
        <tr className="task-tr">
            <td className="task-td">{task.title}</td>

            <td className={`task-td ${statusClassName}`}>{task.status}</td>
            <td className="task-td">{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;