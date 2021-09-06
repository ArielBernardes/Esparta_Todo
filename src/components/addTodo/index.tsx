import { useTodo } from "../../providers/todo";
import { Input, Button, Container } from "./styles";

export const AddTodo = () => {

    const {createTask,taskInput,setTaskInput} = useTodo();
    
    return (
        <Container>
            <Input value = {taskInput} onChange = {(e) => setTaskInput(e.target.value)}/>
            <Button onClick = {() => { createTask(taskInput); setTaskInput('');}}>Add Task</Button>
        </Container>
    )
}