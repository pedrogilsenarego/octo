import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { configBlackish, configNeonYellow, configSoftPink } from "./constants";
import Block from "./Block";




const Collections = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));




  return (
    <>
      <div
        style={{
          marginTop: "150px",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Block {...configNeonYellow} />
        <div>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>Cool moms, easy dads,</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>happy kids!</Typography>
        </div>
        <Block {...configBlackish} />
        <div>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>Cool moms, easy dads,</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>happy kids!</Typography>
        </div>
        <Block {...configSoftPink} />
      </div>
    </>
  );
};

export default Collections;


