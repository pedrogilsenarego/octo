import { Typography, useTheme, useMediaQuery, Grid } from "@mui/material";

import { generalConstants } from "../../constants/general";
import { useEffect, useRef, useState } from "react";
import { MdOutlineMusicOff, MdOutlineMusicNote } from "react-icons/md";
import Loader from "../../components/Loader";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useVideo } from "../../hooks/useVideo";

const Manifest = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { url: videoUrl } = useVideo('https://res.cloudinary.com/dmrll3fnf/video/upload/v1682334199/octo_master_24_04_koiful.mov', "manifest-video", 365);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;
    video.src = videoUrl;
  }, [videoUrl]);


  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!play) {
        videoRef.current.play();
        setPlay(true);
      } else {
        videoRef.current.pause();
        setPlay(false);
      }
    }
  };

  return (
    <div
      style={{
        marginLeft: generalConstants.PADDING,
        marginRight: generalConstants.PADDING,
        marginTop: mobile ? "100px" : "150px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={"40px"}>
        <Grid item xs={12} style={{ position: "relative" }}>
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
            }}
          >
            <Loader size={70} />
          </div>
          <div style={{ opacity: loading ? 0 : 1, display: "flex", justifyContent: "center", position: "relative" }}>

            <video
              ref={videoRef}
              onPlay={() => setPlay(true)}
              playsInline
              loop
              muted={muted}
              width={mobile ? '100%' : "80%"}
              height='100%'
              onLoadedMetadata={() => setLoading(false)}
              onLoad={() => setLoading(false)}
              onCanPlayThrough={() => setLoading(false)}
            >

            </video>
            <div
              style={{
                position: "absolute",
                zIndex: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                right: mobile ? "1%" : "12%",
                columnGap: "5px",
                bottom: mobile ? "-19%" : "7%",
                padding: "6px",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: "#00000066",
              }}
            >
              {" "}
              {play ? (
                <BsPauseFill
                  size={mobile ? "1.5rem" : "2rem"}
                  color='white'
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlayClick();
                  }}
                />
              ) : (
                <BsPlayFill
                  size={mobile ? "1.5rem" : "2rem"}
                  color='white'
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlayClick();
                  }}
                />
              )}
              {muted ? (
                <MdOutlineMusicNote
                  onClick={() => setMuted(!muted)}
                  size={mobile ? "1.5rem" : "2rem"}
                  color='white'
                />
              ) : (
                <MdOutlineMusicOff
                  onClick={() => setMuted(!muted)}
                  size={mobile ? "1.5rem" : "2rem"}
                  color='white'
                />
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography>
            Cool Moms,
            <br />
            Easy dads,
            <br />
            Happy Kids!
            <br />
            <br />
            We believe that being a mom or a dad is one of the most fulfilling
            and rewarding experiences in life. That’s why we embrace Octomism –
            the belief in a bright and promising future for both parents and
            babies. We believe in adoring life’s precious moments and finding
            joy in the journey. As parents ourselves, we know how quickly time
            passes and how important is to make the most of every moment. We are
            passionate about helping families slow down, appreciate the present,
            and create memories that will last a lifetime.
            <br />
            <br />
            Be Joy!
            <br />
            Be Happiness!
            <br />
            Empower the future!
            <br />
            <br />
            We are octomistic.
            <br />
            We are moms, dads and kids with no strings attached.
          </Typography>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <img
            src='https://res.cloudinary.com/dmrll3fnf/image/upload/v1682247803/TeresaePedro_qa5kvl.webp'
            alt=''
            style={{ height: "50px" }}
          />
        </div>{" "}
      </Grid>
    </div>
  );
};

export default Manifest;
