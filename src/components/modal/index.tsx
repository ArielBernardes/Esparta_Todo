import { useTodo } from "../../providers/todo"
import { Button } from "../addTodo/styles"
import { ModalContainer, Container } from "./styles"

interface IModal {
    todo: number;
}

export const Modal = ({todo} : IModal) => {

    const {setShowModal,showModal,delComplete, delIncomplete, setShowModalIncomplete} = useTodo();

    const handleDelComplete = (todo:number) => {
        delComplete(todo);
        setShowModal(false);  
    }
    const handleDelIncomplete = (todo:number) => {
        delIncomplete(todo);
        setShowModalIncomplete(false);
    }

    return (
        <Container>
            <ModalContainer>
                <h2>Are you sure?</h2>
                {showModal ?
                <>
                    <Button onClick = {() => handleDelComplete(todo)}>Delete</Button>
                    <Button onClick = {() => setShowModal(false)}>Cancel</Button>
                </>
                :
                <>
                    <Button onClick = {() => handleDelIncomplete(todo)}>Delete</Button>
                    <Button onClick = {() => setShowModalIncomplete(false)}>Cancel</Button>
                </>  
                    }
            </ModalContainer>
        </Container>
    )
}