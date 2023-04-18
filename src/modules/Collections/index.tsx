import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { configAnthracite, configBlackish, configNeonYellow, configPrettyCream, configSoftPink, configTaupe } from "./constants";
import Block from "./Block";




const Collections = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));




  return (
    <>
      <div
        style={{
          marginTop: "150px",
          width: "100vw",
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
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>Be Joy!</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>Be Happiness!</Typography>
        </div>
        <Block {...configSoftPink} />
        <div>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>Empower</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>the Future!</Typography>
        </div>
        <Block {...configAnthracite} />
        <div>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>Enjoy,</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>Every Moment!</Typography>
        </div>
        <Block {...configTaupe} />
        <div>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "60px", marginTop: "70px" }}>We are moms, dads and kids</Typography>
          <Typography style={{ textAlign: "right", fontFamily: "Avalanche", fontSize: "80px", marginTop: "-25px", marginBottom: "70px", paddingBottom: "-10px" }}>with no Strings Attached!</Typography>
        </div>
        <Block {...configPrettyCream} />
      </div>
    </>
  );
};

export default Collections;


