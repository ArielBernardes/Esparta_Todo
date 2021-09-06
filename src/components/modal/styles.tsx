import styled from "styled-components";

export const Container = styled.div`
  background-color:rgba(0, 0, 0, 0.8); ;
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

`;

export const ModalContainer = styled.div`
    background:var(--background);
    width: 300px;
    height: 200px;
    
    h2 {
        margin: 2rem;
    }

    button { 
        margin: 2rem;
    }

`;