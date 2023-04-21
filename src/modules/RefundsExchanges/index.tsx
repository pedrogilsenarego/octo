import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { i18n } from "../../translations/i18n";


const RefundsExchanges = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display='flex'
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        flexDirection: "column",
      }}
    >

      <Typography fontSize={mobile ? "1.5rem" : "2rem"} style={{ fontWeight: 800 }}>
        {i18n.t("footer.refunds")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.refundsExchanges.firstQuestion")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.refundsExchanges.firstAnswer")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.refundsExchanges.secondQuestion")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.refundsExchanges.secondAnswer")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.refundsExchanges.secondAnswer2")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.refundsExchanges.secondAnswer3")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.refundsExchanges.thirdQuestion")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.refundsExchanges.thirdAnswer")}
      </Typography>

    </Box >
  );
};

export default RefundsExchanges;
