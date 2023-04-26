import { Box } from "@mui/material";
import { useContext } from "react";
import CardMedia from "../../../components/CardMedia";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { ProductContext } from "../ProductContext";

const ImageShow = () => {
  const { } = useContext(ProductContext);

  return (
    <Box style={{ borderRadius: "5px", backgroundColor: Colors.PRETTY_CREAM }}>
      {/* {product !== null && (
        // <CardMedia
        //   image={categories[product].image}
        //   height='500px'
        //   onClick={() => setInfoPopup(true)}
        // />
      )}{" "}
      {fabric !== null && (
        <CardMedia
          image={fabrics[fabric].image}
          height='500px'
          onClick={() => setInfoPopup(true)}
        />
      )} */}
    </Box>
  );
};

export default ImageShow;
