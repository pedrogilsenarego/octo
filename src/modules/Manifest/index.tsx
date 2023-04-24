import { Typography, useTheme, useMediaQuery, Grid } from "@mui/material";

import { generalConstants } from "../../constants/general";
import { useEffect, useState } from "react";
import { MdOutlineMusicOff, MdOutlineMusicNote } from "react-icons/md";
import Loader from "../../components/Loader";

const Manifest = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 5000)

  })


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
          <div style={{
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
            height: "100%"
          }}>

            <Loader size={70} />
          </div>
          <div style={{ opacity: loading ? 0 : 1 }}>
            <video
              onPlay={() => { setLoading(false) }}
              playsInline
              autoPlay
              loop
              muted={muted}
              width='100%'
              height='100%'
            >
              <source
                src='https://res.cloudinary.com/dmrll3fnf/video/upload/v1682213158/octo_master_22_04_hoowd9.mov'
                type='video/mp4'
              />
            </video>
            <div
              onClick={() => setMuted(!muted)}
              style={{
                position: "absolute",
                zIndex: 4000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                right: "1%",
                bottom: mobile ? "-19%" : "8%",
                padding: "6px",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: "#00000066",
              }}
            >
              {" "}
              {muted ? (
                <MdOutlineMusicNote size={mobile ? "1.5rem" : '2rem'} color="white" />
              ) : (
                <MdOutlineMusicOff size={mobile ? "1.5rem" : '2rem'} color="white" />
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
