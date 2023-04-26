import { styled, TextField as MuiTextField } from "@mui/material";
import { Colors } from "../../../constants/pallete";

interface Props {
  maxWidth: string
}

export const TextField = styled(MuiTextField)(({maxWidth}:Props) => ({
  width: "100%",
  backgroundColor: "white",
  borderRadius: "10px",
  maxWidth: maxWidth || "auto",
  "& .MuiInputBase-input": {
    color: "black",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.ANTHRACITE,
      borderRadius: "4px",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: Colors.BLACKIST_TRANSPARENT,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.NEON_YELLOW,
    },
  },
}));
