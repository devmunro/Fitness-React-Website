import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/assets/icons/bodyParts/fit.png'

function Navbar() {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    backgroundColor="#110920"
    sx={{gap:{sm:'122px', xs:'40px'}, justifyContent: 'none'}} px="20px" width="100%">
        <Link to="/">
        <img src={Logo} alt="Gym Logo of a muscle flex" style={{width: '48px', height: '48px', margin: '0 20px'}}></img>
        </Link>
<Stack
direction="row"
gap="40px"
fontSize="24px"
alignItems="flex-end">
    <Link to="/" style={{textdecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625'}}>Home</Link>
    <a href="#exercises" style={{textdecoration: 'none', color: 'white'}}> Exercises</a>
</Stack>
    </Stack>
    
  )
}

export default Navbar