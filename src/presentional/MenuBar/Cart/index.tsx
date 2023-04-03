import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Buttons/Button";
import Incrementor from "../../../components/Incrementor";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { clearCart } from "../../../slicer/cart/cart.actions";
import { CartProduct } from "../../../slicer/cart/cart.types";
import { State } from "../../../slicer/types";
import { i18n } from "../../../translations/i18n";

const Cart = () => {
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const dispatch = useDispatch();
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <Box
      onWheel={handleWheel}
      display='flex'
      flexDirection='column'
      rowGap={2}
      padding='2rem'
    >
      <Typography mb='20px' fontSize='2rem' fontWeight={800} style={{ textTransform: "uppercase" }}>
        {i18n.t("cartDrawer.title")}
      </Typography>
      {cartProducts.length > 0 ? (
        cartProducts?.map((item, pos) => {
          return (
            <Box
              display='flex'
              columnGap={1}
              alignItems='center'
              justifyContent='space-between'
            >
              <Typography key={pos} style={{ textTransform: "uppercase" }}>
                {categories[item.product.category].title}-
                {fabrics[item.product.pattern].title}
              </Typography>
              <Incrementor initialValue={item.value} />
            </Box>
          );
        })
      ) : (
        <Typography>{i18n.t("cartDrawer.noProducts")}</Typography>
      )}

      <Divider />
      <Button
        colorHover={Colors.NEON_YELLOW_TRANSPARENT}
        label={i18n.t("cartDrawer.clearCart")}
        onClick={() => dispatch(clearCart())}
        disabled={cartProducts.length <= 0}
      />
      <Button
        colorHover={Colors.NEON_YELLOW_TRANSPARENT}
        label={i18n.t("cartDrawer.updateCart")}
        disabled={cartProducts.length <= 0}
      />
    </Box>
  );
};

export default Cart;
