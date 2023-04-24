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


        width: "100vw",
        minHeight: window.innerHeight * 0.9,
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        flexDirection: "column",
      }}
    >

      <Typography fontSize={mobile ? "1.5rem" : "2rem"} style={{ fontWeight: 800 }}>
        Contact Us
      </Typography>
      <Typography mt={mobile ? "20px" : "40px"} style={{ float: "left", width: "100%" }}>
        We are delighted to help you! Contact us through the email <b>hello@octo-mistic.com</b> and we will respond as quickly as possible!
      </Typography>


    </Box >
  );
};


export default ContactUs