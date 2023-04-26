import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

import { generalConstants } from "../../../constants/general";
import firstCollection from "../../../assets/firstCollection.svg";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { Colors } from "../../../constants/pallete";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollCollections } from "../../../slicer/general/general.actions";
import { State } from "../../../slicer/types";

const Collections = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const vertical = useSelector<State, boolean>((state) => state.general.positionVertical)



  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100vw",
          height: vertical ? "110vh" : "100vh",
          paddingLeft: vertical ? generalConstants.PADDING_MOBILE : generalConstants.PADDING,
          paddingRight: vertical ? generalConstants.PADDING_MOBILE : generalConstants.PADDING,
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
            onClick={() => { navigate(ROUTE_PATHS.COLLECTION); dispatch(setScrollCollections("NEON_YELLOW")) }}
            container
            columnSpacing="5px"
            width='100%'
            style={{ position: "relative", cursor: "pointer", }}
          >
            <img
              draggable={false}
              style={{

                position: "absolute",
                bottom: vertical ? "-12%" : "-26%",
                left: vertical ? "9%" : "8%",
                width: vertical ? "45vw" : "25vw",
                cursor: "pointer",

                objectFit: "cover",
                objectPosition: "center",
              }}
              src={firstCollection}
              alt=''
            />
            <Grid item xs={vertical ? 6 : 3}   >
              <img
                draggable={false}
                style={{
                  borderBottom: vertical ? `solid 20px ${Colors.BLACKISH}` : `solid 60px ${Colors.BLACKISH}`,
                  paddingBottom: "5px",

                  width: "100%",
                  height: vertical ? "30vh" : "60vh",

                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://res.cloudinary.com/daantetcr/image/upload/v1681805638/Octo/collections/Blackish/OCTO_SS23_256a_a2edk9.webp"
                alt=''
              />
            </Grid>
            <Grid item xs={vertical ? 6 : 3}   >
              <img
                draggable={false}
                style={{
                  borderBottom: vertical ? `solid 20px ${Colors.TAUPE}` : `solid 60px ${Colors.TAUPE}`,
                  paddingBottom: "5px",
                  width: "100%",
                  height: vertical ? "30vh" : "60vh",

                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://res.cloudinary.com/daantetcr/image/upload/v1681822112/Octo/collections/Taupe/OCTO_SS23_482a_qhurtx.webp"
                alt=''
              />
            </Grid>{" "}
            <Grid item xs={vertical ? 6 : 3} >
              <img
                draggable={false}
                style={{
                  borderBottom: vertical ? `solid 20px ${Colors.SOFT_PINK}` : `solid 60px ${Colors.SOFT_PINK}`,
                  paddingBottom: "5px",
                  width: "100%",
                  height: vertical ? "30vh" : "60vh",

                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://res.cloudinary.com/daantetcr/image/upload/v1681808237/Octo/collections/SoftPink/OCTO_SS23_606a_bmxgb7.webp"
                alt=''
              />
            </Grid>{" "}
            <Grid item xs={vertical ? 6 : 3}   >
              <img
                draggable={false}
                style={{
                  borderBottom: vertical ? `solid 20px ${Colors.PRETTY_CREAM}` : `solid 60px ${Colors.PRETTY_CREAM}`,
                  paddingBottom: "5px",
                  width: "100%",
                  height: vertical ? "30vh" : "60vh",

                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://res.cloudinary.com/daantetcr/image/upload/v1681821797/Octo/collections/PrettyCream/OCTO_SS23_109a_oz8yqj.webp"
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
    </div>
  );
};

export default Collections;
