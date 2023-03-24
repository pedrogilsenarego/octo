import { Button as MuiButton, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallete";



interface Props {
  label: string;
  onClick?: () => void;
  borderRadius?: string;
  children?: JSX.Element;
  borderRadiusRight?: boolean
}

const Button = ({ label, onClick, borderRadius, children, borderRadiusRight }: Props) => {
  return (
    <>
      <MuiButton
        style={{
          boxShadow: "2px 2px 16px 2px #00000066",
          backgroundColor: Colors.BLACKISH,
          color: "white",
          borderRadius: borderRadius && !borderRadiusRight ? borderRadius || "40px" : "default",
          borderBottomRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          borderTopRightRadius: borderRadiusRight ? borderRadius || "40px" : "default",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
        onClick={onClick}
      >
        {children}
        <Typography
          style={{
            fontSize: "12px",
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

export default Button;
