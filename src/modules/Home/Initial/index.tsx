import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { AiFillCaretRight } from "react-icons/ai";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import labelEsq from "../../../assets/images/labelEsq.png";
import { generalConstants } from "../../../constants/general";
import MenuBar from "../../../presentional/MenuBar";
import "./index.css";
import { useEffect, useState } from "react";
import { Ellipsis } from "react-spinners-css";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate()
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const renderLaptop = () => {
    return (
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>

        <div
          dangerouslySetInnerHTML={{
            __html: `<video  playsinline autoBuffer autoPlay loop muted width="115%" height="115%" >
            <source
              src="https://res.cloudinary.com/daantetcr/video/upload/v1682070390/Octo/octo_site_20_04_3_ceb0al.webm"
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
            onClick={() => navigate(ROUTE_PATHS.COLLECTION)}
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
        <Ellipsis
          size={100}
          color={Colors.BLACKISH}
          style={{
            opacity: loading ? 1 : 0,
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            opacity: loading ? 0 : 1,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `<video  playsinline autoBuffer autoPlay loop muted width="115%" height="115%" >
            <source
              src="https://res.cloudinary.com/daantetcr/video/upload/v1682070390/Octo/octo_site_20_04_3_ceb0al.webm"
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
              transform: loading
                ? "translate(-120px,0px)"
                : "translate(0px,0px)",
              transition: "all 0.7s ease-in-out",
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
