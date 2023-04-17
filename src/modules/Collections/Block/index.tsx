import { Grid } from "@mui/material";
import Pantone, { PantoneProps } from "./Pantone";

export interface BlockProps {
  pantoneProps: PantoneProps,
  firstRow: [string, string]
  secondRow: {
    image: string;
    jsx: any
  }
  thirdRow: string[]
}

const Block = ({ pantoneProps, firstRow, secondRow, thirdRow }: BlockProps) => {
  return (
    <div
      style={{

        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
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

        <Grid xs={6}>
          {secondRow.jsx}
        </Grid>
      </Grid>
      <Grid container columnSpacing='5px' style={{}}>
        {thirdRow?.map((item: string, pos: number) => {
          return (
            <Grid
              item
              xs={3}
              key={pos}
              style={{ overflow: "hidden", height: window.innerHeight * 0.55 }}
            >
              <img
                src={item}
                alt=''
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </Grid>
          );
        })}
      </Grid>

      {/* <Typography
    fontSize='10.5vw'
    color={Colors.BLACKISH}
    fontFamily='Avalanche'
    style={{
      zIndex: 1003,
      whiteSpace: "pre-line",
      lineHeight: "16.5vh",

    }}
  >
    {i18n.t("modules.collections.title")}
  </Typography> */}
    </div>
  )
}

export default Block