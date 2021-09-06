import { Completed } from "../../components/completed"
import { Incomplete } from "../../components/incomplete"
import { AddTodo } from "../../components/addTodo"
import { Container, ContainerTodo } from "./styles"

export const Home = () => {

    return (
        <Container>
            
            <h1>Todo</h1>
            <AddTodo />
            <ContainerTodo>
                <Completed />
                <Incomplete />
            </ContainerTodo>

        </Container>
    )
}