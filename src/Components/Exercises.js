import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utils/fetchData";

function Exercises({ bodyPart, exercises, setExercises }) {
  console.log(exercises)
  return (
    <Box id="exercises" sx={{ mt: { lg: "110" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* {exercises.length > 1 && (exercises.map((exercise, index) => (<p>{exercise.name}</p>))) } */}

      </Stack>
    </Box>
  );
}

export default Exercises;
