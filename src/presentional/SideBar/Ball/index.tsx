import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../../../constants/pallete";
import { scrollTo } from "../../../slicer/general/general.actions";

interface Props {
  pos: number;
}

const Ball = ({ pos }: Props) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (pos: number) => {
    dispatch(scrollTo(pos));
  };
  return (
    <Box
      style={{
        cursor: "pointer",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        width: "25px",
        height: "25px",
      }}
      onClick={() => handleClick(pos)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        key={pos}
        style={{
          margin: hover ? "0px" : "15px",
          width: hover ? "20px" : "15px",
          height: hover ? "20px" : "5px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: `solid 5px ${Colors.BLACKISH}`,
          transition: "all 0.2s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export default Ball;
