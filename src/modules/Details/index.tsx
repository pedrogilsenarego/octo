import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";

import MenuBar from "../../presentional/MenuBar";
import { i18n } from "../../translations/i18n";

const Details = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display='flex'
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        paddingTop: mobile ? "100px" : "160px",
        paddingBottom: "100px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        flexDirection: "column",
      }}
    >
      <MenuBar />
      <Typography style={{ fontWeight: 800 }}>
        {i18n.t("footer.cookiePolicy")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      <Typography style={{ fontWeight: 800 }} mt={mobile ? "60px" : "100px"}>
        {i18n.t("footer.productsPrices")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("footer.productsPricesText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "60px" : "100px"}>
        {i18n.t("footer.conditionsUse")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("footer.conditionsUseText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "60px" : "100px"}>
        {i18n.t("footer.paymentOption")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("footer.paymentOptionText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "60px" : "100px"}>
        {i18n.t("footer.customerCare")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("footer.customerCareText")}
      </Typography>
    </Box >
  );
};

export default Details;
