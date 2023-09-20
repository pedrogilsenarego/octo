import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Buttons/Button";
import Incrementor from "../../../components/Incrementor";
import { Colors } from "../../../constants/pallete";
import { clearCart, updateCart } from "../../../slicer/cart/cart.actions";
import { CartProduct } from "../../../slicer/cart/cart.types";
import { State } from "../../../slicer/types";
import { publishableKey } from "../../../stripe/config";
import { i18n } from "../../../translations/i18n";
import Checkout from "./Checkout";
import { getTotalValue } from "./Utils/totalValue";
interface Props {
  closeCart: (signal: boolean) => void;
}
const stripePromise = loadStripe(publishableKey);

const Cart = ({ closeCart }: Props) => {
  const [checkoutInfo, setCheckoutInfo] = useState<boolean>(false);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const discount = null;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Box
      onWheel={handleWheel}
      display="flex"
      flexDirection="column"
      rowGap={mobile ? 0 : 1}
      padding={mobile ? "1rem" : "2rem"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          mb={mobile ? "0px" : "20px"}
          fontSize="2rem"
          fontWeight={800}
          style={{ textTransform: "uppercase" }}
        >
          {i18n.t("cartDrawer.title")}
        </Typography>
        {closeCart && (
          <AiFillCloseSquare
            onClick={() => closeCart(false)}
            className="icon"
            size="2rem"
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
              display="flex"
              columnGap={mobile ? 2 : 4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" columnGap={0.1}>
                <img
                  height="60px"
                  width="60px"
                  src={item.product.icon}
                  alt=""
                />
                <Typography
                  fontSize={mobile ? "0.7rem" : "1rem"}
                  style={{ textTransform: "uppercase" }}
                >
                  {item?.product?.category}-{item?.product?.pattern}
                </Typography>
              </Box>
              <Incrementor
                key={item.product.documentID}
                updateValue={(value: number) => {
                  dispatch(updateCart(value, item.product.documentID));
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

      {!checkoutInfo && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          width="100%"
          mt="10px"
        >
          <Typography
            style={{ textDecoration: discount ? "line-through" : "none" }}
          >
            {i18n.t("cartDrawer.totalPrice")}{" "}
            {getTotalValue(cartProducts).toFixed(1)} €
          </Typography>
          {discount && (
            <>
              <Typography>
                {"Total with discount:"}{" "}
                {(
                  getTotalValue(cartProducts) *
                  ((100 - discount) / 100)
                ).toFixed(1)}{" "}
                €
              </Typography>
              <Typography fontSize="0.6rem">
                * Special discount 10%, Childrens Day
              </Typography>
            </>
          )}
        </Box>
      )}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {checkoutInfo ? (
          <Elements stripe={stripePromise}>
            <Checkout closeCart={closeCart} discount={discount} />
          </Elements>
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
