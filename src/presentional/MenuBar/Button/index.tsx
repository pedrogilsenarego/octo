import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  link?: string;
  setAnchorPopover: any;
  collection?: boolean
}

export const Button = ({ title, link, setAnchorPopover, collection }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  console.log(hover)
  const navigate = useNavigate();
  return (
    <Box
      style={{ cursor: "pointer" }}
      onMouseEnter={(e: any) => {
        setHover(true);
        if (collection) { setAnchorPopover(e.currentTarget) }
        else setAnchorPopover(false)
      }}
      onMouseLeave={() => {
        setHover(false);
        //setTimeout(() => setAnchorPopover(null), 500)
      }}
      onClick={() => {
        if (link) navigate(link);
      }}
    >
      <Typography
        mt='5px'
        color={hover ? Colors.NEON_YELLOW : Colors.PRETTY_CREAM}
        style={{
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
