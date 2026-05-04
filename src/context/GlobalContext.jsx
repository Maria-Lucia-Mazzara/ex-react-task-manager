import { createContext, useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;

// 1. Creazione del Context
export const GlobalContext = createContext();

// 2. Definizione del Provider 
export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        // VITE_API_URL è l'url che ho nel file .env
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Esportiamo il contesto come default per poterlo usare con useContext
export default GlobalContext