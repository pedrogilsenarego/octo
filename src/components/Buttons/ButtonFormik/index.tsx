import { Button as MuiButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallete";
import { useFormikContext } from "formik";



interface Props {
  label: string;
  borderRadius?: string;
  children?: JSX.Element;
  borderRadiusRight?: boolean
  disabled?: boolean
  color?: string
  colorHover?: string
}

const ButtonForm = ({ label, borderRadius, children, borderRadiusRight, disabled, color, colorHover }: Props) => {
  const [buttonHover, setButtonHover] = useState<boolean>(false)
  const bgColor = buttonHover ? colorHover : color
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"))
  const { submitForm } = useFormikContext()

  return (
    <>
      <MuiButton

        onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}
        style={{
          boxShadow: "2px 2px 16px 2px #00000066",
          backgroundColor: disabled ? Colors.PRETTY_CREAM : bgColor || Colors.BLACKISH,
          color: "white",
          cursor: disabled ? "default" : "pointer",
          borderRadius: borderRadius && !borderRadiusRight ? borderRadius || "40px" : "default",
          borderBottomRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          borderTopRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
        onClick={submitForm}
      >
        {children}
        <Typography
          style={{
            fontSize: mobile ? "10px" : "12px",
            marginLeft: "10px",
            textTransform: "uppercase",
            letterSpacing: "5px",
            color: "white"
          }}
        >
          {label}
        </Typography>
      </MuiButton>
    </>
  );
};

export default ButtonForm;
