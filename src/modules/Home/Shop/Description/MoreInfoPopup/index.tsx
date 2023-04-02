import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import Button from "../../../../../components/Buttons/Button"
import { Product, products } from "../../../../../constants/category"
import { Colors } from "../../../../../constants/pallete"
import { i18n } from "../../../../../translations/i18n"
import { ProductContext } from "../../ProductContext"
import Carrousell from "./Carousell"

const MoreInfoPopup = () => {
  const { product } = useContext(ProductContext)

  const productsAvailable: Product[] = products.filter((category) => category.category === product);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={0.5}>

      {productsAvailable.map((item, pos) => {
        return (
          <Box key={pos} width="100%" style={{ height: "353px", display: "flex", border: `solid 2px ${Colors.BLACKISH}` }}>
            <Carrousell images={item.images} />
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="40%" rowGap={1.5}>
              <img src={item.icon} alt={item.uid} style={{ height: "100px", width: "100px", objectFit: "cover" }} />
              <Typography>{item.price} $</Typography>
              <Button label={i18n.t("modules.product.addCart")} />
              <Typography>{i18n.t("modules.product.moreInfo")}</Typography>
            </Box>
          </Box>
        )
      })}

    </Box>
  )
}

export default MoreInfoPopup