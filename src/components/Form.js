import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100%;
background-color: rgba(0,0,0, 0.65)
`
const Input = styled.input`
border: 1px solid grey;
height: 2rem;
border-radius: 5px;
width: 80%;
`
const Label = styled.label`
display: block;
width: 100%;
`

const Button = styled.button`
border-radius: 5px;
background-color: lightblue;
border: none;
height: 2rem;
width: 5rem;
box-shadow: 0px 0px 8px rgba(0,0,0,.2);
`

export default function SearchForm({ handleSubmit, handleInputChange }) {
  return (
    <Form>
    <Label htmlFor="cityName">
      City: 
      <Input onChange = { handleInputChange } name = "cityName" type="text"></Input>
    </Label>


    <Label htmlFor="stateName">
      State: 
      <Input onChange = { handleInputChange } name = "stateCode" type="text"></Input>
    </Label>


    <Label htmlFor="countryCode">
      Country: 
      <Input onChange = { handleInputChange } name = "countryCode" type="text"></Input>
    </Label>
    <Button onClick={ handleSubmit }>Submit</Button>
  </Form>

  )
}
