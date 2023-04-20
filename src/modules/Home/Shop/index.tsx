import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../components/Buttons/Button";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import Element from "./Element";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import { generalConstants } from "../../../constants/general";
import Carousel from "../../../components/Carousel";

const Shop = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();



  console.log('6');

  const listOfImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_365a_s3dia6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_721a_ifo4p7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_386a_y7chmt.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.58_r94vuw.jpg",
  ];

  const newFabric = [{
    id: 1,
    title: "Sample Fabric",
    image: "https://example.com/sample-image.jpg",
    icon: ""
  },
  {
    id: 1,
    title: "Sample Fabric",
    image: "https://example.com/sample-image.jpg",
    icon: ""
  },
  {
    id: 1,
    title: "Sample Fabric",
    image: "https://example.com/sample-image.jpg",
    icon: ""
  },
  {
    id: 1,
    title: "Sample Fabric",
    image: "https://example.com/sample-image.jpg",
    icon: ""
  },
  ]


  const newPatterns = [...fabrics]

  const firstFour = newPatterns.splice(0, 4);
  newPatterns.splice(4, 0, ...firstFour);
  newPatterns.splice(0, 0, ...newFabric)


  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        rowGap: "20px",
        paddingLeft: generalConstants.PADDING,
        paddingRight: generalConstants.PADDING,
        width: "100vw",
        height: "95vh",
      }}
    >
      <div style={{ display: "flex", columnGap: "20px" }}>
        <Grid container columnSpacing="20px" style={{ width: "50%", display: "flex", }}>
          <Grid item xs={2} alignItems="flex-end" justifyContent="flex-start" style={{ display: "flex" }}>
            <Typography
              fontFamily='Avalanche'
              fontSize='4vw'
              color={Colors.SOFT_PINK}
              style={{


                textOrientation: "mixed",
                lineHeight: 1,
                writingMode: "vertical-rl",
                transform: "rotateX(180deg) rotateY(180deg)",
              }}
            >
              Products
            </Typography>
          </Grid>
          <Grid item xs={10} style={{ paddingLeft: "0px", paddingRight: "40px", transform: "translateY(7vh)", width: "100%" }}>
            {/* <Carousel gap={20} images={categories.map(category => category.icon)} padding={0.07} heightImage={0.2} /> */}
            {/* <Grid
              container
              style={{ borderRadius: "10px", marginTop: "10px" }}
              columnSpacing='30px'
              rowSpacing='20px'
            >
              {newCategories.map((item, pos) => {

                return (
                  <Grid
                    key={pos}
                    item
                    justifyContent='center'
                    alignItems='center'
                    xs={3}
                    style={{ cursor: "pointer" }}
                  >
                    <Element key={pos} item={item} />


                  </Grid>
                );
              })}
            </Grid> */}
          </Grid>
        </Grid>
        <Grid container columnSpacing="20px" style={{ width: "50%", display: "flex" }}>
          <Grid item xs={2} alignItems="flex-end" justifyContent="flex-start" style={{ display: "flex" }}>
            <Typography
              fontFamily='Avalanche'
              fontSize='4vw'
              color={Colors.TAUPE}
              style={{


                textOrientation: "mixed",
                lineHeight: 1,
                writingMode: "vertical-rl",
                transform: "rotateX(180deg) rotateY(180deg)",
              }}
            >
              Patterns
            </Typography>
          </Grid>
          <Grid item xs={10} style={{ paddingLeft: "0px", paddingRight: "40px", transform: "translateY(7vh)", }}>
            <Grid
              container
              style={{ borderRadius: "10px", marginTop: "10px" }}
              columnSpacing='30px'
              rowSpacing='20px'
            >
              {newPatterns.map((item, pos) => {

                return (
                  <Grid
                    key={pos}
                    item
                    justifyContent='center'
                    alignItems='center'
                    xs={3}
                    style={{ cursor: "pointer" }}
                  >
                    <Element key={pos} item={item} />


                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ display: "flex", columnGap: "5px" }}>
        {listOfImages.map((item, pos) => {
          return (
            <img
              key={pos}
              draggable={false}
              style={{
                height: mobile ? "25vh" : "45vh",
                width: "25%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={item}
              alt=''
            />
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontFamily='Avalanche' fontSize='2vw'>
          Endless combinations
        </Typography>
        <Button
          width="calc(25% - 5px)"
          onClick={() => navigate(ROUTE_PATHS.SHOP)}
          colorHover={Colors.NEON_YELLOW_TRANSPARENT}
          label={i18n.t("modules.home.shopOurCollection")}
        />
      </div>
    </div>
  );
};

export default Shop;
