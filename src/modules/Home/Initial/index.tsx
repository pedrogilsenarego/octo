import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { AiFillCaretRight } from "react-icons/ai";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import labelEsq from "../../../assets/images/labelEsq.png";
import { generalConstants } from "../../../constants/general";
import MenuBar from "../../../presentional/MenuBar";
import "./index.css"

const Initial = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<video  playsinline autoBuffer autoPlay loop muted width="115%" height="115%" >
            <source
              src="https://res.cloudinary.com/daantetcr/video/upload/v1680693360/Octo/era_oz7cne.mov"
              type='video/mp4'
            />
          </video>`,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 500,
            width: "100%",
            height: "100%",
            // para ter em consideração o tamanho do video estar cortado
            overflow: "hidden",
          }}
        ></div>
        <MenuBar />
        <Box
          display='flex'
          flexDirection='column'
          style={{
            zIndex: 500,
            position: "absolute",
            paddingLeft: generalConstants.PADDING,
            paddingRight: generalConstants.PADDING,
            width: "100vw",
            height: "100vh",
          }}
        >
          <Typography
            fontSize='10.5vw'
            color={Colors.PRETTY_CREAM}
            fontFamily='Avalanche'
            style={{
              zIndex: 1003,
              whiteSpace: "pre-line",
              lineHeight: "16.5vh",
              marginTop: "31.5%",
            }}
          >
            {i18n.t("modules.home.mainText")}
          </Typography>
          <Box
            marginLeft='10px'
            marginTop='1.6rem'
            display='flex'
            columnGap={3}
            alignItems='center'
            style={{ cursor: "pointer" }}
          >
            <Typography
              color={Colors.NEON_YELLOW}
              fontSize='22px'
              style={{ textTransform: "uppercase" }}
            >
              {i18n.t("modules.home.discoverCollection")}
            </Typography>
            <AiFillCaretRight color={Colors.NEON_YELLOW} size='30px' />
          </Box>
        </Box>
      </div>

    );
  };

  const renderMobile = () => {
    return (
      <>
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>

          <div
            dangerouslySetInnerHTML={{
              __html: `<video  playsinline autoBuffer autoPlay loop muted width="115%" height="115%" >
            <source
              src="https://res.cloudinary.com/daantetcr/video/upload/v1680693360/Octo/era_oz7cne.mov"
              type='video/mp4'
            />
          </video>`,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 500,
              width: "100%",
              height: "100%",
              // para ter em consideração o tamanho do video estar cortado
              overflow: "hidden",
            }}
          ></div>
          <MenuBar />


          <Box
            width='120px'
            height='120px'
            style={{
              position: "absolute",
              left: -15,
              padding: "0px",
              top: "20px",
              zIndex: 500,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${labelEsq})`,
              backgroundSize: "cover",
            }}
          ></Box>

          <Box style={{ marginTop: "100%", position: "absolute", zIndex: 500 }}>
            <Typography
              fontSize='40px'
              color={Colors.PRETTY_CREAM}
              fontFamily='Avalanche'
              style={{
                marginLeft: "22px",
                whiteSpace: "pre-line",
                lineHeight: "36px",
              }}
            >
              {i18n.t("modules.home.mainText")}
            </Typography>
            <Box
              marginLeft='32px'
              marginTop='20px'
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
                {i18n.t("modules.home.discoverCollection")}
              </Typography>
              <AiFillCaretRight color={Colors.NEON_YELLOW} size='10px' />
            </Box>
          </Box>
        </div>


      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Initial;
