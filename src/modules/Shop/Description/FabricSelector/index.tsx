import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Button from "../../../../components/Buttons/Button";
import { i18n } from "../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product, products } from "../../../../constants/category";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../slicer/cart/cart.actions";
import { updateSuccessNotification } from "../../../../slicer/general/general.actions";

const FabricSelector = () => {
  const { product, fabric } = useContext(ProductContext);
  const [selectedFabrics, setSelectedFabrics] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const productsAvailable: Product[] = products.filter(
    (category) => category.category === product
  );

  const fabricsAvailable: Product[] = products.filter((product) => product.pattern === fabric)

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
    <Box mt="10px">
      <Box display='flex' columnGap={2}>
        {product !== null && (productsAvailable.map((item, pos: number) => {
          return (
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              rowGap={3}
              key={pos}
              onClick={() => {
                handleSelectFabrics(item);
              }}
            >
              <Element size='85px' valuee={item.icon} />

            </Box>
          );
        }))}
        {fabric !== null && (
          fabricsAvailable.map((item, pos) => {
            return (
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                rowGap={3}
                key={pos}
                onClick={() => {
                  handleSelectFabrics(item);
                }}
              >
                <Element size='70px' valuee={item.icon} />
                <Typography>{item.price}€</Typography>
              </Box>
            )
          })

        )}

      </Box>

      <div style={{ marginTop: "60px" }}>
        <Button
          onClick={() => {
            dispatch(addProductToCart(selectedFabrics));
            dispatch(
              updateSuccessNotification(
                i18n.t("notifications.success.updateCart")
              )
            );
            setSelectedFabrics([])
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
