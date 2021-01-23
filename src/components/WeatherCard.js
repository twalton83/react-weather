import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
min-height: 3rem;
width: 50%;
font-size: 2rem;
text-align: left;
`

export default function WeatherCard({ weather }) {
  return (
    <Card>
      <p>
        { weather ? weather.weather[0].main : "loading..." }
      </p>

      <p> 
        Current: {weather ? weather.main.temp : "Could not fetch weather"} 
      </p>
      <p>
        High: {weather ? weather.main.temp_max : "Could not fetch weather"} 
      </p>
      <p>
        Low: {weather ? weather.main.temp_min : "Could not fetch weather"} 
      </p>
    </Card>
  )
}
