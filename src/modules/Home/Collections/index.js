import { Box, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallete";
import "./index.css";
import { i18n } from "../../../translations/i18n";
import { generalConstants } from "../../../constants/general";

const Collections = () => {
  const track = document.getElementById("image-track");

  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const prevPercentage = parseFloat(track.dataset.prevPercentage) || 0; // add guard here
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;

    // add guards here to ensure nextPercentage is a valid number
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    if (isNaN(nextPercentage)) return;

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 4000, fill: "forwards" }
      );
    }
  };

  /* -- Had to add extra lines for touch events -- */

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.BLACKISH,
          width: "100vw",
          height: "100vh",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Box
          width='100%'
          height='80vh'
          style={{
            position: "relative",

            overflow: "hidden",
          }}
        >
          <Box id='image-track'>
            <img
              className='image'
              draggable={false}
              src='https://images.unsplash.com/photo-1679025027099-39bbd6cd168d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='image'
              draggable={false}
              src='https://images.unsplash.com/photo-1680122575933-d6e81ac79d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='image'
              draggable={false}
              src='https://plus.unsplash.com/premium_photo-1661963552599-34680420acc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='image'
              draggable={false}
              src='https://plus.unsplash.com/premium_photo-1673624401742-a96945931271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='image'
              draggable={false}
              src='https://images.unsplash.com/photo-1680013995061-2d6d1f3ab417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='image'
              draggable={false}
              src='https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' marginTop='-50px'>
          <Typography
            color={Colors.NEON_YELLOW}
            fontSize='22px'
            style={{ textTransform: "uppercase" }}
          >
            {i18n.t("modules.home.discover")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Collections;
