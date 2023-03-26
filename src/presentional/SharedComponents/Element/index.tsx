import { Box } from "@mui/material"
import { Colors } from "../../../constants/pallete"
import { fabrics } from "../../../constants/fabrics"
import { useState } from "react"

interface Props {
  size: string
  valuee: string

}

const Element = ({ size, valuee }: Props) => {
  const [click, setClick] = useState<boolean>(false)

  const findElement = () => {
    const result = fabrics.find(({ value }) => value === valuee);
    return result?.image
  }
  return (
    <Box

      onClick={() => setClick(!click)}
      style={{
        cursor: "pointer",
        height: size,
        width: size,
        border: click ? `solid 3px ${Colors.BLACKISH}` : `solid 3px ${Colors.PRETTY_CREAM}`,
        borderRadius: "50%",
        backgroundImage: `url(${findElement()})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  )
}

export default Element