import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { i18n } from "../../translations/i18n";
import { downloadForm } from "../../services";

const ContactUs = () => {




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
        {i18n.t("footer.customerService")}
      </Typography>
      <Typography style={{ fontWeight: 800 }} mt={mobile ? "40px" : "80px"}>
        {i18n.t("policies.costumerService.orders")}
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"} style={{ float: "left", width: "100%" }}>
        {i18n.t("policies.costumerService.cancelOrder")}
      </Typography>


    </Box >
  );
};


export default ContactUs