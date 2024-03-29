import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { i18n } from "../../translations/i18n";
import { downloadForm } from "../../services";

const CostumerService = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const handleClickForm = () => {
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
        {i18n.t("footer.customerService")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.costumerService.orders")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.cancelOrder")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"}>
        {i18n.t("policies.costumerService.cancelOrderText")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.whatSteps")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.whatStepsText")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.whatStepsText2")}
      </Typography>

      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.costumerService.returnPolicy")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"} >
        {i18n.t("policies.costumerService.returnPolicyText")}

      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.howToReturn")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} >
        To initiate a return, please complete our <b style={{ cursor: "pointer" }} onClick={handleClickForm}>return form</b>, print it, and include it in the package with the item you wish to return. The item must be in pristine, unused condition, with the original hand tag and packaging. Please note that the cost of shipping for returns is the responsibility of the customer.

      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} >
        {i18n.t("policies.costumerService.howToReturnText2")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} >
        {i18n.t("policies.costumerService.howToReturnText3")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.howToGetReturn")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} >
        {i18n.t("policies.costumerService.howToGetReturnText")}
      </Typography>

      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.costumerService.shippingPolicy")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"} >
        {i18n.t("policies.costumerService.shippingPolicyText")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.shipOversees")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.shipOverseesText")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.problemsDelivering")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.problemsDeliveringText")}
      </Typography>
      <Typography mt={mobile ? "40px" : "80px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.additionalTaxes")}
      </Typography>
      <Typography mt={mobile ? "10px" : "20px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.additionalTaxesText")}
      </Typography>

    </Box >
  );
};

export default CostumerService;
