import { Box } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { Colors } from "../../constants/pallete";

interface Props {
  minimumOne?: boolean
}

const Incrementor = ({ minimumOne }: Props) => {
  const [value, setValue] = useState<number>(minimumOne ? 1 : 0);

  const handleValue = (signal: "minus" | "plus") => {
    if (signal === "minus" && value > (minimumOne ? 1 : 0)) setValue(value - 1);
    if (signal === "plus") setValue(value + 1);
    return;
  };
  return (
    <Box display='flex' columnGap={1}>
      <Box
        style={{
          cursor: value === (minimumOne ? 1 : 0) ? "default" : "pointer",
          border: value === (minimumOne ? 1 : 0) ? "solid 2px lightGrey" : `solid 2px ${Colors.BLACKISH}`,
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
