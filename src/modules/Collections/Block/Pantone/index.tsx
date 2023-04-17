import { Typography } from "@mui/material"
import { Colors } from "../../../../constants/pallete"

export interface PantoneProps {
  title: string;
  pantoneNumber: string
  rgb: [number, number, number]
  cymk: [number, number, number, number]
}

const Pantone = ({ title, rgb, cymk, pantoneNumber }: PantoneProps) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          position: "absolute", bottom: "5%", left: "5%"
        }}
      >

        <Typography style={{
          color: Colors.PURE_GREY,
          textTransform: "uppercase",
          fontSize: "12px",
          paddingTop: "8px",
          paddingBottom: "8px",
          borderTop: `solid 2px ${Colors.PURE_GREY}`,
          borderBottom: `solid 2px ${Colors.PURE_GREY}`,
        }} fontWeight={800}>{title}</Typography>
        <div>
          <Typography
            style={{
              color: Colors.PURE_GREY,
              fontSize: "10px",
              fontWeight: 800
            }}>
            Pantone {pantoneNumber}
          </Typography>
          <Typography
            style={{
              color: Colors.PURE_GREY,
              fontSize: "10px",

            }}>
            <b>R</b> {rgb[0]}&nbsp;&nbsp; <b>G</b> {rgb[1]}&nbsp;&nbsp; <b>B</b> {rgb[2]}
          </Typography>
          <Typography
            style={{
              color: Colors.PURE_GREY,
              fontSize: "10px",

            }}>
            <b>C</b> {cymk[0]} &nbsp;&nbsp; <b>Y</b> {cymk[1]}&nbsp;&nbsp; <b>M</b> {cymk[2]}&nbsp;&nbsp; <b>K</b> {cymk[3]}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Pantone