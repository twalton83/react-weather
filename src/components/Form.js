import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
background-color: rgba(0,0,0, 0.65);
backdrop-filter: blur(5px);
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 50%;
color: white;
`
const Input = styled.input`
border: 1px solid grey;
height: 2rem;
border-radius: 5px;
width: 80%;
`
const Label = styled.label`
margin: 0 auto;
font-size: 1.5rem;
margin-top: .5rem;
`

const Button = styled.button`
color: white;
font-size: 1.1rem;
background-color: rgba(0,0,0, .9);
border: none;
height: 3rem;
width: 5rem;
box-shadow: 0px 0px 8px rgba(0,0,0,.2);
margin: 1rem;
`

export default function SearchForm({ handleSubmit, handleInputChange }) {
  return (
    <Section>
      <Form>
      <Label htmlFor="cityName">
        City: 
      </Label>
      <Input onChange = { handleInputChange } name = "cityName" type="text"/>

      <Label htmlFor="stateName">
        State: 
      </Label>
      <Input onChange = { handleInputChange } name = "stateCode" type="text"/>

      <Label htmlFor="countryCode">
        Country: 
      </Label>
      <Input onChange = { handleInputChange } name = "countryCode" type="text"/>

      <Button onClick={ handleSubmit }>Search</Button>
      </Form>
  </Section>

  )
}
