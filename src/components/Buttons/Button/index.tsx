import { Button as MuiButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";



interface Props {
  label: string;
  onClick?: any;
  width?: string
  borderRadius?: string;
  children?: JSX.Element;
  borderRadiusRight?: boolean
  disabled?: boolean
  color?: string
  colorHover?: string
}

const Button = ({ label, onClick, borderRadius, children, borderRadiusRight, width, disabled, color, colorHover }: Props) => {
  const [buttonHover, setButtonHover] = useState<boolean>(false)
  const bgColor = buttonHover ? colorHover : color
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))

  return (
    <>
      <MuiButton
        onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}
        style={{
          width: width || "auto",
          boxShadow: "2px 2px 16px 2px #00000066",
          backgroundColor: disabled ? Colors.PRETTY_CREAM : bgColor || Colors.BLACKISH,
          color: "white",
          cursor: disabled ? "default" : "pointer",
          borderRadius: borderRadius && !borderRadiusRight ? borderRadius || "40px" : "default",
          borderBottomRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          borderTopRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: mobile ? "15px" : "60px",
          paddingRight: mobile ? "15px" : "60px",
        }}
        onClick={() => !disabled && onClick ? onClick() : null}
      >
        {children}
        <Typography
          style={{

            fontSize: mobile ? "10px" : "12px",

            textTransform: "uppercase",
            letterSpacing: mobile ? "2px" : "5px",
            color: "white"
          }}
        >
          {label}
        </Typography>
      </MuiButton>
    </>
  );
};

export default Button;
