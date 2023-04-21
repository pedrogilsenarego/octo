import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Colors } from "../../../constants/pallete";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <>
      <Box
        columnGap={2}
        style={{
          position: "relative",

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(https://res.cloudinary.com/daantetcr/image/upload/v1681847724/Octo/Home/Story/WhatsApp_Image_2023-04-18_at_20.46.00_1_igtblc.jpg)`,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: mobile ? "10vw" : "3vw",
            bottom: "8vh",
            cursor: "pointer",
            //backgroundColor: mobile ? "#ffffff6d" : "transparent",
            padding: "5px"
          }}
          onClick={() => navigate(ROUTE_PATHS.ABOUT)}
        >
          <Typography
            fontSize={mobile ? "7vw" : '4vw'}
            fontFamily='Avalanche'
            color={mobile ? Colors.NEON_YELLOW : Colors.NEON_YELLOW}
            style={{}}
          >
            Curious about
          </Typography>
          <Typography
            fontSize={mobile ? "10vw" : '6vw'}
            fontFamily='Avalanche'
            color={mobile ? Colors.NEON_YELLOW : Colors.NEON_YELLOW}
            style={{ lineHeight: mobile ? "8vh" : "10vh" }}
          >
            Octo story?
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default About;
