import { Divider, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  detail: string;
}

const Detail = ({ title, detail }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <Divider style={{ marginTop: "10px" }} />
      <Typography
        style={{ marginTop: "10px", fontWeight: 800, cursor: "pointer" }}
        onClick={() => setClick(!click)}
      >
        {title}
      </Typography>
      {click && <Typography style={{ marginTop: "10px" }}>{detail}</Typography>}
    </>
  );
};

export default Detail;
