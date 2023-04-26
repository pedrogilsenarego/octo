import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { Category } from "../../../../constants/category";
import { ProductContext } from "../../ProductContext";
import { FabricsType } from "../../../../constants/fabrics";
import { Ellipsis } from "react-spinners-css";
import { Colors } from "../../../../constants/pallete";

interface Props {
  setText: (value: string) => void;
  item: Category | FabricsType;

}

const Element = ({ item, setText }: Props) => {
  const { setPattern, setCategory, pattern, category } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true);



  return (
    <Box
      key={item.title}
      onClick={() => {
        if ("price" in item) {
          setCategory(item.title);
          setPattern(null);
        } else {
          setCategory(null);
          setPattern(item.title);
        }

      }}
      display='flex'
      onLoad={() => setLoading(false)}
      onMouseEnter={() => setText(item.title)}
      onMouseLeave={() => setText("")}
      justifyContent='center'
      alignItems='center'
      style={{
        position: "relative",
        borderRadius: "50%",
        width: "100%",
        border: item.title === ("price" in item ? category : pattern) ? `solid 2px ${Colors.NEON_YELLOW}` : `solid 0px black`,
        boxShadow: "0px 0px 10px 0px #0000001e",
        aspectRatio: 1,
      }}
    >
      {loading && (
        <Ellipsis
          size={30}
          color={Colors.NEON_YELLOW_TRANSPARENT}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
      <img
        src={item.icon}
        alt=''
        style={{
          borderRadius: "50%",
          opacity: loading ? 0 : 1,
          position: "absolute",
          top: category !== null ? "-2.5%" : 0,
          left: category !== null ? "-2.5%" : 0,
          width: category !== null ? "105%" : "100%",
          height: category !== null ? "105%" : "100%",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default Element;
