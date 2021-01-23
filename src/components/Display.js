import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchForm from './Form'
import WeatherCard from './WeatherCard'

const Wrapper = styled.section`
display: grid;
grid-template-columns: 50% 50%;
height: 100%;
width: 100%;
margin: 0 auto;
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
