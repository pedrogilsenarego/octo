import { Typography } from "@mui/material";
import { Colors } from "../../../constants/pallete";

interface Props {
  title: string;
}

export const Button = ({ title }: Props) => {
  return (
    <Typography
      color={Colors.PRETTY_CREAM}
      style={{ textTransform: "uppercase", fontWeight: 700, fontSize: "20px", fontFamily: "Avalanche" }}
    >
      {title}
    </Typography>
  );
};

export default Button;
