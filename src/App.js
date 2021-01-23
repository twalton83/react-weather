import './App.css';
import React, { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import styled from 'styled-components'
import API_KEY from './config.js'

const AppWrapper = styled.div`
height: 100vh;
width: 100vh;
background: ${props => props.background};
`
function App() {

  const [data, setData] = useState(null);

  const [queryValues, setQueryValues] = useState({
    cityName: 'Irvine',
    stateCode: 'CA',
    countryCode: 'US',
    unit: 'imperial'
  })

  const fetchWeather = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queryValues.cityName},${queryValues.stateCode},${queryValues.countryCode}&appid=${API_KEY}&units=${queryValues.unit}`)
    .then(res => res.status === 200 ? res.json() : null )
    .then(data => data)
    return data
    }

  useEffect(() => {
    fetchWeather()
    .then(res => setData(res))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setQueryValues({...queryValues, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchWeather()
      .then(res => setData(res))
  }

  const handleUnitChange = (e) => {
    setQueryValues({...queryValues, unit: e.target.value })
  }

  return (
    <AppWrapper>
      <Header handleUnitChange = { handleUnitChange } />
      <Display 
        weather = { data }
        handleSubmit = { handleSubmit } 
        handleInputChange = { handleInputChange }
      />
    </AppWrapper>
  );
}

export default App;
