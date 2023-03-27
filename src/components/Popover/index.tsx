import * as React from "react";
import Popover from "@mui/material/Popover";
import { Colors } from "../../constants/pallete";

interface Props {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (anchorEl: HTMLButtonElement | null) => any;
  children: JSX.Element;
}

export default function BasicPopover({
  anchorEl,
  setAnchorEl,
  children,
}: Props) {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            padding: "1rem",
            marginTop: "10px",
            backgroundColor: Colors.NEON_YELLOW_TRANSPARENT,
          },
        }}
      >
        {children}
      </Popover>
    </div>
  );
}
