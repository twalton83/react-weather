import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
display: grid;
grid-template-columns: 50% 50%;
height: 10vh;
background-color: rgba(0,0,0,.3);
`

const TempButtons = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
outline: none;
background-color: rgba(0,0,0, 0.65);
backdrop-filter: blur(10px);
height: 10vh;
`

const H1 = styled.h1`
color: white;
text-align: center;
`

const Button = styled.button`
background: ${props => props.currentUnit ? "rgba(179, 179, 179, .5)" : "none"};
border-radius: 5px;
border: none;
height: 3rem;
width: 3rem;
font-size: 2rem;
margin: 0 1rem;
color: white;
&:focus {
  outline: black;
}
`

export default function Navbar( { handleUnitChange, currentUnit }) {


  return (
    <Header>
       <H1>My.Weather</H1>
        <TempButtons>
         <Button currentUnit = {currentUnit === "Farenheit"} value ="Farenheit" onClick={ handleUnitChange }>
            F°
         </Button>
         <Button currentUnit = {currentUnit === "Celsius"} value = "Celsius" onClick={ handleUnitChange }>
            C°
         </Button>
        </TempButtons>
    </Header>
  )
}
