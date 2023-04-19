import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../constants/pallete";
import { useLocation } from "react-router-dom";
import { BiUpArrow } from "react-icons/bi";
import { ROUTE_PATHS } from "../../constants/routes";
import { CollectionPositions, setScrollCollections } from "../../slicer/general/general.actions";
import { useDispatch } from "react-redux";

const UpScroller = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [hover, setHover] = useState<boolean>(false);
  const location = useLocation()
  const dispatch = useDispatch()

  const handleScrollCollections = (position: CollectionPositions) => {
    dispatch(setScrollCollections(position))
  }

  if (!mobile)
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "fixed",
          zIndex: 1000,
          left: "2.5%",
          top: "92vh",
          width: "35px",
          height: "35px",
          cursor: "pointer"
        }}
      >
        <div style={{ position: "relative" }}>
          {hover && location.pathname === ROUTE_PATHS.COLLECTION && (
            <div style={{
              position: "absolute",
              top: "-210px",
            }}>
              <div
                onClick={() => handleScrollCollections("NEON_YELLOW")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.NEON_YELLOW,

                }}
              ></div>
              <div
                onClick={() => handleScrollCollections("BLACKISH")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.BLACKISH,

                }}
              ></div>
              <div
                onClick={() => handleScrollCollections("SOFT_PINK")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.SOFT_PINK,
                }}
              ></div>
              <div
                onClick={() => handleScrollCollections("ANTHRACITE")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.ANTHRACITE,
                }}
              ></div>
              <div
                onClick={() => handleScrollCollections("TAUPE")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.TAUPE,
                }}
              ></div>
              <div
                onClick={() => handleScrollCollections("PRETTY_CREAM")}
                style={{
                  height: "35px",
                  width: "35px",
                  backgroundColor: Colors.PRETTY_CREAM,
                }}
              ></div>
            </div>
          )}

          <Box
            justifyContent='center'
            display='flex'
            alignItems='center'
            style={{
              border: hover
                ? `solid 2px transparent`
                : `solid 2px ${Colors.BLACKISH}`,
              position: "absolute",
              width: "35px",

              height: "35px",
              cursor: "pointer",
              backgroundColor: !hover ? "transparent" : Colors.BLACKISH,
            }}
            onClick={() => {
              moveTop();
              setHover(false);
            }}
          >
            <BiUpArrow
              color={hover ? Colors.NEON_YELLOW : Colors.BLACKISH}
              size='1rem'
            />
          </Box>
        </div>
      </div>
    );
  else return <></>;
};

export default UpScroller;
