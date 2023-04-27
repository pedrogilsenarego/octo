import { Box } from "@mui/material";
import { useContext } from "react";
import CardMedia from "../../../components/CardMedia";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { ProductContext } from "../ProductContext";

const ImageShow = () => {
  const { category, pattern, setInfoPopup } = useContext(ProductContext);

  return (
    <Box style={{ borderRadius: "5px", backgroundColor: Colors.PRETTY_CREAM }}>
      {category !== null && (
        <CardMedia
          image={categories?.find((categoryItem) => categoryItem.title === category)?.image}
          height='500px'
          onClick={() => setInfoPopup(true)}
        />
      )}{" "}
      {pattern !== null && (
        <CardMedia
          image={fabrics?.find((categoryItem) => categoryItem.title === pattern)?.image}
          height='500px'
          onClick={() => setInfoPopup(true)}
        />
      )}
    </Box>
  );
};

export default ImageShow;
