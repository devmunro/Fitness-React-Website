import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utils/fetchData";
import ExerciseCards from "./ExerciseCards";

function Exercises({ bodyPart, exercises, setExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1200, behaviour: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Pagination
        defaultPage={1}
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        sx={{mb:"20px"}}
      />
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCards key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack>
        {exercises.length > 9 && (
          <Pagination
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
