import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  link?: string;
  setAnchorPopover?: any;
  onClick?: any

}

export const Button = ({
  title,
  link,
  setAnchorPopover,
  onClick
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
        if (onClick) onClick()
        if (setAnchorPopover) setAnchorPopover(null)
        if (link) navigate(link);
      }}
    >
      <Typography
        mt='5px'
        color={hover ? Colors.NEON_YELLOW : Colors.WHITE_SMUDGE}
        style={{
          fontWeight: 500,
          cursor: "pointer",
          textTransform: "uppercase",
          fontSize: "1rem",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Button;
