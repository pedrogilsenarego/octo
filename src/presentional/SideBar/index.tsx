import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import { State } from "../../slicer/types";
import Ball from "./Ball";

const SideBar = () => {
  const arr = [...Array(4)];

  const scrollToL = useSelector<State, number>(
    (state) => state.general.scrollTo
  );
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  const renderLaptop = () => {
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
            <Ball pos={pos} scrollPos={scrollToL} />
          );
        })}

      </Box>
    )
  }
  return mobile ? <></> : renderLaptop()
};
export default SideBar;
