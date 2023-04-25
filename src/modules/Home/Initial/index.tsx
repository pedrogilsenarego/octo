import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { AiFillCaretRight } from "react-icons/ai";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import labelEsq from "../../../assets/images/labelEsq.png";
import { generalConstants } from "../../../constants/general";
import MenuBar from "../../../presentional/MenuBar";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScrollCollections } from "../../../slicer/general/general.actions";
import Loader from "../../../components/Loader";
import { useVideo } from "../../../hooks/useVideo";



const Initial = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { url: videoUrl, isCached } = useVideo('https://res.cloudinary.com/dmrll3fnf/video/upload/v1682212485/octo_site_22_04_vzr6o7.mov', "initial-video");


  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    video.src = videoUrl;
  }, [videoUrl]);

  const renderLaptop = () => {
    const handlePlayClick = () => {
      if (videoRef.current) {
        videoRef.current.play();

      }
    };
    return (
      <div onClick={handlePlayClick} style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <>
          <div
            style={{
              position: "absolute",
              opacity: loading ? 1 : 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Loader />
          </div>
          <div
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              opacity: loading ? 0 : 1,
            }}
          >
            <video
              ref={videoRef}
              playsInline
              autoPlay
              preload='auto'
              loop
              muted
              width='100%'
              height='100%'
              onLoadedMetadata={() => setLoading(false)}
              onLoad={() => setLoading(false)}
              onCanPlayThrough={() => setLoading(false)}
            >

            </video>

          </div>
          <MenuBar />
          <Box
            display='flex'
            flexDirection='column'
            style={{
              opacity: loading ? 0 : 1,
              top: 0,
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
              onClick={() => {
                navigate(ROUTE_PATHS.COLLECTION);
                dispatch(setScrollCollections("NEON_YELLOW"));
              }}
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
        </>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            opacity: loading ? 1 : 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: "100%",
            overflow: "hidden",
            width: "100vw",
          }}
        >
          <Loader />
        </div>

        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            opacity: loading ? 0 : 1,
          }}
        >
          <video
            playsInline
            autoPlay
            preload='auto'
            loop
            muted
            width='100%'
            height='100%'
            onLoadedMetadata={() => setLoading(false)}
            onLoad={() => setLoading(false)}
            onCanPlayThrough={() => setLoading(false)}
          >
            <source
              src='https://res.cloudinary.com/dmrll3fnf/video/upload/v1682212485/octo_site_22_04_vzr6o7.mov'
              type='video/mp4'
            />
          </video>
          `
        </div>

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
            transform: loading ? "translate(-120px,0px)" : "translate(0px,0px)",
            transition: "all 0.7s ease-in-out",
          }}
        ></Box>

        <Box
          style={{
            bottom: "10vh",
            position: "absolute",
            zIndex: 500,
            opacity: loading ? 0 : 1,
          }}
        >
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
            onClick={() => navigate(ROUTE_PATHS.COLLECTION)}
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
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Initial;