import { styled, TextField as MuiTextField } from "@mui/material";
import { Colors } from "../../../constants/pallete";

interface Props {
  maxWidth: string
}

export const TextField = styled(MuiTextField)(({maxWidth}:Props) => ({
  width: "100%",
  backgroundColor: "lightGrey",
  borderRadius: "10px",
  maxWidth: maxWidth || "auto",
  "& .MuiInputBase-input": {
    color: "black",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.ANTHRACITE,
      borderRadius: "12px",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: Colors.BLACKIST_TRANSPARENT,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.NEON_YELLOW,
    },
  },
}));
