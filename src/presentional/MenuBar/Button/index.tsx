import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  link?: string;
  setAnchorPopover?: any;
  collection?: boolean;

}

export const Button = ({
  title,
  link,
  setAnchorPopover,
  collection,

}: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <Box
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        if (setAnchorPopover) setAnchorPopover(null)
        if (link) navigate(link);
      }}
    >
      <Typography
        mt='5px'
        color={hover ? Colors.NEON_YELLOW : Colors.PRETTY_CREAM}
        style={{
          cursor: "pointer",
          textTransform: "uppercase",
          fontSize: "20px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Button;
