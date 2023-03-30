import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { State } from "../../slicer/types";
import Ball from "./Ball";
import "./index.css";

const SideBar = () => {
  const arr = [...Array(4)];

  const scrollToL = useSelector<State, number>(
    (state) => state.general.scrollTo
  );
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      rowGap={1}
      style={{
        position: "absolute",
        zIndex: 3000,
        right: "-20px",
        transform: scrollToL ? "translate(-50px,0)" : "translate(0,0)",
        top: "45%",
        transition: "all 0.4s ease-in-out",
      }}
    >
      {arr.map((item, pos) => {
        return (
          <Ball pos={pos} />
        );
      })}

    </Box>
  );
};
export default SideBar;
