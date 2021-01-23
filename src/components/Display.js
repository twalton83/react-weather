import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchForm from './Form'
import WeatherCard from './WeatherCard'
import API_KEY from '../config.js'

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


export default function Display() {
  const [cityName, setCityName] = useState('Los Angeles');
  const [stateCode, setStateCode] = useState('CA');
  const [countryCode, setCountryCode] = useState('US');
  const [unit, setUnit] = useState("Farenheit");
  const [data, setData] = useState(null);
 

  const fetchWeather = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${API_KEY}&units=imperial`)
    .then(res => res.status === 200 ? res.json() : null )
    .then(data => data)
    return data
  }

  const handleUnitChange = (unit) => {

  }
  
  useEffect(() => {
    // fetchWeather()
    // .then(res => setData(res))
  }, [])

  return (
    <Wrapper>
     <WeatherCard weather = { data || null  } /> 
     <SearchForm fetchWeather = { fetchWeather } setCity = { setCityName} setState = { setStateCode } setCountry = { setCountryCode }/>
    </Wrapper>
  )
}
