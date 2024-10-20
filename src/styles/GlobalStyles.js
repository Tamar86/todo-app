import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{


*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  
/*Colors */
/*Primary */

--Bright-Blue: hsl(220, 98%, 61%);
/* Check Background: linear-gradient */

--Sky-Blue:hsl(192, 100%, 67%);
/* to */
--Purple-Blue: hsl(280, 87%, 65%);

/* Neutral */
/* Light Theme */

--Very-Light-Gray: hsl(0, 0%, 98%);
--Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
--Light-Grayish-Blue: hsl(233, 11%, 84%);
--Dark-Grayish-Blue: hsl(236, 9%, 61%);
--Very-Dark-Grayish-Blue: hsl(235, 19%, 35%);

 /* Dark Theme */

--Very-Dark-Blue: hsl(235, 21%, 11%);
--Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);      /*Desaturated*/
--Light-Grayish-Blue: hsl(234, 39%, 85%);
--Light-Grayish-hover-Blue : hsl(236, 33%, 92%);     /*hover*/
--Dark-Grayish-Blue: hsl(234, 11%, 52%);
--Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
--Very-Dark-Grayish-Blue: hsl(237, 14%, 26%);
}


body, html {
  /* height: 100%; */
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
 
  /* background-color: var(--Very-Dark-Blue); */
}

input{











}



`;

export default GlobalStyles;
