import { useState } from "react"

import { Ellipsis } from "react-spinners-css";

import "./index.css"
interface Props {
  item: any
}
const Image = ({ item }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      {imageLoading && (
        <Ellipsis
          size={40}
          color='#ffffff66'
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
        className="imgd"
        onLoad={() => setImageLoading(false)}
        src={item}
        alt=''
        style={{
          opacity: imageLoading ? 0 : 1,
          margin: "-10px",
          height: "200px",
          width: "200px",
          color: "black",
        }}
      />
    </div>
  )
}

export default Image