import React from 'react'
import '../App.css';
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/assets/images/absBanner.jpg'

function HeroBanner() {
  return (
    <Box sx={{
        mt: {lg: "212px", xs:"70px"}, ml: {sm:"50px"}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeigth="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeigth="700" sx={{
        fontSize: {lg: "44px", xs:"40px"}}}>Sweat, Smile <br/> and Repeat</Typography>
        <Typography fontSize="22px" mb="4px" lineHeight="35px">Check out the most effective exercises</Typography>
        <Button variant="contained" color="error" href='#exercises'>Explore Exercises</Button>
        <Typography fontWeight="600px" color="white" fontSize="200px" className="display-word" sx={{opacity: 0.5, display: {lg:"block", xs:"none"} }}>EXERCISE</Typography>
        <img src={HeroBannerImage} alt="banner"
        className="hero-banner-img"></img>
    </Box>
  )
}

export default HeroBanner