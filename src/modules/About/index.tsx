import { Grid, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { Colors } from "../../constants/pallete";

const About = () => {
  const firstRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
  ];

  const secondRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_504a_gxrgud.webp",
  ];
  return (
    <div
      style={{
        marginTop: "150px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
      }}
    >
      <Typography>
        Octo was established in 2014 in Rio de Janeiro, with the intention of offering children's ponchos and beach umbrellas that were both visually distinctive and made with unique fabric combinations. However, when the founder returned to Lisbon in 2015 to pursue an interior design project, the brand could no longer operate in Brazil.
      </Typography>
      <Grid container columnSpacing="5px" style={{ display: "flex", width: "100%", height: "60vh" }}>
        {firstRowImages?.map((item, pos) => {
          return (
            <Grid item xs={4}>
              <img src={item} alt="" key={pos} style={{ width: "100%", objectFit: "cover", height: "100%" }} />
            </Grid>
          )
        })}
      </Grid>
      <Typography>
        Nevertheless, despite the founder's departure, her commitment to the Octo brand persisted, and she had a clear vision for its future. Following the birth of her second daughter in 2021, the founder and her husband decided to revive the brand.
      </Typography>
      <Grid container columnSpacing="5px" style={{ display: "flex", width: "100%", height: "60vh" }}>
        {secondRowImages?.map((item, pos) => {
          return (
            <Grid item xs={4}>
              <img src={item} alt="" key={pos} style={{ width: "100%", objectFit: "cover", height: "100%" }} />
            </Grid>
          )
        })}
      </Grid>
      <Typography>
        The new Octo brand reflects the founder's current role as a relaxed, family-focused mother and produces high-quality, original baby apparel that embodies Octo's signature style. Octo has been reborn as a brand for both relaxed mothers and fathers.
      </Typography>
      <Typography fontSize={"6rem"} fontWeight={800} color={Colors.NEON_YELLOW} style={{ textAlign: "end" }}>
        We are Octomistic
      </Typography>
      <div>
        <Typography fontSize={"3rem"} color={Colors.TAUPE} style={{ textAlign: "center" }}>
          We are moms, dads and kids
        </Typography>
        <Typography fontSize={"3rem"} color={Colors.TAUPE} style={{ textAlign: "center" }}>
          with no strings attached
        </Typography>
      </div>
    </div >
  );
};

export default About;
