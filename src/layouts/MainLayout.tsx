import MenuBar from "../presentional/MenuBar";
import { Box, Container, useMediaQuery, useTheme, Grid } from "@mui/material";
import Label from "../assets/images/label.png";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

export const MainLayout = (props: any) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <>
      {!mobile ? (

        <Grid
          container
          display='flex'
          justifyContent='space-between'
          alignItems='start'
          style={{
            top: 0,
            width: "80%",
            marginLeft: "180px",

            position: "absolute",


          }}
        >
          <Grid item>
            <Box
              onClick={() => navigate(ROUTE_PATHS.HOME)}
              width='250px'
              height='250px'
              style={{
                cursor: "pointer",
                marginTop: "-24px",
                marginLeft: "-22px",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${Label})`,
                backgroundSize: "100%",
              }}
            ></Box>
          </Grid>
          <Grid item>
            <MenuBar />
          </Grid>
        </Grid>


      ) : (
        <>
          {" "}
          <MenuBar />
        </>
      )
      }

      {props.children}
    </>
  );
};
