import { styled, TextField as MuiTextField } from "@mui/material";
import { Colors } from "../../../constants/pallete";

interface Props {
  maxWidth?: string
}

export const TextField = styled(MuiTextField)(({maxWidth}:Props) => ({
  width: "100%",
  backgroundColor: Colors.PRETTY_CREAM_TRANSPARENT,
  borderRadius: "4px",
  maxWidth: maxWidth || "auto",
  "& .MuiInputBase-input": {
    color: "black",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.BLACKISH,
      borderRadius: "4px",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: Colors.NEON_YELLOW,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.BLACKISH,
    },
  },
}));
