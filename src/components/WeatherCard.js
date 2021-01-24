import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 3rem;
width: 100%;
font-size: 2.5rem;
text-align: left;
color: white;
& p {
  margin: .5rem;
}
`

export default function WeatherCard({ weather, currentUnit }) {

  const kelvinToCelsius = (temp) => {
    return (temp - 273.15).toFixed(1)
  }

  const kelvinToFarenheit = (temp) => {
    return ((temp - 273.15) * 9/5 + 32).toFixed(1)
  }
  return (
    <Card>
      { weather &&
        <div>
        <h1>
          { weather.name }
        </h1>
        
        <p>
          { weather.weather[0].main }
        </p>

        <p> 
          Current: { currentUnit === "Farenheit" ? kelvinToFarenheit(weather.main.temp) : kelvinToCelsius(weather.main.temp) }° 
        </p>
        <p>
          High: { currentUnit === "Farenheit" ? kelvinToFarenheit(weather.main.temp_max) : kelvinToCelsius(weather.main.temp_max) }° 
        </p>
        <p>
          Low:  { currentUnit === "Farenheit" ? kelvinToFarenheit(weather.main.temp_min) : kelvinToCelsius(weather.main.temp_min) }° 
        </p>
        </div>
      } 
      { !weather && <h1>Could not fetch the weather!</h1>}
    </Card>
  )
}
