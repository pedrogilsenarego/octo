import { Box } from "@mui/material";
import { useContext } from "react";
import CardMedia from "../../../components/CardMedia";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { ProductContext } from "../ProductContext";
import Carousel from "../../../components/Carousel";

const ImageShow = () => {
  const { category, pattern, setInfoPopup, product } = useContext(ProductContext);

  return (
    <Box style={{ borderRadius: "5px", display: "flex", justifyContent: "center" }}>
      {product && (<Carousel images={product?.fotos || []} gap={5} width="40vw" numberSlides={1} />)}

    </Box>
  );
};

export default ImageShow;
