import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../Utils/fetchData";

function SearchExercises() {

const [search, setSearch] = useState("")
const [exercises,setExercises ] = useState([])
const [bodyParts, setBodyParts] = useState([])

useEffect(() => {
const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
    setBodyParts(["all", ...bodyPartsData])
}
fetchExercisesData();
}, [])

const handleSubmit = async () => {
if(search) {
    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    
const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search) ||
exercise.target.toLowerCase().includes(search) ||
exercise.equipment.toLowerCase().includes(search) ||
exercise.bodyPart.toLowerCase().includes(search) 
)

setSearch("")
setExercises(searchedExercises)
console.log(exercises)
}

}


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px", position: "absolute", right: "0"
          }}
        >
          SEARCH
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
