import { Box, Typography } from "@mui/material";
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
  const dispatch = useDispatch()
  const { product, fabric } = useContext(ProductContext);

  const productsAvailable: Product[] = products.filter(
    (value) => value[product !== null ? "category" : "pattern"] === (product !== null ? product : fabric)
  );

  return (
    <Box width='100%' display='flex' flexDirection='column' gap={0.5}>
      {productsAvailable.map((item, pos) => {
        return (
          <Box
            key={pos}
            width='100%'
            style={{
              height: "353px",
              display: "flex",

            }}
          >
            <Carrousell images={item.images} />
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              width='40%'
              rowGap="10px"
            >
              <img
                src={item.icon}
                alt={item.uid}
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
              />

              {fabric !== null && (
                <Typography mt="-20px">{item.price}€</Typography>
              )}

              <Button onClick={() => {
                dispatch(addProductToCart([item]));
                dispatch(
                  updateSuccessNotification(
                    i18n.t("notifications.success.updateCart")
                  )
                );
              }} label={i18n.t("modules.product.addCart")} colorHover={Colors.NEON_YELLOW_TRANSPARENT} />

            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MoreInfoPopup;
