import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchForm from './Form'
import API_KEY from '../config.js'

const Wrapper = styled.section`
height: 40vh;
width: 30vw;
background-color: white;
margin: 0 auto;
margin-top: 10vh;
@media(max-width: 800px){
  height: 60vh;
  width: 95%;
}
`

export default function Display() {


  const [cityName, setCityName] = useState('Los Angeles');
  const [stateCode, setStateCode] = useState('CA');
  const [countryCode, setCountryCode] = useState('US');
 

  const fetchWeather = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${API_KEY}&unit=imperial`)
    .then(res => {
      return res.json()
    })
    return data
  }

  return (
    <Wrapper>
      <h1>
        { `${cityName}, ${stateCode}, ${countryCode}`}
      </h1>

     <SearchForm fetchWeather = { fetchWeather } setCity = { setCityName} setState = { setStateCode } setCountry = { setCountryCode }/>

    </Wrapper>
  )
}
