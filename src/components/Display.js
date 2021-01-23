import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchForm from './Form'
import WeatherCard from './WeatherCard'

const Wrapper = styled.section`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 40vh;
width: 90%;
margin: 0 auto;
margin-top: 10vh;
padding: 1rem;
@media(max-width: 800px){
  height: 60vh;
  width: 95%;
}
`


export default function Display({ weather, handleSubmit, handleInputChange }) {


  const handleUnitChange = (unit) => {

  }
  


  return (
    <Wrapper>
     <WeatherCard weather = { weather || null  } /> 
     <SearchForm handleSubmit = { handleSubmit } handleInputChange = { handleInputChange } />
    </Wrapper>
  )
}
