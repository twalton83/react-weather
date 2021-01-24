import React from 'react'
import styled from 'styled-components'
import SearchForm from './Form'
import WeatherCard from './WeatherCard'

const Wrapper = styled.section`
display: grid;
grid-template-columns: 50% 50%;
height: 90vh;
width: 100%;
margin: 0 auto;
background-color: rgba(0,0,0,.3);
@media(max-width: 800px){
  height: 60vh;
  width: 95%;
}
`


export default function Display({ weather, handleSubmit, handleInputChange, currentUnit }) {
  
  return (
    <Wrapper>
     <WeatherCard weather = { weather || null  } currentUnit = {currentUnit} /> 
     <SearchForm handleSubmit = { handleSubmit } handleInputChange = { handleInputChange } />
    </Wrapper>
  )
}
