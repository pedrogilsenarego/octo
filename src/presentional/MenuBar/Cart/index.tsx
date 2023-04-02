import { Box, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Incrementor from "../../../components/Incrementor";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { CartProduct } from "../../../slicer/cart/cart.types";
import { State } from "../../../slicer/types";
import { i18n } from "../../../translations/i18n";

const Cart = () => {
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <Box onWheel={handleWheel} display="flex" flexDirection="column" rowGap={2} padding="2rem">
      <Typography mb="20px" fontSize="2rem" fontWeight={800}>{i18n.t("cartDrawer.title")}</Typography>

      {cartProducts?.map((item, pos) => {
        return (
          <Box display="flex" columnGap={1} alignItems="center" justifyContent="space-between">
            <Typography key={pos}>
              {categories[item.product.category].title}-
              {fabrics[item.product.pattern].title}
            </Typography><Incrementor initialValue={item.value} />
          </Box>

        );
      })}

      <Divider />
    </Box>
  );
};

export default Cart;
