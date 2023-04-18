import { Grid } from "@mui/material";
import Pantone, { PantoneProps } from "./Pantone";
import { useState } from "react";
import { generalConstants } from "../../../constants/general";

export interface BlockProps {
  pantoneProps: PantoneProps;
  firstRow: [string, string];
  secondRow: {
    image: string;
    jsx: any;
  };
  thirdRow: string[];
}

const Block = ({ pantoneProps, firstRow, secondRow, thirdRow }: BlockProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextClick = (direction: number) => {
    setSlideIndex((prevIndex) => (prevIndex + 1 * direction) % thirdRow.length);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
        width: "100%",
      }}
    >
      <Grid container columnSpacing='5px' style={{}}>
        <Grid
          item
          xs={3}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <Pantone {...pantoneProps} />
        </Grid>
        <Grid
          item
          xs={6}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src={firstRow[0]}
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src={firstRow[1]}
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>

      <Grid container columnSpacing='5px' style={{}}>
        <Grid
          item
          xs={6}
          style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
        >
          <img
            src={secondRow.image}
            alt=''
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Grid>

        <Grid
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {secondRow.jsx}
        </Grid>
      </Grid>
      <div
        style={{
          width: window.innerWidth - 2 * (window.innerWidth * 0.07),

          overflow: "hidden",
          position: "relative",


        }}
      >
        <div
          onClick={() => handleNextClick(1)}
          style={{
            zIndex: 1000,
            position: "absolute",
            right: "20px",
            cursor: "pointer",
            top: "50%",
            transform: "translateY(-50%)",
            bottom: 0,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: `rgb(${pantoneProps.rgb[0]},${pantoneProps.rgb[1]},${pantoneProps.rgb[2]}`,
          }}
        ></div>
        <div
          onClick={() => handleNextClick(-1)}
          style={{
            zIndex: 1000,
            position: "absolute",
            left: "20px",
            cursor: "pointer",
            top: "50%",
            transform: "translateY(-50%)",
            bottom: 0,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: `rgb(${pantoneProps.rgb[0]},${pantoneProps.rgb[1]},${pantoneProps.rgb[2]}`,
          }}
        ></div>
        <div style={{
          columnGap: "5px", position: "relative", display: "flex",
          justifyContent: "flex-start",
          transform: `translateX(-${slideIndex * 25}%)`,
          transition: "transform 0.5s",
        }}>
          {thirdRow?.map((item: string, pos: number) => {
            return (
              <div
                key={pos}
                style={{
                  flex: "0 0 25%",
                  overflow: "hidden",
                  height: window.innerHeight * 0.55,
                }}
              >
                <img
                  src={item}
                  alt=''
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Block;
