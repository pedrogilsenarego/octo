import { Box } from "@mui/material";
import "./index.css";
import { useState } from "react";

const Incrementor = () => {
  const [value, setValue] = useState<number>(0);

  const handleValue = (signal: "minus" | "plus") => {
    if (signal === "minus" && value > 0) setValue(value - 1);
    if (signal === "plus") setValue(value + 1);
    return;
  };
  return (
    <Box display='flex' columnGap={1}>
      <Box
        style={{
          cursor: value === 0 ? "default" : "pointer",
          border: value === 0 ? "solid 2px lightGrey" : "solid 2px black",
        }}
        className='box'
        onClick={() => handleValue("minus")}
      >
        -
      </Box>
      <Box className='box'>{value}</Box>
      <Box
        style={{ cursor: "pointer" }}
        className='box'
        onClick={() => handleValue("plus")}
      >
        +
      </Box>
    </Box>
  );
};

export default Incrementor;
