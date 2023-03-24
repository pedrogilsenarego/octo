import { Box } from "@mui/material";
import Element from "./Element";

interface Props {
  listFabric: string[];
}

const FabricSelector = ({ listFabric }: Props) => {
  return (
    <Box display='flex' columnGap={1}>
      {listFabric.map((item: string, pos: number) => {
        return (
          <Element pos={pos} item={item} />
        );
      })}
    </Box>
  );
};

export default FabricSelector;
