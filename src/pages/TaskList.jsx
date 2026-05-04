
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
function TaskList() {

    const { tasks } = useContext(GlobalContext)
    console.log('Tasks:', tasks);

    return (
        <>
            <div>
                <h1> Lista delle Task </h1>
                <p> Qui verranno mostrate le task </p>
            </div>
        </>
    )
}

export default TaskList