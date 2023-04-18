import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Button from "../../../components/Buttons/Button";
import { generalConstants } from "../../../constants/general";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const About = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const renderLaptop = () => {
    return (
      <>
        <Box
          columnGap={2}
          style={{
            position: "relative",


            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(https://res.cloudinary.com/daantetcr/image/upload/v1681847724/Octo/Home/Story/WhatsApp_Image_2023-04-18_at_20.46.00_1_igtblc.jpg)`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div style={{ position: "absolute", left: "3vw", bottom: "8vh", cursor: "pointer" }}>
            <Typography fontSize="4vw" fontFamily="Avalanche" color={Colors.NEON_YELLOW} style={{}} >
              Curious about
            </Typography>
            <Typography fontSize="6vw" fontFamily="Avalanche" color={Colors.NEON_YELLOW} style={{ lineHeight: "10vh", }}>
              Octo story?
            </Typography>
          </div>
        </Box>
      </>
    );
  };
  const renderMobile = () => {
    return (
      <>

      </>
    );
  };

  return !mobile ? renderLaptop() : renderMobile();
};

export default About;
