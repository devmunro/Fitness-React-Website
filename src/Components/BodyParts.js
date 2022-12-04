import React from "react";
import { Stack, Typography } from "@mui/material";
import Chest from "../assets/assets/icons/bodyParts/chest.png";
import Back from "../assets/assets/icons/bodyParts/back.png";
import Main from "../assets/assets/icons/bodyParts/main.png";
import Cardio from "../assets/assets/icons/bodyParts/cardio.png";
import LowerArms from "../assets/assets/icons/bodyParts/lowerarm.png";
import LowerLegs from "../assets/assets/icons/bodyParts/lowerleg.png";
import Neck from "../assets/assets/icons/bodyParts/neck.png";
import Shoulders from "../assets/assets/icons/bodyParts/shoulders.png";
import UpperArms from "../assets/assets/icons/bodyParts/upperarm.png";
import UpperLegs from "../assets/assets/icons/bodyParts/upperleg.png";
import Waist from "../assets/assets/icons/bodyParts/abs.png";

export default function BodyParts({ item, setBodyPart, bodyPart }) {
  console.log(item);
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
        src={
          (item === "chest" && Chest) ||
          (item === "back" && Back) ||
          (item === "all" && Main) ||
          (item === "cardio" && Cardio) ||
          (item === "lower legs" && LowerLegs) ||
          (item === "lower arms" && LowerArms) ||
          (item === "neck" && Neck) ||
          (item === "shoulders" && Shoulders) ||
          (item === "upper arms" && UpperArms) ||
          (item === "upper legs" && UpperLegs) ||
          (item === "waist" && Waist)
        }
        alt="gym dumbbell icon"
        style={{ width: "60px", height: "60px" }}
      ></img>
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}
