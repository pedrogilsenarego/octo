import { Divider, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  detail: string | undefined;
}

const Detail = ({ title, detail }: Props) => {
  const [click, setClick] = useState<boolean>(true);
  return (
    <>

      <Typography
        component="div"
        style={{ marginTop: "10px", fontWeight: 800, cursor: "pointer", whiteSpace: "pre-line" }}
        onClick={() => setClick(!click)}

      >
        {title}
      </Typography>
      {click && <Typography style={{ marginTop: "10px" }}>{detail}</Typography>}
    </>
  );
};

export default Detail;
