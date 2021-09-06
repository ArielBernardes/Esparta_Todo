import { useTodo } from "../../providers/todo"
import { Todo, Done, Delete } from "./styles"
import del from "../../assets/delete.svg"
import done from "../../assets/done.svg"
import { Container, List } from "../completed/styles";
import { Modal } from "../modal";
import { useState } from "react";

export const Incomplete = () => {

    const [todo,setTodo] = useState(0);
    const {incomplete,completedTask,setShowModalIncomplete,showModalIncomplete} = useTodo();
    
    return (
        <Container>
            <h2>Incomplete:</h2>
            <List>
            {showModalIncomplete && <Modal todo = {todo}/>}
            {incomplete.map((todo,index) => 
                <Todo key = {index}> 
                    {todo}
                    <div>
                        <Done onClick = {() => completedTask(todo)}><img src= {done} /></Done>
                        <Delete onClick = {() =>{setTodo(index);setShowModalIncomplete(true)}}><img src = {del} /></Delete>
                    </div> 
                </Todo>
            )}
            </List>
        </Container>
    )
};