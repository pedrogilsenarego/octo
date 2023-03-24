import { Box } from "@mui/material"
import { Colors } from "../../../../constants/pallete"
import { Fabrics } from "../../../../constants/fabrics"
import { useState } from "react"

interface Props {
  pos: number
  item: string
}

const Element = ({ pos, item }: Props) => {
  const [click, setClick] = useState<boolean>(false)
  return (
    <Box
      key={pos}
      onClick={() => setClick(!click)}
      style={{
        cursor: "pointer",
        height: "70px",
        width: "70px",
        border: click ? `solid 3px ${Colors.BLACKISH}` : `solid 3px ${Colors.PRETTY_CREAM}`,
        borderRadius: "50%",
        backgroundImage: `url(${Fabrics[item]})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  )
}

export default Element