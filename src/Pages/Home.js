import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../Components/Exercises'
import SearchExercises from '../Components/SearchExercises'
import HeroBanner from '../Components/HeroBanner'

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises/>

    </Box>
  )
}

export default Home