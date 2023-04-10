import { Box } from "@mui/material";
import "./index.css";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/pallete";

interface Props {
  minimumOne?: boolean
  initialValue?: number
  updateValue?: (value: number) => void
}

const Incrementor = ({ minimumOne, initialValue, updateValue }: Props) => {
  const [value, setValue] = useState<number>(initialValue || 0);

  const handleValue = (signal: "minus" | "plus") => {
    let newValue = value;
    if (signal === "minus" && newValue > (minimumOne ? 1 : 0)) {
      newValue -= 1;
    } else if (signal === "plus") {
      newValue += 1;
    }
    setValue(newValue);

    if (updateValue) {
      updateValue(newValue);
    }
  };

  // Use the initialValue prop as the initial value for the state
  // value of the incrementor
  useEffect(() => {
    setValue(initialValue || 0);
  }, [initialValue]);

  return (
    <Box display='flex' columnGap={1}>
      <Box
        style={{
          cursor: value === (minimumOne ? 1 : 0) ? "default" : "pointer",
          border: value === (minimumOne ? 1 : 0) ? "solid 2px lightGrey" : `solid 2px ${Colors.BLACKISH}`,
        }}
        className='box'
        onClick={(e) => { e.preventDefault(); handleValue("minus") }}
      >
        -
      </Box>
      <Box className='box'>{value}</Box>
      <Box
        style={{ cursor: "pointer" }}
        className='box'
        onClick={(e) => { e.preventDefault(); handleValue("plus") }}
      >
        +
      </Box>
    </Box>
  );
};


export default Incrementor;
