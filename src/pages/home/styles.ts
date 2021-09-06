import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background);
    background-repeat: repeat;
    color: var(--text); 
    height: 100vh;

    h1 {
        margin: 2rem;
        font-size: 3rem;
        font-weight: 100;
    }

    
`;

export const ContainerTodo = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        margin-top: 2rem;
        flex-direction: row;
    }
`;