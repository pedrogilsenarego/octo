import { Box } from "@mui/material";
import { useContext } from "react";

import { ProductContext } from "../ProductContext";
import Carousel from "../../../components/Carousel";

const ImageShow = () => {
  const { product, vertical } = useContext(ProductContext);


  return (
    <Box style={{ display: "flex", justifyContent: "center", marginTop: vertical ? "-40px" : "0px" }}>
      {product && (
        <Carousel
          key={product.icon}
          images={product?.fotos || []}

          gap={5}
          width={vertical ? "88vw" : '40vw'}
          numberSlides={1}
          height={"500px"}
          objectFi="contain"
        />
      )}
    </Box>
  );
};

export default ImageShow;
