import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../components/Buttons/Button";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { i18n } from "../../../translations/i18n";
import Element from "./Element";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/routes";
import { generalConstants } from "../../../constants/general";

const Shop = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const listOfImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_365a_s3dia6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_721a_ifo4p7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_386a_y7chmt.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.58_r94vuw.jpg",
  ];

  const newCategory = {
    id: 1,
    title: "Sample Category",
    icon: "",
    image: "https://example.com/sample-image.jpg",
    price: 10,
    moreInfo: {
      description: "Sample description",
      dimensions: "10x10x10",
      washing: "Dry clean only",
    },
  };

  const newCategories = [...categories]
  newCategories.splice(0, 0, newCategory);
  newCategories.splice(3, 0, newCategory);
  console.log(newCategories);

  const newPatterns = [...fabrics]

  const firstFour = newPatterns.splice(0, 4); // extract the first 4 elements

  newPatterns.splice(4, 0, ...firstFour); // insert the first 4 elements after the 5th element


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
      <div style={{ display: "flex", }}>
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
          <Grid item xs={10} style={{ paddingLeft: "0px", paddingRight: "40px", transform: "translateY(7vh)" }}>
            <Grid
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
                    {item.title !== "Sample Category" && (<Element key={pos} item={item} />)}


                  </Grid>
                );
              })}
            </Grid>
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
                writingMode: "vertical-rl",
                transform: "rotateX(180deg) rotateY(180deg)",
              }}
            >
              Patterns
            </Typography>
          </Grid>
          <Grid item xs={10} style={{ paddingLeft: "20px", paddingRight: "20px", transform: "translateY(20vh)" }}>
            <Grid
              container
              style={{ borderRadius: "10px", marginTop: "10px" }}
              columnSpacing='40px'
              rowSpacing='40px'

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

    // <Box
    //   display='flex'
    //   style={{
    //     alignItems: "center",
    //     justifyContent: "space-evenly",
    //     width: "100vw",
    //     height: "100vh",
    //     padding: "15vw",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Typography
    //     style={{
    //       textTransform: "uppercase",
    //       fontWeight: 800,
    //       fontSize: "1.2rem",
    //     }}
    //   >
    //     Products
    //   </Typography>

    //   <Grid
    //     container
    //     style={{ borderRadius: "10px", marginTop: "10px" }}
    //     columnSpacing='15px'
    //     rowSpacing='20px'
    //   >
    //     {categories.map((item, pos) => {

    //       return (
    //         <Grid
    //           key={pos}
    //           item
    //           justifyContent='center'
    //           alignItems='center'
    //           xs={12 / 5} sm={12 / 10}
    //           style={{ cursor: "pointer" }}
    //         >
    //           <Element key={pos} item={item} />
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    //   <Typography
    //     mt={mobile ? "5vh" : '11vh'}
    //     style={{
    //       fontSize: "1.2rem",
    //       textTransform: "uppercase",
    //       fontWeight: 800,
    //     }}
    //   >
    //     Patterns
    //   </Typography>
    //   <Grid
    //     container
    //     style={{ borderRadius: "10px", marginTop: "-10px" }}
    //     columnSpacing={mobile ? 2 : 5}
    //     rowSpacing={mobile ? 3 : 5}
    //   >
    //     {fabrics.map((item, pos) => {
    //       return (
    //         <Grid
    //           key={pos}
    //           item
    //           justifyContent='center'
    //           alignItems='center'
    //           xs={12 / 4} sm={12 / 8}
    //           style={{ cursor: "pointer" }}
    //         >
    //           <Element key={pos} item={item} />
    //         </Grid>
    //       );
    //     })}
    //     <div
    //       style={{
    //         marginTop: "100px",
    //         display: "flex",
    //         width: "100%",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Button
    //         onClick={() => navigate(ROUTE_PATHS.SHOP)}
    //         colorHover={Colors.NEON_YELLOW_TRANSPARENT}
    //         label={i18n.t("modules.home.shopOurCollection")}
    //       />
    //     </div>
    //   </Grid>
    // </Box>
  );
};

export default Shop;
