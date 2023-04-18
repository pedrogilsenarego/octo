import { Grid } from "@mui/material";
import Pantone, { PantoneProps } from "./Pantone";
import Carousel from "./Carousel";


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
      <Carousel thirdRow={thirdRow} gap={5} rgb={[210, 229, 0]} padding={0.07} />
    </div>
  );
};

export default Block;
