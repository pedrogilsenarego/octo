import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import { Colors } from "../../constants/pallete";
import { generalConstants } from "../../constants/general";

const Manifest = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        marginLeft: generalConstants.PADDING,
        marginRight: generalConstants.PADDING,
        marginTop: "150px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Grid container rowSpacing={"40px"}>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<video  playsinline autoBuffer autoPlay loop muted width="80%" height="100%" >
            <source
              src="https://res.cloudinary.com/dmrll3fnf/video/upload/v1682213158/octo_master_22_04_hoowd9.mov"
              type='video/mp4'
            />
          </video>`,
            }}
            style={{ display: "flex", justifyContent: "center" }}
          ></div>
        </Grid><Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography>
            Cool Moms,<br />
            Easy dads,<br />
            Happy Kids!<br /><br />

            We believe that being a mom or a dad is one of the most fulfilling and rewarding experiences in life.

            That’s why we embrace Octomism – the belief in a bright and promising future for both parents and babies.

            We believe in adoring life’s precious moments and finding joy in the journey.

            As parents ourselves, we know how quickly time passes and how important is to make the most of every moment.

            We are passionate about helping families slow down, appreciate the present, and create memories that will last a lifetime.<br /><br />

            Be Joy!<br />

            Be Happiness!<br />

            Empower the future!<br /><br />

            We are octomistic.<br />

            We are moms, dads and kids with no strings attached.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Manifest;
