import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../constants/pallete";
import { i18n } from "../../translations/i18n";

const Footer = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        width: window.innerWidth,
        backgroundColor: Colors.BLACKISH,
        padding: "2rem",
      }}
    >
      <Typography style={{ cursor: "pointer" }} color='white'>
        {i18n.t("cookiePolicy.cookiePolicy")}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: "60px",
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
