import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--background-board);
    width: 300px;
    margin: 1rem;
    border-radius: 5px;
    
    @media (min-width: 769px) {
        width: 500px;
        height: 300px;
    }

`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 20vh;
    

    @media(min-width: 769px) {
        height: 450px;

    }
    
`;

export const Todo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const Repeat = styled.button`
    width: 30px;
border: none;
margin: 0px 1rem;
background-color: transparent;
`;

export const Delete = styled.button`
    width: 30px;
    border: none;
    margin: 0px 1rem;
    background-color: transparent;
`;
