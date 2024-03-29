import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../../../constants/pallete";
import { scrollTo } from "../../../slicer/general/general.actions";

interface Props {
  pos: number;
  scrollPos: number;

}

const Ball = ({ pos, scrollPos }: Props) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (pos: number) => {
    dispatch(scrollTo(pos));
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(pos)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        key={pos}
        style={{
          position: "relative",
          width: "25px",
          height: "25px",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "border-color 0.3s ease-in-out",
        }}
      >
        <Box
          style={{
            position: "absolute",
            border: scrollPos !== pos ? `solid 5px ${Colors.BLACKISH}` : `solid 5px ${Colors.NEON_YELLOW}`,
            width: hover && scrollPos !== pos ? "20px" : "5px",
            height: hover && scrollPos !== pos ? "20px" : "5px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </Box>
    </div>
  );
};

export default Ball;
