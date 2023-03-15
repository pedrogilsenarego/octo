import { Grid, Box } from "@mui/material";
import {
  BsFillAirplaneEnginesFill,
  BsFillArrowThroughHeartFill,
  BsFillDice3Fill,
} from "react-icons/bs";
import { Colors } from "../../../constants/pallete";

const CollectionPopover = () => {
  const sizeIcons = "50px";
  const listOfIcons = [
    <BsFillAirplaneEnginesFill color={Colors.NEON_YELLOW} size={sizeIcons} />,
    <BsFillArrowThroughHeartFill color={Colors.NEON_YELLOW} size={sizeIcons} />,
    <BsFillDice3Fill color={Colors.NEON_YELLOW} size={sizeIcons} />,
    <BsFillAirplaneEnginesFill color={Colors.NEON_YELLOW} size={sizeIcons} />,
    <BsFillArrowThroughHeartFill color={Colors.NEON_YELLOW} size={sizeIcons} />,

  ];
  return (
    <Grid
      container

      style={{ padding: "20px" }}
      columnSpacing={3}
      rowSpacing={3}
    >
      {listOfIcons.map((item, pos) => {
        return (
          <Grid

            key={pos}
            item
            justifyContent='center'
            alignItems='center'
            style={{ cursor: "pointer", }}
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              style={{

                padding: "10px",
                border: `solid 2px ${Colors.NEON_YELLOW}`,
              }}
            >
              {item}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CollectionPopover;
