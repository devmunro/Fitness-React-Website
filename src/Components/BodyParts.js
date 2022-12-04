import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/assets/icons/gym.png";

export default function BodyParts({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF265" : "",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="gym dumbbell icon"
        styles={{ width: "40px", height: "40px" }}
      ></img>
    </Stack>
  );
}
