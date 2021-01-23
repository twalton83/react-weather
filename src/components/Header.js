import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
display: grid;
grid-template-columns: 50% 50%;
height: 8vh;

`

const TempButtons = styled.div`
display: flex;
flex-direction: row-reverse;
background-color: rgba(0,0,0, 0.65);
`

const Img = styled.img`
height: 100%;
width: auto;
`

const Button = styled.button`
background: ${props => props.currentUnit ? "rgba(179, 179, 179, .5)" : "none"};
border-radius: 5px;
border: none;
height: 3rem;
width: 3rem;
font-size: 2rem;
margin: 0 1rem;
`

export default function Navbar( { handleUnitChange, currentUnit }) {


  return (
    <Header>
        <Img alt="clouds" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTE4NC43NDMgOTUuMTc5YzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTMwLjIwNWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYzMC4yMDVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXoiLz48cGF0aCBkPSJtNDguNjYxIDE1MC4wODYtMjYuMTU5LTE1LjEwM2MtNy4xNzUtNC4xNDQtMTYuMzQ5LTEuNjg0LTIwLjQ5IDUuNDktNC4xNDIgNy4xNzUtMS42ODQgMTYuMzQ5IDUuNDkgMjAuNDlsMjYuMTU5IDE1LjEwM2M3LjE1OCA0LjEzNCAxNi4zMzkgMS43MDEgMjAuNDktNS40OSA0LjE0Mi03LjE3NSAxLjY4NC0xNi4zNDktNS40OS0yMC40OXoiLz48cGF0aCBkPSJtMzMuNjYxIDMxNS44ODEtMjYuMTU5IDE1LjEwMmMtNy4xNzQgNC4xNDItOS42MzIgMTMuMzE1LTUuNDkgMjAuNDkgNC4xNjMgNy4yMSAxMy4zNSA5LjYxNCAyMC40OSA1LjQ5bDI2LjE1OS0xNS4xMDNjNy4xNzQtNC4xNDIgOS42MzItMTMuMzE1IDUuNDktMjAuNDktNC4xNDItNy4xNzMtMTMuMzE0LTkuNjM0LTIwLjQ5LTUuNDg5eiIvPjxwYXRoIGQ9Im0zMzUuODI0IDE3Ni4wNjYgMjYuMTU5LTE1LjEwM2M3LjE3NC00LjE0MiA5LjYzMi0xMy4zMTUgNS40OS0yMC40OS00LjE0Mi03LjE3NC0xMy4zMTQtOS42MzQtMjAuNDktNS40OWwtMjYuMTU5IDE1LjEwM2MtNy4xNzQgNC4xNDItOS42MzIgMTMuMzE1LTUuNDkgMjAuNDkgNC4xNjMgNy4yMSAxMy4zNSA5LjYxNCAyMC40OSA1LjQ5eiIvPjxwYXRoIGQ9Im0zOTguOTA2IDI2Ny4yNjhjLTE3LjE3MS00Mi40MzItNTguODIzLTcwLjQ4OC0xMDQuNjQ1LTcwLjI5LTE4Ljc3Ny00MS44MDktNjAuNzk2LTcxLjAwNS0xMDkuNTE5LTcxLjAwNS02Ni4xNjggMC0xMTkuOTk5IDUzLjgzMi0xMTkuOTk5IDEyMCAwIDQyLjQ1MSAyMi4xNjggNzkuODA5IDU1LjUyNSAxMDEuMTQ3LTM1LjU2NyA1Ni4xODggNC44NzMgMTI5Ljg1MyA3MS40MSAxMjkuODUzIDIzNi4wMTItLjI0NiAyMjMuMDk4LjYwNCAyMjcuMjA4LS42NzIgNTIuNDI3LTUuOTEzIDkzLjExNC01MC4zNzkgOTMuMTE0LTEwNC4zMjcgMC02MS42MDctNTIuNjQyLTEwOS40NDEtMTEzLjA5NC0xMDQuNzA2em0tMzA0LjE2My0yMS4yOTRjMC00OS42MjYgNDAuMzc0LTkwIDkwLTkwIDMzLjQ2NSAwIDYyLjcwNSAxOC4zNyA3OC4yMTEgNDUuNTQ3LTQ3LjM5OSAxMy44ODktODAuMzEgNTcuMTYyLTgwLjgzOCAxMDYuODEtMTQuOSAxLjYzNS0yOC45NDkgNy4yMDItNDEuMDQ5IDE2LjMwMS0yNy42MDUtMTUuMzg5LTQ2LjMyNC00NC44NzQtNDYuMzI0LTc4LjY1OHptMzE4LjQ2OSAyMDAuNzQyYy01LjM0My40MzQtMTQxLjQ2NC4xODItMjIxLjUzNC4yNTgtNDkuNDYxIDAtNzMuNTY0LTYxLjMxLTM2Ljc2My05NC45MTYgMTEuMDQ2LTEwLjA4NyAyNS43NTUtMTUuNDU0IDQxLjc4My0xMy45OTYgOS42NjkuODcyIDE3LjU0OC03LjQ5MyAxNi4yMTMtMTcuMDItNi45NTQtNDkuNjMxIDMxLjQ3OS05NC4wNjggODEuNjg5LTk0LjA2OCAzNy4xNDQgMCA2OS44ODIgMjUuMDAyIDc5LjYxMiA2MC44MDEgMi4wOCA3LjY0OSA5Ljc1MyAxMi4zNTYgMTcuNTEyIDEwLjc1NSA0Ni43NTMtOS42NjkgOTAuMjc2IDI2LjA3MSA5MC4yNzYgNzMuNDQ0IDAgMzguNzU2LTMwLjIxNSA3MS41ODctNjguNzg4IDc0Ljc0MnoiLz48L2c+PC9zdmc+" />
        <TempButtons>
         <Button currentUnit = {currentUnit === "imperial"} value ="imperial" onClick={ handleUnitChange }>
            F°
         </Button>
         <Button currentUnit = {currentUnit === "metric"} value = "metric" onClick={ handleUnitChange }>
            C°
         </Button>
        </TempButtons>
    </Header>
  )
}
