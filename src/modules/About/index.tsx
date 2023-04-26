import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { Colors } from "../../constants/pallete";
import Carousel from "../../components/Carousel";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";

const About = () => {
  const firstRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_5_rnjbpi.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_7_ifjrxc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_2_c64t6w.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/OCTO_SS23_507a_pchwc9.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/OCTO_SS23_007a_d1mya4.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930755/Octo/story/OCTO_SS23_287a_hdr3ca.webp",
  ];
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))

  const vertical = useSelector<State, boolean>((state) => state.general.positionVertical)

  return (
    <div
      style={{
        marginTop: "100px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        textAlign: "center",
      }}
    >
      <div style={{ zIndex: 1000 }}></div>

      <Grid container columnSpacing='3vw' style={{ display: "flex", }}>
        <Grid item xs={vertical ? 12 : 5} style={{ display: "flex", justifyContent: "center" }}>
          <Carousel
            gap={5}
            images={firstRowImages}
            width={vertical ? "83vw" : "30vw"}
            numberSlides={1}
            colorBgArrow={Colors.NEON_YELLOW_TRANSPARENT}
          />
        </Grid>
        <Grid item xs={vertical ? 12 : 7} style={{ position: "relative" }}>
          <Typography
            fontSize={vertical ? "8vw" : "5vw"}
            fontWeight={500}
            fontFamily='Avalanche'
            color={Colors.NEON_YELLOW}
            style={{ position: "absolute", left: vertical ? 0 : "-4vw", right: vertical ? 0 : undefined, top: "5vh" }}
          >
            We are Octomistic.
          </Typography>
          <div
            style={{
              marginTop: "20vh",
              display: "flex",
              flexDirection: "column",
              rowGap: "30px",
              textAlign: "justify",
            }}
          >
            <Typography>
              Octo was established in 2014 in Rio de Janeiro , with the
              intention of offering children's ponchos and beach umbrellas that
              were both visually distinctive and made with unique fabric
              combinations.
            </Typography>
            <Typography>
              However, when Teresa returned to Lisbon in 2015 to pursue an
              interior design project, the brand could no longer operate in
              Brazil.
            </Typography>
            <Typography>
              Nevertheless, despite the founder's departure, her commitment to
              the Octo brand persisted, and she had a clear vision for its{" "}
              future . Following the birth of their second daughter in 2021,
              Teresa and Pedro decided to revive the brand .
            </Typography>
            <Typography>
              The new Octo brand reflects Teresa's current role as a relaxed,
              family-focused mother and produces high-quality , original baby
              apparel that embodies Octo's.
            </Typography>
            <Typography>
              Octo has been reborn as a brand for both relaxed mothers and{" "}
              fathers .
            </Typography>
            <Typography
              fontFamily='Avalanche'
              fontSize={vertical ? "5vw" : "2.5vw"}
              color={Colors.TAUPE}
              style={{
                textAlign: "start",
                lineHeight: vertical ? "4vh" : "5vh",
                marginTop: "20px",
              }}
            >
              We are moms, dads and kids
              <br />
              with no strings attached.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
