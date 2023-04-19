import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../constants/pallete";

import { BiUpArrow } from "react-icons/bi";


const UpScroller = () => {
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))
  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const [hover, setHover] = useState<boolean>(false)

  if (!mobile) return (
    <Box
      position="fixed"
      justifyContent="center"
      display="flex"
      alignItems="center"
      style={{
        left: "2%",
        top: "90vh",
        border: hover ? `solid 2px transparent` : `solid 2px ${Colors.BLACKISH}`,

        width: "35px",
        zIndex: 1000,
        height: "35px",
        cursor: "pointer",
        backgroundColor: !hover ? "transparent" : Colors.BLACKISH
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => { moveTop(); setHover(false) }}
    >
      <BiUpArrow color={hover ? Colors.NEON_YELLOW : Colors.BLACKISH} size="1rem" />
    </Box>
  );
  else return (<></>)
};

export default UpScroller;
