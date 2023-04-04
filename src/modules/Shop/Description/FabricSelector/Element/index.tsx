import { Box } from "@mui/material";
import { Colors } from "../../../../../constants/pallete";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../slicer/types";
import { CartProduct } from "../../../../../slicer/cart/cart.types";
import { Ellipsis } from "react-spinners-css";

interface Props {
  size: string;
  valuee: string;
  stateHighLightStatus?: boolean;
}

const Element = ({ size, valuee, stateHighLightStatus }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  useEffect(() => {
    setClick(false);
  }, [cartProducts]);

  return (
    <Box
      onClick={() => {
        setClick(!click);
      }}
      style={{
        cursor: "pointer",
        height: size,
        width: size,
        position: "relative",

        border:
          click || stateHighLightStatus
            ? `solid 3px ${Colors.BLACKISH}`
            : `solid 3px ${Colors.PRETTY_CREAM}`,
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
      <img onLoad={() => setLoading(false)} src={valuee} alt='' height='110%' width='110%' style={{ position: "absolute", top: "-5%", left: "-5%", opacity: loading ? 0 : 1 }} />
    </Box>
  );
};

export default Element;
