import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Colors } from "../../constants/pallete";
import { scrollTo } from "../../slicer/general/general.actions";
import "./index.css"

const SideBar = () => {
  const arr = [...Array(4)];
  const dispatch = useDispatch()
  const handleClick = (pos: number) => {
    dispatch(scrollTo(pos))

  }
  return (
    <Box
      display='flex'
      flexDirection='column'
      rowGap={1}
      style={{ position: "absolute", zIndex: 3000, right: "20px", top: "45%", }}
    >
      {arr.map((item, pos) => {
        return (
          <Box
            key={pos}
            onClick={() => handleClick(pos)}
            className="ball"
            style={{

            }}
          ></Box>
        );
      })}
    </Box>
  );
};
export default SideBar;
