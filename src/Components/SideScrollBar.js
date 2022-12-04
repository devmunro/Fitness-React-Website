import React from "react";
import { Box } from "@mui/material";
import BodyParts from "./BodyParts";

function SideScrollBar({ data, setBodyPart, bodyPart }) {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </div>
  );
}

export default SideScrollBar;
