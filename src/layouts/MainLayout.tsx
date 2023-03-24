
import MenuBar from "../presentional/MenuBar";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material"
import Label from "../assets/images/label.png";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

export const MainLayout = (props: any) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  const navigate = useNavigate()
  return (
    <>
      {!mobile ?
        <Container maxWidth="xl">
          <Box
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            width='250px'
            height='250px'
            style={{
              cursor: "pointer",
              position: "absolute",
              marginLeft: "-22px",
              top: -22,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Label})`,
              backgroundSize: "100%",
            }}
          ></Box></Container> : <></>}
      <MenuBar />
      {props.children}
    </>
  );
};
