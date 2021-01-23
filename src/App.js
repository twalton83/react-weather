import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import styled from 'styled-components'
import API_KEY from './config.js'
import clearImage from './images/clear.jpg'
import cloudyImage from './images/cloudy.jpg'
import rainyImage from './images/rainy.jpg'

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
background: url(${props => props.background});
background-size: cover;

`
function App() {

  const [data, setData] = useState(null);

  const [weatherBackground, setWeatherBackground] = useState(null);

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

  const handleBackground = (weather) => {
    const condition = weather.toLowerCase()
    if(condition === "clear") return clearImage
    if(condition === "rainy") return rainyImage
    if(condition === "clouds") return cloudyImage
    return clearImage
  }

  useEffect(() => {
    if(data){
    const background = handleBackground(data.weather[0].main)
    setWeatherBackground(background)
    }
  }, [data])


  return (
    <AppWrapper background = { weatherBackground }>
      <Header 
      currentUnit = { queryValues.unit }
      handleUnitChange = { handleUnitChange } />
      <Display 
        weather = { data }
        handleSubmit = { handleSubmit } 
        handleInputChange = { handleInputChange }
      />
    </AppWrapper>
  );
}

export default App;
