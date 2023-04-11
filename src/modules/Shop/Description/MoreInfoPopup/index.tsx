import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import { Product, products } from "../../../../constants/category";
import { Colors } from "../../../../constants/pallete";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";
import { i18n } from "../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Carrousell from "./Carousell";

const MoreInfoPopup = () => {
  const dispatch = useDispatch();
  const { product, fabric } = useContext(ProductContext);
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))


  const productsAvailable: Product[] = products.filter(
    (value) =>
      value[product !== null ? "category" : "pattern"] ===
      (product !== null ? product : fabric)
  );

  return (
    <Box width='100%' display='flex' flexDirection='column' gap={0.5}>
      {productsAvailable.map((item, pos) => {
        return (
          <Grid
            container
            key={pos}
            width='100%'
            style={{

              display: "flex",
              backgroundColor: Colors.PRETTY_CREAM,
              borderRadius: "4px",
            }}
          >
            <Grid item xs={12} sm={7} >
              <Carrousell images={item.images} />
            </Grid>
            <Grid item xs={12} sm={5}>
              {" "}
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                width='100%'
                height="100%"
                rowGap='0px'
                style={{ position: "relative" }}
              >
                {!mobile && (<img
                  src={item.icon}
                  alt={item.uid}
                  style={{
                    height: "20vw",
                    width: "20vw",
                    objectFit: "contain",
                    position: "absolute",
                    top: "2%",
                    zIndex: 4000
                  }}
                />)}


                <div
                  style={{
                    position: "absolute",
                    rowGap: "10px",
                    bottom: "10%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {fabric !== null && (
                    <Typography>{item.price}&nbsp;&#183;&nbsp;€</Typography>
                  )}
                  <Button
                    onClick={() => {
                      dispatch(addProductToCart([item]));
                      dispatch(
                        updateSuccessNotification(
                          i18n.t("notifications.success.updateCart")
                        )
                      );
                    }}
                    label={i18n.t("modules.product.addCart")}
                    colorHover={Colors.NEON_YELLOW_TRANSPARENT}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default MoreInfoPopup;
