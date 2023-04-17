import { useMediaQuery, useTheme } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { configBlackish } from "./constants";
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
        <Block {...configBlackish} />

        {/* <Typography
      fontSize='10.5vw'
      color={Colors.BLACKISH}
      fontFamily='Avalanche'
      style={{
        zIndex: 1003,
        whiteSpace: "pre-line",
        lineHeight: "16.5vh",

      }}
    >
      {i18n.t("modules.collections.title")}
    </Typography> */}
      </div>
    </>
  );
};

export default Collections;


