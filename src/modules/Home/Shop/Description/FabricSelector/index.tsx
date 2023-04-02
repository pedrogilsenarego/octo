import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Button from "../../../../../components/Buttons/Button";
import { i18n } from "../../../../../translations/i18n";
import { ProductContext } from "../../ProductContext";
import Element from "./Element";
import { Product, products } from "../../../../../constants/category";

const FabricSelector = () => {
  const { product } = useContext(ProductContext);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  const fabricsAvailable: Product[] = products.filter(
    (category) => category.category === product
  );

  const handleSelectFabrics = (fabric: string) => {
    if (selectedFabrics.includes(fabric)) {
      setSelectedFabrics(selectedFabrics.filter((obj) => obj !== fabric));
    } else setSelectedFabrics([...selectedFabrics, fabric]);
  };
  return (
    <Box>
      <Box display='flex' columnGap={2}>
        {fabricsAvailable.map((item, pos: number) => {
          return (
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems="center"
              rowGap={2}
              key={pos}

              onClick={() => handleSelectFabrics(item.uid)}
            >
              <Element size='70px' valuee={item.icon} />
              <Typography>{item.price} $</Typography>
            </Box>
          );
        })}
      </Box>

      <div style={{ marginTop: "40px" }}>
        <Button
          borderRadiusRight
          label={i18n.t("modules.product.addCart")}
          disabled={selectedFabrics.length <= 0}
        />
      </div>
    </Box>
  );
};

export default FabricSelector;
