import { Box } from "@mui/material"
import { Colors } from "../../../constants/pallete"
import { fabrics } from "../../../constants/fabrics"
import { useState } from "react"

interface Props {
  size?: string
  valuee: number
  noClick?: boolean
  stateHighLightStatus?: boolean
}

const Element = ({ size, valuee, noClick, stateHighLightStatus }: Props) => {
  const [click, setClick] = useState<boolean>(false)

  const findElement = () => {
    const result = fabrics[valuee];
    return result?.icon
  }
  return (
    <Box
      onClick={() => !noClick ? setClick(!click) : null}
      style={{
        cursor: "pointer",
        height: size || "default",
        width: size || "100%",
        border: click || stateHighLightStatus ? `solid 3px ${Colors.BLACKISH}` : `solid 3px ${Colors.PRETTY_CREAM}`,
        borderRadius: "50%",
        backgroundImage: `url(${findElement()})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 0px 20px 0px #0000001e",
      }}
    ></Box>
  )
}

export default Element