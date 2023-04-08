import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import Button from "../../../../components/Buttons/Button";
import { i18n } from "../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product, products } from "../../../../constants/category";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";

const FabricSelector = () => {
  const { product, fabric, selectedFabrics, setSelectedFabrics } =
    useContext(ProductContext);
  const dispatch = useDispatch();

  const productsAvailable: Product[] = products.filter(
    (category) => category.category === product
  );

  const fabricsAvailable: Product[] = products.filter(
    (product) => product.pattern === fabric
  );

  const handleSelectFabrics = (item: Product) => {
    const index = selectedFabrics.findIndex((obj) => obj.uid === item.uid);

    if (index !== -1) {
      // If item exists, remove it
      setSelectedFabrics(selectedFabrics.filter((obj) => obj.uid !== item.uid));
    } else {
      // Otherwise, add it
      setSelectedFabrics(selectedFabrics.concat(item));
    }
  };

  return (
    <Box mt='10px'>
      <Grid container rowGap={3} columnSpacing={2}>
        {product !== null &&
          productsAvailable.map((item, pos: number) => {
            return (
              <Grid
                item
                xs={3}
                key={pos}
                onClick={() => {
                  handleSelectFabrics(item);
                }}
              >
                <Element valuee={item.icon} />
              </Grid>
            );
          })}
        {fabric !== null &&
          fabricsAvailable.map((item, pos) => {
            return (
              <>
                <Grid
                  item
                  xs={3}
                  style={{ position: "relative" }}
                  key={pos}
                  onClick={() => {
                    handleSelectFabrics(item);
                  }}
                >
                  <Element valuee={item.icon} />
                  <Box
                    display='flex'
                    justifyContent='center'
                    style={{ position: "absolute", left: 0, right: 0 }}
                  >
                    <Typography>&nbsp;&nbsp;&nbsp;{item.price}€</Typography>
                  </Box>
                </Grid>
              </>
            );
          })}
      </Grid>

      <div style={{ marginTop: "60px" }}>
        <Button
          onClick={() => {
            dispatch(addProductToCart(selectedFabrics));
            dispatch(
              updateSuccessNotification(
                i18n.t("notifications.success.updateCart")
              )
            );
            setSelectedFabrics([]);
          }}
          borderRadiusRight
          label={i18n.t("modules.product.addCart")}
          disabled={selectedFabrics.length <= 0}
        />
      </div>
    </Box>
  );
};

export default FabricSelector;
