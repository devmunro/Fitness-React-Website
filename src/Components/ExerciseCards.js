import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

export default function ExerciseCards({ exercise, key }) {
  return (
    <Link key="key" className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2px",
            color: "#fff",
            backgroundColor: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </p>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2px",
            margin: "2px",
            color: "#fff",
            backgroundColor: "Orange",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}
