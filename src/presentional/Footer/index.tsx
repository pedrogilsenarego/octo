import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../../constants/pallete";
import { i18n } from "../../translations/i18n";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/routes";
import { generalConstants } from "../../constants/general";

const Footer = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: window.innerWidth,
        backgroundColor: Colors.PRETTY_CREAM,
        padding: "2rem",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
      }}
    >
      <Grid
        container
        style={{ paddingBottom: "40px", borderBottom: "solid 1px #ffffff66" }}
      >
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)" }}
              height='100px'
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-handmade_ltqxry.png'
              alt=''
            />
            <Typography color='white'>{i18n.t("footer.handMade")}</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)" }}
              height='100px'
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-handmade2_rnajlu.png'
              alt=''
            />
            <Typography color='white'>
              {i18n.t("footer.madePortugal")}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)" }}
              height='100px'
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-certificado_ru2xmj.png'
              alt=''
            />
            <Typography color='white'>{i18n.t("footer.certified")}</Typography>
          </div>
        </Grid>
      </Grid>
      <Box mt='60px' display='flex' justifyContent='space-between'>
        <Typography
          onClick={() => navigate(ROUTE_PATHS.TERMS_OF_SERVICE)}
          style={{ cursor: "pointer" }}
          color='white'
        >
          {i18n.t("footer.termsOfService")}
        </Typography>
        <Typography style={{ cursor: "pointer" }} color='white'>
          {i18n.t("footer.privacyPolicy")}
        </Typography>
        <Typography style={{ cursor: "pointer" }} color='white'>
          {i18n.t("footer.refunds")}
        </Typography>

        <Typography onClick={() => navigate(ROUTE_PATHS.COSTUMER_SERVICE)} style={{ cursor: "pointer" }} color='white'>
          {i18n.t("footer.customerService")}
        </Typography>

        <Typography style={{ cursor: "pointer" }} color='white'>
          {i18n.t("footer.contact")}
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: "160px",
          marginBottom: "-1.5rem",
        }}
      >
        <Typography
          onClick={() =>
            window.open("https://personalwebsite-4a45c.web.app/", "_blank")
          }
          color='white'
          fontSize='0.6rem'
          style={{ cursor: "pointer" }}
        >
          Web projects&nbsp;&#183;&nbsp;Pedro Sena Rego
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
