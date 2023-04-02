import { Box } from "@mui/material";
import { useContext, useState } from "react";
import Button from "../../../../../components/Buttons/Button";
import Incrementor from "../../../../../components/Incrementor";
import { i18n } from "../../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Element from "./Element"
import { Product, products } from "../../../../../constants/category";



const FabricSelector = () => {
  const { product } = useContext(ProductContext)
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([])

  const fabricsAvailable: Product[] = products.filter((category) => category.category === product);


  const handleSelectFabrics = (fabric: string) => {
    if (selectedFabrics.includes(fabric)) {
      setSelectedFabrics(selectedFabrics.filter((obj) => obj !== fabric))
    }
    else setSelectedFabrics([...selectedFabrics, fabric])
  }
  return (
    <Box >
      <Box display='flex' columnGap={1}>
        {fabricsAvailable.map((item, pos: number) => {
          return (
            <div key={pos} onClick={() => handleSelectFabrics(item.uid)}>
              <Element size="70px" valuee={item.icon} />
            </div>

          );
        })}
      </Box>
      <Box marginTop="20px" display="flex" flexDirection="column" rowGap={2}>
        {fabricsAvailable.map((item, pos: number) => {
          if (selectedFabrics.includes(item.uid))
            return (
              <Box display="flex" key={pos} columnGap={2} alignItems="center" style={{ marginLeft: "20px" }}>
                <Element size="30px" valuee={item.icon} />
                <Incrementor minimumOne />
              </Box>

            );
          else return null
        })}
      </Box>
      <div style={{ marginTop: "40px" }}>
        <Button borderRadiusRight label={i18n.t("modules.product.addCart")} disabled={selectedFabrics.length <= 0} />
      </div>
    </Box>

  );
};

export default FabricSelector;
