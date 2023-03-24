import { Button as MuiButton, styled } from "@mui/material";
import { Colors } from "../../../constants/pallete";




export const Button = styled(MuiButton)(() => ({
  backgroundColor: Colors.BLACKISH,
  color: "white",
  borderRadius: "40px",
  paddingLeft: "20px",
  paddingRight: "20px",
}));
