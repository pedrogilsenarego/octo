import { Box } from "@mui/material"

const Cart = () => {
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <Box onWheel={handleWheel}>
      T</Box>
  )
}

export default Cart