import { useState, useRef, useMemo } from 'react';

const symbols = "!@#$%^&*()_-+=[]{}|;:'\",.<>/?`~";

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState("");
    //  Nuovo stato per gestire l'effetto di successo per far capire che la task è stata aggiunta 
    const [isSuccess, setIsSuccess] = useState(false);

    const descriptionRef = useRef();
    const statusRef = useRef();

    const taskTitleError = useMemo(() => {
        if (!taskTitle.trim()) {
            return "Il nome della task non può essere vuoto.";
        }
        if ([...taskTitle].some(char => symbols.includes(char))) {
            return "Il nome della task non può contenere simboli.";
        }
        return "";
    }, [taskTitle]);

    const handleSubmit = event => {
        event.preventDefault();

        if (taskTitleError) {
            return;
        }

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        };

        console.log('Task da aggiungere:', newTask);

        // aggiungiamo la task, e svuotiamo l'imput per far rimanere il form vuoto
        setIsSuccess(true);
        setTaskTitle("");
        descriptionRef.current.value = ""; a

        //  Dopo 2 secondi, il bottone ritornerà allo stato originale
        setTimeout(() => {
            setIsSuccess(false);
        }, 2000);
    };

    return (
        <div>
            <h1>Aggiungi una Task</h1>

            <form onSubmit={handleSubmit} className="add-task-form">
                <label>
                    Nome Task:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>

                {taskTitleError && !isSuccess && (
                    <p style={{ color: 'red', margin: '5px 0' }}>{taskTitleError}</p>
                )}

                <label>
                    Descrizione:
                    <textarea ref={descriptionRef} rows="4" />
                </label>

                <label>
                    Stato:
                    <select ref={statusRef} defaultValue="To do">
                        {["To do", "Doing", "Done"].map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </label>


                <button
                    type="submit"
                    disabled={!!taskTitleError && !isSuccess}
                    className={isSuccess ? "success-btn" : ""}
                >
                    {isSuccess ? "Aggiunta! ✓" : "Aggiungi Task"}
                </button>
            </form>
        </div>
    );
}