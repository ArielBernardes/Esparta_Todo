import React, { createContext, ReactNode, useContext, useState } from "react"

interface TodoProviderProps {
    children: ReactNode;
}

interface TodoProviderData {
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>
    completed: string[];
    incomplete: string[];
    completedTask: (task: string) => void;
    incompleteTask: (task: string) => void;
    delComplete:(task:number) => void;
    delIncomplete:(task:number) => void;
    createTask:(task:string) => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModalIncomplete: boolean;
    setShowModalIncomplete: React.Dispatch<React.SetStateAction<boolean>>;


}

export const TodoContext = createContext<TodoProviderData>({} as TodoProviderData);

export const TodoProvider = ({children}: TodoProviderProps) => {

    const [showModalIncomplete,setShowModalIncomplete] = useState<boolean>(false);
    const [showModal,setShowModal] = useState<boolean>(false);
    const [taskInput,setTaskInput] = useState<string>('');
    const [completed, setCompleted] = useState<string[]>([]);
    const [incomplete,setIncomplete] = useState<string[]>([]);

    const completedTask = (task:string) => {

        let newIncomplete = incomplete.filter((item) => item !== task);
         setCompleted([...completed, task]);
         setIncomplete(newIncomplete);
    }

    const incompleteTask =  (task: string) => {
        let newComplete = completed.filter((item)=> item !== task); 
        setIncomplete([...incomplete, task]);
         setCompleted(newComplete);
    }

    const delComplete = (task:number) => {
        let newComplete = completed.filter((item, index)=> index !== task);
        setCompleted(newComplete);
    }

    const delIncomplete = (task: number) => {
        let newIncomplete = incomplete.filter((item,index) => index !== task);
        setIncomplete(newIncomplete);
    }

    const createTask = (task:string) => {
        if(task){
        setIncomplete([...incomplete,task]);
        }
    }

    return (
        <TodoContext.Provider
        value = {{
            showModal,
            setShowModal,
            showModalIncomplete,
            setShowModalIncomplete,
            taskInput,
            setTaskInput,
            completed,
            completedTask,
            incomplete,
            incompleteTask,
            delIncomplete,
            createTask,
            delComplete
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);