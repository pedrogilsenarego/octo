import { Box } from "@mui/material";
import { useContext } from "react";
import CardMedia from "../../../components/CardMedia";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { ProductContext } from "../ProductContext";



const ImageShow = () => {

  const { product, setInfoPopup, fabric } = useContext(ProductContext)

  return (

    <Box style={{ borderRadius: "5px", }}>
      {product !== null && (<CardMedia image={categories[product].image} height='700px' onClick={() => setInfoPopup(true)} />
      )} {fabric !== null && (<CardMedia image={fabrics[fabric].image} height='700px' onClick={() => setInfoPopup(true)} />
      )}
    </Box >



  );
};

export default ImageShow;
