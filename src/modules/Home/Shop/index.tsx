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

  const listOfImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_365a_s3dia6.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681822111/Octo/collections/Taupe/OCTO_SS23_721a_ifo4p7.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_386a_y7chmt.webp",
    "https://res.cloudinary.com/daantetcr/image/upload/v1681845605/Octo/collections/NeonYellow/WhatsApp_Image_2023-04-18_at_20.18.58_r94vuw.jpg",
  ];

  const newCategories = [...categories]
  const firstObjectCopy = { ...newCategories[0] };
  newCategories.unshift(firstObjectCopy);
  newCategories.push(firstObjectCopy);
  newCategories.push(firstObjectCopy);

  const newPatterns = [...fabrics]
  const firstObjectCopy2 = { ...newPatterns[0] };
  newPatterns.unshift(firstObjectCopy2);
  newPatterns.push(firstObjectCopy2);
  newPatterns.push(firstObjectCopy2);


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
        paddingTop: "4vh",
        paddingBottom: "4vh",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", columnGap: "20px" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            rowGap: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily='Avalanche'
            fontSize='2vw'
            color={Colors.SOFT_PINK}
          >
            Products
          </Typography>
          <div>
            <Carousel
              ghostEdges
              numberSlides={3}
              focusCentral
              outsideButtons
              width='25vw'
              colorBgArrow="#00000000"
              gap={0}
              images={newCategories.map((category, pos) => (
                <Element key={pos} item={category} />
              ))}
              padding='3vw'
              heightImage={0.35}
            />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            rowGap: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily='Avalanche'
            fontSize='2vw'
            color={Colors.SOFT_PINK}
          >
            Patterns
          </Typography>
          <div>
            <Carousel
              numberSlides={3}
              focusCentral
              outsideButtons
              width='25vw'
              colorBgArrow="#00000000"
              gap={0}
              images={newPatterns.map((category, pos) => (
                <Element key={pos} item={category} />
              ))}
              padding='3vw'
              heightImage={0.25}
            />
          </div>
        </div>
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
          width='calc(25% - 5px)'
          onClick={() => navigate(ROUTE_PATHS.SHOP)}
          colorHover={Colors.NEON_YELLOW_TRANSPARENT}
          label={i18n.t("modules.home.shopOurCollection")}
        />
      </div>
    </div>
  );
};

export default Shop;
