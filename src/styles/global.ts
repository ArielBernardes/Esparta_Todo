import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'roboto mono', sans-serif;
        text-align: center;
        font-weight: 100;
        
    
  } 


  :root {
      --text: snow;
      --background: linear-gradient(to bottom, #4ecdc4, #556270);
      --background-board:linear-gradient(to top, #ada99667, #f2f2f26f, #dbdbdb57, #eaeaea84);
      
  }

  button {
      cursor: pointer;
  }
  

`;