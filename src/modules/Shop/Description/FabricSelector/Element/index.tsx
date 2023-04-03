import { Box } from "@mui/material";
import { Colors } from "../../../../../constants/pallete";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../slicer/types";
import { CartProduct } from "../../../../../slicer/cart/cart.types";

interface Props {
  size: string;
  valuee: string;
  stateHighLightStatus?: boolean;
}

const Element = ({ size, valuee, stateHighLightStatus }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  useEffect(() => {
    setClick(false)
  }, [cartProducts])

  return (
    <Box
      onClick={() => {
        setClick(!click);
      }}
      style={{
        cursor: "pointer",
        height: size,
        width: size,
        border:
          click || stateHighLightStatus
            ? `solid 3px ${Colors.BLACKISH}`
            : `solid 3px ${Colors.PRETTY_CREAM}`,
        borderRadius: "50%",
        backgroundImage: `url(${valuee})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  );
};

export default Element;
