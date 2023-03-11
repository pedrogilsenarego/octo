import { Typography, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { AiFillCaretRight } from "react-icons/ai";
import { Colors } from "../../constants/pallete";
import { i18n } from "../../translations/i18n";
import Label from "../../assets/images/label.png";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Image =
    "https://images.pexels.com/photos/786220/pexels-photo-786220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const renderLaptop = () => {
    return (
      <Box
        display='flex'
        style={{
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${Image})`,
          backgroundSize: "100%",
        }}
      >
        <Container maxWidth='xl'>
          <Box
            width='200px'
            height='200px'
            style={{
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Label})`,
              backgroundSize: "100%",
            }}
          ></Box>
          <Typography
            fontSize='160px'
            color={Colors.PRETTY_CREAM}
            fontFamily='Avalanche'
            style={{
              whiteSpace: "pre-line",
              lineHeight: "140px",
              marginTop: "10%",
            }}
          >
            {i18n.t("modules.home.mainText")}
          </Typography>
          <Box
            marginLeft='10px'
            marginTop='40px'
            display='flex'
            columnGap='20px'
            alignItems='center'
            style={{ cursor: "pointer" }}
          >
            <Typography
              color={Colors.NEON_YELLOW}
              fontSize='22px'
              style={{ textTransform: "uppercase" }}
            >
              {i18n.t("modules.home.discover")}
            </Typography>
            <AiFillCaretRight color={Colors.NEON_YELLOW} size='30px' />
          </Box>
        </Container>
      </Box>
    );
  }
  const renderMobile = () => {
    return (
      <Box
        display='flex'
        style={{

          width: "100vw",
          height: "60vh",

          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",

        }}
      >
        <Box
          width='120px'
          height='120px'
          style={{
            position: "absolute",
            left: -15,
            padding: "0px",
            top: "20px",

            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${Label})`,
            backgroundSize: "cover",
          }}
        ></Box>


        <Typography
          fontSize='40px'
          color={Colors.PRETTY_CREAM}
          fontFamily='Avalanche'
          style={{
            marginLeft: "22px",
            whiteSpace: "pre-line",
            lineHeight: "36px",
            marginTop: "60%",
          }}
        >
          {i18n.t("modules.home.mainText")}
        </Typography>
        <Box
          marginLeft='10px'
          marginTop='40px'
          display='flex'
          columnGap='20px'
          alignItems='center'
          style={{ cursor: "pointer" }}
        >
          <Typography
            color={Colors.NEON_YELLOW}
            fontSize='10px'
            style={{ textTransform: "uppercase" }}
          >
            {i18n.t("modules.home.discover")}
          </Typography>
          <AiFillCaretRight color={Colors.NEON_YELLOW} size='10px' />
        </Box>

      </Box>
    )
  }
  return (
    mobile ? renderMobile() : renderLaptop()
  )
};

export default Home;
