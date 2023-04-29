import { Grid } from "@mui/material";
import ImageShow from "../ImageShow";
import Description from "../Description";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import Loader from "../../../components/Loader";
import { State } from "../../../slicer/types";
import { useSelector } from "react-redux";

const ImageDescComp = () => {
  const { isLoading } = useContext(ProductContext);
  const vertical = useSelector<State, boolean>(
    (state) => state.general.positionVertical
  );

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
          {vertical ? (
            <>
              <Grid item xs={12} sm={6}>
                <Description />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ImageShow />
              </Grid>
            </>
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
      )}
    </>
  );
};

export default ImageDescComp;
