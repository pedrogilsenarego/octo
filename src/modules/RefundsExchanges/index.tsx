import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { i18n } from "../../translations/i18n";
import { downloadForm } from "../../services";


const RefundsExchanges = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const handleClickForm = () => {
    console.log("t")
    downloadForm()
  }

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
        To initiate a return, please complete our{" "}
        <b style={{ cursor: "pointer" }} onClick={handleClickForm}>return form</b>,
        print it, and include it in the package with the item you wish to return. The
        item must be in pristine, unused condition, with the original hand tag and
        packaging. Please note that the cost of shipping for returns is the
        responsibility of the customer.
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
