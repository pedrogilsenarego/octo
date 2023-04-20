import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";

import MenuBar from "../../presentional/MenuBar";
import { i18n } from "../../translations/i18n";

const PrivacyPolicy = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display='flex'
      style={{
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        flexDirection: "column",
      }}
    >

      <Typography fontSize={mobile ? "1.5rem" : "2rem"} style={{ fontWeight: 800 }}>
        {i18n.t("footer.privacyPolicy")}
      </Typography>


      <Typography mt={mobile ? "10px" : "20px"}>
        {i18n.t("policies.privacyPolicy.mainText")}
      </Typography>

    </Box >
  );
};

export default PrivacyPolicy;
