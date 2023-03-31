import { Box } from "@mui/material";
import { useState } from "react";
import Button from "../../../../../components/Buttons/Button";
import Incrementor from "../../../../../components/Incrementor";
import { i18n } from "../../../../../translations/i18n";
import Element from "./Element"

interface Props {
  listFabric: string[];
}

const FabricSelector = ({ listFabric }: Props) => {
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([])

  const handleSelectFabrics = (fabric: string) => {
    if (selectedFabrics.includes(fabric)) {
      setSelectedFabrics(selectedFabrics.filter((obj) => obj !== fabric))
    }
    else setSelectedFabrics([...selectedFabrics, fabric])
  }
  return (
    <Box >
      <Box display='flex' columnGap={1}>
        {listFabric.map((item: string, pos: number) => {
          return (
            <div key={pos} onClick={() => handleSelectFabrics(item)}>
              <Element size="70px" valuee={item} />
            </div>

          );
        })}
      </Box>
      <Box marginTop="20px" display="flex" flexDirection="column" rowGap={2}>
        {listFabric.map((item: string, pos: number) => {
          if (selectedFabrics.includes(item))
            return (
              <Box display="flex" key={pos} columnGap={2} alignItems="center" style={{ marginLeft: "20px" }}>
                <Element size="30px" valuee={item} />
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
