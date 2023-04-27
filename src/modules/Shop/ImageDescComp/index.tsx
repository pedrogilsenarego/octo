import { Grid } from "@mui/material";
import ImageShow from "../ImageShow";
import Description from "../Description";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import Loader from "../../../components/Loader";

const ImageDescComp = () => {
  const { category, pattern, setCategory, setPattern, isLoading } =
    useContext(ProductContext);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "60vh",
            aspectRatio: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Loader customMessage='Getting your products' />
        </div>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            <ImageShow />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Description />
          </Grid>
        </>
      )}
    </>
  );
};

export default ImageDescComp;
