import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import Button from "../../../../components/Buttons/Button";
import { i18n } from "../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product } from "../../../../constants/category";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";
import Loader from "../../../../components/Loader";

const FabricSelector = () => {
  const { category, pattern, selectedFabrics, setSelectedFabrics, products, isLoading } =
    useContext(ProductContext);
  const dispatch = useDispatch();
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))

  const productsAvailable: Product[] = products?.filter(
    (product: Product) => product.category === category
  );

  const fabricsAvailable: Product[] = products?.filter(
    (product: Product) => product.pattern === pattern
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
    <Box mt='10px' style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      {isLoading ? <div style={{ width: "300px", height: "300px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}><Loader customMessage="Getting your products" /></div> :
        <Grid container rowGap={3} columnSpacing={2}>
          {category !== null &&
            productsAvailable?.map((item, pos: number) => {
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
          {pattern !== null &&
            fabricsAvailable?.map((item, pos) => {
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
        </Grid>}

      <div style={{ marginTop: "60px", display: "flex", justifyContent: mobile ? "center" : "start" }} >
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
          borderRadiusRight={mobile ? false : true}
          label={i18n.t("modules.product.addCart")}
          disabled={selectedFabrics.length <= 0}
        />
      </div>
    </Box>
  );
};

export default FabricSelector;
