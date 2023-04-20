import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Colors } from "../../constants/pallete";

interface Props {
  images: string[];
  colorBgArrow?: string
  gap: number;
  padding: string;
  heightImage: number
  width: string
}

const Carousel = ({ images, colorBgArrow, gap, padding, heightImage, width }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleNextClick = (direction: number) => {
    if (slideIndex === 0 && direction === -1) return
    if (direction === 1 && slideIndex > images.length - 5) return;

    setSlideIndex((prevIndex) => (prevIndex + 1 * direction) % images.length);
  };
  const containerWidth = width;
  const paddingVW = padding
  const containerWidthVW = parseInt(containerWidth, 10) - 2 * parseInt(paddingVW, 10);
  const gapVW = (gap / windowSize.width) * 100;
  const childWidthVW = (containerWidthVW - gapVW * 3) / 4;
  const slideWidthVW = childWidthVW + gapVW;
  const slideWidthPercentage = (slideWidthVW / containerWidthVW) * 100;
  console.log(childWidthVW)
  return (
    <div
      style={{
        width: `${containerWidthVW}vw`,

        overflow: "hidden",
        position: "relative",
      }}
    >
      {images.length > 4 && (
        <>
          <div
            onClick={() => handleNextClick(1)}
            style={{
              zIndex: 1000,
              position: "absolute",
              right: "20px",
              cursor: "pointer",
              top: "50%",
              transform: "translateY(-50%)",
              bottom: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",

              backgroundColor: colorBgArrow || Colors.NEON_YELLOW,
            }}
          >
            {" "}
            <BiRightArrow
              style={{ position: "absolute", left: "9px", top: "7px" }}
              size='1.7rem'
              color={slideIndex !== images.length / 2 ? Colors.BLACKISH : "transparent"}
            />
          </div>
          <div
            onClick={() => handleNextClick(-1)}
            style={{
              zIndex: 1000,
              position: "absolute",
              left: "20px",
              cursor: "pointer",
              top: "50%",
              transform: "translateY(-50%)",
              bottom: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: colorBgArrow || Colors.NEON_YELLOW,
            }}
          >
            <BiLeftArrow
              style={{ position: "absolute", left: "4px", top: "7px" }}
              size='1.7rem'
              color={slideIndex !== 0 ? Colors.BLACKISH : "transparent"}
            />
          </div>
        </>
      )}

      <div
        style={{
          columnGap: "5px",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          transform: `translateX(-${slideIndex * slideWidthPercentage}%)`,

          transition: "transform 0.5s",
        }}
      >
        {images?.map((item: string, pos: number) => {
          return (
            <div
              draggable={false}
              key={pos}
              style={{
                flex: `0 0 ${childWidthVW}vw`,
                overflow: "hidden",
                height: window.innerHeight * heightImage,
              }}
            >
              <img
                draggable={false}
                src={item}
                alt=''
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
