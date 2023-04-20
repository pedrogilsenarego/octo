import { Grid } from "@mui/material";
import Pantone, { PantoneProps } from "./Pantone";
import Carousel from "../../../components/Carousel";
import { Colors } from "../../../constants/pallete";


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
      <Carousel images={thirdRow} gap={5} colorBgArrow={Colors.NEON_YELLOW} padding={0.07} heightImage={0.55} />
    </div>
  );
};

export default Block;
