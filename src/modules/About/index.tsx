import { Grid, Typography } from "@mui/material";
import { generalConstants } from "../../constants/general";
import { Colors } from "../../constants/pallete";

const About = () => {
  const firstRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_7_ifjrxc.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_5_rnjbpi.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/octo_RJ_2_c64t6w.webp",
  ];

  const secondRowImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/OCTO_SS23_507a_pchwc9.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930756/Octo/story/OCTO_SS23_007a_d1mya4.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681930755/Octo/story/OCTO_SS23_287a_hdr3ca.webp",
  ];
  return (
    <div
      style={{
        marginTop: "250px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
      }}
    >

      <div style={{ zIndex: 1000 }}>
        <Typography
          fontFamily='Avalanche'
          fontSize='30px'
          style={{ lineHeight: "50px" }}
        >
          <b style={{ fontSize: "45px", fontWeight: 500 }}>Octo</b> was
          established in 2014 in{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.NEON_YELLOW,
              fontWeight: 500,
            }}
          >
            Rio de Janeiro
          </b>
          , with the intention of offering{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.SOFT_PINK,
              fontWeight: 500,
            }}
          >
            children's ponchos
          </b>{" "}
          and{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.SOFT_PINK,
              fontWeight: 500,
            }}
          >
            beach umbrellas
          </b>{" "}
          that were both visually{" "}
          <b style={{ fontSize: "45px", color: Colors.TAUPE, fontWeight: 500 }}>
            distinctive
          </b>{" "}
          and made with
          <b style={{ fontSize: "45px", color: Colors.TAUPE, fontWeight: 500 }}>
            {" "}
            unique
          </b>{" "}
          fabric combinations.
        </Typography>
        <Typography
          fontFamily='Avalanche'
          fontSize='24px'
          style={{ lineHeight: "30px", marginTop: "20px" }}
        >
          However, when the founder{" "}
          <b
            style={{
              fontSize: "35px",
              color: Colors.SOFT_TAUPE,
              fontWeight: 500,
            }}
          >
            returned
          </b>{" "}
          to Lisbon in 2015 to pursue an interior design project, the brand
          could no longer operate in Brazil.
        </Typography>
      </div>
      <img
        src='https://res.cloudinary.com/daantetcr/image/upload/v1681933484/Octo/story/WhatsApp_Image_2023-04-19_at_20.40.25_ztf2ah.jpg'
        alt=''
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          height: "400px",
          transformStyle: "preserve-3d",
          transform: "rotateZ(-90deg)",
        }}
      />
      <Grid
        container
        columnSpacing='5px'
        style={{ display: "flex", width: "100%", height: "70vh" }}
      >
        {firstRowImages?.map((item, pos) => {
          return (
            <Grid item xs={4}>
              <img
                src={item}
                alt=''
                key={pos}
                style={{ width: "100%", objectFit: "cover", height: "70vh" }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography
        fontFamily='Avalanche'
        fontSize='30px'
        style={{ textAlign: "center", lineHeight: "50px" }}
      >
        Nevertheless, despite the founder's departure, her{" "}
        <b
          style={{ fontSize: "45px", color: Colors.SOFT_PINK, fontWeight: 500 }}
        >
          commitment
        </b>{" "}
        to the
        <b style={{ fontSize: "45px", color: Colors.TAUPE, fontWeight: 500 }}>
          {" "}
          Octo brand
        </b>{" "}
        persisted, and she had a clear vision for its{" "}
        <b
          style={{
            fontSize: "45px",
            color: Colors.NEON_YELLOW,
            fontWeight: 500,
          }}
        >
          future
        </b>
        . Following the birth of her second daughter in 2021, the founder and
        her husband decided to{" "}
        <b
          style={{
            fontSize: "45px",
            color: Colors.PRETTY_CREAM,
            fontWeight: 500,
          }}
        >
          revive the brand
        </b>{" "}
        .
      </Typography>
      <Grid
        container
        columnSpacing='5px'
        style={{ display: "flex", width: "100%", height: "70vh" }}
      >
        {secondRowImages?.map((item, pos) => {
          return (
            <Grid item xs={4}>
              <img
                src={item}
                alt=''
                key={pos}
                style={{ width: "100%", objectFit: "cover", height: "70vh" }}
              />
            </Grid>
          );
        })}
      </Grid>
      <div>
        <Typography
          fontFamily='Avalanche'
          fontSize='30px'
          style={{ textAlign: "center", lineHeight: "50px" }}
        >
          The{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.ANTHRACITE,
              fontWeight: 500,
            }}
          >
            new
          </b>{" "}
          Octo brand reflects the founder's current role as a{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.SOFT_PINK,
              fontWeight: 500,
            }}
          >
            relaxed, family-focused
          </b>{" "}
          mother and produces{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.SOFT_TAUPE,
              fontWeight: 500,
            }}
          >
            high-quality
          </b>
          , original{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.NEON_YELLOW,
              fontWeight: 500,
            }}
          >
            baby apparel
          </b>{" "}
          that embodies Octo's{" "}
          <b style={{ fontSize: "45px", color: Colors.TAUPE, fontWeight: 500 }}>
            signature style
          </b>
          .
        </Typography>
        <Typography
          fontFamily='Avalanche'
          fontSize='30px'
          style={{ textAlign: "center", lineHeight: "50px" }}
        >
          Octo has been{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.NEON_YELLOW,
              fontWeight: 500,
            }}
          >
            reborn
          </b>{" "}
          as a brand for both relaxed{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.BLACKISH,
              fontWeight: 500,
            }}
          >
            mothers
          </b>{" "}
          and{" "}
          <b
            style={{
              fontSize: "45px",
              color: Colors.BLACKISH,
              fontWeight: 500,
            }}
          >
            fathers
          </b>
          .
        </Typography>
      </div>
      <Typography
        fontSize={"6rem"}
        fontWeight={500}
        fontFamily='Avalanche'
        color={Colors.NEON_YELLOW}
        style={{ textAlign: "end" }}
      >
        We are Octomistic.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "start",
        }}
      >
        <Typography
          fontFamily='Avalanche'
          fontSize={"3rem"}
          color={Colors.TAUPE}
          style={{ textAlign: "start", lineHeight: "48px" }}
        >
          We are moms, dads and kids
          <br />
          with no strings attached.
        </Typography>
      </div>
    </div>
  );
};

export default About;
