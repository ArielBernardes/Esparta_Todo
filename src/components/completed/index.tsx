import { useTodo } from "../../providers/todo"
import { Container, Todo, Repeat, Delete, List } from "./styles"
import del from "../../assets/delete.svg"
import redo from "../../assets/redo.svg"
import { Modal } from "../modal"
import { useState } from "react"

export const Completed = () => {

    const [todo,setTodo] = useState(0);
    const { completed,showModal, setShowModal, incompleteTask } = useTodo();

   return (
       <Container>
           <h2>Completed:</h2>
           <List>
            {showModal && <Modal todo = {todo}/>}
            {completed.map((task,index) => <Todo key= {index}> 
            {task} 
            <div>
                <Repeat onClick = {() => incompleteTask(task)}><img src ={redo} /></Repeat>
                <Delete onClick = {() => {setTodo(index); setShowModal(true) }}><img src = {del} /></Delete>
            </div>
            </Todo>)}
            </List>
       </Container>
   ) 
}