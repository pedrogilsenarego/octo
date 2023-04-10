import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Buttons/Button";
import Incrementor from "../../../components/Incrementor";
import { categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import { Colors } from "../../../constants/pallete";
import { clearCart, updateCart } from "../../../slicer/cart/cart.actions";
import { CartProduct } from "../../../slicer/cart/cart.types";
import { State } from "../../../slicer/types";
import { i18n } from "../../../translations/i18n";
import Checkout from "./Checkout";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
interface Props {
  closeCart?: (signal: boolean) => void;
}

const Cart = ({ closeCart }: Props) => {
  const [checkoutInfo, setCheckoutInfo] = useState<boolean>(false);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const getTotalValue = () => {
    let totalValue = 0;
    for (const cartProduct of cartProducts) {
      totalValue += cartProduct.product.price * cartProduct.value;
    }
    return totalValue;
  };

  return (
    <Box
      onWheel={handleWheel}
      display='flex'
      flexDirection='column'
      rowGap={mobile ? 0 : 1}
      padding={mobile ? "1rem" : "2rem"}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center' >
        <Typography

          mb={mobile ? "0px" : '20px'}
          fontSize='2rem'
          fontWeight={800}
          style={{ textTransform: "uppercase" }}
        >
          {i18n.t("cartDrawer.title")}
        </Typography>
        {closeCart && (
          <AiFillCloseSquare
            onClick={() => closeCart(false)}
            className='icon'
            size='2rem'
            color={Colors.BLACKISH}
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>
      {cartProducts.length > 0 ? (
        cartProducts?.map((item, pos) => {
          return (
            <Box
              key={pos}
              display='flex'
              columnGap={mobile ? 2 : 4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Box display='flex' alignItems='center' columnGap={0.1}>
                <img
                  height='60px'
                  width='60px'
                  src={item.product.icon}
                  alt=''
                />
                <Typography
                  fontSize={mobile ? "0.7rem" : "1rem"}
                  style={{ textTransform: "uppercase" }}
                >
                  {categories[item.product.category].title}-
                  {fabrics[item.product.pattern].title}
                </Typography>
              </Box>
              <Incrementor
                key={item.product.uid}
                updateValue={(value: number) => {
                  dispatch(updateCart(value, item.product.uid));
                }}
                initialValue={item.value}
              />
            </Box>
          );
        })
      ) : (
        <Typography>{i18n.t("cartDrawer.noProducts")}</Typography>
      )}

      <Divider />
      <Box display='flex' justifyContent='end' width='100%' mt='10px'>
        <Typography>
          {i18n.t("cartDrawer.totalPrice")} {getTotalValue()} €
        </Typography>
      </Box>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {checkoutInfo ? (
          <Checkout />
        ) : (
          <>
            <Button
              colorHover={Colors.NEON_YELLOW_TRANSPARENT}
              label={i18n.t("cartDrawer.clearCart")}
              onClick={() => dispatch(clearCart())}
              disabled={cartProducts.length <= 0}
            />
            <Button
              onClick={() => setCheckoutInfo(true)}
              color={Colors.SOFT_PINK}
              colorHover={Colors.NEON_YELLOW_TRANSPARENT}
              label={i18n.t("cartDrawer.checkout")}
              disabled={cartProducts.length <= 0}
            />
          </>
        )}
      </div>
    </Box>
  );
};

export default Cart;
