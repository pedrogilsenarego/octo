import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";

import MenuBar from "../../presentional/MenuBar";
import { i18n } from "../../translations/i18n";

const TermsOfService = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display='flex'
      style={{
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
      <MenuBar />
      <Typography fontSize={mobile ? "1.5rem" : "2rem"} style={{ fontWeight: 800 }}>
        {i18n.t("footer.termsOfService")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.termsService.intellectualProperty")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.intellectualPropertyText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.conditionsUse")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.conditionsUseText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.productsAndPrices")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.productsAndPricesText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.paymentOption")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.paymentOptionText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.costumerCare")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.costumerCareText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.responsability")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.responsabilityText")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "40px"}>
        {i18n.t("policies.termsService.legalRegulations")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"}>
        {i18n.t("policies.termsService.legalRegulationsText")}
      </Typography>
    </Box >
  );
};

export default TermsOfService;
