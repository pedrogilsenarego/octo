import { Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";

interface Props {
  title: string;
}

export const Button = ({ title }: Props) => {

  const [hover, setHover] = useState<boolean>(false)
  return (

    <Typography
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      mt="5px"
      color={hover ? "#ffffffE6" : Colors.PRETTY_CREAM}
      style={{ textTransform: "uppercase", fontSize: "20px", fontFamily: "Avalanche", cursor: "pointer" }}
    >
      {title}
    </Typography>

  );
};

export default Button;
