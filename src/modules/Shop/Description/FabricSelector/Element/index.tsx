import { Box } from "@mui/material";
import { Colors } from "../../../../../constants/pallete";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../slicer/types";
import { CartProduct } from "../../../../../slicer/cart/cart.types";
import { Ellipsis } from "react-spinners-css";
import { ProductContext } from "../../../ProductContext";

interface Props {
  size?: string;
  valuee: string;
  stateHighLightStatus?: boolean;
}

const Element = ({ valuee, stateHighLightStatus }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { product, fabric } =
    useContext(ProductContext);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  useEffect(() => {
    setClick(false);
  }, [cartProducts, product, fabric]);

  return (
    <Box
      onClick={() => {
        setClick(!click);
      }}
      style={{
        cursor: "pointer",
        height: "100%",
        aspectRatio: 1,
        position: "relative",

        border:
          click || stateHighLightStatus
            ? `solid 3px ${Colors.NEON_YELLOW}`
            : `solid 3px transparent`,
        borderRadius: "50%",
      }}
    >
      {loading && (
        <Ellipsis
          size={40}
          color={Colors.NEON_YELLOW}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
      <img
        onLoad={() => setLoading(false)}
        src={valuee}
        alt=''

        style={{
          position: "absolute",
          top: "-2.5%",
          left: "-2.5%",
          width: "105%",
          height: "105%",
          opacity: loading ? 0 : 1,
        }}
      />
    </Box>
  );
};

export default Element;
