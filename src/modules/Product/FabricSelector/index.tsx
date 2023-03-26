import { Box } from "@mui/material";
import Element from "../../../presentional/SharedComponents/Element"

interface Props {
  listFabric: string[];
}

const FabricSelector = ({ listFabric }: Props) => {
  return (
    <Box display='flex' columnGap={1}>
      {listFabric.map((item: string, pos: number) => {
        return (
          <div key={pos}>
            <Element size="70px" valuee={item} />
          </div>
        );
      })}
    </Box>
  );
};

export default FabricSelector;
