import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

import { generalConstants } from "../../../constants/general";
import teste from "../../../assets/teste.jpeg";
import t1 from "../../../assets/t1.jpeg";
import t2 from "../../../assets/t2.jpeg";
import firstCollection from "../../../assets/firstCollection.svg";
import t5 from "../../../assets/t5.jpeg";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";

const Collections = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate()
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100vw",
          height: "100vh",
          paddingLeft: mobile ? generalConstants.PADDING_MOBILE : generalConstants.PADDING,
          paddingRight: mobile ? generalConstants.PADDING_MOBILE : generalConstants.PADDING,
        }}
      >
        <Box
          style={{

            rowGap: "100px",
            width: "100%",
            height: "35vw",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            onClick={() => navigate(ROUTE_PATHS.COLLECTION)}
            container
            columnSpacing={2}
            width='100%'
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              draggable={false}
              style={{
                position: "absolute",
                bottom: mobile ? "-15%" : "-35%",
                left: mobile ? "13%" : "10%",
                width: mobile ? "45vw" : "500px",
                cursor: "pointer",

                objectFit: "cover",
                objectPosition: "center",
              }}
              src={firstCollection}
              alt=''
            />
            <Grid item xs={6} sm={3}>
              <img
                draggable={false}
                style={{
                  width: "100%",
                  height: mobile ? "25vh" : "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t1}
                alt=''
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img
                draggable={false}
                style={{
                  width: "100%",
                  height: mobile ? "25vh" : "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t2}
                alt=''
              />
            </Grid>{" "}
            <Grid item xs={6} sm={3}>
              <img
                draggable={false}
                style={{
                  width: "100%",
                  height: mobile ? "25vh" : "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={teste}
                alt=''
              />
            </Grid>{" "}
            <Grid item xs={6} sm={3}>
              <img
                draggable={false}
                style={{
                  width: "100%",
                  height: mobile ? "25vh" : "25vw",
                  borderRadius: "1%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={t5}
                alt=''
              />
            </Grid>
          </Grid>
          <Box
            display='flex'
            justifyContent='end'
            flexDirection='row'
            alignItems='center'
            mt='-100px'
            width='100%'
          >

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Collections;
