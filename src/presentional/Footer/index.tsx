import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../constants/pallete";
import { i18n } from "../../translations/i18n";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/routes";
import { generalConstants } from "../../constants/general";

interface Props {
  noMarginTop?: boolean
}

const Footer = ({ noMarginTop }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const iconMobileSize = "70px";
  const iconTextSize = "14px";
  return (
    <div
      style={{
        marginTop: noMarginTop ? "0px" : "100px",
        width: "100vw",
        backgroundColor: Colors.TAUPE,
        paddingTop: "50px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        paddingBottom: "20px",
      }}
    >
      <Grid
        container
        rowGap={3}
        style={{ paddingBottom: "40px", borderBottom: "solid 2px #ffffff66" }}
      >
        <Grid item xs={12} sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: mobile ? "6px" : "0px",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
              height={mobile ? iconMobileSize : "100px"}
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-handmade_ltqxry.png'
              alt=''
            />
            <Typography
              fontSize={mobile ? iconTextSize : "16px"}
              color='white'
              style={{ opacity: 0.8, textAlign: "center" }}
            >
              {i18n.t("footer.handMade")}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: mobile ? "6px" : "0px",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
              height={mobile ? iconMobileSize : "100px"}
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-handmade2_rnajlu.png'
              alt=''
            />
            <Typography
              fontSize={mobile ? iconTextSize : "16px"}
              color='white'
              style={{ opacity: 0.8, textAlign: "center" }}
            >
              {i18n.t("footer.madePortugal")}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: mobile ? "6px" : "0px",
            }}
          >
            <img
              style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
              height={mobile ? iconMobileSize : "100px"}
              src='https://res.cloudinary.com/daantetcr/image/upload/v1681291017/Octo/footer/icones-ap-certificado_ru2xmj.png'
              alt=''
            />
            <Typography
              fontSize={mobile ? iconTextSize : "16px"}
              color='white'
              style={{ opacity: 0.8, textAlign: "center" }}
            >
              {i18n.t("footer.certified")}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Box
        mt='20px'
        display='flex'
        flexDirection={mobile ? "column" : "row"}
        justifyContent='space-between'
        style={{
          borderBottom: "solid 2px #ffffff66",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignItems: "center",
          rowGap: "12px",
        }}
      >
        <Typography
          fontSize={mobile ? iconTextSize : "16px"}
          onClick={() => navigate(ROUTE_PATHS.TERMS_OF_SERVICE)}
          style={{ cursor: "pointer", opacity: 0.8 }}
          color='white'
        >
          {i18n.t("footer.termsOfService")}
        </Typography>
        <Typography
          fontSize={mobile ? iconTextSize : "16px"}
          onClick={() => navigate(ROUTE_PATHS.PRIVACY_POLICY)}
          style={{ cursor: "pointer", opacity: 0.8 }}
          color='white'
        >
          {i18n.t("footer.privacyPolicy")}
        </Typography>
        <Typography
          onClick={() => navigate(ROUTE_PATHS.REFUNDS_EXCHANGES)}
          fontSize={mobile ? iconTextSize : "16px"}
          style={{ cursor: "pointer", opacity: 0.8 }}
          color='white'
        >
          {i18n.t("footer.refunds")}
        </Typography>

        <Typography
          fontSize={mobile ? iconTextSize : "16px"}
          onClick={() => navigate(ROUTE_PATHS.COSTUMER_SERVICE)}
          style={{ cursor: "pointer", opacity: 0.8 }}
          color='white'
        >
          {i18n.t("footer.customerService")}
        </Typography>

        <Typography
          fontSize={mobile ? iconTextSize : "16px"}
          style={{ cursor: "pointer", opacity: 0.8 }}
          color='white'
        >
          {i18n.t("footer.contact")}
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: mobile ? "20px" : "80px",
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
