import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
  const { setFabric, setProduct, fabric, product } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [click, setClick] = useState<boolean>(false)

  useEffect(() => {
    console.log("before")
    setClick(false)
    console.log("here")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click])

  return (
    <Box
      onClick={() => {
        if ("price" in item) {
          setProduct(item.id);
          setFabric(null);
        } else {
          setProduct(null);
          setFabric(item.id);
        }
        setClick(true)
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
        border: click ? `solid 2px ${Colors.NEON_YELLOW}` : `solid 2px transparent}`,
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
          top: product !== null ? "-2.5%" : 0,
          left: product !== null ? "-2.5%" : 0,
          width: product !== null ? "105%" : "100%",
          height: product !== null ? "105%" : "100%",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default Element;
