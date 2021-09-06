import { ReactNode } from "react"
import { TodoProvider } from "./todo"

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
    
    return (
        <TodoProvider>
            {children}
        </TodoProvider>
    )
}